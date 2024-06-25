import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "./prismaclient";
import Credentials from "next-auth/providers/credentials";
import { hashSync, compareSync } from "bcryptjs";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: {},
        password: {},
      },
      authorize: async (credentials) => {
        let user = await prisma.user.findUnique({
          where: { username: credentials.username },
        });

        if (!user) {
          // No user found, so this is their first attempt to login
          // meaning this is also the place you could do registration
          throw new Error("User not found.");
        }

        // logic to compare login password to db password
        if (!compareSync(credentials.password, user.password)) {
          throw new Error("Incorrect password.");
        }

        // return user object with the their profile data
        console.log(user);
        return user;
      },
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      return url.startsWith(baseUrl) ? baseUrl : url;
    },
  },
});
