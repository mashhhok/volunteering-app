import { getSession } from '@/shared/auth';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export const getProfile = async (userId?: number) => {
  try {
    const session = cookies().get("session")?.value;
    const user = await getSession(session);
    const userId_2 = userId ? userId : user?.id
    if (!userId_2) return null;
    let res = await fetch(`${process.env.MOCKAPI_URL}/profiles`, {cache: 'no-store'}).then(
      (res) => res.json()
    );
    res = res.find((item: any) => item.userId === userId_2);
    

    return res
  } catch (err) {
    return NextResponse.json(err, { status: 405 });
  }
}
