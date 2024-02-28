import { defineConfig } from "drizzle-kit";

export const MYSQL_HOST = process.env.MYSQL_HOST!;
export const MYSQL_USER = process.env.MYSQL_USER!;
export const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD!;
export const MYSQL_DATABASE = process.env.MYSQL_DATABASE!;
export const MYSQL_SSL = (process.env.MYSQL_SSL || "false") === "true";

let MYSQL_URI = `mysql://${MYSQL_USER}:${MYSQL_PASSWORD}@${MYSQL_HOST}/${MYSQL_DATABASE}`;
if (MYSQL_SSL) MYSQL_URI = `${MYSQL_URI}?ssl={"rejectUnauthorized":true}`;

export default defineConfig({
  schema: "./src/shared/database/schema",
  driver: "mysql2",
  out: "./migrations",
  dbCredentials: {
    uri: MYSQL_URI,
  },
  verbose: true,
  strict: true,
});
