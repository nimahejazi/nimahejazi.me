export interface SocialLink {
  label: string;
  href: string;
}

export interface ExperienceItem {
  title: string;
  company: string;
  location?: string;
  period: string;
  description?: string;
  highlights: string[];
  tags?: string[];
}

export interface EducationItem {
  period: string;
  degree: string;
  institution: string;
  location?: string;
  description?: string;
  courses?: string[];
  certifications?: { name: string; issuer: string; date: string }[];
}

export interface ProjectItem {
  title: string;
  tags: string[];
  description: string;
  href?: string;
  archived?: boolean;
  slug?: string;
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
  headline: string;
  pitch: string;
  about: string;
  stack: { languages: string[]; frontend: string[]; backend: string[]; tooling: string[] };
  skills: SkillGroup[];
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
  location: "Chicago, IL",
  headline: "Nima Hejazi",
  pitch:
    "Data analyst and full-stack web developer who turns operational noise " +
    "into clean pipelines and clear products, from ETL and dashboards to " +
    "deployed web apps.",
  about:
    "I build data systems and the web interfaces around them: Python ETL " +
    "pipelines, executive dashboards, and responsive applications. Pragmatic, " +
    "accessible by default, and tuned to be pleasant to read at 2am.",
  stack: {
    languages: ["Python", "TypeScript", "JavaScript", "SQL", "PHP", "R"],
    frontend: ["React", "Laravel Blade", "Bootstrap", "Tailwind CSS"],
    backend: ["Node", "PostgreSQL", "MySQL", "MongoDB", "Express"],
    tooling: ["Docker", "Git/GitHub", "CI/CD", "Cloud (AWS/Azure)"],
  },
  skills: [
    {
      category: "Analytics & Statistics",
      items: [
        "A/B Testing",
        "KPI Analysis",
        "Data Cleaning",
        "Statistical Analysis",
        "Machine Learning",
        "Causal Inference",
        "Market Research",
        "ETL",
        "Data Pipelines",
      ],
    },
    {
      category: "Engineering & Architecture",
      items: [
        "JavaScript",
        "TypeScript",
        "Python",
        "SQL",
        "PHP",
        "Node.js",
        "PostgreSQL",
        "MySQL",
        "RESTful APIs",
        "React",
        "Laravel",
        "Express",
        "NoSQL",
        "MongoDB",
        "CI/CD",
        "Docker",
        "Supabase",
        "Cloud (AWS/Azure)",
      ],
    },
    {
      category: "Data & AI",
      items: [
        "Dashboards & Reporting",
        "Data Modeling",
        "AI Integration",
        "Prompt Engineering",
        "LLMs",
        "Agentic AI",
        "SciPy",
        "NumPy",
        "Pandas",
        "Scikit-learn",
        "TensorFlow",
        "PyTorch",
        "R",
      ],
    },
    {
      category: "Business & Communication",
      items: [
        "Stakeholder Communication",
        "Consulting",
        "Agile",
        "Decision Support",
        "Price Setting",
        "Insight Translation",
        "Executive Summaries",
        "Public Speaking",
        "Advanced Excel",
      ],
    },
  ],
  stats: [
    { label: "Business Analytics · UC Davis", value: "MSBA '26" },
    { label: "Workflows & tooling", value: "Agentic AI" },
    { label: "Data & web apps", value: "Full-stack" },
  ],
  experience: [
    {
      title: "Data & Operations Analyst",
      company: "Santa Rosa Junior College",
      location: "Petaluma, CA",
      period: "Aug 2023 – Jul 2025",
      highlights: [
        "Built and deployed custom Python ETL pipelines and scheduling models that automated heavy operational workflows, cutting manual processing time by 98%.",
        "Redesigned internal business workflows and automated data flows, reducing scheduling and reporting errors by 94%.",
        "Cleaned and validated datasets of over 8,000 records to identify and resolve underlying data discrepancies.",
        "Developed clean executive dashboards that transformed complex operational data into actionable insights for leadership.",
        "Wrote Python scripts to interface directly with institutional databases, replacing outdated manual tasks with scalable automated solutions.",
      ],
      tags: ["Business Analytics", "Data Mining"],
    },
    {
      title: "Freelance Web Developer & Digital Media Consultant",
      company: "Self-Employed",
      location: "Santa Rosa, CA",
      period: "2020 – 2023",
      highlights: [
        "Collaborated directly with clients to translate their technical and business requirements into fully functional digital products.",
        "Developed custom, responsive websites utilizing modern front-end frameworks to enhance clients' online presence and user engagement.",
        "Architected and implemented tailored IT and data management solutions to streamline client operations.",
        "Managed end-to-end video production workflows, from processing raw footage to organizing and compressing final digital assets.",
      ],
      tags: ["Client Collaboration", "End-to-End Ownership"],
    },
    {
      title: "Software Project Lead",
      company: "Gamma Direct",
      location: "Tehran, Iran",
      period: "Jul 2006 – Oct 2019",
      highlights: [
        "Led a 10-person cross-functional engineering team through the entire software development lifecycle to build a comprehensive financial news and stock market platform.",
        "Acted as the primary liaison between business stakeholders and engineering, translating complex financial requirements into actionable development roadmaps.",
        "Developed time-series forecasting models to track and predict real-time stock market trends.",
        "Architected integrated reporting features capable of ingesting and processing live data feeds with zero latency.",
        "Created interactive data visualization tools that made high-velocity, complex financial data accessible and easy to interpret for end-users.",
      ],
      tags: ["Team Leadership", "Compliance Systems"],
    },
  ],
  education: [
    {
      institution: "University of California, Davis",
      degree: "Master of Science, Business Analytics",
      period: "June 2026",
      location: "Davis, CA",
      courses: [
        "Machine Learning & AI",
        "Data Design & Representation",
        "Big Data",
        "Data Management",
      ],
      certifications: [
        { name: "Lean Six Sigma Green Belt", issuer: "UC Davis", date: "Apr 2026" },
      ],
    },
    {
      institution: "Sonoma State University",
      degree: "Bachelor of Science, Business Administration; Minor: Computer Science",
      period: "December 2024",
      location: "Rohnert Park, CA",
      courses: [
        "Database Management System Design",
        "Software Design & Development",
        "Business Data Analysis & Interpretation",
        "Programming Concepts 2",
      ],
    },
  ],
  projects: [
    {
      title: "PropertySpot: Property Listing Management Platform",
      tags: ["Laravel", "MySQL", "Stripe", "Docker", "CI/CD"],
      description:
        "Full-stack property listing platform built on Laravel 8.x with MySQL, role-based access control, Stripe payments, and email verification. Containerized with Docker (nginx + php-fpm) and shipped via a Jenkins CI/CD pipeline, with a React-powered interactive UI.",
    },
    {
      title: "Video Compression Tool",
      tags: ["Python", "H.265/HEVC", "FFmpeg"],
      description:
        "Python utility that re-encodes video to H.265/HEVC for major file-size savings at preserved quality, with batch processing, progress tracking, and safe handling of edge cases such as interrupted conversions.",
    },
  ],
  contact: {
    email: "hello@nimahejazi.me",
    location: "Chicago, IL",
    website: "https://nimahejazi.me",
  },
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nimahejazi" },
    { label: "GitHub", href: "https://github.com/nimahejazi" },
  ],
  portrait: "/nima-hejazi-portrait.jpg",
};
