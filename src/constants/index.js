import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  // meta,
  starbucks,
  // tesla,
  // shopify,
  creating_ai,
  education_for_all,
  fintegrate_demo,
  threejs,
  nvidia,
  ready,
  mahat,
  ready_cert,
  mahat_cert,
  nvidia_diffusion_cert
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "certificates",
    title: "Certs",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Data Scientist",
    icon: mobile,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
  {
    title: "Open Source Contributor",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "lift-social startup",
    icon: starbucks, // תצטרך להוסיף את האייקון המתאים
    iconBg: "#383E56",
    date: "2025",
    points: [
      "Worked in a Full Stack team, including selecting and implementing tools and technologies tailored to the system's needs.",
      "Collaborated closely with the DevOps team for integration between system components.",
      "Combined interdisciplinary skills, including systemic thinking, flexibility, and high self-learning capability.",
    ],
  },
  {
    title: "ML Blog Platform Developer",
    company_name: "Personal Project",
    icon: starbucks, // תצטרך להוסיף את האייקון המתאים
    iconBg: "#E6DEDD",
    date: "2025",
    points: [
      "Built a personal blog platform with Node.js, Angular and MongoDB, showcasing my own machine learning posts.",
      "Enables full in-browser code editing and live execution via Pyodide, including support for Jupyter notebook rendering.",
      "Combines content creation with interactive coding for a hands-on learning experience.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "ExtraTech",
    icon: starbucks, // תצטרך להוסיף את האייקון המתאים
    iconBg: "#383E56",
    date: "2024",
    points: [
      "Developed an employee management module, as a part of order system, using NestJS, MongoDB, React, and Docker.",
      "Integrated microservices and ensured code quality with detailed design documents and unit tests.",
      "Collaborated effectively with the team to meet all requirements.",
    ],
  },
];

const projects = [
  {
    name: "Full-Stack Application",
    description:
      "A comprehensive full-stack application built with React frontend and C# ASP.NET Core backend. Features include Azure Speech Services integration, JWT authentication with Role-Based Access Control (RBAC), SQL Server database management, and SMTP email communication system.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "c# asp.net",
        color: "green-text-gradient",
      },
      {
        name: "sql server",
        color: "pink-text-gradient",
      },
      {
        name: "azure",
        color: "orange-text-gradient",
      },
    ],
    image: education_for_all, // החלף בתמונה מתאימה
    source_code_link: "https://github.com/efrat-dev", // הכנס את הקישור לקוד שלך
    demo_link: "https://education-for-all.onrender.com", // הכנס את קישור הדמו שלך
  },
  {
    name: "Extrateck Product Demo",
    description:
      "A modern web application developed as a product demonstration for Extrateck company. Built using cutting-edge technologies including NestJS for robust backend architecture, React for dynamic user interface, and MongoDB for flexible data management.",
    tags: [
      {
        name: "nestjs",
        color: "red-text-gradient",
      },
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: fintegrate_demo, // החלף בתמונה מתאימה
    source_code_link: "https://github.com/efrat-dev/fintegrate-demo", // הכנס את הקישור לקוד שלך
    demo_link: "https://extrateck-demo.com", // הכנס את קישור הדמו שלך
  },
  {
    name: "Creating AI - Learning Platform & Blog",
    description:
      "A comprehensive learning platform and blog focused on AI and technology education. Developed using Node.js backend, JavaScript for interactive functionality, and Angular for a dynamic single-page application experience. Provides educational content and resources for AI enthusiasts.",
    tags: [
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "yellow-text-gradient",
      },
      {
        name: "angular",
        color: "red-text-gradient",
      },
    ],
    image: creating_ai, // החלף בתמונה מתאימה
    source_code_link: "https://github.com/efrat-dev/creating-ai-blog", // הכנס את הקישור לקוד שלך
    demo_link: "https://creatingai.onrender.com",
  },
];
const certifications = [
  {
    name: "Diffusion Models",
    issuer: "NVIDIA",
    issuerImage: nvidia,
    description:
      "Comprehensive certification covering deep learning and generative AI models, focusing on diffusion models for image generation and their practical applications in various industries.",
    date: "2024",
    skills: [
      {
        name: "deeplearning",
        color: "blue-text-gradient",
      },
      {
        name: "diffusion",
        color: "green-text-gradient",
      },
      {
        name: "ai",
        color: "pink-text-gradient",
      },
    ],
    image: nvidia_diffusion_cert,
  },
  {
    name: "Software Engineering Technician",
    issuer: "Government Certification",
    issuerImage: mahat, // Assuming this is the government/mahat logo
    description:
      "Official government certification equivalent to Full Stack Development, covering comprehensive software engineering principles, web development, and system architecture.",
    date: "2023",
    skills: [
      {
        name: "fullstack",
        color: "blue-text-gradient",
      },
      {
        name: "webdev",
        color: "green-text-gradient",
      },
      {
        name: "architecture",
        color: "pink-text-gradient",
      },
    ],
    image: mahat_cert, 
  },
  {
    name: "Data Science Certification",
    issuer: "Ready",
    issuerImage: ready,
    description:
      "Advanced certification in data science covering data analysis, machine learning algorithms, statistical modeling, and real-time data processing with Redis technologies.",
    date: "2024",
    skills: [
      {
        name: "datascience",
        color: "blue-text-gradient",
      },
      {
        name: "machinelearning",
        color: "green-text-gradient",
      },
      {
        name: "ready",
        color: "pink-text-gradient",
      },
    ],
    image: ready_cert,
  },
];

const contactInfo = [
  {
    title: "GitHub",
    link: "https://github.com/efrat-dev", // החלף את yourusername בשם המשתמש שלך בגיטהב
    icon: git,
    type: "link"
  },
  {
    title: "Blog",
    link: "https://creatingai.onrender.com", // החלף בקישור לבלוג שלך
    icon: web,
    type: "link"
  },
  {
    title: "Email",
    link: "#contact",
    icon: backend,
    type: "scroll"
  }
];

export { services, technologies, experiences, projects, certifications, contactInfo  };
