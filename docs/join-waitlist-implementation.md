# Join Waitlist Functionality (Brevo)

## Overview

The join waitlist feature allows visitors to express interest in a product before it launches. When a user joins a waitlist, they are added to the newsletter via Brevo's Double Opt-In (DOI) flow. Depending on their subscription status, they either receive an immediate waitlist acknowledgement email or a deferred one after confirming their email.

**Key difference from the previous Buttondown implementation:** State is tracked via **boolean contact attributes** in Brevo (e.g., `WAITLIST_OPSPILOT: true`) rather than metadata strings. A single consolidated email template uses `{% if %}` conditionals to display all joined products.

## Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         Join Waitlist Flow                              │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  ┌──────────────┐     ┌───────────────────┐     ┌───────────────────┐  │
│  │ WaitlistModal │────>│ /api/join-waitlist│────>│  Brevo SDK        │  │
│  │  (Svelte)    │<────│  (+server.ts)     │<────│  (contacts,       │  │
│  └──────────────┘     └───────────────────┘     │   transactional)  │  │
│                                                  └───────────────────┘  │
│                                                                         │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │                   Deferred Confirmation Flow                      │  │
│  │                                                                   │  │
│  │  User confirms email ──> Brevo webhooks (both fire)               │  │
│  │                         (listAddition event)                      │  │
│  │                                                │                  │  │
│  │                    ┌───────────────────────────┤                  │  │
│  │                    ▼                           ▼                  │  │
│  │           nickthiru-dev webhook        thiru-ai-labs webhook      │  │
│  │           (sends welcome email)        (sends waitlist email      │  │
│  │                                     if contact has waitlist attrs)│  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

## Components

### 1. WaitlistModal (`src/lib/components/WaitlistModal.svelte`)

The UI component that collects user email and optional first name.

**Props:**

- `isOpen` (boolean, bindable) — Controls modal visibility
- `productName` (string) — Display name of the product (e.g., "OpsPilot")
- `productId` (string) — Product identifier key (e.g., `ops_pilot`, `social_engagement_radar`, `policyforge`)

**State:**

- `email` — User's email input
- `firstName` — Optional first name
- `status` — `'idle' | 'loading' | 'success' | 'error'`
- `errorMessage` — Error message to display on failure
- `successMessage` — Success message from API response

**Behavior:**

1. User enters email and submits form
2. Calls `POST /api/join-waitlist` with `{ email, product_id, first_name }`
3. On success, displays the `message` returned from the API
4. On error, displays the error message

### 2. Join Waitlist Endpoint (`src/routes/api/join-waitlist/+server.ts`)

Server-side handler that processes waitlist join requests using the Brevo SDK.

**Request:**

```json
POST /api/join-waitlist
{
  "email": "user@example.com",
  "product_id": "ops_pilot",
  "first_name": "John"
}
```

**Response:**

```json
{
	"success": true,
	"message": "Please check your email to confirm your subscription. Once confirmed, you'll be added to the waitlist.",
	"status": "pending_doi" // or "notified" for confirmed users
}
```

**Logic Flow:**

```
                    ┌─────────────────────────────┐
                    │  POST /api/join-waitlist    │
                    └──────────────┬──────────────┘
                                   │
                    ┌──────────────▼──────────────┐
                    │  GET contact by email       │
                    │  (brevoClient.contacts.     │
                    │   getContactInfo)           │
                    └──────────────┬──────────────┘
                                   │
               ┌───────────────────┼───────────────────┐
               │                   │                   │
               ▼                   ▼                   ▼
      ┌──────────────┐    ┌──────────────┐    ┌──────────────────┐
      │ Not found    │    │ Found,       │    │ Found,           │
      │ (Case A)     │    │ DOUBLE_OPT   │    │ DOUBLE_OPT_IN    │
      │              │    │ _IN != true  │    │ == true          │
      │              │    │ (Case B)     │    │ (Case C)         │
      └──────┬───────┘    └──────┬───────┘    └────────┬─────────┘
             │                   │                     │
             ▼                   ▼                     ▼
    Create DOI contact   Set boolean attribute   Add to product list
    with waitlist attr   (idempotent)            Set boolean attribute
    Brevo sends DOI                              Send waitlist email
    email automatically                          (consolidated template)
```

