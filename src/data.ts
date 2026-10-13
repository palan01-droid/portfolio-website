// All portfolio content lives here — swap in real photos/certs by dropping
// files into public/photos and public/certificates and updating the paths.

export type Section = { heading: string; text: string };

export const profile = {
  name: 'Anuj Pal',
  tagline: 'CS Student at UW-Whitewater · IIT Delhi Research Intern · Varsity Tennis',
  location: 'Whitewater, WI',
  email: 'pala06@uww.edu',
  linkedin: 'https://www.linkedin.com/in/anujpald/',
  github: 'https://github.com/palan01-droid',
  githubUser: 'palan01-droid',
  summary:
    'Computer Science student at UW-Whitewater. I build real-time data apps and RAG chatbots in Python, and I did embedded and sensor research at IIT Delhi. Looking for a Summer 2027 internship.',
  resumeUrl: '/anuj_pal_resume.pdf',
  photo: '/photos/anuj-chicago.jpg',
  heroPhoto: '/photos/iitd-team.jpg', // put a photo in public/photos and set this, e.g. '/photos/hero.jpg'
};

export const education = {
  school: 'University of Wisconsin–Whitewater',
  degree: 'Bachelor of Science in Computer Science',
  dateRange: 'Aug. 2026 – May 2029 (Expected)',
  location: 'Whitewater, WI',
  coursework: ['Data Structures', 'Algorithms', 'Python Programming', 'Java', 'Calculus'],
};

export const about: { id: string; title: string; subtitle: string; thumb: string; sections: Section[] }[] = [
  {
    id: 'path',
    title: 'My Path',
    subtitle: 'Chandigarh → Luther → UW-Whitewater',
    thumb: "url('/photos/anuj-chicago.jpg') center 60%/cover no-repeat",
    sections: [
      { heading: 'Chandigarh, India', text: 'Grew up playing tennis and led the Chandigarh U-19 team to a bronze medal at the SGFI National School Games in Jan. 2025.' },
      { heading: 'Luther College, Decorah IA (2025–26)', text: 'Started my CS degree and played varsity tennis on the team that won the American Rivers Conference.' },
      { heading: 'UW-Whitewater (2026–)', text: 'Transferred to finish my B.S. in Computer Science, expected May 2029.' },
    ],
  },
  {
    id: 'now',
    title: 'What I am doing now',
    subtitle: 'Oct. 2026',
    thumb: "url('/photos/bg-now.jpg') center/cover no-repeat",
    sections: [
      { heading: 'Building', text: 'OddsBrief, a live tracker and AI brief for Kalshi prediction markets.' },
      { heading: 'Working', text: 'Website & Handshake Assistant at the UW-Whitewater Career Center.' },
      { heading: 'Looking for', text: 'A Summer 2027 internship in software, AI, or embedded systems.' },
    ],
  },
];

export type Experience = {
  id: string;
  title: string;
  org: string;
  location: string;
  dateRange: string;
  tags: string[];
  points: string[];
  githubUrl?: string;
  thumb: string; // color used for the placeholder tile art
};

export const experience: Experience[] = [
  {
    id: 'iit-delhi',
    title: 'Research Intern — Embedded Systems & Biomechanics',
    org: 'Centre for Biomedical Engineering, IIT Delhi',
    location: 'New Delhi, India',
    dateRange: 'Jun. 2026 – Aug. 2026',
    tags: ['C++', 'ESP32', 'FSR Sensors', 'Python', 'Flask', 'WebSockets', 'Chart.js'],
    points: [
      'Developed C++ firmware for multi-point FSR 402 sensor circuits across a 3-layer physical head model (skin, skull, brain) to capture force transmission for helmet impact research',
      'Calibrated sensor voltage curves with 200g fixed weights and implemented a moving-average filter on ESP32, reducing baseline signal noise by 65%',
      'Built a Python, Flask, and WebSocket stream to a live Chart.js dashboard, with a 3-channel peak-detection algorithm that auto-logs impact events to CSV',
    ],
    githubUrl: 'https://github.com/palan01-droid/drop_tower',
    thumb: "url('/photos/iitd-silicon-grafting.webp') center 45%/cover no-repeat",
  },
  {
    id: 'uww-career-center',
    title: 'Website & Handshake Assistant',
    org: 'Career Center, University of Wisconsin-Whitewater',
    location: 'Whitewater, WI',
    dateRange: 'Oct. 2026 – Present',
    tags: ['Ingeniux CMS', 'WCAG', 'Handshake'],
    points: [
      'Maintain and update Career Center web pages in Ingeniux CMS to meet WCAG standards',
      'Publish event and resource listings and troubleshoot user accounts on Handshake',
    ],
    thumb: "url('/photos/uww-career-services.png') center/cover no-repeat",
  },
];

