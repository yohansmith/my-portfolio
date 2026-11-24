"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";

const GitHubIcon = ({ className, size = 18 }: { className?: string; size?: number }) => (
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

const LinkedInIcon = ({ className, size = 18 }: { className?: string; size?: number }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <span className="text-emerald-600 dark:text-emerald-400 font-tech text-sm tracking-widest uppercase mb-3 block">
              // LET&apos;S CONNECT
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
              Feel free to reach out for collaborations, AI/ML opportunities, data science consulting, or just to say hello!
            </p>
          </div>

          <div className="flex flex-col items-center gap-6 max-w-xl mx-auto">
            <motion.a
              href="mailto:yohandamiansmith@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="glass-panel p-6 rounded-2xl shadow-xl magnetic-glow flex items-center gap-5 w-full group"
            >
              <div className="p-4 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-xl border border-emerald-500/30 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <Mail className="text-emerald-600 dark:text-emerald-400 group-hover:text-white" size={26} />
              </div>
              <div className="flex-1">
                <p className="font-tech text-xs text-emerald-600 dark:text-emerald-400 mb-1">// DIRECT EMAIL</p>
                <p className="font-semibold text-gray-900 dark:text-white text-base sm:text-lg">yohandamiansmith@gmail.com</p>
              </div>
              <Send size={18} className="text-gray-400 group-hover:text-emerald-500 transition-colors" />
            </motion.a>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <motion.a
                href="https://github.com/yohansmith"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="glass-panel p-5 rounded-2xl shadow-xl magnetic-glow flex items-center justify-center gap-3 flex-1 group"
              >
                <GitHubIcon className="text-gray-900 dark:text-white group-hover:scale-110 transition-transform" size={22} />
                <span className="font-semibold text-gray-900 dark:text-white">GitHub Profile</span>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/yohandamiansmith"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="glass-panel p-5 rounded-2xl shadow-xl magnetic-glow flex items-center justify-center gap-3 flex-1 group"
              >
                <LinkedInIcon className="text-blue-600 group-hover:scale-110 transition-transform" size={22} />
                <span className="font-semibold text-gray-900 dark:text-white">LinkedIn Network</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
