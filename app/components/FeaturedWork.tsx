"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FiArrowUpRight, FiExternalLink, FiLayers, FiZap } from "react-icons/fi";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  },
};

export default function FeaturedWork() {
  return (
    <section className="relative py-24 md:py-40 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto overflow-hidden">
      {/* Cinematic Moving Watermark */}
      <motion.div 
        animate={{ x: [0, -100, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 left-0 text-[25vw] md:text-[18vw] font-black text-white/[0.01] whitespace-nowrap select-none pointer-events-none tracking-[0.1em]"
      >
        DEPLOY_2026 • DEPLOY_2026
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="relative z-10"
      >
        {/* Section Header */}
        <div className="mb-16 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
          <div className="text-center md:text-left">
            <motion.div variants={fadeUp} className="flex items-center justify-center md:justify-start gap-4 mb-4 md:mb-6">
              <div className="w-8 md:w-12 h-[1px] bg-blue-500/50" />
              <span className="text-blue-400 tracking-[0.4em] text-[9px] md:text-[10px] font-bold uppercase">Selection 2026</span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] uppercase italic">
              Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-blue-900/50">Artifacts.</span>
            </motion.h2>
          </div>
          <motion.p variants={fadeUp} className="text-slate-500 font-mono text-[9px] md:text-[10px] max-w-[280px] md:max-w-[220px] text-center md:text-right uppercase tracking-[0.2em] leading-relaxed mx-auto md:mx-0">
            Scalable Infrastructure Meets Precision Frontend Engineering.
          </motion.p>
        </div>

        {/* 1. PRIMARY CASE STUDY: APKIDUKAAN */}
        <ProjectCaseStudy 
          id="01"
          title="APKIDUKAAN"
          subtitle="Digital Commerce Engine"
          description="A high-performance Digital Store featuring scalable inventory architecture and sub-second UI transitions."
          tags={["Next.js", "Architecture", "Inventory"]}
          metrics="Full-Stack Management"
          link="https://apki-dukaan.vercel.app" // Update with actual link
        />

        {/* 2. SECONDARY GRID: ASPIRENEXTGEN & TRIARCH */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-4 md:mt-8">
          <ProjectTile 
            id="02"
            title="AspireNextGen AI"
            description="ML-driven career recommendation system bridging education and industry requirements."
            tags={["Python", "ML", "FastAPI"]}
            link="/projects" // Directs to internal project node
          />
          <ProjectTile 
            id="03"
            title="Triarch Group"
            description="Technical mission and high-performance vision for unified connectivity platform."
            tags={["TypeScript", "Systems", "UI/UX"]}
            link="https://triarch-group.vercel.app/" // Directs to internal project node
          />
        </div>
      </motion.div>
    </section>
  );
}

function ProjectCaseStudy({ id, title, subtitle, description, tags, metrics, link }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
  }, []);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    const rect = ref.current?.getBoundingClientRect();
    if (rect) {
      x.set((e.clientX - rect.left) / rect.width - 0.5);
      y.set((e.clientY - rect.top) / rect.height - 0.5);
    }
  };

  return (
    <motion.div variants={fadeUp} className="group relative">
      <div 
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => { x.set(0); y.set(0); }}
        className="grid lg:grid-cols-5 gap-0 bg-white/[0.02] md:bg-white/[0.03] border border-white/10 rounded-[30px] md:rounded-[40px] overflow-hidden backdrop-blur-3xl"
      >
        <div className="lg:col-span-2 p-8 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
          <div>
            <div className="flex items-center gap-3 mb-8 md:mb-12">
              <span className="font-mono text-[10px] md:text-xs text-blue-500 font-bold">[{id}]</span>
              <div className="h-[px] w-6 md:w-8 bg-white/10" />
              <span className="font-mono text-[8px] md:text-[9px] text-slate-500 uppercase tracking-[0.3em]">Core_Production</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-black text-white mb-2 uppercase tracking-tighter italic">{title}</h3>
            <p className="text-blue-400 font-bold text-[9px] md:text-[10px] uppercase tracking-[0.4em] mb-6 md:mb-10">{subtitle}</p>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 md:mb-12 border-l border-blue-500/30 pl-6 font-light">
              {description}
            </p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag: string) => (
                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[8px] md:text-[9px] uppercase tracking-widest text-slate-500">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <Link href="https://apki-dukaan.vercel.app" className="mt-12 md:mt-16 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white active:text-blue-400 lg:group-hover:text-blue-400 transition-all duration-500">
            Internal_Documentation <FiArrowUpRight />
          </Link>
        </div>

        <Link href={link || "/projects"} target={link?.startsWith('http') ? "_blank" : "_self"} className="lg:col-span-3 h-[300px] sm:h-[400px] lg:h-auto bg-[#020617] relative flex items-center justify-center p-10 md:p-20 [perspective:1000px] cursor-pointer">
          <motion.div 
            style={{ rotateX: isMobile ? 0 : rotateX, rotateY: isMobile ? 0 : rotateY, transformStyle: "preserve-3d" }}
            className="relative w-full h-full bg-blue-600/5 rounded-2xl md:rounded-3xl border border-white/10 shadow-2xl"
          >
            <motion.div 
              style={{ translateZ: isMobile ? 0 : 50 }}
              className="absolute inset-6 md:inset-8 bg-white/[0.02] rounded-xl md:rounded-2xl border border-white/10 backdrop-blur-md flex items-center justify-center"
            >
               <FiLayers className="text-white/5 text-7xl md:text-9xl" />
            </motion.div>

            <motion.div 
              style={{ translateZ: isMobile ? 0 : 100 }}
              className="absolute -top-4 -right-4 md:-top-6 md:-right-6 p-4 md:p-8 bg-white text-black rounded-2xl md:rounded-3xl shadow-2xl"
            >
               <p className="text-[7px] md:text-[9px] font-black uppercase tracking-tighter opacity-40 mb-1">Architecture_Metric</p>
               <p className="text-lg md:text-2xl font-black tracking-tighter leading-none">{metrics}</p>
            </motion.div>

            <motion.div 
              style={{ translateZ: isMobile ? 0 : 150 }}
              className="absolute bottom-6 left-6 md:bottom-10 md:left-10 flex items-center gap-3 md:gap-4 bg-blue-600 p-3 md:p-4 rounded-full shadow-[0_0_20px_rgba(37,99,235,0.4)]"
            >
               <FiZap className="text-white text-sm md:text-base" />
               <span className="text-[8px] md:text-[9px] font-black text-white uppercase tracking-[0.2em] pr-2">System_Active</span>
            </motion.div>
          </motion.div>
        </Link>
      </div>
    </motion.div>
  );
}

