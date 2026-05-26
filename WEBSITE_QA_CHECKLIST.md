# INHERIX Website QA Checklist

## Page Completion
- [ ] Home covers hero, about, trust, problem, solution, workflow, dashboard preview, security positioning, and CTA.
- [ ] How It Works covers all five PDF workflow steps and final summary/CTA.
- [ ] Digital Vault covers continuity organization, bank, demat/investment, insurance, property, digital references, family instructions, governance/security, and CTA.
- [ ] Family Access System covers controlled access, no direct access without verification, defined continuity event, private instructions, multi-layer review, family trust, and CTA.
- [ ] Emergency Trigger System covers workflow philosophy, no automatic trigger, admin review, legal claim boundaries, support, audit visibility, trust positioning, and CTA.
- [ ] Security & Compliance covers security philosophy, encryption positioning, consent/RBAC, audit logs, DPDP/IT Act awareness, disclaimer, trust positioning, and CTA.
- [ ] Dashboard Preview includes Admin, Client, and Nominee static mock views.
- [ ] Contact page includes consultation form UI, privacy message, post-submit flow, audience positioning, and CTA.
- [ ] Terms, Privacy, Consent, Data Access, and Legal Disclaimer pages exist.

## Responsive Design
- [ ] Header and mobile navigation work on small screens.
- [ ] Cards, dashboard previews, forms, and legal pages do not overflow on mobile.
- [ ] Text does not overlap or clip inside buttons, cards, status pills, or dashboard panels.

## SEO
- [ ] Every page has unique metadata through `lib/seo.ts`.
- [ ] Each page has one clear H1.
- [ ] Internal links and CTAs are consistent.

## Performance & Accessibility
- [ ] Production build completes.
- [ ] Motion is subtle and does not block content.
- [ ] Buttons, links, and form fields have visible labels or accessible text.
- [ ] Static content remains server-rendered where possible.

## Compliance Wording
- [ ] No banned phrases are used: instant access, guaranteed release, automatic inheritance, immediate transfer, hack-proof, fully secure, military-grade, guaranteed protection.
- [ ] Legal/security claims remain responsible and do not overpromise.
- [ ] Dashboard data is clearly demo-only and non-functional.

## Final Design Review
- [ ] Homepage feels premium within the first screen.
- [ ] Dashboard preview looks client-ready, not like a generic admin template.
- [ ] CTAs are consistent across the site.
- [ ] Animations are subtle and not flashy.
- [ ] Visuals are compared against the uploaded dashboard references.
