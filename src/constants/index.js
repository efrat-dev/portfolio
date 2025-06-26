import {
  data_scientist,
  content_creator,
  fullstack_developer,
  ai_developer,
  open_source_contributor,
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
 creatingai,
 extratech,
 startuplift,
  creating_ai,
  education_for_all,
  fintegrate_demo,
  codemaster,
  game_collection,
  tastematch_galley,
  threejs,
  domain_knowledge,
  kaggle,
  pandas_numpy,
  rcsb_pdb_dataset,
  nvidia,
  ready,
  mahat,
  ready_cert,
  mahat_cert,
  nvidia_diffusion_cert,
  github,
  leetcode,
  huggingface,
  gmail,
  creatingai_white,
  pypi_white
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
    id: "blog",
    title: "Blog",
  },
  {
    id: "opensource",
    title: "Open Source",
  },
  {
    id: "data-science",
    title: "Data Science",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: fullstack_developer,
    link: "work" // יפנה לקומפוננטה Works
  },
  {
    title: "AI Developer",
    icon: ai_developer,
    link: "llm-section" // יפנה לחלק ה-LLM הספציפי בתוך DataScience
  },
  {
    title: "Data Scientist",
    icon: data_scientist,
    link: "data-science" // יפנה ל-DataScience
  },
  {
    title: "Content Creator",
    icon: content_creator,
    link: "blog" // יפנה ל-Blog
  },
  {
    title: "Open Source Contributor",
    icon: open_source_contributor,
    link: "opensource" // יפנה ל-OpenSourceWorks
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
    icon: startuplift,
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
    company_name: "Personal Website",
    icon: creatingai, // החלף לאייקון רלוונטי
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
    icon: extratech, // החלף לאייקון רלוונטי
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
    name: "🎓 Education for All – Q&A Platform for Parents and Counselors",
    description:
      "Education for All is a full-stack platform designed to connect parents with professional educational guidance. Its backend, powered by a secure C# ASP.NET Web API and SQL Server, handles Q&A management, authentication, and real-time counselor responses. On the frontend, a sleek React app enhanced by a built-in FAQ chatbot, audio playback of clustered answers via Azure Speech Services, and voice-based response input.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "asp.net core",
        color: "green-text-gradient",
      },
      {
        name: "sql server",
        color: "pink-text-gradient",
      },
      {
        name: "azure speech",
        color: "orange-text-gradient",
      },
    ],
    image: education_for_all,
    source_code_links: [
      {
        name: "Frontend",
        url: "https://github.com/efrat-dev/education-for-all-frontend"
      },
      {
        name: "Backend", 
        url: "https://github.com/efrat-dev/education-for-all-backend"
      }
    ],
    demo_link: "https://education-forall.onrender.com",
  },
  {
    name: "🤖 Creating AI - Learning Platform & Blog",
    description:
      "Creating AI is an interactive learning platform and personal tech blog, built to document and share my hands-on journey into AI and data science. It features live code editing, in-browser execution, and notebook-style rendering for a dynamic, immersive experience. Built with Node.js, JavaScript, and Angular, it transforms static content into an engaging space for exploration. Perfect for developers who want to learn by doing — not just reading.",
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "node.js",
        color: "green-text-gradient",
      },
      {
        name: "machine learning",
        color: "pink-text-gradient",
      },
      {
        name: "jupyter",
        color: "orange-text-gradient",
      },
    ],
    image: creating_ai,
    source_code_links: [
      {
        name: "Source Code",
        url: "https://github.com/efrat-dev/creating-ai-blog"
      }
    ],
    demo_link: "https://creatingai.onrender.com",
  },
  {
    name: "🍽️ TasteMatch – Recipe Sharing Experience",
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
    image: tastematch_galley,
    source_code_links: [
      {
        name: "Source Code",
        url: "https://github.com/efrat-dev/tastematch-recipe-sharing-platform"
      }
    ],
    demo_link: "https://efrat-dev.github.io/tastematch-recipe-sharing-platform/",
  },
  {
    name: "🎮 Game Collection - Small Games, Big Impact",
    description:
      "A vibrant collection of mini-games — each one offering a different flavor of fun, challenge, and creativity. Don't miss our flagship - Mastermind! Sharpen your logic by cracking a secret sequence of colors, complete with difficulty levels, live timer, and high-score tracking. Other games: Triluck – A colorful slot machine. Brush Rush – Your personal pixel-art playground.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html5",
        color: "green-text-gradient",
      },
      {
        name: "css3",
        color: "pink-text-gradient",
      },
      {
        name: "game logic",
        color: "orange-text-gradient",
      },
    ],
    image: game_collection,
    source_code_links: [
      {
        name: "Source Code",
        url: "https://github.com/efrat-dev/game-collection"
      }
    ],
    demo_link: "https://efrat-dev.github.io/game-collection",
  },
  {
    name: "💻 CodeMaster - Leetcode Solution Hub",
    description:
      "A sleek, web-based platform that showcases my structured LeetCode solutions — searchable, categorized by topic and difficulty, and beautifully organized for clarity and efficiency. Built for interview prep and daily revision, it combines clean UI with interactive browsing, turning a personal coding journey into a polished learning tool.",
    tags: [
      {
        name: "algorithms",
        color: "blue-text-gradient",
      },
      {
        name: "data structures",
        color: "green-text-gradient",
      },
      {
        name: "problem solving",
        color: "pink-text-gradient",
      },
      {
        name: "optimization",
        color: "orange-text-gradient",
      },
    ],
    image: codemaster,
    source_code_links: [
      {
        name: "Source Code",
        url: "https://github.com/efrat-dev/leetcode-solutions-hub"
      }
    ],
    demo_link: "https://efrat-dev.github.io/leetcode-solutions-hub/",
  },
  {
    name: "🚀 Next-Gen Developer Showcase",
    description:
      "This interactive template was built to present my professional experience and achievements in a striking, user-friendly format. Designed for developers who want to stand out, tell their story visually, and leave a lasting impression — before a single line of code is even read.",
    tags: [
      {
        name: "full stack",
        color: "blue-text-gradient",
      },
      {
        name: "presentation",
        color: "green-text-gradient",
      },
      {
        name: "slides",
        color: "pink-text-gradient",
      },
      {
        name: "documentation",
        color: "orange-text-gradient",
      },
    ],
    image: fintegrate_demo,
    source_code_links: [
      {
        name: "Source Code",
        url: "https://github.com/efrat-dev/fintegrate-demo"
      }
    ],
    demo_link: "https://efrat-dev.github.io/fintegrate-demo/",
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
    issuerImage: mahat,
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
    link: "https://github.com/efrat-dev",
    icon: github,
    type: "link"
  },
  {
    title: "Blog",
    link: "https://creatingai.onrender.com",
    icon: creatingai_white,
    type: "link"
  },
  {
    title: "Email",
    link: "#contact",
    icon: gmail,
    type: "scroll"
  },
  {
    title: "PyPI",
    link: "https://pypi.org/user/efrat-dev/",
    icon: pypi_white,
    type: "link"
  },
  {
    title: "Hugging Face",
    link: "https://huggingface.co/efrat-dev",
    icon: huggingface,
    type: "link"
  },
  {
    title: "LeetCode",
    link: "https://leetcode.com/u/efrat-dev/",
    icon: leetcode,
    type: "link"
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
];

