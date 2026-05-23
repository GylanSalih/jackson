import React, { useEffect, useRef } from 'react';
import homeStyles from '../../../Pages/Home/Home.module.scss';
import { images } from '../assets';
import styles from './CtaSection.module.scss';

const CtaSection = (): React.ReactElement => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (!canvas || !context) {
      return undefined;
    }

    let time = 0;
    let frameId = 0;

    const render = () => {
      const width = Math.max(canvas.offsetWidth, 1);
      const height = Math.max(canvas.offsetHeight, 1);
      canvas.width = width;
      canvas.height = height;
      context.clearRect(0, 0, width, height);
      time += 0.005;

      for (let index = 0; index < 4; index += 1) {
        const x = width * 0.5 + Math.cos(time + index * 1.57) * width * 0.3;
        const y = height * 0.5 + Math.sin(time * 0.7 + index * 1.1) * height * 0.3;
        const gradient = context.createRadialGradient(x, y, 0, x, y, width * 0.18);
        gradient.addColorStop(0, 'rgba(255, 149, 84, 0.07)');
        gradient.addColorStop(1, 'transparent');
        context.fillStyle = gradient;
        context.fillRect(0, 0, width, height);
      }

      frameId = requestAnimationFrame(render);
    };

    frameId = requestAnimationFrame(render);

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section id="cta" className={styles.cta}>
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
      <div className={styles.inner}>
        <span className={styles.symbol} style={{ backgroundImage: `url(${images.markOrange})` }} />
        <div className={styles.heading}>
          Lass uns deine
          <br />
          <em>Marke aufbauen.</em>
        </div>
        <p>
          Kostenloses Strategiegespräch - wir schauen gemeinsam, wo du stehst und was der richtige Weg für dich ist.
        </p>
        <div className={styles.actions}>
          <a href="#" className={homeStyles.primaryButton}>
            Strategiegespräch buchen
          </a>
          <a href="#packages" className={homeStyles.ghostButton}>
            Leistungen ansehen
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
