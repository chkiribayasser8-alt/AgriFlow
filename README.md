# AgriFlow

Modern agricultural management platform built with a TypeScript monorepo. This repository is organised into workspaces for the backend API and future frontend applications.

## Getting started

### Prerequisites
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/)
- [VS Code](https://code.visualstudio.com/) with the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers)

### Quick start
1. Clone the repository.
2. Copy `.env.example` to `.env` and adjust the environment variables if needed.
3. Open the project in VS Code and run **Remote-Containers: Reopen in Container**.
4. Inside the container run:
   ```bash
   npm install
   npm run db:migrate
   npm run start:dev
   ```
5. Access the API at `http://localhost:3000/health/ping`.

### Available scripts

At the repository root:

| Command | Description |
| --- | --- |
| `npm run start:dev` | Start the API in watch mode. |
| `npm run db:migrate` | Apply Prisma migrations for the API service. |
| `npm test` | Run unit tests for all workspaces. |
| `npm run test:e2e` | Run end-to-end tests. |
| `npm run lint` | Run ESLint across workspaces. |
| `npm run build` | Build all workspaces. |

### Workspace layout

```
apps/
  api/   # NestJS backend API
  web/   # React web app placeholder
packages/  # Shared packages (future use)
```

## Development environment

The repository ships with a ready-to-use Dev Container definition that provisions:
- Node.js 20
- PostgreSQL 16
- Prisma CLI
- Recommended VS Code extensions (ESLint, Prettier, Prisma)

Run `npm run db:migrate` to set up the database schema after starting the environment.

## Quality

- **Linting & formatting**: ESLint and Prettier with an enforced pre-commit hook (Husky + lint-staged).
- **Testing**: Jest unit tests and Supertest end-to-end tests.
- **CI**: GitHub Actions workflow (`.github/workflows/ci.yml`) runs lint, tests, and build on every push/PR.

## Contributing

This project follows [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).
Please ensure tests and linting pass before pushing changes. See `CONTRIBUTING.md` for more details.
