import type { Metadata } from "next";
import { Inter } from "next/font/google";
import StarsCanvas from "@/components/main/StarBackground";
import { Navbar } from "@/components/main/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "James Portfolio",
  description:
    "AWS Certified Solutions Architect | Full-Stack Developer | Web Analytics (GA4, Google Tag Manager) | Data Analysis (Python, Excel, SQL)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
