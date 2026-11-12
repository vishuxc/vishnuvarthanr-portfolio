import leaveImg from '../assets/projects/leave_management.jpg';
import banknoteImg from '../assets/projects/banknote_ml.jpg';
import deliveryImg from '../assets/projects/smart_delivery.jpg';
import ragImg from '../assets/projects/vector_rag.jpg';

export const personalDetails = {
  name: "Vishnuvarthan Raja",
  titles: [
    "Full Stack Developer",
    "Generative AI & RAG Developer",
    "Software Developer",
    "Python & Machine Learning Dev",
    "MERN & Laravel Specialist",
    "Java Developer"
  ],
  tagline: "Building Scalable Web Applications & Intelligent RAG / GenAI Systems with Clean Code",
  heroDescription:
    "Software Developer specializing in Full Stack Web Development (React.js, Node.js, Laravel, PHP, Java) and Generative AI / RAG Systems (Python, FastAPI, Sentence-Transformers, Vector Search). Proven record of reducing manual effort by up to 55% and boosting feature delivery efficiency.",
  email: "rvishnuxvarthan@gmail.com",
  phone: "+91-8300714342",
  location: "Tamil Nadu, India",
  socials: {
    github: "https://github.com/vishuxc",
    linkedin: "https://www.linkedin.com/in/vishnuvarthan-r-800282298/",
    email: "mailto:rvishnuxvarthan@gmail.com"
  },
  stats: [
    { label: "Completed Roles", value: "3 Roles" },
    { label: "Approval Effort Reduction", value: "55%" },
    { label: "Delivery Speed Boost", value: "35%-40%" },
    { label: "Degree Completion", value: "2025" }
  ],
  resumeDate: "September 2026",
  resumeVersion: "v3.0 (Verified - September 2026)"
};

export const aboutContent = {
  bio: "I am a versatile Software Developer with professional Laravel/PHP experience at Sopti AI (March 2026 – September 2026), BDreamz Global Solutions, and freelance full-stack projects. Skilled in Laravel, PHP, JavaScript, React.js, Node.js, Express.js, MySQL, Python, REST APIs, and modern web application development."
};

export const experiences = [
  {
    id: 1,
    role: "Software Developer / Laravel PHP Developer",
    company: "Sopti AI",
    period: "March 2026 – September 2026",
    location: "Chennai, India (Full-time)",
    status: "Completed",
    technologies: ["Laravel", "PHP", "JavaScript", "Python", "MySQL", "Git", "REST APIs", "Manual Testing"],
    responsibilities: [
      "Developed and maintained enterprise web application features using Laravel, PHP, JavaScript, and MySQL.",
      "Worked on the ColdStone module by implementing real-time monitoring for temperature and weight sensors to support operational monitoring.",
      "Developed Python automation scripts to monitor sensor data and trigger alerts based on configurable temperature thresholds.",
      "Contributed to the Forecast Module by developing new features, enhancing existing functionality, and resolving reported issues.",
      "Investigated and fixed frontend and backend bugs, improving application performance and stability.",
      "Performed detailed manual and software testing by validating application workflows, identifying defects, reproducing issues, and verifying fixes before deployment.",
      "Implemented UI/UX enhancements, including form updates, layout improvements, and usability refinements based on user requirements.",
      "Wrote and optimized MySQL queries for data retrieval, updates, and database maintenance.",
      "Collaborated with team members using Git for version control and participated in Agile development activities."
    ],
    achievements: [
      "Successfully built ColdStone sensor monitoring module and Python alert triggers.",
      "Fixed critical frontend & backend bugs to optimize stability prior to release.",
      "Enhanced user experience through form updates and layout refinements."
    ]
  },
  {
    id: 2,
    role: "Freelance Full Stack Developer",
    company: "Smart Delivery Management System",
    period: "Jan 2026 – Feb 2026",
    location: "Contract / Remote",
    status: "Completed",
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Role-Based Auth"],
    responsibilities: [
      "Developed a delivery management platform focused on workflow automation and role-based access.",
      "Integrated frontend components with backend services and MySQL-based business logic.",
      "Automated system-driven processes to streamline dispatch and tracking."
    ],
    achievements: [
      "Reduced manual coordination effort by nearly 40% through system-driven automation."
    ]
  },
  {
    id: 3,
    role: "Software Developer",
    company: "BDreamz Global Solutions Pvt Ltd",
    period: "Aug 2025 – Jan 2026",
    location: "Onsite (Web Developer)",
    status: "Completed",
    technologies: ["React.js", "RESTful APIs", "JavaScript", "Agile", "GitHub", "Jira"],
    responsibilities: [
      "Developed React-based user interfaces and integrated them with RESTful backend services.",
      "Collaborated with cross-functional team members to implement features following Agile development practices.",
      "Utilized GitHub and Jira for issue tracking, code reviews, and sprint planning."
    ],
    achievements: [
      "Improved feature delivery efficiency by about 35% using GitHub and Jira in an Agile setup."
    ]
  }
];

