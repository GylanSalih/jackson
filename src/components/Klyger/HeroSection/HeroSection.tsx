import React, { useEffect, useRef } from 'react';
import homeStyles from '../../../Pages/Home/Home.module.scss';
import { images } from '../assets';
import styles from './HeroSection.module.scss';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  alpha: number;
};

const createParticles = (): Particle[] =>
  Array.from({ length: 65 }, () => ({
    x: Math.random() * 2000,
    y: Math.random() * 1000,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    radius: Math.random() * 1.1 + 0.3,
    alpha: Math.random() * 0.55 + 0.1,
  }));

const HeroSection = (): React.ReactElement => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');

    if (!canvas || !context) {
      return undefined;
    }

    const particles = createParticles();
    let frameId = 0;

    const render = () => {
      const width = Math.max(canvas.offsetWidth, 1);
      const height = Math.max(canvas.offsetHeight, 1);
      canvas.width = width;
      canvas.height = height;

      context.clearRect(0, 0, width, height);
      const gradient = context.createRadialGradient(width * 0.72, height * 0.4, 0, width * 0.72, height * 0.4, width * 0.55);
      gradient.addColorStop(0, 'rgba(228, 103, 76, 0.05)');
      gradient.addColorStop(1, 'transparent');
      context.fillStyle = gradient;
      context.fillRect(0, 0, width, height);

      particles.forEach((particle) => {
        particle.x = (particle.x + particle.vx + width) % width;
        particle.y = (particle.y + particle.vy + height) % height;
        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(255, 149, 84, ${particle.alpha * 0.45})`;
        context.fill();
      });

      particles.forEach((particle, index) => {
        particles.slice(index + 1).forEach((nextParticle) => {
          const distance = Math.hypot(particle.x - nextParticle.x, particle.y - nextParticle.y);

          if (distance < 90) {
            context.beginPath();
            context.moveTo(particle.x, particle.y);
            context.lineTo(nextParticle.x, nextParticle.y);
            context.strokeStyle = `rgba(255, 149, 84, ${0.05 * (1 - distance / 90)})`;
            context.lineWidth = 0.5;
            context.stroke();
          }
        });
      });

      frameId = requestAnimationFrame(render);
    };

    frameId = requestAnimationFrame(render);

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroPhoto} style={{ backgroundImage: `url(${images.heroMoodboard})` }} />
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
      <div className={styles.overlay} />
      <div className={styles.grain} />

      <div className={styles.inner}>
        <div>
          <div className={styles.tag}>
            <span className={styles.dot} />
            Creator Brand Building - 2025
          </div>

          <h1 className={styles.title}>
            <span>
              <b>Von Creator</b>
            </span>
            <span>
              <b>zur eigenen</b>
            </span>
            <span>
              <b>Marke.</b>
            </span>
          </h1>
        </div>

        <div className={styles.right}>
          <p className={styles.subtitle}>
            Verwandle deine Reichweite in ein skalierbares Unternehmen mit eigener Marke und eigenen Produkten.
          </p>
          <div className={styles.buttons}>
            <a href="#cta" className={homeStyles.primaryButton}>
              Done with You
            </a>
            <a href="#packages" className={homeStyles.ghostButton}>
              Do it Yourself
            </a>
          </div>
        </div>
      </div>

      <div className={styles.scrollHint}>
        <span>Scroll</span>
        <div />
      </div>
    </section>
  );
};

export default HeroSection;
