"use client";

import React, { useRef, useState, useMemo, useEffect } from "react";
import Link from "next/link";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
  AnimatePresence,
} from "framer-motion";
import {
  FiDatabase,
  FiLayers,
  FiTrendingUp,
  FiLayout,
  FiActivity,
  FiSearch,
  FiZap,
  FiTerminal,
  FiArrowRight,
} from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const springConfig = { stiffness: 100, damping: 30 };

// Moved SkillBento OUTSIDE to prevent re-declaration issues and hook errors
function SkillBento({
  className,
  icon,
  title,
  desc,
  skills,
  status,
  horizontal,
  link,
  isMobile,
}: any) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(x, [-100, 100], [-5, 5]), springConfig);

  const radialGradient = useTransform([x, y], ([vx, vy]) => {
    return `radial-gradient(400px circle at ${Number(vx)}px ${Number(vy)}px, rgba(37, 99, 235, 0.08), transparent 80%)`;
  });

  const handleMouse = (e: React.MouseEvent) => {
    if (isMobile) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      onMouseMove={handleMouse}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      whileTap={{ scale: 0.98 }}
      style={{
        rotateX: isMobile ? 0 : rotateX,
        rotateY: isMobile ? 0 : rotateY,
        perspective: 1000,
      }}
      className={`group relative p-6 md:p-12 rounded-[2rem] md:rounded-[3.2rem] border border-white/5 bg-white/[0.02] flex flex-col justify-between overflow-hidden transition-all duration-500 hover:border-blue-500/30 ${className}`}
    >
      {!isMobile && (
        <motion.div
          className="absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{ background: radialGradient }}
        />
      )}

      <div className={`${horizontal ? "flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 md:gap-10 w-full" : "w-full h-full flex flex-col"}`}>
        <div className={horizontal ? "max-w-xl text-left" : "flex-grow"}>
          <div className="flex items-center justify-between mb-6 md:mb-8">
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-lg md:text-2xl text-blue-500">
              {icon}
            </div>
            {status && (
              <span className="text-[7px] md:text-[9px] font-mono text-blue-500 px-2 md:px-3 py-1 rounded-full border border-blue-500/20 bg-blue-500/5 uppercase tracking-widest">
                {status}
              </span>
            )}
          </div>

          <h3 className="text-xl md:text-3xl font-black text-white italic uppercase tracking-tighter mb-3 md:mb-4">
            {title}
          </h3>

          <p className="text-xs md:text-sm text-slate-500 font-light italic leading-relaxed mb-6 md:mb-10">
            "{desc}"
          </p>

          <Link href={link || "#"}>
            <div className={`inline-flex items-center gap-2 text-[9px] md:text-[10px] font-mono text-blue-500 uppercase tracking-widest transition-all transform ${isMobile ? "opacity-100" : "opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0"} mb-6 cursor-pointer`}>
              Inspect_Module <FiArrowRight />
            </div>
          </Link>
        </div>

        <div className={`flex flex-wrap gap-1.5 md:gap-2 ${horizontal ? "lg:justify-end" : ""}`}>
          {skills.map((skill: string) => (
            <span
              key={skill}
              className="px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl bg-white/5 border border-white/5 text-[8px] md:text-[10px] font-mono text-slate-400 uppercase tracking-widest"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function SkillsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const backgroundY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -150]), springConfig);
  const pathLength = useSpring(scrollYProgress, { stiffness: 30, damping: 15 });
  const offsetDistance = useTransform(pathLength, [0, 1], ["0%", "100%"]);

  const skillMatrix = useMemo(() => [
    {
      id: "ds",
      className: "col-span-1 md:col-span-7 bg-blue-600/10 border-blue-500/20",
      icon: <FiDatabase />,
      title: "Data Science",
      desc: "Building high-entropy models that transform raw data into predictive intelligence.",
      skills: ["Python", "AI/ML", "Pandas", "Neural Networks"],
      status: "Master",
      link: "/projects",
    },
    {
      id: "fe",
      className: "col-span-1 md:col-span-5",
      icon: <FiLayout />,
      title: "UI/UX Engineering",
      desc: "Next-generation web architectures with focus on sub-second performance.",
      skills: ["Next.js", "TypeScript", "Tailwind", "Framer"],
      status: "Advanced",
      link: "/projects",
    },
    {
      id: "gs",
      className: "col-span-1 md:col-span-4",
      icon: <FiTrendingUp />,
      title: "Growth Strategy",
      desc: "Scaling digital presence through technical SEO and branding.",
      skills: ["Technical SEO", "Identity", "Marketing Ops"],
      status: "Strategic",
      link: "/projects",
    },
    {
      id: "infra",
      className: "col-span-1 md:col-span-4 bg-indigo-900/10 border-indigo-500/10",
      icon: <FiLayers />,
      title: "Infrastructure",
      desc: "Managing core deployment cycles and task coordination systems.",
      skills: ["Node.js", "Express", "MongoDB", "Cloud"],
      status: "Core",
      link: "/projects",
    },
    {
      id: "lead",
      className: "col-span-1 md:col-span-4",
      icon: <FiActivity />,
      title: "Leadership",
      desc: "Mentoring 500+ students and architecting curriculum for BFSC.",
      skills: ["Planning", "Mentoring", "Pedagogy"],
      status: "Executive",
      link: "/contact",
    },
    {
      id: "sih",
      className: "col-span-1 md:col-span-12 mt-4 md:mt-10",
      icon: <FiZap />,
      title: "SIH CodeStorm",
      desc: "Specializing in Blockchain and AI Career Guidance systems built for market readiness.",
      skills: ["Blockchain", "NLP", "AI/ML", "Fast Iteration"],
      status: "Winner",
      horizontal: true,
      link: "/projects",
    },
  ], []);

  const filteredSkills = skillMatrix.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.skills.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <main ref={containerRef} className="relative min-h-screen bg-[#010409] text-slate-200 overflow-x-hidden">
      
      {/* 1. NEURAL ZIG-ZAG LIGHT PATH */}
      <div className="absolute inset-0 pointer-events-none z-[1] opacity-40">
        <svg className="w-full h-full" viewBox="0 0 100 1000" preserveAspectRatio="none">
          <path d="M 10 0 L 90 200 L 10 400 L 90 600 L 10 800 L 90 1000" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.2" />
          <motion.path d="M 10 0 L 90 200 L 10 400 L 90 600 L 10 800 L 90 1000" fill="none" stroke="url(#gradient-light)" strokeWidth="0.4" style={{ pathLength }} />
          <defs>
            <linearGradient id="gradient-light" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="50%" stopColor="#60a5fa" stopOpacity="1" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        {!isMobile && (
          <motion.div 
            className="fixed top-0 left-0 w-4 h-4 bg-blue-400 rounded-full blur-[8px] shadow-[0_0_20px_#60a5fa]"
            style={{ offsetPath: "path('M 10 0 L 90 200 L 10 400 L 90 600 L 10 800 L 90 1000')", offsetDistance }}
          />
        )}
      </div>

      {/* Background Decorative Gradients */}
      <motion.div style={{ y: backgroundY }} className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-5%] right-[-10%] w-[100vw] h-[100vw] md:w-[70vw] md:h-[70vw] bg-blue-600/[0.04] rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />
      </motion.div>

      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-6 lg:px-12 pt-32 md:pt-52 pb-20 md:pb-32">
        
        {/* RESTORED HEADER SECTION */}
        <section className="mb-12 md:mb-20">
          <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
            <div className="w-8 md:w-12 h-px bg-blue-600" />
            <span className="font-mono text-[9px] md:text-[10px] text-blue-500 tracking-[0.3em] md:tracking-[0.5em] uppercase italic">Capability_Report</span>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter italic uppercase leading-[0.9] text-white mb-8 md:mb-12">
            Tech <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-slate-500">Arsenal.</span>
          </h1>

          <div className="relative max-w-md group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur opacity-10 group-focus-within:opacity-30 transition duration-500" />
            <div className="relative flex items-center bg-[#0d1117] border border-white/10 rounded-xl px-4 py-3 md:py-4">
              <FiTerminal className="text-blue-500 mr-3 shrink-0" />
              <input 
                type="text"
                placeholder="search_module..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none text-xs md:text-sm font-mono text-white placeholder:text-slate-600 w-full"
              />
              <FiSearch className="text-slate-600 ml-2 shrink-0" />
            </div>
          </div>
        </section>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <SkillBento key={skill.id} {...skill} isMobile={isMobile} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* RESTORED CTA SECTION */}
        <section className="mt-24 md:mt-48 text-center py-16 md:py-24 border-y border-white/5 relative overflow-hidden group rounded-[2.5rem] md:rounded-none bg-white/[0.01]">
           <div className="absolute inset-0 bg-blue-600/5 translate-y-full group-hover:translate-y-0 transition-transform duration-1000 hidden md:block" />
           <p className="font-mono text-[9px] md:text-[10px] text-slate-500 tracking-[0.2em] md:tracking-[0.4em] mb-8 md:mb-10 uppercase italic">Initiate protocol deployment?</p>
           <div className="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 relative z-10 px-6">
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full px-8 md:px-10 py-4 md:py-5 bg-white text-black font-black uppercase text-[10px] md:text-xs tracking-widest italic active:scale-95 transition-all shadow-xl">
                  Contact_Architect
                </button>
              </Link>
              <Link href="/projects" className="w-full sm:w-auto">
                <button className="w-full px-8 md:px-10 py-4 md:py-5 border border-white/10 text-white font-black uppercase text-[10px] md:text-xs tracking-widest italic active:scale-95 transition-all">
                  Browse_Nexus
                </button>
              </Link>
           </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}