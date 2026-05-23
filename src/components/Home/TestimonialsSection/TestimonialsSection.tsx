import React from 'react';
import homeStyles from '../../../Pages/Home/Home.module.scss';
import styles from './TestimonialsSection.module.scss';

const testimonials = [
  {
    quote:
      'Ich hatte Reichweite, aber kein echtes Unternehmen dahinter. Home hat mir geholfen - mit einer klaren Marke, einem eigenen Produkt und echten Kunden.',
    name: 'MH',
    role: 'Creator & Gründer',
  },
  {
    quote:
      'Strukturiert, aber nie starr. Wir haben meine Marke von Grund auf entwickelt - Strategie, Name, Identität, Launch. Endlich fühlt sich alles stimmig an.',
    name: 'Eti',
    role: 'Content Creator',
  },
];

const TestimonialsSection = (): React.ReactElement => {
  return (
    <section id="testi" className={styles.testimonials}>
      <div className={homeStyles.container}>
        <div className={homeStyles.sectionLabel} data-reveal>
          Kundenstimmen<span>06</span>
        </div>
        <h2 className={homeStyles.sectionTitle} data-reveal>
          Was Creator <em>über uns sagen</em>
        </h2>

        <div className={styles.grid} data-reveal>
          {testimonials.map((testimonial) => (
            <article className={styles.item} key={testimonial.name} data-cursor="interactive">
              <div className={styles.quoteBackground}>"</div>
              <blockquote>{testimonial.quote}</blockquote>
              <div className={styles.author}>
                <strong>{testimonial.name}</strong>
                {testimonial.role}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
