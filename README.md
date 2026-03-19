# B2B Healthcare App

A B2B healthcare management application for tracking patients, reports, and key health metrics across an organization.

## Tech Stack

- **React 18 + TypeScript** — UI and type safety
- **Vite** — build tooling and dev server
- **Tailwind CSS v4** — utility-first styling
- **Recharts** — data visualization
- **React Router DOM** — client-side routing

## Pages

| Route | Description |
|---|---|
| `/` | Login |
| `/dashboard` | KPIs and overview |
| `/analytics` | Charts and metrics |
| `/patients` | Patient listing (grid and list view) |
| `/patients/:id` | Individual patient details (CRUD) |

## Data

All data is currently mocked as static JSON objects located in `src/assets/data/`:

- `patients.json` — patient records
- `patients_reports.json` — associated patient reports

## Development

```bash
npm install
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # Run ESLint
```

## Deployment

Deployed on Vercel. The `vercel.json` at the project root configures SPA routing so all routes are handled client-side.
