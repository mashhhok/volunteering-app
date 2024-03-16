import { z } from "zod";
import { donationRequests } from "@/shared/database/schema";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

export const insertDonationRequestsValidator = createInsertSchema(
  donationRequests
).omit({ id: true, createdAt: true });

export const selectDonationRequestValidator =
  createSelectSchema(donationRequests);

export type InsertDonationRequest = z.infer<
  typeof insertDonationRequestsValidator
>;

export type SelectDonationRequest = z.infer<
  typeof selectDonationRequestValidator
>;
