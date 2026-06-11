# Join Waitlist Functionality

## Overview

The join waitlist feature allows visitors to express interest in a product before it launches. When a user joins a waitlist, they are added to the newsletter (if not already subscribed) and tagged with a product-specific waitlist tag. Depending on their subscription status, they either receive an immediate acknowledgement email or a deferred one after confirming their email.

## Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         Join Waitlist Flow                              │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌──────────────┐     ┌───────────────────┐     ┌───────────────────┐  │
│  │ WaitlistModal │────>│ /api/join-waitlist│────>│  Buttondown API   │  │
│  │  (Svelte)    │<────│  (+server.ts)     │<────│  (subscribers)    │  │
│  └──────────────┘     └────────┬──────────┘     └───────────────────┘  │
│                                │                                        │
│                                │ (for confirmed users)                  │
│                                ▼                                        │
│                     ┌──────────────────────┐                            │
│                     │ sendWaitlistEmail    │                            │
│                     │ (shared function)    │                            │
│                     └──────────────────────┘                            │
│                                                                         │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │                   Deferred Confirmation Flow                      │  │
│  │                                                                   │  │
│  │  User confirms email ──> Buttondown webhook ──> /api/buttondown  │  │
│  │                              (subscriber.confirmed)               │  │
│  │                                                │                  │  │
│  │                                                ▼                  │  │
│  │                                    sendWaitlistAcknowledgementEmail│  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

## Components

### 1. WaitlistModal (`src/lib/components/WaitlistModal.svelte`)

The UI component that collects user email and optional first name.

**Props:**

- `isOpen` (boolean, bindable) — Controls modal visibility
- `productName` (string) — Display name of the product
- `tag` (string) — The waitlist tag to apply (e.g., `social_engagement_radar_waitlist`)

**State:**

- `email` — User's email input
- `firstName` — Optional first name
- `status` — `'idle' | 'loading' | 'success' | 'error'`
- `errorMessage` — Error message to display on failure
- `successMessage` — Success message from API response

**Behavior:**

1. User enters email and submits form
2. Calls `POST /api/join-waitlist` with `{ email, metadata: { first_name?, pending_waitlists: tag } }`
3. On success, displays the `message` returned from the API
4. On error, displays the error message

### 2. Join Waitlist Endpoint (`src/routes/api/join-waitlist/+server.ts`)

Server-side handler that processes waitlist join requests.

**Request:**

```json
POST /api/join-waitlist
{
  "email": "user@example.com",
  "metadata": {
    "first_name": "John",        // optional
    "pending_waitlists": "social_engagement_radar_waitlist"
  }
}
```

**Response:**

```json
{
	"success": true,
	"message": "You've been added to the waitlist!"
}
```

**Logic Flow:**

```
                    ┌─────────────────────────────┐
                    │  POST /api/join-waitlist    │
                    └──────────────┬──────────────┘
                                   │
                    ┌──────────────▼──────────────┐
                    │  GET subscriber by email    │
                    └──────────────┬──────────────┘
                                   │
              ┌────────────────────┼────────────────────┐
              │                    │                    │
              ▼                    ▼                    ▼
     ┌──────────────┐    ┌──────────────┐    ┌──────────────────┐
     │ Not found    │    │ Found, type  │    │ Found, type      │
     │ (Case A)     │    │ != "regular" │    │ == "regular"     │
     │              │    │ (Case B)     │    │ (Case C)         │
     └──────┬───────┘    └──────┬───────┘    └────────┬─────────┘
            │                   │                     │
            ▼                   ▼                     ▼
   Create subscriber    Store tag in          Check waitlist_ack_sent
   with pending tag     pending_waitlists     ─────────┬──────────
   in metadata          Return "confirm               │
                        email" message          ┌─────┼─────┐
                                                │     │     │
                                                ▼     ▼     ▼
                                           Already  New   Send
                                           → "already  → Add tag
                                           on list"    → Send email
                                                       → "added"
```

