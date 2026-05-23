import React, { useRef } from "react";
import AboutHero from "../../components/About/AboutHero/AboutHero";
import PrinciplesSection from "../../components/About/PrinciplesSection/PrinciplesSection";
import StudioSection from "../../components/About/StudioSection/StudioSection";
import useReveal from "../../hooks/useReveal";
import styles from "./About.module.scss";

const About = (): React.ReactElement => {
  const pageRef = useRef<HTMLDivElement>(null);
  useReveal(pageRef);

  return (
    <div ref={pageRef} className={styles.page}>
      <AboutHero />
      <PrinciplesSection />
      <StudioSection />
    </div>
  );
};

export default About;
