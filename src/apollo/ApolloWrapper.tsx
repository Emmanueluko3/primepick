"use client";

import type { PropsWithChildren } from "react";
import { useMemo } from "react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  from,
} from "@apollo/client";
import { HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export const ApolloProviderWrapper = ({ children }: PropsWithChildren) => {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  });

  const client = useMemo(() => {
    const authMiddleware = setContext(async (operation, { headers }) => {
      // const token = await getToken({req: await getServerSession(authOptions)})
      let response = await (await fetch("api/auth/session")).json();

      console.log("auth_roken", response.sessionToken);
      let token = response.sessionToken;

      return {
        headers: {
          ...headers,
          "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
          authorization: `Bearer ${token}`,
        },
      };
    });

    return new ApolloClient({
      link: from([authMiddleware, httpLink]),
      cache: new InMemoryCache(),
    });
  }, []);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
