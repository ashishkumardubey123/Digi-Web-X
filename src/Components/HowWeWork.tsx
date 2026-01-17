"use client";
import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Search, Compass, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    id: "01",
    title: "Consultation",
    points: [
      "Understanding the client’s business goals and challenges",
      "Discussing services that best fit the business needs",
      "Identifying the right direction for business growth",
      "Providing initial expert guidance and clarity"
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1000",
    icon: Search,
    colors: {
      bg: "bg-purple-50",
      border: "border-purple-200",
      text: "text-purple-600",
      iconBg: "bg-purple-100",
      gradient: "from-purple-600 to-indigo-600"
    }
  },
  {
    id: "02",
    title: "Planning & Strategy",
    points: [
      "Discussing requirements in detail with the client",
      "Creating a clear and structured project plan",
      "Defining goals, timelines, and execution approach",
      "Aligning strategy with business objectives"
    ],
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=1000",
    icon: Compass,
    colors: {
      bg: "bg-blue-50",
      border: "border-blue-200",
      text: "text-blue-600",
      iconBg: "bg-blue-100",
      gradient: "from-blue-600 to-cyan-600"
    }
  },
  {
    id: "03",
    title: "Execution & Dev",
    points: [
      "Executing the plan with focused development",
      "Building features as per approved requirements",
      "Ensuring clean, scalable, and efficient code",
      "Sharing regular progress updates with the client"
    ],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1000",
    icon: Code2,
    colors: {
      bg: "bg-emerald-50",
      border: "border-emerald-200",
      text: "text-emerald-600",
      iconBg: "bg-emerald-100",
      gradient: "from-emerald-600 to-teal-600"
    }
  },
  {
    id: "04",
    title: "Launch & Support",
    points: [
      "Final review and quality checks before launch",
      "Smooth product delivery and deployment",
      "Explaining product features and usage clearly",
      "Providing post-launch support when needed"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    icon: Rocket,
    colors: {
      bg: "bg-rose-50",
      border: "border-rose-200",
      text: "text-rose-600",
      iconBg: "bg-rose-100",
      gradient: "from-rose-600 to-pink-600"
    }
  }
];

interface StepProps {
  step: typeof steps[0];
  index: number;
  setActiveStep: (i: number) => void;
}

const Step: React.FC<StepProps> = ({ step, index, setActiveStep }) => {
  const contentRef = useRef(null);
  // Using margin to create a trigger line in the center of the viewport
  // The content is considered "in view" only when it intersects this center line
  const isInView = useInView(contentRef, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (isInView) {
      setActiveStep(index);
    }
  }, [isInView, index, setActiveStep]);

  return (
    <div className="h-screen flex flex-col justify-center p-6 md:p-12 transition-opacity duration-500">
      <motion.div
        ref={contentRef}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className={`max-w-xl ${isInView ? 'opacity-100 blur-0' : 'opacity-40 blur-[1px]'} transition-all duration-500`}
      >
        <div className={`text-sm font-bold uppercase tracking-wider mb-4 ${step.colors.text}`}>
          Step {step.id}
        </div>
        <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
          {step.title}
        </h3>
        
        <ul className="space-y-5">
          {step.points.map((point: string, i: number) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start"
            >
              <div className={`mt-1 mr-4 flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-white border ${step.colors.border}`}>
                <CheckCircle2 className={`w-4 h-4 ${step.colors.text}`} />
              </div>
              <span className="text-lg text-gray-700 font-medium leading-relaxed">{point}</span>
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

const HowWeWork: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
<section className="bg-gradient-to-b from-purple-50/50 to-white relative pt-10 pb-8">
      
      {/* Centered Section Header */}
      <div className="max-w-7xl mx-auto px-4 mb-12 lg:mb-20 text-center relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-purple-600 font-bold tracking-widest uppercase text-sm"
        >
          Process
        </motion.span>
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-3 text-4xl md:text-5xl font-bold text-gray-900"
        >
          How We Work
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg"
        >
          From idea to execution, our process is transparent, efficient, and focused on delivering real results.
        </motion.p>
      </div>

      {/* Mobile/Tablet View (Stacked) */}
      <div className="lg:hidden px-4">
        <div className="space-y-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.id} className={`rounded-3xl p-8 border ${step.colors.border} ${step.colors.bg} shadow-sm`}>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${step.colors.iconBg}`}>
                    <Icon className={`w-7 h-7 ${step.colors.text}`} />
                  </div>
                  <span className={`text-4xl font-bold ${step.colors.text} opacity-20`}>{step.id}</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{step.title}</h3>
                <ul className="space-y-3">
                  {step.points.map((point: string, i: number) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className={`w-5 h-5 mr-3 flex-shrink-0 ${step.colors.text}`} />
                      <span className="text-gray-600">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </div>

      {/* Desktop View (Sticky Scroll) */}
      <div className="hidden lg:flex max-w-7xl mx-auto">
        
        {/* Left Column: Scrollable Text */}
        <div className="w-1/2 pl-8">
          <div className="relative border-l border-purple-100 ml-12">
             {/* Steps */}
             {steps.map((step, index) => (
               <Step key={step.id} index={index} step={step} setActiveStep={setActiveStep} />
             ))}
          </div>
        </div>

        {/* Right Column: Sticky Card (Images) */}
        <div className="w-1/2 sticky top-0 h-screen flex items-center justify-center p-12">
          <div className="relative w-full max-w-lg aspect-square">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={`absolute inset-0 rounded-[2.5rem] p-3 flex flex-col
                  bg-slate-900 backdrop-blur-xl border border-white/10 shadow-2xl shadow-purple-900/20
                  overflow-hidden group`}
              >
                {/* Image Container */}
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden">
                   {/* Background Image */}
                   <motion.img 
                     initial={{ scale: 1.1 }}
                     animate={{ scale: 1 }}
                     transition={{ duration: 0.6 }}
                     src={steps[activeStep].image} 
                     alt={steps[activeStep].title}
                     className="w-full h-full object-cover"
                   />
                   
                   {/* Overlay Gradient for Text Readability (if needed) or Aesthetic */}
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />

                   {/* Floating Badge */}
                   <div className="absolute top-6 right-6">
                     <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full">
                       <span className="text-white font-bold tracking-wider text-sm">PHASE {steps[activeStep].id}</span>
                     </div>
                   </div>

                   {/* Bottom Label */}
                   <div className="absolute bottom-8 left-8 right-8">
                     <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-slate-900/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl flex items-center gap-4"
                     >
                        <div className={`p-2 rounded-lg ${steps[activeStep].colors.bg}`}>
                          {React.createElement(steps[activeStep].icon, { 
                            className: `w-6 h-6 ${steps[activeStep].colors.text}` 
                          })}
                        </div>
                        <div>
                          <p className="text-white font-semibold text-lg">{steps[activeStep].title}</p>
                          <div className={`h-1 w-full mt-1 rounded-full bg-gradient-to-r ${steps[activeStep].colors.gradient}`} />
                        </div>
                     </motion.div>
                   </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowWeWork;