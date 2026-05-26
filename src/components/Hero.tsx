"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-emerald-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          <div className="relative w-40 h-40 md:w-48 md:h-48 mb-6">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-green-500 shadow-xl">
              <Image
                src="/profile.jpg"
                alt="Yohan Damian Smith"
                width={192}
                height={192}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>

          <p className="text-green-600 dark:text-green-400 font-medium mb-4">
            Hello, I&apos;m
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
            Yohan Damian Smith
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Data Science Undergraduate | AI/ML Enthusiast
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Passionate about leveraging data science and machine learning to solve
            real-world problems. Currently exploring the frontiers of AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors font-medium"
            >
              View My Work
            </Link>
            <Link
              href="/CV - Yohan Damian Smith.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-green-600 dark:border-green-400 text-green-600 dark:text-green-400 hover:bg-green-600 hover:text-white dark:hover:bg-green-400 dark:hover:text-gray-900 px-6 py-3 rounded-lg transition-colors font-medium"
            >
              <Download size={20} />
              Download Resume
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <Link
            href="#about"
            className="text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors"
          >
            <ArrowDown size={32} className="animate-bounce" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
