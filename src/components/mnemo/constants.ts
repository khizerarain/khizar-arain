export const MNEMO_LINKS = {
  liveDemo: "https://mnemo-brain.vercel.app/",
  dashboard: "https://mnemo-brain.vercel.app/dashboard",
  github: "https://github.com/khizerarain/MNEMO",
};

export const MNEMO_IMAGES = {
  hero: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=2000&q=80",
  dashboard: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
  quiz: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
  auth: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1600&q=80",
  chat: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1600&q=80",
  analytics: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1600&q=80",
  landing: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1600&q=80",
  signup: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
  mobileDashboard: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&w=800&q=80",
  mobileQuiz: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80",
  mobileAuth: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
  architecture: "https://images.unsplash.com/photo-1558494949-ef526b0042a0?auto=format&fit=crop&w=1600&q=80",
  videoThumbnail: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=2000&q=80",
  brain: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=1200&q=80",
  learning: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
};

export const MNEMO_FEATURES = [
  {
    title: "AI Learning System",
    description: "Intelligent assistance that adapts explanations to each learner's level and needs.",
    icon: "Sparkles",
    color: "#8b5cf6",
  },
  {
    title: "Interactive Quiz System",
    description: "Dynamic quizzes with real-time feedback, scoring, and retry logic.",
    icon: "Brain",
    color: "#d946ef",
  },
  {
    title: "User Dashboard",
    description: "A central hub for progress, stats, and recommended learning paths.",
    icon: "LayoutDashboard",
    color: "#06b6d4",
  },
  {
    title: "Authentication",
    description: "Secure sign up, sign in, and session management powered by Supabase Auth.",
    icon: "Shield",
    color: "#10b981",
  },
  {
    title: "Real Time Updates",
    description: "Live data sync across the app for a seamless, connected experience.",
    icon: "Zap",
    color: "#f59e0b",
  },
  {
    title: "Responsive Design",
    description: "Fully optimized for desktop, tablet, and mobile screens.",
    icon: "Smartphone",
    color: "#f43f5e",
  },
  {
    title: "Personalized Learning",
    description: "Tailored content recommendations based on performance and goals.",
    icon: "UserCog",
    color: "#8b5cf6",
  },
  {
    title: "Analytics",
    description: "Clear visual insights into learning habits and improvement areas.",
    icon: "BarChart3",
    color: "#d946ef",
  },
  {
    title: "Progress Tracking",
    description: "Goal-oriented tracking that keeps learners motivated and on schedule.",
    icon: "Target",
    color: "#06b6d4",
  },
  {
    title: "Modern UI/UX",
    description: "Clean, accessible, and delightful interface built with attention to detail.",
    icon: "Palette",
    color: "#10b981",
  },
];

export const MNEMO_TECH_STACK = {
  frontend: [
    { name: "NextJS", icon: "Hexagon", description: "React framework for production-grade web apps." },
    { name: "Typescript", icon: "Code2", description: "Type-safe development across the entire codebase." },
    { name: "TailwindCSS", icon: "Wind", description: "Utility-first styling for rapid, consistent design." },
  ],
  backend: [
    { name: "Supabase", icon: "Database", description: "PostgreSQL database, real-time subscriptions, and edge functions." },
  ],
  auth: [
    { name: "Supabase Auth", icon: "Lock", description: "Secure authentication and session management." },
  ],
  deployment: [
    { name: "Vercel", icon: "Globe", description: "Global edge deployment with optimized performance." },
  ],
  ui: [
    { name: "Framer Motion", icon: "Activity", description: "Smooth animations and interactive transitions." },
    { name: "Lucide Icons", icon: "Aperture", description: "Crisp, consistent iconography throughout the app." },
  ],
};

export const MNEMO_ROADMAP = [
  { quarter: "Q1", title: "AI-Generated Quizzes", description: "Upload documents and instantly generate quizzes from content." },
  { quarter: "Q2", title: "Spaced Repetition", description: "Smart scheduling based on memory decay curves." },
  { quarter: "Q3", title: "Collaborative Rooms", description: "Study together in real-time with peers." },
  { quarter: "Q4", title: "Mobile App", description: "Native mobile experience with offline support." },
];

export const MNEMO_METRICS = [
  { label: "Performance Score", value: 98, suffix: "/100" },
  { label: "Accessibility Score", value: 100, suffix: "/100" },
  { label: "SEO Score", value: 100, suffix: "/100" },
  { label: "Best Practices", value: 100, suffix: "/100" },
];

export const MNEMO_ARCHITECTURE_STEPS = [
  { title: "Next.js App Router", description: "Server-side rendering, route handling, and SEO." },
  { title: "TypeScript Layer", description: "Type safety across components and API calls." },
  { title: "TailwindCSS Design System", description: "Consistent, responsive styling at scale." },
  { title: "Supabase Backend", description: "Database, real-time subscriptions, and authentication." },
  { title: "Vercel Edge", description: "Global deployment, caching, and performance optimization." },
];
