"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { 
  motion, 
  Variants, 
  useScroll, 
  useTransform, 
  useSpring,
  useMotionValue,
} from "framer-motion";
import { 
  FiTrendingUp, FiTarget, FiBarChart2, FiZap, FiCpu, FiLayers, 
  FiTerminal, FiCode, FiActivity, FiGithub, FiLinkedin, FiMail, FiExternalLink, FiArrowRight
} from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// --- Advanced Physics Config ---
const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };

// --- Custom Hook for Character Scrambler ---
const useScrambler = (text: string, active: boolean) => {
  const [display, setDisplay] = useState(text);
  const chars = "!<>-_\\/[]{}—=+*^?#________";
  
  useEffect(() => {
    if (!active) return;
    let iteration = 0;
    const interval = setInterval(() => {
      setDisplay(text.split("").map((char, index) => {
        if (index < iteration) return text[index];
        return chars[Math.floor(Math.random() * chars.length)];
      }).join(""));
      if (iteration >= text.length) clearInterval(interval);
      iteration += 1 / 3;
    }, 40);
    return () => clearInterval(interval);
  }, [text, active]);
  return display;
};

export default function AboutPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -400]), springConfig);

  return (
    <main ref={containerRef} className="relative min-h-screen bg-[#010409] text-slate-200 selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* 1. ATMOSPHERIC ENGINE */}
      <motion.div style={{ y: backgroundY }} className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[100vw] h-[100vw] bg-blue-600/[0.03] rounded-full blur-[180px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-50" />
        <div className="absolute inset-0 bg-[linear-gradient(transparent_0%,rgba(37,99,235,0.02)_50%,transparent_100%)] bg-[length:100%_8px] animate-[scan_8s_linear_infinite]" />
      </motion.div>

      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 md:pt-52 pb-32">
        
        {/* 2. HERO: DECONSTRUCTED IDENTITY */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-32 md:mb-64">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8 order-2 lg:order-1"
          >
            <div className="flex items-center gap-4 mb-6 md:mb-10">
              <div className="h-px w-8 md:w-12 bg-blue-500/50" />
              <span className="font-mono text-[9px] md:text-[10px] text-blue-500 uppercase tracking-[0.5em] animate-pulse">Root // Niyaz_Ahmed</span>
            </div>
            
            <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[12rem] font-black tracking-tighter leading-[0.8] md:leading-[0.7] text-white uppercase italic mb-8 md:mb-12">
              The <br />
              <DecoderText text="ARCHITECT" />
            </h1>
            
            <div className="max-w-2xl space-y-8 md:space-y-10">
              <p className="text-slate-400 text-lg sm:text-2xl md:text-3xl font-light leading-snug border-l-2 md:border-l-4 border-blue-600 pl-6 md:pl-8">
                Operating at the intersection of <span className="text-white italic">Technical Infrastructure</span> and <span className="text-white italic">Academic Leadership</span>.
              </p>
              
              <div className="flex flex-wrap gap-3 md:gap-4 justify-start">
                <SocialLink icon={<FiGithub />} href="https://github.com/realniyaz" label="Source" />
                <SocialLink icon={<FiLinkedin />} href="https://linkedin.com/in/niyazahmedofficial" label="Network" />
                <SocialLink icon={<FiMail />} href="mailto:contact.niyazahmed@gmail.com" label="Direct" />
              </div>
            </div>
          </motion.div>

          <TiltContainer className="lg:col-span-4 lg:sticky lg:top-40 order-1 lg:order-2">
            <div className="relative group p-1.5 md:p-2 rounded-[2.5rem] md:rounded-[3.5rem] bg-gradient-to-br from-white/10 to-transparent border border-white/5">
              <div className="relative aspect-[4/5] rounded-[2.2rem] md:rounded-[3rem] overflow-hidden">
                <motion.img 
                  src="/profile.jpeg" 
                  initial={{ filter: "grayscale(1) brightness(0.8)" }}
                  whileHover={{ filter: "grayscale(0) brightness(1)", scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 md:bottom-8 left-6 md:left-8 right-6 md:right-8 flex justify-between items-end">
                   <div>
                     <p className="text-[8px] md:text-[9px] font-mono text-blue-500 mb-1">DESIGNATION</p>
                     <p className="text-base md:text-lg font-black text-white italic">SOFTWARE DEVELOPER</p>
                   </div>
                   <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-md">
                      <FiZap className="text-blue-500" />
                   </div>
                </div>
              </div>
            </div>
          </TiltContainer>
        </section>

        {/* 3. EXPERIENCE PROTOCOL */}
        <section className="py-10 md:py-20 mb-20 md:mb-40">
          <SectionHeader title="Log // Professional_Stack" subtitle="Executive Path" />
          
          <div className="relative mt-12 md:mt-24">
            <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-px bg-white/5 md:-translate-x-1/2 overflow-hidden">
              <motion.div 
                style={{ scaleY: scrollYProgress }}
                className="w-full h-full bg-blue-600 origin-top shadow-[0_0_40px_rgba(37,99,235,0.5)]" 
              />
            </div>
            
            <div className="space-y-20 md:space-y-40">
              <ExperienceNode 
                side="left"
                period="2025 — PRO"
                company="AIVORRAA"
                role="CTO"
                desc="Orchestrating AI infrastructure and hybrid technical pipelines. Scaling system reliability and deployment throughput."
                tags={["AI", "Infra", "Hybrid"]}
                icon={<FiCpu />}
              />

              <ExperienceNode 
                side="right"
                period="2024 — PRO"
                company="BFSC"
                role="Co-Chair"
                desc="Leading strategic curriculum innovation and high-stakes mentoring for 500+ students. Fostering future-ready academic environments."
                tags={["Leadership", "Strategy", "Mentoring"]}
                icon={<FiTarget />}
                highlight
              />

              <ExperienceNode 
                side="left"
                period="2025 — 2026"
                company="NexBrites"
                role="Lead Developer"
                desc="Architected full-stack ecosystems. Integrated web architecture with high-growth marketing strategy."
                tags={["React", "Growth", "Architecture"]}
                icon={<FiCode />}
              />
            </div>
          </div>
        </section>

        {/* 4. NAVIGATION MODULES */}
        <section className="py-20 md:py-40 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
           <NavModule 
            href="/projects" 
            title="Projects" 
            icon={<FiLayers />} 
            desc="Explore the code repository and live software solutions."
          />
           <NavModule 
            href="/process" 
            title="Process" 
            icon={<FiActivity />} 
            desc="The methodology behind the architecture and honors."
          />
           <NavModule 
            href="/Skills" 
            title="Skills" 
            icon={<FiTerminal />} 
            desc="Real-time system diagnostics of technical capabilities."
          />
           <NavModule 
            href="/contact" 
            title="Connect" 
            icon={<FiMail />} 
            desc="Open for strategic roles and high-impact partnerships."
          />
        </section>

        {/* 5. MASTER CTA */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 md:mt-20 py-24 md:py-40 text-center border-t border-white/10 relative overflow-hidden group"
        >
          <CustomCursor />
          <h2 className="text-5xl sm:text-7xl md:text-[10rem] font-black text-white italic tracking-tighter leading-none mb-10 md:mb-16">
            LETS <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-400 to-blue-900">COLLABORATE.</span>
          </h2>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 md:gap-8 relative z-10">
            <Link href="/Contact" className="group/btn relative w-full sm:w-auto px-6">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto px-8 md:px-12 py-5 md:py-6 bg-white text-black font-black uppercase text-[10px] md:text-sm tracking-[0.2em] italic flex items-center justify-center gap-4 hover:bg-blue-600 hover:text-white transition-all duration-500"
              >
                Execute Call <FiArrowRight className="group-hover/btn:translate-x-2 transition-transform" />
              </motion.div>
            </Link>
            <Link href="https://drive.google.com/file/d/1DXqGwkcLB_ToRWOP2Ikw-WdiRbnKV5HE/view?usp=sharing" target="_blank" className="font-mono text-[10px] md:text-xs tracking-widest text-slate-500 hover:text-white transition-colors border-b border-transparent hover:border-white pb-2">
              DOWNLOAD_CV.PDF
            </Link>
          </div>
        </motion.section>
      </div>

      <Footer />

      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>
    </main>
  );
}

// --- Dynamic Sub-Components ---

function NavModule({ href, title, icon, desc }: any) {
  return (
    <Link href={href}>
      <motion.div 
        whileHover={{ y: -10, borderColor: "rgba(37,99,235,0.4)" }}
        whileTap={{ scale: 0.98 }}
        className="h-full p-6 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-white/[0.02] border border-white/5 flex flex-col justify-between transition-all group"
      >
        <div>
          <div className="text-xl md:text-2xl text-blue-500 mb-4 md:mb-6 group-hover:scale-110 transition-transform origin-left">{icon}</div>
          <h4 className="text-lg md:text-xl font-black text-white uppercase italic mb-2 md:mb-3 tracking-tighter">{title}</h4>
          <p className="text-[11px] md:text-xs text-slate-500 leading-relaxed italic">{desc}</p>
        </div>
        <div className="mt-6 md:mt-8 flex items-center gap-2 text-[9px] md:text-[10px] font-mono text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
          ACCESS_MODULE <FiArrowRight />
        </div>
      </motion.div>
    </Link>
  );
}

function ExperienceNode({ side, period, company, role, desc, tags, icon, highlight }: any) {
  const isLeft = side === "left";
  return (
    <div className={`flex w-full items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"} flex-col md:justify-start gap-8 md:gap-12`}>
      <div className="relative z-20">
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl border border-white/10 bg-[#010409] flex items-center justify-center text-lg md:text-xl shadow-[0_0_20px_rgba(0,0,0,0.8)] ${highlight ? 'text-blue-500 border-blue-500/50 ring-4 ring-blue-500/10' : 'text-slate-500'}`}
        >
          {icon}
        </motion.div>
      </div>
      <motion.div 
        initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="w-full md:w-[45%]"
      >
        <div className={`p-6 md:p-10 rounded-[2rem] md:rounded-[3rem] bg-gradient-to-br ${highlight ? 'from-blue-600/10 to-transparent border-blue-500/20' : 'from-white/[0.03] to-transparent border-white/5'} border backdrop-blur-sm`}>
          <div className="flex justify-between items-center mb-4 md:mb-6">
            <span className="text-[9px] md:text-[10px] font-mono text-blue-500 bg-blue-500/5 px-2 md:px-3 py-1 rounded">[{period}]</span>
            <FiExternalLink className="text-slate-600 hover:text-white cursor-pointer transition-colors" />
          </div>
          <h3 className="text-2xl md:text-3xl font-black text-white italic uppercase tracking-tighter mb-1 md:mb-2">{role}</h3>
          <p className="text-blue-400 font-mono text-[10px] md:text-xs mb-4 md:mb-8 tracking-[0.2em]">{company}</p>
          <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-light mb-6 md:mb-8 italic">"{desc}"</p>
          <div className="flex flex-wrap gap-2">
            {tags.map((t: string) => (
              <span key={t} className="text-[7px] md:text-[8px] font-mono text-slate-500 border border-white/10 px-2 md:px-3 py-1 uppercase rounded-md">{t}</span>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function SocialLink({ icon, href, label }: any) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="group flex items-center gap-2 md:gap-3 px-4 md:px-5 py-2 md:py-3 rounded-full bg-white/5 border border-white/10 hover:bg-blue-600/10 hover:border-blue-500/50 transition-all">
      <span className="text-slate-400 group-hover:text-blue-500 transition-colors text-sm md:text-base">{icon}</span>
      <span className="text-[9px] md:text-[10px] font-mono text-slate-500 group-hover:text-white tracking-widest uppercase">{label}</span>
    </a>
  );
}

function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY]);
  return (
    <motion.div 
      className="fixed top-0 left-0 w-40 h-40 bg-blue-600/20 rounded-full blur-3xl pointer-events-none z-0 hidden md:block"
      style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
    />
  );
}

function SectionHeader({ title, subtitle }: { title: string, subtitle: string }) {
  return (
    <div className="space-y-2 md:space-y-4">
      <div className="flex items-center gap-2 md:gap-3">
        <div className="w-6 md:w-8 h-[1px] bg-blue-600" />
        <span className="text-[9px] md:text-[10px] font-mono text-blue-500 uppercase tracking-[0.5em] md:tracking-[1em]">{title}</span>
      </div>
      <h2 className="text-4xl md:text-9xl font-black text-white tracking-tighter uppercase italic leading-none">{subtitle}</h2>
    </div>
  );
}

function DecoderText({ text }: { text: string }) {
  const [inView, setInView] = useState(false);
  const scrambled = useScrambler(text, inView);
  return <motion.span onViewportEnter={() => setInView(true)}>{scrambled}</motion.span>;
}

function TiltContainer({ children, className }: any) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-150, 150], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [-150, 150], [-10, 10]), springConfig);
  
  function handleMouse(e: React.MouseEvent) {
    if (window.innerWidth < 1024) return;
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - (rect.left + rect.width / 2));
    y.set(e.clientY - (rect.top + rect.height / 2));
  }

  return (
    <motion.div 
      onMouseMove={handleMouse} 
      onMouseLeave={() => { x.set(0); y.set(0); }} 
      style={{ rotateX, rotateY, perspective: 1000 }} 
      className={className}
    >
      {children}
    </motion.div>
  );
}