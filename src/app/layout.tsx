import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Script from 'next/script'

const montSerrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "pinsb",
  description: "A new way of saving and sharing, or not, your skate spots",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montSerrat.className}>{children}</body>
      <Script src="https://getlaunchlist.com/js/widget.js" />

    </html>
  );
}
