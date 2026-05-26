# INHERIX Website File Guide

This guide explains the project structure for future agents or developers. The current scope is website-only: premium public website plus static dashboard-preview mockup. Do not add backend, login, OTP, database, real document upload, AWS, signed URLs, real nominee requests, or real release logic in this phase.

## App Entry Files

- `app/layout.tsx`
  - Root layout for the full site.
  - Loads global font, header, footer, and global metadata defaults.

- `app/globals.css`
  - Global Tailwind styles and custom motion utilities.
  - Contains premium grid background, hero aurora, floating animation, line drawing animation, pulse animation, and base page styling.
  - Edit this file for global visual polish, motion timing, backgrounds, and shared CSS effects.

- `app/page.tsx`
  - Home page.
  - Contains the main homepage hero, trust section, problem/solution sections, workflow, dashboard preview, and CTA.
  - If the homepage first screen needs redesign, start here and `components/sections/PageHero.tsx` if the change should also affect inner pages.

## Route Pages

- `app/how-it-works/page.tsx`
  - Renders the How It Works page from structured content.

- `app/digital-vault/page.tsx`
  - Renders the Digital Vault page from structured content.

- `app/family-access-system/page.tsx`
  - Renders the Family Access page from structured content.

- `app/emergency-trigger-system/page.tsx`
  - Renders the Emergency Trigger page from structured content.

- `app/security-compliance/page.tsx`
  - Renders the Security & Compliance page from structured content.

- `app/dashboard-preview/page.tsx`
  - Dashboard preview page.
  - Uses `PageHero` with dashboard-specific hero visual, then renders the interactive static dashboard preview.

- `app/contact/page.tsx`
  - Contact / Consultation page.
  - Includes consultation hero, frontend-only form UI, post-submit flow, audience badges, and CTA.

- Legal pages:
  - `app/terms/page.tsx`
  - `app/privacy-policy/page.tsx`
  - `app/consent-policy/page.tsx`
  - `app/data-access-policy/page.tsx`
  - `app/legal-disclaimer/page.tsx`
  - All legal pages use `components/sections/LegalPage.tsx` and content from `content/legal.ts`.

## Content Files

- `content/site.ts`
  - Main structured website copy from the PDF.
  - Defines homepage copy and all marketing pages: How It Works, Digital Vault, Family Access, Emergency Trigger, Security & Compliance.
  - Future agents should edit page copy and section content here, not directly inside route files.

- `content/dashboard.ts`
  - Static dashboard-preview mock data.
  - Contains Admin, Client, Nominee metrics, request lists, activity lists, workflow stages, and demo-only notice.
  - Keep all data sample/demo-only.

- `content/legal.ts`
  - Legal/governance page copy.
  - Includes Terms, Privacy, Consent, Data Access, and Legal Disclaimer sections.

- `content/navigation.ts`
  - Header and footer navigation links.

- `content/compliance.ts`
  - PDF wording blacklist and approved tone terms.
  - Use this as a reference when adding new copy.

## Shared UI Components

- `components/ui/Button.tsx`
  - Shared button/link component with primary, secondary, and ghost styles.

- `components/ui/Card.tsx`
  - Shared card container.

- `components/ui/Badge.tsx`
  - Small status/eyebrow badge component.

- `components/ui/Container.tsx`
  - Shared max-width page container.

- `components/ui/Input.tsx`
  - Form input and select components.

- `components/ui/SectionHeader.tsx`
  - Section heading block.

- `components/ui/StatusPill.tsx`
  - Request/status badge used inside dashboard mockups.

## Section Components

- `components/sections/SiteHeader.tsx`
  - Premium sticky header and mobile menu.
  - Edit here for navigation polish, active states, CTA placement, and responsive header behavior.

- `components/sections/SiteFooter.tsx`
  - Footer with navigation and governance links.

- `components/sections/PageHero.tsx`
  - Main reusable hero for inner pages.
  - Important: this now supports page-specific visuals through the `visual` prop:
    - `workflow`
    - `vault`
    - `family`
    - `emergency`
    - `security`
    - `dashboard`
    - `contact`
    - `legal`
  - If inner pages look too similar, improve or add visual variants here.

- `components/sections/MarketingPage.tsx`
  - Curated renderer for structured marketing pages.
  - Uses page-specific layouts instead of repeating one card pattern on every page.
  - Current page treatments:
    - How It Works: editorial lead plus dark workflow timeline.
    - Digital Vault: editorial lead plus vault category bento.
    - Family Access: editorial lead plus governance access panel and policy rows.
    - Emergency Trigger: editorial lead plus controlled review queue.
    - Security & Compliance: editorial lead plus control matrix and legal boundary strip.
  - Future agents should add new page-specific treatments here when a page starts feeling duplicated.

- `components/sections/LegalPage.tsx`
  - Generic renderer for legal/governance pages.

- `components/sections/CtaBand.tsx`
  - Shared final CTA band.

- `components/sections/ProcessFlow.tsx`
  - Dark process-flow section used on homepage.

- `components/sections/FeatureGrid.tsx`
  - Older reusable feature grid still used on homepage.
  - Consider replacing homepage feature grids with richer visual sections in future refinements.

- `components/sections/MotionReveal.tsx`
  - Framer Motion wrapper. Currently defaults visible to avoid washed-out first paint.

## Dashboard Preview Components

- `components/dashboard-preview/DashboardPreview.tsx`
  - Main dashboard preview section with role tabs and workflow strip.
  - Use this for dashboard-preview page and homepage dashboard-preview block.

- `components/dashboard-preview/DashboardShell.tsx`
  - Shared dashboard frame with sidebar, topbar, metrics, and content area.

- `components/dashboard-preview/AdminDashboard.tsx`
  - Admin mock dashboard: metrics, clients by status, trigger overview, recent requests.

- `components/dashboard-preview/ClientDashboard.tsx`
  - Client mock dashboard: documents, categories, recent activity.

- `components/dashboard-preview/NomineeDashboard.tsx`
  - Nominee mock dashboard: requests and released items.

## Configuration

- `lib/seo.ts`
  - Shared SEO metadata generator.

- `next.config.ts`
  - Next.js config.
  - Uses `.next-prod` as build output directory to avoid stale local `.next` cache issues.

- `tailwind.config.ts`
  - Tailwind design tokens for colors, shadows, and font.

- `package.json`
  - Dependencies and scripts:
    - `npm.cmd run dev`
    - `npm.cmd run build`
    - `npm.cmd run start`

## Assets

- `public/dashboard-references/`
  - Contains the client-provided dashboard reference images copied from `Design/`.
  - Use only as reference or approved assets.

- `public/images/`
  - Approved brand/logo/visual assets.
  - `inherix-symbol.png` is the client-provided INHERIX symbol used in the premium header.

## QA Files

- `WEBSITE_QA_CHECKLIST.md`
  - Website completion, responsive, SEO, performance, accessibility, compliance, and design review checklist.

## Design Rules For Future Agents

- Do not make pages look identical.
- Each page needs a specific visual metaphor:
  - How It Works: workflow/process map.
  - Digital Vault: document/vault/category architecture.
  - Family Access: relationship and permission graph.
  - Emergency Trigger: review stages and proof timeline.
  - Security: layered governance/control architecture.
  - Dashboard Preview: product UI and role-based command center.
  - Contact: consultation form and coordination flow.
  - Legal: policy/governance framework.
- Avoid empty desktop whitespace.
- Avoid low-contrast text on colored panels.
- Avoid generic admin-template dashboards.
- Keep the tone calm, institutional, verification-oriented, and governance-focused.
- Never imply real document access or real release actions in the website-only phase.
