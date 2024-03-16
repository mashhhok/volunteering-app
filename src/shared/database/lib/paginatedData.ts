import { z } from "zod";

const MAX_LIMIT = 50;
const DEFAULT_LIMIT = 20;

export interface PaginationParams {
  limit?: number;
  offset?: number;
}

export function getPaginatedDataValidator<T extends z.ZodRawShape>(
  resultValidator: z.ZodObject<T>
) {
  return z.object({
    count: z.number(),
    results: z.array(resultValidator),
  });
}

export function normalizeLimit(limit?: number) {
  limit = limit ?? DEFAULT_LIMIT;
  if (limit > MAX_LIMIT) limit = MAX_LIMIT;
  return limit;
}
