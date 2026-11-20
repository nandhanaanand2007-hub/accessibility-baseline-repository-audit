# Tests

## Current manual checks

- [ ] `GET /api/health` returns HTTP 200 and `{ "status": "ok" }`.
- [ ] `GET /api/findings` returns five finding records.
- [ ] Findings list has a logical heading and semantic list/table structure when implemented.
- [ ] Every interactive control is keyboard operable and has a visible focus indicator.
- [ ] Screen-reader names describe the purpose of links and buttons.
- [ ] Lighthouse Accessibility report is saved under `docs/evidence/`.

Automated API and browser tests can be added after the team chooses a test framework.
