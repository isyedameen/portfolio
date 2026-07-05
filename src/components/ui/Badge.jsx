/**
 * Technology badge component.
 * Used in project cards and skill displays.
 */
export default function Badge({ children, className = "" }) {
  return (
    <span
      className={`font-mono text-[10px] uppercase text-accent-indigo border border-accent-indigo/30 px-2.5 py-0.5 rounded tracking-wider ${className}`}
    >
      {children}
    </span>
  );
}
