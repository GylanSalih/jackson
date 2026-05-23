import React from "react";
import { PortfolioProject } from "../../../data/portfolioProjects";
import styles from "./PortfolioDetailContent.module.scss";

type PortfolioDetailContentProps = {
  project: PortfolioProject;
};

const PortfolioDetailContent = ({
  project,
}: PortfolioDetailContentProps): React.ReactElement => {
  return (
    <section className={styles.content}>
      <div className={styles.meta} data-reveal>
        <div>
          <span>Jahr</span>
          <strong>{project.year}</strong>
        </div>
        <div>
          <span>Leistungen</span>
          <strong>{project.services.join(" · ")}</strong>
        </div>
      </div>

      <div className={styles.metrics} data-reveal>
        {project.metrics.map((metric) => (
          <article key={metric.label}>
            <strong>{metric.value}</strong>
            <span>{metric.label}</span>
          </article>
        ))}
      </div>

      <div className={styles.sections} data-reveal>
        {project.sections.map((section) => (
          <article key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </article>
        ))}
      </div>

      <div className={styles.gallery} data-reveal>
        {project.gallery.map((image) => (
          <img src={image} alt="" key={image} />
        ))}
      </div>
    </section>
  );
};

export default PortfolioDetailContent;