export type Project = {
  id: string;
  title: string;
  stack: string;
  dateRange?: string;
  points: string[];
  story?: Section[];
  media?: string[];
  liveUrl?: string;
  githubUrl?: string;
  thumb: string;
};

export const projects: Project[] = [
  {
    id: 'oddsbrief',
    title: 'OddsBrief',
    stack: 'Python, Flask, WebSockets, Kalshi API, Gemini, Postgres + pgvector, Chart.js',
    dateRange: 'Sept. 2026 – Present',
    // TODO: add a "Why I built it" section in your own words
    story: [
      { heading: 'How it works', text: "It follows Kalshi's 500 most-traded markets through an authenticated WebSocket feed and pages the REST API with retry and backoff, so every $5,000+ trade gets flagged live. A forecast model scores each prediction with a Brier score before learning from it, calibrated across 10 price ranges per category. Gemini writes a daily recap using only data from the database." },
      { heading: 'What broke', text: 'Deploying to Render meant moving off local SQLite and ChromaDB to Supabase Postgres with pgvector for the RAG search. Behind Cloudflare, every visitor showed up with the same IP, so the rate limits hit everyone at once. I fixed it by reading the real visitor IP from the Cloudflare header.' },
      { heading: 'A decision I made', text: 'The chatbot only answers from the top 5 matches in market rules, past briefs, and user comments, and shows its sources. It also refuses to give financial advice.' },
    ],
    points: [
      "Real-time pipeline tracking Kalshi's 500 most-traded markets, flagging every $5,000+ trade live",
      'Self-calibrating forecast model scored by Brier score across 10 price ranges per market category',
      'RAG chatbot on Gemini that answers with cited sources, with guardrails against financial advice',
      'Daily market recaps via Gemini, constrained to verified data and validated as structured JSON',
    ],
    liveUrl: 'https://oddsbrief.onrender.com/',
    githubUrl: 'https://github.com/palan01-droid/OddsBrief',
    media: ['/photos/oddsbrief-home.jpg'],
    thumb: "url('/photos/oddsbrief-home.jpg') top/cover no-repeat",
  },
  {
    id: 'ai-study-assistant',
    title: 'AI Study Assistant',
    stack: 'Python, Flask, ChromaDB, Ollama, Llama 3.2, python-pptx',
    dateRange: 'Aug. 2026 – Sept. 2026',
    story: [
      { heading: 'Why I built it', text: 'For my CYBER 101 class, to study from the actual lecture slides instead of generic answers.' },
      { heading: 'How it works', text: 'python-pptx reads the PowerPoint decks, the slide text goes into a ChromaDB vector index, and Llama 3.2 runs locally through Ollama. It costs $0 to run and no course data leaves my laptop.' },
      { heading: 'A decision I made', text: 'I first built the router with LangGraph as a multi-step agent. It only had to pick between two things (answer a question or make a quiz), so I replaced it with a simple if/else. Now both share one retrieval step and one prompt, and it is much easier to debug.' },
    ],
    points: [
      'RAG study tool that answers questions and generates practice quizzes from lecture slides',
      'Runs 100% locally at $0 cost with Llama 3.2 on Ollama',
      'Rule-based router replaced a multi-step AI agent, so Q&A and quizzes share one retrieval step',
    ],
    githubUrl: 'https://github.com/palan01-droid/ai-tutor-rag',
    media: ['/videos/ai-tutor-demo.mp4'],
    thumb: "url('/photos/ai-tutor-demo.jpg') top/cover no-repeat",
  },
  {
    id: 'drop-tower',
    title: 'Drop Tower',
    stack: 'C++, ESP32, Python (Flask, Socket.IO), Chart.js',
    dateRange: 'Jun. 2026 – Aug. 2026',
    // TODO: add a "Why I built it" section in your own words
    story: [
      { heading: 'How it works', text: 'Three FSR 402 sensors sit in a head model at the skin, skull, and brain layers. The ESP32 reads them, Flask streams the readings over WebSockets, and a Chart.js dashboard shows the force moving through each layer. A peak detector logs every impact to CSV.' },
      { heading: 'What broke', text: 'The raw sensor readings were noisy even with nothing touching them. I calibrated each sensor with 200g weights and added a moving-average filter on the ESP32, which cut the baseline noise by 65%.' },
    ],
    points: [
      'Biomechanics dashboard streaming live FSR 402 readings from a 3-layer head model',
      'Auto-logs peak impact values and charts force across skin, skull, and brain',
    ],
    githubUrl: 'https://github.com/palan01-droid/drop_tower',
    thumb: '#5a1a3a',
  },
  {
    id: 'sensor-monitor',
    title: 'Sensor Monitor',
    stack: 'Python (Flask, Socket.IO), Groq LLM API, Supabase, Docker/Render',
    points: [
      'Full-stack platform streaming live sensor data from Arduino, ESP32, STM32, and Raspberry Pi Pico to a 3D dashboard over WebSockets',
      'Groq LLM API (Llama 3.3 70B) powers a chat that answers questions about sensor data and explains anomalies',
      'Google OAuth via Supabase, serial and WiFi sensor ingestion, PostgreSQL storage',
      'Dockerized and deployed on Render, with 23 pytest tests',
    ],
    liveUrl: 'https://sensor-monitor-n0rm.onrender.com',
    githubUrl: 'https://github.com/palan01-droid/sensor_monitor',
    thumb: '#0d4d2e',
  },
];

