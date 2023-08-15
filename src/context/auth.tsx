"use client";

import React, { createContext, useContext, useState } from "react";

interface SharedState {
  registered: boolean;
  setRegistered: React.Dispatch<React.SetStateAction<boolean>>;
  tokenIds: any;
  setTokenIds: React.Dispatch<React.SetStateAction<any>>;
  authToken: string;
  setAuthToken: React.Dispatch<React.SetStateAction<string>>;
  user: any;
  setUser: React.Dispatch<React.SetStateAction<any>>;
}

const AppContext = createContext<SharedState | undefined>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [registered, setRegistered] = useState<boolean>(false);
  const [tokenIds, setTokenIds] = useState<any>(null);
  const [authToken, setAuthToken] = useState<string>("");
  const [user, setUser] = useState<any>({});

  const sharedState: SharedState = {
    registered,
    setRegistered,
    tokenIds,
    setTokenIds,
    authToken,
    setAuthToken,
    user,
    setUser,
  };

  return (
    <AppContext.Provider value={sharedState}>{children}</AppContext.Provider>
  );
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppWrapper");
  }
  return context;
}

export default AppWrapper;
