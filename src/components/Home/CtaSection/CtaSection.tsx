import React from "react";
import homeStyles from "../../../Pages/Home/Home.module.scss";
import { images } from "../../shared/brandAssets";
import styles from "./CtaSection.module.scss";

const CtaSection = (): React.ReactElement => {
  return (
    <section id="cta" className={styles.cta}>
      <div className={styles.inner}>
        <span
          className={styles.symbol}
          style={{ backgroundImage: `url(${images.markOrange})` }}
        />
        <div className={styles.heading}>
          Lass uns deine
          <br />
          <em>Marke aufbauen.</em>
        </div>
        <p>
          Kostenloses Strategiegespräch - wir schauen gemeinsam, wo du stehst
          und was der richtige Weg für dich ist.
        </p>
        <div className={styles.actions}>
          <a href="#" className={homeStyles.primaryButton}>
            Strategiegespräch buchen
          </a>
          <a href="#packages" className={homeStyles.ghostButton}>
            Leistungen ansehen
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
