import type { Metadata } from "next";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Meow meow meow ...",
  description:
    "The ultimate cat community-driven token on Avax! Meow meow meow...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/meow_head.ico" />
      </Head>
      <body>{children}</body>
    </html>
  );
}
