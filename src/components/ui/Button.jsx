/**
 * Reusable button component.
 * Variants: primary (gradient fill), secondary (outlined), ghost.
 */
export default function Button({
  children,
  variant = "primary",
  href,
  className = "",
  icon,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center gap-2 font-mono text-sm rounded-full transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "px-6 py-4 md:px-10 md:py-5 bg-accent-violet text-white shadow-[0_20px_50px_-10px_rgba(99,102,241,0.4)] hover:-translate-y-1 hover:shadow-[0_25px_60px_-10px_rgba(99,102,241,0.5)]",
    secondary:
      "px-6 py-4 md:px-10 md:py-5 border border-white/10 text-on-surface hover:bg-white/5",
    ghost:
      "px-6 py-3 text-on-surface-variant hover:text-white",
    small:
      "px-6 py-2 bg-white/5 border border-white/10 text-xs hover:bg-accent-violet hover:border-accent-violet",
  };

  const classes = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
      {icon}
    </button>
  );
}
