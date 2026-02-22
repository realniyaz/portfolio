"use client";

import { motion, type Variants } from "framer-motion";
import HeroSphere from "../components/HeroSphere";
import { FiZap, FiChevronRight, FiCpu } from "react-icons/fi";
import Link from "next/link";

/* ------------------ ANIMATION VARIANTS ------------------ */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

/* ------------------ COMPONENT ------------------ */

export default function Hero() {
  return (
    <main className="relative min-h-[100dvh] flex items-center justify-center px-6 md:px-12 lg:px-24 overflow-hidden pt-20">
      
      {/* Background Glows - Adjusted for Mobile */}
      <div className="absolute top-1/4 left-[-10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-blue-600/10 rounded-full blur-[80px] md:blur-[140px] -z-10" />
      <div className="absolute bottom-1/4 right-[-10%] w-[250px] h-[250px] bg-indigo-600/5 rounded-full blur-[100px] -z-10 hidden md:block" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 w-full max-w-7xl items-center z-10"
      >
        {/* LEFT CONTENT: Content centered on mobile, left-aligned on desktop */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

          {/* Status Badge */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 w-fit px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6 md:mb-8 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
            </span>
            <span className="text-[9px] md:text-[10px] font-bold tracking-[0.2em] text-blue-100/60 uppercase">
              System_Online // Lead Architect
            </span>
          </motion.div>

          {/* Headline: Responsive Text Sizes */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.85] text-white uppercase italic">
              Niyaz <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-blue-900/50">
                Ahmed.
              </span>
            </h1>
          </motion.div>

          {/* Subtext: Better readability on mobile */}
          <motion.p
            variants={itemVariants}
            className="mt-6 md:mt-8 text-slate-400 max-w-sm md:max-w-md text-base md:text-lg leading-relaxed font-light border-blue-500/30 lg:border-l lg:pl-6"
          >
            Engineering scalable systems where <span className="text-white font-medium italic">Data Science</span> meets <span className="text-white font-medium italic">Execution</span>.
          </motion.p>

          {/* Buttons: Full width on very small screens */}
          <motion.div variants={itemVariants} className="mt-10 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link href="/projects" className="w-full sm:w-auto">
              <button className="group relative w-full sm:w-auto px-10 py-4 bg-white text-black font-black uppercase text-xs tracking-widest italic overflow-hidden transition-all active:scale-95">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Execute_Work <FiZap />
                </span>
                <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </Link>

            <Link href="/process" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-white/20 transition-all text-xs font-bold tracking-widest text-white uppercase flex items-center justify-center gap-2">
                Tech_Specs <FiChevronRight />
              </button>
            </Link>
          </motion.div>

          {/* Tech Stack Footer: Hidden on small mobile to reduce clutter */}
          <motion.div
            variants={itemVariants}
            className="mt-16 hidden sm:flex items-center gap-8 opacity-20"
          >
            {["Next.js", "AI/ML", "TypeScript"].map((tech) => (
              <span key={tech} className="text-[9px] font-mono uppercase tracking-[0.3em] text-white">
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        {/* RIGHT CONTENT: Sphere hidden on mobile, or replaced with light glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="relative h-[300px] md:h-[500px] lg:h-[650px] w-full flex items-center justify-center lg:block"
        >
          {/* Sphere only visible from Medium screens up to save performance */}
          <div className="hidden md:block w-full h-full">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3b82f610_0%,transparent_70%)]" />
            <HeroSphere />
          </div>
          
          {/* Mobile Alternative: A clean animated pulse/glow */}
          <div className="md:hidden relative w-64 h-64 flex items-center justify-center">
            <div className="absolute w-full h-full bg-blue-600/10 rounded-full blur-3xl animate-pulse" />
            <div className="relative w-32 h-32 border border-blue-500/20 rounded-full flex items-center justify-center">
                <FiCpu className="text-blue-500/40 text-4xl" />
                <div className="absolute inset-0 border border-blue-500/10 rounded-full animate-[spin_10s_linear_infinite]" />
            </div>
          </div>
        </motion.div>

      </motion.div>
    </main>
  );
}