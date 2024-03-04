import { users } from "./users";
import { fullRequests } from "./fullRequests";

import { relations } from "drizzle-orm";
import { mysqlTable, varchar, int, timestamp } from "drizzle-orm/mysql-core";

export const organizations = mysqlTable("organizations", {
  id: int("id").primaryKey().autoincrement(),
  userId: int("user_id")
    .unique()
    .references(() => users.id),
  companyName: varchar("company_name", { length: 20 }).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

const organizationsRelations = relations(organizations, ({ many }) => ({
  fullRequests: many(fullRequests),
}));
