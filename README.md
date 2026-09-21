# company

Next.js web app, Hono API with typed RPC, and PostgreSQL with Drizzle.
Use Node 24+, pnpm, and Docker Desktop.

## Local setup

```sh
pnpm install
cp .env.example .env
pnpm db:up
pnpm db:migrate
pnpm db:seed
pnpm dev
```

The web app runs at http://localhost:3000, the example docs app at port 3001,
and the API at http://localhost:3002. `GET /hello` reads the `hello` row from
Postgres and returns `{ "message": "Hello world!" }`. The homepage calls it
through Hono RPC and TanStack Query. An unseeded database returns 404.

## Database ownership

`packages/db` (`@repo/db`) owns the Drizzle schema, connection pool, migrations,
and seed. Both the API and Next.js server code can import it:

```ts
import { getDb } from "@repo/db";

const greetings = await getDb().query.greetings.findMany();
```

Use this only in server-side code (API handlers, Server Components, Route Handlers,
or Server Actions). Browser components use Hono RPC. The database entry point is
disabled for browser resolution, and `DATABASE_URL` must never be a `NEXT_PUBLIC_`
variable. Queries in Next.js need request-time rendering when they shouldn't run
during a static build.

The database package loads the root `.env`; exported environment variables take
priority. Its connection pool is created on first use and reused across development
reloads. Root `pnpm dev` builds workspace dependencies before starting consumers
and watches the database package for changes.

## Schema changes

1. Edit `packages/db/src/schema.ts`.
2. Run `pnpm db:generate` and review the generated SQL.
3. Commit the schema and `packages/db/drizzle/` migration files together.
4. Run `pnpm db:migrate` to apply migrations.

`pnpm db:seed` inserts the example greeting without overwriting existing data;
it is safe to repeat. `pnpm db:studio` opens Drizzle Studio.
Migrations and seeding are explicit commands, separate from application startup.

`pnpm db:down` stops Postgres while preserving its named volume. Compose binds
Postgres to localhost:5433 and uses development-only credentials from
`.env.example`. For deployment, provide a production `DATABASE_URL` and run
migrations once as a deployment step. Build with `pnpm build`; the database
package's compiled `dist/` files must be included with deployed consumers.
