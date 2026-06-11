import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import AuthProvider from '@/providers/AuthProvider';
import CallStateProvider from '@/providers/CallStateProvider';
import TelephonyProvider from '@/providers/TelephonyProvider';
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
  title: "Browser Call Engine",
  description: "Browser-based calling for telecallers",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <AuthProvider>
          <TelephonyProvider>
            <CallStateProvider>
              {children}
            </CallStateProvider>
          </TelephonyProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
