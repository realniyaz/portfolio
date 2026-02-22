"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, Variants } from "framer-motion";
import { FiAward, FiCheckCircle, FiActivity, FiZap, FiTarget, FiStar } from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const springConfig = { stiffness: 100, damping: 30 };

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

export default function ProcessPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const pathLength = useSpring(scrollYProgress, springConfig);

  return (
    <main ref={containerRef} className="relative min-h-screen bg-[#020617] text-slate-200 overflow-x-hidden">
      
      {/* 1. KINETIC BACKGROUND */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.05),transparent)]" />
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>

      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-40 md:pt-52 pb-32">
        
        {/* 2. HEADER */}
        <header className="mb-24 md:mb-40">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-blue-600" />
            <span className="font-mono text-[10px] text-blue-500 tracking-[0.5em] uppercase text-glow">System_Workflow // Honors</span>
          </motion.div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter italic uppercase leading-none text-white">
            Process <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">& Merit.</span>
          </h1>
        </header>

        {/* 3. AWARDS & HONORS: HOLOGRAPHIC VAULT */}
        <section className="mb-48 md:mb-64">
          <div className="flex items-center gap-4 mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tighter uppercase italic">Merit Vault</h2>
            <div className="h-px flex-grow bg-white/5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AwardCard 
              title="Academic Achievement Award"
              org="Greater Noida Institute of Technology"
              date="DEC 2023"
              desc="Secured 9 SGPA in both Semester 1 and 2 of B-Tech. Recognized for high standard of learning and coursework excellence."
              icon={<FiAward />}
            />
            <AwardCard 
              title="Best Student Award"
              org="Bright Future Academy"
              date="JUL 2022"
              desc="Achieved 97% in Science (Class 12). Perfect 100/100 scores in Mathematics and Chemistry."
              icon={<FiStar />}
            />
          </div>
        </section>

        {/* 4. EXECUTION PROCESS: PIPELINE SCROLL */}
        <section className="relative">
          <div className="flex items-center gap-4 mb-20">
            <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tighter uppercase italic">Execution Pipeline</h2>
            <div className="h-px flex-grow bg-white/5" />
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Animated Progress Line */}
            <div className="absolute left-[18px] md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 md:-translate-x-1/2">
              <motion.div style={{ scaleY: pathLength }} className="w-full h-full bg-blue-600 origin-top shadow-[0_0_15px_#2563eb]" />
            </div>

            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="space-y-32">
              <ProcessStep 
                num="01" 
                title="Deconstruction" 
                desc="Breaking complex architectures into atomic data points to identify core entropy."
                icon={<FiActivity />} 
                side="left"
              />
              <ProcessStep 
                num="02" 
                title="Strategy Neural" 
                desc="Mapping AI-enhanced career pathways and branding funnels for maximum reach."
                icon={<FiTarget />} 
                side="right"
              />
              <ProcessStep 
                num="03" 
                title="Execution Flow" 
                desc="Full-stack deployment using sub-second performance stacks like Next.js."
                icon={<FiZap />} 
                side="left"
              />
              <ProcessStep 
                num="04" 
                title="Merit Validation" 
                desc="Continuous system audits and performance tracking to ensure 99.9% reliability."
                icon={<FiCheckCircle />} 
                side="right"
              />
            </motion.div>
          </div>
        </section>

        {/* 5. CTA */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          className="mt-48 text-center py-20 border border-white/5 rounded-[3rem] bg-white/[0.02] relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-blue-600/5 translate-y-full group-hover:translate-y-0 transition-transform duration-1000" />
          <p className="font-mono text-[10px] text-blue-500 tracking-[0.4em] mb-10 uppercase italic">Initiate_Partnership?</p>
          <a href="/contact" className="relative z-10 inline-block px-12 py-5 bg-white text-black font-black uppercase text-xs tracking-[0.3em] hover:bg-blue-600 hover:text-white transition-all shadow-2xl">
            Execute_Contact
          </a>
        </motion.section>
      </div>

      <Footer />
    </main>
  );
}

// --- Specialized Components ---

function AwardCard({ title, org, date, desc, icon }: any) {
  return (
    <motion.div 
      whileHover={{ y: -10 }} 
      whileTap={{ scale: 0.98 }}
      className="p-8 md:p-12 rounded-[2.5rem] bg-gradient-to-br from-blue-600/10 to-transparent border border-white/10 relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-10 transition-opacity">
        <div className="text-[10rem] rotate-12">{icon}</div>
      </div>
      <div className="flex justify-between items-start mb-8">
        <div className="w-14 h-14 rounded-2xl bg-blue-600/20 flex items-center justify-center text-2xl text-blue-500 shadow-[0_0_20px_rgba(37,99,235,0.3)]">
          {icon}
        </div>
        <span className="font-mono text-[10px] text-blue-500 bg-blue-500/10 px-3 py-1 rounded tracking-widest">{date}</span>
      </div>
      <h3 className="text-2xl md:text-3xl font-black text-white italic uppercase tracking-tighter mb-2">{title}</h3>
      <p className="text-blue-400 font-mono text-[10px] mb-6 uppercase tracking-[0.2em]">{org}</p>
      <p className="text-slate-400 text-sm italic font-light leading-relaxed">"{desc}"</p>
    </motion.div>
  );
}

function ProcessStep({ num, title, desc, icon, side }: any) {
  const isLeft = side === "left";
  return (
    <div className={`flex w-full items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-col gap-8 md:gap-0`}>
      <div className="md:w-[45%] flex flex-col items-center md:items-start text-center md:text-left">
        <motion.div variants={itemVariants} className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/5 hover:border-blue-500/30 transition-all group w-full">
          <div className="flex items-center gap-4 mb-6 justify-center md:justify-start">
            <span className="text-blue-500 font-mono text-xl">{num}</span>
            <div className="text-2xl text-slate-500 group-hover:text-blue-500 transition-colors">{icon}</div>
          </div>
          <h4 className="text-2xl font-bold text-white uppercase italic tracking-tight mb-4">{title}</h4>
          <p className="text-slate-500 text-sm font-light italic leading-relaxed">"{desc}"</p>
        </motion.div>
      </div>
      <div className="md:w-[10%] flex justify-center z-10">
        <div className="w-10 h-10 rounded-full bg-[#020617] border-2 border-blue-600 flex items-center justify-center">
          <div className="w-2 h-2 bg-blue-600 rounded-full animate-ping" />
        </div>
      </div>
      <div className="md:w-[45%]" />
    </div>
  );
}