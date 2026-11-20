# Server

Owns HTTP endpoints, request validation, and business rules. The current dependency-free Node.js server exposes:

- `GET /api/health` — health check.
- `GET /api/findings` — starter audit-finding records.

Run from the repository root with `node server/src/index.js` (Node.js 18+).
