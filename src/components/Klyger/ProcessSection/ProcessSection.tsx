import React, { useState } from 'react';
import homeStyles from '../../../Pages/Home/Home.module.scss';
import styles from './ProcessSection.module.scss';

const steps = [
  {
    number: 'Schritt 01',
    name: 'Analyse',
    text: 'Wir analysieren deine Reichweite, Zielgruppe, Inhalte und den Markt, damit du Chancen erkennst und eine klare Positionierung erhältst.',
  },
  {
    number: 'Schritt 02',
    name: 'Entwicklung',
    text: 'Wir entwickeln dein Geschäftsmodell und deine Marke, definieren Zielgruppe, Produkt, Positionierung und eine klare Markenidentität.',
  },
  {
    number: 'Schritt 03',
    name: 'Umsetzung',
    text: 'Wir bringen deine Marke und dein Produkt auf den Markt und sorgen dafür, dass deine Community echte Markenerlebnisse hat.',
  },
];

const phases = [
  {
    id: 'strategie',
    label: 'Strategie',
    badge: 'Phase 01',
    text: 'Das Fundament deiner Marke. Wir analysieren, positionieren und schaffen die strategische Grundlage für alles was folgt.',
    items: [
      ['Kickoff', 'Persönliches Kennenlernen, Teamvorstellung, Timing und Milestones werden festgelegt.'],
      ['Marktanalyse', 'Chancen, Risiken, Wettbewerb und Branchentrends werden identifiziert.'],
      ['Geschäftsmodell', 'Value Proposition, Zielgruppe, Angebotsstruktur und Unternehmensstrategie.'],
      ['Markenstrategie', 'Positionierung, Markenwerte, Markenpersönlichkeit und strategische Roadmap.'],
    ],
  },
  {
    id: 'entwicklung',
    label: 'Entwicklung',
    badge: 'Phase 02',
    text: 'Deine Marke nimmt Gestalt an. Von Naming und Design bis hin zu einer vollständigen Brand Identity.',
    items: [
      ['Naming & Brand Story', 'Entwicklung eines einzigartigen Markennamens und einer kraftvollen Markenstory.'],
      ['Markenrecht', 'Markenanmeldung, Patentprüfung und rechtliche Absicherung deiner Marke.'],
      ['Design Audit & Konzepte', '2 Brand Design-Konzepte, Feedback-Schleifen und Gestaltungselemente.'],
      ['Brand Guidelines', 'Vollständige Markenrichtlinien für konsistente Kommunikation und Auftreten.'],
    ],
  },
  {
    id: 'umsetzung',
    label: 'Umsetzung',
    badge: 'Phase 03',
    text: 'Deine Marke geht live. Wir begleiten Launch, Community-Aktivierung und die ersten echten Markenerlebnisse.',
    items: [
      ['Touchpoints', 'Ausarbeitung aller relevanten Berührungspunkte zwischen Marke und Zielgruppe.'],
      ['Kampagne', 'Launchkampagne, Community-Aktivierung und erste Markenerlebnisse schaffen.'],
      ['Marken Launch', 'Koordinierter Launch deiner Marke - sichtbar, konsistent und wirkungsvoll.'],
      ['Erste Kunden', 'Strategie zur Gewinnung der ersten echten Kunden für dein Produkt.'],
    ],
  },
];

const ProcessSection = (): React.ReactElement => {
  const defaultPhase = phases[0]!;
  const [activePhase, setActivePhase] = useState(defaultPhase.id);
  const phase = phases.find((item) => item.id === activePhase) ?? defaultPhase;

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
          Unser modularer Branding Prozess begleitet dich von der Strategie bis zum Launch.
        </p>

        <div className={styles.steps} data-reveal>
          {steps.map((step, index) => (
            <article className={styles.stepCard} key={step.number} data-cursor="interactive">
              <div className={styles.stepTop} />
              <div className={styles.stepNumber}>{step.number}</div>
              <h3 className={styles.stepName}>{step.name}</h3>
              <p className={styles.stepText}>{step.text}</p>
              <div className={styles.stepBackground}>{String(index + 1).padStart(2, '0')}</div>
            </article>
          ))}
        </div>

        <div className={`${homeStyles.sectionLabel} ${styles.moduleLabel}`} data-reveal>
          Unser modularer Branding Prozess
        </div>

        <div data-reveal>
          <div className={styles.tabs} role="tablist" aria-label="Prozessphasen">
            {phases.map((item) => (
              <button
                className={`${styles.tab} ${item.id === activePhase ? styles.activeTab : ''}`}
                key={item.id}
                type="button"
                role="tab"
                aria-selected={item.id === activePhase}
                onClick={() => setActivePhase(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className={styles.body}>
            <div className={styles.panel} role="tabpanel">
              <div className={styles.meta}>
                <h3>{phase.label}</h3>
                <p>{phase.text}</p>
                <div className={styles.badge}>{phase.badge}</div>
              </div>

              <div className={styles.items}>
                {phase.items.map(([title, text]) => (
                  <article className={styles.item} key={title}>
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
