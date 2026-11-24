"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Code2, Sparkles } from "lucide-react";

const GitHubIcon = ({
  className,
  size = 18,
}: {
  className?: string;
  size?: number;
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

interface Project {
  title: string;
  description: string;
  techStack: string[];
  github: string;
  category: string;
  featured?: boolean;
  terminalTag: string;
}

const projects: Project[] = [
  {
    title: "Federated Healthcare Recommender System",
    description:
      "A privacy-preserving healthcare recommendation system using federated learning to deliver personalized health suggestions across decentralized nodes without compromising patient data.",
    techStack: ["Python", "PyTorch", "Pandas", "NumPy"],
    github: "https://github.com/yohansmith/Federated-Healthcare-Recommender-System",
    category: "Machine Learning",
    featured: true,
    terminalTag: "> repo: github.com/your-username/federated-healthcare",
  },
  {
    title: "Airbnb Data Engineering Pipeline",
    description:
      "Built an end-to-end data engineering pipeline using the Inside Airbnb London dataset, covering data ingestion, cleaning, dimensional modeling, exploratory data analysis, and statistical testing.",
    techStack: ["Python", "DuckDB", "SQL", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    github: "https://github.com/yohansmith/airbnb-data-engineering-assessment",
    category: "Data Engineering",
    featured: true,
    terminalTag: "> repo: github.com/yohansmith/airbnb-data-engineering-assessment",
  },
  {
    title: "Sentiment Analysis Project",
    description:
      "A machine learning project focused on analyzing and classifying text sentiment using advanced NLP techniques and deep neural network embeddings.",
    techStack: ["Python", "TensorFlow", "Scikit-learn", "NLTK", "Pandas"],
    github: "https://github.com/yohansmith/Sentiment-Analysis-Project",
    category: "Machine Learning",
    terminalTag: "> repo: github.com/yohansmith/Sentiment-Analysis-Project",
  },
  {
    title: "Customer Satisfaction Analysis Dashboard",
    description:
      "An interactive analytics dashboard for exploring customer satisfaction metrics and key performance indicators using visualization libraries and statistical correlation matrices.",
    techStack: ["Python", "Streamlit", "Pandas", "Matplotlib", "Seaborn"],
    github: "https://github.com/yohansmith/Customer-Satisfaction-Analysis-Dashboard",
    category: "Data Analytics",
    terminalTag: "> repo: github.com/yohansmith/Customer-Satisfaction-Analysis-Dashboard",
  },
];

const getTechBadgeStyle = (tech: string) => {
  const styles: Record<string, string> = {
    Python: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    TensorFlow: "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
    PyTorch: "bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20",
    Pandas: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
    NumPy: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
    DuckDB: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    SQL: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
    "Scikit-learn": "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20",
    NLTK: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20",
    Streamlit: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
    Matplotlib: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",
    Seaborn: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
  };
  return (
    styles[tech] ||
    "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20"
  );
};

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const slideTo = (newIndex: number) => {
    const total = projects.length;
    const wrapped = (newIndex + total) % total;
    setDirection(newIndex > currentIndex ? 1 : -1);
    setCurrentIndex(wrapped);
  };

  const handleNext = () => slideTo(currentIndex + 1);
  const handlePrev = () => slideTo(currentIndex - 1);

  const activeProject = projects[currentIndex];
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <section
      id="projects"
      className="relative py-24 overflow-hidden bg-slate-50 dark:bg-[#0B1120] transition-colors duration-500"
    >
      {/* Background glows */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl dark:bg-emerald-500/10" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-indigo-500/15 blur-3xl dark:bg-indigo-500/10" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="font-mono text-xs sm:text-sm tracking-widest uppercase text-emerald-600 dark:text-emerald-400 mb-3">
            {"// WHAT I'VE BUILT"}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-emerald-600 dark:text-emerald-400">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            A few things I've built while learning. Swipe through, and tap "View Source Code" to see the real thing
          </p>
        </motion.div>

        {/* Counter + controls */}
        <div className="flex items-center justify-between max-w-5xl mx-auto mb-6">
          <div className="font-mono text-xs sm:text-sm text-gray-600 dark:text-gray-400 flex items-center gap-2">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>
              PROJECT [{String(currentIndex + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}]
            </span>
          </div>

          <div className="flex items-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrev}
              aria-label="Previous project"
              className="p-2.5 rounded-xl bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 shadow-sm backdrop-blur-md transition-colors"
            >
              <ChevronLeft size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              aria-label="Next project"
              className="p-2.5 rounded-xl bg-white/80 dark:bg-gray-900/80 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:border-emerald-500/50 hover:text-emerald-600 dark:hover:text-emerald-400 shadow-sm backdrop-blur-md transition-colors"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>

        {/* Card */}
        <div className="relative max-w-5xl mx-auto">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeProject.title}
              custom={direction}
              initial={{ opacity: 0, x: direction >= 0 ? 60 : -60, scale: 0.98 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: direction >= 0 ? -60 : 60, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 26 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -70) handleNext();
                else if (info.offset.x > 70) handlePrev();
              }}
              className="cursor-grab active:cursor-grabbing rounded-2xl bg-white/85 dark:bg-[#111827]/85 border border-gray-200/80 dark:border-gray-800 hover:border-emerald-500/50 dark:hover:border-emerald-500/40 shadow-xl backdrop-blur-xl overflow-hidden transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left visual panel */}
                <div className="lg:col-span-5 relative min-h-[240px] lg:min-h-[340px] bg-gradient-to-br from-emerald-950/90 via-slate-900 to-indigo-950/90 p-8 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-gray-200/20 dark:border-gray-800">
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                    className="h-20 w-20 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 flex items-center justify-center text-emerald-400 shadow-lg shadow-emerald-500/10 mb-4"
                  >
                    <Code2 size={36} />
                  </motion.div>
                  <span className="font-mono text-sm tracking-wider text-emerald-300">
                    {activeProject.category}
                  </span>
                  <span className="absolute bottom-4 font-mono text-[10px] text-gray-500">
                    [Drag or use arrows to slide]
                  </span>
                </div>

                {/* Right content panel */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-mono text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                        {activeProject.category}
                      </span>
                      {activeProject.featured && (
                        <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                          <Sparkles size={12} />
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
                      {activeProject.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-5 leading-relaxed">
                      {activeProject.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {activeProject.techStack.map((tech) => (
                        <span
                          key={tech}
                          className={`font-mono text-xs px-3 py-1 rounded-lg border ${getTechBadgeStyle(
                            tech
                          )}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between flex-wrap gap-3 mb-4">
                      <a
                        href={activeProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-sm font-medium hover:bg-emerald-600 dark:hover:bg-emerald-400 transition-colors"
                      >
                        <GitHubIcon size={18} />
                        View Source Code
                      </a>
                      <span className="font-mono text-xs text-gray-500 dark:text-gray-500">
                        Next: {nextProject.title.slice(0, 22)}...
                      </span>
                    </div>

                    <div className="font-mono text-[11px] sm:text-xs px-3 py-2 rounded-lg bg-gray-100 dark:bg-black/40 text-gray-600 dark:text-emerald-400/80 border border-gray-200 dark:border-gray-800 overflow-x-auto whitespace-nowrap">
                      {activeProject.terminalTag}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination dots */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {projects.map((project, idx) => (
              <button
                key={project.title}
                onClick={() => slideTo(idx)}
                aria-label={`Go to ${project.title}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "w-8 bg-emerald-500"
                    : "w-2.5 bg-gray-300 dark:bg-gray-700 hover:bg-emerald-400/60"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}