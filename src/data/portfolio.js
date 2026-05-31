export const RESUME_PDF = '/resume.pdf'

export const developer = {
  name: 'Om Kesharwani',
  role: 'Frontend Developer',
  tagline:
    'I craft interfaces with the precision of a product engineer — fast, intentional, and built to ship.',
  email: 'kesharwanio685@gmail.com',
  profileImage: '/profile.jpg',
  education: {
    degree: 'B.Tech in Smart Manufacturing',
    institute: 'IIITDM Jabalpur',
    period: '2023–2027',
  },
  social: {
    github: 'https://github.com/Om-Beast',
    linkedin: 'https://www.linkedin.com/in/omkesharwanidev/',
    codeforces: 'https://codeforces.com/profile/om_kesharwani',
    leetcode: 'https://leetcode.com/u/om_kesharwani/',
  },
}

export const typingRoles = [
  'Frontend Developer',
  'React Developer',
  'Codeforces Specialist',
]

export const heroAchievements = [
  {
    id: 'codeforces',
    emoji: '🏆',
    title: 'Codeforces Specialist',
    subtitle: 'Competitive programming',
    href: 'https://codeforces.com/profile/om_kesharwani',
    accent: 'cyan',
  },
  {
    id: 'leetcode',
    emoji: '🧩',
    title: 'LeetCode Problem Solver',
    subtitle: 'Data structures & algorithms',
    href: 'https://leetcode.com/u/om_kesharwani/',
    accent: 'violet',
  },
  {
    id: 'fullstack',
    emoji: '⚡',
    title: 'MERN & AI Full Stack Developer',
    subtitle: 'End-to-end product builder',
    href: 'https://www.linkedin.com/in/omkesharwanidev/',
    accent: 'fuchsia',
  },
]

export const floatingTech = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Framer Motion',
  'Node.js',
  'PostgreSQL',
  'Gemini AI',
]

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'cp', label: 'CP' },
  { id: 'resume', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
]

export const skills = [
  {
    category: 'Frontend',
    color: 'cyan',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Responsive UI'],
  },
  {
    category: 'Backend',
    color: 'violet',
    items: ['Node.js', 'Express.js', 'REST APIs', 'PostgreSQL', 'MongoDB'],
  },
  {
    category: 'Tools',
    color: 'fuchsia',
    items: ['Git', 'Vercel', 'Figma', 'EmailJS', 'Vite'],
  },
  {
    category: 'Algorithms',
    color: 'blue',
    items: ['Data Structures', 'Dynamic Programming', 'Graphs', 'Binary Search', 'Greedy'],
  },
]

export const projects = [
  {
    id: 'quickai',
    featured: true,
    title: 'QuickAI',
    subtitle: 'AI SaaS Platform',
    description:
      'An AI-native SaaS platform with subscription flows, Gemini-powered intelligence, and a polished product interface.',
    longDescription:
      'Built end-to-end with Next.js — from auth-ready architecture and PostgreSQL persistence to streaming AI workflows and motion-driven UX across the entire funnel.',
    tech: ['React', 'Next.js', 'Gemini AI', 'PostgreSQL', 'Tailwind'],
    highlights: [
      'Multi-tenant SaaS architecture',
      'Gemini AI workflows & streaming UX',
      'Production deployment on Vercel',
    ],
    gradient: 'from-cyan-400/25 via-blue-500/15 to-violet-600/25',
    glow: 'cyan',
    liveDemo: 'https://quickai-saas.vercel.app',
    github: 'https://github.com/Om-Beast/quickai-saas',
    previewTheme: 'quickai',
  },
  {
    id: 'library',
    featured: false,
    title: 'LibraryOS',
    subtitle: 'Management System',
    description:
      'Full-stack library platform with role-based dashboards, catalog management, and issue tracking.',
    tech: ['React', 'Node.js', 'Express.js', 'MongoDB'],
    highlights: [
      'Express REST API + MongoDB',
      'Admin & member role flows',
      'Responsive React dashboard',
    ],
    gradient: 'from-violet-500/20 via-fuchsia-500/10 to-rose-500/15',
    glow: 'violet',
    github: 'https://github.com/Om-Beast/libray_management_system',
    previewTheme: 'library',
  },
]

export const competitiveProgramming = {
  summary:
    'Competitive programming builds the problem-solving discipline I bring to every frontend challenge.',
  pillars: [
    {
      title: 'Codeforces Specialist',
      description: 'Consistent contest participation and upsolving on Codeforces.',
      icon: 'trophy',
      accent: 'cyan',
    },
    {
      title: 'Strong Problem Solving',
      description: 'Breaking complex problems into clean, efficient solutions under pressure.',
      icon: 'brain',
      accent: 'violet',
    },
    {
      title: 'Data Structures & Algorithms',
      description: 'Solid foundation in DSA — graphs, DP, greedy, and binary search.',
      icon: 'code',
      accent: 'fuchsia',
    },
  ],
  platform: {
    name: 'Codeforces',
    handle: 'om_kesharwani',
    url: 'https://codeforces.com/profile/om_kesharwani',
    rank: 'Specialist',
  },
  focus: ['Graphs', 'Dynamic Programming', 'Greedy', 'Binary Search', 'Two Pointers'],
}

export const resume = {
  summary:
    'Frontend developer focused on shipping polished, production-quality interfaces backed by strong CS fundamentals.',
  highlights: [
    'B.Tech Smart Manufacturing — IIITDM Jabalpur (2023–2027)',
    'Built QuickAI — AI SaaS platform deployed on Vercel',
    'Codeforces Specialist',
  ],
  downloadLabel: 'Download Resume',
  viewLabel: 'View Resume',
  path: RESUME_PDF,
}

export const aboutHighlights = [
  'Ship full-stack products from UI to deployment',
  'Design sensibility inspired by Linear, Vercel & Stripe',
  'Algorithms foundation from competitive programming',
]
