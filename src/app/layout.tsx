import { Providers } from "@/providers/provider";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { Provider } from "react-redux";
import { wrapper } from "../store/store";
import { Toaster } from "react-hot-toast";

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
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Toaster position="top-right" reverseOrder={true} />
          {children}
        </Providers>
      </body>
    </html>
  );
}

// export default wrapper.withRedux(RootLayout);
