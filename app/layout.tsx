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
      path: "../public/Nippo-Medium.otf",
      weight: "500",
      style: "medium",
    },
  ],
});

export const metadata: Metadata = {
  title: "$AUB on Sol",
  description: "The Bear with Aura",
  icons: {
    icon: "/ber.ico",
  },
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
