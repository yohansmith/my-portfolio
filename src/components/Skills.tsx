"use client";

import { motion } from "framer-motion";
import { Code, Database, Wrench } from "lucide-react";

const skills = {
  Languages: [
    "Python",
    "R",
    "SQL",
    "Java",
    "JavaScript",
  ],
  "Frameworks & Libraries": [
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
  "Tools & Platforms": [
    "Power BI",
    "Tableau",
    "MySQL",
    "Git & GitHub",
    "Streamlit",
    "Jupyter Notebook",
  ],
};

export default function Skills() {
  return (
    <section
      id="skills"
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
            Skills & <span className="text-green-600">Technologies</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                  <Code className="text-green-600 dark:text-green-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Languages
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.Languages.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                  <Database className="text-green-600 dark:text-green-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Frameworks & Libraries
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills["Frameworks & Libraries"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-100 dark:bg-green-900 rounded-lg">
                  <Wrench className="text-green-600 dark:text-green-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Tools & Platforms
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills["Tools & Platforms"].map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
