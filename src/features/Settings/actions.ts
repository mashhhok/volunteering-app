"use server";

import { NextResponse } from "next/server";

export async function changeAvatar(formData: FormData) {
  const blob: Blob = formData.get("avatar");
  const blobText = await blob.text()

  return NextResponse.json(blobText, {status: 200})
}
