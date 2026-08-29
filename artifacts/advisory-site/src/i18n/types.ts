export interface StatItem {
  value: string;
  label: string;
}

export interface ServiceItem {
  number: string;
  title: string;
  desc: string;
}

export interface TimelineItem {
  period: string;
  role: string;
  org: string;
  detail?: string;
  type: "edu" | "career";
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface AreaLink {
  label: string;
  text: string;
}

export interface NavLink {
  label: string;
  anchor: string;
}

export interface SelectOption {
  value: string;
  label: string;
}

export interface CoreArea {
  label: string;
  heading: string;
  description: string;
  topics: string[];
  cta: string;
  anchor: string;
}

export interface GovernanceTopic {
  heading: string;
  items: string[];
}

export interface BoardTopic {
  heading: string;
  question: string;
  items: string[];
}

export interface SuccessionTopic {
  title: string;
  desc: string;
}

export interface CredibilityItem {
  label: string;
  text: string;
}

export interface Translations {
  nav: {
    strip: string;
    about: string;
    services: string;
    governance: string;
    succession: string;
    board: string;
    contact: string;
    cta: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: StatItem[];
  };
  services: {
    eyebrow: string;
    heading: string;
    intro: string;
    cta: string;
    items: ServiceItem[];
  };
  statsStrip: {
    eyebrow: string;
    p1: string;
    p2: string;
    cta: string;
    stats: StatItem[];
    imgAlt: string;
  };
  coreOfferings: {
    eyebrow: string;
    heading: string;
    areas: CoreArea[];
  };
  boardExperience: {
    eyebrow: string;
    heading: string;
    intro: string;
    cta: string;
    topics: GovernanceTopic[];
  };
  succession: {
    eyebrow: string;
    heading: string;
    p1: string;
    p2: string;
    cta: string;
    imgAlt: string;
    topics: SuccessionTopic[];
  };
  boardGovernance: {
    eyebrow: string;
    heading: string;
    intro: string;
    cta: string;
    topics: BoardTopic[];
    model: {
      heading: string;
      desc: string;
      pillars: string[];
    };
  };
  testimonial: {
    eyebrow: string;
    heading: string;
    p1: string;
    p2: string;
    cta: string;
    items: CredibilityItem[];
  };
  about: {
    eyebrow: string;
    heading: string;
    title: string;
    paragraphs: string[];
    cta: string;
    quote: string;
    imgAlt: string;
    timeline: TimelineItem[];
  };
  faq: {
    eyebrow: string;
    heading: string;
    intro: string;
    cta: string;
    items: FaqItem[];
  };
  contact: {
    eyebrow: string;
    heading: string;
    p1: string;
    p2: string;
    addressLabel: string;
    addressLines: string[];
    whatsapp: string;
    confidentiality: string;
    submitBtn: string;
    successTitle: string;
    successMsg: string;
    sendAnother: string;
    areas: AreaLink[];
    fields: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      company: string;
      companyPlaceholder: string;
      position: string;
      positionPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      familyMember: string;
      familyMemberPlaceholder: string;
      companyName: string;
      companyNamePlaceholder: string;
      shareholder: string;
      shareholderPlaceholder: string;
      generation: string;
      generationPlaceholder: string;
      interest: string;
      interestPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      interestOptions: SelectOption[];
      errors: {
        nameRequired: string;
        emailInvalid: string;
      };
    };
  };
  footer: {
    tagline: string;
    desc: string;
    navLabel: string;
    contactLabel: string;
    contactDesc: string;
    ctaBtn: string;
    copyright: string;
    firm: string;
    navLinks: NavLink[];
  };
}
