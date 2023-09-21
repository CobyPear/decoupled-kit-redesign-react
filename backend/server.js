import { DrupalState } from "@pantheon-systems/drupal-kit";
import dotenv from "dotenv";
import express from "express";
import process from "node:process";
import cors from "cors";
import path from "node:path";
const __dirname = path.dirname(new URL(import.meta.url).pathname);
dotenv.config({
  path: ".env.local",
});

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

const store = new DrupalState({
  apiBase:
    process.env.VITE_BACKEND_URL ||
    `https://${process.env.PANTHEON_CMS_ENDPOINT}`,
});

app.route("/api/articles").get(async (req, res) => {
  const articles = await store.getObject({
    objectName: "node--article",
    params: "include=field_media_image.field_media_image",
  });
  return res.status(200).json(articles);
});

app.use(express.static("dist"));

app.route("*").get(async (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, "..", "dist", "index.html"));
});

app.listen(process.env.PORT ?? 8000, () => {
  console.log(
    `🌐 Server running at http${
      process.env.NODE_ENV === "production" ? "s" : ""
    }://${process.env.HOSTNAME ?? "localhost"}:${process.env.PORT ?? 8000}/`
  );
});
