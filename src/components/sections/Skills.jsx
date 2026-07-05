import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, Server, Database, Wrench } from "lucide-react";
import { skills } from "../../data/portfolioData";
import SectionHeader from "../ui/SectionHeader";
import SkillBar from "../ui/SkillBar";

const categories = [
  { key: "frontend", label: "Frontend", icon: Monitor },
  { key: "backend", label: "Backend", icon: Server },
  { key: "database", label: "Database", icon: Database },
  { key: "tools", label: "Tools", icon: Wrench },
];

/**
 * Skills section with category tabs and animated progress bars.
 * Replaces the original network visualization with a more functional skill display.
 */
export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("frontend");

  return (
    <section id="skills" className="py-section-gap relative overflow-hidden">
      <SectionHeader number="02" label="The Ecosystem" title="Technical Skills" />

      {/* Category Tabs */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        {categories.map(({ key, label, icon: Icon }) => (
          <button
            key={key}
            onClick={() => setActiveCategory(key)}
            className={`flex items-center gap-2 px-6 py-3 rounded-full font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
              activeCategory === key
                ? "bg-accent-violet text-white shadow-[0_0_30px_rgba(99,102,241,0.3)]"
                : "glass border border-white/10 text-on-surface-variant hover:text-white hover:border-white/20"
            }`}
          >
            <Icon size={14} />
            {label}
          </button>
        ))}
      </motion.div>

      {/* Skill Bars */}
      <div className="max-w-4xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {skills[activeCategory]?.map((skill, index) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                level={skill.level}
                delay={index * 0.08}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Network Visualization (decorative) */}
      <motion.div
        className="mt-20 relative max-w-5xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "React.js",
            "Next.js",
            "JavaScript",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Mongoose",
            "Redux Toolkit",
            "Tailwind CSS",
            "Git",
            "GitHub",
            "Postman",
            "Vercel",
            "AWS",
            "Docker",
          ].map((tech, i) => (
            <motion.div
              key={tech}
              className="glass px-5 py-2.5 rounded-xl border border-white/10 hover:border-accent-violet/50 transition-all cursor-default group"
              whileHover={{ scale: 1.05, y: -2 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
            >
              <span className="font-mono text-sm group-hover:text-accent-indigo transition-colors">
                {tech}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
