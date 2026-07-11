export interface SocialLink {
  label: string;
  href: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  description: string;
}

export interface ProjectItem {
  title: string;
  tags: string[];
  description: string;
  href?: string;
  archived?: boolean;
}

export interface ContactInfo {
  email: string;
  location: string;
  website?: string;
}

export interface Profile {
  name: string;
  wordmark: string;
  availableForWork: boolean;
  location: string;
  headline: string;
  pitch: string;
  about: string;
  stack: { languages: string[]; frontend: string[]; backend: string[]; tooling: string[] };
  skills: string[];
  stats: { label: string; value: string }[];
  experience: ExperienceItem[];
  education: EducationItem[];
  projects: ProjectItem[];
  contact: ContactInfo;
  socials: SocialLink[];
  portrait: string;
}

export const profile: Profile = {
  name: "Nima Hejazi",
  wordmark: "nima.hejazi",
  availableForWork: true,
  location: "Remote",
  headline: "Nima Hejazi",
  pitch:
    "A builder who treats engineering like a craft — proficient in modern web " +
    "and data tooling, combining technical depth with clear, written communication.",
  about:
    "I design and ship production systems and the interfaces around them. " +
    "Pragmatic, accessible by default, and tuned to be pleasant to read at 2am.",
  stack: {
    languages: ["TypeScript", "Python", "Go"],
    frontend: ["Astro", "React", "Tailwind CSS"],
    backend: ["Node", "Postgres", "Redis"],
    tooling: ["Vite", "Docker", "GitHub Actions"],
  },
  skills: [
    "Thinking · Architecture",
    "Grep · Audits",
    "Read · Research",
    "Edit · Refactor",
    "Done · Ship",
  ],
  stats: [
    { label: "Years", value: "10+" },
    { label: "Projects", value: "40" },
    { label: "Papers", value: "12" },
  ],
  experience: [
    {
      title: "Senior Software Engineer",
      company: "Independent",
      period: "2020 - Present",
      description:
        "Build and ship web platforms and data tooling end to end, from " +
        "architecture to deployed product.",
    },
    {
      title: "Software Engineer",
      company: "Research Lab",
      period: "2017 - 2020",
      description:
        "Shipped reproducible research infrastructure and internal tools " +
        "used across multiple teams.",
    },
  ],
  education: [
    {
      period: "2015 - 2017",
      degree: "M.S. in Computer Science",
      institution: "University",
      description:
        "Focused on distributed systems and programming languages.",
    },
    {
      period: "2011 - 2015",
      degree: "B.S. in Computer Science",
      institution: "University",
      description:
        "Foundations in algorithms, systems, and software engineering.",
    },
  ],
  projects: [
    {
      title: "Project Management SaaS",
      tags: ["Astro", "React"],
      description:
        "A robust platform facilitating seamless project coordination and " +
        "lifting the daily UX of busy teams.",
      href: "https://example.com",
    },
    {
      title: "Data Tooling",
      tags: ["Python", "Postgres"],
      description:
        "Reproducible pipelines and dashboards that make data trustworthy " +
        "and easy to explore.",
      href: "https://example.com",
    },
  ],
  contact: {
    email: "hello@nimahejazi.me",
    location: "Remote",
    website: "https://nimahejazi.me",
  },
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nimahejazi" },
    { label: "GitHub", href: "https://github.com/nimahejazi" },
  ],
  portrait: "/portrait-placeholder.svg",
};
