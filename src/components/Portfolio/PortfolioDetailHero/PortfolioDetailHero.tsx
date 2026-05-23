import React from "react";
import { PortfolioProject } from "../../../data/portfolioProjects";
import styles from "./PortfolioDetailHero.module.scss";

type PortfolioDetailHeroProps = {
  project: PortfolioProject;
};

const PortfolioDetailHero = ({
  project,
}: PortfolioDetailHeroProps): React.ReactElement => {
  return (
    <section className={styles.hero}>
      <div className={styles.copy}>
        <span data-reveal>{project.category}</span>
        <h1 data-reveal>{project.title}</h1>
        <p data-reveal>{project.summary}</p>
      </div>
      <img src={project.image} alt="" data-reveal />
    </section>
  );
};

export default PortfolioDetailHero;
