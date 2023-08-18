"use client";

import { makeStore } from "../store/store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import AppWrapper from "@/context/auth";
import { ApolloProviderWrapper } from "@/apollo/ApolloWrapper";

export function Providers({ children }: { children: React.ReactNode }) {
  const store = makeStore();

  return (
    <SessionProvider>
      <AppWrapper>
        <ApolloProviderWrapper>
          <Provider store={store}>{children}</Provider>
        </ApolloProviderWrapper>
      </AppWrapper>
    </SessionProvider>
  );
}
