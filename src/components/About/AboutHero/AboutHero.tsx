import React from "react";
import styles from "./AboutHero.module.scss";

const AboutHero = (): React.ReactElement => {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.label} data-reveal>
          Über Uns
        </div>
        <h1 data-reveal>
          Wir bauen aus Reichweite <em>echte Marken.</em>
        </h1>
        <p data-reveal>
          Home verbindet Strategie, Markenentwicklung und Launch-Umsetzung für
          Creator, die nicht nur Content veröffentlichen, sondern ein
          Unternehmen aufbauen wollen.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
