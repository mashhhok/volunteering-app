import { getSession } from '@/shared/auth';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import React from 'react'

export const getProfile = async () => {
  try {
    const session = cookies().get("session")?.value;
    const user = await getSession(session);
    if (!user) return NextResponse.json({}, { status: 405 });
    let res = await fetch(`${process.env.MOCKAPI_URL}/profiles`).then(
      (res) => res.json()
    );
    res = res.filter((item: any) => item.userId === user?.id);
    

    return res[0]
  } catch (err) {
    return NextResponse.json(err, { status: 405 });
  }
}
