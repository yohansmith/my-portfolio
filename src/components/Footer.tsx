"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-2">
            <span className="text-emerald-500">Yohan Damian Smith</span>
          </h3>
          <p className="text-gray-400 mb-8">Thank you for visiting my portfolio!</p>

          <div className="flex justify-center gap-6 flex-wrap">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-emerald-500 transition-colors text-sm"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://github.com/yohansmith"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-500 transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/yohandamiansmith"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-emerald-500 transition-colors text-sm"
            >
              LinkedIn
            </a>
          </div>

          <hr className="my-8 border-gray-700" />

          <p className="text-gray-500">
            &copy; {currentYear} Yohan Damian Smith. All rights reserved.
          </p>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.5 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 bg-emerald-600 hover:bg-emerald-700 text-white p-3 rounded-full shadow-lg transition-colors z-50"
        aria-label="Back to top"
      >
        <span className="text-lg">&#8593;</span>
      </motion.button>
    </footer>
  );
}
