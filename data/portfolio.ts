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
  github?: string;
  stars?: string;
  metric?: string;
  tags?: string[];
  longDescription?: string;
  highlights?: string[];
}

export interface ArticleItem {
  title: string;
  href: string;
  date: string; // "Nov 2025"
  isoDate: string; // "2025-11-04"
  summary?: string;
  tags?: string[];
  readTime?: string;
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
  tag?: string;
  takeaways?: string[];
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

export interface IndustryRecognition {
  id: string;
  badge: string;
  title: string;
  organization: string;
  date: string;
  summary: string;
  story: string[];
  image: string;
  imageWidth?: number;
  imageHeight?: number;
  linkedinUrl: string;
  tags: string[];
}

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface BioSegmentLink {
  text: string;
  href: string;
  external?: boolean;
}

export type BioSegment = string | BioSegmentLink;

export const portfolio = {
  name: 'Abhinandan Mishra',
  tagline: 'SDE-II · Distributed Systems · Developer Tools',
  summary:
    'SDE-II at Project44, co-founder of SDE Forge, and competitive programmer. Writes about database internals, caching, and system design.',
  avatar: 'https://github.com/abhinandanmishra1.png',
  email: 'abhinandanmishra360@gmail.com',
  blogUrl: '/articles',
  location: 'Bengaluru, India',
  availableFor: 'Systems · Developer Tools · System Design Education',
} as const;

export const navLinks: NavLink[] = [
  { label: 'Projects', href: '/projects' },
  { label: 'Articles', href: '/articles' },
  { label: 'Research', href: '/research' },
  { label: 'Honors', href: '/honors' },
];

export const heroBio: BioSegment[][] = [
  [
    'I am an engineer passionate about distributed systems, low-latency execution engines, and developer productivity tooling. Currently, I am an SDE-II at ',
    { text: 'Project44', href: 'https://project44.com', external: true },
    ', optimizing core logistics APIs serving 10M+ daily tracking updates and architecting internal developer tooling.',
  ],
  [
    'On the side, I am a co-founder of ',
    { text: 'SDE Forge', href: 'https://sdeforge.com', external: true },
    ' (an interactive system design simulator and mock interviewer) and creator of ',
    { text: 'CodePad', href: 'https://codepad.abhinandanmishra.in', external: true },
    ' (a sandboxed multi-language browser IDE powered by BullMQ & Docker).',
  ],
  [
    'I have a strong background in competitive programming (Google Kickstart #311, Codechef #60, ICPC #93, LeetCode 2026 Knight) and frequently write technical deep dives on database isolation, caching topologies, and system architecture.',
  ],
];

export const socialLinks: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/abhinandanmishra1', icon: 'github', handle: 'abhinandanmishra1' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abhinandanmishra1', icon: 'linkedin', handle: 'in/abhinandanmishra1' },
  { label: 'X / Twitter', href: 'https://x.com/abhinandan_0001', icon: 'twitter', handle: '@abhinandan_0001' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/abhinandanmishra1', icon: 'leetcode', handle: '2026 Knight' },
  { label: 'Email', href: 'mailto:abhinandanmishra360@gmail.com', icon: 'mail', handle: 'abhinandanmishra360@gmail.com' },
];

export const exploreCards: ExploreCard[] = [
  {
    label: 'Flagship',
    count: '5 Tier-1 Products',
    title: 'Production systems, cloud execution engines, and developer tools.',
    description: 'From real-time logistics APIs to sandboxed IDEs — work shipped at scale.',
    target: '/projects',
    tone: 'accent',
  },
  {
    label: 'Essays',
    count: '7+ Articles',
    title: 'Deep dives into database internals, caching topologies, and system design.',
    description: 'Battle-tested frameworks written for engineers, not for hype.',
    target: '/articles',
    tone: 'neutral',
  },
  {
    label: 'Research',
    count: '5+ Reading Notes',
    title: 'Architectural breakdowns of DDIA, SSI, XFetch, and MCP.',
    description: 'Papers and books distilled into actionable mental models.',
    target: '/research',
    tone: 'neutral',
  },
  {
    label: 'Honors',
    count: 'Top 1% CP Ranks',
    title: 'Competitive programming awards from Google Kickstart, ICPC, and Codechef.',
    description: 'Proof in the ranking, not in the talk.',
    target: '/honors',
    tone: 'neutral',
  },
];

