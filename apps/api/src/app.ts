import { Hono } from "hono";
import { cors } from "hono/cors";

export const app = new Hono()
  .use("*", cors({ origin: process.env.WEB_ORIGIN ?? "http://localhost:3000" }))
  .get("/hello", (c) => c.json({ message: "Hello world!" }));

export type AppType = typeof app;
