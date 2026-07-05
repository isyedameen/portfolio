import { motion } from "framer-motion";
import { GraduationCap, MapPin, Globe, Calendar } from "lucide-react";
import { personalInfo } from "../../data/portfolioData";
import SectionHeader from "../ui/SectionHeader";
import GlassCard from "../ui/GlassCard";

/**
 * About section with philosophy text and animated code editor block.
 * Preserves the original Stitch two-column layout with code window.
 */
export default function About() {
  const { aboutPhilosophy, aboutDetails } = personalInfo;

  const details = [
    { icon: GraduationCap, label: "Education", value: aboutDetails.education },
    { icon: MapPin, label: "Location", value: aboutDetails.location },
    { icon: Calendar, label: "Graduated", value: aboutDetails.graduationYear },
    {
      icon: Globe,
      label: "Languages",
      value: aboutDetails.languages.join(", "),
    },
  ];

  return (
    <section id="story" className="py-section-gap border-y border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column */}
        <motion.div
          className="md:col-span-5"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeader
            number="01"
            label="The Origin"
            title={aboutPhilosophy.title}
            centered={false}
          />

          <div className="space-y-6 text-on-surface-variant text-base md:text-lg leading-relaxed">
            {aboutPhilosophy.paragraphs.map((text, i) => (
              <p
                key={i}
                dangerouslySetInnerHTML={{
                  __html: text.replace(
                    /<em>/g,
                    '<em class="text-white font-medium italic not-italic">'
                  ),
                }}
              />
            ))}
          </div>

          {/* Quick Details */}
          <div className="mt-10 grid grid-cols-2 gap-4">
            {details.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-accent-violet/10 group-hover:border-accent-violet/30 transition-all">
                  <Icon size={14} className="text-accent-indigo" />
                </div>
                <div>
                  <p className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider">
                    {label}
                  </p>
                  <p className="text-sm text-on-surface">{value}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column — Code Editor */}
        <motion.div
          className="md:col-span-7"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <GlassCard className="overflow-hidden p-1">
            {/* Window Controls */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/5">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                <div className="w-3 h-3 rounded-full bg-green-500/20" />
              </div>
              <span className="text-[10px] font-mono text-on-surface-variant uppercase ml-4">
                developer.ts
              </span>
            </div>

            {/* Code Content */}
            <div className="p-6 md:p-8 font-mono text-sm leading-relaxed overflow-x-auto">
              <pre className="text-accent-indigo">
                <span className="text-on-surface-variant">{"// "}</span>
                <span className="text-on-surface-variant">
                  MERN Stack Developer
                </span>
                {"\n\n"}
                <span className="text-accent-violet">class</span>{" "}
                <span className="text-white">Developer</span> {"{"}
                {"\n"}
                {"  "}
                <span className="text-accent-violet">constructor</span>(
                <span className="text-on-surface-variant">
                  public name: string
                </span>
                ) {"{}"}
                {"\n\n"}
                {"  "}
                <span className="text-accent-violet">skills</span>() {"{"}
                {"\n"}
                {"    "}
                <span className="text-accent-violet">return</span> {"{"}
                {"\n"}
                {"      "}frontend:{" "}
                <span className="text-white">'React.js'</span>,{"\n"}
                {"      "}backend:{" "}
                <span className="text-white">'Node.js & Express.js'</span>,{"\n"}
                {"      "}database:{" "}
                <span className="text-white">'MongoDB'</span>,{"\n"}
                {"      "}tools:{" "}
                <span className="text-white">'Git & GitHub'</span>
                {"\n"}
                {"    "}
                {"}"};{"\n"}
                {"  "}
                {"}"}
                {"\n\n"}
                {"  "}
                <span className="text-accent-violet">goal</span>() {"{"}
                {"\n"}
                {"    "}
                <span className="text-on-surface-variant">
                  {"// Passionate about learning"}
                </span>
                {"\n"}
                {"    "}
                <span className="text-on-surface-variant">
                  {"// and building web applications."}
                </span>
                {"\n"}
                {"    "}console.log(
                <span className="text-white">
                  "Building scalable web applications."
                </span>
                );{"\n"}
                {"  "}
                {"}"}
                {"\n"}
                {"}"}
              </pre>
            </div>
          </GlassCard>

          {/* Floating Detail Card */}
          <motion.div
            className="mt-6 glass rounded-xl border border-white/10 p-5 flex items-center justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-violet to-accent-indigo flex items-center justify-center">
                <span className="text-white font-mono text-xs font-bold">
                  {"{}"}
                </span>
              </div>
              <div>
                <p className="font-mono text-xs text-on-surface font-medium">
                  MERN Stack Developer
                </p>
                <p className="font-mono text-[10px] text-on-surface-variant">
                  Frontend & Backend Development
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="font-mono text-[10px] text-on-surface-variant">
                Open to Opportunities
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
