import type { Metadata } from "next";

import ContectSectopnPage from "./ContactClient";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://digiwebx.vercel.app/contact",
  },
};

export default function ContactPage() {
  return <ContectSectopnPage />;
}
