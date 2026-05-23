import React, { useRef } from 'react';
import BuildingBlocksSection from '../../components/Home/BuildingBlocksSection/BuildingBlocksSection';
import CtaSection from '../../components/Home/CtaSection/CtaSection';
import FaqSection from '../../components/Home/FaqSection/FaqSection';
import ForWhoSection from '../../components/Home/ForWhoSection/ForWhoSection';
import HeroSection from '../../components/Home/HeroSection/HeroSection';
import MarqueeStrip from '../../components/Home/MarqueeStrip/MarqueeStrip';
import PackagesSection from '../../components/Home/PackagesSection/PackagesSection';
import ProblemSection from '../../components/Home/ProblemSection/ProblemSection';
import ProcessSection from '../../components/Home/ProcessSection/ProcessSection';
import TestimonialsSection from '../../components/Home/TestimonialsSection/TestimonialsSection';
import useReveal from '../../hooks/useReveal';
import styles from './Home.module.scss';

const Home = (): React.ReactElement => {
  const homeRef = useRef<HTMLDivElement>(null);
  useReveal(homeRef);

  return (
    <div ref={homeRef} className={styles.home}>
      <HeroSection />
      <MarqueeStrip />
      <ProblemSection />
      <ProcessSection />
      <BuildingBlocksSection />
      <ForWhoSection />
      <PackagesSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
};

export default Home;
