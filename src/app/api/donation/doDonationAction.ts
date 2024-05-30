"use server";

interface IResponse {
  error: string | null;
  ok?: boolean;
}
const currencyArr = ["usd", "eur", "uah"];

export async function doDonationAction(
  currentState: unknown,
  formData: FormData
): Promise<IResponse> {
  const email = formData.get("email");
  const amount = parseInt(String(formData.get("amount")).replace(" ", ""));
  const currency = String(formData.get("currency"));
  const requestId = parseInt(String(formData.get("requestId")));

  if (!currencyArr.includes(currency.toLowerCase()))
    return {
      error: "Currency is not valid",
    };
  if (!requestId)
    return {
      error: "requestId is not valid",
    };
  if (!amount)
    return {
      error: "Amount is not valid",
    };
  if (amount > 1000000)
    return {
      error: 'Amount is bigger than value "1.000.000"',
    };
  if (amount < 1)
    return {
      error: "Amount is a negative number",
    };

  const request = await fetch(
    `${process.env.MOCKAPI_URL}/requests/${requestId}`
  ).then((res) => res.json());
  if (!request)
    return {
      error: "RequestId is not valid",
    };
  if (request?.status === "close" || request?.status === "open")
    return {
      error: "The collection is not open",
    };

  const rates = await fetch(
    `https://api.freecurrencyapi.com/v1/latest?apikey=${process.env.FREE_CURRENCY_API_KEY}&currencies=${request?.currency.toUpperCase()}&base_currency=${currency.toUpperCase()} `
  ).then((res) => res.json());
  console.log(
    `https://api.freecurrencyapi.com/v1/latest?apikey=${process.env.FREE_CURRENCY_API_KEY}&currencies=${currency.toUpperCase()}&base_currency=${request?.currency.toUpperCase()}`
  );
  if (!rates?.data)
    return {
      error: "DONATION ERROR",
    };
  const coefficient = rates?.data[request?.currency.toLocaleUpperCase()];
  const sum = amount * coefficient  
  const needMoney = request?.needMoney;
  const goalMoney = needMoney - request?.collectedMoney;
  const remainder = sum - goalMoney;
  let collectedMoney = request?.collectedMoney + sum;
  let isCollected;
  if (collectedMoney >= needMoney) {
    collectedMoney = needMoney;
    isCollected = true;
  }
  const donatedValue = remainder > 0 ? sum - remainder : sum;

  const res = await fetch(`${process.env.MOCKAPI_URL}/requests/${requestId}`, {
    method: "PATCH",
    body: JSON.stringify({
      collectedMoney: collectedMoney,
      status: isCollected ? "open" : "pending",
    }),
    headers: {
      "content-type": "application/json",
    },
  }).then((res) => res.json());

  const pushHistory = await fetch(
    `${process.env.MOCKAPI_URL}/profiles/${request?.userId}/donate_history`,
    {
      method: "POST",
      body: JSON.stringify({
        createdAt: Date.now(),
        source: "translation",
        fundName: request?.title,
        amount: donatedValue / coefficient,
        currency: currency.toLocaleUpperCase(),
        comment: "null",
        requestId: requestId,
      }),
      headers: {
        "content-type": "application/json",
      },
    }
  ).then((res) => res.json());

  return {
    error: null,
    ok: true,
  };
}
