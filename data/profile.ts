export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  tagline: string;
  headline: string;
  currentRole: string;
  company: string;
  companyUrl: string;
  location: string;
  bio: string[];
  stats: {
    label: string;
    value: string;
  }[];
  links: {
    github: string;
    linkedin: string;
    twitter: string;
    blog: string;
    resume: string;
    email: string;
  };
}

export const profile: Profile = {
  name: "Abhinandan Mishra",
  firstName: "Abhinandan",
  lastName: "Mishra",
  tagline: "Software Engineer II @ Project44",
  headline: "Building scalable distributed systems & high-performance web applications.",
  currentRole: "Software Engineer II",
  company: "Project44",
  companyUrl: "https://project44.com",
  location: "India",
  bio: [
    "I am a full-stack software engineer with deep expertise across modern web technologies, distributed systems, and developer tooling.",
    "Currently at Project44, I focus on building reliable, high-throughput supply chain visibility platforms and intuitive UI architectures. Previously, I contributed to enterprise-grade systems at Infosys and fast-paced product engineering at Cosmocloud.",
    "Outside work, I explore system design patterns, write in-depth technical articles, and build open-source tools like LeetCode profilers and MCP servers."
  ],
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "Public Repositories", value: "80+" },
    { label: "Technical Articles", value: "25+" },
    { label: "GitHub Followers", value: "60+" }
  ],
  links: {
    github: "https://github.com/abhinandanmishra1",
    linkedin: "https://www.linkedin.com/in/abhinandanmishra1/",
    twitter: "https://x.com/abhinandan_0001",
    blog: process.env.NEXT_PUBLIC_BLOG_URL || "https://blog.abhinandanmishra.in",
    resume: "https://drive.google.com/file/d/1Gsj-Ww_6gSDKAXeiWW3r6K09JVdwHxnu/view",
    email: "mailto:abhinandanmishra010@gmail.com"
  }
};
