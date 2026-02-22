"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, Variants } from "framer-motion";
import { 
  FiMail, FiPhone, FiGithub, FiLinkedin, 
  FiDownload, FiArrowUpRight, FiTerminal, FiGlobe, FiRadio 
} from "react-icons/fi";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const springConfig = { stiffness: 100, damping: 30 };

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
};

const tileVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function ContactPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useSpring(useTransform(scrollYProgress, [0, 1], [0, -100]), springConfig);

  return (
    <main ref={containerRef} className="relative min-h-[100dvh] bg-[#010409] text-slate-200 overflow-x-hidden">
      
      {/* 1. ATMOSPHERIC SCANNER BACKGROUND */}
      <motion.div style={{ y: backgroundY }} className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[100vw] h-[100vw] bg-blue-600/[0.03] rounded-full blur-[80px] md:blur-[150px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.01)_1px,transparent_1px)] bg-[size:50px_50px] md:bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black,transparent)]" />
      </motion.div>

      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 md:pt-52 pb-20 md:pb-32">
        
        {/* 2. HEADER: COMMS INITIALIZATION */}
        <header className="mb-16 md:mb-32">
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
            <FiRadio className="text-blue-500 animate-pulse text-lg md:text-xl" />
            <span className="font-mono text-[9px] md:text-[10px] text-blue-500 tracking-[0.4em] md:tracking-[0.5em] uppercase italic">Comms // Initialization</span>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black tracking-tighter italic uppercase leading-[0.9] md:leading-[0.8] text-white">
            Get In <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-100 to-indigo-700">Touch.</span>
          </h1>
        </header>

        {/* 3. CONTACT GRID */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          <ContactTile 
            icon={<FiMail />}
            title="Email"
            value="contact.niyazahmed@gmail.com"
            href="mailto:contact.niyazahmed@gmail.com"
            label="Send_Transmission"
          />

          <ContactTile 
            icon={<FiPhone />}
            title="Direct"
            value="+91 93159 56745"
            href="tel:+919315956745"
            label="Voice_Comms"
          />

          {/* CV Download Tile - Enhanced for Mobile Tap */}
          <motion.a 
            href="https://drive.google.com/file/d/1DXqGwkcLB_ToRWOP2Ikw-WdiRbnKV5HE/view?usp=sharing" 
            target="_blank"
            variants={tileVariants}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="md:col-span-2 lg:col-span-1 p-8 rounded-[2rem] md:rounded-[2.5rem] bg-blue-600 border border-blue-400/50 flex flex-col justify-between group shadow-xl active:brightness-110 transition-all"
          >
            <div className="flex justify-between items-start">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-white/20 flex items-center justify-center text-xl text-white">
                <FiDownload className="group-hover:animate-bounce" />
              </div>
              <span className="text-[8px] md:text-[10px] font-black text-white/50 uppercase italic tracking-widest">Document_Secure</span>
            </div>
            <div className="mt-10 md:mt-12">
              <h3 className="text-2xl md:text-3xl font-black text-white italic uppercase tracking-tighter leading-none">View Curriculum Vitae</h3>
              <p className="text-white/60 text-[10px] mt-3 font-mono uppercase tracking-[0.2em]">Full_Report_2026.pdf</p>
            </div>
          </motion.a>

          <ContactTile 
            icon={<FiLinkedin />}
            title="Professional"
            value="linkedin.com/in/niyaz"
            href="https://linkedin.com/in/niyazahmedofficial"
            label="Identity_Verify"
          />

          <ContactTile 
            icon={<FiGithub />}
            title="Repository"
            value="github.com/realniyaz"
            href="https://github.com/realniyaz"
            label="Codebase_Access"
          />

          <ContactTile 
            icon={<FiGlobe />}
            title="Location"
            value="Delhi, India"
            href="#"
            label="Base_Coordinates"
            isStatic
          />
        </motion.div>

        {/* 4. FOOTER STATUS BAR */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-20 md:mt-32 pt-12 md:pt-20 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8"
        >
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
              <p className="text-[9px] md:text-[10px] font-mono text-slate-500 uppercase tracking-tighter md:tracking-normal">System Status: Operational</p>
            </div>
            <div className="h-px w-8 md:h-4 md:w-px bg-white/10" />
            <p className="text-[9px] md:text-[10px] font-mono text-slate-500 uppercase tracking-widest italic">Ver 4.2.0 // 2026</p>
          </div>
          
          <div className="text-slate-500 font-mono text-[8px] md:text-[9px] uppercase tracking-[0.3em] md:tracking-[0.5em] italic text-center">
            End of Transmission // {new Date().getFullYear()}
          </div>
        </motion.section>

      </div>

      <Footer />
    </main>
  );
}

// --- Specialized Contact Tile ---

function ContactTile({ icon, title, value, href, label, isStatic }: any) {
  const TileWrapper = isStatic ? "div" : "a";
  
  return (
    <motion.div 
      variants={tileVariants} 
      className="h-full"
    >
      <TileWrapper 
        href={href} 
        target={isStatic ? undefined : "_blank"}
        className={`flex flex-col justify-between h-full p-7 md:p-8 rounded-[2rem] md:rounded-[2.5rem] bg-white/[0.02] border border-white/5 active:bg-white/[0.05] active:border-blue-500/30 transition-all duration-500 group relative overflow-hidden ${isStatic ? 'cursor-default' : 'cursor-pointer'}`}
      >
        <div className="absolute top-0 right-0 p-6 md:p-8 opacity-0 group-active:opacity-10 md:group-hover:opacity-10 transition-opacity">
          <FiTerminal className="text-4xl md:text-5xl" />
        </div>

        <div className="flex justify-between items-start mb-10 md:mb-12">
          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-blue-500/5 text-blue-500 border border-blue-500/10 flex items-center justify-center text-lg md:text-xl active:bg-blue-500 active:text-white transition-all">
            {icon}
          </div>
          <span className="text-[8px] md:text-[9px] font-mono text-slate-500 active:text-blue-500 transition-colors uppercase tracking-[0.1em] md:tracking-[0.2em]">{label}</span>
        </div>

        <div>
          <h4 className="text-[9px] md:text-[10px] font-mono text-slate-500 uppercase tracking-[0.3em] md:tracking-[0.4em] mb-2">{title}</h4>
          <p className="text-lg md:text-xl font-bold text-white tracking-tight active:text-blue-400 transition-colors truncate">
            {value}
          </p>
        </div>
      </TileWrapper>
    </motion.div>
  );
}