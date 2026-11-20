# Accessibility Baseline & Repository Architecture Audit

A small monorepo foundation for an accessibility review of a public-service website and a future audit-findings feature.

## Audited website

- **Website:** Coimbatore City Municipal Corporation (CCMC)
- **URL:** https://www.ccmc.gov.in/
- **Review date:** 20 November 2026 (source review)
- **Review method completed here:** public-page text/structure inspection
- **Not yet completed:** Chrome Lighthouse run, keyboard-only interaction test, screen-reader test, and visual contrast inspection

> **Accuracy note:** The items in `docs/ACCESSIBILITY-AUDIT.md` are potential findings from the public page's extracted content. They are not confirmed WCAG failures. Confirm each item in a browser and replace the status/evidence with your own reproducible observations before presenting the audit as final.

## Repository structure

```text
accessibility-repository-audit/
├── client/                         # Browser UI
│   ├── src/
│   └── README.md
├── server/                         # HTTP API and business logic
│   ├── src/
│   └── README.md
├── docs/
│   ├── ACCESSIBILITY-AUDIT.md      # Audit method and findings
│   └── evidence/                   # Lighthouse and manual-test screenshots
├── tests/                          # Test plan and future automated tests
├── accessibility-audit-template.csv
└── README.md
```

## Architecture boundaries

- `client/` owns presentation, navigation, forms, and client-side interaction.
- `server/` owns API endpoints, validation, and business rules.
- `docs/` stores audit decisions, evidence, and architecture notes.
- `tests/` stores API, component, and accessibility test cases.
- The client communicates with the server through HTTP/JSON. It must not access server data storage directly.

## Local setup

This is an intentionally dependency-free starter. It requires Node.js 18 or newer.

1. Install Node.js from https://nodejs.org/.
2. Open a terminal in this repository folder.
3. Start the API: `node server/src/index.js`
4. Open `http://localhost:3000/api/health` to check the API.
5. Open `client/index.html` in a browser for the static client placeholder.

No database, framework, or deployment environment has been selected yet. Those choices should be documented before adding dependencies.

## First vertical feature slice: Audit Findings

1. A reviewer opens the findings page in the client.
2. The client requests `GET /api/findings`.
3. The server returns finding records as JSON.
4. The client displays issue ID, page/component, WCAG reference, severity, status, and remediation.
5. Tests verify the API response and keyboard accessibility of the findings list.

## Audit evidence checklist

- [ ] Lighthouse Accessibility report screenshot saved in `docs/evidence/`
- [ ] Keyboard-only test notes/screenshots saved in `docs/evidence/`
- [ ] Five potential findings reproduced and confirmed (or rejected)
- [x] Source-inspection notes and five candidates documented
- [x] Monorepo directory skeleton created
- [x] Architecture README and first feature slice documented

## Important

A source/text review is not a substitute for Lighthouse or manual testing. Do not claim WCAG conformance based only on this starter report.