export const recentProjects: ProjectItem[] = [
  {
    name: 'SDE Forge',
    role: 'Co-Founder & Lead Architect',
    description: 'AI system design simulator with live architecture sandboxes and mock interview agents.',
    href: 'https://sdeforge.com',
    github: 'https://github.com/abhinandanmishra1',
    metric: 'Co-Founder',
    tags: ['Next.js', 'Redis', 'LLM Agents', 'TypeScript', 'Tailwind'],
    longDescription:
      'An end-to-end interactive system design platform designed to bridge the gap between static theory and real-world system architecture. Features an AI mock interviewer that conducts realistic design rounds and evaluates throughput, availability, and failure domains.',
    highlights: [
      'Interactive visual canvas with live simulation of traffic spikes and component failures',
      'Adaptive AI interviewer evaluating architectural trade-offs against industry rubrics',
      'Hundreds of active engineers preparing for staff and senior design rounds',
    ],
  },
  {
    name: 'CodePad',
    role: 'Creator & Architect',
    description: 'Multi-language cloud IDE with Redis/BullMQ queues and Docker sandboxes.',
    href: 'https://codepad.abhinandanmishra.in',
    github: 'https://github.com/abhinandanmishra1/codepad',
    metric: 'Creator',
    tags: ['Docker', 'BullMQ', 'WebSocket', 'Node.js', 'React'],
    longDescription:
      'A low-latency, multi-language remote code execution platform. Designed with hardened ephemeral Docker containers, Redis job queues, and bidirectional WebSocket streams for sub-second terminal feedback.',
    highlights: [
      'Isolated ephemeral Docker containers with cgroup CPU/memory resource limits and network isolation',
      'BullMQ asynchronous queue managing concurrent run requests with graceful backpressure',
      'Real-time streaming stdout/stderr outputs via persistent WebSockets',
    ],
  },
  {
    name: 'Lore',
    role: 'Creator',
    description: 'Context memory & knowledge retention engine for developers and AI agents.',
    href: 'https://github.com/abhinandanmishra1/lore',
    github: 'https://github.com/abhinandanmishra1/lore',
    metric: 'Creator',
    tags: ['TypeScript', 'Memory Engine', 'CLI', 'AI Agents'],
    longDescription:
      'A persistent memory engine designed to eliminate context loss across agent sessions and developer workflows. Captures architectural decisions, bug roots, and workflow conventions into a searchable graph.',
    highlights: [
      'Zero-latency local index with semantic lookup and keyword fallbacks',
      'Lightweight plugin architecture compatible with modern agentic IDEs',
      'Prevents repetitive context re-explanation across multi-turn sessions',
    ],
  },
  {
    name: 'Record-Demo',
    role: 'Creator',
    description: 'Autonomous agent web demo recorder with CDP-attach and voiceover synchronization.',
    href: 'https://github.com/abhinandanmishra1/record-demo',
    github: 'https://github.com/abhinandanmishra1/record-demo',
    metric: 'Creator',
    tags: ['Playwright', 'CDP', 'Chrome', 'Automation', 'Audio'],
    longDescription:
      'An automated tool that transforms interactive product walkthroughs into professional screen recordings with synchronized synthetic voiceovers and cursor highlights via Chrome DevTools Protocol.',
    highlights: [
      'Direct Chrome DevTools Protocol (CDP) session attachment for smooth 60fps frame capture',
      'Deterministic script execution with smooth bezier-curve cursor animations',
      'Automated text-to-speech audio alignment matching on-screen DOM interactions',
    ],
  },
  {
    name: 'BlinkCDN',
    role: 'Creator',
    description: 'Self-hosted CDN engine using GitHub repositories as storage and Netlify Edge for global distribution.',
    href: 'https://blinkcdn.netlify.app/',
    github: 'https://github.com/abhinandanmishra1/blinkcdn',
    metric: 'Live Service',
    tags: ['Edge CDN', 'Netlify Edge', 'GitHub API', 'Node.js', 'Serverless'],
    longDescription:
      'A self-hosted CDN solution leveraging your GitHub repository as the storage backend and Netlify Edge Network for lightning-fast worldwide content delivery without recurring S3 costs.',
    highlights: [
      'Uses GitHub REST API as version-controlled object storage with zero database maintenance',
      'Netlify Edge CDN caches and serves static assets worldwide with sub-50ms latency',
      'Basic Auth protected dashboard with drag-and-drop uploads and instant gallery search',
    ],
  },
];

