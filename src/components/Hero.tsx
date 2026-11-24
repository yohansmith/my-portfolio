"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Terminal, Cpu, Database } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const ROLES = [
  "BSc (Hons) Data Science Graduate",
  "Computer Vision & AI Data Specialist",
  "LLM & RAG Workflow Builder",
  "Chess Player & Problem Solver",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLES[roleIndex];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (typedText.length < currentRole.length) {
            setTypedText(currentRole.slice(0, typedText.length + 1));
          } else {
            setIsDeleting(true);
          }
        } else {
          if (typedText.length > 0) {
            setTypedText(currentRole.slice(0, typedText.length - 1));
          } else {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % ROLES.length);
          }
        }
      },
      !isDeleting && typedText.length === currentRole.length
        ? 1800
        : isDeleting
        ? 35
        : 65
    );

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-transparent pt-16 overflow-hidden"
    >
      <div className="gradient-bg">
        <div className="gradient-orb orb-1" />
        <div className="gradient-orb orb-2" />
        <div className="gradient-orb orb-3" />
      </div>
      <div className="animated-grid" />

      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="floating-node" style={{ top: "20%", left: "15%", animationDelay: "0s" }} />
        <div className="floating-node" style={{ top: "35%", right: "20%", animationDelay: "2s" }} />
        <div className="floating-node" style={{ bottom: "25%", left: "25%", animationDelay: "4s" }} />
        <div className="floating-node" style={{ top: "60%", right: "15%", animationDelay: "1s" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel mb-6 text-xs sm:text-sm font-tech text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 shadow-sm"
          >
            <Terminal size={14} />
            <span>sys.init(&quot;Yohan_Smith_Portfolio.ai&quot;)</span>
          </motion.div>

          <div className="relative w-40 h-40 sm:w-44 sm:h-44 md:w-52 md:h-52 mb-7 group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-600 to-cyan-500 rounded-full blur opacity-40 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-emerald-500 dark:border-emerald-400 shadow-2xl bg-gray-900">
              <Image
                src="/profile.jpg"
                alt="Yohan Damian Smith"
                width={208}
                height={208}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
            <div className="absolute bottom-2 right-2 bg-emerald-600 text-white p-2 rounded-full shadow-lg border-2 border-white dark:border-gray-900">
              <Cpu size={16} />
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-xs sm:text-sm text-emerald-600 dark:text-emerald-400 font-tech font-medium mb-2 tracking-wide"
          >
            {"// HELLO, WORLD. I'M"}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl sm:text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight mb-5 sm:mb-6 tracking-tight"
          >
            Yohan Damian Smith
          </motion.h1>

          <div className="min-h-[2.75rem] mb-7 sm:mb-8 flex items-center justify-center">
            <p className="text-sm sm:text-lg md:text-xl font-tech text-emerald-700 dark:text-emerald-300 font-semibold bg-emerald-500/10 px-3.5 py-1.5 rounded-lg border border-emerald-500/20 whitespace-nowrap">
              {typedText}
              <span className="inline-block w-1.5 sm:w-2 h-4 sm:h-5 ml-1 align-middle bg-emerald-500 animate-pulse" />
            </p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-sm sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            I turn messy data into reliable insight and automation. Data quality, analytics, and LLM workflows.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md sm:max-w-none"
          >
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3.5 rounded-xl transition-all duration-300 font-medium shadow-lg shadow-emerald-600/30 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Database size={18} />
              View My Projects
            </Link>
            <Link
              href="/CV - Yohan Damian Smith.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-emerald-600 dark:border-emerald-400 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-gray-900 px-8 py-3.5 rounded-xl transition-all duration-300 font-medium hover:scale-[1.02] active:scale-[0.98]"
            >
              <Download size={18} />
              Download Resume
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-4 left-1/2 -translate-x-1/2"
        >
          <Link
            href="#about"
            className="text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors p-2 inline-block"
            aria-label="Scroll down to About"
          >
            <ArrowDown size={28} className="animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
