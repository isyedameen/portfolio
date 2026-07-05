import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "../../data/portfolioData";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import { scrollToSection } from "../../utils/helpers";
import ThemeToggle from "../ui/ThemeToggle";

/**
 * Glassmorphic floating navigation bar.
 * Features: scroll-spy, mobile drawer, theme toggle, scroll-aware background.
 */
export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const sectionIds = ["hero", ...navLinks.map((l) => l.href), "contact"];
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const handleNavClick = (href) => {
    scrollToSection(href);
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl h-16 rounded-full glass-nav flex items-center justify-between px-6 md:px-10 z-[100] transition-all duration-500 ${
          isScrolled ? "shadow-2xl shadow-black/20" : ""
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Logo */}
        <button
          onClick={() => handleNavClick("hero")}
          className="font-display text-xl md:text-2xl tracking-tighter cursor-pointer"
          aria-label="Go to top"
        >
          AMEEN
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`font-mono text-xs tracking-wider uppercase transition-colors cursor-pointer ${
                activeId === link.href
                  ? "text-accent-indigo"
                  : "text-on-surface-variant hover:text-white"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

          <button
            onClick={() => handleNavClick("contact")}
            className="hidden md:inline-flex bg-white/5 border border-white/10 px-6 py-2 rounded-full font-mono text-xs hover:bg-accent-violet hover:border-accent-violet transition-all cursor-pointer"
          >
            Contact
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? (
              <X size={18} className="text-on-surface" />
            ) : (
              <Menu size={18} className="text-on-surface" />
            )}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[99] bg-surface/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, index) => (
              <motion.button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`font-display text-3xl tracking-tight cursor-pointer ${
                  activeId === link.href
                    ? "text-accent-indigo"
                    : "text-on-surface hover:text-accent-indigo"
                } transition-colors`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              onClick={() => handleNavClick("contact")}
              className="mt-4 px-10 py-4 bg-accent-violet text-white rounded-full font-mono text-sm cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.08 + 0.1 }}
            >
              Contact
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
