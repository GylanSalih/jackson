import React from "react";
import styles from "./PortfolioHero.module.scss";

const PortfolioHero = (): React.ReactElement => {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <span data-reveal>Portfolio</span>
        <h1 data-reveal>
          Arbeiten, die aus Creator Brands <em>echte Systeme</em> machen.
        </h1>
        <p data-reveal>
          Eine kuratierte Übersicht typischer Projekte: Positionierung,
          Produktkonzept, Identity, Launch und Aktivierung.
        </p>
      </div>
    </section>
  );
};

export default PortfolioHero;
