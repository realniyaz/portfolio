"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { FiArrowRight, FiSend } from "react-icons/fi";

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1], // cubic-bezier is valid inside Variants
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

export default function CallToAction() {
  return (
    <section className="relative py-24 md:py-40 px-6 md:px-12 lg:px-24 overflow-hidden bg-transparent">
      
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-white/5 pointer-events-none hidden sm:block" />
      <div className="absolute top-0 right-1/4 w-[1px] h-full bg-white/5 pointer-events-none hidden sm:block" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative max-w-6xl mx-auto text-center z-10"
      >
        <motion.div
          variants={itemVariants}
          className="flex justify-center items-center gap-3 mb-6 md:mb-8"
        >
          <div className="w-6 md:w-8 h-[1px] bg-blue-500/30" />
          <span className="text-blue-400/60 tracking-[0.3em] md:tracking-[0.5em] text-[9px] md:text-[10px] font-bold uppercase">
            Available for Collaboration
          </span>
          <div className="w-6 md:w-8 h-[1px] bg-blue-500/30" />
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.95] md:leading-[0.9] mb-10 md:mb-12 uppercase italic"
        >
          <span className="text-white">Let's Build</span> <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-blue-900/50">
            Impactful Code.
          </span>
        </motion.h2>

        <motion.p
          variants={itemVariants}
          className="text-slate-400 max-w-sm md:max-w-2xl mx-auto mb-12 md:mb-16 text-sm md:text-xl font-light leading-relaxed px-2 md:px-4"
        >
          Bridging the gap between <span className="text-white">scalable backends</span> and{" "}
          <span className="text-white">fluid frontends</span>.
          Ready to engineer your next digital breakthrough?
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-10 w-full sm:w-auto"
        >
          <Link href="/contact" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto group relative px-8 md:px-14 py-4 md:py-6 rounded-full bg-white text-black font-black uppercase text-[10px] md:text-xs tracking-[0.2em] flex items-center justify-center gap-3 transition-all shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              <FiSend className="text-base md:text-xl transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              Start Consultation
            </motion.button>
          </Link>

          <Link href="/projects" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto py-4 flex items-center justify-center gap-4 text-slate-500 hover:text-white transition-colors uppercase text-[10px] font-bold tracking-[0.4em] group"
            >
              Explore Archive
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white transition-colors">
                <FiArrowRight className="-rotate-45 group-hover:rotate-0 transition-all duration-500" />
              </div>
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <motion.div
          animate={{ height: [0, 40, 0], opacity: [0, 0.3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" as const }}
          className="w-[1px] bg-blue-500"
        />
        <span className="text-[7px] md:text-[8px] font-mono text-white/10 tracking-[0.3em] uppercase py-4">
          Auth: Niyaz Ahmed // 2026
        </span>
      </div>
    </section>
  );
}