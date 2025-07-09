import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {   
  title: "SortOf – Waitlist",
  description: "Join the waitlist for the next-gen creative tools by SortOf Studio.",
  metadataBase: new URL("https://sortedof.kushinpi.me"),
  openGraph: {
    title: "Join the SortOf Waitlist",
    description: "Get early access to SortOf's tools for creators, builders, and dreamers.",
    url: "https://sortedof.kushinpi.me",
    siteName: "SortOf",
    images: [
      {
        url: "/images/og-preview.png",
        width: 1200,
        height: 630,
        alt: "SortOf Waitlist Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
