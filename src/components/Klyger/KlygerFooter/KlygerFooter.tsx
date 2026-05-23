import React from 'react';
import { images } from '../assets';
import styles from './KlygerFooter.module.scss';

const KlygerFooter = (): React.ReactElement => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src={images.logoWhite} alt="Klyger" />
      </div>
      <ul className={styles.links}>
        <li>
          <a href="#">Impressum</a>
        </li>
        <li>
          <a href="#">Datenschutz</a>
        </li>
        <li>
          <a href="#cta">Kontakt</a>
        </li>
      </ul>
      <div className={styles.copy}>© 2025 Klyger · Built for Creators</div>
    </footer>
  );
};

export default KlygerFooter;