export type SkillGroup = { id: string; category: string; items: string[]; icons: string[]; thumb: string };

export const skills: SkillGroup[] = [
  { id: 'languages', category: 'Languages', items: ['Python', 'Java', 'C++', 'SQL'], icons: ['python', 'openjdk', 'cplusplus', 'postgresql'], thumb: "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('/photos/bg-languages.jpg') center/cover no-repeat" },
  { id: 'ai-data', category: 'AI & Data', items: ['RAG', 'LLM Integration (Gemini, Llama via Ollama)', 'Vector Search (ChromaDB, pgvector)', 'Real-Time Data Pipelines'], icons: ['googlegemini', 'ollama'], thumb: "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('/photos/bg-ai.jpg') center/cover no-repeat" },
  { id: 'backend', category: 'Backend & Tools', items: ['Flask', 'REST APIs', 'WebSockets', 'Socket.IO', 'SQLite', 'Postgres', 'Git', 'GitHub', 'Vercel', 'Render'], icons: ['flask', 'socketdotio', 'github', 'vercel'], thumb: "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('/photos/bg-backend.jpg') center/cover no-repeat" },
  { id: 'hardware', category: 'Embedded & Hardware', items: ['Arduino', 'ESP32', 'Circuit Design', 'FSR Sensors'], icons: ['arduino', 'espressif'], thumb: "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.35)), url('/photos/bg-hardware.jpg') center/cover no-repeat" },
];

export type Achievement = { id: string; title: string; org: string; dateRange: string; detail: string; media?: string[]; thumb: string };

export const achievements: Achievement[] = [
  {
    id: 'tennis-champion',
    title: "Varsity Tennis — American Rivers Conference Champions",
    org: 'Luther College',
    dateRange: 'Aug. 2025 – May 2026',
    detail: 'Played NCAA D-III varsity tennis on the conference-champion team while taking full-time CS courses.',
    media: ['/photos/luther-tennis.webp', '/photos/tennis-huddle.webp', '/videos/blind-serve.mp4'],
    thumb: "url('/photos/luther-tennis.webp') center 65%/cover no-repeat",
  },
  {
    id: 'sgfi-bronze',
    title: 'Bronze Medal, SGFI National School Games',
    org: 'Chandigarh U-19 Tennis Team',
    dateRange: 'Jan. 2025',
    detail: "Led the Chandigarh U-19 men's tennis team to a bronze medal at the national games.",
    media: ['/photos/sgfi-1-ceremony.jpg', '/photos/sgfi-2-ranchi.jpg', '/photos/sgfi-3-medals.jpg'],
    thumb: "url('/photos/sgfi-1-ceremony.jpg') center 60%/cover no-repeat",
  },
];

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  thumb: string;
  pdfUrl: string;
  points: string[];
  skills: string[];
};

export const certificates: Certificate[] = [
  {
    id: 'jpmc-swe-simulation',
    title: 'Software Engineering Job Simulation',
    issuer: 'JPMorganChase (Forage)',
    date: 'Jul. 2026',
    thumb: "url('/certificates/jpmorganchase-software-engineering.png') center/cover no-repeat",
    pdfUrl: '/certificates/jpmorganchase-software-engineering.pdf',
    points: [
      'Integrated Kafka into a Spring Boot microservice to consume and deserialize high-volume transaction messages using a configurable topic and embedded Kafka test framework',
      'Implemented transaction validation and persistence logic with Spring Data JPA and an H2 SQL database, including entity modeling and balance updates across relational User records',
      'Connected the service to an external REST Incentive API using RestTemplate, processing incentive responses and incorporating them into transactional workflows',
      'Developed a REST endpoint for querying user balances, returning JSON responses through a Spring controller while maintaining clean architectural boundaries',
      'Verified system behavior using Maven test suites and debugger-driven inspection, ensuring reliability across message ingestion, database operations, and external API interactions',
    ],
    skills: ['Spring', 'Build Tools', 'Java Programming', 'Message Queuing', 'REST API', 'Spring Framework', 'SQL Database'],
  },
];
