import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import CustomCursor from "./components/Cursor/CustomCursor";
import SiteHeader from "./components/Navigation/SiteHeader";
import ScrollToTop from "./components/ScrollToTop";
import SiteFooter from "./components/SiteFooter/SiteFooter";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import PortfolioDetail from "./Pages/PortfolioDetail/PortfolioDetail";
import styles from "./App.module.scss";

const App = (): React.ReactElement => {
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark",
  );

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    document.documentElement.dataset.theme = isDarkMode ? "dark" : "light";
  }, [isDarkMode]);

  return (
    <Router>
      <div className={`${styles.app} ${isDarkMode ? styles.dark : ""}`}>
        <CustomCursor />
        <ScrollToTop />
        <SiteHeader
          isDarkMode={isDarkMode}
          onToggleTheme={() => setIsDarkMode((current) => !current)}
        />
        <main className={styles.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ueber-uns" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:slug" element={<PortfolioDetail />} />
            <Route path="/kontakt" element={<Contact />} />
            <Route
              path="/contact"
              element={<Navigate to="/kontakt" replace />}
            />
          </Routes>
        </main>
        <SiteFooter />
      </div>
    </Router>
  );
};

export default App;
