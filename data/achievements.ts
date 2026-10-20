export interface Achievement {
  title: string;
  rank: string;
  contest: string;
  year: string;
  description: string;
  link?: string;
  badge: string;
}

export const achievements: Achievement[] = [
  {
    title: "Google Kickstart Round H",
    rank: "Rank 311 (Global)",
    contest: "Google Kickstart 2022",
    year: "2022",
    description: "Achieved 311th rank globally competing against tens of thousands of top algorithmic programmers worldwide.",
    link: "https://drive.google.com/file/d/11Ej36IDaoE5f6hUwx13f02D1IpzbrPHM/view",
    badge: "Google Global Top 1%"
  },
  {
    title: "Codechef Starters",
    rank: "Rank 60 (Global)",
    contest: "Codechef Starters 2020",
    year: "2020",
    description: "Secured 60th rank globally in February Codechef Starters solving complex algorithmic challenges under strict time constraints.",
    link: "https://www.codechef.com/rankings/START1C?order=asc&search=abhimishra1&sortBy=rank",
    badge: "Global Top 100"
  },
  {
    title: "ACM ICPC Regional Contest",
    rank: "Rank 93",
    contest: "ICPC Kanpur-Mathura Region",
    year: "2021",
    description: "Ranked 93rd in the prestigious ACM-ICPC Asia Kanpur-Mathura Regional programming contest.",
    link: "https://drive.google.com/file/d/1QVzYOfo_-L49EMxLi3NCRjDb4zi0VZT3/view",
    badge: "ICPC Regional Finalist"
  },
  {
    title: "Codechef July Lunchtime",
    rank: "Rank 226 (Global)",
    contest: "Codechef Lunchtime 2021",
    year: "2021",
    description: "Placed 226th worldwide among competitive programmers in the monthly rated contest.",
    link: "https://www.codechef.com/rankings/LTIME98B?order=asc&search=abhimishra1&sortBy=rank",
    badge: "Global Ranked"
  },
  {
    title: "LeetCode Competitive Profile",
    rank: "2026 Max Rating",
    contest: "LeetCode Contest Rating",
    year: "Active",
    description: "Knight badge with peak rating of 2026, placing in the top 2% of competitive coders globally with over 1,000+ problems solved across data structures & algorithms.",
    link: "https://leetcode.com/abhinandanmishra1/",
    badge: "Knight (Top 2%)"
  }
];
