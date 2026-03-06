import { Elysia } from "elysia";

const APP_NAME = process.env.APP_NAME || "Elysia";
const APP_DESCRIPTION =
  process.env.APP_DESCRIPTION ||
  "Elysia is a web framework for building backend servers with Bun.";

console.log(APP_NAME);
console.log(APP_DESCRIPTION);

const port = process.env.PORT || 3000;
const app = new Elysia().get("/", () => "Hello Elysia").listen(port);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