export const recentArticles: ArticleItem[] = [
  {
    title: 'System Design: A Battle-Tested Framework for Large-Scale Architectures',
    href: '/articles/system-design-approaching-problem',
    date: 'Nov 2025',
    isoDate: '2025-11',
    summary:
      'A comprehensive guide on approaching system design problems systematically — from requirements clarification and back-of-the-envelope calculations to high-level architecture and deep dives.',
    tags: ['System Design', 'Architecture', 'Scalability'],
    readTime: '12 min read',
  },
  {
    title: 'Understanding Databases for System Design: ACID & Isolation Levels',
    href: '/articles/understanding-databases-isolation',
    date: 'Oct 2025',
    isoDate: '2025-10',
    summary:
      'A deep dive into ACID properties, ANSI SQL isolation levels, concurrency anomalies (Dirty Read, Non-Repeatable Read, Phantom Read), and modern MVCC implementations in PostgreSQL and MySQL.',
    tags: ['Databases', 'ACID', 'PostgreSQL', 'Internals'],
    readTime: '15 min read',
  },
  {
    title: 'System Design: All About Caching & Cache Stampede Mitigation',
    href: '/articles/system-design-caching',
    date: 'Sep 2025',
    isoDate: '2025-09',
    summary:
      'Everything you need to know about caching in distributed systems: cache eviction strategies (LRU, LFU), caching patterns (Cache-Aside, Write-Through, Write-Behind), and mitigating cache stampede.',
    tags: ['Caching', 'Redis', 'Performance', 'Distributed Systems'],
    readTime: '10 min read',
  },
  {
    title: 'Segment Trees with Lazy Propagation: Range Queries in O(log N)',
    href: '/articles/segment-tree-lazy-propagation',
    date: 'Aug 2025',
    isoDate: '2025-08',
    summary:
      'Master Segment Trees and Lazy Propagation for solving complex range query and update problems efficiently. Detailed explanations with clean C++ and TypeScript implementations.',
    tags: ['Data Structures', 'Algorithms', 'Competitive Programming'],
    readTime: '14 min read',
  },
  {
    title: 'React Hooks Deep Dive: Under the Hood of Fiber & State Queues',
    href: '/articles/react-hooks-deep-dive',
    date: 'Jul 2025',
    isoDate: '2025-07',
    summary:
      'Ever wondered how useState and useEffect actually work inside React? An in-depth exploration of the Fiber architecture, linked lists of memoized states, and reconciliation cycles.',
    tags: ['React', 'JavaScript', 'Frontend', 'Internals'],
    readTime: '11 min read',
  },
];

