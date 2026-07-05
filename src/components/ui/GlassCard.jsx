import { motion } from "framer-motion";

/**
 * Reusable glassmorphism card component.
 * Supports variants: default, strong, subtle.
 */
export default function GlassCard({
  children,
  className = "",
  variant = "default",
  hover = false,
  as = "div",
  ...props
}) {
  const baseClasses = {
    default: "glass rounded-2xl border border-white/10",
    strong: "glass-strong rounded-2xl border border-white/10",
    subtle: "glass rounded-xl border border-white/5",
  };

  const Component = hover ? motion.div : as === "article" ? "article" : "div";
  const hoverProps = hover
    ? {
        whileHover: { y: -4, transition: { duration: 0.3 } },
      }
    : {};

  return (
    <Component
      className={`${baseClasses[variant]} ${className}`}
      {...hoverProps}
      {...props}
    >
      {children}
    </Component>
  );
}
