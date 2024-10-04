import GitHub from "next-auth/providers/github";

import Google from "next-auth/providers/google";

// @ts-ignore
import type { NextAuthConfig } from "next-auth";

export default {
  providers: [
    GitHub({
      clientId: process.env.AUTH_GITHUB_CLIENT_ID!,
      clientSecret: process.env.AUTH_GITHUB_CLIENT_SECRET!,
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_CLIENT_ID!,
      clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET!,
    }),
  ],

  pages: {
    signIn: "/auth/sign-up",
    error: "/auth/error",
    verifyRequest: "/auth/new-verification",
  },
} satisfies NextAuthConfig;
