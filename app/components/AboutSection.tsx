"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  Variants,
} from "framer-motion";
import { useRef } from "react";
import { FiSearch, FiLayers, FiZap, FiTrendingUp } from "react-icons/fi";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

export default function AboutSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start end", "end start"],
  });

  const scaleY = useSpring(
    useTransform(scrollYProgress, [0.2, 0.6], [0, 1]),
    {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001,
    }
  );

  return (
    <section
      ref={scrollRef}
      className="relative py-24 md:py-40 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start"
      >
        {/* LEFT SIDE */}
        <div className="lg:sticky lg:top-40 flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-8 md:w-10 h-[1px] bg-white/20" />
            <span className="text-blue-400 tracking-[0.3em] text-[10px] md:xs font-bold uppercase">
              The Methodology
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter leading-none mb-8 text-white uppercase italic"
          >
            Engineering <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-blue-900/50">
              Perfection.
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-slate-400 text-base md:text-lg leading-relaxed max-w-md border-blue-500/30 lg:border-l lg:pl-8 font-light"
          >
            I solve complex problems by bridging the gap between{" "}
            <span className="text-white">
              high-performance architecture
            </span>{" "}
            and intuitive user psychology.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="grid grid-cols-3 gap-6 md:gap-12 mt-12 md:mt-16 pt-10 border-t border-white/5 w-full"
          >
            <Metric value="25+" label="Deploy" />
            <Metric value="CSE" label="Degree" />
            <Metric value="99%" label="Uptime" />
          </motion.div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative pl-8 md:pl-12 mt-10 lg:mt-0">
          <div className="absolute left-0 top-0 w-[1px] h-full bg-white/5" />

          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-0 top-0 w-[1px] bg-gradient-to-b from-blue-500 via-white to-transparent shadow-[0_0_15px_#3b82f6]"
          />

          <div className="space-y-16 md:space-y-24">
            <ProcessStep
              icon={<FiSearch />}
              title="Audit & Research"
              desc="Deconstructing user friction points through behavioral data."
            />
            <ProcessStep
              icon={<FiLayers />}
              title="System Architecture"
              desc="Mapping scalable, type-safe structures that live for years."
            />
            <ProcessStep
              icon={<FiZap />}
              title="Performance Build"
              desc="High-speed execution with sub-second interaction times."
            />
            <ProcessStep
              icon={<FiTrendingUp />}
              title="Iterative Growth"
              desc="Deploy, measure, and refine using real-world analytics."
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function ProcessStep({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <motion.div variants={fadeUp} className="relative group">
      <div className="absolute -left-[36px] md:-left-[52px] top-0 w-4 h-4 rounded-full bg-[#020617] border border-white/20 z-10 group-hover:border-blue-500 transition-all duration-500 shadow-[0_0_10px_rgba(59,130,246,0)] group-hover:shadow-[0_0_15px_#3b82f6]" />

      <div className="flex flex-col gap-2 md:gap-3">
        <div className="text-slate-500 group-hover:text-blue-500 transition-colors duration-500 text-xl md:text-2xl">
          {icon}
        </div>
        <h3 className="text-lg md:text-xl font-bold text-white tracking-tight uppercase italic">
          {title}
        </h3>
        <p className="text-slate-500 text-xs md:text-sm max-w-sm group-hover:text-slate-300 transition-colors duration-500 font-light leading-relaxed">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

function Metric({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center lg:items-start">
      <h3 className="text-2xl md:text-3xl font-black text-white tracking-tighter italic">
        {value}
      </h3>
      <span className="text-[8px] md:text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold mt-1">
        {label}
      </span>
    </div>
  );
}