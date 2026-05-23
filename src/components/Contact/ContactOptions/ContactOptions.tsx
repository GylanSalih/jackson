import React from 'react';
import styles from './ContactOptions.module.scss';

const options = [
  ['Mail', 'hello@home-brand.de', 'Für kurze Anfragen, Projektstarts und Kooperationen.'],
  ['Strategiegespräch', 'Kostenloser Erstcheck', 'Für Creator, die konkret wissen wollen, welcher Weg passt.'],
  ['Projektbriefing', 'Antwort in 48h', 'Für Markenaufbau, Launch oder einzelne Strategie-Module.'],
];

const ContactOptions = (): React.ReactElement => {
  return (
    <section className={styles.options}>
      <div className={styles.grid} data-reveal>
        {options.map(([label, title, text]) => (
          <article className={styles.option} key={label} data-cursor="interactive">
            <span>{label}</span>
            <h2>{title}</h2>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ContactOptions;
