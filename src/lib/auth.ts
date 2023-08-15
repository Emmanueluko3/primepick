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
      // async authorize(credentials) {
      //   console.log("credentials", credentials);
      //   const user = { id: "1", name: "Admin", email: "admin@admin.com" };
      //   return user;
      // },

      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };

        console.log("authorization");

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

        const {
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

        console.log("authUser", user);

        if (user && (await compare(password, user.passwordHash))) {
          return user;
        }

        return null;

        // const { user } = await grafbase.request(GetUserByUsername, {
        //   username
        // })
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
};
