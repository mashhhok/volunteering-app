import "server-only";

import {
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_USER,
  MYSQL_DATABASE,
  MYSQL_PASSWORD,
} from "@/shared/config/database.config";

import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";

export async function getConnection() {
  const connection = await mysql.createConnection({
    host: MYSQL_HOST,
    port: MYSQL_PORT,
    user: MYSQL_USER,
    password: MYSQL_PASSWORD,
    database: MYSQL_DATABASE,
  });

  return drizzle(connection);
}
