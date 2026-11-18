# Ticket Owl public website

Version: 0.2.0

Static HTML5 and CSS, served by GitHub Pages. Website only; no application source or credentials.

## Design
Finpage by Azhar Bhagas (https://finpage-template.webflow.io/) is the visual reference for the wide blue hero, floating navigation, large type, and alternating sections. This site uses original HTML/CSS and receipt artwork; it does not contain Finpage source code, text, photographs, or branded assets.

Colors derive from the Ticket Owl brand palette (ink #14213D, amber #F5A524, paper #FFF7E6, teal #1F8A8A); art in assets/ comes from the app's branding assets. Plans (Free/Pro/Max, USD 9.99 per month / USD 99 once, 25/50/unlimited receipts, 10/50/100 AI extractions, 606 TXT for Pro/Max) follow V1 scope C and the Play listing draft and are presented as part of the upcoming Google Play release, not as available now. No public download link (until the Google Play listing is published and verified), cloud receipt backup, testimonials, customer metrics, or official DGII affiliation is claimed. Every page carries a visible EN/ES non-affiliation statement linking to https://dgii.gov.do.

## Publish
Serve main branch root through GitHub Pages. No build dependencies. Increment version.json for each published change. Local preview: python3 -m http.server --bind 127.0.0.1 8768

Version 0.1.5 replaces the feature cards with alternating full-width text/image sections, original phone illustrations, softer gradients, and contact links without displaying the address on the landing page.

Version 0.1.5 adds separate receipt-data layers and staggered viewport entrance animations. Motion is optional, respects OS reduced-motion preferences, and uses no dependencies or tracking. Without JavaScript all content remains visible.

0.1.6: Spanish defaults with saved English/Spanish preference, Avalion Solutions attribution, prominent receipt app mark, one main support CTA, a clearly unavailable Google Play section, and larger desktop/4K typography. Language preference is stored only on explicit selection.

0.1.7: Planned Free/Pro/Max tiers and recurring 10/50/100 AI allowances, QR-first extraction, explicit cloud consent and local OCR fallback. Purchases, cloud AI and 606 TXT are clearly marked as planned.

0.1.8: Rounded plan cards matching the site palette; plan eyebrow simplified to Individual users / Usuarios individuales.

0.1.9: Every plan card explicitly includes unlimited on-device OCR; receipt and AI quotas remain separate.

0.1.10: Centered pricing section with a1,040px card-row maximum and restrained desktop typography, preserving mobile stacking.

0.1.11: Public copy focuses on receipt benefits; removes QR terminology and processing-order descriptions while preserving cloud-upload disclosures.

0.1.12: Release-style customer copy, no prerelease labels or testing reset claims. Download control remains inactive pending verified listing URL; contact-support installation guidance is shown. Copy changes do not implement or activate app features.

0.1.13: Camera-only capture copy; bilingual AI wording now reflects all-tier allowances, one-time Enable AI disclosure, and local OCR fallback. Privacy and terms clarify accepted-image transfer and on-device originals.

0.1.14: Removes the remaining English and Spanish photo-selection claim from the capture feature details; V1 capture uses the camera.

0.1.15: The privacy policy explains that deleting a DGII Scanner account does not cancel Google Play Pro billing, links to Google Play subscription management, and keeps the support deletion path in English and Spanish.

0.1.16: Configures dgii.pcgrid.org as the Pages custom domain with canonical URLs. DNS and TLS must pass before this hostname is treated as live. Clarifies OpenAI safety-log retention separately from response storage, in English and Spanish, with the official data-controls reference.

0.1.17: Discloses Google ML Kit diagnostic/usage metrics separately from on-device receipt processing, in English and Spanish, based on the signed Android SDK inventory and Google documentation. Privacy effective date November2,2026.

0.2.0: Rebrand from DGII Scanner to Ticket Owl (package com.avalion.ticketowl, independent app by Avalion Solutions). New owl mark and palette; EN/ES copy follows V1 scope C and the Play listing draft (Free/Pro/Max plans, email/Google accounts, AI extraction, presented as the upcoming Google Play release); visible non-affiliation statement with link to https://dgii.gov.do on every page; new delete-account.html (EN/ES) for the Google Play account-deletion requirement; privacy.html and terms.html only renamed (content kept as is; prices and allowances match the listing). CNAME changes to app.avalion.com.do: do not merge until the DNS CNAME `app` -> `raptorx.github.io` exists and the Pages custom domain is switched. Language preference key renamed to ticket-owl-site-language.

0.2.0 (update): plans section restored with listing-matched wording after the scope C decision; storage/FAQ copy aligned with the listing. 
