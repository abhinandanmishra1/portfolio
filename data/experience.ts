export interface ExperienceItem {
  role: string;
  company: string;
  companyUrl: string;
  location: string;
  period: string;
  isCurrent?: boolean;
  summary: string;
  highlights: string[];
  skills: string[];
}

export const experiences: ExperienceItem[] = [
  {
    role: "Software Engineer II",
    company: "Project44",
    companyUrl: "https://project44.com",
    location: "India",
    period: "Mar 2026 – Present",
    isCurrent: true,
    summary: "Driving core initiatives on the real-time supply chain visibility platform, focusing on high-throughput event processing and responsive interfaces.",
    highlights: [
      "Architecting scalable frontend and backend workflows handling high-frequency logistics events and shipment milestones.",
      "Optimizing data pipelines and frontend rendering performance for low-latency operational dashboards.",
      "Partnering with cross-functional teams to design clean, fault-tolerant distributed API contracts."
    ],
    skills: ["React", "TypeScript", "Next.js", "Java", "Spring Boot", "Kafka", "PostgreSQL", "Docker"]
  },
  {
    role: "Software Engineer I",
    company: "Project44",
    companyUrl: "https://project44.com",
    location: "India",
    period: "Feb 2025 – Mar 2026",
    summary: "Built mission-critical shipment visibility modules and modern interactive dashboard workflows.",
    highlights: [
      "Implemented resilient client-side state management and modular UI component libraries for enterprise logistics users.",
      "Engineered backend microservices and RESTful APIs with strict SLA requirements.",
      "Enhanced automated unit and integration test coverage across core visibility services."
    ],
    skills: ["React", "TypeScript", "Node.js", "REST APIs", "PostgreSQL", "Redis", "Jest"]
  },
  {
    role: "Specialist Programmer",
    company: "Infosys",
    companyUrl: "https://infosys.com",
    location: "India",
    period: "Oct 2023 – Feb 2025",
    summary: "Delivered scalable enterprise solutions, modernizing legacy systems into resilient, service-oriented architectures.",
    highlights: [
      "Engineered enterprise web applications using Angular, TypeScript, and .NET Core microservices.",
      "Designed and tuned relational database schemas and complex stored procedures in SQL Server.",
      "Contributed to data processing pipelines and backend service integrations using Scala and C#."
    ],
    skills: ["Angular", "TypeScript", "C#", ".NET Core", "SQL Server", "Scala", "Azure"]
  },
  {
    role: "Software Engineer",
    company: "Cosmocloud",
    companyUrl: "https://cosmocloud.io",
    location: "India",
    period: "Jan 2023 – Oct 2023",
    summary: "Full-stack development for a low-code/no-code backend and cloud infrastructure automation platform.",
    highlights: [
      "Built dynamic Search API templates and environment management features from scratch.",
      "Integrated automated subscription billing workflows with Zoho and third-party webhooks.",
      "Developed high-velocity frontend interfaces with React, TypeScript, and Ant Design."
    ],
    skills: ["React", "TypeScript", "Python", "FastAPI", "MongoDB", "Docker", "Ant Design"]
  }
];
