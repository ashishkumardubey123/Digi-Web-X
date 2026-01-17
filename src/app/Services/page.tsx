"use client";
import React, { useEffect } from 'react';


import ContactSection from '@/app/contact/page';
import { motion, Variants } from 'framer-motion';
import { Check, Code2, Zap, Layout, Star, TrendingUp, Search, Phone, Rocket, Globe, Monitor } from 'lucide-react';
import Link from 'next/link';

const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  // Floating icons animation for Hero
  const floatingIconVariants: Variants = {
    float: (i: number) => ({
      y: [0, -15, 0],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 3 + i,
        repeat: Infinity,
        ease: "easeInOut"
      }
    })
  };

  return (
    <>

      <div className="min-h-screen bg-[#f8fafc] relative overflow-hidden">
        
        {/* Floating Call Button */}
        <motion.a
          href="tel:+919302300834"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-green-500 text-white px-6 py-4 rounded-full shadow-2xl shadow-green-500/40 hover:bg-green-600 transition-colors cursor-pointer"
        >
          <motion.div
            animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, repeatDelay: 1 }}
          >
            <Phone className="w-6 h-6 fill-current" />
          </motion.div>
          <span className="font-bold text-lg hidden md:inline">Call Now</span>
        </motion.a>

        {/* --- HERO SECTION --- */}
<div className="relative pt-28 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-[#f4f8ff] text-gray-900">

  {/* Glass Background */}
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

    {/* Soft blue glass blobs */}
    <div className="absolute -top-40 -right-40 w-[720px] h-[720px] bg-blue-400/25 rounded-full blur-[140px]" />
    <div className="absolute bottom-[-30%] left-[-20%] w-[620px] h-[620px] bg-indigo-400/25 rounded-full blur-[140px]" />

    {/* Glass overlay */}
    <div className="absolute inset-0 backdrop-blur-xl bg-white/45 border-b border-white/30" />
  </div>

  <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <span className="inline-block px-4 py-1.5 rounded-full bg-blue-100/70 text-blue-700 font-semibold text-sm mb-6 tracking-wide">
        World-Class Digital Services
      </span>

      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
        Scale Your Business with <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
          Next-Gen Technology
        </span>
      </h1>

      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
        We combine modern web development with data-driven marketing to build brands that grow and convert.
      </p>
    </motion.div>

    {/* Floating Icons */}
    <div className="flex justify-center gap-8 md:gap-16 mt-12">
      {[
        { icon: <Monitor className="w-6 h-6 text-blue-600" />, label: "Web" },
        { icon: <Rocket className="w-6 h-6 text-indigo-600" />, label: "SEO" },
        { icon: <Globe className="w-6 h-6 text-green-600" />, label: "Marketing" },
      ].map((item, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={floatingIconVariants}
          animate="float"
          className="flex flex-col items-center gap-2"
        >
          <div className="w-14 h-14 rounded-2xl bg-white/60 backdrop-blur-md border border-white/40 shadow-md flex items-center justify-center">
            {item.icon}
          </div>
          <span className="text-xs font-medium text-gray-500">
            {item.label}
          </span>
        </motion.div>
      ))}
    </div>
  </div>

  {/* Bottom Curve */}
  <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">

  </div>
