# Accessibility Baseline & Repository Architecture Audit

## 1. Project Overview

- **Website audited:** Coimbatore City Municipal Corporation
- **Website URL:** https://www.ccmc.gov.in/
- **Audit date:** 20 November 2026
- **Testing tool:** Google Chrome Lighthouse
- **Testing configuration:** Accessibility, Desktop, Navigation

## 2. Lighthouse Accessibility Results

The website received an accessibility score of **76/100** in the Lighthouse audit.

The following accessibility issues were observed:

| No. | Accessibility issue | Observed evidence |
|---|---|---|
| 1 | Images do not have alternative text | 15 image elements reported without alt attributes |
| 2 | Links do not have discernible names | 3 links reported |
| 3 | Insufficient color contrast | Lighthouse reported contrast failures |
| 4 | Iframe does not have a title | 1 iframe reported without a title |
| 5 | Heading elements are not in sequential order | An h4 heading was shown as an example |

### Additional Lighthouse observations

- Some links rely only on color to be distinguishable.
- Some lists contain elements that do not follow the expected list structure.

## 3. Why These Issues Matter

1. **Missing alternative text:** Screen-reader users may not understand the purpose or content of meaningful images.
2. **Links without discernible names:** Users relying on assistive technology may not understand where a link leads.
3. **Insufficient color contrast:** Users with low vision may find text difficult to read.
4. **Iframe without a title:** Users may not understand the purpose of the embedded content.
5. **Incorrect heading order:** A confusing heading hierarchy can make page navigation harder for assistive technology users.

## 4. Manual Keyboard Accessibility Testing

Keyboard-only testing was performed on the website.

| Test | Result | Observation |
|---|---|---|
| Tab navigation | Passed | Focus moved to interactive elements |
| Enter key | Passed | Activated the A/A+ text-size controls |
| Shift + Tab | Passed | Moved focus to the previous element |
| Visible keyboard focus | Passed | Focused elements were visibly highlighted |

**Note:** The keyboard tests above cover the interactions described. A complete keyboard audit of every page element and embedded content was not performed.

## 5. Recommended Improvements

1. Add appropriate alt attributes to meaningful images. Use empty alt text for decorative images.
2. Provide meaningful accessible names for links.
3. Improve foreground and background color contrast.
4. Add descriptive title attributes to iframes.
5. Maintain a logical heading hierarchy.
6. Use semantic HTML list elements.
7. Make links distinguishable without relying only on color.

## 6. Repository Architecture

The repository follows a modular structure to separate different responsibilities.

```text
accessibility-baseline-repository-audit/
│
├── client/       # Frontend application
├── server/       # Backend and API logic
├── docs/         # Audit report and documentation
├── tests/        # Testing files
│
├── README.md
├── ACCESSIBILITY-AUDIT.md
└── accessibility-audit-template.csv
```

### Architecture explanation

- **Client:** Handles the user interface and presentation.
- **Server:** Handles API logic and backend operations.
- **Docs:** Stores audit findings, evidence, and project documentation.
- **Tests:** Organises test-related files.

This modular structure improves maintainability, organisation, and future scalability.

## 7. Conclusion

The Lighthouse audit identified several accessibility issues, with an overall accessibility score of 75/100. Basic keyboard interactions with the website's text-size controls were also tested successfully.

The audit highlights opportunities to improve accessibility, usability, and the overall website experience.
## 8. Audit Evidence

### Lighthouse Accessibility Score

The website received an accessibility score of 76/100.

![Lighthouse Accessibility Score](lighthouse-accessibility-score.png)