const mlDeepLearningProjects = [
  {
    name: "Customer Segmentation Analysis",
    description:
      "Advanced customer segmentation using K-means clustering and RFM analysis. Built with Python, Scikit-learn, and Pandas to identify high-value customer groups and optimize marketing strategies. Includes interactive visualizations and automated reporting dashboards.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "machine-learning",
        color: "green-text-gradient",
      },
      {
        name: "clustering",
        color: "pink-text-gradient",
      },
      {
        name: "pandas",
        color: "orange-text-gradient",
      },
    ],
    image: education_for_all,
    source_code_link: "https://github.com/efrat-dev/customer-segmentation",
  },
  {
    name: "Recommendation Engine",
    description:
      "Collaborative filtering recommendation system using matrix factorization and deep learning. Built with PyTorch and deployed on AWS, serving personalized recommendations for e-commerce platform with 40% improvement in user engagement.",
    tags: [
      {
        name: "pytorch",
        color: "blue-text-gradient",
      },
      {
        name: "collaborative-filtering",
        color: "green-text-gradient",
      },
      {
        name: "deep-learning",
        color: "pink-text-gradient",
      },
      {
        name: "matrix-factorization",
        color: "red-text-gradient",
      },
    ],
    image: fintegrate_demo,
    source_code_link: "https://github.com/efrat-dev/recommendation-engine",
    demo_link: "https://recommender-demo.herokuapp.com",
  },
];

// פרויקטי LLM ו-NLP
const llmProjects = [
  {
    name: "Sentiment Analysis Dashboard",
    description:
      "Real-time sentiment analysis of social media data using NLP techniques and BERT transformers. Built with Streamlit for interactive visualization, processing thousands of tweets daily with sentiment classification and trend analysis.",
    tags: [
      {
        name: "nlp",
        color: "blue-text-gradient",
      },
      {
        name: "bert",
        color: "green-text-gradient",
      },
      {
        name: "streamlit",
        color: "pink-text-gradient",
      },
      {
        name: "transformers",
        color: "orange-text-gradient",
      },
    ],
    image: fintegrate_demo,
    source_code_link: "https://github.com/efrat-dev/sentiment-analysis",
    demo_link: "https://sentiment-dashboard.streamlit.app",
  },
  {
    name: "Code Review AI Assistant",
    description:
      "LLM-powered code review system using Anthropic Claude and custom prompting techniques. Analyzes code quality, suggests improvements, and generates detailed review reports with integration to GitHub webhooks.",
    tags: [
      {
        name: "claude",
        color: "blue-text-gradient",
      },
      {
        name: "code-review",
        color: "green-text-gradient",
      },
      {
        name: "github-api",
        color: "pink-text-gradient",
      },
      {
        name: "prompt-engineering",
        color: "red-text-gradient",
      },
    ],
    image: fintegrate_demo,
    source_code_link: "https://github.com/efrat-dev/code-review-ai",
    demo_link: "https://code-reviewer.streamlit.app",
  },
];

