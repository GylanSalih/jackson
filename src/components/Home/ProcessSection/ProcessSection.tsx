import React from "react";
import homeStyles from "../../../Pages/Home/Home.module.scss";
import BrandingProcess from "../BrandingProcess/BrandingProcess";
import styles from "./ProcessSection.module.scss";

const steps = [
  {
    number: "Schritt 01",
    name: "Analyse",
    text: "Wir analysieren deine Reichweite, Zielgruppe, Inhalte und den Markt, damit du Chancen erkennst und eine klare Positionierung erhältst.",
  },
  {
    number: "Schritt 02",
    name: "Entwicklung",
    text: "Wir entwickeln dein Geschäftsmodell und deine Marke, definieren Zielgruppe, Produkt, Positionierung und eine klare Markenidentität.",
  },
  {
    number: "Schritt 03",
    name: "Umsetzung",
    text: "Wir bringen deine Marke und dein Produkt auf den Markt und sorgen dafür, dass deine Community echte Markenerlebnisse hat.",
  },
];

const ProcessSection = (): React.ReactElement => {
  return (
    <section id="process" className={styles.process}>
      <div className={homeStyles.container}>
        <div className={homeStyles.sectionLabel} data-reveal>
          Der Weg<span>02</span>
        </div>
        <h2 className={homeStyles.sectionTitle} data-reveal>
          Von Creator zur <em>eigenen Marke</em>
        </h2>
        <p className={homeStyles.sectionIntro} data-reveal>
          Unser modularer Branding Prozess begleitet dich von der Strategie bis
          zum Launch.
        </p>

        <div className={styles.steps} data-reveal>
          {steps.map((step, index) => (
            <article
              className={styles.stepCard}
              key={step.number}
              data-cursor="interactive"
            >
              <div className={styles.stepTop} />
              <div className={styles.stepNumber}>{step.number}</div>
              <h3 className={styles.stepName}>{step.name}</h3>
              <p className={styles.stepText}>{step.text}</p>
              <div className={styles.stepBackground}>
                {String(index + 1).padStart(2, "0")}
              </div>
            </article>
          ))}
        </div>

        <BrandingProcess />
      </div>
    </section>
  );
};

export default ProcessSection;
