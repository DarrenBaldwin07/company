# company

fullstack deterministic company starter, give this to your agents :)

## Tools

- Clerk
- shadcn/ui
- Tailwind CSS
- Lucide React
- Next.js + React
- TanStack Query
- Hono
- PostgreSQL + Docker Compose
- Drizzle ORM + Drizzle Kit
- Turborepo
- Bun workspaces + runtime
- TypeScript
- Oxlint
- Oxfmt

## Development

Use [Bun](https://bun.sh/docs/installation) 1.4.2 (pinned in `package.json`)
for dependencies, scripts, and the app runtime. Docker is required for Postgres.

```bash
bun install --frozen-lockfile
cp .env.example .env
bun run db:up
bun run db:migrate
bun run db:seed
bun run dev
```

The web app runs at http://localhost:3000, docs at http://localhost:3001,
and the API at http://localhost:3002. See `apps/web/README.md` for Clerk setup.

```bash
bun run build
bun run check-types
bun run lint
bun run format:check
```

Workspaces live in `apps/*` and `packages/*`. Commit `bun.lock` when dependencies
change. Use `bun run --filter web dev` to run one workspace (build its dependencies
first), and `bunx --bun <command>` for one-off tools.
