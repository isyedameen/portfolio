import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/**
 * Animated skill progress bar.
 * Fills to the specified percentage when scrolled into view.
 */
export default function SkillBar({ name, level, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-30px" });

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="font-mono text-xs tracking-wide text-on-surface">
          {name}
        </span>
        <span className="font-mono text-xs text-accent-indigo">{level}%</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-accent-violet to-accent-indigo"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : { width: 0 }}
          transition={{
            duration: 1.2,
            delay: delay,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>
    </div>
  );
}
