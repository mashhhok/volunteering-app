import "server-only";

import {
  selectDonationRequestValidator,
  type InsertDonationRequest,
  type SelectDonationRequest,
} from "./schema";

import { donationRequests } from "@/shared/database/schema";
import { getConnection, extractColumns } from "@/shared/database/lib";

import {
  type PaginationParams,
  getPaginatedDataValidator,
  normalizeLimit,
} from "@/shared/database/lib/paginatedData";

import type { SQL } from "drizzle-orm";
import { eq, count, and, desc } from "drizzle-orm";

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

export async function getDonationRequestById(
  id: number
): Promise<SelectDonationRequest | null> {
  const connection = await getConnection();

  const donationRequest = await connection.query.donationRequests.findFirst({
    where: eq(donationRequests.id, id),
    columns: extractColumns(selectDonationRequestValidator),
  });

  if (!donationRequest) return null;
  return selectDonationRequestValidator.parse(donationRequest);
}

export async function getDonationRequestsCount(
  params: { organizationId?: number } = {}
) {
  const connection = await getConnection();
  const filters: SQL[] = [];

  if (params.organizationId)
    filters.push(eq(donationRequests.organizationId, params.organizationId));

  const donationRequestsCount = await connection
    .select({ count: count() })
    .from(donationRequests)
    .where(and(...filters));

  return donationRequestsCount[0].count;
}

interface ListDonationRequestsParams extends PaginationParams {
  organizationId?: number;
}

export async function listDonationRequests(
  params: ListDonationRequestsParams = {}
) {
  const connection = await getConnection();
  const filters: SQL[] = [];
  const limit = normalizeLimit(params.limit);

  if (params.organizationId)
    filters.push(eq(donationRequests.organizationId, params.organizationId));

  const results = await connection.query.donationRequests.findMany({
    where: and(...filters),
    columns: extractColumns(selectDonationRequestValidator),
    limit: limit,
    offset: params.offset,
    orderBy: [desc(donationRequests.createdAt), desc(donationRequests.id)],
  });

  const count = await getDonationRequestsCount({
    organizationId: params.organizationId,
  });

  return getPaginatedDataValidator(selectDonationRequestValidator).parse({
    count,
    results,
  });
}
