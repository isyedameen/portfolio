// ─── Portfolio Data ─────────────────────────────────────────────────
// Centralized data file — edit this to customize your entire portfolio.
// No hardcoded content in components.

export const personalInfo = {
  name: "Syed Ameen",
  initials: "P",
  title: "MERN Stack Developer",
  tagline: "// FULL-STACK WEB DEVELOPER",
  heroHeadline: {
    line1: "Hi, I'm",
    accent: "Syed Ameen",
    line3: "MERN Developer.",
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
  resumeUrl: "/resume.pdf",
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



export const projectCategories = ["All", "Full-Stack", "Frontend", "Apps", "Backend"];
