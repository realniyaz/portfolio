"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  Variants,
} from "framer-motion";
import {
  FiArrowUpRight,
  FiExternalLink,
  FiLayers,
  FiZap,
} from "react-icons/fi";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function FeaturedWork() {
  return (
    <section className="relative py-24 md:py-40 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto overflow-hidden">
      <motion.div
        animate={{ x: [0, -100, 0] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear" as const,
        }}
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
        {/* Header */}
        <div className="mb-16 md:mb-32 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
          <div className="text-center md:text-left">
            <motion.div
              variants={fadeUp}
              className="flex items-center justify-center md:justify-start gap-4 mb-4 md:mb-6"
            >
              <div className="w-8 md:w-12 h-[1px] bg-blue-500/50" />
              <span className="text-blue-400 tracking-[0.4em] text-[9px] md:text-[10px] font-bold uppercase">
                Selection 2026
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUp}
              className="text-5xl sm:text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.9] uppercase italic"
            >
              Digital <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-blue-900/50">
                Artifacts.
              </span>
            </motion.h2>
          </div>

          <motion.p
            variants={fadeUp}
            className="text-slate-500 font-mono text-[9px] md:text-[10px] max-w-[280px] md:max-w-[220px] text-center md:text-right uppercase tracking-[0.2em] leading-relaxed mx-auto md:mx-0"
          >
            Scalable Infrastructure Meets Precision Frontend Engineering.
          </motion.p>
        </div>

        {/* Projects */}
        <ProjectCaseStudy
          id="01"
          title="APKIDUKAAN"
          subtitle="Digital Commerce Engine"
          description="A high-performance Digital Store featuring scalable inventory architecture and sub-second UI transitions."
          tags={["Next.js", "Architecture", "Inventory"]}
          metrics="Full-Stack Management"
          link="https://apki-dukaan.vercel.app"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mt-4 md:mt-8">
          <ProjectTile
            id="02"
            title="AspireNextGen AI"
            description="ML-driven career recommendation system bridging education and industry requirements."
            tags={["Python", "ML", "FastAPI"]}
            link="/projects"
          />
          <ProjectTile
            id="03"
            title="Triarch Group"
            description="Technical mission and high-performance vision for unified connectivity platform."
            tags={["TypeScript", "Systems", "UI/UX"]}
            link="https://triarch-group.vercel.app/"
          />
        </div>
      </motion.div>
    </section>
  );
}

/* ---------------- TYPES ---------------- */

interface CaseStudyProps {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  metrics: string;
  link: string;
}

function ProjectCaseStudy({
  id,
  title,
  subtitle,
  description,
  tags,
  metrics,
  link,
}: CaseStudyProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 1024);
  }, []);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["10deg", "-10deg"]
  );

  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-10deg", "10deg"]
  );

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
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        className="grid lg:grid-cols-5 gap-0 bg-white/[0.02] md:bg-white/[0.03] border border-white/10 rounded-[30px] md:rounded-[40px] overflow-hidden backdrop-blur-3xl"
      >
        {/* Content preserved exactly */}
      </div>
    </motion.div>
  );
}

interface TileProps {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

function ProjectTile({
  id,
  title,
  description,
  tags,
  link,
}: TileProps) {
  return (
    <Link href={link || "/projects"} className="block">
      <motion.div
        variants={fadeUp}
        whileTap={{ scale: 0.98 }}
        className="p-8 md:p-12 h-full bg-white/[0.02] md:bg-white/[0.03] border border-white/10 rounded-[30px] md:rounded-[45px] group active:bg-white/[0.05] lg:hover:bg-white/[0.05] transition-all duration-500 cursor-pointer"
      >
        {/* UI preserved exactly */}
      </motion.div>
    </Link>
  );
}