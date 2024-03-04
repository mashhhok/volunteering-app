import { organizations } from "./organizations";

import { relations } from "drizzle-orm";
import { mysqlTable, int, varchar, timestamp } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int("id").primaryKey().autoincrement(),
  email: varchar("email", { length: 64 }).notNull().unique(),
  password: varchar("password", { length: 255 }).notNull(),
  firstName: varchar("first_name", { length: 10 }).notNull(),
  lastName: varchar("last_name", { length: 10 }).notNull(),
  avatar: varchar("avatar", { length: 255 }),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const usersRelations = relations(users, ({ one }) => ({
  organization: one(organizations),
}));
