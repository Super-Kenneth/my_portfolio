import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/nav";

export const metadata: Metadata = {
  title: "Kenneth's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className=" bg-black">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
