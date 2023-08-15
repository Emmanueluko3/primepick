import { Providers } from "@/redux/provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AppWrapper from "@/context/auth";
import { ApolloProviderWrapper } from "@/ApolloWrapper";
// import { Provider } from "react-redux";
import { wrapper } from "../store/store";
import { PersistGate } from "redux-persist/integration/react";
import Navbar from "@/components/organisms/navbar";
import Footer from "@/components/organisms/footer";
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
            <body className={inter.className}>{children}</body>
          </ApolloProviderWrapper>
        </AppWrapper>
        {/* </PersistGate> */}
      </Providers>
    </html>
  );
}

// export default wrapper.withRedux(RootLayout);
