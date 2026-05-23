import React from 'react';
import styles from './WorkGrid.module.scss';

const works = [
  {
    title: 'Fitness Creator Brand',
    category: 'Positionierung · Product Offer',
    text: 'Von Trainingscontent zu einem klaren digitalen Produkt mit Angebotsstruktur, Zielgruppe und Launch-Roadmap.',
    image: '/assets/img/sortieren/moodboard-golden.png',
  },
  {
    title: 'Beauty Community Label',
    category: 'Brand Identity · Story',
    text: 'Naming, Markenstory und visuelle Richtung für eine Community, die Vertrauen bereits aufgebaut hatte.',
    image: '/assets/img/sortieren/brand-gradient-bottom.png',
  },
  {
    title: 'Education Framework',
    category: 'System · Funnel',
    text: 'Ein Framework für Wissen, Produktlogik und erste Kundenreise aus bestehender Reichweite.',
    image: '/assets/img/sortieren/moodboard-cinematic.png',
  },
];

const WorkGrid = (): React.ReactElement => {
  return (
    <section className={styles.work}>
      <div className={styles.inner}>
        <div className={styles.header} data-reveal>
          <span>Auswahl</span>
          <h2>Projektarten</h2>
        </div>

        <div className={styles.grid} data-reveal>
          {works.map((work) => (
            <article className={styles.card} key={work.title} data-cursor="interactive">
              <img src={work.image} alt="" />
              <div className={styles.content}>
                <span>{work.category}</span>
                <h3>{work.title}</h3>
                <p>{work.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkGrid;
