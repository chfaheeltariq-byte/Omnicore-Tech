# Omnicore Tech

A modern, production-ready company website for Omnicore Tech built with React, Vite, Tailwind CSS, Framer Motion, and an Express + PostgreSQL contact API.

## What is included

- Light-themed landing page with soft gradients, glassmorphism, rounded cards, and subtle motion
- One-time Omnicore loading screen before the website appears
- Separate subpages for all services
- Sticky glass navbar with section jumps and route navigation
- Contact form connected to a backend API
- Basic admin messages page at `/admin/messages`
- PostgreSQL schema for storing contact submissions

## Routes

- `/`
- `/services/pos-systems`
- `/services/erp-solutions`
- `/services/school-management-system`
- `/services/website-development`
- `/services/software-testing`
- `/services/website-enhancement`
- `/services/ai-integration`
- `/admin/messages`

## Run locally

1. Install frontend dependencies:

```bash
npm install
```

2. Install backend dependencies:

```bash
npm install --prefix server
```

3. Create a `.env` file in the project root based on `.env.example`.

4. Create the contact table:

```bash
psql "$DATABASE_URL" -f server/sql/schema.sql
```

5. Start the frontend and backend together:

```bash
npm run dev:full
```

## App URLs

- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:4000`
- Admin page: `http://localhost:5173/admin/messages`

## Production build

```bash
npm run build
```

## API endpoints

- `GET /api/health`
- `POST /api/contact`
- `GET /api/admin/messages`
