import type { Metadata, Viewport } from "next";
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

export const viewport: Viewport = {
  themeColor: "#fafaf9",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://alphadiop.dev"),
  title: "Alpha Diop — Design Engineer",
  description:
    "Design Engineer crafting interfaces where detail and engineering compound into something that feels right.",
  openGraph: {
    title: "Alpha Diop — Design Engineer",
    description:
      "Design Engineer crafting interfaces where detail and engineering compound into something that feels right.",
    url: "https://alphadiop.dev",
    siteName: "Alpha Diop",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alpha Diop — Design Engineer",
    description:
      "Design Engineer crafting interfaces where detail and engineering compound into something that feels right.",
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
