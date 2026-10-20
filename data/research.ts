export interface ResearchItem {
  title: string;
  category: "Distributed Systems" | "System Design" | "Algorithms" | "AI & Protocols";
  authorOrSource: string;
  status: "Completed" | "Currently Exploring" | "Reference";
  keyTakeaways: string;
  tags: string[];
  link?: string;
}

export const researchItems: ResearchItem[] = [
  {
    title: "Designing Data-Intensive Applications (DDIA)",
    category: "Distributed Systems",
    authorOrSource: "Martin Kleppmann",
    status: "Completed",
    keyTakeaways: "Deep dive into replication models (single/multi-leader, leaderless), SSTables and LSM-trees vs B-trees, consensus protocols (Paxos, Raft), and linearizability vs eventual consistency.",
    tags: ["Distributed Systems", "Storage Engines", "Consensus", "Transactions"]
  },
  {
    title: "Database Isolation Levels & Concurrency Anomalies",
    category: "System Design",
    authorOrSource: "ANSI SQL vs Berenson et al. / PostgreSQL Docs",
    status: "Reference",
    keyTakeaways: "Analysis of Dirty Read, Non-repeatable Read, Phantom Read, and Write Skew anomalies across Read Committed, Repeatable Read, and Serializable snapshot isolation (SSI).",
    tags: ["ACID", "MVCC", "PostgreSQL", "Concurrency"]
  },
  {
    title: "Multi-Tier Caching & Cache Stampede Mitigation",
    category: "System Design",
    authorOrSource: "Distributed Caching Architectures",
    status: "Reference",
    keyTakeaways: "Comparison of Cache-Aside, Read-Through, and Write-Behind patterns with probabilistic early expiration (XFetch algorithm) to prevent thundering herd problems on Redis clusters.",
    tags: ["Redis", "Caching", "Performance", "High Availability"]
  },
  {
    title: "Model Context Protocol (MCP) Specification",
    category: "AI & Protocols",
    authorOrSource: "Anthropic / Open Standards",
    status: "Currently Exploring",
    keyTakeaways: "Practical implementation of standardized JSON-RPC 2.0 communication protocols between LLM orchestrators and client environments for secure tool invocation and resource discovery.",
    tags: ["MCP", "LLM Tooling", "AI Agents", "Python"]
  },
  {
    title: "Segment Trees: Lazy Propagation & Coordinate Compression",
    category: "Algorithms",
    authorOrSource: "Competitive Programming & Advanced Data Structures",
    status: "Completed",
    keyTakeaways: "Implementing dynamic range updates in O(log N) using delayed push-downs and coordinate discretization for sparse coordinate spaces up to 10^9.",
    tags: ["Segment Trees", "DSA", "Range Queries", "Optimization"]
  }
];
