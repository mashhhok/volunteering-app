import "server-only";

import {
  type InsertOrganization,
  type SelectOrganization,
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
