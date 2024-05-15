import { getUserById } from "@/entities/User/repository";
import { getSession } from "@/shared/auth";
import { cookies } from "next/headers";

export const getRequestsInfo = async (userId?: number) => {
  const sessionCookie = cookies().get("session")?.value;
  const session = await getSession(sessionCookie);
  userId = userId ? userId : session?.id;
  if (!userId)
    return {
      requestsCount: "-",
      fundsCount: "-",
      yearsWork: "-",
    };

  const profiles = await fetch(`${process.env.MOCKAPI_URL}/profiles`, {cache: 'no-store'}).then(
    (res) => res.json()
  );
  const profile = profiles.filter((item: any) => item.userId === userId)[0];
  const isOwner = session?.id === profile.userId;

  const isShowFundsCount = isOwner ? true : profile?.isShowFundsCount;
  const isShowRequestsCount = isOwner ? true : profile?.isShowRequestsCount;
  const isShowYearsWork = isOwner ? true : profile?.isShowYearsWork;

  const requests = await fetch(`${process.env.MOCKAPI_URL}/requests`, {cache: 'no-store'}).then(
    (res) => res.json()
  );
  let requestsCount = 0;
  let fundsCount = 0;

  requests.forEach((item: any) => {
    if (item.userId === userId) {
      requestsCount++;
      fundsCount += item?.collectedMoney;
    }
  });

  let accCreatedAt = await getUserById(userId);

  let date = new Date();
  let createdAt = accCreatedAt?.createdAt
    ? new Date(accCreatedAt?.createdAt)
    : new Date();
  let workYear = date.getFullYear() - createdAt.getFullYear();

  return {
    requestsCount: isShowRequestsCount ? requestsCount : "-",
    fundsCount: isShowFundsCount ? fundsCount : "-",
    yearsWork: isShowYearsWork ? workYear : "-",
  };
};
