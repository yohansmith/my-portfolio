"use client";

import { motion } from "framer-motion";
import { Code as CodeIcon, Database as DBIcon, Wrench as ToolWrench } from "lucide-react";

const skillGroups = [
  {
    title: "Languages",
    icon: CodeIcon,
    items: ["Python", "R", "SQL", "Java", "JavaScript"],
  },
  {
    title: "Frameworks & Libraries",
    icon: DBIcon,
    items: [
      "Scikit-learn",
      "TensorFlow",
      "PyTorch",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "React",
      "Node.js",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: ToolWrench,
    items: ["Power BI", "Tableau", "MySQL", "Git & GitHub", "Streamlit", "Jupyter Notebook"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <span className="text-emerald-600 dark:text-emerald-400 font-tech text-sm tracking-widest uppercase mb-3 block">
              {"// TECH STACK & CAPABILITIES"}
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
              Skills &amp; <span className="text-gradient">Technologies</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
              A comprehensive toolset spanning data science languages, machine learning
              frameworks, and analytics platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillGroups.map((group, idx) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: 0.1 * (idx + 1), duration: 0.6 }}
                  className="bg-[#0F172A] p-8 rounded-2xl border border-emerald-500/40 shadow-[0_0_24px_rgba(16,185,129,0.25)] hover:border-emerald-400/70 hover:shadow-[0_0_36px_rgba(16,185,129,0.4)] transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 bg-emerald-500/15 rounded-xl border border-emerald-500/40">
                      <Icon className="text-emerald-400" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-white">{group.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {group.items.map((skill) => (
                      <motion.span
                        key={skill}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-slate-800 text-white rounded-md font-tech text-sm border border-emerald-500/30 hover:border-emerald-400 hover:bg-slate-700 transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}