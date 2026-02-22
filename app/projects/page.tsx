"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, AnimatePresence, Variants } from "framer-motion";
import { 
  FiArrowRight, FiCpu, FiGlobe, FiLayers, FiZap, FiActivity, FiTerminal, FiCode, FiSearch
} from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// --- Advanced Physics & Variants ---
const springConfig = { stiffness: 100, damping: 30 };

const moduleContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const moduleItemVariants: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  },
};

export default function ProjectsPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -150]), springConfig);

  const mainHighlights = [
    {
      id: "01",
      title: "Apkidukaan",
      subtitle: "Your Digital Store",
      tag: "E-Commerce Ecosystem",
      desc: "Vendor-integrated marketplace designed for high-velocity transaction logic.",
      icon: <FiGlobe />,
      accent: "#3b82f6"
    },
    {
      id: "02",
      title: "AspireNextGen AI",
      subtitle: "Autonomous Intel",
      tag: "Generative Neural Engine",
      desc: "Predictive behavioral modeling and automated decision-making workflows.",
      icon: <FiCpu />,
      accent: "#818cf8"
    },
    {
      id: "03",
      title: "Triarch Group",
      subtitle: "Enterprise Suite",
      tag: "Management Architecture",
      desc: "Multi-layered data delegation and organizational scaling systems.",
      icon: <FiLayers />,
      accent: "#10b981"
    }
  ];

  const technicalModules = [
    { title: "AI Learning System", org: "GNIOT", tags: ["AI", "ML"], icon: <FiActivity /> },
    { title: "CA Software", org: "NexBrites", tags: ["UI/UX", "API"], icon: <FiCode /> },
    { title: "Smart Home Access", org: "GNIOT", tags: ["IoT", "Security"], icon: <FiZap /> },
    { title: "Career Guidance", org: "SIH 2024", tags: ["NLP", "Blockchain"], icon: <FiSearch /> },
    { title: "The Axis Pay", org: "NexBrites", tags: ["Fintech", "UX"], icon: <FiLayers /> },
    { title: "Email Spam Guard", org: "Personal", tags: ["Python", "ML"], icon: <FiTerminal /> }
  ];

  return (
    <main ref={containerRef} className="relative min-h-screen bg-[#010409] text-slate-200 overflow-x-hidden">
      
      {/* 1. NEURAL PULSE BACKGROUND */}
      <motion.div style={{ y: backgroundY }} className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_20%,rgba(37,99,235,0.08),transparent)]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:40px_40px] md:bg-[size:60px_60px] opacity-[0.05] [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      </motion.div>

      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 md:pt-52 pb-32">
        
        {/* 2. DYNAMIC HEADER */}
        <header className="mb-16 md:mb-40">
          <motion.div 
            initial={{ opacity: 0, x: -20 }} 
            animate={{ opacity: 1, x: 0 }} 
            className="flex items-center gap-3 md:gap-4 mb-6"
          >
            <div className="w-8 md:w-12 h-px bg-blue-600" />
            <span className="font-mono text-[8px] md:text-[10px] text-blue-500 tracking-[0.4em] md:tracking-[0.5em] uppercase">System_Output // Major_Deployments</span>
          </motion.div>
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter italic uppercase leading-[0.9] md:leading-[0.8] text-white">
            Project <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-600">Nexus.</span>
          </h1>
        </header>

        {/* 3. KINETIC STACK (Major Highlights) */}
        <section className="mb-32 md:mb-64">
          <div className="flex flex-col gap-0">
            {mainHighlights.map((project, idx) => (
              <KineticProject key={project.id} project={project} index={idx} />
            ))}
          </div>
        </section>

        {/* 4. MODULE GRID (Animated Secondary Projects) */}
        <section className="mb-32 md:mb-48">
          <div className="flex items-center gap-4 mb-12 md:mb-16">
            <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tighter uppercase italic">Technical Modules</h2>
            <div className="h-px flex-grow bg-white/5" />
          </div>

          <motion.div 
            variants={moduleContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          >
            {technicalModules.map((module, idx) => (
              <ModuleCard 
                key={idx}
                title={module.title}
                org={module.org}
                tags={module.tags}
                icon={module.icon}
              />
            ))}
          </motion.div>
        </section>

        {/* 5. MASTER EXECUTION CTA */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="relative text-center py-20 md:py-40 border-y border-white/5 overflow-hidden group rounded-[2.5rem] md:rounded-none bg-white/[0.01]"
        >
          <div className="absolute inset-0 bg-blue-600/[0.03] blur-[120px]" />
          <h2 className="text-4xl sm:text-6xl md:text-8xl font-black text-white italic tracking-tighter uppercase leading-none mb-10 relative z-10 px-4">
            Initialize <br /> <span className="text-blue-600">New_Build?</span>
          </h2>
          <Link href="/contact" className="relative z-10 inline-block group/btn px-6 w-full md:w-auto">
            <motion.div 
              whileTap={{ scale: 0.95 }}
              className="px-8 md:px-16 py-5 md:py-6 bg-white text-black font-black uppercase text-[10px] md:text-sm tracking-[0.3em] italic flex items-center justify-center gap-4 hover:bg-blue-600 hover:text-white transition-all duration-500 shadow-2xl"
            >
              Contact_Architect <FiArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
            </motion.div>
          </Link>
        </motion.section>
      </div>

      <Footer />
    </main>
  );
}

// --- Kinetic Stack Component ---

function KineticProject({ project, index }: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      // Handle mobile touch as a "peek" effect
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      className="relative w-full border-b border-white/5 group cursor-pointer overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between py-12 md:py-20 px-2 md:px-8 transition-all duration-700 group-hover:bg-white/[0.03]">
        <div className="flex items-center gap-6 md:gap-12 relative z-10">
          <span className="font-mono text-blue-500/40 text-xs md:text-xl tracking-tighter">[{project.id}]</span>
          <div>
            <h3 className="text-3xl sm:text-5xl md:text-8xl font-black uppercase italic tracking-tighter text-white group-hover:text-blue-500 transition-colors duration-500 leading-[0.9]">
              {project.title}
            </h3>
            <p className="text-slate-500 font-mono text-[9px] md:text-xs tracking-widest mt-3 group-hover:text-slate-300 transition-colors">
              {project.tag}
            </p>
          </div>
        </div>

        {/* Mobile-visible brief desc, Desktop-visible icon container */}
        <div className="mt-6 md:mt-0 flex flex-col md:items-end md:max-w-sm text-left md:text-right">
          <motion.p 
            animate={{ opacity: isHovered ? 1 : 0.4, x: isHovered ? 0 : -5 }}
            className="text-slate-400 italic text-xs md:text-sm mb-4 leading-relaxed font-light line-clamp-2 md:line-clamp-none"
          >
            "{project.desc}"
          </motion.p>
          <div className="hidden md:block text-3xl text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]">
            {project.icon}
          </div>
        </div>

        {/* Mobile View Indicator */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 md:hidden pr-2">
          <FiArrowRight className={`text-blue-500 transition-transform duration-500 ${isHovered ? 'rotate-[-45deg] scale-125' : ''}`} />
        </div>
      </div>

      <AnimatePresence>
        {isHovered && (
          <motion.div 
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            exit={{ height: 0 }}
            className="absolute top-0 left-0 w-1 bg-blue-600 z-20 shadow-[0_0_20px_#2563eb]"
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// --- Animated Module Card ---

function ModuleCard({ title, org, tags, icon }: any) {
  return (
    <motion.div 
      variants={moduleItemVariants}
      whileHover={{ y: -8, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="p-8 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-white/[0.02] border border-white/5 active:border-blue-500/50 transition-all duration-500 flex flex-col justify-between h-[240px] md:h-[280px] relative overflow-hidden group shadow-xl"
    >
      {/* Scanning Line Pulse - Performance optimized for mobile */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-blue-500/10 md:bg-blue-500/20 translate-y-[-100%] group-hover:translate-y-[280px] transition-transform duration-[2s] ease-in-out" />
      
      <div>
        <div className="flex justify-between items-start mb-6">
          <div className="p-3 rounded-xl bg-blue-500/5 text-blue-500 border border-blue-500/10 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
            {icon}
          </div>
          <span className="text-[8px] md:text-[10px] font-mono text-slate-500 uppercase tracking-[0.2em]">{org}</span>
        </div>
        <h4 className="text-xl md:text-2xl font-bold text-white uppercase tracking-tight leading-tight group-hover:text-blue-400 transition-colors">
          {title}
        </h4>
      </div>
      
      <div className="flex flex-wrap gap-2">
        {tags.map((tag: string) => (
          <span key={tag} className="text-[8px] md:text-[9px] font-mono text-blue-400 bg-blue-500/5 px-3 py-1.5 rounded-full border border-blue-500/10 uppercase tracking-tighter">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  );
}