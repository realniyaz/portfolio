"use client";

import { motion, Variants } from "framer-motion";
import { useState } from "react";

/* =======================
   Typed Variants (FIX)
======================= */

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1], // cubic-bezier preserved
    },
  },
};

export default function SkillMatrix() {
  return (
    <section className="relative py-24 md:py-40 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto overflow-hidden">
      
      <div className="absolute top-10 right-[-10%] text-[25vw] md:text-[20vw] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter">
        SKILLS
      </div>

      <div className="mb-16 md:mb-24">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-4"
        >
          <span className="text-blue-500 font-mono text-xs">02.</span>
          <span className="text-white/40 tracking-[0.3em] text-[9px] md:text-[10px] font-bold uppercase">
            Technical Arsenal
          </span>
        </motion.div>

        <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] uppercase italic">
          Core <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-blue-900/50">
            Competencies.
          </span>
        </h2>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col border-t border-white/10"
      >
        <SkillGroup
          id="01"
          title="Web Engineering"
          skills={["React & Next.js", "TypeScript", "Frontend Dev", "UI/UX Systems"]}
        />

        <SkillGroup
          id="02"
          title="Data Intelligence"
          skills={["Python", "Machine Learning", "SQL", "Data Analysis"]}
        />

        <SkillGroup
          id="03"
          title="Product Architecture"
          skills={["Screen Design", "Strategy", "Digital Marketing", "SEO Ops"]}
        />
      </motion.div>
    </section>
  );
}

/* =======================
   Skill Group Component
======================= */

interface SkillGroupProps {
  id: string;
  title: string;
  skills: string[];
}

function SkillGroup({ id, title, skills }: SkillGroupProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
      className="group relative py-8 md:py-12 border-b border-white/10 cursor-none sm:cursor-crosshair overflow-hidden"
    >
      <motion.div
        initial={false}
        animate={{ height: isHovered ? "100%" : "0%" }}
        transition={{
          duration: 0.4,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="absolute bottom-0 left-0 w-full bg-blue-600/[0.03] md:bg-white/[0.02] -z-10 origin-bottom"
      />

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 md:gap-8 relative z-10">
        <div className="flex items-center gap-4 md:gap-8">
          <span className="font-mono text-xs md:text-sm text-white/20 group-hover:text-blue-500 transition-colors">
            {id}
          </span>

          <h3 className="text-2xl md:text-5xl font-bold tracking-tighter text-white group-hover:pl-2 md:group-hover:pl-4 transition-all duration-500 uppercase italic">
            {title}
          </h3>
        </div>

        <div className="flex flex-wrap gap-x-4 md:gap-x-6 gap-y-2 max-w-full md:max-w-md md:justify-end items-center">
          {skills.map((skill, i) => (
            <motion.span
              key={i}
              animate={{
                opacity: isHovered ? 1 : 0.3,
                y: isHovered ? 0 : 5,
                color: isHovered ? "#60a5fa" : "#ffffff",
              }}
              transition={{
                delay: i * 0.05,
              }}
              className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-bold whitespace-nowrap"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 h-[1px] bg-blue-500 shadow-[0_0_10px_#3b82f6]"
        initial={{ width: 0 }}
        animate={{ width: isHovered ? "100%" : "0%" }}
        transition={{
          duration: 0.6,
          ease: "circOut" as const,
        }}
      />
    </motion.div>
  );
}