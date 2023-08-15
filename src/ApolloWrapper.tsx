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
// import { useAuth } from '@clerk/nextjs'
import { setContext } from "@apollo/client/link/context";

export const ApolloProviderWrapper = ({ children }: PropsWithChildren) => {
  //   const { getToken } = useAuth()

  const httpLink = new HttpLink({
    uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
  });

  const client = useMemo(() => {
    const authMiddleware = setContext(async (operation, { headers }) => {
      //   const token = await getToken({ template: 'grafbase' })

      return {
        headers: {
          ...headers,
          "x-api-key": process.env.REACT_APP_API_KEY,
          //   authorization: `Bearer ${token}`,
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
