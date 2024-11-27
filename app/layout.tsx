import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Gorditas } from 'next/font/google'
import React from "react";

const gorditasSans = Gorditas({
  subsets: ['latin'],
  variable: '--font-T',
  weight: ['400', '700'],
});


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gorditasSans.variable}  ${geistSans.variable} ${geistMono.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
