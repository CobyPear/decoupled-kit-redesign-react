import { DrupalState } from "@pantheon-systems/drupal-kit";
import dotenv from "dotenv";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { serve } from "@hono/node-server";

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
  apiBase: process.env.VITE_BACKEND_URL,
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

serve({
  app,
  fetch: app.fetch,
  port: 8000,
});

console.log("🌐 Server running at http://localhost:8000/");