</div>





        {/* --- PRICING SECTION HEADER --- */}
        <div className="max-w-7xl mx-auto px-4 text-center mt-16 mb-12">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-semibold tracking-wide shadow-sm mb-6"
            >
              <span>Simple & Transparent Pricing</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              Investment Plans for <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Every Stage</span>
            </motion.h2>
        </div>

        {/* Section 1: Web Development Types */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-7xl mx-auto px-4 mb-24"
        >
            <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                <Code2 className="w-6 h-6 text-purple-600" />
                Website Development Plans
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                {/* WordPress Plan */}
                <motion.div 
                    variants={itemVariants}
                    whileHover={{ y: -10 }}
                    className="bg-white rounded-3xl p-8 border border-gray-200 shadow-xl shadow-gray-200/50 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 bg-gray-100 px-4 py-1 rounded-bl-xl text-xs font-bold text-gray-600 uppercase">
                        Standard
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 border border-blue-100">
                        <Layout className="w-7 h-7 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">WordPress Website</h3>
                    <p className="text-gray-500 mb-6 text-sm">Best for small businesses, blogs, and rapid deployment.</p>
                    
                    <div className="flex items-baseline gap-1 mb-6">
                        <span className="text-4xl font-bold text-gray-900">₹8,000</span>
                        <span className="text-gray-400 font-medium">/ project</span>
                    </div>

                    <ul className="space-y-4 mb-8">
                        {[
                            "Professional Business Design",
                            "Mobile Responsive Layout",
                            "1 Year Free Hosting",
                            "User-Friendly Admin Panel",
                            "Contact Form Integration",
                            "Social Media Links",
                            "Basic SEO Setup"
                        ].map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                                <span className="text-gray-700 text-sm">{feature}</span>
                            </li>
                        ))}
                    </ul>
                    
                    <Link href="/contact">
                        <button className="w-full py-4 rounded-xl border-2 border-gray-900 text-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-all duration-300">
                            Choose WordPress
                        </button>
                    </Link>
                </motion.div>

                {/* Modern Tech Plan */}
                <motion.div 
                    variants={itemVariants}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="bg-gray-900 rounded-3xl p-8 border border-gray-800 shadow-2xl shadow-purple-900/20 relative overflow-hidden group"
                >
                    <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-1 rounded-bl-xl text-xs font-bold text-white uppercase shadow-lg">
                        Recommended
                    </div>
                    {/* Glow Effect */}
                    <div className="absolute -right-20 -top-20 w-80 h-80 bg-purple-600/20 rounded-full blur-[60px] group-hover:bg-purple-600/30 transition-all duration-500 animate-pulse"></div>

                    <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 relative z-10 border border-white/10">
                        <Zap className="w-7 h-7 text-purple-300" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 relative z-10">Modern Tech Website</h3>
                    <p className="text-gray-400 mb-6 text-sm relative z-10">
                        Built with <span className="text-white font-semibold">Next.js & React.js</span>. High performance, secure, and scalable.
                    </p>
                    
                    <div className="flex items-baseline gap-1 mb-6 relative z-10">
                        <span className="text-4xl font-bold text-white">₹17,000</span>
                        <span className="text-gray-400 font-medium">/ project</span>
                    </div>

                    <ul className="space-y-4 mb-8 relative z-10">
                        {[
                            "Blazing Fast Performance (Next.js)",
                            "Custom React.js UI/UX Design",
                            "Advanced SEO Optimization",
                            "High Security & Scalability",
                            "Server Side Rendering (SSR)",
                            "Interactive Animations",
                            "1 Year Free Hosting included"
                        ].map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <div className="p-0.5 rounded-full bg-purple-500/20">
                                    <Check className="w-4 h-4 text-purple-400 flex-shrink-0" />
                                </div>
                                <span className="text-gray-300 text-sm">{feature}</span>
                            </li>
                        ))}
                    </ul>
                    
                   <Link href="/contact">
                        <button className="relative z-10 w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold hover:shadow-lg hover:shadow-purple-600/40 transition-all duration-300">
                            Build with Modern Tech
                        </button>
                    </Link>
                </motion.div>
            </div>
        </motion.div>

        {/* Section 2: Marketing & Growth Bundles */}
        <div className="bg-white py-20 border-t border-gray-100 relative overflow-hidden">
            {/* Background decoration for SEO emphasis */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-50 rounded-full blur-3xl opacity-50 pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <motion.div 
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   className="flex flex-col md:flex-row md:items-end justify-between mb-12"
                >
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                           <TrendingUp className="w-8 h-8 text-green-600" />
                           Growth & Marketing Bundles
                        </h2>
                        <p className="text-gray-500">Accelerate your business with our all-in-one SEO & Marketing packages.</p>
                    </div>
                </motion.div>

                <motion.div 
                   variants={containerVariants}
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true }}
                   className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {/* Basic Bundle */}
                    <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-purple-300 transition-all hover:shadow-lg group">
                        <div className="w-12 h-12 rounded-lg bg-white border border-gray-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                          <Search className="w-6 h-6 text-gray-700" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Website + SEO</h3>
                        <p className="text-sm text-gray-500 mb-6">Get found on Google instantly.</p>
                        <div className="text-3xl font-bold text-gray-900 mb-6">₹10,000</div>
                        <ul className="space-y-3 mb-8">
                            <li className="flex gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-purple-600"/> Complete Website Setup</li>
                            <li className="flex gap-2 text-sm text-gray-700 font-semibold bg-green-50 p-1 rounded"><Check className="w-4 h-4 text-green-600"/> On-Page SEO Optimization</li>
                            <li className="flex gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-purple-600"/> 1 Year Free Hosting</li>
                        </ul>
                   <Link href="/contact" className="block text-center w-full py-3 rounded-xl bg-white border border-gray-200 text-gray-900 font-semibold hover:border-purple-600 hover:text-purple-600 transition-colors">Select Plan</Link>
                    </motion.div>

                    {/* Pro Bundle - Highlighted */}
                    <motion.div 
                       variants={itemVariants}
                       whileHover={{ y: -15 }}
                       className="p-8 rounded-2xl bg-gradient-to-b from-purple-50 to-white border-2 border-purple-200 relative shadow-2xl shadow-purple-200/50"
                    >
                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase shadow-lg tracking-wider">
                           Most Popular
                        </div>
                        <div className="w-12 h-12 rounded-lg bg-purple-100 flex items-center justify-center mb-6">
                          <Star className="w-6 h-6 text-purple-600 fill-purple-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                             Complete Solution
                        </h3>
                        <p className="text-sm text-gray-500 mb-6">Web + SEO + Social Media</p>
                        <div className="text-3xl font-bold text-purple-700 mb-6">₹12,000</div>
                        <ul className="space-y-3 mb-8">
                            <li className="flex gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-purple-600"/> Website + Hosting (1 Year)</li>
                            <li className="flex gap-2 text-sm text-gray-700 font-semibold bg-purple-100/50 p-1 rounded"><Check className="w-4 h-4 text-purple-600"/> 1 Month SEO Service</li>
                            <li className="flex gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-purple-600"/> Social Media Reel (1 per day)</li>
                        </ul>
                        <Link href="/contact" className="block text-center w-full py-3 rounded-xl bg-purple-600 text-white font-semibold hover:bg-purple-700 transition-colors shadow-lg shadow-purple-200">Get Complete Solution</Link>
                    </motion.div>

                     {/* Marketing Only - Highlighted */}
                     <motion.div variants={itemVariants} className="p-8 rounded-2xl bg-white border border-green-200 hover:border-green-400 hover:shadow-green-100 hover:shadow-lg transition-all group">
                        <div className="absolute top-0 right-0 bg-green-100 px-3 py-1 rounded-bl-xl text-[10px] font-bold text-green-700 uppercase">
                           SEO Focused
                        </div>
                        <div className="w-12 h-12 rounded-lg bg-green-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                          <TrendingUp className="w-6 h-6 text-green-600" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">Monthly Growth</h3>
                        <p className="text-sm text-gray-500 mb-6">Consistent monthly marketing.</p>
                        <div className="text-3xl font-bold text-gray-900 mb-6">₹5,000<span className="text-sm text-gray-500 font-normal">/mo</span></div>
                        <ul className="space-y-3 mb-8">
                            <li className="flex gap-2 text-sm text-gray-700 font-medium"><Check className="w-4 h-4 text-green-600"/> Off-Page SEO (Backlinks)</li>
                            <li className="flex gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-green-600"/> Social Media Creatives</li>
                            <li className="flex gap-2 text-sm text-gray-700"><Check className="w-4 h-4 text-green-600"/> 1 Reel per day</li>
                        </ul>
                   <Link href="/contact" className="block text-center w-full py-3 rounded-xl bg-white border border-gray-200 text-gray-900 font-semibold hover:border-green-500 hover:text-green-600 transition-colors">Start Monthly</Link>
                    </motion.div>
                </motion.div>
                
                {/* Additional Services Table */}
                <motion.div 
                   initial={{ opacity: 0 }}
                   whileInView={{ opacity: 1 }}
                   viewport={{ once: true }}
                   className="mt-16 overflow-x-auto"
                >
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Additional Services</h3>
                    <table className="w-full text-left border-collapse bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="p-4 border-b border-gray-200 font-semibold text-gray-700">Service Name</th>
                                <th className="p-4 border-b border-gray-200 font-semibold text-gray-700">Description</th>
                                <th className="p-4 border-b border-gray-200 font-semibold text-gray-700 text-right">Price (INR)</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="p-4 font-medium text-gray-900 flex items-center gap-2">
                                  <TrendingUp className="w-4 h-4 text-green-600" />
                                  Off Page SEO
                                </td>
                                <td className="p-4 text-gray-600 text-sm">Backlinks & authority building for existing websites</td>
                                <td className="p-4 text-gray-900 font-bold text-right">₹2,000</td>
                            </tr>
                            <tr className="hover:bg-gray-50 transition-colors">
                                <td className="p-4 font-medium text-gray-900">Social Media Content (1 Month)</td>
                                <td className="p-4 text-gray-600 text-sm">Creative videos (1 reel in a day)</td>
                                <td className="p-4 text-gray-900 font-bold text-right">₹3,000</td>
                            </tr>
                        </tbody>
                    </table>
                </motion.div>
            </div>
        </div>

        {/* Contact Section Rendered at Bottom */}
        <div className="bg-[#fdfcff] border-t border-gray-100">
           <ContactSection />
        </div>
        
      
      </div>
    </>
  );
};

export default ServicesPage;