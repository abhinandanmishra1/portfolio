export interface Project {
  title: string;
  tagline: string;
  description: string;
  category: "Flagship Products" | "AI & Protocols" | "Full Stack & Systems" | "Frontend & Tooling";
  featured: boolean;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  stars?: number;
  badge?: string;
  role?: string;
}

export const projects: Project[] = [
  {
    title: "SDE Forge",
    tagline: "AI-Powered System Design (HLD & LLD) Simulator & DSA Prep Platform",
    role: "Founder & Lead Architect",
    description: "An interactive engineering interview preparation platform featuring real-time AI mock interviewer feedback, live architectural simulation sandboxes, and 50+ company-curated DSA problem sets.",
    category: "Flagship Products",
    featured: true,
    tags: ["Next.js", "AI Agents", "System Design", "LLD", "WebSockets", "Monaco Editor"],
    liveUrl: "https://sdeforge.com/",
    badge: "Founder Product"
  },
  {
    title: "CodePad",
    tagline: "Multi-Language Cloud IDE & Sandboxed Code Execution Engine",
    role: "Creator & Architect",
    description: "Browser-based competitive programming IDE built with Monaco Editor, BullMQ + Redis job queues, and an isolated execution sandbox enforcing strict CPU/memory limits with a 20-category security auditor.",
    category: "Flagship Products",
    featured: true,
    tags: ["React", "Express", "BullMQ", "Redis", "Docker", "Monaco Editor", "Railway"],
    githubUrl: "https://github.com/abhinandanmishra1/codepad",
    liveUrl: "https://codepad.abhinandanmishra.in",
    badge: "Flagship Engine"
  },
  {
    title: "AI Shipment Copilot",
    tagline: "Autonomous Workflow Copilot for Global Shipment Planning",
    role: "Creator",
    description: "Multi-agent AI orchestration system for logistics route optimization, risk factor assessment, and real-time what-if simulations with interactive geospatial timelines.",
    category: "AI & Protocols",
    featured: true,
    tags: ["Gemini API", "Multi-Agent Orchestration", "React", "TypeScript", "Vite"],
    githubUrl: "https://github.com/abhinandanmishra1/AI-Shipment-Copilot",
    badge: "AI Multi-Agent System"
  },
  {
    title: "100xHires",
    tagline: "AI-Powered Automated Technical Hiring Platform",
    role: "Creator",
    description: "End-to-end recruitment platform that leverages AI evaluators to screen technical candidates, analyze problem-solving efficiency, and generate granular competency scorecards.",
    category: "AI & Protocols",
    featured: true,
    tags: ["Next.js", "TypeScript", "AI Evaluators", "PostgreSQL", "Full Stack"],
    githubUrl: "https://github.com/abhinandanmishra1/100xHires",
    stars: 7,
    badge: "7 Stars on GitHub"
  },
  {
    title: "pr-comments-resolver-mcp",
    tagline: "Model Context Protocol Server for Autonomous GitHub PR Reviews",
    role: "Creator",
    description: "An MCP server enabling LLM coding assistants to directly discover, parse, reason through, and autonomously resolve GitHub pull request review comments and status checks.",
    category: "AI & Protocols",
    featured: true,
    tags: ["Python", "Model Context Protocol", "GitHub API", "AI Agents"],
    githubUrl: "https://github.com/abhinandanmishra1/pr-comments-resolver-mcp",
    badge: "Model Context Protocol"
  },
  {
    title: "frontend-365",
    tagline: "365 Production-Grade UI Components & Micro-Interactions",
    role: "Creator",
    description: "An intensive engineering feat documenting 365 daily production-ready frontend components, stateful interactions, and accessibility patterns built with modern React and Tailwind.",
    category: "Frontend & Tooling",
    featured: false,
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "365 Days of Code"],
    githubUrl: "https://github.com/abhinandanmishra1/frontend-365",
    liveUrl: "https://frontend-365.vercel.app",
    stars: 5,
    badge: "5 Stars on GitHub"
  },
  {
    title: "leetcode-profiler",
    tagline: "Published NPM Package for LeetCode Profile Badges & Stats",
    role: "Author & Maintainer",
    description: "Lightweight npm package that fetches and renders customizable LeetCode statistics, contest rating history, and activity heatmaps into personal portfolios with zero setup.",
    category: "Frontend & Tooling",
    featured: false,
    tags: ["TypeScript", "npm Package", "Open Source", "React", "REST API"],
    githubUrl: "https://github.com/abhinandanmishra1/leetcode-profiler",
    liveUrl: "https://leetcode-profiler-example.vercel.app/",
    stars: 2,
    badge: "Published NPM Package"
  },
  {
    title: "google-docs-clone",
    tagline: "Real-Time Collaborative Rich-Text Document Editor",
    role: "Creator",
    description: "Full-stack collaborative editor replicating Google Docs functionality with WebSocket synchronization, operational presence cursors, and rich formatting powered by Quill.js.",
    category: "Full Stack & Systems",
    featured: false,
    tags: ["Socket.io", "React", "Quill.js", "Node.js", "WebSockets"],
    githubUrl: "https://github.com/abhinandanmishra1/google-docs-clone",
    liveUrl: "https://abhidocs.vercel.app/",
    stars: 1,
    badge: "Real-Time WebSockets"
  }
];
