import { serve } from "@hono/node-server";
import { app } from "./app.js";

const server = serve(
  { fetch: app.fetch, port: Number(process.env.PORT ?? 3002) },
  ({ port }) => console.log(`API listening on http://localhost:${port}`),
);

for (const signal of ["SIGINT", "SIGTERM"] as const) {
  process.on(signal, () => server.close());
}
