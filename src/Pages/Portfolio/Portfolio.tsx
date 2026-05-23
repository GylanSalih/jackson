import React, { useRef } from "react";
import PortfolioHero from "../../components/Portfolio/PortfolioHero/PortfolioHero";
import PortfolioProcess from "../../components/Portfolio/PortfolioProcess/PortfolioProcess";
import WorkGrid from "../../components/Portfolio/WorkGrid/WorkGrid";
import useReveal from "../../hooks/useReveal";
import styles from "./Portfolio.module.scss";

const Portfolio = (): React.ReactElement => {
  const pageRef = useRef<HTMLDivElement>(null);
  useReveal(pageRef);

  return (
    <div ref={pageRef} className={styles.page}>
      <PortfolioHero />
      <WorkGrid />
      <PortfolioProcess />
    </div>
  );
};

export default Portfolio;
