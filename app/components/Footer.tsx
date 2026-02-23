"use client";

import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail, FiCpu, FiExternalLink, FiTerminal } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 md:mt-40 border-t border-white/5 bg-[#030712] overflow-hidden">
      
      {/* 1. ATMOSPHERIC DEPTH (Adjusted for mobile view) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] h-[200px] bg-blue-600/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          
          {/* 2. IDENTITY SECTION: Centered on mobile, left-aligned on desktop */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-[#030712] font-black text-xl shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                NA
              </div>
              <h3 className="text-xl md:text-2xl font-black tracking-tighter text-white uppercase italic">
                Niyaz Ahmed
              </h3>
            </div>

            <p className="text-slate-500 leading-relaxed max-w-sm mb-8 text-sm md:text-base font-light italic">
              "Engineering digital artifacts where scalable architecture meets precision frontend logic."
            </p>

            {/* System Status Indicator */}
            <div className="flex items-center gap-3 py-2 px-4 bg-white/[0.03] border border-white/10 rounded-full">
              <div className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </div>
              <span className="text-[9px] font-mono text-slate-400 uppercase tracking-[0.2em]">
                System_Node: Active
              </span>
            </div>
          </div>

          {/* 3. DIRECTORY: Stays legible on mobile */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-6 md:mb-8">Directory</h4>
            <ul className="space-y-4 text-center md:text-left">
              <FooterLink href="/">Home</FooterLink>
              <FooterLink href="/About">About</FooterLink>
              <FooterLink href="/Skills">Skills</FooterLink>
              <FooterLink href="/projects">Projects</FooterLink>
            </ul>
          </div>

          {/* 4. SOCIAL PROTOCOL */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-500 mb-6 md:mb-8">Protocol</h4>
            <div className="flex flex-col gap-5 items-center md:items-start">
              <SocialItem href="https://github.com/realniyaz" icon={<FiGithub />} label="GitHub" />
              <SocialItem href="https://linkedin.com/in/niyazahmedofficial" icon={<FiLinkedin />} label="LinkedIn" />
              <SocialItem href="mailto:contact.niyazahmed@gmail.com" icon={<FiMail />} label="Direct_Mail" />
            </div>
          </div>
        </div>

        {/* 5. BOTTOM METADATA: Balanced for mobile vertically */}
        <div className="mt-16 md:mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4">
          <div className="text-[9px] font-mono text-slate-600 uppercase tracking-[0.2em] text-center md:text-left">
            © {currentYear} Niyaz Ahmed. Compiled with Next.js & TS
          </div>
          
          <motion.div 
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600/10 rounded-full border border-blue-500/20 group cursor-default"
          >
            <FiTerminal className="text-blue-500 text-xs" />
            <span className="text-[8px] font-bold text-blue-400 uppercase tracking-widest">
              LATEST_BUILD: v2.6.0
            </span>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

// --- Dynamic Sub-Components ---

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link
        href={href}
        className="text-xs md:text-sm text-slate-500 hover:text-white transition-all duration-300 flex items-center justify-center md:justify-start gap-2 group"
      >
        <span className="w-0 h-[1px] bg-blue-600 group-hover:w-3 transition-all duration-300 hidden md:block" />
        {children}
      </Link>
    </li>
  );
}

function SocialItem({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <motion.a
      whileHover={{ x: 5 }}
      whileTap={{ scale: 0.95 }}
      href={href}
      target="_blank"
      className="flex items-center gap-3 text-slate-500 hover:text-blue-400 transition-colors group"
    >
      <span className="text-base md:text-lg group-hover:shadow-[0_0_10px_#3b82f6] rounded-md transition-all">{icon}</span>
      <span className="text-[10px] font-black uppercase tracking-widest italic">{label}</span>
      <FiExternalLink className="opacity-0 group-hover:opacity-100 text-[10px] transition-all ml-1" />
    </motion.a>
  );
}
