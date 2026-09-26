# company

fullstack deterministic company starter, give this to your agents :)

## tools

- clerk
- shadcn/ui
- tailwind css
- lucide react
- next.js + react
- tanstack query
- hono
- postgresql + docker compose
- drizzle orm + drizzle kit
- turborepo
- bun workspaces + runtime
- typescript
- oxlint
- oxfmt

## development

use [bun](https://bun.sh/docs/installation) 1.4.2 (pinned in `package.json`)
for dependencies, scripts, and the app runtime. docker is required for postgres.

```bash
bun install --frozen-lockfile
cp .env.example .env
bun run db:up
bun run db:migrate
bun run db:seed
bun run dev
```

the web app runs at http://localhost:3000, docs at http://localhost:3001,
and the api at http://localhost:3002. see `apps/web/readme.md` for clerk setup.

```bash
bun run build
bun run check-types
bun run lint
bun run format:check
```

workspaces live in `apps/*` and `packages/*`. commit `bun.lock` when dependencies
change. use `bun run --filter web dev` to run one workspace (build its dependencies
first), and `bunx --bun <command>` for one-off tools.
