import { DrupalState } from "@pantheon-systems/drupal-kit";
import dotenv from "dotenv";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { serve } from "@hono/node-server";
import { serveStatic } from "@hono/node-server/serve-static";

import process from "node:process";

dotenv.config();

const app = new Hono();

app.use(
  "/api/*",
  cors({
    origin: "*",
  })
);

const store = new DrupalState({
  apiBase:
    process.env.VITE_BACKEND_URL ||
    `https://${process.env.PANTHEON_CMS_ENDPOINT}`,
});

app.route("/api").get("/articles", async (c) => {
  const articles = await store.getObject({
    objectName: "node--article",
    params: "include=field_media_image.field_media_image",
  });
  return c.json(articles, {
    status: 200,
  });
});

app.get("*", serveStatic({ root: "dist" }));

serve({
  app,
  port: process.env.PORT || 8000,
});

console.log(
  `🌐 Server running at http${
    process.env.NODE_ENV === "production" ? "s" : ""
  }://${process.env.PANTHEON_ENVIRONMENT_URL ?? "localhost"}:${
    process.env.PORT ?? 8000
  }/`
);
