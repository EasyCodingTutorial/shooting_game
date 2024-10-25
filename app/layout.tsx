import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// For Layout Components
import { Navbar } from "./layout/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Straight Shot Academy",
  description: "Sharpen your Aim, Unlock Your Potential",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