#### Case A: New Contact

- Creates DOI contact via `createDoiContact()` with:
  - Email added to `newsletter_subs` list
  - `FIRSTNAME` attribute set
  - Product boolean attribute set to `true` (e.g., `WAITLIST_OPSPILOT: true`)
- Brevo automatically sends the DOI confirmation email
- Returns: "Please check your email to confirm your subscription. Once confirmed, you'll be added to the waitlist."

#### Case B: Existing, Not Confirmed

- Contact exists but `DOUBLE_OPT_IN !== true`
- Updates contact to set the product boolean attribute to `true` (idempotent)
- Returns: "You're already confirming your email. Once done, you'll be added to the waitlist."

#### Case C: Existing, Confirmed

- Contact exists with `DOUBLE_OPT_IN === true`
- Adds contact to the product-specific waitlist list
- Sets the product boolean attribute to `true` (idempotent)
- Sends waitlist email using the consolidated template with `{% if %}` conditionals
- Returns: "You've joined the waitlist!"

### 3. Brevo Webhook (`src/routes/api/brevo/webhook/+server.ts`)

Handles `listAddition` events from Brevo when a user confirms their email via DOI.

**Two-Webhook Architecture:**

Both thiru-ai-labs and nickthiru.dev have webhooks configured to listen to `list_addition` events on the shared `newsletter_subs` list (ID 11). When a contact confirms their DOI email, **both webhooks fire**. To avoid duplicate welcome emails:

- **nickthiru-dev webhook** handles the welcome email for all newsletter subscribers
- **thiru-ai-labs webhook** only handles waitlist-related emails (when the contact has waitlist boolean attributes set)

**Security:**

- Verifies Bearer token using `BREVO_WEBHOOK_SECRET` environment variable

**Request:**

```
POST /api/brevo/webhook
Headers: Authorization: Bearer <BREVO_WEBHOOK_SECRET>
Body: { "event": "listAddition", "list_id": 123, "email": "user@example.com" }
```

**Logic Flow:**

