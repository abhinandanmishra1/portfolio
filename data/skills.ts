export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level?: "Expert" | "Proficient" | "Familiar";
    iconName?: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React 19 / 18", level: "Expert" },
      { name: "Next.js (App Router)", level: "Expert" },
      { name: "TypeScript", level: "Expert" },
      { name: "JavaScript (ES6+)", level: "Expert" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Angular", level: "Proficient" },
      { name: "HTML5 / Semantic Web", level: "Expert" },
      { name: "CSS3 / SCSS / Modules", level: "Expert" },
      { name: "React Query", level: "Proficient" }
    ]
  },
  {
    title: "Backend & Systems",
    skills: [
      { name: "Node.js & Express", level: "Expert" },
      { name: "Java & Spring Boot", level: "Proficient" },
      { name: "Python & FastAPI", level: "Proficient" },
      { name: "C# & .NET Core", level: "Proficient" },
      { name: "NestJS", level: "Proficient" },
      { name: "Apache Kafka", level: "Proficient" },
      { name: "RESTful API Design", level: "Expert" },
      { name: "GraphQL", level: "Proficient" },
      { name: "Microservices", level: "Proficient" }
    ]
  },
  {
    title: "Databases & Caching",
    skills: [
      { name: "PostgreSQL", level: "Expert" },
      { name: "Redis Caching", level: "Proficient" },
      { name: "MongoDB", level: "Proficient" },
      { name: "MySQL", level: "Proficient" },
      { name: "SQL Server", level: "Proficient" },
      { name: "Database Indexing & Isolation", level: "Proficient" }
    ]
  },
  {
    title: "DevOps & Tooling",
    skills: [
      { name: "Docker & Containers", level: "Proficient" },
      { name: "Kubernetes Basics", level: "Familiar" },
      { name: "Git & GitHub Workflows", level: "Expert" },
      { name: "Vercel / Cloud Run", level: "Proficient" },
      { name: "CI/CD Pipelines", level: "Proficient" },
      { name: "Model Context Protocol (MCP)", level: "Proficient" },
      { name: "Linux / Shell Scripting", level: "Proficient" }
    ]
  }
];
