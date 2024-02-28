import { spendHistoryItems } from "./spendHistoryItem";

import { relations } from "drizzle-orm";
import { mysqlTable, int, varchar, timestamp } from "drizzle-orm/mysql-core";

export const fullRequests = mysqlTable("full_requests", {
  id: int("id").primaryKey().autoincrement(),
  companyName: varchar("company_name", { length: 20 }).notNull(),
  requestTitle: varchar("request_title", { length: 255 }).notNull(),
  imageUrl: varchar("image_url", { length: 255 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  needMoney: int("need_money").notNull(),
  collectedMoney: int("collected_money").notNull(),
});

export const fullRequestsRelations = relations(fullRequests, ({ many }) => ({
  spendHistoryItems: many(spendHistoryItems),
}));
