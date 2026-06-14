# Thiru AI Labs Website

The official website for Thiru AI Labs — a solo AI systems studio building production-grade agentic AI SaaS products and systems.

## Overview

This is the company front door, providing:

- Clean, credible home for the Thiru AI Labs brand
- Product directory showcasing current and upcoming AI products (OpsPilot, Social Engagement Radar, PolicyForge)
- Newsletter signup via Brevo Double Opt-In (DOI)
- Waitlist management for pre-launch products
- Links to the founder's publishing hub at [nickthiru.dev](https://nickthiru.dev)

## Tech Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/) with Typography and Forms plugins
- **Email Service**: [Brevo](https://www.brevo.com/) via `@getbrevo/brevo` SDK
- **Deployment**: [Vercel](https://vercel.com/) (via `@sveltejs/adapter-vercel`)
- **Testing**: [Vitest](https://vitest.dev/) for unit and component testing
- **Code Quality**: ESLint and Prettier

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```sh
npm install
```

### Environment Variables

Copy the example file and fill in your values:

```sh
cp .env.example .env
```

| Variable                | Required | Purpose                                                                            |
| ----------------------- | -------- | ---------------------------------------------------------------------------------- |
| `BREVO_API_KEY`         | Yes      | Brevo API key (Settings → SMTP & API)                                              |
| `BREVO_WEBHOOK_SECRET`  | Yes      | Bearer token for webhook verification. Generate: `openssl rand -hex 32`            |
| `PUBLIC_URL`            | Yes      | Base URL for DOI redirection and production webhook (e.g., `https://yoursite.com`) |
| `BREVO_WEBHOOK_DEV_URL` | No       | Optional ngrok URL for local webhook testing                                       |

### Brevo Setup (One-Time)

Before the newsletter and waitlist features work, you need to provision Brevo assets:

```sh
cd website
BREVO_API_KEY=xxx BREVO_WEBHOOK_SECRET=xxx PUBLIC_URL=https://yoursite.com npx tsx scripts/provision-brevo-assets.ts
```

The script creates:

- **Contact attributes** (boolean: `WAITLIST_OPSPILOT`, `WAITLIST_SOCIAL_ENGAGEMENT_RADAR`, `WAITLIST_POLICYFORGE`)
- **Lists** (newsletter subscribers + per-product waitlists)
- **Email templates** (DOI confirmation, welcome, waitlist joined) — skip with `CREATE_TEMPLATES=false`
- **Webhooks** (if `PUBLIC_URL` and/or `BREVO_WEBHOOK_DEV_URL` are set)

After running, copy the output IDs into:

- `src/lib/config/brevo-lists.ts`
- `src/lib/config/brevo-email-templates.ts`

**Skip template creation:** If you've manually created templates in Brevo, set `CREATE_TEMPLATES=false` to skip. You'll need to manually set the template IDs in `brevo-email-templates.ts`.

For detailed setup instructions, see [`docs/join-waitlist-implementation.md`](docs/join-waitlist-implementation.md).

### Development

Start the development server:

```sh
npm run dev
```

Or open the app in a new browser tab:

```sh
npm run dev -- --open
```

The site will be available at `http://localhost:5173/`

### Building

Create a production build:

```sh
npm run build
```

Preview the production build:

```sh
npm run preview
```

## Project Structure

```
website/
├── src/
│   ├── routes/
│   │   ├── +layout.svelte              # Main layout with nav and footer
│   │   ├── +page.svelte                # Homepage
│   │   ├── about/                      # About page
│   │   ├── contact/                    # Contact page
│   │   ├── consult/                    # Consult page
│   │   ├── legal/                      # Legal pages (privacy, terms)
│   │   ├── products/                   # Product directory
│   │   │   ├── ops-pilot/
│   │   │   ├── policy-forge/
│   │   │   └── social-engagement-radar/
│   │   └── api/
│   │       ├── subscribe/              # Newsletter DOI signup endpoint
│   │       ├── join-waitlist/          # Waitlist join endpoint
│   │       └── brevo/webhook/          # Brevo listAddition webhook handler
│   ├── lib/
│   │   ├── assets/                     # Static assets (favicon, etc.)
│   │   ├── components/                 # Shared Svelte components
│   │   │   ├── WaitlistModal.svelte    # Waitlist signup modal
│   │   │   ├── ProductCard.svelte      # Product display card
│   │   │   ├── AboutTheFounder.svelte
│   │   │   └── ThemeToggle.svelte
│   │   ├── config/                     # Configuration files
│   │   │   ├── brevo-lists.ts          # Brevo list IDs
│   │   │   ├── brevo-email-templates.ts # Brevo template IDs
│   │   │   ├── waitlists.ts            # Product ID to attribute mapping
│   │   │   └── products.ts             # Product definitions
│   │   ├── server/                     # Server-only utilities
│   │   │   ├── brevo.ts                # Brevo SDK client
│   │   │   └── brevo-errors.ts         # Error handling utility
│   │   └── stores/                     # Svelte stores
│   │       └── theme.ts                # Theme store (light/dark)
│   ├── app.css                         # Global styles
│   ├── app.html                        # HTML template
│   └── app.d.ts                        # Type declarations
├── scripts/
│   └── provision-brevo-assets.ts       # One-time Brevo provisioning script
├── docs/
│   └── join-waitlist-implementation.md # Detailed waitlist/Brevo implementation docs
├── .env.example                        # Environment variable template
└── package.json
```

## Product Listings Architecture

### Single Source of Truth

All product listings across the site are driven by a single config file: [`src/lib/config/products.ts`](src/lib/config/products.ts).

The [`ProductCard`](src/lib/components/ProductCard.svelte) component accepts a `product` prop and renders its data. The home page and products page both consume this config, eliminating hardcoded duplication.

### The `Product` Interface

| Field              | Type    | Purpose                                                                           |
| ------------------ | ------- | --------------------------------------------------------------------------------- |
| `id`               | string  | Unique identifier (used for waitlist tracking)                                    |
| `slug`             | string  | URL path segment — **must match the directory name** under `src/routes/products/` |
| `title`            | string  | Display name                                                                      |
| `status`           | string  | `'Building'`, `'Idea'`, `'Launched'`, or `'Platform Vision'`                      |
| `shortDescription` | string  | Shown on product cards (home + products page)                                     |
| `targetAudience`   | string  | "Who it's for" blurb on product cards                                             |
| `waitlistId`       | string  | Passed to the waitlist modal for tracking                                         |
| `order`            | number  | Display sort order (lower = first)                                                |
| `featured`         | boolean | If `true`, appears on the home page (max 4)                                       |

### How to Add a New Product

1. **Create the product page**: `src/routes/products/<slug>/+page.svelte`
2. **Add an entry to `products.ts`**: Add a new object to the `products` array. Ensure `slug` exactly matches the directory name from step 1.
3. **Set `featured: true`** if the product should appear on the home page.

### How to Remove a Product

1. **Remove the entry** from the `products` array in `products.ts`
2. **Delete the product page directory** (optional, but keeps the repo clean)

### Home Page Product Limit

The home page uses `getFeaturedProducts(4)` which:

- Filters products where `featured === true`
- Sorts by `order` (ascending)
- Returns a maximum of 4 products

### SecureStack Vision Card

The SecureStack roadmap card on the products page is **not** a product entry. It's exported separately as `secureStackVision` in `products.ts` and rendered directly in `src/routes/products/+page.svelte`. To update it, edit the `secureStackVision` object in the config file.

## API Endpoints

| Endpoint             | Method | Purpose                                                                    |
| -------------------- | ------ | -------------------------------------------------------------------------- |
| `/api/subscribe`     | POST   | Newsletter signup via Brevo Double Opt-In                                  |
| `/api/join-waitlist` | POST   | Join a product waitlist (handles new, unconfirmed, and confirmed contacts) |
| `/api/brevo/webhook` | POST   | Brevo webhook handler for `listAddition` events (DOI confirmation)         |

## Key Files

| File                                                                                 | Purpose                                                         |
| ------------------------------------------------------------------------------------ | --------------------------------------------------------------- |
| [`src/lib/config/brevo-lists.ts`](src/lib/config/brevo-lists.ts)                     | Brevo list IDs (updated after provisioning)                     |
| [`src/lib/config/brevo-email-templates.ts`](src/lib/config/brevo-email-templates.ts) | Brevo template IDs (updated after provisioning)                 |
| [`src/lib/config/waitlists.ts`](src/lib/config/waitlists.ts)                         | Product ID to boolean attribute mapping                         |
| [`src/lib/config/products.ts`](src/lib/config/products.ts)                           | Product definitions (ID, name, description)                     |
| [`src/lib/server/brevo.ts`](src/lib/server/brevo.ts)                                 | Brevo SDK client initialization                                 |
| [`src/lib/server/brevo-errors.ts`](src/lib/server/brevo-errors.ts)                   | Error handling utility (maps Brevo errors to HTTP status codes) |
| [`src/lib/components/WaitlistModal.svelte`](src/lib/components/WaitlistModal.svelte) | Waitlist signup modal component                                 |
| [`scripts/provision-brevo-assets.ts`](scripts/provision-brevo-assets.ts)             | One-time provisioning script for Brevo assets                   |

## Design Principles

- **Minimal & Fast**: Clean design with high performance
- **High Trust**: Professional studio feel, not a content blog
- **Product-Focused**: Product cards as the main interaction
- **Consistent Branding**: Aligned with nickthiru.dev aesthetic

## Deployment

This site is configured for deployment on Vercel:

1. Push to your Git repository
2. Import the project in Vercel
3. Set environment variables in Vercel dashboard:
   - `BREVO_API_KEY`
   - `BREVO_WEBHOOK_SECRET`
   - `PUBLIC_URL` (your production URL)
4. Deploy

After deployment, create the Brevo webhook:

- **URL**: `https://yoursite.com/api/brevo/webhook`
- **Event**: `listAddition` (marketing webhook)
- **Authentication**: Bearer token (set to your `BREVO_WEBHOOK_SECRET`)

Alternatively, run the provisioning script with `PUBLIC_URL` set to create the webhook automatically.

## Documentation

- [Join Waitlist Implementation](docs/join-waitlist-implementation.md) — Detailed Brevo implementation, architecture, and developer setup
- [Brevo Migration Plan](../plans/brevo/migration-plan.md) — Full migration plan from Buttondown to Brevo
- [Founder's Hub](https://nickthiru.dev)
- [Website Specification](../docs/thiru-ai-labs/website-spec.md)

## License

© 2026 Thiru AI Labs. All rights reserved.
