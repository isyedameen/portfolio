// ─── Portfolio Data ─────────────────────────────────────────────────
// Centralized data file — edit this to customize your entire portfolio.
// No hardcoded content in components.

export const personalInfo = {
  name: "Syed Ameen",
  initials: "P",
  title: "Full-Stack MERN Developer",
  tagline: "// FULL-STACK WEB DEVELOPER",
  heroHeadline: {
    line1: "Building",
    accent: "Modern",
    line3: "Web Applications.",
  },
  heroDescription:
    "MERN Stack Developer passionate about building modern, scalable and user-friendly web applications with React, Node.js, Express and MongoDB.",
  aboutPhilosophy: {
    title: "Building Modern\nWeb Applications.",
    paragraphs: [
      "I recently completed my MERN Stack training and enjoy building modern web applications. My focus is on creating responsive user interfaces and efficient backend solutions.",
      'Through hands-on projects and continuous learning, I have gained practical experience with React, Node.js, Express.js, MongoDB, and REST APIs.',
    ],
  },
  aboutDetails: {
    education: "Bachelor of Commerce",
    university: "Kannur University",
    graduationYear: "2025",
    location: "Kannur, Kerala, India",
    languages: ["English", "Hindi", "Malayalam"],
  },
  email: "iamameenamee@gmail.com",
  phone: "+91-XXXXX-XXXXX",
  location: "Kannur, Kerala, India",
  availability:
    "Whether you have a project idea, freelance opportunity, or full-time role, I'd love to hear from you.",
  resumeUrl: "#",
  socialLinks: {
    github: "https://github.com/isyedameen",
    linkedin: "https://linkedin.com/in/isyedameen",
    email: "mailto:iamameenamee@gmail.com",
    instagram: "https://instagram.com/isyedameen",
  },
};

export const navLinks = [
  { label: "About", href: "story" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Journey", href: "experience" },
  { label: "Expertise", href: "services" },
];

export const skills = {
  frontend: [
    { name: "React.js", level: 90 },
    { name: "JavaScript", level: 88 },
    { name: "HTML5 / CSS3", level: 90 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Next.js", level: 80 },
    { name: "Redux Toolkit", level: 75 },
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 85 },
    { name: "REST APIs", level: 88 },
    { name: "JWT Authentication", level: 80 },
    { name: "MVC Architecture", level: 78 },
    { name: "API Integration", level: 82 },
  ],
  database: [
    { name: "MongoDB", level: 85 },
    { name: "Mongoose", level: 82 },
    { name: "PostgreSQL", level: 70 },
    { name: "Database Design", level: 75 },
    { name: "CRUD Operations", level: 90 },
  ],
  tools: [
    { name: "Git & GitHub", level: 90 },
    { name: "Postman", level: 90 },
    { name: "Linux / CLI", level: 85 },
    { name: "Vercel", level: 85 },
    { name: "AWS", level: 75 },
    { name: "Docker", level: 70 },
  ],
};

export const experience = [
  {
    period: "2026",
    title: "MERN Stack Development",
    company: "G-TEC Kannur",
    type: "full-time",
    description:
      " Completed intensive training in React, Node.js, Express.js and MongoDB. Built full-stack web applications and gained practical experience through real-world projects.",
    watermark: "MERN",
    color: "accent-violet",
  },
  {
    period: "2022 — 2025",
    title: "Bachelor's Degree",
    company: "College of Commerce",
    type: "full-time",
    description:
      "Completed Bachelor of Commerce while developing analytical, communication and problem-solving skills. Explored technology and web development alongside academic studies.",
    watermark: "COMMERCE",
    color: "accent-indigo",
  },
  {
    period: "2020 — 2022",
    title: "Higher Secondary Education",
    company: "Welfare HSS Cherukunnu",
    type: "education",
    description:
      "Completed higher secondary education in the Humanities stream, building strong communication, analytical and critical thinking skills.",
    watermark: "HUMANITIES",
    color: "on-surface-variant",
  },
  {
    period: "2019 — 2020",
    title: "Secondary Education",
    company: "CHM HSS Elayavoor",
    type: "education",
    description:
      "Completed secondary education and established a strong academic foundation for higher studies.",
    watermark: "FOUNDATION",
    color: "on-surface-variant",
  },
];

export const projects = [
  {
    id: 1,
    title: "ShopFlow E-Commerce",
    description:
      "Full-stack e-commerce platform with inventory management, secure checkout, and user dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    category: "Full-Stack",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    id: 2,
    title: "DevConnect Social",
    description:
      "Developer-focused social platform with real-time messaging, code sharing, and project collaboration.",
    image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=800&q=80",
    tags: ["Next.js", "Socket.io", "PostgreSQL", "Tailwind"],
    category: "Full-Stack",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    id: 3,
    title: "TaskMaster Pro",
    description:
      "Project management tool with Kanban boards, team analytics, and intuitive workflow tracking.",
    image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&q=80",
    tags: ["React", "Express", "MongoDB", "Chart.js"],
    category: "Apps",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    id: 4,
    title: "CloudSync API",
    description:
      "Robust REST API with rate limiting, caching, and secure authentication.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    tags: ["Node.js", "Redis", "JWT", "Express"],
    category: "Backend",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
  },
  {
    id: 5,
    title: "HealthTrack Dashboard",
    description:
      "Healthcare analytics dashboard with patient data visualization and appointment scheduling.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80",
    tags: ["React", "D3.js", "Node.js", "MongoDB"],
    category: "Apps",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
  },
  {
    id: 6,
    title: "FinLedger Dashboard",
    description:
      "Finance tracking dashboard with transaction history and portfolio analytics.",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80",
    tags: ["React", "Tailwind", "Chart.js"],
    category: "Full-Stack",
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
  },
];



export const services = [
  {
    title: "Frontend Development",
    description: "",
    icon: "palette",
    features: ["React.js", "Next.js", "JavaScript ES6+", "Tailwind CSS"],
  },
  {
    title: "Backend Development",
    description: "",
    icon: "zap",
    features: ["Node.js", "Express.js", "REST APIs", "Authentication"],
  },
  {
    title: "Database Management",
    description: "",
    icon: "layers",
    features: ["MongoDB", "Mongoose", "CRUD Operations", "Data Modeling"],
  },
  {
    title: "Development Tools",
    description: "",
    icon: "settings",
    features: ["Git & GitHub", "VS Code", "Postman", "AWS (Basics)"],
  },
];

export const statistics = [
  { value: 6, suffix: "+", label: "Projects Completed" },
  { value: 10, suffix: "+", label: "Technologies Mastered" },
  { value: 1, suffix: "+", label: "Year of Experience" },
  { value: 150, suffix: "+", label: "GitHub Contributions" },
];



export const projectCategories = ["All", "Full-Stack", "Apps", "Backend"];
