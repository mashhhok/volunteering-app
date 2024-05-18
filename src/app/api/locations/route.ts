import { locations } from "@/shared/const";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest){
  return Response.json(locations, {status: 200})
}