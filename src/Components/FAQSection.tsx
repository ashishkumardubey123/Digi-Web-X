"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "We offer end-to-end digital services including website development, SEO optimization, digital marketing, and social media content creation. Our solutions are tailored to help businesses grow online effectively."
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "Project timelines depend on requirements and complexity. A standard business website usually takes 1 to 2 weeks, while more advanced or feature-rich projects may take longer. We share a clear timeline before starting."
  },
  {
    question: "Do you provide SEO and digital marketing services?",
    answer:
      "Yes. We provide SEO-focused development, ongoing SEO optimization, and digital marketing strategies designed to increase visibility, traffic, and lead generation."
  },
  {
    question: "Will my website be mobile-friendly and fast?",
    answer:
      "Absolutely. All our websites are built using a mobile-first approach and optimized for speed, performance, and smooth user experience across all devices."
  },
  {
    question: "Do you offer ongoing support after project delivery?",
    answer:
      "Yes. We provide post-launch support, maintenance, updates, and performance optimization to ensure your website continues to perform well as your business grows."
  },
  {
    question: "How is pricing decided for a project?",
    answer:
      "Pricing is based on your project scope, features, and goals. We offer transparent and flexible pricing, along with a free consultation to provide a tailored estimate."
  }
];

const FAQItem = ({ question, answer, isOpen, toggle }: { question: string, answer: string, isOpen: boolean, toggle: () => void }) => {
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button 
        onClick={toggle}
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
      >
        <span className={`text-lg font-semibold transition-colors duration-300 ${isOpen ? 'text-purple-600' : 'text-gray-900 group-hover:text-purple-600'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${isOpen ? 'bg-purple-600 border-purple-600 rotate-180' : 'bg-white border-gray-300 group-hover:border-purple-400'}`}>
          {isOpen ? (
            <Minus className="w-4 h-4 text-white" />
          ) : (
            <Plus className="w-4 h-4 text-gray-500 group-hover:text-purple-500" />
          )}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed text-base">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
   <section className="py-10  relative overflow-hidden bg-gradient-to-br from-purple-500/10 via-indigo-500/10 to-transparent">

      {/* Subtle Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
          <div className="absolute top-[10%] left-[-10%] w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40" />
          <div className="absolute bottom-[10%] right-[-10%] w-64 h-64 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40" />
      </div>

      <div className="max-w-3xl mx-auto px-4 relative z-10">
        <div className="text-center mb-10">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-purple-600 font-bold tracking-widest uppercase text-sm"
          >
            Support
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-2 text-2xl md:text-4xl font-bold text-gray-900"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl shadow-xl shadow-purple-900/5 border border-purple-100/50 p-2 md:p-8"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              toggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;