import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { portfolioProjects } from "../../../data/portfolioProjects";
import styles from "./WorkGrid.module.scss";

const filters = [
  "Alle",
  "Marketing",
  "Account",
  "Auftritt",
  "Brand Identity",
  "Launch",
];

const WorkGrid = (): React.ReactElement => {
  const [activeFilter, setActiveFilter] = useState("Alle");
  const [sortMode, setSortMode] = useState<"relevance" | "az">("relevance");

  const visibleProjects = useMemo(() => {
    const projects = portfolioProjects.filter((project) => {
      if (activeFilter === "Alle") {
        return true;
      }

      return (
        project.rubric === activeFilter || project.tags.includes(activeFilter)
      );
    });

    return [...projects].sort((first, second) => {
      if (sortMode === "az") {
        return first.title.localeCompare(second.title, "de");
      }

      return second.relevance - first.relevance;
    });
  }, [activeFilter, sortMode]);

  return (
    <section className={styles.work}>
      <div className={styles.inner}>
        <div className={styles.header} data-reveal>
          <span>Auswahl</span>
          <h2>Projektarten</h2>
        </div>

        <div className={styles.toolbar} data-reveal>
          <div className={styles.filterRail} aria-label="Projektarten filtern">
            {filters.map((filter) => (
              <button
                className={`${styles.filterButton} ${
                  activeFilter === filter ? styles.activeFilter : ""
                }`}
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className={styles.sortGroup} aria-label="Projekte sortieren">
            <button
              className={`${styles.sortButton} ${
                sortMode === "relevance" ? styles.activeSort : ""
              }`}
              type="button"
              onClick={() => setSortMode("relevance")}
            >
              Relevanz
            </button>
            <button
              className={`${styles.sortButton} ${
                sortMode === "az" ? styles.activeSort : ""
              }`}
              type="button"
              onClick={() => setSortMode("az")}
            >
              A-Z
            </button>
          </div>
        </div>

        <div className={styles.grid} data-reveal>
          {visibleProjects.map((project) => (
            <Link
              className={styles.card}
              to={`/portfolio/${project.slug}`}
              key={project.slug}
              data-cursor="interactive"
            >
              <img src={project.image} alt="" />
              <div className={styles.content}>
                <span>{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <div className={styles.tags}>
                  {[project.rubric, ...project.tags.slice(0, 2)].map((tag) => (
                    <small key={tag}>{tag}</small>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkGrid;
