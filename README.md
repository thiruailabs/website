# Thiru AI Labs Website

The official website for Thiru AI Labs - a solo AI systems studio building production-grade agentic micro-SaaS products and automation systems.

## Overview

This is a lightweight studio wrapper website that serves as the company front door, providing:

- Clean, credible home for the Thiru AI Labs brand
- Product directory showcasing current and upcoming AI products
- Links to the founder's publishing hub at [nickthiru.dev](https://nickthiru.dev)
- Basic company information and contact details

## Tech Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/) with Typography and Forms plugins
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
src/
├── routes/
│   ├── +layout.svelte          # Main layout with nav and footer
│   ├── +page.svelte            # Homepage
│   ├── products/               # Products directory page
│   ├── about/                  # About page
│   ├── contact/                # Contact page
│   └── legal/                  # Legal pages (privacy, terms)
├── lib/                        # Shared components and utilities
└── app.html                    # HTML template
```

## Design Principles

- **Minimal & Fast**: Clean design with high performance
- **High Trust**: Professional studio feel, not a content blog
- **Product-Focused**: Product cards as the main interaction
- **Consistent Branding**: Aligned with nickthiru.dev aesthetic

## Deployment

This site is configured for deployment on Vercel:

1. Push to your Git repository
2. Import the project in Vercel
3. Vercel will automatically detect SvelteKit and deploy

Alternatively, you can deploy manually:

```sh
npm run build
vercel deploy
```

## Related Links

- [Founder's Hub](https://nickthiru.dev)
- [Founder's Writing](https://nickthiru.dev/writing)
- [Website Specification](../docs/thiru-ai-labs/website-spec.md)

## License

© 2026 Thiru AI Labs. All rights reserved.

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
