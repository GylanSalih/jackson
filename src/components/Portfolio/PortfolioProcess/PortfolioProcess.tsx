import React from 'react';
import styles from './PortfolioProcess.module.scss';

const stages = ['Analyse', 'Konzept', 'Identity', 'Launch'];

const PortfolioProcess = (): React.ReactElement => {
  return (
    <section className={styles.process}>
      <div className={styles.inner} data-reveal>
        <h2>Von Projektidee zu Markenerlebnis</h2>
        <div className={styles.line}>
          {stages.map((stage, index) => (
            <div className={styles.stage} key={stage}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <strong>{stage}</strong>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioProcess;