// חומרי לימוד ומשאבי ידע
const learningResources = [
  {
    name: "Machine Learning Fundamentals Summary",
    description:
      "Comprehensive summary covering supervised and unsupervised learning algorithms, evaluation metrics, and best practices. Includes practical examples and implementation notes from hands-on projects.",
    tags: [
      {
        name: "summary",
        color: "blue-text-gradient",
      },
      {
        name: "ml-basics",
        color: "green-text-gradient",
      },
      {
        name: "algorithms",
        color: "pink-text-gradient",
      },
    ],
    image: education_for_all,
    source_code_link: "https://github.com/efrat-dev/ml-fundamentals-summary",
    demo_link: "https://creatingai.onrender.com/ml-fundamentals",
  },
  {
    name: "Deep Learning Architecture Guide",
    description:
      "In-depth guide covering CNN, RNN, LSTM, and Transformer architectures. Features visual diagrams, implementation examples, and performance comparisons across different use cases.",
    tags: [
      {
        name: "deep-learning",
        color: "blue-text-gradient",
      },
      {
        name: "architectures",
        color: "green-text-gradient",
      },
      {
        name: "guide",
        color: "pink-text-gradient",
      },
    ],
    image: creating_ai,
    source_code_link: "https://github.com/efrat-dev/dl-architecture-guide",
    demo_link: "https://creatingai.onrender.com/dl-architectures",
  },
  {
    name: "Statistics for Data Science Cheat Sheet",
    description:
      "Quick reference guide for statistical concepts essential in data science. Covers hypothesis testing, probability distributions, and statistical inference with practical Python examples.",
    tags: [
      {
        name: "statistics",
        color: "blue-text-gradient",
      },
      {
        name: "cheat-sheet",
        color: "green-text-gradient",
      },
      {
        name: "reference",
        color: "pink-text-gradient",
      },
    ],
    image: fintegrate_demo,
    source_code_link: "https://github.com/efrat-dev/stats-cheat-sheet",
    demo_link: "https://creatingai.onrender.com/statistics-guide",
  },
];
  // Sample blog posts data - replace with your actual blog posts
const blogPosts = [
  {
    id: 1,
    title: "Deep Dive into Transformer Architecture",
    description: "Exploring the revolutionary architecture that changed NLP forever, from attention mechanisms to BERT and GPT implementations.",
    readTime: "8 min read",
    date: "2024-06-15",
    category: "Deep Learning",
    url: "https://creatingai.onrender.com/post-list/%D7%94%D7%A1%D7%A4%D7%A8%D7%99%D7%95%D7%AA-pandas-numpy",
    image: domain_knowledge,
  },
  {
    id: 2,
    title: "Building Scalable ML Pipelines",
    description: "Best practices for creating production-ready machine learning pipelines with Docker, Kubernetes, and MLOps principles.",
    readTime: "12 min read",
    date: "2024-06-10",
    category: "MLOps",
    url: "/blog/scalable-ml-pipelines",
    image: rcsb_pdb_dataset,
  },
  {
    id: 3,
    title: "Computer Vision with PyTorch",
    description: "Hands-on tutorial for implementing convolutional neural networks for image classification and object detection tasks.",
    readTime: "15 min read",
    date: "2024-06-05",
    category: "Computer Vision",
    url: "/blog/computer-vision-pytorch",
    image: pandas_numpy,
  },
  {
    id: 4,
    title: "Time Series Forecasting Techniques",
    description: "Comprehensive guide to ARIMA, LSTM, and Prophet models for predicting time-dependent data with real-world examples.",
    readTime: "10 min read",
    date: "2024-05-28",
    category: "Data Science",
    url: "/blog/time-series-forecasting",
    image: kaggle,
  },
];

// עדכן את הייצואים בסוף הקובץ:
export { 
  services, 
  technologies, 
  experiences, 
  projects, 
  certifications, 
  contactInfo, 
  openSourceProjects, 
  mlDeepLearningProjects,  // שינוי שם
  llmProjects,            // חדש
  learningResources,
  blogPosts
};