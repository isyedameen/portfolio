import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { experience } from "../../data/portfolioData";
import SectionHeader from "../ui/SectionHeader";

const typeIcons = {
  "full-time": GraduationCap,
  education: GraduationCap,
};

/**
 * Experience timeline section.
 * Alternating layout with glowing dots and watermark text.
 * Preserves the original Stitch timeline design.
 */
export default function Experience() {
  return (
    <section
      id="experience"
      className="py-section-gap border-t border-white/5"
    >
      <SectionHeader
        number="04"
        label="Evolution"
        title="Journey & Growth"
      />

      <div className="relative max-w-4xl mx-auto pl-8 md:pl-0">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-accent-violet via-accent-indigo to-transparent md:-translate-x-1/2 opacity-20" />

        {experience.map((item, index) => {
          const isEven = index % 2 === 0;
          const Icon = typeIcons[item.type] || Briefcase;

          return (
            <motion.div
              key={index}
              className={`relative mb-20 md:mb-24 md:flex items-center group ${
                !isEven ? "flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Content */}
              <div
                className={`md:w-1/2 ${
                  isEven
                    ? "md:pr-16 text-left md:text-right"
                    : "md:pl-16 text-left"
                }`}
              >
                <div className="flex items-center gap-2 mb-2 md:justify-start">
                  <Icon
                    size={12}
                    className={`text-${item.color}`}
                  />
                  <span
                    className={`font-mono text-xs text-${item.color} uppercase tracking-wider`}
                  >
                    {item.period}
                  </span>
                </div>
                <h3 className="font-display text-xl md:text-2xl mb-2">
                  {item.title}
                </h3>
                <p className="font-mono text-xs text-accent-indigo mb-3 uppercase tracking-wider">
                  {item.company}
                </p>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Timeline Dot */}
              <div
                className={`absolute left-[-6px] md:left-1/2 md:-translate-x-1/2 z-10 transition-transform duration-300 group-hover:scale-150 ${
                  index === 0 ? "w-4 h-4" : index === 1 ? "w-3 h-3" : "w-2 h-2"
                } rounded-full ${
                  index === 0
                    ? "bg-accent-violet shadow-[0_0_20px_rgba(99,102,241,1)]"
                    : index === 1
                    ? "bg-accent-indigo opacity-60 group-hover:opacity-100"
                    : "bg-white/20 group-hover:bg-white"
                }`}
              />

              {/* Watermark */}
              <div
                className={`hidden md:block md:w-1/2 ${
                  isEven ? "md:pl-16" : "md:pr-16 text-right"
                }`}
              >
                <span className="text-white/[0.04] font-display text-5xl lg:text-6xl select-none uppercase">
                  {item.watermark}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