export const papers: PaperItem[] = [
  {
    title: 'A Critique of ANSI SQL Isolation Levels',
    authors: 'Berenson, Bernstein, Gray, Melton, O’Neil, O’Neil (1995)',
    note: 'Why "serializable" in the standard is incomplete — dissects anomalies like Write Skew and clarifies snapshot isolation.',
    href: '/research',
    tag: 'Databases',
    takeaways: [
      'The original 1992 ANSI SQL definitions using phenomenon diagrams failed to capture Snapshot Isolation anomalies.',
      'Introduces Write Skew: two transactions concurrently read overlapping state and perform non-overlapping writes that violate global invariants.',
      'Snapshot Isolation provides repeatable read without read locks, but requires Serializable Snapshot Isolation (SSI) for true serializability.',
    ],
  },
  {
    title: 'Optimal Probabilistic Cache Expiration with XFetch',
    authors: 'Vattani, Chierichetti, Lowenstein (2015)',
    note: 'TTLs as a probability distribution rather than a hard cutoff — prevents cache stampedes without cold cache recompute storms.',
    href: '/research',
    tag: 'Caching',
    takeaways: [
      'Under heavy read loads, hard TTLs cause thousands of concurrent misses at expiration (thundering herd).',
      'XFetch calculates an early recompute probability: e^(-delta * beta * log(rand()) / TTL) > remaining_time.',
      'Near expiration, a single worker proactively refreshes the cache in the background while other requests receive warm data.',
    ],
  },
  {
    title: 'Designing Data-Intensive Applications',
    authors: 'Martin Kleppmann (2017)',
    note: 'Foundational mental models on replication topologies, partition strategies, consensus protocols, and stream processing.',
    href: '/research',
    tag: 'Distributed Systems',
    takeaways: [
      'Single-leader vs multi-leader vs leaderless: trade-offs in write scalability, conflict resolution, and consistency.',
      'SSTables & LSM-Trees vs B-Trees: sequential write speed vs deterministic read lookups.',
      'Linearizability vs Serializability: single-object recency guarantees vs multi-object transaction safety.',
    ],
  },
  {
    title: 'Model Context Protocol (MCP) Specification',
    authors: 'Anthropic & Open Source Community (2024)',
    note: 'Standardized open protocol enabling seamless, secure connectivity between LLM agents and external data sources & tools.',
    href: '/research',
    tag: 'AI Infrastructure',
    takeaways: [
      'Decouples agent clients from specialized tool backends via JSON-RPC 2.0 transport (stdio / SSE).',
      'Provides standard primitives for Resources (read-only data), Tools (executable actions), and Prompts (reusable templates).',
      'Enables modular agent architectures without bespoke tool glue code.',
    ],
  },
];

export const experience: ExperienceItem[] = [
  {
    company: 'Project44',
    role: 'SDE-II',
    period: 'Feb 2025 — Present',
    location: 'Bengaluru, India',
    href: 'https://project44.com',
    description:
      'Optimizing core logistics APIs serving 10M+ daily tracking updates and architecting internal developer tooling.',
    highlights: [
      'Shaved p99 latency on high-throughput tracking endpoints with targeted caching and connection pooling.',
      'Architected internal developer tooling and telemetry dashboards that cut onboarding time across engineering pods.',
      'Engineered automated anomaly detection for shipment event ingestion pipelines.',
    ],
  },
  {
    company: 'Infosys',
    role: 'Specialist Programmer',
    period: 'Oct 2023 — Feb 2025',
    location: 'India',
    description:
      'Built and maintained production-grade services for enterprise clients; owned backend systems and integrations.',
    highlights: [
      'Engineered resilient REST APIs and microservice endpoints handling multi-tenant enterprise traffic.',
      'Streamlined database indexing and query patterns to reduce query bottlenecks in legacy reporting services.',
    ],
  },
  {
    company: 'Cosmocloud',
    role: 'Software Engineer',
    period: 'Jan 2023 — Oct 2023',
    location: 'Remote',
    description:
      'Developed platform features and APIs for a cloud-native developer platform.',
    highlights: [
      'Implemented core API gateway logic and dynamic schema validation pipelines.',
      'Contributed to no-code backend orchestration engine and serverless function triggers.',
    ],
  },
  {
    company: 'Scaler',
    role: 'SDE Intern',
    period: 'Jul 2022 — Dec 2022',
    location: 'Remote',
    description:
      'Worked on internal tools and learning platform features alongside senior engineers.',
    highlights: [
      'Developed student evaluation dashboards and interactive coding environment enhancements.',
      'Assisted in performance profiling and frontend rendering optimizations.',
    ],
  },
];

