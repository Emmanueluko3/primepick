"use client";

import { makeStore } from "../store/store";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { PersistGate } from "redux-persist/integration/react";
import AppWrapper from "@/context/auth";
import { ApolloProviderWrapper } from "@/apollo/ApolloWrapper";

export function Providers({ children }: { children: React.ReactNode }) {
  const store = makeStore();

  return (
    // <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
    <SessionProvider>
      <AppWrapper>
        <ApolloProviderWrapper>
          <Provider store={store}>{children}</Provider>
        </ApolloProviderWrapper>
      </AppWrapper>
    </SessionProvider>
    // </PersistGate>
  );
}
