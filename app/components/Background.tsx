"use client";

import { motion } from "framer-motion";
import { 
  SiPython, SiReact, SiTypescript, SiNodedotjs, 
  SiTailwindcss, SiNextdotjs, SiMongodb, SiPytorch 
} from "react-icons/si";

const icons = [
  { Icon: SiPython, x: "12%", y: "15%", delay: 0, mobile: true },
  { Icon: SiReact, x: "85%", y: "20%", delay: 1.5, mobile: true },
  { Icon: SiTypescript, x: "75%", y: "75%", delay: 3, mobile: false },
  { Icon: SiNodedotjs, x: "8%", y: "80%", delay: 0.5, mobile: true },
  { Icon: SiTailwindcss, x: "48%", y: "12%", delay: 4, mobile: false },
  { Icon: SiNextdotjs, x: "90%", y: "60%", delay: 2.5, mobile: false },
  { Icon: SiMongodb, x: "20%", y: "65%", delay: 5, mobile: true },
  { Icon: SiPytorch, x: "55%", y: "82%", delay: 2, mobile: false },
];

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#030712]">
      
      {/* 1. Large Typographic Watermark - Responsive sizing */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.05, 0.12, 0.05],
            scale: [0.98, 1.02, 0.98]
          }} 
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="text-[18vw] md:text-[14vw] font-black tracking-[0.1em] md:tracking-[0.2em] uppercase text-white leading-[0.8] text-center"
          style={{
            WebkitTextStroke: "1px rgba(255,255,255,0.2)",
            color: "transparent", 
          }}
        >
          System <br /> Architect
        </motion.h2>
      </div>

      {/* 2. Base Atmospheric Gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(at_top_left,rgba(59,130,246,0.08),transparent_50%),radial-gradient(at_bottom_right,rgba(37,99,235,0.05),transparent_50%)]" />

      {/* 3. Floating Programming Icons - Filtered for Mobile */}
      {icons.map(({ Icon, x, y, delay, mobile }, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0, 0.3, 0],
            y: [0, -30, 0],
          }}
          transition={{ 
            duration: 10 + index,
            repeat: Infinity, 
            delay: delay,
            ease: "easeInOut"
          }}
          style={{ left: x, top: y }}
          className={`absolute text-white/30 text-3xl md:text-5xl pointer-events-none select-none ${!mobile ? 'hidden md:block' : 'block'}`}
        >
          <Icon />
        </motion.div>
      ))}

      {/* 4. Animated Ambient Orbs - Performance optimized blurs */}
      <motion.div
        animate={{ opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] bg-blue-600/10 rounded-full blur-[80px] md:blur-[140px]"
      />
      <motion.div
        animate={{ opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[70vw] h-[70vw] md:w-[50vw] md:h-[50vw] bg-indigo-500/10 rounded-full blur-[80px] md:blur-[160px]"
      />

      {/* 5. Grain Texture - Fixed opacity for subtle feel */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}