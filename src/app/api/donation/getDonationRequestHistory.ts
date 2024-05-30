"use server";
export const getDonationRequestHistory = async (
  userId: string | number,
  reqId: string | number
) => {
  let res = await fetch(
    `${process.env.MOCKAPI_URL}/profiles/${userId}/donate_history`
  ).then((res) => res.json());
  if (typeof res !== "object") return [];
  res = res.filter((item: any) => {
    console.log(item?.requestId, reqId);
    return item?.requestId === reqId;
  });
  return res;
};
