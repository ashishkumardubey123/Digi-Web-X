"use client";


//  call now button on commputer screen 

import { Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function CallButton() {
  return (
    <motion.a
      href="tel:+919302300834"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="
        fixed bottom-6 right-6 z-50
        flex items-center gap-2
        bg-gradient-to-r from-purple-500 to-indigo-600
        text-white
        px-6 py-4 rounded-full
        shadow-2xl shadow-purple-500/40
        hover:from-purple-600 hover:to-indigo-700
        transition-all cursor-pointer
      "
      aria-label="Call Now"
    >
      <motion.div
        animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
      >
        <Phone className="w-6 h-6" />
      </motion.div>

      <span className="font-bold text-lg hidden md:inline">
        Call Now
      </span>
    </motion.a>
  );
}
