import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  Mail,
  MapPin,
  ArrowUpRight,
  CheckCircle,
} from "lucide-react";
import { personalInfo } from "../../data/portfolioData";
import GlassCard from "../ui/GlassCard";

/**
 * Contact section with form, email card, and social links.
 */
export default function Contact() {
  const {
    email,
    location,
    availability,
    socialLinks,
  } = personalInfo;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "1a53c0e0-3cb5-4b16-a2a0-af9d4acbe494");
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("message", formData.message);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataToSend,
    });

    const data = await response.json();

    if (data.success) {
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setTimeout(() => setIsSubmitted(false), 3000);
    } else {
      alert("Failed to send message.");
    }
  } catch (error) {
    alert("Something went wrong. Please try again.");
  }
};

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="py-24 border-t border-white/5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left Side */}
        <motion.div
          className="space-y-10"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl leading-none tracking-tighter mb-6">
              Let&apos;s build <br />
              <span className="italic text-on-surface-variant/40">
                something great.
              </span>
            </h2>
            <p className="text-on-surface-variant text-lg max-w-md leading-relaxed">
              {availability}
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <p className="font-mono text-xs text-on-surface-variant uppercase tracking-widest">
              LET'S CONNECT
            </p>
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {[
                { label: "GitHub", href: socialLinks.github },
                { label: "LinkedIn", href: socialLinks.linkedin },
                { label: "Email", href: socialLinks.email },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl md:text-2xl font-display hover:text-accent-indigo transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3 text-on-surface-variant">
            <MapPin size={16} className="text-accent-indigo" />
            <span className="font-mono text-sm">{location}</span>
          </div>

          {/* Email Card */}
          <a
            href={`mailto:${email}`}
            className="group relative glass rounded-2xl border border-white/10 p-6 md:p-8 flex items-center justify-between hover:border-accent-violet transition-all duration-500 overflow-hidden block"
          >
            <div className="relative z-10">
              <span className="font-mono text-xs text-accent-indigo uppercase block mb-1">
                Email Me
              </span>
              <span className="font-display text-xl sm:text-2xl md:text-3xl">{email}</span>
            </div>
            <div className="relative z-10 w-12 h-12 rounded-full bg-accent-violet flex items-center justify-center text-white group-hover:rotate-45 transition-transform duration-500">
              <ArrowUpRight size={20} />
            </div>
            <div className="absolute inset-0 bg-accent-violet/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </a>
        </motion.div>

        {/* Right Side — Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GlassCard className="p-6 md:p-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-full bg-accent-violet/10 border border-accent-violet/20 flex items-center justify-center">
                <Mail size={16} className="text-accent-indigo" />
              </div>
              <div>
                <h3 className="font-mono text-sm font-medium">
                  Let's Discuss Your Project
                </h3>
                <p className="font-mono text-[10px] text-on-surface-variant">
                  Feel free to reach out. I&apos;ll get back to you as soon as possible.
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mb-2"
                >
                  Full Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 font-mono text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-accent-violet/50 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mb-2"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 font-mono text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-accent-violet/50 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block font-mono text-[10px] text-on-surface-variant uppercase tracking-widest mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project, idea, or opportunity..."
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 font-mono text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-accent-violet/50 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitted}
                className={`w-full py-4 rounded-xl font-mono text-sm flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer ${
                  isSubmitted
                    ? "bg-green-500/20 border border-green-500/30 text-green-400"
                    : "bg-accent-violet text-white hover:shadow-[0_20px_50px_-10px_rgba(99,102,241,0.4)] hover:-translate-y-0.5"
                }`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle size={16} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}
  