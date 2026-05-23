import React, { useState } from "react";
import homeStyles from "../../../Pages/Home/Home.module.scss";
import styles from "./FaqSection.module.scss";

const faqs = [
  [
    "Für welche Creator ist Home geeignet?",
    "Home arbeitet mit Creatorn, die eine aktive Community haben und daraus eine eigene Marke aufbauen möchten. Keine Mindest-Followerzahl - wichtig sind Expertise und Ambition.",
  ],
  [
    "Unterschied Done with You vs. Einzelleistungen?",
    "Done with You ist unser Vollprogramm von Strategie bis Launch. Einzelleistungen sind für Creator, die gezielt nur bestimmte Module buchen möchten.",
  ],
  [
    "Wie lange dauert ein Projekt?",
    "Ein vollständiger Creator Markenaufbau dauert mehrere Monate. Im Strategiegespräch klären wir gemeinsam, was für dich realistisch und sinnvoll ist.",
  ],
  [
    "Was kostet das Strategiegespräch?",
    "Kostenlos und unverbindlich. Wir schauen gemeinsam, ob und wie wir dir helfen können - kein Druck, kein Sales-Pitch.",
  ],
];

const FaqSection = (): React.ReactElement => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className={styles.faq}>
      <div className={homeStyles.container}>
        <div className={homeStyles.sectionLabel} data-reveal>
          FAQ<span>07</span>
        </div>
        <h2 className={homeStyles.sectionTitle} data-reveal>
          Häufige <em>Fragen</em>
        </h2>

        <div className={styles.list} data-reveal>
          {faqs.map(([question, answer], index) => {
            const isOpen = openIndex === index;

            return (
              <article
                className={`${styles.item} ${isOpen ? styles.open : ""}`}
                key={question}
              >
                <button
                  className={styles.button}
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{question}</span>
                  <span className={styles.icon}>+</span>
                </button>
                <div className={styles.answer}>{answer}</div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
