import { z } from "zod";

export function extractColumns<T extends z.ZodRawShape>(
  schema: z.ZodObject<T>
) {
  const columns: { [key: string]: true } = {};

  for (const [key, type] of Object.entries(schema.shape)) {
    if (type instanceof z.ZodObject) continue;
    columns[key] = true;
  }

  return columns;
}
