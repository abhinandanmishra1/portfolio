// Single source of truth for all portfolio content.
// Edit this file to update the site — no JSX changes required.

export interface SocialLink {
  label: string;
  href: string;
  icon: 'github' | 'linkedin' | 'twitter' | 'leetcode' | 'mail';
  handle: string;
}

export interface ProjectItem {
  name: string;
  role: string;
  description: string;
  href?: string;
  stars?: string;
  metric?: string;
  tags?: string[];
}

export interface ArticleItem {
  title: string;
  href: string;
  date: string; // "Nov 2025"
  isoDate: string; // "2025-11-04"
}

export interface ExploreCard {
  label: string;
  count: string;
  title: string;
  description: string;
  target: string;
  tone: 'accent' | 'neutral';
}

export interface PaperItem {
  title: string;
  authors: string;
  note: string;
  href?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  href?: string;
  highlights?: string[];
}

export interface HonorItem {
  contest: string;
  rank: string;
  detail: string;
  year: string;
}

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export const portfolio = {
  name: 'Abhinandan Mishra',
  tagline: 'Software Engineer · Distributed Systems · Developer Tools',
  summary:
    'Software Engineer II at Project44, founder of SDE Forge, and competitive programmer. Writes about database internals, caching, and system design.',
  avatar: 'https://github.com/abhinandanmishra1.png',
  email: 'abhinandanmishra360@gmail.com',
  blogUrl: 'https://blog.abhinandanmishra.in',
  location: 'Bengaluru, India',
  availableFor: 'Systems · Developer Tools · System Design Education',
} as const;

export const navLinks: NavLink[] = [
  { label: 'Projects', href: '#projects' },
  { label: 'Writing', href: '#writing' },
  { label: 'Research', href: '#research' },
  { label: 'Experience', href: '#experience' },
  { label: 'Honors', href: '#honors' },
  { label: 'Blog', href: 'https://blog.abhinandanmishra.in', external: true },
];

export const heroBio: { text: string; links: { label: string; href: string }[] }[] = [
  {
    text: 'I am a software engineer passionate about distributed systems, low-latency execution engines, and developer productivity tooling. Currently, I am a Software Engineer II at',
    links: [{ label: 'Project44', href: 'https://project44.com' }],
  },
  {
    text: 'optimizing core logistics APIs serving 10M+ daily tracking updates and architecting internal developer tooling. On the side, I am the founder of',
    links: [
      { label: 'SDE Forge', href: 'https://sdeforge.com' },
      { label: 'CodePad', href: 'https://codepad.abhinandanmishra.in' },
    ],
  },
  {
    text: 'an interactive system design simulator and a sandboxed multi-language browser IDE powered by BullMQ & Docker. I have a strong background in competitive programming (Google Kickstart #311, Codechef #60, LeetCode 2026 Knight) and frequently write technical deep dives on database isolation, caching topologies, and system architecture.',
    links: [],
  },
];

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/abhinandanmishra1', icon: 'github', handle: 'abhinandanmishra1' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abhinandanmishra1', icon: 'linkedin', handle: 'in/abhinandanmishra1' },
  { label: 'X / Twitter', href: 'https://x.com/abhinandan360', icon: 'twitter', handle: '@abhinandan360' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/abhinandanmishra1', icon: 'leetcode', handle: '2026 Knight' },
  { label: 'Email', href: 'mailto:abhinandanmishra360@gmail.com', icon: 'mail', handle: 'abhinandanmishra360@gmail.com' },
];

export const exploreCards: ExploreCard[] = [
  {
    label: 'Flagship',
    count: '6+ Projects',
    title: 'Production systems, cloud execution engines, and developer tools.',
    description: 'From real-time logistics APIs to sandboxed IDEs — work shipped at scale.',
    target: '#projects',
    tone: 'accent',
  },
  {
    label: 'Essays',
    count: '7+ Articles',
    title: 'Deep dives into database internals, caching topologies, and system design.',
    description: 'Battle-tested frameworks written for engineers, not for hype.',
    target: '#writing',
    tone: 'neutral',
  },
  {
    label: 'Research',
    count: '5+ Reading Notes',
    title: 'Architectural breakdowns of DDIA, SSI, XFetch, and MCP.',
    description: 'Papers and books distilled into actionable mental models.',
    target: '#research',
    tone: 'neutral',
  },
  {
    label: 'Honors',
    count: 'Top 1% CP Ranks',
    title: 'Competitive programming awards from Google Kickstart, ICPC, and Codechef.',
    description: 'Proof in the ranking, not in the talk.',
    target: '#honors',
    tone: 'neutral',
  },
];

