"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/utils/cn";

export const LayoutTextFlip = ({
  text = "Build Amazing",
  words = ["Landing Pages", "Component Blocks", "Page Sections", "3D Shaders"],
  duration = 2000,
}: {
  text: string;
  words: string[];
  duration?: number;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, [duration, words.length]);

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-start">
      
      {/* Static text */}
      <motion.span
        layoutId="subtext"
        className="
          pb-2 
          text-2xl sm:text-2xl md:text-4xl
          font-bold tracking-tight
          text-gray-900
          drop-shadow-sm
          text-center sm:text-left
        "
      >
        {text}
      </motion.span>

      {/* Flipping text */}
      <motion.span
        layout
        className="
          relative
          w-fit max-w-full
          rounded-md
          bg-white
          px-3 py-1.5
          sm:px-4 sm:py-2
          font-sans font-bold
          text-lg sm:text-lg md:text-2xl
          tracking-tight
          text-blue-700
          shadow-sm
          ring-1 ring-black/10
          overflow-hidden
        "
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={currentIndex}
            initial={{ y: -30, filter: "blur(8px)" }}
            animate={{ y: 0, filter: "blur(0px)" }}
            exit={{ y: 30, filter: "blur(8px)", opacity: 0 }}
            transition={{ duration: 0.4 }}
            className={cn(
              "inline-block whitespace-nowrap text-center"
            )}
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </div>
  );
};
