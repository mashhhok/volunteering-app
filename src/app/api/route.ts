import {
  createDonationRequest,
  getDonationRequestsCount,
  getDonationRequestById,
  listDonationRequests,
} from "@/entities/DonationRequest/repository";
import {
  updateOrganizationById,
  createOrganization,
  getOrganizationById,
} from "@/entities/Organization/repository";
import {
  insertOrganizationValidator,
  updateOrganizationValidator,
} from "@/entities/Organization/schema";
import { insertDonationRequestsValidator } from "@/entities/DonationRequest/schema";

import { render } from "@react-email/render";
import { sendEmail } from "@/shared/lib/sendEmail";
import AuthCodeEmail from "../../../emails/AuthCodeEmail";

export async function GET() {
  await sendEmail({
    to: "receiver@gmail.com",
    subject: "Подтверждение аккаунта",
    html: render(AuthCodeEmail({ authLink: "https://google.com" })),
  });

  return Response.json({});
}
