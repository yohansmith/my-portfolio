"use client";

import { motion } from "framer-motion";
import { GraduationCap, Target, User } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
            About <span className="text-green-600">Me</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                  <GraduationCap className="text-green-600 dark:text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Education
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Currently pursuing a degree in Data Science. Strong foundation in
                statistics, machine learning, and data visualization techniques.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                  <Target className="text-green-600 dark:text-green-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Career Goals
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                Aspire to become a skilled Data Scientist/ML Engineer. Committed to
                continuous learning and contributing to meaningful AI/ML projects.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
                  <User className="text-purple-600 dark:text-purple-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Who I Am
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                A curious mind passionate about extracting insights from data. I
                enjoy tackling complex problems and turning them into elegant
                data-driven solutions.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
