"use server";
export const getAllRequestsByUserId = async (
  id: number,
  options: {
    status?: string;
  } = {}
) => {
  try {
    let requests = await fetch(`${process.env.MOCKAPI_URL}/requests`, {
      cache: "no-store",
    }).then((res) => res.json());
    requests = requests.filter((item: any) => {
      if (!(item.userId === id)) return false;
      if (options.status && !(options.status === item.status)) return false;

      return true;
    });

    const profiles = await fetch(`${process.env.MOCKAPI_URL}/profiles`, {
      cache: "no-store",
    }).then((res) => res.json());
    const profile = profiles.find((item: any) => item.userId === id);

    return {
      userData: profile,
      requestsData: requests,
    };
  } catch (err) {
    return {
      userData: {},
      requestsData: [],
    };
  }
};
