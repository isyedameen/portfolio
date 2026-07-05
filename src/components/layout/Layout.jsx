import Navbar from "./Navbar";
import Footer from "./Footer";

/**
 * Root layout wrapper.
 * Provides the noise overlay, grid background, navbar, and footer.
 */
export default function Layout({ children, theme, toggleTheme }) {
  return (
    <div className="relative min-h-screen">
      {/* Fixed Background Effects */}
      <div className="fixed inset-0 grid-bg pointer-events-none z-[-1]" />
      <div className="noise-bg" />

      {/* Navigation */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content */}
      <main className="max-w-[1536px] mx-auto px-6 md:px-20">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