export const recentProjects: ProjectItem[] = [
  {
    name: 'SDE Forge',
    role: 'Founder & Lead Architect',
    description: 'AI system design simulator with live architecture sandboxes and mock interview agents.',
    href: 'https://sdeforge.com',
    metric: 'Founder',
    tags: ['Next.js', 'Redis', 'LLM Agents'],
  },
  {
    name: 'CodePad',
    role: 'Creator',
    description: 'Multi-language cloud IDE with Redis/BullMQ queues and Docker sandboxes.',
    href: 'https://codepad.abhinandanmishra.in',
    metric: 'Creator',
    tags: ['Docker', 'BullMQ', 'WebSocket'],
  },
  {
    name: 'AI Shipment Copilot',
    role: 'Creator',
    description: 'Multi-agent logistics planning and route optimization assistant.',
    href: 'https://github.com/abhinandanmishra1/AI-Shipment-Copilot',
    metric: 'Creator',
    tags: ['Multi-agent', 'Routing'],
  },
  {
    name: '100xHires',
    role: 'Creator',
    description: 'AI-powered technical candidate evaluation and screening platform.',
    href: 'https://github.com/abhinandanmishra1/100xHires',
    metric: 'Creator',
    tags: ['AI', 'Evaluation'],
  },
  {
    name: 'pr-comments-resolver-mcp',
    role: 'Creator',
    description: 'Model Context Protocol server for automated PR review resolution.',
    href: 'https://github.com/abhinandanmishra1/pr-comments-resolver-mcp',
    metric: 'Creator',
    tags: ['MCP', 'DX'],
  },
];

export const recentArticles: ArticleItem[] = [
  {
    title: 'System Design: A Battle-Tested Framework for Large-Scale Architectures',
    href: 'https://blog.abhinandanmishra.in/articles/system-design-approaching-problem',
    date: 'Nov 2025',
    isoDate: '2025-11',
  },
  {
    title: 'Understanding Databases for System Design: ACID & Isolation Levels',
    href: 'https://blog.abhinandanmishra.in/articles/understanding-databases-isolation',
    date: 'Oct 2025',
    isoDate: '2025-10',
  },
  {
    title: 'System Design: All About Caching & Cache Stampede Mitigation',
    href: 'https://blog.abhinandanmishra.in/articles/system-design-caching',
    date: 'Sep 2025',
    isoDate: '2025-09',
  },
  {
    title: 'Segment Trees with Lazy Propagation: Range Queries in O(log N)',
    href: 'https://blog.abhinandanmishra.in/articles/segment-tree-lazy-propagation',
    date: 'Aug 2025',
    isoDate: '2025-08',
  },
  {
    title: 'React Hooks Deep Dive: Under the Hood of Fiber & State Queues',
    href: 'https://blog.abhinandanmishra.in/articles/react-hooks-deep-dive',
    date: 'Jul 2025',
    isoDate: '2025-07',
  },
];

export const papers: PaperItem[] = [
  {
    title: 'A Critique of ANSI SQL Isolation Levels',
    authors: 'Berenson, Gray et al.',
    note: 'Why "serializable" in the standard is a lie — and the anomaly taxonomy that replaced it.',
  },
  {
    title: 'Optimal Probabilistic Cache Expiration with XFetch',
    authors: 'Vattani et al.',
    note: 'TTLs as a distribution, not a constant — how to cut stampedes without hot-recompute storms.',
  },
  {
    title: 'Designing Data-Intensive Applications',
    authors: 'Martin Kleppmann',
    note: 'Reading notes on replication, partitioning, and consensus — the durable backbone of every interview.',
  },
  {
    title: 'Model Context Protocol Architecture & Agent Workflows',
    authors: 'Anthropic + community notes',
    note: 'How MCP composes tools, resources, and prompts into composable agent contexts.',
  },
];

export const experience: ExperienceItem[] = [
  {
    company: 'Project44',
    role: 'Software Engineer II',
    period: 'Feb 2025 — Present',
    location: 'Bengaluru, India',
    href: 'https://project44.com',
    description:
      'Optimizing core logistics APIs serving 10M+ daily tracking updates and architecting internal developer tooling.',
    highlights: [
      'Shaved p99 latency on high-throughput tracking endpoints.',
      'Built internal tooling that cut onboarding time across engineering pods.',
    ],
  },
  {
    company: 'Infosys',
    role: 'Specialist Programmer',
    period: 'Oct 2023 — Feb 2025',
    location: 'India',
    description:
      'Built and maintained production-grade services for enterprise clients; owned backend systems and integrations.',
  },
  {
    company: 'Cosmocloud',
    role: 'Software Engineer',
    period: 'Jan 2023 — Oct 2023',
    location: 'Remote',
    description:
      'Developed platform features and APIs for a cloud-native developer platform.',
  },
  {
    company: 'Scaler',
    role: 'SDE Intern',
    period: 'Jul 2022 — Dec 2022',
    location: 'Remote',
    description:
      'Worked on internal tools and learning platform features alongside senior engineers.',
  },
];

export const honors: HonorItem[] = [
  {
    contest: 'Google Kickstart — Round H',
    rank: '#311',
    detail: 'Global rank out of 15,000+ participants.',
    year: '2023',
  },
  {
    contest: 'Codechef Starters',
    rank: '#60',
    detail: 'Top finish in a competitive rated round.',
    year: '2023',
  },
  {
    contest: 'ICPC Regional',
    rank: '#93',
    detail: 'Team regional ranking in the premier collegiate CP contest.',
    year: '2022',
  },
  {
    contest: 'LeetCode',
    rank: 'Knight',
    detail: '2026 peak rating — 1000+ problems solved.',
    year: '2026',
  },
];

export type Portfolio = typeof portfolio;
