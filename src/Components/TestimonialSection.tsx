"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageCircle } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Founder, Startup India",
    content: "DigiWebx ne meri website aur SEO dono sambhal liya. Organic traffic 3 months me double ho gaya. The team is very supportive and technically sound.",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Patel",
    role: "Marketing Head, FashionHub",
    content: "Inka social media content game strong hai! Reels and posts ki quality ekdum premium hai, aur engagement bhi badh gaya. Highly recommended for Digital Marketing.",
    rating: 5
  },
  {
    id: 3,
    name: "David Wilson",
    role: "CEO, TechGlobal",
    content: "One of the best agencies for Web Development & Digital Strategy. DigiWebx team ne meri requirement ko bahut ache se samjha aur ROI-focused ads run kiye.",
    rating: 5
  },
  {
    id: 4,
    name: "Amit Verma",
    role: "Director, GreenHomes",
    content: "Professional service aur timely delivery. Inhone meri real estate website ko SEO optimize kiya aur ab hume Google se direct leads aa rahi hain.",
    rating: 5
  },
  {
    id: 5,
    name: "Sneha Gupta",
    role: "Owner, The Baker's Studio",
    content: "Meri bakery ke liye inhone amazing social media calendar banaya. Designs aur captions bahut creative the. Best digital agency experience!",
    rating: 5
  }
];

// Duplicate data to create a seamless loop
const marqueeData = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const TestimonialSection: React.FC = () => {
  return (
    <section className="pb-9 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      
      {/* Header aligned with reference design */}
      <div className="max-w-7xl mx-auto px-4 text-center mb-16">
        
        {/* 1. Dark Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gray-900 text-white text-sm font-medium mb-6 shadow-lg shadow-gray-900/10"
        >
          <MessageCircle className="w-4 h-4 text-white" />
          <span>Results That Speak</span>
        </motion.div>

        {/* 2. Main Title */}
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-5xl font-bold text-gray-900 tracking-tight mb-4"
        >
        Clients Say About Their Experience With Us
        </motion.h2>

        {/* 3. Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-500 text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
        >
        Authentic client stories highlighting how we turned business visions into powerful digital experiences with web development and marketing.
        </motion.p>

        {/* 4. Rating Row */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4"
        >
           <div className="flex gap-1">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
           </div>
           
        <div className="flex items-center gap-2 text-gray-700 font-medium">

  <span className="text-gray-400 text-sm flex items-center gap-1.5 border-l border-gray-300 pl-3 ml-1">
    From verified <GoogleIcon />
    <span className="text-gray-600 font-semibold">client reviews</span>
  </span>
</div>

        </motion.div>
      </div>

      {/* Marquee Slider */}
      <div className="relative w-full overflow-hidden pb-8 group">
         {/* Fade Gradients for smooth edges */}
         <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-r from-white to-transparent pointer-events-none" />
         <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 z-10 bg-gradient-to-l from-white to-transparent pointer-events-none" />
         
         {/* Sliding Track */}
         <div className="flex w-max animate-scroll gap-6 md:gap-8 pl-4 group-hover:[animation-play-state:paused]">
            {marqueeData.map((testimonial, index) => (
              <div 
                key={`${testimonial.id}-${index}`} 
                className="w-[320px] md:w-[400px] p-8 rounded-2xl bg-white border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col flex-shrink-0"
              >
                 <div className="flex items-center justify-between mb-6">
                    <div className="flex gap-1">
                       {[...Array(testimonial.rating)].map((_, i) => (
                         <Star key={i} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-400 text-yellow-400" />
                       ))}
                    </div>
                    {/* Small Google Icon in card for context */}
                    <div className="opacity-80 scale-90"><GoogleIcon /></div>
                 </div>
                 
                 <p className="text-gray-600 text-sm md:text-base leading-relaxed italic mb-8 flex-grow">
                   "{testimonial.content}"
                 </p>
                 
                 <div className="border-t border-gray-100 pt-5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center text-purple-700 font-bold text-xl shadow-inner">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                       <h4 className="font-bold text-gray-900 text-base">{testimonial.name}</h4>
                       <p className="text-xs text-purple-600 font-medium uppercase tracking-wide">{testimonial.role}</p>
                    </div>
                 </div>
              </div>
            ))}
         </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } 
        }
        .animate-scroll {
          animation: scroll 60s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TestimonialSection;