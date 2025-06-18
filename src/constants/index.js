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
    id: "opensource",
    title: "Open Source",
  },
  {
    id: "certificates",
    title: "Certificates",
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
    company_name: "Lift – Social Startup",
    icon: starbucks, // החלף לאייקון רלוונטי
    iconBg: "#383E56",
    date: "2025",
    points: [
      "Worked as part of a Full Stack development team, including selecting technologies tailored to the system’s needs.",
      "Collaborated in parallel with the DevOps team to align system integration efforts.",
      "Applied systemic thinking, flexibility, and strong self-learning capabilities to meet project demands.",
    ],
  },
  {
    title: "ML Blog Platform Developer",
    company_name: "Personal Project",
    icon: starbucks, // החלף לאייקון רלוונטי
    iconBg: "#E6DEDD",
    date: "2025",
    points: [
      "Built an interactive blog platform using Node.js, Angular, and MongoDB to share original AI/ML posts.",
      "Implemented in-browser code editing and execution with Pyodide, including Jupyter notebook rendering.",
      "Integrated text-to-speech playback, personal annotations, and content tracking tools.",
      "Designed for knowledge-sharing and hands-on learning within the tech community.",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "ExtraTech",
    icon: starbucks, // החלף לאייקון רלוונטי
    iconBg: "#383E56",
    date: "2024",
    points: [
      "Developed an employee management module within a larger business system using NestJS, MongoDB, React, and Docker.",
      "Integrated with six microservices while maintaining Agile workflows.",
      "Created detailed design documents ensuring 100% requirement coverage.",
      "Wrote dozens of unit tests, resulting in zero reported bugs post-deployment.",
      "Maintained strong ownership and team collaboration throughout the project.",
    ],
  },
];


const projects = [
  {
    name: " Education for All – Q&A Platform for Parents and Counselors",
    description:
      "Education for All is a full-stack platform designed to connect parents with professional educational guidance. Its backend, powered by a secure C# ASP.NET Web API and SQL Server, handles Q&A management, authentication, and real-time counselor responses. On the frontend, a sleek React app enhanced by a built-in FAQ chatbot, audio playback of clustered answers via Azure Speech Services, and voice-based response input.",
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
    image: education_for_all, 
    source_code_link: "https://github.com/efrat-dev", 
    demo_link: "https://education-forall.onrender.com", 
  },
  {
    name: "TasteMatch – Recipe Sharing Experience 🍽️",
    description:
      "TasteMatch is a vibrant, fully responsive recipe-sharing website crafted with semantic HTML, modern CSS, and Bootstrap. Designed as a front-end showcase, it blends elegant UI design with smooth animations — creating an experience that feels dynamic, even without a backend. Whether you're craving something sweet, savory, or simply stylish code, this project serves up the perfect taste of front-end excellence.",
    tags: [
      {
        name: "html5",
        color: "blue-text-gradient",
      },
      {
        name: "css3",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
      {
        name: "responsive",
        color: "orange-text-gradient",
      },
    ],
    image: education_for_all, 
    source_code_link: "https://github.com/efrat-dev", 
    demo_link: "https://education-for-all.onrender.com", 
  },
  {
    name: "Next-Gen Developer Showcase",
    description:
      "This interactive template was built to present my professional experience and achievements in a striking, user-friendly format. Designed for developers who want to stand out, tell their story visually, and leave a lasting impression — before a single line of code is even read.",
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
    image: fintegrate_demo, 
    source_code_link: "https://github.com/efrat-dev/fintegrate-demo", 
    demo_link: "https://extrateck-demo.com",
  },
  {
    name: "Creating AI - Learning Platform & Blog",
    description:
    "Creating AI is an interactive learning platform and personal tech blog, built to document and share my hands-on journey into AI and data science. It features live code editing, in-browser execution, and notebook-style rendering for a dynamic, immersive experience. Built with Node.js, JavaScript, and Angular, it transforms static content into an engaging space for exploration. Perfect for developers who want to learn by doing — not just reading.",
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
      {
        name: "ai & ml ",
        color: "red-text-gradient",
      },
    ],
    image: creating_ai, // החלף בתמונה מתאימה
    source_code_link: "https://github.com/efrat-dev/creating-ai-blog", // הכנס את הקישור לקוד שלך
    demo_link: "https://creatingai.onrender.com",
  },
  {
    name: "Creating AI - Learning Platform & Blog",
    description:
    "A vibrant collection of mini-games — each one offering a different flavor of fun, challenge, and creativity. Small games, big impact. Don't miss our flagship - Mastermind! Sharpen your logic by cracking a secret sequence of colors, complete with difficulty levels, live timer, and high-score tracking. Other games: Triluck – A colorful slot machine. Brush Rush – Your personal pixel-art playground.",
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
      {
        name: "ai & ml ",
        color: "red-text-gradient",
      },
    ],
    image: creating_ai, // החלף בתמונה מתאימה
    source_code_link: "https://github.com/efrat-dev/creating-ai-blog", // הכנס את הקישור לקוד שלך
    demo_link: "https://creatingai.onrender.com",
  },
  {
    name: "Creating AI - Learning Platform & Blog",
    description:
    "A sleek, web-based platform that showcases my structured LeetCode solutions — searchable, categorized by topic and difficulty, and beautifully organized for clarity and efficiency. Built for interview prep and daily revision, it combines clean UI with interactive browsing, turning a personal coding journey into a polished learning tool.",
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
      {
        name: "ai & ml ",
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

const openSourceProjects = [
  {
    name: "DataFlow Analyzer",
    description:
      "A Python package for analyzing and visualizing data flow patterns in complex datasets. Provides intuitive APIs for data scientists and includes built-in plotting capabilities with customizable themes.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "data-science",
        color: "green-text-gradient",
      },
      {
        name: "visualization",
        color: "pink-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=230&fit=crop&crop=center",
    source_code_link: "https://github.com/your-username/dataflow-analyzer",
    pypi_link: "https://pypi.org/project/dataflow-analyzer/",
  },
  {
    name: "React Form Validator",
    description:
      "A lightweight React library for form validation with TypeScript support. Features declarative validation rules, custom error messages, and seamless integration with popular UI frameworks.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "forms",
        color: "green-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=230&fit=crop&crop=center",
    source_code_link: "https://github.com/your-username/react-form-validator",
    // No pypi_link for JavaScript projects
  },
  {
    name: "Config Manager CLI",
    description:
      "A command-line tool for managing application configurations across different environments. Supports JSON, YAML, and TOML formats with encryption and template features.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "cli",
        color: "orange-text-gradient",
      },
      {
        name: "devtools",
        color: "pink-text-gradient",
      },
    ],
    image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=400&h=230&fit=crop&crop=center",
    source_code_link: "https://github.com/your-username/config-manager-cli",
    pypi_link: "https://pypi.org/project/config-manager-cli/",
  },
];

export { services, technologies, experiences, projects, certifications, contactInfo, openSourceProjects  };
