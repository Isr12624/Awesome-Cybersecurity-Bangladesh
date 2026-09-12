# API Documentation

Base URL (local): `http://localhost:3000`

## Endpoints

### GET `/api/companies`
Lists companies with optional filtering.

### GET `/api/universities`
Lists universities and training centers with optional filtering.

### GET `/api/resources`
Lists blogs, tools, and courses with optional filtering.

### GET `/api/search`
Global search across all categories.

### GET `/api/stats`
Returns total entries and category-wise counts.

## Query parameters for list/search endpoints

- `q`: full-text search over name, description, type, location, focus areas
- `type`: exact type filter (case-insensitive)
- `location`: partial match location filter
- `focus`: partial match for focus area

## Example

```bash
curl "http://localhost:3000/api/search?q=penetration&type=Consulting&location=Dhaka"
```
