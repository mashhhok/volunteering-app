import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { z } from "zod";
import { compare } from "bcryptjs";
import { getFullUserByEmail } from "@/entities/User/repository";

const credentialsValidator = z.object({
  email: z.string().trim().toLowerCase().email(),
  password: z.string(),
});

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials) return null;

        const cleanCredentials = credentialsValidator.safeParse(credentials);
        if (!cleanCredentials.success) return null;

        const user = await getFullUserByEmail(cleanCredentials.data.email);
        if (!user) return null;

        const passwordsMatch = await compare(
          cleanCredentials.data.password,
          user.password
        );

        if (!passwordsMatch) return null;
        return {
          id: user.id.toString(),
          email: user.email,
          name: user.firstName,
        };
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      // @ts-ignore
      if (session.user) session.user.id = token.sub;
      return session;
    },
    jwt: async ({ user, token }) => {
      if (user) token.uid = user.id;
      return token;
    },
  },
  session: { strategy: "jwt" },
};
