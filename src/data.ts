// All portfolio content lives here — swap in real photos/certs by dropping
// files into public/photos and public/certificates and updating the paths.

export type Section = { heading: string; text: string };

export const profile = {
  name: 'Anuj Pal',
  tagline: 'CS student at UW-Whitewater · tennis player · I like building things that run on live data',
  location: 'Whitewater, WI',
  email: 'pala06@uww.edu',
  linkedin: 'https://www.linkedin.com/in/anujpald/',
  github: 'https://github.com/palan01-droid',
  githubUser: 'palan01-droid',
  summary:
    "I grew up in Chandigarh playing tennis, came to the US for college, and somewhere along the way started building things. So far that's sensor rigs at IIT Delhi, an AI tutor for my cyber class, and a live tracker for prediction markets. I'm looking for a Summer 2027 internship.",
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
      { heading: 'Chandigarh, India', text: 'Tennis was a big part of growing up. In January 2025 I led the Chandigarh U-19 team at the SGFI National School Games in Ranchi, and we came home with bronze.' },
      { heading: 'Luther College, Decorah, Iowa (2025–26)', text: 'My first year in the US. I started my CS degree and played on the varsity tennis team, and we won the American Rivers Conference.' },
      { heading: 'IIT Delhi (Summer 2026)', text: 'I went back to India for a research internship at the Centre for Biomedical Engineering, writing firmware and a live dashboard for sensors inside a head model used in helmet impact research.' },
      { heading: 'UW-Whitewater (Fall 2026 – now)', text: 'I transferred to UW-Whitewater to finish my CS degree (May 2029). Outside class I work at the Career Center and keep building side projects.' },
    ],
  },
  {
    id: 'now',
    title: 'What I am doing now',
    subtitle: 'Oct. 2026',
    thumb: "url('/photos/bg-now.jpg') center/cover no-repeat",
    sections: [
      { heading: 'Building', text: 'OddsBrief. It watches Kalshi prediction markets live and writes a short daily brief with AI. You can try it at oddsbrief.onrender.com.' },
      { heading: 'Working', text: 'Part time at the UW-Whitewater Career Center, keeping the website up to date and helping with Handshake.' },
      { heading: 'Looking for', text: 'A Summer 2027 internship in software, AI, or embedded systems, somewhere I can ship real things and learn from people who are better than me.' },
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
  story: Section[];
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
    story: [
      { heading: 'The project', text: 'The lab studies how the force from an impact travels through the head, for helmet research. I worked on the sensing side: three FSR 402 force sensors placed at the skin, skull, and brain layers of a physical head model.' },
      { heading: 'What I built', text: 'C++ firmware on an ESP32 to read all three sensors, and a Python Flask server that streams the readings over WebSockets to a live Chart.js dashboard. A peak detector catches every impact on all 3 channels and saves it to CSV, so nobody has to copy numbers by hand.' },
      { heading: 'The hard part', text: 'The sensors were noisy even with nothing touching them. I calibrated each one with 200g weights and added a moving-average filter on the ESP32, which cut the baseline noise by about 65%.' },
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
    story: [
      { heading: 'What I do', text: 'I keep the Career Center website up to date in Ingeniux CMS and make sure the pages follow WCAG accessibility rules, so they work with screen readers. I also post events and resources on Handshake and help fix account problems when they come up.' },
    ],
    thumb: "url('/photos/uww-career-services.png') center/cover no-repeat",
  },
];

export type Project = {
  id: string;
  title: string;
  stack: string;
  dateRange?: string;
  story: Section[];
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
    story: [
      { heading: 'What it is', text: 'Kalshi is a site where people trade on real-world events, like whether a team wins or a player goes over a stat. Prices move all day, so OddsBrief puts it on one page: what moved, who placed big bets, and a short AI-written brief of the day.' },
      { heading: 'How it works', text: "It follows Kalshi's 500 most-traded markets through an authenticated WebSocket feed and pages the REST API with retry and backoff, so every $5,000+ trade gets flagged live. A forecast model scores each prediction with a Brier score before learning from it, calibrated across 10 price ranges per category. Gemini writes a daily recap using only data from the database." },
      { heading: 'What broke', text: 'Deploying to Render meant moving off local SQLite and ChromaDB to Supabase Postgres with pgvector for the RAG search. Behind Cloudflare, every visitor showed up with the same IP, so the rate limits hit everyone at once. I fixed it by reading the real visitor IP from the Cloudflare header.' },
      { heading: 'A decision I made', text: "I didn't want a chatbot that makes things up about money. It only answers from the top 5 matches in market rules, past briefs, and user comments, shows where each answer came from, and refuses to give financial advice." },
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
      { heading: 'Why I built it', text: 'For my CYBER 101 class. I wanted to study from our actual lecture slides instead of getting generic answers from a chatbot that had never seen them.' },
      { heading: 'How it works', text: 'python-pptx reads the PowerPoint decks, the slide text goes into a ChromaDB vector index, and Llama 3.2 runs locally through Ollama. It costs $0 to run and no course data leaves my laptop.' },
      { heading: 'A decision I made', text: 'I first built the router with LangGraph as a multi-step agent. It only had to pick between two things (answer a question or make a quiz), so I replaced it with a simple if/else. Now both share one retrieval step and one prompt, and it is much easier to debug.' },
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
    story: [
      { heading: 'What it is', text: 'This is the software side of my IIT Delhi internship, and the code is open source on GitHub.' },
      { heading: 'How it works', text: 'Three FSR 402 sensors sit in a head model at the skin, skull, and brain layers. The ESP32 reads them, Flask streams the readings over WebSockets, and a Chart.js dashboard shows the force moving through each layer. A peak detector logs every impact to CSV.' },
      { heading: 'What broke', text: 'The raw sensor readings were noisy even with nothing touching them. I calibrated each sensor with 200g weights and added a moving-average filter on the ESP32, which cut the baseline noise by 65%.' },
    ],
    githubUrl: 'https://github.com/palan01-droid/drop_tower',
    thumb: '#5a1a3a',
  },
  {
    id: 'sensor-monitor',
    title: 'Sensor Monitor',
    stack: 'Python (Flask, Socket.IO), Groq LLM API, Supabase, Docker/Render',
    story: [
      { heading: 'What it is', text: 'A dashboard that shows live data from Arduino, ESP32, STM32, and Raspberry Pi Pico boards in 3D. You can plug a board in over USB or send data over WiFi, and there is a simulation mode if you have no hardware.' },
      { heading: 'The AI part', text: 'An assistant on the Groq API (Llama 3.3 70B) answers questions about the readings and explains why an alert went off.' },
      { heading: 'Under the hood', text: 'Google login through Supabase, Postgres for storage, 23 pytest tests, and Docker to deploy it on Render.' },
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
    detail: 'My first year at Luther I played NCAA D-III varsity tennis while taking full-time CS classes, and our team won the American Rivers Conference. The last video is me trying a blind serve with a towel over my eyes.',
    media: ['/photos/luther-tennis.webp', '/photos/tennis-huddle.webp', '/videos/blind-serve.mp4'],
    thumb: "url('/photos/luther-tennis.webp') center 65%/cover no-repeat",
  },
  {
    id: 'sgfi-bronze',
    title: 'Bronze Medal, SGFI National School Games',
    org: 'Chandigarh U-19 Tennis Team',
    dateRange: 'Jan. 2025',
    detail: "In January 2025 I led the Chandigarh U-19 boys' team at the 68th National School Games in Ranchi. We took bronze, which was the best way to finish school tennis before leaving for college.",
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
  detail: string;
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
    detail: 'A virtual job simulation from JPMorgan Chase on Forage. I worked on a Java Spring Boot service: it reads transactions from Kafka, checks and saves them with JPA, calls an outside REST API for incentives, and has an endpoint to look up user balances.',
    skills: ['Spring', 'Build Tools', 'Java Programming', 'Message Queuing', 'REST API', 'Spring Framework', 'SQL Database'],
  },
];
