import { getById, getByEmail } from "@/entities/User/repository";

export async function GET(request: Request) {
  // console.log(await getById(1));
  console.log(await getByEmail("aDmin@admin.com "));
  return Response.json({ works: true });
}
