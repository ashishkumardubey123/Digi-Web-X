
import Homepage from "./Home/HomePage";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://digiwebx.vercel.app/",
  },
};

export default function Home() {
  return (
    <main
      className="min-h-screen font-satoshi antialiased bg-grid-white/[0.02]"
      style={{
        background:
          "linear-gradient(143.6deg, rgba(29, 78, 216, 0) 20.79%, rgba(29, 78, 216, 0.28) 40.92%, rgba(29, 78, 216, 0) 70.35%)",
      }}
    >

       
      <Homepage/>
    </main>
  );
}


