import { z } from "zod";
import { users } from "@/shared/database/schema";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

const validateName = (value: string) => /^(?:[a-zA-Z]+|[а-яА-Я]+)$/.test(value);

export const insertUserValidator = createInsertSchema(users, {
  email: (schema) => schema.email.trim().toLowerCase().email(),
  firstName: (schema) => schema.firstName.trim().min(2).refine(validateName),
  lastName: (schema) => schema.lastName.trim().min(2).refine(validateName),
  avatar: (schema) => schema.avatar.trim().url(),
}).omit({ id: true, createdAt: true });

export const selectUserValidator = createSelectSchema(users).omit({
  password: true,
});

export const JWTUserValidator = selectUserValidator.pick({
  id: true,
  email: true,
  firstName: true,
  lastName: true,
});

export type InsertUser = z.infer<typeof insertUserValidator>;
export type SelectUser = z.infer<typeof selectUserValidator>;
export type JWTUser = z.infer<typeof JWTUserValidator>;
