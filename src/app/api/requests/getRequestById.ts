"use server";
export const getRequestById = async (id: string | number) => {
  try {
    const res = await fetch(`${process.env.MOCKAPI_URL}/requests/${id}`, {
      cache: "no-store",
    }).then((res) => res.json());
    if(!res) return null

    const profiles = await fetch(`${process.env.MOCKAPI_URL}/profiles`, {
      cache: "no-store",
    }).then((res) => res.json());
    const profile = profiles.find((item: any) => item.userId === res?.userId);

    return {
      userData: profile,
      requestData: res,
    };
  } catch (err) {
    return {
      userData: {},
      requestData: {},
    };
  }
};
