"use client";
import Link from "next/link";
import React from "react";
import { LayoutTextFlip } from "@/Components/ui/layout-text-flip";
import { motion } from "motion/react";
// import { Button } from "./ui/moving-border";
import { TextGenerateEffect } from "@/Components/ui/text-generate-effect";
import { ChevronRight } from "lucide-react";

import { HoverBorderGradient } from "@/Components/ui/hover-border-gradient";

const words = ` We build reliable digital experiences that transform ideas into strong, scalable brands
From high-performance website development to powerful online visibility, we help businesses grow, connect, and convert in the digital world.`


function HeroSection() {
  return (
    <div className="relative">
      {/* Background Gradient Blur (ORIGINAL) */}
      <div
        className="absolute inset-0 blur-xl h-[580px]"
        style={{
          background:
            "linear-gradient(143.6deg, rgba(192, 132, 252, 0) 20.79%, rgba(232, 121, 249, 0.26) 40.92%, rgba(204, 171, 238, 0) 70.35%)",
        }}
      ></div>

      <section>
        <div className="relative max-w-screen-xl mx-auto   px-2 pb-5 pt-36 gap-20 text-gray-600 overflow-hidden md:px-8 md:flex">
          {/* Left Content */}
       <motion.div
  className="flex-none space-y-5 max-w-xl"
  initial={{ opacity: 0, y: 30, scale: 0.98 }}
  animate={{ opacity: 1, y: 0, scale: 1 }}
  transition={{
    duration:1.0,
    ease: "easeOut",
  }}
>
  {/* News Badge */}
  <Link
    href="/"
    className="inline-flex items-center rounded-full p-1 border border-slate-400 text-sm font-medium duration-150 hover:bg-slate-200"
  >
    <span className="inline-block rounded-full px-3 py-1 bg-indigo-600 text-base text-white">
      Digi-WebX
    </span>
    <p className="flex items-center">
      <ChevronRight size={25} strokeWidth={2.0} absoluteStrokeWidth />
    </p>
  </Link>

  {/* Heading */}


  <div>
    <LayoutTextFlip
      text="We Deliver"
     
      words={[
        "High-Performing Websites",
        
        "Result-Driven Experiences",
        "Growth-Focused Solutions",
      ]}
    />
  </div>

  {/* Description */}
  <p>
    <TextGenerateEffect words={words} />
  </p>

  {/* Buttons */}
 {/* Buttons */}
  <div className="flex flex-wrap items-center  justify-center sm:justify-start gap-4 sm:gap-x-9">
<Link href="/Services">
  <button className="uiverse-btn flex items-center gap-x-1">
    <span className=" font-bold ">Get Started</span>
    <ChevronRight size={16} strokeWidth={2.5} />
  </button>


</Link>


<Link href="/contact">
  <div className="relative group inline-block">
    <button
      className="
        relative inline-block p-px font-semibold leading-6 text-white
        bg-gray-800 shadow-2xl cursor-pointer rounded-xl
        shadow-zinc-900 transition-transform duration-300
        ease-in-out hover:scale-105 active:scale-95
      "
    >
      {/* Gradient Border */}
      <span
        className="
          absolute inset-0 rounded-xl
          bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500
          p-[2px] opacity-0 transition-opacity duration-500
          group-hover:opacity-100
        "
      ></span>

      {/* Button Content */}
      <span className="relative z-10 block px-6 py-3 rounded-xl bg-gray-950">
        <span className="relative z-10 flex items-center gap-2">
          <span className="transition-all duration-500 group-hover:translate-x-1">
           Contact Us
          </span>
          <ChevronRight
            size={22}
            className="transition-transform duration-500 group-hover:translate-x-1"
          />
        </span>
      </span>
    </button>
  </div>
</Link>
  </div>
</motion.div>





    {/* Right Video */}
<motion.div
  className="flex-1 hidden md:block"
  initial={{ opacity: 0, x: 40, scale: 0.97 }}
  animate={{ opacity: 1, x: 0, scale: 1 }}
  transition={{
    duration:1,
    ease: "easeOut",
    delay: 0.15, // left content ke baad thoda sa late aaye
  }}
>
  <video
    src="/hero.mp4"
    className="max-w-xl rounded-xl bg-transparent"
    autoPlay
    loop
    muted
    playsInline
  />
</motion.div>

        </div>
      </section>
    </div>
  );
}

export default HeroSection;
