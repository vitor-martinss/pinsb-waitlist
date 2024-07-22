import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Script from 'next/script'

const montSerrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "pinsb.app",
  description: "Waitlist that you should not join",
  openGraph: {
    images:['/img/skateboarding-city.jpg'],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montSerrat.className}>{children}</body>
      <Script src="https://getlaunchlist.com/js/widget-diy.js" defer />
    </html>
  );
}
