import "server-only";

import {
  type InsertOrganization,
  type SelectOrganization,
  type UpdateOrganization,
  selectOrganizationValidator,
} from "./schema";

import { organizations } from "@/shared/database/schema";
import { getConnection, extractColumns } from "@/shared/database/lib";

import { eq } from "drizzle-orm";

export async function createOrganization(
  insertOrganization: InsertOrganization
): Promise<SelectOrganization | null> {
  try {
    const connection = await getConnection();

    const insertResult = await connection
      .insert(organizations)
      .values(insertOrganization);

    const createdOrganization = await connection.query.organizations.findFirst({
      where: eq(organizations.id, insertResult[0].insertId),
      columns: extractColumns(selectOrganizationValidator),
    });

    return selectOrganizationValidator.parse(createdOrganization);
  } catch {
    return null;
  }
}

export async function updateOrganizationById(
  organizationId: number,
  insertOrganization: UpdateOrganization
): Promise<SelectOrganization | null> {
  try {
    const connection = await getConnection();

    const updateResult = await connection
      .update(organizations)
      .set(insertOrganization)
      .where(eq(organizations.id, organizationId));

    if (updateResult[0].affectedRows === 0) return null;

    const createdOrganization = await connection.query.organizations.findFirst({
      where: eq(organizations.id, organizationId),
      columns: extractColumns(selectOrganizationValidator),
    });

    return selectOrganizationValidator.parse(createdOrganization);
  } catch {
    return null;
  }
}

export async function getOrganizationById(
  organizationId: number
): Promise<SelectOrganization | null> {
  const connection = await getConnection();

  const organization = await connection.query.organizations.findFirst({
    where: eq(organizations.id, organizationId),
    columns: extractColumns(selectOrganizationValidator),
  });

  if (!organization) return null;
  return selectOrganizationValidator.parse(organization);
}
