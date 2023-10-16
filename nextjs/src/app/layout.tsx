import SessionProviderWrapper from "@/utils/sessionProviderWrapper";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clinic Manager",
  description: "Clinic Manager - Um sistema da storage.app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProviderWrapper>
      <html lang="en">
        <body className={inter.className}>
          <div className="w-full h-screen">
            <div>{children}</div>
          </div>
        </body>
      </html>
    </SessionProviderWrapper>
  );
}
