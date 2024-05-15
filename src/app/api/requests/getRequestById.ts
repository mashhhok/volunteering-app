"use server";
export const getRequestById = async (id: string | number) => {
  try {
    const res = await fetch(`${process.env.MOCKAPI_URL}/requests/${id}`).then(
      (res) => res.json()
    );

    const profiles = await fetch(`${process.env.MOCKAPI_URL}/profiles`).then(
      (res) => res.json()
    );
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
