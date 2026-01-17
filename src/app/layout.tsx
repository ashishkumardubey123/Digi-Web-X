import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/Components/navbar";
import FooterSection from "@/Components/FooterSection";
import SnowEffect from "@/Components/snowFall";
import CallButton from "@/Components/CallButton";
import MobileBottomContactBar from "@/Components/MobileContactButtons";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Digi-WebX",
  description: "We are one of the leading digital services provider, offering web development, SEO, and social media marketing to help your business thrive online.",
  icons: {
    icon: "./fav-icon.png",
  
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative overflow-x-hidden bg-white`}
      >
        {/* ❄️ Global Snowfall */}
        <SnowEffect />

        {/* 📞 Global Call Button (Left Bottom) */}
        <CallButton />

        {/* 🔝 Navbar */}
        <Navbar />

        {/* 📄 Page Content */}
        <main className="relative z-10">
          {children}
        </main>

        {/* 🔻 Footer */}
        <FooterSection />
        
  {/* 📱 Mobile Bottom Buttons */}
  <MobileBottomContactBar />
      </body>
    </html>
  );
}
