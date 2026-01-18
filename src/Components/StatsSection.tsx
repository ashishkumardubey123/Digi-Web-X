"use client";
import { motion } from "framer-motion";
import { NumberTicker} from "@/Components/ui/number-ticker"

function StatsSection() {
  return (
    <section className="relative z-10 py-4 sm:py-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="
          w-full
          rounded-xl sm:rounded-2xl
          border border-white/20
          bg-gradient-to-br
          from-indigo-500/10
          via-blue-500/10
          to-purple-500/10
          backdrop-blur-xl
          shadow-lg
          px-4 py-4
          sm:px-6 sm:py-6
          lg:px-8 lg:py-6
        "
      >
        <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center">

          {/* Projects Delivered */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-4xl font-bold text-gray-900">
                    <span>
                <NumberTicker
      value={100}
      
    />
              +</span>
            </h3>
            <p className="mt-1 text-[10px] sm:text-xl font-medium text-gray-900">
              Projects Delivered
            </p>
          </motion.div>

          {/* Happy Clients */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-4xl font-bold text-gray-900">
                   <span>
                <NumberTicker
      value={90} 
      
    />
              +</span>
            </h3>
            <p className="mt-1 text-[10px] sm:text-xl font-medium text-gray-900">
              Happy Clients
            </p>
          </motion.div>

          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-3xl font-bold text-gray-900">
             
              <span className=" text-xl sm:text-4xl ">
                <NumberTicker
      value={5}
      
    />
              </span>
              
              +
            </h3>
            <p className="mt-1 text-[10px] sm:text-xl font-medium text-gray-900">
             Years of Experience
            </p>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}

export default StatsSection;
