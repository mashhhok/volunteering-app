import "server-only";

import {
  selectDonationRequestValidator,
  type InsertDonationRequest,
  type SelectDonationRequest,
} from "./schema";

import { donationRequests } from "@/shared/database/schema";
import { getConnection, extractColumns } from "@/shared/database/lib";

import { eq } from "drizzle-orm";

export async function createDonationRequest(
  insertDonationRequest: InsertDonationRequest
): Promise<SelectDonationRequest | null> {
  try {
    const connection = await getConnection();

    const insertResult = await connection
      .insert(donationRequests)
      .values(insertDonationRequest);

    const createdDonationRequest =
      await connection.query.donationRequests.findFirst({
        where: eq(donationRequests.id, insertResult[0].insertId),
        columns: extractColumns(selectDonationRequestValidator),
      });

    return selectDonationRequestValidator.parse(createdDonationRequest);
  } catch (error) {
    throw error;
  }
}
