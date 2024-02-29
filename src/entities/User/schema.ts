import { z } from "zod";
import { users } from "@/shared/database/schema";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const insertUserValidator = createInsertSchema(users).omit({
  id: true,
  createdAt: true,
});

export const selectUserValidator = createSelectSchema(users).omit({
  password: true,
});

export type InsertUser = z.infer<typeof insertUserValidator>;
export type SelectUser = z.infer<typeof selectUserValidator>;
