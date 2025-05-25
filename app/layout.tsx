import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import "./styles/root.css";
import MobileNav from "@/components/bank1/mobilenav";

import Navbar from "@/components/bank1/navbar";
import Footer from "@/components/bank1/footer";

import LeftContent from "@/components/bank1/leftcontent";
import RightContent from "../components/bank1/rightcontent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nandaemon2",
  description: "Casino Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MobileNav />
        <Navbar />
        <div className="min-h-screen  mx-auto">
          {/* <MobileNav />
                <Navbar />{" "} */}

          <main className="grid grid-cols-5 mx-auto">
            <div className="hidden lg:block">
              <div className="col-span-1 bg-[#202020] h-full">
                <LeftContent />{" "}
              </div>
            </div>
            <div className="col-span-4 lg:col-span-3 px-2 bg-neutral-950">
              {children}
            </div>
            <div className="hidden lg:block">
              <div className="col-span-1 bg-[#202020] h-full">
                <RightContent />{" "}
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
