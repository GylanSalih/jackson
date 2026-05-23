import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { images } from '../shared/brandAssets';
import styles from './SiteHeader.module.scss';

const navItems = [
  { to: '/ueber-uns', label: 'Über Uns' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/contact', label: 'Contact' },
];

const SiteHeader = (): React.ReactElement => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`} aria-label="Hauptnavigation">
      <Link to="/" className={styles.logo} aria-label="Home">
        <img src={images.logoWhite} alt="Home" />
      </Link>

      <ul className={styles.navList}>
        {navItems.map((item) => (
          <li key={item.to}>
            <NavLink to={item.to} className={({ isActive }) => (isActive ? styles.activeLink : undefined)}>
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>

      <Link to="/contact" className={styles.navCta}>
        <span>Strategiegespräch</span>
      </Link>
    </nav>
  );
};

export default SiteHeader;
