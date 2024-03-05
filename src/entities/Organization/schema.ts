import { z } from "zod";
import { organizations } from "@/shared/database/schema";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const insertOrganizationValidator = createInsertSchema(
  organizations
).omit({ id: true, createdAt: true });

export const selectOrganizationValidator = createSelectSchema(organizations);

export type InsertOrganization = z.infer<typeof insertOrganizationValidator>;
export type SelectOrganization = z.infer<typeof selectOrganizationValidator>;
