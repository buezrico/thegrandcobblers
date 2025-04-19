import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "The Grand Cobbler",
  description: "Luxury Aftercare for Shoes, Bags & Leather Goods",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased flex flex-col min-h-screen justify-between`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
