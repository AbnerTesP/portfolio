# Portfolio — Abner Gonçalves

Full-stack developer portfolio monorepo.

## Structure

- `frontend/` — Vite + React 19 + TypeScript + Tailwind CSS v4, animated with GSAP (`useGSAP`, ScrollTrigger) and Anime.js v4 (stagger, SVG line drawing, scroll observer).
- `backend/` — Express 5 + TypeScript API with Helmet, strict CORS, rate limiting and Zod-validated contact endpoint.

## Development

```bash
# API (http://localhost:4000)
cd backend && npm install && npm run dev

# Web (http://localhost:5173, proxies /api to the backend)
cd frontend && npm install && npm run dev
```

## Production

```bash
cd backend && npm run build && npm start
cd frontend && npm run build   # outputs to frontend/dist
```

Copy `backend/.env.example` to `backend/.env` and adjust `PORT` / `CORS_ORIGIN`.
