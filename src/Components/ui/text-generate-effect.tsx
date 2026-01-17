"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: TextGenerateEffectProps) => {
  const [scope, animate] = useAnimate();
  const wordsArray: string[] = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration,
        delay: stagger(0.15),
      }
    );
  }, [animate, filter, duration]);

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <motion.div
          ref={scope}
          className="text-base flex flex-wrap justify-center md:justify-start leading-snug tracking-wide dark:text-white text-gray-700"

        >
          {wordsArray.map((word, idx) => (
            <motion.span
              key={`${word}-${idx}`}
              className="inline-block opacity-0"
              style={{
                filter: filter ? "blur(10px)" : "none",
              }}
            >
              {word}&nbsp;
            </motion.span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
 