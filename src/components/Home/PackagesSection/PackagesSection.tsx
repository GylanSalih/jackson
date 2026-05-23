import React, { useState } from 'react';
import homeStyles from '../../../Pages/Home/Home.module.scss';
import styles from './PackagesSection.module.scss';

const packages = [
  {
    label: 'Do it Yourself',
    name: 'Framework',
    price: '75 EUR / Monat - 899 EUR / Jahr',
    description: 'Nutze das Framework, um sofort mit dem Aufbau deiner Marke zu beginnen. KI-gestützt, strukturiert, in deinem Tempo.',
    detailsLabel: 'Framework Inhalte',
    items: [
      'Value Proposition',
      'Zielgruppen Persona',
      'Geschäftsmodell',
      'Markenpositionierung',
      'Marken Vision & Mission',
      'Markenzweck & -werte',
      'Markenkern & -persönlichkeit',
      'Markenversprechen',
      'Markenarchitektur',
      'Markenziele & Roadmap',
      'KI Begleitung',
      'Optionaler Experten Check',
    ],
    action: 'Framework nutzen',
  },
  {
    label: 'Einzeln buchen',
    name: 'Strategie & Branding',
    price: 'ab 2.000 EUR zzgl. MwSt.',
    description: 'Buche genau die Leistung, die du aktuell brauchst - modular aus unserem Markenprozess.',
    detailsLabel: 'Leistungsbereiche',
    items: [
      'Markt & Wettbewerbsanalyse',
      'Produktentwicklung',
      'Markenstrategie',
      'Naming & Brand Story',
      'Markenrecht & -anmeldung',
      'Customer Journey',
      'Corporate Identity',
      'Markenaktivierung & Launch',
    ],
    action: 'Leistungen buchen',
    redirect: 'Alle Leistungen ansehen',
  },
  {
    featured: true,
    label: 'Done with You',
    name: 'Creator Markenaufbau',
    price: 'Projekte ab 25.000 EUR zzgl. MwSt.',
    description: 'Wir bauen gemeinsam deine Marke, dein Unternehmen und die Vermarktung deiner Produkte.',
    detailsLabel: 'Im Komplettpaket enthalten',
    items: ['Analyse & Strategie', 'Geschäftsmodell & Angebot', 'Marke & Identität', 'Produktentwicklung', 'Rechtliche Grundlagen', 'Launch & erste Kunden'],
    action: 'Projekt starten',
  },
];

const PackagesSection = (): React.ReactElement => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="packages" className={styles.packages}>
      <div className={homeStyles.container}>
        <div className={homeStyles.sectionLabel} data-reveal>
          Leistungen<span>05</span>
        </div>
        <h2 className={homeStyles.sectionTitle} data-reveal>
          Wege zur eigenen <em>Creator Marke</em>
        </h2>
        <p className={homeStyles.sectionIntro} data-reveal>
          Selbst entwickeln, einzeln buchen oder gemeinsam aufbauen.
        </p>

        <div className={styles.grid} data-reveal>
          {packages.map((pkg, index) => {
            const isOpen = openIndex === index;

            return (
              <article className={`${styles.packageCard} ${pkg.featured ? styles.featured : ''}`} key={pkg.name} data-cursor="interactive">
                {pkg.featured ? <div className={styles.badge}>Empfohlen</div> : null}
                <div className={styles.label}>{pkg.label}</div>
                <h3>{pkg.name}</h3>
                <div className={styles.price}>{pkg.price}</div>
                <p>{pkg.description}</p>

                <div className={styles.details}>
                  <div className={`${styles.accordion} ${isOpen ? styles.open : ''}`}>
                    <button className={styles.accordionButton} type="button" onClick={() => setOpenIndex(isOpen ? null : index)}>
                      <span>{pkg.detailsLabel}</span>
                      <span className={styles.accordionIcon}>+</span>
                    </button>
                    <div className={styles.accordionBody}>
                      <ul>
                        {pkg.items.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {pkg.redirect ? (
                  <a href="#process" className={styles.redirect}>
                    {pkg.redirect}
                  </a>
                ) : null}

                <a href="#cta" className={styles.packageButton}>
                  {pkg.action}
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PackagesSection;
