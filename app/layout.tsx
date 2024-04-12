import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StarsCanvas from "@/components/main/StarBackground";
import { Navbar } from "@/components/main/Navbar";
import "./globals.css";
import { GoogleAnalytics, GoogleTagManager } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "James Portfolio",
  description:
    "AWS Certified Solutions Architect | Full-Stack Developer | Web Analytics (GA4, Google Tag Manager) | Data Analysis (Python, Excel, SQL)",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-icon.png?v=4"],
    shortcut: ["/apple-icon.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </head>
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <StarsCanvas />
        <GoogleTagManager gtmId="GTM-P7FJFWQD" />
        <GoogleAnalytics gaId="G-YP3S8BHED0" />
        <SpeedInsights />
      </body>
    </html>
  );
}
