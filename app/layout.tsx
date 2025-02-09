"use client";

import type { Metadata } from "next";

import "./globals.css";
import Footer from "@/components/footer/Footer";
import { Provider } from "react-redux";
import { store } from "@/providers/store";

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body className={`font-nunito antialiased`}>
          {children}
          <Footer />
        </body>
      </Provider>
    </html>
  );
}
