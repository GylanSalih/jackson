import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { images } from "../shared/brandAssets";
import styles from "./SiteHeader.module.scss";

type SiteHeaderProps = {
  isDarkMode: boolean;
  onToggleTheme: () => void;
};

const navItems = [
  { to: "/", label: "Home" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/ueber-uns", label: "Über Uns" },
  { to: "/kontakt", label: "Kontakt" },
];

const SiteHeader = ({
  isDarkMode,
  onToggleTheme,
}: SiteHeaderProps): React.ReactElement => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}
      aria-label="Hauptnavigation"
    >
      <Link to="/" className={styles.logo} aria-label="Home">
        <img src={images.logoOrange} alt="Home" />
      </Link>

      <ul className={styles.navList}>
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                isActive ? styles.activeLink : undefined
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className={styles.actions}>
        <button
          className={styles.themeToggle}
          type="button"
          onClick={onToggleTheme}
          aria-label={
            isDarkMode ? "Light Mode aktivieren" : "Dark Mode aktivieren"
          }
          title={isDarkMode ? "Light Mode" : "Dark Mode"}
        >
          {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        <Link to="/kontakt" className={styles.navCta}>
          <span>Strategiegespräch</span>
        </Link>
      </div>
    </nav>
  );
};

export default SiteHeader;
