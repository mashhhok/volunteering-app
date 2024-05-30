"use server";
import { getSession } from "@/shared/auth";
import { cardTags } from "@/shared/enums";
import { toBase64 } from "@/shared/lib/utils";
import { randomId } from "@/shared/lib/utils/randomId";
import { writeFile } from "fs/promises";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

export const createFundAction = async (formData: FormData) => {
  const sessionCookie = cookies().get("session")?.value;
  const session = await getSession(sessionCookie);

  const profiles = await fetch(`${process.env.MOCKAPI_URL}/profiles`, {cache: 'no-store'}).then(
    (res) => res.json()
  );
  const profile = profiles.find((item: any) => item.userId === session?.id);

  if (!profile) return { error: "Account Is Not Found" };

  if (!profile?.verifiedBy) return { error: "Your Account Is Not Verified!" };

  const currencyTypes = ["usd", "eur", "uah"];
  const tagsArray: string[] = Object.values(cardTags);

  const title = String(formData.get("title"));
  const currency = String(formData.get("currency"));
  const location = String(formData.get("location"));
  const description = String(formData.get("description"));
  const tags = JSON.parse(String(formData.get("tags"))).slice(0, 3);
  const needMoney = parseInt(String(formData.get("needMoney")));
  // const images: File[] = null
  const imagesLengthRes = String(formData.get("images_length"));
  const imagesLength = parseInt(imagesLengthRes ? imagesLengthRes : "0");
  const imgPaths: string[] = [];
  for (let i = 0; i < imagesLength; i++) {
    const img: File | null | string = formData.get("image_" + i);
    if(!img) return
    if (typeof img === 'object') {
      let path = "";
      const bytes = await img.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const id = randomId() + "." + img.name;
      path = `./public/requests_img_db/${id}`;
      await writeFile(path, buffer);
      imgPaths.push(id);
    }
  }

  if (title.length < 10 || title.length > 100)
    return { error: "Title length will be more than 10 and less than 100!" };

  if (!currencyTypes.includes(currency))
    return { error: "Transaction currency not recognized" };

  if (!tags) return { error: "Tags values error!" };

  for (let tag of tags) {
    if (!tagsArray.includes(tag)) return { error: "Tags values error!" };
  }

  if (description.length > 3000)
    return {
      error: "Description will be less than 3000 chars",
    };

  if (!needMoney)
    return {
      error: "Need money field error",
    };
  const res = await fetch(`${process.env.MOCKAPI_URL}/requests`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      userId: session?.id,
      createdAt: Date.now(),
      title: title,
      imageUrl: imgPaths,
      collectedMoney: 0,
      needMoney: needMoney,
      currency: currency,
      location: location,
      description: description,
      status: "pending",
      tags: tags,
    }),
  }).then((res) => res.json());
  redirect("/");
};