export const honors: HonorItem[] = [
  {
    contest: 'Google Kickstart — Round H',
    rank: '#311',
    detail: 'Global rank out of 15,000+ international competitive programmers.',
    year: '2023',
  },
  {
    contest: 'Codechef Starters',
    rank: '#60',
    detail: 'Top 60 finish in a globally rated competitive programming contest.',
    year: '2023',
  },
  {
    contest: 'ICPC Asia Regional',
    rank: '#93',
    detail: 'Team regional rank in the world’s premier collegiate algorithm competition.',
    year: '2022',
  },
  {
    contest: 'LeetCode',
    rank: 'Knight (2026)',
    detail: 'Top 1.5% worldwide rating with over 1,000+ algorithm problems solved.',
    year: '2026',
  },
];

export const recognitions: IndustryRecognition[] = [
  {
    id: 'deepmind-hackathon',
    badge: 'Hackathon Winner',
    organization: 'Google DeepMind',
    title: 'AI-Powered Real-Time Scam & Fraud Detection',
    date: 'Oct 2026',
    summary:
      'Won the Google DeepMind Bangalore Hackathon with an AI-powered Android application that detects potential digital frauds—like suspicious UPI payment requests, phishing URLs, and SMS scams—warning users in real time with vernacular voice guidance.',
    story: [
      'Built in collaboration with Dheeraj Motupalli during an intensive build sprint at Google DeepMind Bangalore.',
      'Leveraged Gemini multimodal reasoning paired with speech-to-text and text-to-speech models for instant vernacular fraud alerts.',
      'Engineered specifically for non-technical users in India who are vulnerable to deceptive social engineering and digital payment coercion.',
    ],
    image: '/images/honors/deepmind-hackathon.jpg',
    imageWidth: 1152,
    imageHeight: 1536,
    linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7482665963629469696/',
    tags: ['Google DeepMind', 'Gemini AI', 'Android', 'Vernacular Voice', 'Fraud Prevention'],
  },
  {
    id: 'project44-hackathon-milestone',
    badge: '2x Hackathon Winner & Judge',
    organization: 'project44',
    title: 'One Year Milestone: 2x AI Hackathon Winner & Season Judge',
    date: '2026',
    summary:
      'Celebrating one year as SDE-II at project44—winning the internal AI in Action Hackathon twice consecutively and subsequently invited to serve as an official Judge for the next season.',
    story: [
      'Won the project44 AI in Action Hackathon twice consecutively for high-impact AI developer tooling.',
      'Served as an official Judge evaluating cross-functional engineering innovations in the following hackathon season.',
      'Architected a Figma-to-Code generation pipeline leveraging Figma MCP server to produce production-grade UI components in minutes.',
      'Engineered a live UI Inspector enabling developers to visually inspect production interfaces and prompt real-time codebase modifications.',
    ],
    image: '/images/honors/project44-anniversary.jpg',
    imageWidth: 800,
    imageHeight: 1558,
    linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7432277851103723520/',
    tags: ['project44', 'SDE-II', 'Hackathon Judge', 'Figma MCP', 'Developer Tooling'],
  },
  {
    id: 'google-cloudrun-summit',
    badge: 'Selected Attendee',
    organization: 'Google Cloud',
    title: 'Google Cloud Run Summit: Serverless AI Agents & Inference',
    date: '2025 / 2026',
    summary:
      'Selected to attend an exclusive, intensive Google Cloud Run technical event at Google India (Kyoto Office), deep-diving into serverless architectures, containerized inference, and agent-to-agent communication.',
    story: [
      'Interactive masterclasses and hands-on labs led by Google Cloud leaders including Steren Giannini, Arun Ravindran, Amit Mittal, Shruti Mantri, and Harish Sharma.',
      'Deep-dived into architecting scalable inference servers and multi-agent communication topologies without operational infrastructure overhead.',
      'Explored real-world patterns for bridging low-latency containerized microservices and production AI deployment.',
    ],
    image: '/images/honors/google-cloudrun.jpg',
    imageWidth: 800,
    imageHeight: 409,
    linkedinUrl: 'https://www.linkedin.com/posts/abhinandanmishra1_googlecloud-cloudrun-serverless-share-7383114611945869313-5esi/',
    tags: ['Google Cloud', 'Cloud Run', 'Serverless', 'AI Agents', 'Inference Servers'],
  },
];

export type Portfolio = typeof portfolio;
