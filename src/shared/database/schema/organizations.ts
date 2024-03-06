import { users } from "./users";
import { donationRequests } from "./donationRequests";

import { relations } from "drizzle-orm";
import {
  mysqlTable,
  varchar,
  int,
  timestamp,
  text,
} from "drizzle-orm/mysql-core";

export const organizations = mysqlTable("organizations", {
  id: int("id").primaryKey().autoincrement(),
  userId: int("user_id").unique().notNull(),
  companyName: varchar("company_name", { length: 20 }).notNull(),
  description: text("description").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const organizationsRelations = relations(
  organizations,
  ({ one, many }) => ({
    user: one(users, {
      fields: [organizations.userId],
      references: [users.id],
    }),
    donationRequests: many(donationRequests),
  })
);
