import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shubham Sourabh",
  description: "Full Stack Developer portfolio",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
  <nav className="flex gap-6 px-8 py-4 border-b border-gray-700">
  <Link href="/" className="text-gray-300 hover:text-emerald-400 transition-colors">
    Home
  </Link>
  <Link href="/about" className="text-gray-300 hover:text-emerald-400 transition-colors">
    About
  </Link>
  <Link href="/projects" className="text-gray-300 hover:text-emerald-400 transition-colors">
    Projects
  </Link>
</nav>
  {children}
  </body>
    </html>
  );
}
