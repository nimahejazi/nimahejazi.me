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
  highlights: (string | { text: string; href: string })[];
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
  stack: { analysis: string[]; ai: string[]; data: string[]; engineering: string[] };
  skills: SkillGroup[];
  stats: { label: string; value: string; sub?: string }[];
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
  location: "San Francisco, CA",
  headline: "Nima Hejazi",
  pitch:
    "Business Analyst specializing in Agentic AI and process improvement. I " +
    "turn operational noise into clear requirements, KPI dashboards, and " +
    "automated workflows, and I can build the software and AI behind them " +
    "when it helps.",
  about:
    "I'm a business analyst who connects stakeholders, requirements, and data " +
    "to decisions. I map workflows, define KPIs, and translate business needs " +
    "into automated pipelines and AI-assisted tooling. Because I can also " +
    "build the software and models behind the analysis, the distance between " +
    "insight and delivery stays short.",
  stack: {
    analysis: ["KPI Analysis", "A/B Testing", "Statistical Analysis", "Market Research", "ETL", "Data Pipelines"],
    ai: ["LLMs", "Agentic AI", "Prompt Engineering", "AI Integration", "Machine Learning"],
    data: ["Python", "SQL", "Pandas", "NumPy", "R"],
    engineering: ["TypeScript", "React", "Node", "Cloud (AWS/Azure)", "CI/CD", "Docker"],
  },
  skills: [
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
      category: "Software Engineering",
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
  ],
  stats: [
    { label: "Education", value: "MS in Business Analytics", sub: "UC Davis" },
    { label: "Specialty", value: "Agentic AI" },
    { label: "Also builds", value: "Software & AI" },
  ],
  experience: [
    {
      title: "MSBA Practicum — Customer Analytics & AI Marketing",
      company: "My Growth Marketer",
      location: "San Francisco, CA",
      period: "Aug 2025 – Jun 2026",
      highlights: [
        "Customer analytics and segmentation analysis",
        "Pricing strategy lifted revenue 24%",
        "AI lead-generation tool lifted leads 35%",
      ],
      tags: ["Customer Analytics", "AI Marketing"],
    },
    {
      title: "IT Support / Systems Administration",
      company: "UC Law IT Department",
      location: "San Francisco, CA",
      period: "Oct 2025 – Apr 2026",
      highlights: [
        "Tier 1 & 2 support — hardware, software, network",
        "Microsoft 365 / SharePoint administration",
        "Business application and end-user support",
      ],
      tags: ["IT Support", "Systems Administration"],
    },
    {
      title: "Data & Operations Analyst",
      company: "Santa Rosa Junior College",
      location: "Petaluma, CA",
      period: "Aug 2023 – Jul 2025",
      highlights: [
        "Cut processing time 98%",
        "Reduced scheduling errors 94%",
        "Built ETL pipelines and executive dashboards",
        "KPI and leadership reporting",
        "Mapped and automated workflows into SOPs",
        { text: "Requirements gathering — see case study", href: "/projects/lock-scheduler/" },
      ],
      tags: ["Business Analytics", "Data Mining"],
    },
    {
      title: "Web Developer & Digital Media Consultant",
      company: "Robot Kudos",
      location: "Santa Rosa, CA",
      period: "2020 – 2023",
      highlights: [
        "Elicited and translated client requirements",
        "Agile, end-to-end delivery",
        "Automated client workflows",
        "Data and API integrations",
      ],
      tags: ["Client Collaboration", "End-to-End Ownership"],
    },
    {
      title: "Software Project Lead",
      company: "Gamma Direct",
      location: "Remote",
      period: "Jul 2010 – Oct 2019",
      highlights: [
        "Led a 10-person Agile team",
        "Translated financial needs into roadmaps",
        "Reporting and compliance modules",
        "Role-based access controls",
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
        "Information, Insight & Impact",
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
      title: "Lock Scheduler: Automated Class Scheduling System for SRJC",
      tags: ["Python", "SQLite", "wxPython", "Automation", "Process Improvement"],
      description:
        "Desktop app (Python, SQLite, wxPython) that replaced a manual, multi-source Excel scheduling workflow at Santa Rosa Junior College — cutting scheduling errors by 94% and weekly effort from 10 hours to 15 minutes.",
      slug: "lock-scheduler",
    },
    {
      title: "Sage Functional Health: Pricing Strategy",
      tags: ["Pricing", "Customer Analytics"],
      description:
        "Designed a discriminated pricing model for a functional health practice, increasing profit by 24% while preserving client accessibility.",
    },
    {
      title: "AI Lead & Positioning Engine",
      tags: ["LLM", "Lead Generation"],
      description:
        "Built an LLM-powered tool that ranks a business's web and social presence against stated goals and generates leads.",
    },
    {
      title: "PropertySpot: Property Listing Management Platform",
      tags: ["Laravel", "MySQL", "Stripe", "Docker", "Jenkins", "CICD"],
      description:
        "Full-stack property listing platform on Laravel 8.x and MySQL with role-based access control, Stripe payments, and email verification. Containerized with Docker (nginx + php-fpm), shipped via a Jenkins CI/CD pipeline, and fronted by a React-powered interactive UI.",
      slug: "propertyspot",
    },
    {
      title: "ask: Terminal LLM Assistant",
      tags: ["Python", "CLI", "LLM", "Terminal"],
      description:
        "Python CLI that brings an LLM into the terminal: interactive chat, one-shot command extraction, and tool support across local or cloud providers.",
      slug: "ask",
    },
    {
      title: "Video Compression Tool",
      tags: ["Python", "H.265/HEVC", "FFmpeg"],
      description:
        "Python utility that re-encodes video to H.265/HEVC for major file-size savings at preserved quality, with batch processing, progress tracking, and safe handling of edge cases such as interrupted conversions.",
    },
    {
      title: "nimahejazi.me Personal Website",
      tags: ["Astro", "Tailwind CSS", "MDX"],
      description:
        "Static personal site (Astro 5, CSS-first Tailwind v4, MDX) with GitHub + Vercel auto-deploy on every push to main.",
      slug: "nimahejazi-me",
    },
  ],
  contact: {
    email: "hello@nimahejazi.me",
    location: "San Francisco, CA",
    website: "https://nimahejazi.me",
  },
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nhejazi" },
    { label: "GitHub", href: "https://github.com/nimahejazi" },
  ],
  portrait: "/nima-hejazi-portrait.jpg",
};
