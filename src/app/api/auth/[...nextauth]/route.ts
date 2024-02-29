import "server-only";

import NextAuth from "next-auth";
import type { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { compare } from "bcryptjs";
import { getFullUserByEmail } from "@/entities/User/repository";

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

        const user = await getFullUserByEmail(credentials.email);
        if (!user) return null;

        const passwordsMatch = await compare(
          credentials.password,
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

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
