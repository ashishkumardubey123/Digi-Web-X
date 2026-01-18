import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Schema from "@/Components/Schema";
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
  title: "Digi-WebX | Website Development & SEO Services in India",
  description:
    "We are one of the leading digital services provider, offering professional website development and SEO services to help your business thrive online",
  icons: {
    icon: "/fav-icon.png",
  },

  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* ✅ HEAD SECTION */}
      <head>
        <Schema />
      </head>

      {/* ✅ BODY */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative overflow-x-hidden bg-white`}
      >
        {/* ❄️ Global Snowfall */}
        <SnowEffect />

        {/* 📞 Global Call Button */}
        <CallButton />

        {/* 🔝 Navbar */}
        <Navbar />

        {/* 📄 Page Content */}
        <main className="relative z-10">{children}</main>

        {/* 🔻 Footer */}
        <FooterSection />

        {/* 📱 Mobile Bottom Buttons */}
        <MobileBottomContactBar />
      </body>
    </html>
  );
}
