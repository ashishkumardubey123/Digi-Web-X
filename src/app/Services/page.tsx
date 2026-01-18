import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://digiwebx.vercel.app/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
