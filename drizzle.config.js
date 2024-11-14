import { defineConfig } from "drizzle-kit";
/** @type { import("drizzle-kit").Config } */

export default defineConfig({
  dialect: "postgresql",
  schema: "./configs/schema.js",
  // out: "./drizzle",
  dbCredentials: {
    url: 'postgresql://neondb_owner:QglNdAMU3i5n@ep-dark-lab-a5t78xhj.us-east-2.aws.neon.tech/neondb?sslmode=require',
  }
});
