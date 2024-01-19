import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { TheHeader } from "./components/TheHeader/TheHeader";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VocabBuilder",
  description: "Word, Translation, Grammar, Progress",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TheHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
