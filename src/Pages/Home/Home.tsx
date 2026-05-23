import React, { useEffect, useRef } from 'react';
import BuildingBlocksSection from '../../components/Klyger/BuildingBlocksSection/BuildingBlocksSection';
import CtaSection from '../../components/Klyger/CtaSection/CtaSection';
import CustomCursor from '../../components/Klyger/CustomCursor/CustomCursor';
import FaqSection from '../../components/Klyger/FaqSection/FaqSection';
import ForWhoSection from '../../components/Klyger/ForWhoSection/ForWhoSection';
import HeroSection from '../../components/Klyger/HeroSection/HeroSection';
import KlygerFooter from '../../components/Klyger/KlygerFooter/KlygerFooter';
import KlygerHeader from '../../components/Klyger/KlygerHeader/KlygerHeader';
import MarqueeStrip from '../../components/Klyger/MarqueeStrip/MarqueeStrip';
import PackagesSection from '../../components/Klyger/PackagesSection/PackagesSection';
import ProblemSection from '../../components/Klyger/ProblemSection/ProblemSection';
import ProcessSection from '../../components/Klyger/ProcessSection/ProcessSection';
import TestimonialsSection from '../../components/Klyger/TestimonialsSection/TestimonialsSection';
import styles from './Home.module.scss';

const Home = (): React.ReactElement => {
  const homeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = homeRef.current;

    if (!root) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    root.querySelectorAll('[data-reveal]').forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={homeRef} className={styles.home}>
      <CustomCursor />
      <KlygerHeader />
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
      <KlygerFooter />
    </div>
  );
};

export default Home;
