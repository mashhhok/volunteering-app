import { z } from "zod";
import { organizations } from "@/shared/database/schema";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const insertOrganizationValidator = createInsertSchema(organizations, {
  site: (schema) => schema.site.trim().url(),
}).omit({ id: true, createdAt: true });

export const selectOrganizationValidator = createSelectSchema(organizations);

export const updateOrganizationValidator =
  insertOrganizationValidator.partial();

export type InsertOrganization = z.infer<typeof insertOrganizationValidator>;
export type SelectOrganization = z.infer<typeof selectOrganizationValidator>;
export type UpdateOrganization = z.infer<typeof updateOrganizationValidator>;
