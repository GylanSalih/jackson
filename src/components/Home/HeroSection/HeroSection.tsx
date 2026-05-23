import React from "react";
import homeStyles from "../../../Pages/Home/Home.module.scss";
import { images } from "../../shared/brandAssets";
import styles from "./HeroSection.module.scss";

const HeroSection = (): React.ReactElement => {
  return (
    <section id="hero" className={styles.hero}>
      <div
        className={styles.heroPhoto}
        style={{ backgroundImage: `url(${images.heroMoodboard})` }}
      />
      <div className={styles.overlay} />

      <div className={styles.inner}>
        <div>
          <div className={styles.tag}>
            <span className={styles.dot} />
            Creator Brand Building - 2025
          </div>

          <h1 className={styles.title}>
            <span>
              <b>Von Creator</b>
            </span>
            <span>
              <b>zur eigenen</b>
            </span>
            <span>
              <b>Marke.</b>
            </span>
          </h1>
        </div>

        <div className={styles.right}>
          <p className={styles.subtitle}>
            Verwandle deine Reichweite in ein skalierbares Unternehmen mit
            eigener Marke und eigenen Produkten.
          </p>
          <div className={styles.buttons}>
            <a href="#cta" className={homeStyles.primaryButton}>
              Done with You
            </a>
            <a href="#packages" className={homeStyles.ghostButton}>
              Do it Yourself
            </a>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span>Scroll</span>
        <div />
      </div>
    </section>
  );
};

export default HeroSection;
