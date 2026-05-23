import React, { useEffect, useState } from 'react';
import { images } from '../assets';
import styles from './KlygerHeader.module.scss';

const navItems = [
  { href: '#problem', label: 'Warum' },
  { href: '#process', label: 'Prozess' },
  { href: '#bausteine', label: 'Bausteine' },
  { href: '#packages', label: 'Leistungen' },
];

const KlygerHeader = (): React.ReactElement => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`} aria-label="Hauptnavigation">
      <a href="#hero" className={styles.logo} aria-label="Klyger Startseite">
        <img src={images.logoWhite} alt="Klyger" />
      </a>

      <ul className={styles.navList}>
        {navItems.map((item) => (
          <li key={item.href}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>

      <a href="#cta" className={styles.navCta}>
        <span>Strategiegespräch</span>
      </a>
    </nav>
  );
};

export default KlygerHeader;