export const projects = [
  {
    id: "project-rag",
    title: "Vector RAG Engine",
    category: "Generative AI",
    image: ragImg,
    technologies: ["Python", "FastAPI", "Sentence-Transformers", "PyPDF", "NumPy", "Cosine Similarity"],
    description:
      "A Retrieval-Augmented Generation (RAG) engine that ingests PDF documents, performs sliding-window text chunking, generates high-dimensional vector embeddings, and enables semantic search with exact page-number citations.",
    metrics: [
      "Exact page-number citation backings",
      "Semantic vector search with Cosine Similarity",
      "Custom RAG pipeline built from scratch"
    ],
    features: [
      "PDF document parsing & sliding window text chunking",
      "High-dimensional semantic vector embedding mapping",
      "FastAPI backend search endpoints with exact page citations",
      "Glassmorphic dark UI interface"
    ],
    githubLink: "https://github.com/vishuxc",
    liveLink: "https://lnkd.in/guDbu9pk"
  },
  {
    id: "project-1",
    title: "Employee Leave Management System",
    category: "Full Stack",
    image: leaveImg,
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "REST APIs"],
    description:
      "Designed and developed a complete employee leave workflow system featuring role-based authentication, approval chains, status tracking, and REST API integration.",
    metrics: [
      "Reduced manual approval effort by 55%",
      "Improved request accuracy by 40%",
      "Enhanced response efficiency by 35%"
    ],
    features: [
      "Leave approval workflow & role-based access",
      "Authentication & validation rules",
      "Real-time leave status tracking dashboard",
      "RESTful API integration with React frontend"
    ],
    githubLink: "https://github.com/vishuxc",
    liveLink: "#"
  },
  {
    id: "project-2",
    title: "Banknote Authentication System",
    category: "Machine Learning",
    image: banknoteImg,
    technologies: ["Python", "Scikit-learn", "FastAPI", "Pandas", "NumPy", "Postman"],
    description:
      "Machine learning classification model built on open-source banknote dataset to distinguish genuine banknotes from counterfeit currency.",
    metrics: [
      "Real-time prediction endpoint classification",
      "High accuracy trained evaluation model",
      "FastAPI backend microservice deployment"
    ],
    features: [
      "Data preprocessing & feature engineering",
      "Model training, evaluation & hyperparameter tuning",
      "FastAPI REST endpoint deployment",
      "API validation using Postman"
    ],
    githubLink: "https://github.com/vishuxc",
    liveLink: "#"
  },
  {
    id: "project-4",
    title: "Smart Delivery Management System",
    category: "Enterprise Web",
    image: deliveryImg,
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Role-Based Auth"],
    description:
      "Workflow automation platform built for delivery routing, order assignment, role-based access, and operational dispatch.",
    metrics: [
      "Reduced manual coordination by 40%",
      "Role-based multi-user support",
      "Optimized MySQL data persistence"
    ],
    features: [
      "Automated order dispatch workflow",
      "Role-based access for admins and delivery agents",
      "MySQL backend business logic",
      "Responsive React UI dashboard"
    ],
    githubLink: "https://github.com/vishuxc",
    liveLink: "#"
  }
];

export const skillCategories = [
  {
    category: "Languages",
    skills: [
      { name: "Java", level: 92 },
      { name: "JavaScript", level: 95 },
      { name: "Python", level: 94 },
      { name: "PHP", level: 88 }
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: 94 },
      { name: "HTML5 & CSS3", level: 96 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Bootstrap", level: 88 }
    ]
  },
  {
    category: "Generative AI & Machine Learning",
    skills: [
      { name: "Sentence-Transformers & Embeddings", level: 88 },
      { name: "Vector Search & Cosine Similarity", level: 90 },
      { name: "RAG Pipelines & Text Chunking", level: 88 },
      { name: "Scikit-learn, Pandas & NumPy", level: 88 }
    ]
  },
  {
    category: "Backend & Web Frameworks",
    skills: [
      { name: "FastAPI", level: 92 },
      { name: "Node.js & Express.js", level: 90 },
      { name: "Laravel", level: 88 },
      { name: "Java (Spring Boot, JDBC)", level: 85 }
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "MySQL", level: 94 },
      { name: "SQLite", level: 86 }
    ]
  },
  {
    category: "Concepts & Testing",
    skills: [
      { name: "RESTful APIs", level: 96 },
      { name: "Role-Based Access Control", level: 92 },
      { name: "Manual & Software Testing", level: 90 },
      { name: "Agile Methodologies", level: 88 }
    ]
  },
  {
    category: "Tools & Platforms",
    skills: [
      { name: "Git & GitHub", level: 94 },
      { name: "Postman", level: 92 },
      { name: "PyPDF & Pyright", level: 88 },
      { name: "Jira & Shopify", level: 85 }
    ]
  }
];

export const certifications = [
  {
    title: "Java Full Stack",
    issuer: "Besant Technologies",
    badge: "Full Stack",
    description: "Comprehensive certification covering Java, Spring Boot, REST APIs, Frontend development, and relational databases."
  },
  {
    title: "Azure Data Fundamentals",
    issuer: "Microsoft",
    badge: "Cloud Data",
    description: "Validation of foundational cloud data services, data workloads, and storage architecture in Microsoft Azure."
  },
  {
    title: "Google Cloud Computing Foundations",
    issuer: "NPTEL",
    badge: "GCP Foundations",
    description: "Foundational mastery in Google Cloud infrastructure, networking, compute services, and big data."
  }
];

export const educationDetails = [
  {
    id: 1,
    degree: "B.Tech in Computer and Communication Engineering",
    institution: "Sri Manakula Vinayagar Engineering College",
    location: "Madagadipet, Puducherry",
    status: "Completed 2025",
    details: "Focused on Software Development, Web Architectures, Database Systems, Network Engineering, and Machine Learning."
  },
  {
    id: 2,
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Jawahar Higher Secondary School",
    location: "Neyveli, Tamil Nadu",
    status: "Completed 2021",
    details: "Mathematics and Computer Science stream with top academic performance."
  }
];
