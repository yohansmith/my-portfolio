"use client";

import { motion } from "framer-motion";
import { Mail, ExternalLink } from "lucide-react";

const GitHubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
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

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
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
    <section
      id="contact"
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-4">
            Get In <span className="text-green-600">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, questions, or just to say hello!
          </p>

          <div className="flex flex-col items-center gap-8">
            <motion.a
              href="mailto:yohandamiansmith@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="flex items-center gap-4 bg-white dark:bg-gray-900 px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow w-full max-w-md"
            >
              <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                <Mail className="text-green-600 dark:text-green-400" size={24} />
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">Email Me</p>
                <p className="text-gray-600 dark:text-gray-400">yohandamiansmith@gmail.com</p>
              </div>
              <ExternalLink className="ml-auto text-gray-400" size={20} />
            </motion.a>

            <div className="flex gap-6">
              <motion.a
                href="https://github.com/yohansmith"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex items-center gap-3 bg-white dark:bg-gray-900 px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <GitHubIcon className="text-gray-900 dark:text-white" />
                <span className="font-medium text-gray-900 dark:text-white">GitHub</span>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/yohandamiansmith"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex items-center gap-3 bg-white dark:bg-gray-900 px-6 py-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <LinkedInIcon className="text-blue-700" />
                <span className="font-medium text-gray-900 dark:text-white">LinkedIn</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
