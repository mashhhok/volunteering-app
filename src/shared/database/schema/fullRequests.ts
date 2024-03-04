import { organizations } from "./organizations";
import { spendHistoryItems } from "./spendHistoryItem";

import { relations } from "drizzle-orm";
import { mysqlTable, int, varchar, timestamp } from "drizzle-orm/mysql-core";

export const fullRequests = mysqlTable("full_requests", {
  id: int("id").primaryKey().autoincrement(),
  organizationId: int("organization_id").notNull(),
  requestTitle: varchar("request_title", { length: 255 }).notNull(),
  imageUrl: varchar("image_url", { length: 255 }).notNull(),
  needMoney: int("need_money").notNull(),
  donationCategory: varchar("donation_category", { length: 255 }).notNull(),
  collectedMoney: int("collected_money").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const fullRequestsRelations = relations(
  fullRequests,
  ({ one, many }) => ({
    organization: one(organizations, {
      fields: [fullRequests.organizationId],
      references: [organizations.id],
    }),
    spendHistoryItems: many(spendHistoryItems),
  })
);
