"use client";

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX, FiChevronRight } from "react-icons/fi";

const navItems = [
  { name: "About", href: "/About" },
  { name: "Skills", href: "/Skills" },
  { name: "Projects", href: "/projects" },
  { name: "Process", href: "/process" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex justify-center p-4 md:p-6 pointer-events-none">
      <motion.nav
        layout
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className={`
          pointer-events-auto flex items-center justify-between px-6 md:px-8 py-3 
          border border-white/10 backdrop-blur-xl transition-all duration-500 rounded-full
          ${isScrolled ? "w-full md:w-[70%] bg-black/60 shadow-2xl" : "w-full md:w-[95%] bg-white/5"}
        `}
      >
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-1 font-black tracking-tighter text-xl text-white">
          <span className="transition-transform group-hover:-rotate-12 italic">NA</span>
          <span className="text-blue-500 animate-pulse">.</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink key={item.name} href={item.href} active={pathname === item.href}>
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* Action Area */}
        <div className="flex items-center gap-4">
          <Link href="/contact" className="hidden sm:block">
            <button className="px-5 py-2 text-[10px] font-black uppercase tracking-[0.2em] italic text-white bg-blue-600 rounded-full hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)]">
              Execute_Call
            </button>
          </Link>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 text-white md:hidden hover:bg-white/10 rounded-full transition-colors"
          >
            {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[-1] bg-[#010409] md:hidden pointer-events-auto flex flex-col justify-center px-10 gap-8"
          >
            {/* Background HUD Decor */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] bg-[radial-gradient(circle,rgba(37,99,235,0.15)_0%,transparent_70%)]" />
            </div>

            {navItems.map((item, idx) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                <Link 
                  href={item.href} 
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center justify-between group`}
                >
                  <span className={`text-5xl font-black uppercase italic tracking-tighter transition-colors ${pathname === item.href ? "text-blue-500" : "text-white/40 group-hover:text-white"}`}>
                    {item.name}
                  </span>
                  <FiChevronRight className={`text-blue-500 opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0`} size={32} />
                </Link>
              </motion.div>
            ))}

            <motion.div 
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }} 
               transition={{ delay: 0.6 }}
               className="mt-12 pt-12 border-t border-white/5"
            >
                <p className="text-[10px] font-mono text-slate-500 uppercase tracking-[0.5em] mb-4">Identity_Authenticated</p>
                <h3 className="text-xl font-bold text-white italic uppercase tracking-widest">Niyaz Ahmed</h3>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function NavLink({ href, children, active }: { href: string; children: React.ReactNode; active: boolean }) {
  return (
    <Link 
      href={href} 
      className={`relative px-4 py-2 text-[11px] font-mono uppercase tracking-[0.2em] transition-colors group ${active ? "text-white" : "text-slate-500 hover:text-white"}`}
    >
      <span className="relative z-10">{children}</span>
      {active && (
        <motion.span 
          layoutId="nav-active-pill"
          className="absolute inset-0 z-0 rounded-full bg-blue-600/10 border border-blue-500/20"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
      {!active && (
        <motion.span 
          className="absolute inset-0 z-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"
        />
      )}
    </Link>
  );
}