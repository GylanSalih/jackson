import React from "react";
import styles from "./PrinciplesSection.module.scss";

const principles = [
  [
    "01",
    "Strategie vor Optik",
    "Design wirkt erst, wenn Positionierung, Zielgruppe und Angebot klar sind.",
  ],
  [
    "02",
    "Community wird Kunde",
    "Wir denken nicht in Followern, sondern in Vertrauen, Produktfit und Kaufmomenten.",
  ],
  [
    "03",
    "Launch statt Theorie",
    "Jede Marke braucht einen Weg in den Markt, messbare Touchpoints und echte Nachfrage.",
  ],
];

const PrinciplesSection = (): React.ReactElement => {
  return (
    <section className={styles.principles}>
      <div className={styles.inner}>
        <div className={styles.header} data-reveal>
          <span>Arbeitsweise</span>
          <h2>Woran wir Entscheidungen messen</h2>
        </div>

        <div className={styles.grid} data-reveal>
          {principles.map(([number, title, text]) => (
            <article
              className={styles.item}
              key={number}
              data-cursor="interactive"
            >
              <div>{number}</div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
