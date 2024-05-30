"use server";
export const getDonationUserHistory = async (id: string | number) => {
  const res = await fetch(`${process.env.MOCKAPI_URL}/profiles/${id}/donate_history`).then((res) => res.json());
  console.log(res)

  if (typeof res !== "object") return [];
  return res;
};
