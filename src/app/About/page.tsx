import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://digiwebx.vercel.app/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