#### Case A: New Subscriber

- Creates subscriber with `type: "unactivated"` (default double opt-in)
- Stores waitlist tag in `metadata.pending_waitlists`
- Returns: "Please check your email to confirm your subscription. Once confirmed, you'll be added to the waitlist."

#### Case B: Existing, Not Confirmed

- Subscriber exists but `type !== "regular"` (e.g., `unactivated`)
- Appends waitlist tag to existing `metadata.pending_waitlists` (union, no duplicates)
- Returns: "Please confirm your email subscription. Once confirmed, you'll be added to the waitlist."

#### Case C: Existing, Confirmed

- Subscriber exists with `type === "regular"`
- Checks `metadata.waitlist_ack_sent` for idempotency
  - If tag already acknowledged → Returns: "You're already on this waitlist!"
  - If new tag → Adds tag to subscriber, marks as acknowledged, sends email immediately
- Returns: "You've been added to the waitlist!"

### 3. Buttondown Webhook (`src/routes/api/buttondown/+server.ts`)

Handles `subscriber.confirmed` events from Buttondown when a user verifies their email.

**Security:**

- Verifies HMAC-SHA256 signature using `BUTTONDOWN_WEBHOOK_SIGNING_KEY`
- Uses timing-safe comparison to prevent timing attacks

**Request:**

```
POST /api/buttondown
Headers: X-Buttondown-Signature: sha256=<hex>
Body: { "event_type": "subscriber.confirmed", "data": { "email_address": "..." } }
```

**Logic Flow:**

1. Verify webhook signature
2. Parse payload, extract `event_type`
3. Only process `subscriber.confirmed` events
4. Fetch subscriber by email to read `metadata.pending_waitlists`
5. Filter pending tags to only those not yet acknowledged (idempotency)
6. Add final waitlist tags to subscriber (union/append)
7. Update metadata: mark tags as acknowledged, clear pending
8. Send acknowledgement email via shared function

### 4. Shared Email Function (`src/lib/server/send-waitlist-email.ts`)

Reusable function for sending waitlist acknowledgement emails using a **2-step create-then-send** approach.

**Parameters:**

- `email` — Recipient email address
- `apiKey` — Buttondown API key

**Returns:** `void` (throws on failure)

**Step 1 — Create the email:**

```typescript
POST https://api.buttondown.com/v1/emails
{
  "subject": "You've joined our waitlist!",
  "body": "Hi {{ subscriber.metadata.first_name|default:\"there\" }},\n\nYou've been added to the waitlist for: {{ subscriber.metadata.waitlist_product }}\n\nWe'll notify you as soon as we launch!\n\n— Nick"
}
```

**Step 2 — Send the email:**

```typescript
POST https://api.buttondown.com/v1/subscribers/{email}/emails/{emailId}
{}
```

The email body uses **Django templating** resolved at send time from subscriber metadata:

- `{{ subscriber.metadata.first_name|default:"there" }}` — Resolves to the subscriber's first name, or "there" if not set
- `{{ subscriber.metadata.waitlist_product }}` — Resolves to the product name (e.g., "Social Engagement Radar")

**Important:** Buttondown emails are one-shot sends — once an email is sent, it cannot be reused. Each acknowledgement requires creating a new email and then sending it.

### 5. Waitlist Configuration (`src/lib/config/waitlists.ts`)

Defines canonical waitlist tags and their display labels.

**Tags (canonical, matching Buttondown dashboard):**
| Constant | Tag Value |
|----------|-----------|
| `OPS_PILOT` | `ops_pilot_waitlist` |
| `SOCIAL_ENGAGEMENT_RADAR` | `social_engagement_radar_waitlist` |
| `POLICY_FORGE` | `policy_forge_waitlist` |

**Tag-to-Label Mapping:**
| Tag | Display Label |
|-----|---------------|
| `ops_pilot_waitlist` | OpsPilot |
| `social_engagement_radar_waitlist` | Social Engagement Radar |
| `policy_forge_waitlist` | PolicyForge |

