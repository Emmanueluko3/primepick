"use client";

import { makeStore } from "../store/store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import AppWrapper from "@/context/auth";
import { ApolloProviderWrapper } from "@/apollo/ApolloWrapper";
import { EventProvider } from "@/context/events";

export function Providers({ children }: { children: React.ReactNode }) {
  const store = makeStore();

  return (
    <EventProvider>
      <SessionProvider>
        <AppWrapper>
          <ApolloProviderWrapper>
            <Provider store={store}>{children}</Provider>
          </ApolloProviderWrapper>
        </AppWrapper>
      </SessionProvider>
    </EventProvider>
  );
}
