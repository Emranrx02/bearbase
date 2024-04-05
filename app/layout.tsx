import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";

const inter = localFont({
  src: [
    {
      path: "../public/Nippo-Bold.otf",
      weight: "700",
      style: "bold",
    },
    {
      path: "../public/Nippo-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/Nippo-Light.otf",
      weight: "300",
      style: "light",
    },
    {
      path: "../public/Nippo-Medium.otf",
      weight: "500",
      style: "medium",
    },
  ],
});

export const metadata: Metadata = {
  title: "bearbase",
  description: "A base for bear tokens",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
