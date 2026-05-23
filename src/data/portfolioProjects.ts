export type PortfolioProject = {
  slug: string;
  title: string;
  category: string;
  rubric: string;
  tags: string[];
  relevance: number;
  summary: string;
  image: string;
  year: string;
  services: string[];
  metrics: Array<{
    value: string;
    label: string;
  }>;
  sections: Array<{
    title: string;
    text: string;
  }>;
  gallery: string[];
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "fitness-creator-brand",
    title: "Fitness Creator Brand",
    category: "Positionierung · Product Offer",
    rubric: "Marketing",
    tags: ["Marketing", "Produktangebot", "Launch"],
    relevance: 3,
    summary:
      "Von Trainingscontent zu einem klaren digitalen Produkt mit Angebotsstruktur, Zielgruppe und Launch-Roadmap.",
    image: "/assets/img/sortieren/moodboard-golden.png",
    year: "2025",
    services: ["Positionierung", "Product Offer", "Launch Roadmap"],
    metrics: [
      { value: "3", label: "Angebotsstufen" },
      { value: "8", label: "Launch Touchpoints" },
      { value: "1", label: "klarer Funnel" },
    ],
    sections: [
      {
        title: "Ausgangslage",
        text: "Die Community war aktiv, aber das Angebot war nicht greifbar. Wir haben Thema, Zielgruppe und Kaufmoment sauber getrennt.",
      },
      {
        title: "Lösung",
        text: "Entstanden ist ein Produkt-Framework mit klarer Value Proposition, Content-Übergängen und Launch-Struktur.",
      },
    ],
    gallery: [
      "/assets/img/sortieren/moodboard-golden.png",
      "/assets/img/sortieren/moodboard-field.png",
    ],
  },
  {
    slug: "beauty-community-label",
    title: "Beauty Community Label",
    category: "Brand Identity · Story",
    rubric: "Auftritt",
    tags: ["Auftritt", "Brand Identity", "Story"],
    relevance: 2,
    summary:
      "Naming, Markenstory und visuelle Richtung für eine Community, die Vertrauen bereits aufgebaut hatte.",
    image: "/assets/img/sortieren/brand-gradient-bottom.png",
    year: "2025",
    services: ["Naming", "Brand Story", "Identity Direction"],
    metrics: [
      { value: "2", label: "Designrichtungen" },
      { value: "14", label: "Brand Assets" },
      { value: "1", label: "Brand Story" },
    ],
    sections: [
      {
        title: "Ausgangslage",
        text: "Die Person war stark, die Marke aber noch austauschbar. Das Ziel war eine eigene Welt ohne sterile Beauty-Klischees.",
      },
      {
        title: "Lösung",
        text: "Wir haben Sprache, visuelle Prinzipien und Markenstory so aufgebaut, dass Community und Produkt sauber zusammenpassen.",
      },
    ],
    gallery: [
      "/assets/img/sortieren/brand-gradient-bottom.png",
      "/assets/img/sortieren/brand-shape-top-left.png",
    ],
  },
  {
    slug: "education-framework",
    title: "Education Framework",
    category: "System · Funnel",
    rubric: "Account",
    tags: ["Account", "System", "Funnel"],
    relevance: 1,
    summary:
      "Ein Framework für Wissen, Produktlogik und erste Kundenreise aus bestehender Reichweite.",
    image: "/assets/img/sortieren/moodboard-cinematic.png",
    year: "2025",
    services: ["System Design", "Funnel", "Customer Journey"],
    metrics: [
      { value: "5", label: "Module" },
      { value: "4", label: "Journey Phasen" },
      { value: "1", label: "Launch Plan" },
    ],
    sections: [
      {
        title: "Ausgangslage",
        text: "Viel Wissen, viele Inhalte, aber kein System. Die Zielgruppe brauchte Orientierung und ein klares Ergebnisversprechen.",
      },
      {
        title: "Lösung",
        text: "Das Wissen wurde in ein Framework übersetzt, das Content, Angebot und erste Kundenreise miteinander verbindet.",
      },
    ],
    gallery: [
      "/assets/img/sortieren/moodboard-cinematic.png",
      "/assets/img/sortieren/moodboard-golden.png",
    ],
  },
];

export const getPortfolioProject = (
  slug: string | undefined,
): PortfolioProject | undefined =>
  portfolioProjects.find((project) => project.slug === slug);
