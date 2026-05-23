import React from 'react';
import homeStyles from '../../../Pages/Home/Home.module.scss';
import styles from './ForWhoSection.module.scss';

const cards = [
  ['01', 'Du hast eine aktive Community', 'Menschen folgen dir, weil sie dir vertrauen. Deine Inhalte bewegen etwas. Das ist die Grundlage für alles, was folgt.'],
  ['02', 'Du hast eine klare Nische', 'Du stehst für ein Thema. Menschen kennen dich dafür. Jetzt wird daraus eine Marke, die mehr ist als Content.'],
  ['03', 'Du hast Expertise & Wissen', 'Was du weißt und kannst, ist mehr wert als ein Sponsoring. Lass uns daraus ein Produkt bauen, das wirklich dir gehört.'],
  ['04', 'Du hast Ambition', 'Du willst kein weiteres Jahr von Brand Deals abhängig sein. Du willst etwas aufbauen, das bleibt. Wir treten dir in den Arsch, damit es passiert.'],
];

const ForWhoSection = (): React.ReactElement => {
  return (
    <section id="forwho" className={styles.forWho}>
      <div className={homeStyles.container}>
        <div className={styles.intro} data-reveal>
          <div className={homeStyles.sectionLabel}>
            Für wen<span>04</span>
          </div>
          <h2 className={homeStyles.sectionTitle}>
            Du bist bereit.
            <br />
            <em>Wir auch.</em>
          </h2>
          <p>
            Klyger arbeitet mit Creator zusammen, die mehr wollen als Follower. Die aus ihrer Reichweite etwas Echtes aufbauen. Erkennst du dich?
          </p>
        </div>

        <div className={styles.grid} data-reveal>
          {cards.map(([number, title, text]) => (
            <article className={styles.card} key={number} data-cursor="interactive">
              <div className={styles.number}>{number}</div>
              <h3>{title}</h3>
              <p>{text}</p>
              <div className={styles.check}>Das bin ich.</div>
            </article>
          ))}
        </div>

        <div className={styles.cta} data-reveal>
          <div>
            Wenn du das bist - <em>dann bist du bei uns richtig.</em>
          </div>
          <a href="#cta" className={homeStyles.primaryButton}>
            Gespräch buchen
          </a>
        </div>
      </div>
    </section>
  );
};

export default ForWhoSection;
