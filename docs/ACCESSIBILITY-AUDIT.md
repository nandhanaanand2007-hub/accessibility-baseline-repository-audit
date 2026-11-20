# Accessibility Baseline & Repository Architecture Audit

## 1. Scope and method

- **Target:** Coimbatore City Municipal Corporation — https://www.ccmc.gov.in/
- **Date of source review:** 20 November 2026
- **Scope:** publicly exposed home-page content and link structure.
- **Method performed:** review of the page's text/structure representation as returned by a public web fetch.
- **Not performed:** Chrome Lighthouse, visual inspection, keyboard interaction, screen-reader testing, mobile/responsive testing, or DOM/ARIA inspection.

The public page contains primary navigation, civic-service links (including Online Tax Payment and Post a Grievance), news items, a weather area, and a footer that repeats many navigation links. The page also exposes a site-upgrade notice. The five entries below are **audit candidates**, not confirmed defects. Their WCAG mapping is a hypothesis to guide manual verification.

## 2. Potential findings to verify

| ID | Candidate / evidence seen in page extraction | Possible WCAG area | Priority | What must be checked before confirming |
|---|---|---|---|---|
| WEB-001 | Many news entries expose the same visible link text, `Read more` (home page news section). | 2.4.4 Link Purpose (In Context) | Medium | Inspect each link's accessible name and surrounding article context. If screen-reader users cannot distinguish destinations, give each link a unique accessible name such as `Read more about [article title]`. |
| WEB-002 | Several image links are represented only as `Image` in the extracted page structure, including repeated logo/banner image links. | 1.1.1 Non-text Content; 2.4.4 | High if meaningful links lack names | Inspect the actual `alt`, accessible name, and destination. Decorative images should have empty alt text; informative images and image links need an appropriate text alternative/name. |
| WEB-003 | The primary navigation appears near the top and a similar full navigation list appears again in the footer. | 2.4.1 Bypass Blocks; 2.4.6 Headings and Labels (review candidate) | Low/Medium | Check for a working skip link, semantic `nav` landmarks with distinct labels, and logical keyboard order. Repeated navigation is not itself a WCAG failure. |
| WEB-004 | A weather area is exposed as an embedded iframe, with weather content and a third-party forecast link. | 2.1.1 Keyboard; 4.1.2 Name, Role, Value | Medium | Tab into and out of the iframe; verify its `title`, focus order, keyboard operability, and whether the embedded provider content is accessible. |
| WEB-005 | Text-size controls are exposed as `+A A -A` in the page representation. | 2.1.1 Keyboard; 4.1.2 Name, Role, Value | Medium | Inspect whether each control is a real button, has a meaningful accessible name, works by keyboard, and communicates the current text-size state if applicable. |

## 3. Evidence references

The public page representation reviewed on 20 November 2026 exposes:

- Primary navigation and civic service links: page lines 41–106.
- Weather area and text-size controls: lines 5–25 and 135–145.
- Main content and news links with repeated `Read more` labels: lines 185–190 and 192–267.
- Repeated footer navigation: lines 277–370.
- Site-upgrade notice: lines 371–374.

Source: https://www.ccmc.gov.in/ (public page text/structure inspection). The extracted representation is not a substitute for inspecting the live DOM or rendered page.

## 4. Manual verification procedure

### Lighthouse

1. Open the site in Google Chrome.
2. Open DevTools with `Ctrl + Shift + I` (or `Fn + F12` on some laptops).
3. Select **Lighthouse**. If it is hidden, open the DevTools `»` overflow menu.
4. Select **Accessibility** and run the report.
5. Save a screenshot showing the score and audit details to `docs/evidence/lighthouse-accessibility.png`.

### Keyboard-only pass

1. Reload the home page and do not use the mouse.
2. Press `Tab` repeatedly; record focus order and whether focus is visible.
3. Use `Shift + Tab` to move backwards.
4. Use `Enter` and `Space` on focused links/buttons.
5. Check that focus can enter and leave the weather iframe and menus without getting trapped.
6. Record the exact element, expected behavior, observed behavior, and screenshot.

### Finding acceptance rule

Change a candidate to **Confirmed** only after reproducing it. If it cannot be reproduced, mark it **Not reproduced** and document the test. Never invent a Lighthouse score or claim that a browser test was run when it was not.

## 5. Remediation priorities

1. Ensure every meaningful image link has a descriptive accessible name; decorative images should not create noisy announcements.
2. Make repeated news links distinguishable in context and in the accessibility tree.
3. Ensure navigation landmarks, skip navigation, and keyboard focus order are clear.
4. Give the weather iframe a descriptive title and verify its embedded controls are keyboard accessible.
5. Implement text-size controls as labelled, keyboard-operable buttons with predictable behavior.

## 6. Architecture decision

The repository separates browser UI (`client`), HTTP/API logic (`server`), audit evidence (`docs`), and quality checks (`tests`). The first vertical feature slice is an Audit Findings list served by `GET /api/findings`. This keeps presentation separate from validation and business rules and gives the team a small end-to-end feature to extend.