1. Verify Bearer token
2. Parse payload, extract event type
3. Only process `list_addition` events for the `newsletter_subs` list
4. Fetch contact to read boolean attributes (webhook payload doesn't include them)
5. Check which waitlist boolean attributes are set (`WAITLIST_OPSPILOT`, `WAITLIST_SOCIAL_ENGAGEMENT_RADAR`, `WAITLIST_POLICYFORGE`)
6. If waitlists are pending:
   - Add contact to each product's waitlist list
   - Send consolidated waitlist email with `{% if %}` conditionals for each product
7. If no waitlists pending:
   - Do nothing (welcome email is handled by the nickthiru-dev webhook)

### 4. Brevo SDK Client (`src/lib/server/brevo.ts`)

Centralized Brevo SDK client initialization.

```typescript
import { BrevoClient } from "@getbrevo/brevo";
import { BREVO_API_KEY } from "$env/static/private";

export const brevoClient = new BrevoClient({ apiKey: BREVO_API_KEY });
```

Used by all endpoints for:

- `brevoClient.contacts` — Contact management (create, update, get, add to list)
- `brevoClient.transactionalEmails` — Transactional email sending

### 5. Brevo Error Handling (`src/lib/server/brevo-errors.ts`)

Utility function that converts Brevo SDK errors into HTTP-friendly response objects.

```typescript
import { handleBrevoError } from "$lib/server/brevo-errors";

try {
  await brevoClient.contacts.createDoiContact({ ... });
} catch (error) {
  const { statusCode, message } = handleBrevoError(error);
  return json({ error: message }, { status: statusCode });
}
```

Handles:

- `401` — API key authentication failure
- `429` — Rate limiting (extracts `retry-after` header)
- `400` — Bad request
- `404` — Resource not found
- Other — Passes through status code and message

### 6. Waitlist Configuration (`src/lib/config/waitlists.ts`)

Defines product IDs, Brevo boolean attribute names, and display labels.

**Product Attribute Map:**

| Product ID                | Brevo Boolean Attribute            |
| ------------------------- | ---------------------------------- |
| `ops_pilot`               | `WAITLIST_OPSPILOT`                |
| `social_engagement_radar` | `WAITLIST_SOCIAL_ENGAGEMENT_RADAR` |
| `policyforge`             | `WAITLIST_POLICYFORGE`             |

**Product Labels:**

| Product ID                | Display Label           |
| ------------------------- | ----------------------- |
| `ops_pilot`               | OpsPilot                |
| `social_engagement_radar` | Social Engagement Radar |
| `policyforge`             | PolicyForge             |

**Utility Functions:**

- `getProductAttribute(productId)` — Returns the Brevo boolean attribute name for a product ID
- `getProductLabel(productId)` — Returns the friendly display label for a product ID

### 7. Brevo List IDs Config (`src/lib/config/brevo-lists.ts`)

Stores Brevo list IDs (updated after running the provisioning script).

```typescript
export const BREVO_LIST_IDS = {
  newsletter_subs: 1, // Newsletter subscribers (DOI confirmed)
  waitlist_ops_pilot: 2, // OpsPilot waitlist
  waitlist_social_engagement_radar: 3, // Social Engagement Radar waitlist
  waitlist_policyforge: 4, // PolicyForge waitlist
} as const;
```

### 8. Brevo Email Template IDs Config (`src/lib/config/brevo-email-templates.ts`)

Stores Brevo email template IDs (updated after running the provisioning script).

```typescript
export const BREVO_TEMPLATE_IDS = {
  newsletter_verify: 1, // DOI confirmation email
  welcome: 2, // Welcome after verification (no waitlists joined)
  waitlist_joined: 3, // Consolidated waitlist joined email (all scenarios)
} as const;
```

## Brevo Contact Attributes

### Custom Attributes (Boolean Type)

| Attribute Name                     | Type    | Purpose                                      |
| ---------------------------------- | ------- | -------------------------------------------- |
| `WAITLIST_OPSPILOT`                | boolean | User joined OpsPilot waitlist                |
| `WAITLIST_SOCIAL_ENGAGEMENT_RADAR` | boolean | User joined Social Engagement Radar waitlist |
| `WAITLIST_POLICYFORGE`             | boolean | User joined PolicyForge waitlist             |

**Important:** Boolean attributes are used instead of multiple-choice attributes because Brevo's template language cannot render multiple-choice attribute values in email templates.

### Default Attributes (Auto-Created by Brevo)

- `EMAIL` — Contact's email address
- `FIRSTNAME` — Contact's first name
- `DOUBLE_OPT_IN` — Whether confirmed via DOI (Brevo manages this automatically)

## Email Templates

### Template #1: "Newsletter Verify" (DOI Confirmation)

- **Trigger:** Automatically sent by Brevo when `createDoiContact()` is called
- **Variables:** `{{ params.redirectionUrl }}` (link to redirect after confirmation)
- **Note:** Can be customized in Brevo Settings → Double Opt-In

### Template #2: "Welcome Email"

- **Trigger:** Sent by the **nickthiru-dev webhook** when user confirms DOI (not by thiru-ai-labs webhook)
- **Variables:** `{{contact.FIRSTNAME}}` (fallback handled in backend)

### Template #3: "Waitlist Joined" (Consolidated)

- **Trigger:** Used for **both** scenarios:
  1. Webhook handler when user confirms DOI (has pending waitlist joins)
  2. API call when confirmed user joins a waitlist (immediate)
- **Variables:** `{{params.first_name}}`, `{{params.joined_ops_pilot}}`, `{{params.joined_social_engagement_radar}}`, `{{params.joined_policyforge}}`
- **Template syntax:** Uses `{% if %}` conditionals to display only joined products

```html
Hi {{params.first_name}},

You've been added to the waitlist for:
{% if params.joined_ops_pilot %}• OpsPilot{% endif %}
{% if params.joined_social_engagement_radar %}• Social Engagement Radar{% endif %}
{% if params.joined_policyforge %}• PolicyForge{% endif %}

We'll notify you as soon as we launch!

— Nick
```

## Scenarios

### Scenario A: New Newsletter Subscriber

1. User clicks "Join waitlist" on a product page
2. Enters email in modal, submits
3. Backend creates DOI contact via Brevo SDK
4. Sets `FIRSTNAME` and product boolean attribute (e.g., `WAITLIST_OPSPILOT: true`)
5. Brevo sends DOI confirmation email automatically
6. Returns: "Please check your email to confirm your subscription..."
7. User clicks verification link → Brevo fires `listAddition` webhook
8. Webhook reads boolean attributes, adds to product list, sends waitlist email

### Scenario B: Existing, Unconfirmed Subscriber

1. User clicks "Join waitlist" on a product page
2. Enters email (already in Brevo, not confirmed)
3. Backend finds contact, sets product boolean attribute to `true`
4. Returns: "You're already confirming your email. Once done, you'll be added to the waitlist."
5. User confirms email → webhook fires
6. Webhook processes boolean attributes, sends waitlist email

### Scenario C: Existing, Confirmed Subscriber

1. User clicks "Join waitlist" on a product page
2. Enters email (already confirmed via DOI)
3. Backend finds contact, adds to product waitlist list
4. Sets product boolean attribute to `true` (idempotent)
5. Sends waitlist email immediately using consolidated template
6. Returns: "You've been added to the waitlist!"

### Scenario D: Already Joined Waitlist

1. User clicks "Join waitlist" for a product they're already on
2. Backend sets boolean attribute (already `true`, no change)
3. Sends waitlist email (template shows the product)
4. Returns: "You've joined the waitlist!"

**Note:** Unlike the Buttondown implementation, there is no explicit "already on this waitlist" check. The boolean attribute approach is idempotent — setting `true` when already `true` is a no-op.

## Environment Variables

| Variable               | Scope         | Purpose                                         |
| ---------------------- | ------------- | ----------------------------------------------- |
| `BREVO_API_KEY`        | Server        | API authentication for all Brevo SDK operations |
| `BREVO_WEBHOOK_SECRET` | Server        | Bearer token for webhook verification           |
| `PUBLIC_URL`           | Server/Client | Base URL for DOI redirection                    |

## Developer Setup

### Prerequisites

1. Brevo account with API key (from Settings → SMTP & API)
2. Sender domain verified in Brevo
3. `@getbrevo/brevo` SDK installed (`npm install @getbrevo/brevo`)

### Step 1: Configure Environment Variables

Create or update `.env` in the `website/` directory:

```env
# Required: Brevo API key
BREVO_API_KEY=xkeysib-your_api_key_here

# Required: Bearer token for webhook verification
# Generate a strong random string: openssl rand -hex 32
BREVO_WEBHOOK_SECRET=your_webhook_secret_here

# Required: Public URL (used for DOI redirection and production webhook)
PUBLIC_URL=https://yoursite.com

# Optional: ngrok URL for local webhook testing
# If set, a development webhook will be created alongside the production one
# BREVO_WEBHOOK_DEV_URL=https://abc123.ngrok-free.app
```

### Step 2: Run Provisioning Script

Create Brevo assets (lists, templates, attributes, and optionally webhooks) by running:

```bash
cd website
BREVO_API_KEY=xkeysib-your_api_key_here \
BREVO_WEBHOOK_SECRET=your_webhook_secret_here \
PUBLIC_URL=https://yoursite.com \
npx tsx scripts/provision-brevo-assets.ts
```

The script performs a **defensive check**:

- If an asset exists, it logs the ID and skips creation
- If an asset doesn't exist, it creates it and logs the ID

**Skip creation:** If you've manually created assets in Brevo, set the corresponding flag to skip:

```bash
CREATE_ATTRIBUTES=false CREATE_LISTS=false CREATE_TEMPLATES=false CREATE_WEBHOOKS=false npx tsx scripts/provision-brevo-assets.ts
```

When skipped, the script outputs placeholder IDs (`0`) — you'll need to manually set the real IDs in the config files.

**Output example (with webhooks):**

```
🚀 Starting Brevo asset provisioning...

─── Contact Attributes ───
🆕 Created attribute "WAITLIST_OPSPILOT" (boolean)
🆕 Created attribute "WAITLIST_SOCIAL_ENGAGEMENT_RADAR" (boolean)
🆕 Created attribute "WAITLIST_POLICYFORGE" (boolean)

─── Lists ───
🆕 Created list "Newsletter Subscribers" (ID: 123)
🆕 Created list "OpsPilot Waitlist" (ID: 124)
🆕 Created list "Social Engagement Radar Waitlist" (ID: 125)
🆕 Created list "PolicyForge Waitlist" (ID: 126)

─── Email Templates ───
🆕 Created template "Newsletter Verify" (ID: 1)
🆕 Created template "Welcome Email" (ID: 2)
🆕 Created template "Waitlist Joined" (ID: 3)

─── Webhooks ───
🆕 Created webhook "Production" (ID: 456, URL: https://yoursite.com/api/brevo/webhook)

═══════════════════════════════════════════════════════════
📋 Update your config files with these IDs:
═══════════════════════════════════════════════════════════

// website/src/lib/config/brevo-lists.ts
export const BREVO_LIST_IDS = { ... } as const;

// website/src/lib/config/brevo-email-templates.ts
export const BREVO_TEMPLATE_IDS = { ... } as const;

// Webhooks created:
//   Production: ID 456
// Verify webhooks in Brevo dashboard → Settings → Webhooks

✅ Provisioning complete!
```

**Output example (with CREATE_ATTRIBUTES=false):**

```
─── Contact Attributes ───
⚠️  Attribute creation skipped (CREATE_ATTRIBUTES=false)
   Manually create attributes in Brevo dashboard:
   WAITLIST_OPSPILOT, WAITLIST_SOCIAL_ENGAGEMENT_RADAR, WAITLIST_POLICYFORGE (boolean type)
```

**Output example (with CREATE_LISTS=false):**

```
─── Lists ───
⚠️  List creation skipped (CREATE_LISTS=false)
   Manually create lists in Brevo dashboard, then set IDs in:
   src/lib/config/brevo-lists.ts

// website/src/lib/config/brevo-lists.ts
export const BREVO_LIST_IDS = {
  "newsletter_subs": 0,
  "waitlist_ops_pilot": 0,
  "waitlist_social_engagement_radar": 0,
  "waitlist_policyforge": 0
} as const;
```

**Output example (with CREATE_TEMPLATES=false):**

```
─── Email Templates ───
⚠️  Template creation skipped (CREATE_TEMPLATES=false)
   Manually create templates in Brevo dashboard, then set IDs in:
   src/lib/config/brevo-email-templates.ts

// website/src/lib/config/brevo-email-templates.ts
export const BREVO_TEMPLATE_IDS = {
  "newsletter_verify": 0,
  "welcome": 0,
  "waitlist_joined": 0
} as const;
```

**Output example (with CREATE_WEBHOOKS=false):**

```
─── Webhooks ───
⚠️  Webhook creation skipped (CREATE_WEBHOOKS=false)
   Manually create webhooks in Brevo dashboard, then configure:
   - URL: https://yoursite.com/api/brevo/webhook
   - Event: listAddition (marketing webhook)
   - Authentication: Bearer token (BREVO_WEBHOOK_SECRET)
```

**Output example (without webhook URLs configured):**

```
─── Webhooks ───
⚠️  No webhook URLs configured — skipping webhook creation
   Set BREVO_WEBHOOK_DEV_URL and/or PUBLIC_URL in .env to create webhooks
```

### Step 3: Update Config Files

Copy the output IDs into the config files:

**`src/lib/config/brevo-lists.ts`:**

```typescript
export const BREVO_LIST_IDS = {
  newsletter_subs: 123,
  waitlist_ops_pilot: 124,
  waitlist_social_engagement_radar: 125,
  waitlist_policyforge: 126,
} as const;
```

**`src/lib/config/brevo-email-templates.ts`:**

```typescript
export const BREVO_TEMPLATE_IDS = {
  newsletter_verify: 1,
  welcome: 2,
  waitlist_joined: 3,
} as const;
```

### Step 4: Configure Brevo Webhook

**Two-Webhook Architecture:**

Both thiru-ai-labs and nickthiru.dev share the same `newsletter_subs` list (ID 11). Each project has its own webhook configured in Brevo:

| Webhook           | Purpose                                   | URL                                             |
| ----------------- | ----------------------------------------- | ----------------------------------------------- |
| **nickthiru-dev** | Sends welcome email for all subscribers   | `https://nickthiru.dev/api/brevo/webhook`       |
| **thiru-ai-labs** | Sends waitlist email for waitlist joiners | `https://www.thiruailabs.com/api/brevo/webhook` |

Both webhooks listen to `list_addition` events on the `newsletter_subs` list. When a contact confirms their DOI email, **both webhooks fire**. The thiru-ai-labs webhook only sends emails when the contact has waitlist boolean attributes set, avoiding duplicate welcome emails.

**Option A: Automated (Recommended)**

If you set `PUBLIC_URL` (and optionally `BREVO_WEBHOOK_DEV_URL`) before running the provisioning script, webhooks are created automatically with Bearer token authentication.

**Development Webhook (Optional):**

| Webhook         | Purpose                 | URL Source                         |
| --------------- | ----------------------- | ---------------------------------- |
| **Development** | Local testing via ngrok | `BREVO_WEBHOOK_DEV_URL` (optional) |

Both development and production webhooks use the same `BREVO_WEBHOOK_SECRET` for Bearer token authentication. Brevo delivers events to both, so you can test locally without affecting production.

**Option B: Manual (Fallback)**

If automated webhook creation fails or you prefer manual control:

1. Go to Brevo dashboard → Settings → Webhooks
2. Create a new **Marketing Webhook**
3. Configure:
   - **URL:** `https://www.thiruailabs.com/api/brevo/webhook`
   - **Event:** `listAddition` (contact added to list)
   - **Authentication:** Bearer token (set to your `BREVO_WEBHOOK_SECRET`)
4. Save and test

**For local testing with ngrok:**

1. Start ngrok: `ngrok http 5173`
2. Copy the ngrok URL (e.g., `https://abc123.ngrok-free.app`)
3. Create a second webhook in Brevo with that URL
4. Both webhooks can coexist — Brevo delivers to both

### Step 5: Update Email Templates with Branded HTML

The provisioning script creates templates with placeholder HTML. To update with branded styling:

1. Edit `scripts/provision-brevo-assets.ts` and update the `htmlContent` for each template
2. Re-run the provisioning script — it will detect existing templates and log their IDs (no duplicates created)
3. To update existing templates, modify the script to use `updateSmtpTemplate()` instead of `createSmtpTemplate()`

## Error Handling

- **API failures:** All Brevo SDK calls are wrapped with `handleBrevoError()` which maps SDK errors to HTTP status codes and messages
- **Email send failures:** Caught and logged, but don't fail the overall request (boolean attributes are already set)
- **Webhook signature failures:** Return 401 immediately if Bearer token doesn't match
- **Idempotency:** Boolean attributes are idempotent — setting `true` when already `true` is a no-op

## Key Files Reference

| File                                                                                    | Purpose                          |
| --------------------------------------------------------------------------------------- | -------------------------------- |
| [`src/routes/api/join-waitlist/+server.ts`](../src/routes/api/join-waitlist/+server.ts) | Join waitlist endpoint           |
| [`src/routes/api/subscribe/+server.ts`](../src/routes/api/subscribe/+server.ts)         | Newsletter subscription endpoint |
| [`src/routes/api/brevo/webhook/+server.ts`](../src/routes/api/brevo/webhook/+server.ts) | Brevo DOI confirmation webhook   |
| [`src/lib/server/brevo.ts`](../src/lib/server/brevo.ts)                                 | Brevo SDK client                 |
| [`src/lib/server/brevo-errors.ts`](../src/lib/server/brevo-errors.ts)                   | Error handling utility           |
| [`src/lib/config/waitlists.ts`](../src/lib/config/waitlists.ts)                         | Product ID to attribute mapping  |
| [`src/lib/config/brevo-lists.ts`](../src/lib/config/brevo-lists.ts)                     | Brevo list IDs                   |
| [`src/lib/config/brevo-email-templates.ts`](../src/lib/config/brevo-email-templates.ts) | Brevo template IDs               |
| [`src/lib/components/WaitlistModal.svelte`](../src/lib/components/WaitlistModal.svelte) | Waitlist signup modal            |
| [`scripts/provision-brevo-assets.ts`](../scripts/provision-brevo-assets.ts)             | One-time provisioning script     |
| [`.env.example`](../.env.example)                                                       | Environment variable template    |
| [`plans/brevo/migration-plan.md`](../../plans/brevo/migration-plan.md)                  | Full migration plan              |
