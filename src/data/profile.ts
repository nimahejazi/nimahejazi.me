// Homepage content. Every fact and figure here must match Nima's resume
// (~/Codes/job_seeking/resume_data.js). Do not add figures that can't be backed up.

export interface SocialLink {
  label: string;
  href: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  location?: string;
  period: string;
  founder?: boolean;
  highlights: (string | { text: string; href: string })[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location?: string;
  honors?: string[];
  note?: string;
  certifications?: { name: string; issuer: string; date: string }[];
}

export interface ProjectItem {
  title: string;
  tags: string[];
  description: string;
  href?: string;
  archived?: boolean;
  slug?: string;
  featured?: boolean;
  image?: string;
  imageAlt?: string;
  /** "cover" crops to fill (site screenshots); "contain" shows the whole image (app UI figures). */
  imageFit?: "cover" | "contain";
}

export interface SkillGroup {
  category: string;
  items: string[];
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
  role: string;
  headline: string;
  pitch: string;
  metaDescription: string;
  story: string[];
  skills: SkillGroup[];
  stats: { label: string; value: string; sub?: string }[];
  experience: ExperienceItem[];
  education: EducationItem[];
  projects: ProjectItem[];
  contact: ContactInfo;
  socials: SocialLink[];
  portrait: string;
  resume: string;
}

export const profile: Profile = {
  name: "Nima Hejazi",
  wordmark: "nima.hejazi",
  availableForWork: true,
  location: "Chicago, IL",
  role: "Solutions Engineer · AI, Automation & Data",
  headline: "I build software people actually use",
  pitch:
    "Three-time founder with an MS in Business Analytics. I sit down with the " +
    "people who have the problem, work out what they actually need, build it, " +
    "and stay until it's adopted, whether that's a scheduling system a campus " +
    "police team relies on or an AI app that answers only from your own notes.",
  metaDescription:
    "Nima Hejazi: solutions engineer and three-time founder who builds AI, " +
    "automation, and data tools that people actually adopt.",
  story: [
    "I started my first business in Tehran in 2008: building websites, hosting, " +
      "and IT for more than 50 small businesses over 11 years, mostly on my own. " +
      "That meant selling the work, building it, and supporting it afterward.",
    "After moving to the US in 2019, I launched PropertySpot, filming property " +
      "tours for real estate agents and building a self-serve listing-site tool. " +
      "Then I went back to school: a BS in Business Administration with a CS " +
      "minor (summa cum laude), and an MS in Business Analytics at UC Davis.",
    "Along the way I built Lock Scheduler at Santa Rosa Junior College without " +
      "anyone asking, and now I'm building NovoMemo, an AI notes app. I'm looking " +
      "for a team where I can do the same thing at scale: understand the customer, " +
      "build the solution, and make it stick.",
  ],
  skills: [
    {
      category: "AI & Data",
      items: ["RAG", "LLM APIs (OpenAI, OpenRouter)", "Embeddings", "pgvector", "Python", "SQL", "R", "ETL & data validation"],
    },
    {
      category: "Web & Apps",
      items: ["TypeScript", "React", "React Native (Expo)", "PHP / Laravel", "ASP", "Supabase", "PostgreSQL", "MySQL", "SQLite"],
    },
    {
      category: "Cloud & Tools",
      items: ["AWS", "Cloudflare", "Git / GitHub", "Docker", "Stripe", "RevenueCat", "wxPython"],
    },
    {
      category: "Working with people",
      items: ["Requirements gathering", "Stakeholder interviews", "Client sales", "Rollout & training", "Lean Six Sigma (Green Belt)", "English & Persian"],
    },
  ],
  stats: [
    { label: "Scheduling errors", value: "−94%", sub: "Lock Scheduler, SRJC" },
    { label: "Weekly effort", value: "10h → 15m", sub: "Same project" },
    { label: "Clients served", value: "50+", sub: "11 years as a founder" },
  ],
  experience: [
    {
      title: "Founder & Developer",
      company: "Imaginovo (NovoMemo)",
      location: "Chicago, IL",
      period: "Aug 2026 – Present",
      founder: true,
      highlights: [
        "Designed and launched NovoMemo, a cross-platform AI notes app (TypeScript, Expo/React Native, Supabase) that answers questions only from a user's own notes, with clickable source citations.",
        "Built the retrieval pipeline end to end: heading-aware chunking, OpenAI embeddings in Postgres/pgvector, and a relevance threshold that answers \"not found\" instead of guessing.",
        "Shipped live subscription billing and offline-first sync in about 12 weeks, working solo and directing AI coding agents (Claude Code) through a spec- and test-driven workflow.",
        { text: "Read the NovoMemo case study", href: "/projects/novomemo/" },
      ],
    },
    {
      title: "IT Support (part-time)",
      company: "UC Law San Francisco, IT Department",
      location: "San Francisco, CA",
      period: "Oct 2025 – Apr 2026",
      highlights: [
        "Provided Tier 1 and 2 support for hardware, software, and network issues while completing my MS.",
        "Supported Microsoft 365 and SharePoint administration and business applications for staff and faculty.",
      ],
    },
    {
      title: "Administrative Assistant III · A&R Specialist I · Work Coordinator",
      company: "Santa Rosa Junior College",
      location: "Santa Rosa & Petaluma, CA",
      period: "Apr 2022 – Aug 2025",
      highlights: [
        "Built Lock Scheduler on my own initiative: a Python/SQLite desktop app replacing a 16-year-old manual Excel process that campus police, custodial, and maintenance teams relied on.",
        "Interviewed all three stakeholder groups, shipped in 6 weeks, and ran it alongside the manual process before cutover, cutting scheduling errors 94% and weekly effort from 10 hours to 15 minutes.",
        { text: "Read the Lock Scheduler case study", href: "/projects/lock-scheduler/" },
      ],
    },
    {
      title: "Founder",
      company: "PropertySpot (Robot Kudos)",
      location: "California",
      period: "2020 – 2021",
      founder: true,
      highlights: [
        "Shot and edited about 100 property tour videos for real estate agents and paired each with a listing website, generating about $20K in revenue.",
        "Built propertyspot.net (Laravel, React, MySQL), a self-serve tool that lets agents publish a listing site in under 20 minutes, with MLS/address APIs and built-in lead capture.",
      ],
    },
    {
      title: "Founder",
      company: "Gamma Direct",
      location: "Tehran, Iran",
      period: "2008 – 2019",
      founder: true,
      highlights: [
        "Ran a web, hosting, and IT services business on my own for 11 years, handling sales, delivery, and support for 50+ small-business clients.",
        "Built a data pipeline for Donya-e-Eqtesad, Iran's leading financial daily, converting raw stock-market data into print-ready tables.",
        "Developed a custom ASP financial-news membership platform and redeployed it for multiple clients, plus a referral marketing site that paid users commission for bringing in clients.",
      ],
    },
  ],
  education: [
    {
      institution: "University of California, Davis",
      degree: "MS, Business Analytics",
      period: "Jun 2026",
      location: "Davis, CA",
      honors: ["GPA 3.75"],
      note: "Practicum with My Growth Marketer: led pricing strategy for a client business and presented recommendations to the team.",
      certifications: [{ name: "Lean Six Sigma Green Belt", issuer: "UC Davis", date: "Apr 2026" }],
    },
    {
      institution: "Sonoma State University",
      degree: "BS, Business Administration (Management) · Minor, Computer Science",
      period: "Dec 2024",
      location: "Rohnert Park, CA",
      honors: ["Summa Cum Laude", "GPA 4.0", "Presidential Scholarship", "Beta Gamma Sigma", "Phi Theta Kappa"],
    },
  ],
  projects: [
    {
      title: "NovoMemo: AI notes that answer only from what you wrote",
      tags: ["RAG", "pgvector", "Supabase", "Expo", "TypeScript"],
      description:
        "A markdown notes app you can ask questions. Answers come only from your own notes, with a citation that jumps to the exact passage, and it says \"not found\" rather than guessing. Built solo with live billing and offline sync.",
      slug: "novomemo",
      featured: true,
      image: "/images/projects/novomemo.jpg",
      imageAlt: "NovoMemo landing page: \"Your notes, with answers.\"",
      imageFit: "cover",
    },
    {
      title: "Lock Scheduler: replacing a 16-year manual process",
      tags: ["Python", "SQLite", "wxPython", "Process improvement"],
      description:
        "A desktop app I built unprompted at Santa Rosa Junior College for the police, custodial, and maintenance teams. Scheduling errors fell 94% and weekly effort went from 10 hours to 15 minutes.",
      slug: "lock-scheduler",
      featured: true,
      image: "/images/lock-scheduler-fig3.png",
      imageAlt: "Lock Scheduler desktop interface showing the course schedule list and the Add Course dialog.",
      imageFit: "contain",
    },
    {
      title: "PropertySpot: listing websites in under 20 minutes",
      tags: ["Laravel", "React", "MySQL", "Stripe"],
      description:
        "A self-serve tool for real estate agents to publish a dedicated listing site, born from my own business filming about 100 property tours. Includes MLS/address lookups and built-in lead capture.",
      slug: "propertyspot",
      featured: true,
      image: "/images/projects/propertyspot.jpg",
      imageAlt: "PropertySpot.net landing page: \"Create your property website under 20 minutes.\"",
      imageFit: "cover",
    },
    {
      title: "toolmaking.net & ask",
      tags: ["Python", "CLI", "LLM", "Open source"],
      description:
        "A home for the free tools I build for myself, including ask, a terminal AI assistant that works with local models or an API key and can answer from your own notes.",
      slug: "ask",
    },
    {
      title: "nimahejazi.me",
      tags: ["Astro", "Tailwind CSS", "MDX"],
      description:
        "This site: static Astro 5 with Tailwind v4 and MDX, deployed to Vercel on every push to main.",
      slug: "nimahejazi-me",
    },
    {
      title: "Video Compression Tool",
      tags: ["Python", "FFmpeg", "H.265"],
      description:
        "Python utility that batch re-encodes video to H.265/HEVC for smaller files at the same quality, with progress tracking and safe handling of interrupted conversions.",
      archived: true,
    },
  ],
  contact: {
    email: "hello@nimahejazi.me",
    location: "Chicago, IL · open to relocation",
    website: "https://nimahejazi.me",
  },
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nhejazi" },
    { label: "GitHub", href: "https://github.com/nimahejazi" },
  ],
  portrait: "/nima-hejazi-portrait.jpg",
  resume: "/nima-hejazi-resume.pdf",
};
