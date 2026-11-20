# Accessibility Baseline & Repository Architecture Audit

A monorepo foundation for reviewing website accessibility and documenting audit findings.

## Audited Website

- **Website:** Coimbatore City Municipal Corporation (CCMC)
- **URL:** https://www.ccmc.gov.in/
- **Audit date:** 20 November 2026
- **Testing tool:** Google Chrome Lighthouse
- **Lighthouse Accessibility Score:** 76/100

## Accessibility Testing

The website was tested using Lighthouse and keyboard-only navigation.

### Lighthouse Findings

The audit identified the following issues:

1. Images missing alternative text.
2. Links without discernible names.
3. Insufficient color contrast.
4. Iframe without a descriptive title.
5. Incorrect heading hierarchy.

Additional observations included links relying on color and incorrect list structure.

### Keyboard Testing

| Test | Result |
|---|---|
| Tab navigation | Passed |
| Enter key activation | Passed |
| Shift + Tab navigation | Passed |
| Visible keyboard focus | Passed |

See `docs/ACCESSIBILITY-AUDIT.md` for detailed findings and testing observations.

## Repository Structure

```text
accessibility-baseline-repository-audit/
├── client/                         # Frontend application
├── server/                         # Backend and API logic
├── docs/
│   ├── ACCESSIBILITY-AUDIT.md      # Audit report
│   └── lighthouse-accessibility-score.png
├── tests/                           # Testing files
├── README.md
└── accessibility-audit-template.csv
```

## Architecture Boundaries

- **Client:** Handles the user interface and presentation.
- **Server:** Handles API logic and backend operations.
- **Docs:** Stores audit reports and evidence.
- **Tests:** Organises testing-related files.

The client communicates with the server through HTTP/JSON. This separation improves maintainability and organisation.

## Future Improvements

- Fix missing image alternative text.
- Improve link accessibility.
- Improve text and background contrast.
- Add descriptive iframe titles.
- Maintain a logical heading structure.
- Add automated accessibility tests.

## Conclusion

The project establishes a basic monorepo structure and documents accessibility issues identified during the website audit. Lighthouse testing and basic keyboard navigation testing have been completed.

A complete screen-reader audit and further manual accessibility testing remain future improvements.
