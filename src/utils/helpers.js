/**
 * Generates a random contribution grid for the GitHub activity display.
 * Returns an array of cell states: 'empty', 'active', or 'high'.
 */
export function generateContributionGrid(count = 350) {
  return Array.from({ length: count }, () => {
    const rand = Math.random();
    if (rand > 0.92) return "high";
    if (rand > 0.8) return "active";
    return "empty";
  });
}

/**
 * Smooth scroll to a section by ID.
 */
export function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

/**
 * Format a number with suffix (e.g., 2400 → "2,400").
 */
export function formatNumber(num) {
  return num.toLocaleString();
}

/**
 * Clamp a value between min and max.
 */
export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
