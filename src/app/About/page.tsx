"use client";
import React, { useEffect } from 'react';

import ContactSection from '@/app/contact/page';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, ShieldCheck, Trophy, Rocket, Zap, Heart } from 'lucide-react';
import StatsSection from '@/Components/StatsSection';
import TestimonialSection from '@/Components/TestimonialSection';

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <>
 
      <div className="pt-24 min-h-screen bg-white relative overflow-hidden">
        
        {/* --- HERO SECTION --- */}
     <div className="relative pb-2 pt-20 px-4 overflow-hidden">

  {/* Enhanced Background Elements */}
  <div className="absolute -top- right-0 w-[700px] h-[700px] bg-purple-100/60 rounded-full blur-[140px] pointer-events-none translate-x-1/3" />
  <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-100/60 rounded-full blur-[140px] pointer-events-none -translate-x-1/3 translate-y-1/4" />
  <div className="absolute inset-0 bg-gradient-to-b from-white via-white/80 to-white pointer-events-none" />

  <div className="max-w-7xl mx-auto text-center relative z-10">

    {/* Badge */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full 
                 bg-white/70 backdrop-blur-md 
                 border border-purple-200 
                 text-purple-700 text-sm font-semibold tracking-wide 
                 shadow-md mb-8"
    >
      <span className="w-2 h-2 rounded-full bg-purple-600"></span>
      <span>Who We Are</span>
    </motion.div>

    {/* Heading */}
    <motion.h1
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
      className="text-3xl md:text-5xl  font-extrabold text-gray-900 mb-8 tracking-tight leading-tight"
    >
      Architects of the <br />
      <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600">
        Digital Future
      </span>
    </motion.h1>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-14"
    >
      DigiWebx is more than just an Company we are your long-term digital growth partner.
      From strategy and design to engineering and marketing, we craft digital experiences
      that help brands scale faster, connect deeper, and lead confidently.
    </motion.p>

    {/* Value Highlights */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto"
    >
      {[
        {
          title: "Strategy-Driven",
          desc: "Every decision is backed by research, data, and clear business goals."
        },
        {
          title: "Design & Engineering",
          desc: "Beautiful interfaces combined with scalable, high-performance code."
        },
        {
          title: "Growth Focused",
          desc: "SEO, performance, and conversions are baked into everything we build."
        }
      ].map((item, i) => (
        <div
          key={i}
          className="rounded-2xl bg-white/70 backdrop-blur-md 
                     border border-gray-200 
                     shadow-lg shadow-gray-200/40 
                     p-8 text-left hover:-translate-y-1 transition-all"
        >
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {item.desc}
          </p>
        </div>
      ))}
    </motion.div>

  </div>
</div>


        {/* --- STATS SECTION --- */}
       
          
               <StatsSection />
       
      

        {/* --- MISSION & VALUES --- */}
        <div className="py-24 max-w-7xl mx-auto px-4">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
              <motion.div
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
              >
                 <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                 <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    To democratize access to premium digital technology for businesses of all sizes. 
                    We believe every brand deserves a world-class digital presence that drives real, 
                    measurable results.
                 </p>
                 <ul className="space-y-4">
                    {[
                        "Transparent & Honest Communication",
                        "Results-First Approach",
                        "Continuous Innovation"
                    ].map((item, i) => (
                        <li key={i} className="flex items-center gap-3">
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center">
                                <Zap className="w-3.5 h-3.5 text-green-600" />
                            </div>
                            <span className="text-gray-700 font-medium">{item}</span>
                        </li>
                    ))}
                 </ul>
              </motion.div>
              <motion.div
                 initial={{ opacity: 0, x: 20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="relative"
              >
                 <div className="absolute inset-0 bg-gradient-to-tr from-purple-200 to-indigo-200 rounded-3xl transform rotate-3 scale-105 opacity-40 blur-lg" />
                 <div className="relative bg-white border border-gray-100 p-8 rounded-3xl shadow-xl">
                    <div className="flex items-start gap-4 mb-6">
                       <div className="p-3 bg-purple-100 rounded-xl text-purple-600">
                          <Target className="w-8 h-8" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
                          <p className="text-gray-500 mt-2">To become the most trusted digital transformation agency in India.</p>
                       </div>
                    </div>
                     <div className="flex items-start gap-4">
                       <div className="p-3 bg-pink-100 rounded-xl text-pink-600">
                          <Heart className="w-8 h-8" />
                       </div>
                       <div>
                          <h3 className="text-xl font-bold text-gray-900">Our Promise</h3>
                          <p className="text-gray-500 mt-2">We treat your business like our own. No shortcuts, just excellence.</p>
                       </div>
                    </div>
                 </div>
              </motion.div>
           </div>

           {/* Core Values Grid */}
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Core Values</h2>
              <p className="text-gray-500 max-w-2xl mx-auto">The principles that guide every pixel we design and every line of code we write.</p>
           </div>

           <motion.div 
             variants={containerVariants}
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             className="grid grid-cols-1 md:grid-cols-3 gap-8"
           >
              {[
                  { icon: Lightbulb, title: "Innovation", desc: "We stay ahead of the curve, using the latest tech stacks like Next.js and AI-driven marketing tools.", color: "text-amber-500", bg: "bg-amber-50" },
                  { icon: ShieldCheck, title: "Integrity", desc: "No hidden fees, no false promises. We believe in complete transparency with our clients.", color: "text-blue-500", bg: "bg-blue-50" },
                  { icon: Trophy, title: "Excellence", desc: "Good enough is not enough. We strive for perfection in design, performance, and SEO rankings.", color: "text-purple-500", bg: "bg-purple-50" }
              ].map((val, i) => (
                  <motion.div 
                    key={i} 
                    variants={itemVariants}
                    className="p-8 rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 group"
                  >
                      <div className={`w-14 h-14 ${val.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                          <val.icon className={`w-7 h-7 ${val.color}`} />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{val.title}</h3>
                      <p className="text-gray-500 leading-relaxed">{val.desc}</p>
                  </motion.div>
              ))}
           </motion.div>
        </div>

        {/* --- TEAM / CULTURE BANNER --- */}
        <div className="bg-gray-900 text-white py-20 px-4 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/20 rounded-full blur-[100px]" />
            
            <div className="max-w-4xl mx-auto text-center relative z-10">
                <Users className="w-12 h-12 text-purple-400 mx-auto mb-6" />
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Built by Experts, Powered by Passion</h2>
                <p className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed">
                    Our team consists of senior full-stack developers, SEO strategists, and creative designers 
                    who live and breathe digital. We don't outsource; we take ownership.
                </p>
            </div>
        </div>

   {/* Reuse Testimonial  Section */}
        <div className="bg-[#fdfcff] pt-16 border-t border-gray-100">
           <TestimonialSection />
        </div>



        {/* Reuse Contact Section */}
        <div className="bg-[#fdfcff] border-t border-gray-100">
           <ContactSection />
        </div>

    
      </div>
    </>
  );
};

export default AboutPage;