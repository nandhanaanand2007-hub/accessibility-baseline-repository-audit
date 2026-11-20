# Accessibility Baseline Audit Report

## 1. Audit overview

- **Website:** Coimbatore City Municipal Corporation — https://www.ccmc.gov.in/
- **Tool:** Google Chrome Lighthouse
- **Audit category:** Accessibility
- **Mode:** Navigation
- **Device setting:** Desktop
- **Recorded Lighthouse accessibility score:** **75/100**
- **Audit date:** 20 November 2026
- **Scope:** Automated Lighthouse findings visible in the supplied audit results. Manual keyboard and screen-reader checks are not yet documented.

> Lighthouse automated checks identify a subset of accessibility issues. A score of 75/100 is a baseline measurement, not proof that the entire website is or is not accessible.

## 2. Prioritized findings

### Finding 1 — Images missing alternative text

- **Lighthouse audit:** `Image elements do not have [alt] attributes`
- **Affected elements reported:** 15
- **Priority:** High
- **Why it matters:** Screen-reader users may not receive an accessible name or useful description for informative images.
- **Recommended remediation:** Add concise, meaningful `alt` text to informative images. Use `alt=""` for decorative images so they can be skipped by assistive technology.
- **Evidence:** Lighthouse displayed 15 affected image elements.

### Finding 2 — Links without discernible names

- **Lighthouse audit:** `Links do not have a discernible name`
- **Affected elements reported:** 3
- **Priority:** High
- **Why it matters:** A screen reader may announce a link without explaining its destination or purpose.
- **Recommended remediation:** Give each link an accessible name using descriptive link text, or an appropriate accessible label for icon-only links. Ensure the name communicates the link's purpose.
- **Evidence:** Lighthouse displayed 3 failing elements.

### Finding 3 — Insufficient color contrast

- **Lighthouse audit:** `Background and foreground colors do not have a sufficient contrast ratio`
- **Priority:** High
- **Why it matters:** Text and interface content can be difficult to read for people with low vision or color-vision deficiencies.
- **Recommended remediation:** Adjust foreground and background color combinations to meet WCAG contrast requirements for the relevant text size and component type. Recheck the affected combinations with a contrast checker.
- **Evidence:** This audit appeared as a failing Lighthouse item. The supplied screenshot did not establish a complete affected-element count.

### Finding 4 — iframe missing a title

- **Lighthouse audit:** `<frame> or <iframe> elements do not have a title`
- **Affected elements reported:** 1
- **Priority:** Medium
- **Why it matters:** A descriptive title helps screen-reader users understand the purpose of embedded content.
- **Recommended remediation:** Add a concise, descriptive `title` attribute to the iframe that explains its content or function.
- **Evidence:** Lighthouse displayed 1 affected frame/iframe element.

### Finding 5 — Heading levels are not sequential

- **Lighthouse audit:** `Heading elements are not in a sequentially-descending order`
- **Affected element shown:** `h4`
- **Priority:** Medium
- **Why it matters:** A logical heading hierarchy helps screen-reader users understand page structure and navigate by headings.
- **Recommended remediation:** Organize headings in a logical hierarchy. Do not skip heading levels when moving through the page structure; choose heading levels based on document structure, not visual size alone.
- **Evidence:** Lighthouse showed an `h4` element as a failing element. The screenshot did not establish the total number of affected headings.

## 3. Additional Lighthouse observations

The supplied Lighthouse results also showed these failed audits:

- `Links rely on color to be distinguishable`
- `Lists do not contain only <li> elements and script supporting elements (<script> and <template>)`

These are recorded as additional observations and are not included in the five prioritized findings above.

The Lighthouse results also listed:
- **Best-practice checks shown:** All heading elements contain content; identical links have the same purpose.
- **Manual checks suggested by Lighthouse:** 10 items.
- **Passed audits:** 19.
- **Not applicable:** 35.

## 4. Limitations and next verification steps

1. Save the full Lighthouse report or screenshots as repository evidence.
2. Perform a keyboard-only review using `Tab`, `Shift+Tab`, `Enter`, and `Space`; record focus visibility, order, and whether all interactive controls are reachable.
3. Manually inspect the affected elements and confirm the context before applying fixes.
4. Re-run Lighthouse after remediation and compare the new score and failed audits.
5. Test with a screen reader where possible.

**Important:** This report records the results shared from the Lighthouse run. Keyboard-only testing and manual assistive-technology verification have not yet been completed, so they are not claimed as completed.
