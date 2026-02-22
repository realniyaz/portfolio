"use client";

import React from "react";
import { motion, Transition } from "framer-motion";
import { FiCode, FiBarChart2, FiTrendingUp } from "react-icons/fi";

const floatAnim: Transition = {
  duration: 4,
  repeat: Infinity,
  ease: "easeInOut",
};

export default function CapabilityOrbit() {
  return (
    <div className="relative w-full aspect-square max-w-[600px] flex items-center justify-center mx-auto overflow-visible">
      
      {/* Background Decorative Glow - Scaled for mobile */}
      <div className="absolute w-[80%] h-[80%] bg-blue-500/5 rounded-full blur-[60px] md:blur-[120px] -z-10" />

      {/* 1. Sharpened White Rings - Responsive Sizes */}
      {/* Outer Ring */}
      <div className="absolute w-[90%] h-[90%] rounded-full border-[1px] md:border-[1.5px] border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]" />
      
      {/* Inner Ring */}
      <div className="absolute w-[60%] h-[60%] rounded-full border border-white/10" />
      
      {/* 2. Luminous White Center Core */}
      <motion.div
        animate={{ 
          y: [0, -10, 0],
          boxShadow: [
            "0 0 20px rgba(255,255,255,0.2)",
            "0 0 40px rgba(255,255,255,0.5)",
            "0 0 20px rgba(255,255,255,0.2)"
          ]
        }}
        transition={{
          y: floatAnim,
          boxShadow: floatAnim
        }}
        className="absolute z-20 w-12 h-12 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.4)]"
      >
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-white via-blue-50/20 to-white" />
      </motion.div>

      {/* 3. Main Rotating Layer */}
      <motion.div
        animate={{ 
          rotate: 360,
        }}
        transition={{ 
          rotate: { repeat: Infinity, duration: 40, ease: "linear" },
        }}
        className="absolute w-full h-full"
      >
        {/* Node 1: Web Dev */}
        <div className="absolute top-[5%] left-1/2 -translate-x-1/2">
          <Node icon={<FiCode />} label="Web Dev" />
        </div>

        {/* Node 2: Data Analysis */}
        <div className="absolute right-[5%] top-1/2 -translate-y-1/2">
          <Node icon={<FiBarChart2 />} label="Data Analysis" />
        </div>

        {/* Node 3: Strategy */}
        <div className="absolute bottom-[10%] left-[15%]">
          <Node icon={<FiTrendingUp />} label="Marketing" />
        </div>
      </motion.div>
    </div>
  );
}

function Node({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <motion.div 
      animate={{ rotate: -360 }}
      transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      className="flex flex-col items-center gap-2 md:gap-4 group"
    >
      {/* Responsive Node Cards */}
      <div className="w-14 h-14 md:w-20 md:h-20 rounded-[20px] md:rounded-[28px] bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white text-xl md:text-3xl shadow-2xl transition-all duration-500 group-hover:bg-white group-hover:text-black group-hover:scale-110">
        {icon}
      </div>
      
      <div className="flex flex-col items-center pointer-events-none">
        <span className="text-[8px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.3em] text-white/50 uppercase whitespace-nowrap">
          {label}
        </span>
        {/* Hidden on mobile to reduce visual noise */}
        <div className="hidden md:block w-1.5 h-1.5 rounded-full bg-white mt-2 scale-0 group-hover:scale-100 transition-transform duration-300 shadow-[0_0_10px_white]" />
      </div>
    </motion.div>
  );
}