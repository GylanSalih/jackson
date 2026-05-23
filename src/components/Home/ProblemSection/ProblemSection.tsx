import React from "react";
import homeStyles from "../../../Pages/Home/Home.module.scss";
import styles from "./ProblemSection.module.scss";

const cards = [
  {
    tone: "left",
    word: "ABHÄNGIG",
    tag: "Status Quo - Creator Einkommen",
    title: "Abhängig von Kooperationen",
    points: [
      "Brand Deals & Kooperationen",
      "Affiliate Einnahmen",
      "Plattformabhängig - kein eigener Kanal",
      "Schwankendes, unsicheres Einkommen",
      "Kein aufbaubarer Unternehmenswert",
    ],
  },
  {
    tone: "right",
    word: "UNLEASHED",
    tag: "Das Ziel - Creator Unternehmer:in",
    title: "Eigene Marke, eigene Kontrolle",
    points: [
      "Eigene Marke & eigene Produkte",
      "Eigene Kunden - unabhängig von Plattformen",
      "Skalierbares Geschäftsmodell",
      "Stabiles, plattformunabhängiges Einkommen",
      "Langfristiger Unternehmenswert",
    ],
  },
];

const ProblemSection = (): React.ReactElement => {
  return (
    <section id="problem" className={styles.problem}>
      <div className={homeStyles.container}>
        <div className={homeStyles.sectionLabel} data-reveal>
          Das Problem<span>01</span>
        </div>
        <h2 className={homeStyles.sectionTitle} data-reveal>
          Follower oder <em>Kunden?</em>
        </h2>
        <p className={homeStyles.sectionIntro} data-reveal>
          Viele Creator verdienen ihr Geld mit Kooperationen. Ambitionierte
          Creator entwickeln daraus eine eigene Marke und ein echtes
          Unternehmen.
        </p>

        <div className={styles.grid} data-reveal>
          {cards.map((card) => (
            <article
              className={`${styles.card} ${styles[card.tone]}`}
              key={card.title}
              data-cursor="interactive"
            >
              <span className={styles.backgroundWord}>{card.word}</span>
              <div className={styles.tag}>{card.tag}</div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <ul className={styles.list}>
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
