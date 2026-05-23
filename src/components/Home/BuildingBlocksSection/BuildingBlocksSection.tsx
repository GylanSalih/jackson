import React, { useState } from "react";
import homeStyles from "../../../Pages/Home/Home.module.scss";
import styles from "./BuildingBlocksSection.module.scss";

const blocks = [
  {
    title: "Strategische Analyse",
    description:
      "Um Chancen, Risiken und klare Positionierungsmöglichkeiten zu identifizieren, analysieren wir deine vorhandene Marke, deine Reichweite, deine Zielgruppe und deinen Markt.",
    items: [
      "Marktanalyse & Branchentrends",
      "Wettbewerbsanalyse",
      "Zielgruppe & Community",
      "Markpositionierung",
      "Bestehende Marke & Inhalte",
      "Chancen im Markt",
    ],
  },
  {
    title: "Unternehmen",
    description:
      "Wir entwickeln die strategische Grundlage für dein Unternehmen und definieren, wie sich deine Reichweite langfristig monetarisieren lässt.",
    items: [
      "Zielgruppe & Kundenbedürfnisse",
      "Wettbewerber & Marktposition",
      "Wertversprechen",
      "Produkt & Angebotsstruktur",
      "Geschäftsmodell",
      "Rechtsform",
    ],
  },
  {
    title: "Marke",
    description:
      "Wir entwickeln einen starken Charakter für die Marke, der sich durch klares Verhalten, konsistente Kommunikation und eine visuelle Identität auszeichnet.",
    items: [
      "Markenstrategie",
      "Name & Markenstory",
      "Markenrecht & Patente",
      "Markenidentität",
      "Design System",
      "Brand Guidelines",
    ],
  },
  {
    title: "Markteinführung & Vermarktung",
    description:
      "Wir bringen deine Marke oder dein Produkt auf den Markt und schaffen erste Markenerlebnisse für deine Zielgruppe.",
    items: [
      "Launchstrategie",
      "Community Aktivierung",
      "Marketing & Kommunikation",
      "Erste Markenerlebnisse",
      "Kampagnen & Inhalte",
      "Markenaktivierung",
    ],
  },
];

const BuildingBlocksSection = (): React.ReactElement => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="bausteine" className={styles.blocks}>
      <div className={homeStyles.container}>
        <div className={homeStyles.sectionLabel} data-reveal>
          Tiefe<span>03</span>
        </div>
        <h2 className={homeStyles.sectionTitle} data-reveal>
          Die Bausteine einer starken <em>Creator Marke</em>
        </h2>
        <p className={homeStyles.sectionIntro} data-reveal>
          Aus Reichweite entsteht Schritt für Schritt eine Marke, ein Produkt
          und ein echtes Unternehmen.
        </p>

        <div className={styles.grid} data-reveal>
          {blocks.map((block, index) => {
            const isOpen = index === openIndex;

            return (
              <article
                className={`${styles.item} ${isOpen ? styles.open : ""}`}
                key={block.title}
              >
                <button
                  className={styles.trigger}
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span className={styles.title}>{block.title}</span>
                  <span className={styles.icon}>+</span>
                </button>

                <div className={styles.body}>
                  <div className={styles.inner}>
                    <p className={styles.description}>{block.description}</p>
                    <ul className={styles.list}>
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BuildingBlocksSection;
