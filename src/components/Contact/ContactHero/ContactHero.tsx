import React from "react";
import styles from "./ContactHero.module.scss";

const ContactHero = (): React.ReactElement => {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <span data-reveal>Kontakt</span>
        <h1 data-reveal>
          Lass uns klären, was aus deiner Reichweite <em>werden kann.</em>
        </h1>
        <p data-reveal>
          Schreib uns mit Ziel, aktueller Situation und grober Timeline. Danach
          entscheiden wir, ob Strategiegespräch, Einzelleistung oder
          Komplettpaket Sinn ergibt.
        </p>
      </div>
    </section>
  );
};

export default ContactHero;
