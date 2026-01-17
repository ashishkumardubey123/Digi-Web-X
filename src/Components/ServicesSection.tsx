"use client"

import { motion } from "motion/react"
import { Code, Search, Megaphone, ArrowRight, Lightbulb } from "lucide-react"
import ourservices from "../data/services.json"
import { Button } from "./ui/button"
import Link from "next/link"

const services = [
  {
    title: "Web Designing & Development",
    description: "We create modern, responsive websites that look professional and convert visitors into customers.",
    icon: Code,
  },
  {
    title: "Search Engine Optimization (SEO)",
    description: "Our SEO strategies help your business rank higher on Google and drive quality organic traffic.",
    icon: Search,
  },
  {
    title: "Social Media Promotion & Content Creation",
    description: "We grow your brand on social media with engaging content and result-driven promotion strategies.",
    icon: Megaphone,
  },
]

function ServicesSection() {
  return (
    <section
      className="min-h-screen py-12 mt-14 bg-gradient-to-b from-blue-950 to-blue-900  font-satoshi antialiased bg-grid-white/[0.02] "
      
    >
      {/* Heading */}
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
           <p
          className="inline-flex items-center gap-2 rounded-full 
bg-blue-950/10 border border-blue-400/30 
px-5 py-2 text-sm md:text-xl font-bold 
text-white backdrop-blur-sm"
        >
           <Lightbulb className="md:w-6 md:h-6 w-5 h-5 text-blue-400" />
          What We <span className="text-blue-400">Offer</span>
        </p>
        <motion.h2
          className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-400">Services</span>
        </motion.h2>
        <motion.p
          className="mt-4 md:text-lg text-blue-100 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Everything you need to grow your business online from websites to visibility. We provide comprehensive
          solutions tailored to your goals.
        </motion.p>
      </motion.div>

      {/* Cards Grid */}
      <div className="max-w-6xl mx-auto px-6 grid gap-8 md:grid-cols-3 mb-16">
        {services.map((service, index) => {
          const Icon = service.icon

          return (
            
    <motion.div
  key={index}
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.15 }}
  whileHover={{ y: -8, transition: { duration: 0.3 } }}
  viewport={{ once: true }}
  className="group relative overflow-hidden"
>
  {/* 🔥 Hover border glow (NO rounded) */}
  <div
    className=" absolute inset-0 p-[2px]
    bg-gradient-to-r rounded from-blue-700 via-blue-600 to-blue-900
    opacity-0 
    transition-opacity duration-300 animate-spin"
  
  />

  {/* 🔥 Hover background glow (NO rounded) */}
  <div
    className="absolute inset-0
    bg-gradient-to-br from-blue-600/30 via-blue-500/15 to-transparent
    opacity-0 group-hover:opacity-100
    transition-opacity duration-300"
  />

  {/* ✅ Actual card (rounded remains here only) */}
  <div
    className="relative rounded-2xl bg-blue-950/40 backdrop-blur-xl
    border border-blue-400/30 group-hover:border-blue-300/60
    p-8 transition-all duration-300 h-full flex flex-col"
  >
    {/* Icon */}
    <motion.div
      className="w-16 h-16 mx-auto flex items-center justify-center rounded-xl
      bg-gradient-to-br from-blue-500/40 to-blue-600/20 mb-6
      group-hover:from-blue-400/50 group-hover:to-blue-500/30
      transition-all duration-300 border border-blue-400/40"
      whileHover={{ scale: 1.1, rotate: 5 }}
    >
      <Icon className="w-8 h-8 text-blue-200 group-hover:text-blue-100 transition-colors" />
    </motion.div>

    {/* Title */}
    <h3 className="text-xl md:text-2xl font-bold text-blue-50 mb-3 text-center group-hover:text-blue-100 transition-colors">
      {service.title}
    </h3>

    {/* Description */}
    <p className="text-blue-100 text-sm leading-relaxed mb-5 flex-grow">
      {service.description}
    </p>

    {/* Points */}
    <ul className="space-y-2 mb-6">
      {ourservices[index]?.points.map((point, i) => (
        <motion.li
          key={i}
          className="flex items-center gap-2 text-blue-100 text-sm"
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: i * 0.05 }}
          viewport={{ once: true }}
        >
          <span className="w-2 h-2 rounded-full bg-blue-300 animate-pulse" />
          {point}
        </motion.li>
      ))}
    </ul>

    {/* Button */}
         <Link href="/Services">
    <motion.button
      className="w-full py-3 px-4 rounded-lg
      bg-gradient-to-r from-blue-500 to-cyan-500
      hover:from-blue-400 hover:to-cyan-400
      text-blue-950 font-bold text-sm
      flex items-center justify-center gap-2
      transition-all duration-300 group/btn
      shadow-lg hover:shadow-blue-500/50"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
 
          Know More 
   
  
      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
    </motion.button>
       </Link>
  </div>
</motion.div>


          )
        })}
      </div>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Link href="/Services">
          <Button
            size="lg"
            className="relative px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-blue-950 font-bold rounded-lg transition-all duration-300 group overflow-hidden shadow-lg hover:shadow-cyan-500/50"
          >
            <span className="relative z-10 flex items-center gap-2">
              Explore All Services
              <motion.span
                className="inline-block"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </span>
          </Button>
        </Link>
      </motion.div>

  
    </section>
  )
}

export default ServicesSection
