import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "../ui/SocialIcons";
import { Mail } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";
import Button from "../ui/Button";

/**
 * Hero section with gradient text, parallax image area,
 * floating UI elements, CTA buttons, and social links.
 */
export default function Hero() {
  const { heroHeadline, heroDescription, tagline, socialLinks, resumeUrl } =
    personalInfo;
  const containerRef = useRef(null);

  // Parallax mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });
  const moveX = useTransform(springX, [-500, 500], [-15, 15]);
  const moveY = useTransform(springY, [-500, 500], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const socialIcons = [
    { icon: GithubIcon, href: socialLinks.github, label: "GitHub" },
    { icon: LinkedinIcon, href: socialLinks.linkedin, label: "LinkedIn" },
    { icon: Mail, href: socialLinks.email, label: "Email" },
  ];

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-32 lg:pt-24 pb-16 mesh-gradient relative"
      onMouseMove={handleMouseMove}
      ref={containerRef}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center w-full">
        {/* Left Content */}
        <motion.div
          className="lg:col-span-7 flex flex-col gap-8 lg:gap-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="space-y-4">
            <motion.span
              className="font-mono text-accent-indigo tracking-widest text-xs uppercase block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              {tagline}
            </motion.span>

            <motion.h1
              className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[100px] leading-[0.95] tracking-tighter"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {heroHeadline.line1} <br />
              <span className="italic gradient-text">
                {heroHeadline.accent}
              </span>{" "}
              <br />
              {heroHeadline.line3}
            </motion.h1>
          </div>

          <motion.p
            className="font-body text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {heroDescription}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Button
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              icon={<ExternalLink size={14} />}
            >
              View Projects
            </Button>
            <Button href={resumeUrl} download="Syed Ameen.pdf" target="_blank" rel="noopener noreferrer" variant="secondary">
              <ArrowDown size={14} />
              Download Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center gap-4 pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">
              Connect
            </span>
            <div className="w-8 h-[1px] bg-white/10" />
            {socialIcons.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-violet/20 hover:border-accent-violet/50 transition-all group"
                aria-label={label}
              >
                <Icon
                  size={14}
                  className="text-on-surface-variant group-hover:text-accent-indigo transition-colors"
                />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right - Hero Visual */}
        <motion.div
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <motion.div
            className="relative w-full aspect-square rounded-3xl overflow-hidden glass border border-white/10 shadow-2xl group"
            style={{ x: moveX, y: moveY }}
          >
            <img
              src="/profile.png"
              alt="Profile"
              className="w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />


          </motion.div>

          {/* Glow effect behind the card */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-accent-violet/10 rounded-full blur-[100px]" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-widest">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown size={14} className="text-on-surface-variant" />
        </motion.div>
      </motion.div>
    </section>
  );
}
