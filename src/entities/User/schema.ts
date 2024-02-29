import { z } from "zod";
import { users } from "@/shared/database/schema";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

const nameValidator = z
  .string()
  .min(2)
  .refine(
    (value) => /^(?:[a-zA-Z]+|[а-яА-Я]+)$/.test(value),
    "Should contain just one word"
  );

export const insertUserValidator = createInsertSchema(users)
  .omit({
    id: true,
    createdAt: true,
  })
  .merge(
    z.object({
      email: z.string().email().toLowerCase(),
      firstName: nameValidator,
      lastName: nameValidator,
      avatar: z.string().url().optional(),
    })
  );

export const selectUserValidator = createSelectSchema(users).omit({
  password: true,
});

export type InsertUser = z.infer<typeof insertUserValidator>;
export type SelectUser = z.infer<typeof selectUserValidator>;
