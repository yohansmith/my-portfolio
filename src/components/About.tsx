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
              Here's how I got from a school ICT class to data science, one step at a time.
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
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Where it started</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  In 2021 I began a diploma in ICT at ESOFT, and I was hooked on computing from the start. I moved on to a BTEC HND in General Computing, then finished a BSc (Hons) in Data Science with London Metropolitan University, graduating with Second Class Upper Honours.
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
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Learning on the job</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  My first job was at Infomate (John Keells Group), where I handled 300+ invoices a day for a Swedish client and kept to their 90% accuracy standard. It taught me how much careful data quality matters. Now I'm a data labeler at Atlas Labs, annotating images and videos so computer vision models can learn from them.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800 font-tech text-xs text-emerald-600 dark:text-emerald-400">
                &gt; status: working_with_real_data
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
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">What I'm building now</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base">
                  I'm teaching myself RAG pipelines, LangChain, and automation with n8n and FastAPI. The goal is to build tools that handle documents the way I used to by hand, only faster. I'd love to grow into an ML engineer role.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800 font-tech text-xs text-emerald-600 dark:text-emerald-400">
                &gt; target: ml_engineer
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
