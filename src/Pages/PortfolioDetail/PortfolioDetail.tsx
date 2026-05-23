import React, { useRef } from "react";
import { Navigate, useParams } from "react-router-dom";
import PortfolioDetailContent from "../../components/Portfolio/PortfolioDetailContent/PortfolioDetailContent";
import PortfolioDetailHero from "../../components/Portfolio/PortfolioDetailHero/PortfolioDetailHero";
import { getPortfolioProject } from "../../data/portfolioProjects";
import useReveal from "../../hooks/useReveal";
import styles from "./PortfolioDetail.module.scss";

const PortfolioDetail = (): React.ReactElement => {
  const pageRef = useRef<HTMLDivElement>(null);
  const { slug } = useParams();
  const project = getPortfolioProject(slug);

  useReveal(pageRef);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <div ref={pageRef} className={styles.page}>
      <PortfolioDetailHero project={project} />
      <PortfolioDetailContent project={project} />
    </div>
  );
};

export default PortfolioDetail;