### 6. Metadata Utilities (`src/lib/utils/metadata.ts`)

Helper functions for managing comma-separated metadata fields in Buttondown.

| Function                   | Purpose                                 |
| -------------------------- | --------------------------------------- |
| `parseList(value)`         | Split comma-separated string into array |
| `serializeList(items)`     | Join array into comma-separated string  |
| `union(listA, listB)`      | Combine two arrays, removing duplicates |
| `difference(listA, listB)` | Items in A but not in B                 |
| `isInList(tag, list)`      | Check if tag exists in list             |

## Metadata Schema

Buttondown subscriber metadata uses these fields for waitlist management:

| Field               | Type                     | Purpose                                                           |
| ------------------- | ------------------------ | ----------------------------------------------------------------- |
| `first_name`        | string                   | User's first name for email personalization                       |
| `pending_waitlists` | string (comma-separated) | Waitlist tags awaiting email confirmation                         |
| `waitlist_ack_sent` | string (comma-separated) | Waitlist tags that have been acknowledged (idempotency tracking)  |
| `waitlist_product`  | string                   | Display name of the most recent waitlist (used in email template) |

**Example:**

```json
{
	"first_name": "John",
	"pending_waitlists": "social_engagement_radar_waitlist,ops_pilot_waitlist",
	"waitlist_ack_sent": "policy_forge_waitlist",
	"waitlist_product": "Social Engagement Radar"
}
```

## Scenarios

### Scenario A: New Newsletter Subscriber

1. User clicks "Join waitlist" on a product page
2. Enters email in modal, submits
3. Backend creates subscriber (unactivated, double opt-in)
4. Stores waitlist tag in `metadata.pending_waitlists`
5. Returns: "Please check your email to confirm your subscription..."
6. Buttondown sends verification email
7. User clicks verification link → `subscriber.confirmed` webhook fires
8. Webhook reads `pending_waitlists`, adds final tags, sends acknowledgement email

### Scenario B: Existing, Unconfirmed Subscriber

1. User clicks "Join waitlist" on a product page
2. Enters email (already in system, not confirmed)
3. Backend finds subscriber, appends tag to `pending_waitlists`
4. Returns: "Please confirm your email subscription..."
5. User confirms email → webhook fires
6. Webhook processes pending tags, sends acknowledgement

### Scenario C: Existing, Confirmed Subscriber

1. User clicks "Join waitlist" on a product page
2. Enters email (already confirmed)
3. Backend finds subscriber, checks `waitlist_ack_sent`
4. If new tag: adds tag, sends acknowledgement email immediately
5. Returns: "You've been added to the waitlist!"

### Scenario D: Already Joined Waitlist

1. User clicks "Join waitlist" for a product they're already on
2. Backend finds tag in `waitlist_ack_sent`
3. Returns: "You're already on this waitlist!"
4. No tag update, no email sent

## Environment Variables

| Variable                         | Scope  | Purpose                                              |
| -------------------------------- | ------ | ---------------------------------------------------- |
| `BUTTONDOWN_API_KEY`             | Server | API authentication for all Buttondown operations     |
| `BUTTONDOWN_WEBHOOK_SIGNING_KEY` | Server | HMAC signature verification for webhook authenticity |

## Error Handling

- **API failures**: All Buttondown API calls check response status and return appropriate error messages
- **Email send failures**: Caught and logged, but don't fail the overall request (idempotency already marked)
- **Webhook signature failures**: Return 401 immediately if signature doesn't match
- **Duplicate handling**: `waitlist_ack_sent` metadata prevents duplicate tag additions and emails

## Idempotency

The system is designed to be idempotent:

- Joining the same waitlist multiple times returns "already on this waitlist" after the first join
- Webhook processing filters out already-acknowledged tags
- Email sends are guarded by `waitlist_ack_sent` tracking
