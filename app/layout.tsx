import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "WriteFlow - AI Writing Assistant",
  description: "Write faster and better with AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${inter.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen font-sans flex flex-col">{children}</body>
    </html>
  );
}
