"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { FiSearch, FiLayers, FiCode, FiTrendingUp } from "react-icons/fi";

const steps = [
  {
    title: "Deconstruct",
    description: "Analyzing behavioral data and technical constraints to identify the optimal path before execution.",
    icon: <FiSearch />,
  },
  {
    title: "Architect",
    description: "Designing scalable, high-performance systems like APKIDUKAAN, where structural integrity meets UI precision.",
    icon: <FiLayers />,
  },
  {
    title: "Engineer",
    description: "Translating complex logic into production-grade code, utilizing Next.js and React for sub-second interactions.",
    icon: <FiCode />,
  },
  {
    title: "Iterate",
    description: "Using real-world analytics to optimize Apkidukaan screens and refine system efficiency indefinitely.",
    icon: <FiTrendingUp />,
  },
];

export default function HowIThink() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <section ref={containerRef} className="py-24 md:py-40 px-6 md:px-24 max-w-7xl mx-auto relative overflow-hidden">
      {/* Background Watermark - Responsive Scale */}
      <div className="absolute top-0 left-0 text-[20vw] md:text-[15vw] font-black text-white/[0.01] select-none pointer-events-none tracking-tighter">
        PROCESS
      </div>

      <div className="flex flex-col items-center mb-20 md:mb-32">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3 mb-4"
        >
          <div className="w-8 md:w-10 h-[1px] bg-white/20" />
          <span className="text-blue-400 tracking-[0.3em] md:tracking-[0.4em] text-[8px] md:text-[10px] font-bold uppercase">The Philosophy</span>
          <div className="w-8 md:w-10 h-[1px] bg-white/20" />
        </motion.div>
        <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-none text-center uppercase italic">
          How I <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-blue-900/50">Think.</span>
        </h2>
      </div>

      <div className="relative">
        {/* Responsive Circuit Line: Left on Mobile, Center on Desktop */}
        <div className="absolute left-[18px] md:left-1/2 top-0 -translate-x-1/2 w-[1px] h-full bg-white/5" />
        <motion.div 
          style={{ scaleY, originY: 0 }}
          className="absolute left-[18px] md:left-1/2 top-0 -translate-x-1/2 w-[1px] h-full bg-gradient-to-b from-blue-500 via-white to-transparent shadow-[0_0_15px_#3b82f6] z-10"
        />

        <div className="space-y-24 md:space-y-40">
          {steps.map((step, index) => (
            <TimelineItem key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ step, index }: any) {
  const isLeft = index % 2 === 0;

  return (
    <div className={`relative flex items-center w-full`}>
      {/* Central Node Dot: Moves with the line */}
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        className="absolute left-[18px] md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-white border-2 border-blue-500 shadow-[0_0_15px_white] z-20"
      />

      {/* Content Card: Stays on one side for mobile, alternates for desktop */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        viewport={{ once: true, margin: "-100px" }}
        className={`w-full md:w-[45%] pl-12 md:pl-0 ${
          isLeft ? "md:mr-auto md:text-right md:pr-16" : "md:ml-auto md:text-left md:pl-16"
        }`}
      >
        <div className={`flex flex-col items-start ${isLeft ? "md:items-end" : "md:items-start"} gap-4 md:gap-6 group`}>
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl md:rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-xl md:text-2xl text-blue-500 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_0_30px_#2563eb]">
            {step.icon}
          </div>
          
          <h3 className="text-2xl md:text-4xl font-black tracking-tighter text-white uppercase italic">
            {step.title}
          </h3>
          
          <p className={`text-slate-400 text-sm md:text-base leading-relaxed max-w-sm font-light ${isLeft ? "md:text-right" : "md:text-left"}`}>
            {step.description}
          </p>

          {/* Identity Tag - Minimalist for Mobile */}
          <div className="mt-2 md:mt-4 px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            <span className="text-[7px] md:text-[8px] font-mono text-slate-500 uppercase tracking-widest">Protocol: Exec_{index + 1}</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}