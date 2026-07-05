import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Search,
  X,
  Activity,
} from "lucide-react";
import { GithubIcon } from "../ui/SocialIcons";
import {
  projects,
  projectCategories,
  statistics,
} from "../../data/portfolioData";
import SectionHeader from "../ui/SectionHeader";
import Badge from "../ui/Badge";
import GlassCard from "../ui/GlassCard";
import { generateContributionGrid } from "../../utils/helpers";

const contributionCells = generateContributionGrid();

/**
 * Projects section with filter, search, project grid, and GitHub activity.
 */
export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeFilter === "All" || project.category === activeFilter;
      const matchesSearch =
        !searchQuery ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchQuery.toLowerCase())
        );
      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  return (
    <section id="projects" className="py-section-gap">
      {/* Header */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-12 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <SectionHeader
            number="03"
            label="Selected Proofs"
            title="Project Archive"
            centered={false}
            className="!mb-0"
          />
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {/* Search */}
          <div className="relative">
            <Search
              size={14}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant"
            />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full sm:w-56 pl-10 pr-8 py-2.5 rounded-full glass border border-white/10 font-mono text-xs text-on-surface bg-transparent placeholder:text-on-surface-variant/50 focus:outline-none focus:border-accent-violet/50 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-white cursor-pointer"
              >
                <X size={12} />
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex gap-2 glass p-1 rounded-full border border-white/10">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-mono transition-all cursor-pointer ${
                  activeFilter === cat
                    ? "bg-white/10 text-white"
                    : "text-on-surface-variant hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter + searchQuery}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              className="group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 glass border border-white/10">
                <img
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  src={project.image}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-surface/40 group-hover:bg-transparent transition-colors duration-500" />

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full border border-accent-violet/30">
                    <span className="font-mono text-[10px] text-accent-violet uppercase tracking-wider">
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="space-y-4 px-1">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>

                <h3 className="font-display text-xl md:text-2xl group-hover:text-accent-indigo transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-on-surface-variant leading-relaxed line-clamp-2">
                  {project.description}
                </p>

                <div className="flex gap-4 pt-2">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-mono text-white hover:text-accent-indigo transition-colors"
                  >
                    Live Demo <ExternalLink size={12} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-xs font-mono text-on-surface-variant hover:text-white transition-colors"
                  >
                    GitHub <GithubIcon size={12} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          className="text-center py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <p className="font-mono text-on-surface-variant text-sm">
            No projects match your search. Try different keywords.
          </p>
        </motion.div>
      )}

      {/* GitHub Activity */}
      <motion.div
        className="mt-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
      >
        <GlassCard className="p-6 md:p-8 border border-white/5 rounded-3xl">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                <Activity size={16} className="text-accent-indigo" />
              </div>
              <div>
                <h4 className="font-mono text-sm font-medium">
                  Recent GitHub Activity
                </h4>
                <p className="text-[10px] font-mono text-on-surface-variant uppercase tracking-widest">
                  {statistics[3]?.value?.toLocaleString()}+ contributions this year
                </p>
              </div>
            </div>
            <a
              href={`https://github.com/isyedameen`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-mono text-accent-indigo hover:underline"
            >
              View My GitHub
            </a>
          </div>

          {/* Contribution Grid */}
          <div className="flex flex-wrap gap-[3px] opacity-80 overflow-hidden h-24">
            {contributionCells.map((state, i) => (
              <div
                key={i}
                className={`contribution-cell ${state !== "empty" ? state : ""}`}
              />
            ))}
          </div>
        </GlassCard>
      </motion.div>
    </section>
  );
}
