"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Reason } from "@/app/types";
import {
  Code2,
  Search,
  Zap,
  TrendingUp,
  ShieldCheck,
  Headphones,
} from "lucide-react";
 


// Sample Data
const reasons: Reason[] = [
  {
    title: "Full-Stack Web Development",
    desc: "We design and develop fast, scalable, and modern websites tailored to your business goals.",
    stat: "100+",
    statLabel: "Websites Built",
    icon: Code2,
  },
  {
    title: "SEO-Focused Development",
    desc: "Our websites are built with SEO-first architecture to improve visibility and organic growth.",
    stat: "3x",
    statLabel: "Organic Growth",
    icon: Search,
  },
  {
    title: "Performance & Speed Optimized",
    desc: "We optimize websites for speed, performance, and smooth user experience across all devices.",
    stat: "90+",
    statLabel: "PageSpeed Score",
    icon: Zap,
  },
  {
    title: "Digital Marketing & Growth",
    desc: "We help businesses generate leads and conversions through strategic digital marketing solutions.",
    stat: "2x",
    statLabel: "Lead Conversion",
    icon: TrendingUp,
  },
  {
    title: "Secure & Reliable Systems",
    desc: "We follow best security practices to ensure data safety, stability, and long-term reliability.",
    stat: "99.9%",
    statLabel: "Uptime",
    icon: ShieldCheck,
  },
  {
    title: "Ongoing Support & Optimization",
    desc: "We provide continuous support, updates, and optimization to help your business scale confidently.",
    stat: "5+",
    statLabel: "Years Experience",
    icon: Headphones,
  },
];


export default function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50/50 to-white bg-grid-white/[0.03]">
      {/* Soft background layers */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-50/40 via-transparent to-indigo-50/40" />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(143.6deg, rgba(168, 85, 247, 0.08) 20.79%, rgba(99, 102, 241, 0.12) 40.92%, rgba(168, 85, 247, 0.08) 70.35%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-purple-200/50 shadow-sm">
            <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full animate-pulse" />
            <span className="text-sm font-medium text-purple-700">
              Trusted by Businesses Worldwide
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Why{" "}
            <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Choose Us
            </span>
          </h2>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 leading-relaxed">
            We blend design, development, and strategy to build digital products
            that drive measurable business growth.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group relative flex flex-col h-full rounded-[2rem] p-8
                  bg-gradient-to-br from-white/80 to-purple-50/30 backdrop-blur-md
                  border border-white/40 shadow-xl shadow-purple-900/5
                  hover:shadow-2xl hover:shadow-purple-900/10 hover:border-purple-200/60
                  transition-all duration-300 ease-out overflow-hidden"
              >
                {/* Glow Effect Background */}
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-gradient-to-br from-purple-500/10 to-indigo-500/10 blur-3xl group-hover:from-purple-500/20 group-hover:to-indigo-500/20 transition-colors duration-500" />
                
                {/* Header: Icon + Stat (Side by Side) */}
                <div className="flex justify-between items-start mb-8 relative z-10">
                  {/* Icon Box */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 3 }}
                    className="w-14 h-14 flex items-center justify-center rounded-2xl
                      bg-white shadow-sm border border-purple-100
                      group-hover:border-purple-200 group-hover:bg-purple-50
                      transition-colors duration-300"
                  >
                    <Icon className="w-7 h-7 text-purple-600" strokeWidth={1.5} />
                  </motion.div>

                  {/* Stat Block */}
                  <div className="text-right">
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                      {item.stat}
                    </div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-gray-400 mt-1">
                      {item.statLabel}
                    </div>
                  </div>
                </div>

                {/* Content Body */}
                <div className="relative z-10 flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-900 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                    {item.desc}
                  </p>
                </div>

                {/* Decorative Footer Line */}
                <div className="relative z-10 mt-8 pt-6 border-t border-purple-100/60 flex items-center justify-between">
                   <div className="flex space-x-1 group-hover:space-x-2 transition-all duration-300">
                      <div className="w-2 h-2 rounded-full bg-purple-200 group-hover:bg-purple-400 transition-colors" />
                      <div className="w-2 h-2 rounded-full bg-indigo-100 group-hover:bg-indigo-300 transition-colors" />
                      <div className="w-8 h-2 rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 opacity-20 group-hover:opacity-100 transition-all duration-300" />
                   </div>
                   
                   <span className="text-xs font-medium text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
                     Learn more &rarr;
                   </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
