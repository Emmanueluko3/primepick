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

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
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
          uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
        });

        const authMiddleware = setContext(async (operation, { headers }) => {
          return {
            headers: {
              ...headers,
              "x-api-key": process.env.REACT_APP_API_KEY,
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
      session.user = token;

      return session;
    },

    async jwt({ token, user }) {
      if (user) {
        token.user = user;
      }

      return token;
    },
  },
  pages: {
    signIn: "/auths",
  },
};
