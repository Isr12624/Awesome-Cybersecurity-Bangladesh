# Contributing Guide

Thanks for improving the Bangladesh cybersecurity ecosystem data.

## How to contribute

1. Fork the repository and create a branch.
2. Update one or more JSON files in `/data`:
   - `companies.json`
   - `universities.json`
   - `resources.json`
   - `communities.json`
   - `professionals.json`
3. Keep IDs unique and lowercase kebab-case.
4. Ensure each item includes valid `type`, `location`, and `focusAreas` values so filtering works.
5. Run checks locally:

```bash
npm install
npm run lint
npm test
npm run build
```

6. Open a Pull Request with a short summary and source links.

## Content quality checklist

- Use official websites where possible.
- Keep descriptions short and factual.
- Avoid duplicate entries.
- Do not commit credentials, secrets, or private information.
