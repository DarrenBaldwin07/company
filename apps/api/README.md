# API

First follow the root README to start Postgres, apply migrations, and seed the
example greeting (`bun run db:up`, `bun run db:migrate`, `bun run db:seed`).
Run `bun run dev` from the repository root to start all apps. The API listens at
http://localhost:3002 and `GET /hello` reads from `@repo/db` and returns
`{ "message": "Hello world!" }`. An unseeded database returns 404.
The web app at http://localhost:3000 calls it using Hono RPC and TanStack Query.

`@repo/api` exports the `AppType` type for RPC clients; import it with `import type`
so server code never enters the browser bundle.

Optional environment variables: `PORT` (default `3002`), `WEB_ORIGIN` (default
`http://localhost:3000`), and `NEXT_PUBLIC_API_URL` in the web app (default
`http://localhost:3002`). Export API variables in your shell; Next.js also supports
`apps/web/.env.local`. Set the public API URL before building the web app.

The database package loads `DATABASE_URL` from the root `.env` or the environment.
Build with `bunx --bun turbo run build --filter=@repo/api`, then run
`bun run --filter @repo/api start`.
Use Bun 1.4.2 as pinned by the workspace.
