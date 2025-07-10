import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevBoard – Showcase Your Developer Portfolio",
  description:
    "Create a profile and showcase your projects. Discover, like, and filter through developer portfolios.",
};

/**
 * Root layout component for all pages.
 * Renders a persistent navbar and wraps main routes.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--background)] text-[var(--foreground)] min-h-screen`}
      >
        <Navbar />
        <main className="container mx-auto px-4 md:px-8 py-8">{children}</main>
      </body>
    </html>
  );
}
