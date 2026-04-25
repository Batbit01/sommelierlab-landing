export type Lang = "es" | "ca" | "en";
export const LANGS: Lang[] = ["ca", "es", "en"];
export const DEFAULT_LANG: Lang = "es";
export const LANG_LABELS: Record<Lang, string> = {
  ca: "Català",
  es: "Español",
  en: "English",
};

export interface Dict {
  meta: {
    title: string;
    description: string;
  };
  banner: {
    label: string;
    text: string;
    cta: string;
  };
  nav: {
    solution: string;
    demo: string;
    plans: string;
    contact: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  problem: {
    eyebrow: string;
    title1: string;
    title2: string;
    cards: { title: string; text: string }[];
    closing: string;
  };
  solution: {
    eyebrow: string;
    title: string;
    items: { num: string; title: string; text: string }[];
  };
  retention: {
    eyebrow: string;
    title1: string;
    title2: string;
    intro: string;
    layers: { tag: string; title: string; text: string; pitch: string }[];
    summary1: string;
    summary2: string;
    summary3: string;
    summary4: string;
    closingTitle: string;
    closingText: string;
  };
  demo: {
    eyebrow: string;
    title: string;
    intro: string;
    sideTitle: string;
    sideText: string;
    qrCaption: string;
  };
  control: {
    eyebrow: string;
    title: string;
    cards: {
      title: string;
      text: string;
      placeholder: string;
    }[];
  };
  howItWorks: {
    eyebrow: string;
    title: string;
    steps: { num: string; title: string; text: string }[];
    footer: string;
  };
  twoQRs: {
    eyebrow: string;
    title1: string;
    title2: string;
    legal: {
      badge: string;
      title: string;
      text: string;
      features: string[];
      footnote: string;
    };
    premium: {
      badge: string;
      title: string;
      text: string;
      features: string[];
    };
  };
  pricing: {
    eyebrow: string;
    title: string;
    subtitle: string;
    plans: {
      name: string;
      price: string;
      vinos: string;
      langs: string;
      features: string[];
      ctaLabel: string;
    }[];
    setupTitle: string;
    setupSubtitle: string;
    setupHeading: string;
    setups: {
      name: string;
      price: string;
      desc: string;
      features: string[];
    }[];
    comparativaTitle: string;
    comparativaCols: { winefo: string; pinotqr: string; sommelierlab: string };
    comparativaRows: [string, string, string, string][];
  };
  media: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; duration: string; text: string }[];
    ctaText: string;
    ctaLabel: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    form: {
      name: string;
      bodega: string;
      email: string;
      phone: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
      sending: string;
      successTitle: string;
      successText: string;
      errorGeneric: string;
      privacyNote: string;
    };
  };
  footer: {
    tagline: string;
    privacy: string;
    cookies: string;
    terms: string;
  };
}
