"use client";
import { Box, Button, TextInput } from "@mantine/core";
import type { InferGetServerSidePropsType } from "next";
import { useSession } from "next-auth/react";
import { getServerSideProps } from "next/dist/build/templates/pages";

export default function AuthForm({
  csrfToken,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { data: session, status } = useSession();

  console.log(status, session);
  return (
    <Box>
      <form action="/api/auth/callback/credentials" method="post">
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
        <label>
          Email address
          <TextInput name="username" />
        </label>
        <label>
          Password
          <TextInput name="password" type="password" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </Box>
  );
}
