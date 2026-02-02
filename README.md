# Nafees Interiors

Marketing site and contact form for Nafees Interiors, built with React, TypeScript, Vite, Tailwind, GSAP, and Nodemailer-backed Express API for form submissions.

## Getting started
```bash
npm install
cp .env.example .env   # fill in SMTP + other vars
npm run server         # starts the contact API (default port 8787)
npm run dev            # starts Vite on http://localhost:5173 with proxy to /api
```

## Production build
```bash
npm run build
```

## Environment
- Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, CONTACT_TO in `.env`.
- `API_PORT` controls the Express API port; `CORS_ORIGIN` sets allowed origins for the form.

## Scripts
- `npm run dev` – Vite dev server
- `npm run server` – Express/Nodemailer contact API
- `npm run dev:all` – run API and Vite together
- `npm run build` – type-check and build production assets
