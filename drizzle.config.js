import { defineConfig } from "drizzle-kit";
/** @type { import("drizzle-kit").Config } */

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  // out: "./drizzle",
  dbCredentials: {
    url: VITE_DATABASE_URL,
  }
});
