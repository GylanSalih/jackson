import React, { useEffect, useRef } from 'react';
import styles from './CustomCursor.module.scss';

const CustomCursor = (): React.ReactElement => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;

    if (!dot || !ring) {
      return undefined;
    }

    const activeClass = styles.active as string;
    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let frameId = 0;

    const setInteractive = (active: boolean) => {
      dot.classList.toggle(activeClass, active);
      ring.classList.toggle(activeClass, active);
    };

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    };

    const handleMouseOver = (event: MouseEvent) => {
      if ((event.target as Element).closest('a, button, [data-cursor="interactive"]')) {
        setInteractive(true);
      }
    };

    const handleMouseOut = (event: MouseEvent) => {
      if ((event.target as Element).closest('a, button, [data-cursor="interactive"]')) {
        setInteractive(false);
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.1;
      ringY += (mouseY - ringY) * 0.1;
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
      frameId = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);
    frameId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className={styles.dot} />
      <div ref={ringRef} className={styles.ring} />
    </>
  );
};

export default CustomCursor;
