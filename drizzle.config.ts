import { defineConfig } from "drizzle-kit";

export const MYSQL_HOST = process.env.MYSQL_HOST!;
export const MYSQL_PORT = parseInt(process.env.MYSQL_PORT!);
export const MYSQL_USER = process.env.MYSQL_USER!;
export const MYSQL_PASSWORD = process.env.MYSQL_PASSWORD!;
export const MYSQL_DATABASE = process.env.MYSQL_DATABASE!;

export default defineConfig({
  schema: "./src/shared/database/schema",
  driver: "mysql2",
  out: "./migrations",
  dbCredentials: {
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
  },
  verbose: true,
  strict: true,
});
