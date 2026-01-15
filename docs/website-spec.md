# thiruailabs.com — Website Specification

**Version:** 0.1  
**Last Updated:** December 27, 2025  
**Purpose:** Implementation-ready spec for a lightweight Thiru AI Labs “studio wrapper” website.

---

## 1. Purpose & Positioning

### 1.1 Primary purpose

The Thiru AI Labs website is the **company/studio wrapper** around the product portfolio.

It should:

- Present a clean, credible “home” for the studio name
- Route visitors to:
  - The canonical founder publishing hub (`nickthiru.dev`)
  - Individual product sites (as they launch)
- Provide basic trust + legitimacy (especially for B2B)

### 1.2 Relationship to nickthiru.dev

- `nickthiru.dev` = **voice + content engine + canonical posts**
- `thiruailabs.com` = **brand wrapper + product directory + basic company info**

### 1.3 One-sentence positioning

> Thiru AI Labs is the solo AI systems studio of Nick Thiru, building production-grade Agentic AI SaaS products and systems.

---

## 2. Information Architecture

### 2.1 Recommended v1 pages (minimal)

- `/` — Homepage (studio intro + product directory + link to founder hub)
- `/products` — Product directory (current + upcoming)
- `/about` — Studio/about page (who/why/how you work)
- `/contact` — Contact (email + social)
- `/legal/privacy` — Privacy policy
- `/legal/terms` — Terms

### 2.2 Navigation

Right side nav (desktop): Products, About, Contact

Primary CTA button in nav:

- “Visit Nick’s writing →” (to `https://nickthiru.dev/writing`)

---

## 3. Homepage Spec (`/`)

### 3.1 Homepage hero

**Headline:**

> Thiru AI Labs

**Subheadline:**

> A solo AI systems studio building production-grade Agentic AI SaaS products and systems.

**Primary CTA:**

> Explore products → (links to `/products`)

**Secondary CTA:**

> Read Nick’s writing → (links to `https://nickthiru.dev/writing`)

### 3.2 Product preview section

- Show 2–4 product cards:
  - Name
  - One-line description
  - Status badge (Idea / Building / Live)
  - Primary link (product site or waitlist)

### 3.3 “How we build” section (short)

- Systems-first approach
- Production focus (auth, billing, observability, infra)
- Small, focused workflows over generic chatbots

### 3.4 Footer

Links:

- Products
- About
- Contact
- Privacy
- Terms

---

## 4. Products Page Spec (`/products`)

### 4.1 Structure

- Page title: “Products”
- Intro paragraph explaining the portfolio approach
- Sections:
  - “In progress”
  - “Live”
  - “Archived / experiments” (optional)

### 4.2 Product card fields

- Name
- Audience
- Outcome/value prop
- Status
- Link (site, waitlist, or case study)

---

## 5. About Page Spec (`/about`)

### 5.1 Content

- 1–2 paragraphs describing:
  - What Thiru AI Labs is
  - Who it’s for
  - How you work

Include a prominent line:

- “Founder: Nick Thiru” + link to `https://nickthiru.dev/about`

---

## 6. Contact Page Spec (`/contact`)

- Email link (primary)
- Social links (GitHub, LinkedIn, Twitter/X)
- Optional: short “what to contact for” bullets

---

## 7. Design & Brand

### 7.1 Design principles

- Minimal, fast, high trust
- Studio feel (not a content blog)
- Product cards as the main interaction

### 7.2 Visual direction

Keep the aesthetic consistent with `nickthiru.dev`, but slightly more “studio/product”:

- Neutral background
- High-contrast typography
- Subtle accents

---

## 8. Tech & Implementation Notes

### 8.1 Recommended stack

- Framework: SvelteKit
- Deployment: Vercel
- Content: minimal (no blog required)

### 8.2 Release approach

- v1 is intentionally small
- Expand later when:
  - multiple products are live
  - support/legal needs increase
  - you need a clearer company “front door”
