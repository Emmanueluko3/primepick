import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import GitHubProvider from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  from,
  gql,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { compare } from "bcrypt";
import jwt from "jsonwebtoken";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  jwt: {
    // async encode({ secret, token }) {
    //   console.log("encode", token);
    //   return jwt.sign(token, secret);
    // },
    // async decode({ secret, token }) {
    //   return jwt.verify(token, secret);
    // },
  },
  secret: process.env.JWT_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        const httpLink = new HttpLink({
          uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
        });

        const authMiddleware = setContext(async (operation, { headers }) => {
          return {
            headers: {
              ...headers,
              "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
            },
          };
        });

        const client = new ApolloClient({
          link: from([authMiddleware, httpLink]),
          cache: new InMemoryCache(),
        });

        let {
          data: { user },
        } = await client.query({
          query: gql`
            query User($email: Email!) {
              user(by: { email: $email }) {
                id
                email
                passwordHash
                location
                name
              }
            }
          `,
          variables: {
            email,
          },
        });

        if (user && (await compare(password, user.passwordHash))) {
          let { passwordHash, ...userObject } = user;
          return userObject;
        }

        throw new Error(`Invalid Credentials`);
      },
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          randomKey: token.randomKey,
        },
      };
    },

    async jwt({ token, user }) {
      // console.log(token, token);
      if (user) {
        const u = user as unknown as any;
        return {
          ...token,
          id: u.id,
          randomKey: u.randomKey,
        };
      }

      return token;
    },
  },
  pages: {
    signIn: "/auths",
  },
};