function ProjectTile({ id, title, description, tags, link }: any) {
  return (
    <Link href={link || "/projects"} className="block">
      <motion.div 
        variants={fadeUp}
        whileTap={{ scale: 0.98 }}
        className="p-8 md:p-12 h-full bg-white/[0.02] md:bg-white/[0.03] border border-white/10 rounded-[30px] md:rounded-[45px] group active:bg-white/[0.05] lg:hover:bg-white/[0.05] transition-all duration-500 cursor-pointer"
      >
        <div className="flex justify-between items-start mb-12 md:mb-16">
          <span className="font-mono text-[9px] md:text-[10px] text-slate-600 uppercase tracking-[0.4em] italic">[{id}] // MOD_EXEC</span>
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500">
            <FiExternalLink size={16} />
          </div>
        </div>
        <h3 className="text-2xl md:text-3xl font-black text-white mb-4 md:mb-6 uppercase tracking-tighter group-hover:text-blue-400 transition-colors italic">
          {title}
        </h3>
        <p className="text-slate-500 text-xs md:text-sm leading-relaxed mb-8 md:mb-12 font-light">
          {description}
        </p>
        <div className="flex flex-wrap gap-3 md:gap-5">
          {tags.map((tag: string) => (
            <span key={tag} className="text-[8px] md:text-[9px] font-mono text-slate-400 font-bold uppercase tracking-[0.2em] border-b border-blue-500/20 pb-1">{tag}</span>
          ))}
        </div>
      </motion.div>
    </Link>
  );
}