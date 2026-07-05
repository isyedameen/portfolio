import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Dark/Light mode toggle button.
 */
export default function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all cursor-pointer"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
        animate={{ rotate: 0, opacity: 1, scale: 1 }}
        exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {theme === "dark" ? (
          <Sun size={16} className="text-on-surface-variant" />
        ) : (
          <Moon size={16} className="text-on-surface-variant" />
        )}
      </motion.div>
    </button>
  );
}
