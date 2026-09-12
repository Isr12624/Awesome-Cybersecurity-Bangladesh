# Data Schema

All data lives under `/data` in JSON format.

## Shared fields

Most entities include:

- `id` (string, kebab-case, unique in file)
- `name` or `title`
- `description` (string)
- `type` (string)
- `website` (URL string)
- `location` (string)
- `focusAreas` (string[])

## Files

- `data/companies.json`
  - Extra fields: `founded` (number), `employees` (string)
- `data/universities.json`
  - Extra field: `programs` (string[])
- `data/resources.json`
  - Uses `title` instead of `name`
- `data/communities.json`
  - Extra field: `eventFrequency` (string)
- `data/professionals.json`
  - Extra field: `organization` (string)
