import { z } from "zod";
import { users } from "@/shared/database/schema";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { selectOrganizationValidator } from "../Organization/schema";

const validateName = (value: string) => /^(?:[a-zA-Z]+|[а-яА-Я]+)$/.test(value);

const capitalize = (value: string) =>
  value.charAt(0).toUpperCase() + value.slice(1);

export const insertUserValidator = createInsertSchema(users, {
  email: (schema) => schema.email.trim().toLowerCase().email(),
  password: (schema) => schema.password.min(10),
  firstName: (schema) =>
    schema.firstName.trim().min(2).refine(validateName).transform(capitalize),
  lastName: (schema) =>
    schema.lastName.trim().min(2).refine(validateName).transform(capitalize),
  avatar: (schema) => schema.avatar.trim().url(),
}).omit({ id: true, createdAt: true });

export const selectUserValidator = createSelectSchema(users)
  .omit({
    password: true,
  })
  .merge(
    z.object({
      organization: selectOrganizationValidator.nullable(),
    })
  );

export const JWTUserValidator = selectUserValidator.pick({
  id: true,
  email: true,
  firstName: true,
  lastName: true,
});

export type InsertUser = z.infer<typeof insertUserValidator>;
export type SelectUser = z.infer<typeof selectUserValidator>;
export type JWTUser = z.infer<typeof JWTUserValidator>;
