import { motion } from "framer-motion";

/**
 * Consistent section header with number label and title.
 * Matches the original Stitch design pattern.
 */
export default function SectionHeader({
  number,
  label,
  title,
  centered = true,
  className = "",
}) {
  return (
    <motion.div
      className={`${centered ? "text-center" : ""} mb-16 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {(number || label) && (
        <p className="font-mono text-accent-indigo text-xs tracking-[0.2em] uppercase mb-4">
          {number && `${number} // `}
          {label}
        </p>
      )}
      <h2 className="font-display text-4xl md:text-5xl">{title}</h2>
    </motion.div>
  );
}
