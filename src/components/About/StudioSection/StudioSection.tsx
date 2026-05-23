import React from "react";
import styles from "./StudioSection.module.scss";

const stats = [
  ["3", "Kernphasen"],
  ["12+", "Brand Module"],
  ["1", "klarer Launchplan"],
];

const StudioSection = (): React.ReactElement => {
  return (
    <section className={styles.studio}>
      <div className={styles.inner}>
        <div className={styles.copy} data-reveal>
          <span>Studio</span>
          <h2>Ein kompaktes Team für Strategie, Marke und Umsetzung.</h2>
          <p>
            Wir arbeiten eng mit Creatorn, Gründern und Spezialisten zusammen.
            So bleiben Entscheidungen schnell, die Richtung klar und jedes
            Ergebnis direkt nutzbar.
          </p>
        </div>

        <div className={styles.stats} data-reveal>
          {stats.map(([value, label]) => (
            <div className={styles.stat} key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudioSection;
