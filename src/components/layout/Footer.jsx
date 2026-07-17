import { GithubIcon, LinkedinIcon, InstagramIcon } from "../ui/SocialIcons";
import { Mail } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";
import { scrollToSection } from "../../utils/helpers";

/**
 * Footer with navigation, social links, and copyright.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { socialLinks } = personalInfo;

  const socialIcons = [
    { icon: GithubIcon, href: socialLinks.github, label: "GitHub" },
    { icon: LinkedinIcon, href: socialLinks.linkedin, label: "LinkedIn" },
    { icon: Mail, href: socialLinks.email, label: "Email" },
    { icon: InstagramIcon, href: socialLinks.instagram, label: "Instagram" },
  ];

  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-[1536px] mx-auto px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Left Column: Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <button
              onClick={() => scrollToSection("hero")}
              aria-label="Go to homepage"
              className="font-display text-2xl tracking-tighter cursor-pointer group"
            >
              Syed Ameen
            </button>
            <span className="font-mono text-[10px] text-on-surface-variant/50 tracking-widest">
              © {currentYear} Syed Ameen. All rights reserved.
            </span>
          </div>

          {/* Right Column: Social Icons & Links */}
          <div className="flex flex-col items-center md:items-end gap-5">
            <div className="flex gap-3">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-accent-violet/10 hover:border-accent-violet/20 hover:-translate-y-1 transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon
                    size={16}
                    className="text-on-surface-variant group-hover:text-accent-violet transition-colors"
                  />
                </a>
              ))}
            </div>

            <div className="flex gap-6 font-mono text-[10px] uppercase text-on-surface-variant/60 tracking-widest">
              <a href="#" className="hover:text-accent-indigo transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-accent-indigo transition-colors">
                Sitemap
              </a>
              <a
                href={personalInfo.resumeUrl}
                className="hover:text-accent-indigo transition-colors"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
