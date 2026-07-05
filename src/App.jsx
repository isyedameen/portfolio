import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useTheme } from "./hooks/useTheme";
import Layout from "./components/layout/Layout";
import LoadingScreen from "./components/ui/LoadingScreen";
import Home from "./pages/Home";

/**
 * Root application component.
 * Provides routing, theme context, loading screen, and layout.
 */
export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Router>
      <LoadingScreen />
      <Layout theme={theme} toggleTheme={toggleTheme}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
}
