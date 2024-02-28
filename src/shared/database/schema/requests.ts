import { mysqlTable, int, varchar, timestamp } from "drizzle-orm/mysql-core";

export const requests = mysqlTable("requests", {
  id: int("id").primaryKey().autoincrement(),
  companyName: varchar("company_name", { length: 20 }).notNull(),
  requestTitle: varchar("request_title", { length: 255 }).notNull(),
  imageUrl: varchar("image_url", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});
