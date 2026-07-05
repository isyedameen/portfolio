import { motion } from "framer-motion";
import {
  Layers,
  Zap,
  Palette,
  Settings,
  ArrowUpRight,
} from "lucide-react";
import { services } from "../../data/portfolioData";
import SectionHeader from "../ui/SectionHeader";
import GlassCard from "../ui/GlassCard";

const iconMap = {
  layers: Layers,
  zap: Zap,
  palette: Palette,
  settings: Settings,
};

/**
 * Services section with service cards and feature lists.
 */
export default function Services() {
  return (
    <section id="services" className="py-section-gap border-t border-white/5">
      <SectionHeader
        number="05"
        label="What I Offer"
        title="Technical Expertise"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {services.map((service, index) => {
          const Icon = iconMap[service.icon] || Layers;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <GlassCard className="p-8 group hover:border-accent-violet/30 transition-all duration-500 relative overflow-hidden h-full">
                {/* Hover gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-violet/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Icon & Title */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-accent-violet/10 border border-accent-violet/20 flex items-center justify-center group-hover:bg-accent-violet/20 group-hover:border-accent-violet/40 transition-all duration-300">
                      <Icon
                        size={24}
                        className="text-accent-indigo group-hover:text-accent-violet transition-colors"
                      />
                    </div>
                    <ArrowUpRight
                      size={18}
                      className="text-on-surface-variant/0 group-hover:text-accent-indigo group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                    />
                  </div>

                  <h3 className="font-display text-xl mb-3 group-hover:text-accent-indigo transition-colors">
                    {service.title}
                  </h3>

                  {service.description && (
                    <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                      {service.description}
                    </p>
                  )}

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-2 text-xs font-mono text-on-surface-variant"
                      >
                        <div className="w-1 h-1 rounded-full bg-accent-violet" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
