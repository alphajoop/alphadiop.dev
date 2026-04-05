import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alpha Diop — Design Engineer",
  description:
    "Design Engineer building modern, performant web applications with React, Next.js, and TypeScript.",
  openGraph: {
    title: "Alpha Diop — Design Engineer",
    description:
      "Design Engineer building modern, performant web applications with React, Next.js, and TypeScript.",
    url: "https://alphadiop.dev",
    siteName: "Alpha Diop",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Alpha Diop — Design Engineer",
    description:
      "Design Engineer building modern, performant web applications with React, Next.js, and TypeScript.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
