import { Providers } from "@/redux/provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppWrapper from "@/context/auth";
import { ApolloProviderWrapper } from "@/apollo/ApolloWrapper";
// import { Provider } from "react-redux";
import { wrapper } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";
// import { useStore } from "react-redux";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PrimePick",
  description: "Ecommerce Marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const store: any = useStore();

  return (
    <html lang="en">
      <Providers>
        {/* <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}> */}
        <AppWrapper>
          <ApolloProviderWrapper>
            <body className={inter.className}>
              <Toaster position="top-right" reverseOrder={true} />
              {children}
            </body>
          </ApolloProviderWrapper>
        </AppWrapper>
        {/* </PersistGate> */}
      </Providers>
    </html>
  );
}

// export default wrapper.withRedux(RootLayout);
