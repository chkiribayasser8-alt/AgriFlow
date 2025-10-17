# AgriFlow API

NestJS backend application providing the AgriFlow API.

## Running locally

```bash
npm install
npm run db:migrate --workspace apps/api
npm run start:dev --workspace apps/api
```

The health check endpoint is available at `GET /health/ping`.
