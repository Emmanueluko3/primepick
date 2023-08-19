import { Providers } from "@/providers/provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
// import { Provider } from "react-redux";
import { wrapper } from "../store/store";
import { Toaster } from "react-hot-toast";
// import HomeSpinner from "@/components/atoms/homeSpinner";

const inter = Inter({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PrimePick",
  description: "Ecommerce Marketplace",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {/* <HomeSpinner /> */}
          <Toaster position="top-right" reverseOrder={true} />
          {children}
        </Providers>
      </body>
    </html>
  );
}

// export default wrapper.withRedux(RootLayout);
