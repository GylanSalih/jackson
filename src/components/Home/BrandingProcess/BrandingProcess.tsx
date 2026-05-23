import {
  BadgeCheck,
  BookOpen,
  Compass,
  FileText,
  Flag,
  LayoutTemplate,
  Megaphone,
  Palette,
  RefreshCw,
  Rocket,
  ScanSearch,
  Search,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./BrandingProcess.module.scss";

type ProcessItem = {
  title: string;
  phase: "Strategie" | "Entwicklung" | "Umsetzung";
  duration?: string;
  description: string;
};

const processItems: ProcessItem[] = [
  {
    title: "Kickoff",
    phase: "Strategie",
    description:
      "Gemeinsamer Start: Wir lernen euer Unternehmen, eure Ziele und eure Zielgruppe kennen und legen den strategischen Rahmen fest.",
  },
  {
    title: "Analyse",
    phase: "Strategie",
    description:
      "Wir analysieren Markt, Wettbewerb, Zielgruppe und Ausgangslage, damit die Marke nicht aus Geschmack, sondern aus Klarheit entsteht.",
  },
  {
    title: "Geschäftsmodell + Value Proposition + Persona",
    phase: "Strategie",
    description:
      "Wir schärfen Geschäftsmodell, Nutzenversprechen und Zielgruppenbild, damit klar wird, wofür die Marke steht und wen sie erreichen muss.",
  },
  {
    title: "Unternehmensstrategie",
    phase: "Strategie",
    description:
      "Wir ordnen Ziele, Richtung und Wachstumslogik des Unternehmens, damit die Marke strategisch sauber verankert ist.",
  },
  {
    title: "Markenstrategie",
    phase: "Strategie",
    description:
      "Wir definieren Positionierung, Markenkern, Werte, Persönlichkeit und kommunikative Leitplanken als Fundament der Marke.",
  },
  {
    title: "Vermarktungsstrategie",
    phase: "Strategie",
    description:
      "Wir entwickeln die Logik für Sichtbarkeit, Ansprache und Markteintritt, damit die Marke nicht nur gut aussieht, sondern Wirkung erzeugt.",
  },
  {
    title: "Naming",
    phase: "Entwicklung",
    description:
      "Wir entwickeln Namensrichtungen und konkrete Vorschläge, die zur Positionierung passen und als Marke tragfähig sind.",
  },
  {
    title: "Feedback",
    phase: "Entwicklung",
    description:
      "Wir prüfen die entwickelten Ansätze gemeinsam, priorisieren klare Favoriten und schärfen die Richtung für die nächste Entwicklungsstufe.",
  },
  {
    title: "Markenrecht",
    phase: "Entwicklung",
    description:
      "Wir prüfen die gewählte Richtung auf rechtliche Verwendbarkeit und schaffen die Grundlage für eine sichere Markenanmeldung.",
  },
  {
    title: "Design Audit",
    phase: "Entwicklung",
    description:
      "Wir untersuchen bestehende visuelle Elemente, Touchpoints und Designqualität, um Brüche, Potenziale und notwendige Veränderungen sichtbar zu machen.",
  },
  {
    title: "2 Brand Design-Konzepte",
    phase: "Entwicklung",
    description:
      "Wir entwickeln zwei visuelle Markenrichtungen, die Strategie, Haltung und Wiedererkennbarkeit in ein konkretes Erscheinungsbild übersetzen.",
  },
  {
    title: "Feedback",
    phase: "Entwicklung",
    description:
      "Wir bewerten die Designrichtungen, treffen eine klare Entscheidung und definieren, welche Elemente weiter ausgearbeitet werden.",
  },
  {
    title: "Gestaltungselemente",
    phase: "Entwicklung",
    description:
      "Wir entwickeln Farben, Typografie, Bildsprache, Layoutlogik und wiederkehrende Designelemente zu einem konsistenten Design System.",
  },
  {
    title: "Brand Guidelines",
    phase: "Entwicklung",
    description:
      "Wir dokumentieren Strategie, Designregeln und Anwendungslogik in einem klaren Markensystem für interne und externe Nutzung.",
  },
  {
    title: "Ausarbeitung Touchpoints",
    phase: "Umsetzung",
    description:
      "Wir übertragen die Marke auf relevante Kontaktpunkte wie Website, Social Media, Präsentationen, Vorlagen und weitere Anwendungen.",
  },
  {
    title: "Kampagne",
    phase: "Umsetzung",
    description:
      "Wir entwickeln eine Kampagnenidee, die die neue Marke sichtbar macht und den Markt mit einer klaren Botschaft aktiviert.",
  },
  {
    title: "Marken Launch",
    phase: "Umsetzung",
    description:
      "Wir bringen die Marke kontrolliert nach außen und sorgen dafür, dass Launch, Kommunikation und erste Markenerlebnisse zusammenpassen.",
  },
];

const phases: ProcessItem["phase"][] = [
  "Strategie",
  "Entwicklung",
  "Umsetzung",
];

const itemSpacing = 285;
const trackWidth = (processItems.length - 1) * itemSpacing + 380;
const scrollSensitivity = 3200;

const itemIcons: LucideIcon[] = [
  Rocket,
  Search,
  Compass,
  LayoutTemplate,
  BadgeCheck,
  Megaphone,
  BookOpen,
  Users,
  ShieldCheck,
  ScanSearch,
  Palette,
  RefreshCw,
  LayoutTemplate,
  FileText,
  Compass,
  Megaphone,
  Flag,
];

const BrandingProcess = (): React.ReactElement => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [trackShift, setTrackShift] = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const maxShiftRef = useRef(0);
  const touchYRef = useRef<number | null>(null);

  const activeItem = processItems[activeIndex] ?? processItems[0]!;
  const titleWords = activeItem.title.split(" ");
  const titleLength = activeItem.title.replace(/\s/g, "").length;
  const longestWord = Math.max(...titleWords.map((word) => word.length));

  const titleScale =
    longestWord >= 15 || titleLength >= 38
      ? 0.28
      : longestWord >= 13 || titleLength >= 30
        ? 0.36
        : longestWord >= 10 || titleLength >= 24
          ? 0.46
          : longestWord >= 8 || titleLength >= 16
            ? 0.68
            : 1;

  const firstIndexByPhase = useMemo(
    () =>
      phases.reduce<Record<ProcessItem["phase"], number>>(
        (indexes, phase) => {
          indexes[phase] = processItems.findIndex(
            (item) => item.phase === phase,
          );

          return indexes;
        },
        {} as Record<ProcessItem["phase"], number>,
      ),
    [],
  );

  const setTimelineProgress = (nextProgress: number) => {
    const next = Math.min(Math.max(nextProgress, 0), 1);

    progressRef.current = next;
    setTrackShift(-maxShiftRef.current * next);
    setActiveIndex(Math.round(next * (processItems.length - 1)));
  };

  const lockSectionInView = () => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const lockTop = Math.min(96, window.innerHeight * 0.14);
    const rect = section.getBoundingClientRect();

    window.scrollTo({
      top: window.scrollY + rect.top - lockTop,
      behavior: "auto",
    });
  };

  const shouldCaptureScroll = (deltaY: number) => {
    const section = sectionRef.current;

    if (!section || deltaY === 0) {
      return false;
    }

    const lockTop = Math.min(96, window.innerHeight * 0.14);
    const rect = section.getBoundingClientRect();

    const sectionIsLocked =
      rect.top <= lockTop && rect.bottom >= lockTop + section.clientHeight * 0.7;

    const canMoveForward = deltaY > 0 && progressRef.current < 1;
    const canMoveBackward = deltaY < 0 && progressRef.current > 0;

    return sectionIsLocked && (canMoveForward || canMoveBackward);
  };

  const scrollToIndex = (index: number) => {
    const progress = index / (processItems.length - 1);

    lockSectionInView();
    setTimelineProgress(progress);
  };

  useEffect(() => {
    const updateMeasurements = () => {
      const stage = stageRef.current;
      const track = trackRef.current;

      if (!stage || !track) {
        return;
      }

      const maxShift = Math.max(track.scrollWidth - stage.clientWidth, 0);

      maxShiftRef.current = maxShift;
      setTimelineProgress(progressRef.current);
    };

    const handleWheel = (event: WheelEvent) => {
      if (!shouldCaptureScroll(event.deltaY)) {
        return;
      }

      event.preventDefault();
      lockSectionInView();

      setTimelineProgress(
        progressRef.current + event.deltaY / scrollSensitivity,
      );
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchYRef.current = event.touches[0]?.clientY ?? null;
    };

    const handleTouchMove = (event: TouchEvent) => {
      const currentY = event.touches[0]?.clientY;
      const previousY = touchYRef.current;

      if (currentY === undefined || previousY === null) {
        return;
      }

      const deltaY = previousY - currentY;
      touchYRef.current = currentY;

      if (!shouldCaptureScroll(deltaY)) {
        return;
      }

      event.preventDefault();
      lockSectionInView();

      setTimelineProgress(
        progressRef.current + deltaY / (scrollSensitivity * 0.65),
      );
    };

    updateMeasurements();

    window.addEventListener("resize", updateMeasurements);
    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("resize", updateMeasurements);
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={styles.brandingProcess}
      style={
        {
          "--track-shift": `${trackShift}px`,
          "--track-width": `${trackWidth}px`,
        } as React.CSSProperties
      }
      data-reveal
    >
      <div className={styles.stickyStage}>
        <h3>Unser modularer Branding Prozess</h3>

        <div className={styles.layout}>
          <aside className={styles.sidebar} aria-label="Prozessphasen">
            <div className={styles.weekLabel}>Kalenderwoche →</div>

            {phases.map((phase) => (
              <button
                className={`${styles.phasePill} ${
                  activeItem.phase === phase ? styles.activePhase : ""
                }`}
                key={phase}
                type="button"
                onClick={() => scrollToIndex(firstIndexByPhase[phase])}
              >
                {phase}
              </button>
            ))}
          </aside>

          <div className={styles.rightColumn}>
            <div ref={stageRef} className={styles.timelineStage}>
              {phases.map((phase, index) => (
                <span
                  className={styles.laneLine}
                  key={phase}
                  style={{ "--lane": index } as React.CSSProperties}
                />
              ))}

              <div ref={trackRef} className={styles.track}>
                {processItems.map((item, index) => {
                  const lane = phases.indexOf(item.phase);
                  const Icon = itemIcons[index] ?? Flag;

                  return (
                    <button
                      className={`${styles.step} ${
                        index === activeIndex ? styles.activeStep : ""
                      }`}
                      key={`${item.phase}-${item.title}-${index}`}
                      style={
                        {
                          "--item-x": `${index * itemSpacing}px`,
                          "--lane": lane,
                        } as React.CSSProperties
                      }
                      type="button"
                      onClick={() => scrollToIndex(index)}
                    >
                      <span className={styles.stepIcon} aria-hidden="true">
                        <Icon size={17} strokeWidth={2.2} />
                      </span>

                      <span className={styles.stepTitle}>{item.title}</span>

                      {item.duration ? (
                        <span className={styles.duration}>
                          {item.duration}
                        </span>
                      ) : null}
                    </button>
                  );
                })}
              </div>
            </div>

            <article className={styles.infoPanel} aria-live="polite">
              <div className={styles.infoTitleWrap}>
                <h4
                  key={`title-${activeIndex}`}
                  style={
                    {
                      "--title-scale": titleScale,
                    } as React.CSSProperties
                  }
                >
                  {titleWords.map((word, index) => (
                    <span className={styles.wordMask} key={`${word}-${index}`}>
                      <span
                        className={styles.titleWord}
                        style={
                          {
                            "--word-index": index,
                          } as React.CSSProperties
                        }
                      >
                        {word}
                      </span>
                    </span>
                  ))}
                </h4>
              </div>

              <div className={styles.infoCopyWrap}>
                <p key={`description-${activeIndex}`}>
                  {activeItem.description}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandingProcess;