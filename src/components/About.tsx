"use client";

import { motion } from "framer-motion";
import { User, Target, Brain } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <span className="text-emerald-600 dark:text-emerald-400 font-tech text-sm tracking-widest uppercase mb-3 block">
              // WHO I AM
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
              Dedicated Data Science graduate with a strong foundation in statistical analytics, machine learning algorithms, and scalable data engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="glass-panel p-8 rounded-2xl shadow-xl magnetic-glow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-xl border border-emerald-500/30">
                    <User className="text-emerald-600 dark:text-emerald-400" size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  Pursuing a rigorous degree in Data Science with top honors. Building deep theoretical and practical mastery in statistical modeling, neural networks, and data visualization.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800 font-tech text-xs text-emerald-600 dark:text-emerald-400">
                &gt; status: graduated_with_honors
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="glass-panel p-8 rounded-2xl shadow-xl magnetic-glow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-xl border border-emerald-500/30">
                    <Target className="text-emerald-600 dark:text-emerald-400" size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Career Goals</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  Aspire to engineer high-impact AI/ML systems and production-grade data pipelines that solve pressing industry challenges and empower intelligent decision-making.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800 font-tech text-xs text-emerald-600 dark:text-emerald-400">
                &gt; target: ml_engineer_role
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="glass-panel p-8 rounded-2xl shadow-xl magnetic-glow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-xl border border-emerald-500/30">
                    <Brain className="text-emerald-600 dark:text-emerald-400" size={26} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Core Philosophy</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  Curious, analytical, and relentless about continuous learning. I believe clean code, robust statistical rigor, and clear visualizations are the pillars of impactful data science.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800 font-tech text-xs text-emerald-600 dark:text-emerald-400">
                &gt; focus: continuous_innovation
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
