import { getUserById } from "@/entities/User/repository";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const pageParam = searchParams.get("page");
  let page = pageParam ? parseInt(pageParam) : 1;
  const userIdRes = searchParams.get("userId");
  let userId = userIdRes ? userIdRes : "";
  let noPages = searchParams.get("noPages") ? searchParams.get("noPages") : "";
  let _location = searchParams.get("location")
    ? searchParams.get("location")
    : "";
  const statusParam = searchParams.get("status");
  let status = statusParam ? statusParam : "";
  // TAGS
  const emergency = Boolean(searchParams.get("emergency"));
  const militarCars = Boolean(searchParams.get("militarCars"));
  const equipment = Boolean(searchParams.get("equipment"));
  const military = Boolean(searchParams.get("military"));
  const drones = Boolean(searchParams.get("drones"));
  const medical = Boolean(searchParams.get("medical"));
  const education = Boolean(searchParams.get("education"));
  const animals = Boolean(searchParams.get("animals"));
  const children = Boolean(searchParams.get("children"));
  const elderly = Boolean(searchParams.get("elderly"));
  const volunteering = Boolean(searchParams.get("volunteering"));

  const res = await fetch(`${process.env.MOCKAPI_URL}/requests`, {cache: 'no-store'});

  let data: any[] = await res.json();
  if (userId) data = data.filter((item) => item.userId === +userId);
  if (_location) data = data.filter((item) => item.location === _location);
  if (status) data = data.filter((item) => item.status === status);
  if (typeof data !== "object") {
    return Response.json(
      {
        res: [],
        pageCount: 1,
      },
      {
        status: 200,
      }
    );
  }

  data = !userId
    ? data
    : data.filter((item: any) => item.userId === parseInt(userId));
  data = data.filter((item) => {
    if (emergency ? !item?.tags?.includes("🔥 Emergency") : false) {
      return false;
    }
    if (militarCars ? !item?.tags?.includes("🚗 Military cars") : false) {
      return false;
    }
    if (equipment ? !item?.tags?.includes("🥾 Equipment") : false) return false;
    if (military ? !item?.tags?.includes("🪖 Military") : false) return false;
    if (drones ? !item?.tags?.includes("🦅 Drones") : false) return false;
    if (medical ? !item?.tags?.includes("💊 Medical") : false) return false;
    if (education ? !item?.tags?.includes("📚 Education") : false) return false;
    if (animals ? !item?.tags?.includes("🐾 Animals") : false) return false;
    if (children ? !item?.tags?.includes("👧🏻 Сhildren") : false) return false;
    if (elderly ? !item?.tags?.includes("👨🏼‍🦳 Еlderly") : false) return false;
    if (volunteering ? !item?.tags?.includes("🙋🏼‍♂️ Volunteering") : false)
      return false;

    return true;
  });

  const users = await fetch(`${process.env.MOCKAPI_URL}/profiles`, {cache: 'no-store'}).then((res) =>
    res.json()
  );

  const mappedData = [];
  for (let item of data) {
    const user = users.find((user: any) => user.userId === item.userId);
    mappedData.push({
      requestData: item,
      userData: user,
    });
  }

  if (noPages) {
    return Response.json(
      {
        res: mappedData,
      },
      {
        status: 200,
      }
    );
  }

  const interval = 6;
  const paginatedData = mappedData.slice(
    (page - 1) * interval,
    (page - 1) * interval + interval
  );
  let pageCount = Math.ceil(mappedData.length / interval);
  return Response.json(
    {
      res: paginatedData,
      pageCount: pageCount,
    },
    {
      status: 200,
    }
  );
}

export async function POST(req: NextRequest) {
  const { session, donateCategory, needMoney, collectedMoney, title } =
    await req.json();
  const donateCategoriFiltered =
    donateCategory.length < 4 ? donateCategory : donateCategory.slice(0, 3);

  const res = await fetch(`${process.env.MOCKAPI_URL}/requests`, {
    method: "post",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      userId: session.id,
      createdAt: Date.now(),
      title: title,
      imageUrl: "URL",
      collectedMoney: collectedMoney,
      needMoney: needMoney,
      donateCategory: donateCategoriFiltered,
    }),
  });
  const data = await res.json();
  return Response.json(data, { status: 200 });
}
