import React from "react";
import { Link } from "react-router-dom";
import { images } from "../shared/brandAssets";
import styles from "./SiteFooter.module.scss";

const SiteFooter = (): React.ReactElement => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <img src={images.logoOrange} alt="Home" />
      </div>
      <ul className={styles.links}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/ueber-uns">Über Uns</Link>
        </li>
        <li>
          <Link to="/kontakt">Kontakt</Link>
        </li>
      </ul>
      <div className={styles.copy}>© 2025 Home · Built for Creators</div>
    </footer>
  );
};

export default SiteFooter;
