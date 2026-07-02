// All portfolio content lives here — swap in real photos/certs by dropping
// files into public/photos and public/certificates and updating the paths.

export const profile = {
  name: 'Anuj Pal',
  tagline: 'CS Sophomore · IIT Research Intern (x2) · NCAA D-III Varsity Athlete',
  location: 'Decorah, IA',
  email: 'anujpald07@gmail.com',
  linkedin: 'https://www.linkedin.com/in/anujpal/',
  github: 'https://github.com/palan01-droid',
  summary:
    "Computer Science sophomore and two-time IIT research intern, building full-stack and embedded systems from real-time IoT dashboards to multi-sensor biomechanics instrumentation. NCAA D-III varsity athlete with a track record of delivering under load. Seeking a Summer 2027 internship.",
  resumeUrl: '/anuj_pal_resume.pdf',
  photo: '/photos/profile-placeholder.svg',
};

export const education = {
  school: 'Luther College',
  degree: 'Bachelor of Arts in Computer Science',
  dateRange: 'Aug. 2025 – May 2028 (Expected)',
  location: 'Decorah, IA',
  coursework: ['Data Structures', 'Algorithms', 'Python Programming', 'Discrete Mathematics'],
};

export type Experience = {
  id: string;
  title: string;
  org: string;
  location: string;
  dateRange: string;
  tags: string[];
  points: string[];
  thumb: string; // color used for the placeholder tile art
};

export const experience: Experience[] = [
  {
    id: 'iit-delhi',
    title: 'Research Intern — Biomedical Instrumentation',
    org: 'Centre for Biomedical Engineering (CBME), IIT Delhi',
    location: 'New Delhi, India',
    dateRange: 'Jun. 2026 – Present',
    tags: ['Python', 'Flask', 'Socket.IO', 'Circuit Design', 'FSR Sensors'],
    points: [
      'Built a real-time impact-testing system (Python, Flask, Socket.IO) that streams live force readings over WebSockets and automatically captures peak pressure on each impact for analysis',
      'Designed and wired a multi-layer sensor circuit with three FSR 402 sensors modeling skin, skull, and brain layers, measuring how impact force transfers through a physical head model',
      'Ramped from sensor and circuit fundamentals to a working data-acquisition pipeline within weeks, operating in a structured corporate research environment with regular progress reviews',
    ],
    thumb: '#1a3a6e',
  },
  {
    id: 'iit-roorkee',
    title: 'Research Intern — IoT & AI Systems',
    org: 'Extreme Mechanics Laboratory, IIT Roorkee',
    location: 'Roorkee, India',
    dateRange: 'Jun. 2026 – Jul. 2026',
    tags: ['Arduino', 'Machine Learning', 'IoT', 'Mobile Integration'],
    points: [
      'Engineered an IoT crash-detection device for automotive safety under Prof. Shailesh Ganpule, building Arduino sensor circuits and Python pipelines for real-time impact-data collection',
      'Applied machine learning to crash-event data and built a live visualization GUI integrated with a companion mobile application',
    ],
    thumb: '#6e2a1a',
  },
];

export type Project = {
  id: string;
  title: string;
  stack: string;
  dateRange?: string;
  points: string[];
  liveUrl?: string;
  githubUrl?: string;
  thumb: string;
};

export const projects: Project[] = [
  {
    id: 'sensor-monitor',
    title: 'Sensor Monitor',
    stack: 'Python (Flask, Socket.IO), Groq LLM API, Supabase, Docker/Render',
    points: [
      'Full-stack platform streaming live sensor data from 4 microcontroller families (Arduino, ESP32, STM32, Raspberry Pi Pico) to a 3D-visualized dashboard over WebSockets (<50ms latency)',
      'Integrated the Groq LLM API (Llama 3.3 70B) to power a conversational AI that answers natural-language questions about sensor data and auto-explains anomalies',
      'Built a REST/WebSocket API with Google OAuth via Supabase supporting serial and WiFi sensor ingestion backed by PostgreSQL',
      'Containerized with Docker and deployed live on Render, backed by 23 pytest tests covering auth, ingestion, and validation',
    ],
    liveUrl: 'https://sensor-monitor-n0rm.onrender.com',
    githubUrl: 'https://github.com/palan01-droid/sensor_monitor',
    thumb: '#0d4d2e',
  },
  {
    id: 'drop-tower',
    title: 'Drop Tower',
    stack: 'Python (Flask, Socket.IO), JavaScript (Chart.js), ESP32',
    points: [
      'Open-source biomechanics dashboard streaming live FSR 402 readings from a 3-layer head model and auto-logging peak impact values',
      'Rolling charts visualize force propagation across skin, skull, and brain',
    ],
    githubUrl: 'https://github.com/palan01-droid/drop_tower',
    thumb: '#5a1a6e',
  },
];

export type SkillGroup = { id: string; category: string; items: string[]; thumb: string };

export const skills: SkillGroup[] = [
  { id: 'languages', category: 'Languages', items: ['Python', 'C/C++', 'SQL', 'HTML/CSS'], thumb: '#1a5a6e' },
  { id: 'frameworks', category: 'Frameworks & Libraries', items: ['Flask', 'Socket.IO', 'Three.js', 'Chart.js', 'React.js', 'Node.js'], thumb: '#6e5a1a' },
  { id: 'hardware', category: 'Hardware & Embedded', items: ['Arduino', 'ESP32', 'STM32', 'Raspberry Pi Pico', 'Circuit Design', 'FSR Sensors'], thumb: '#1a6e3d' },
  { id: 'data-ai', category: 'Data & AI', items: ['Machine Learning', 'Data Analysis', 'Real-Time Data Pipelines'], thumb: '#6e1a4d' },
  { id: 'tools', category: 'Tools & Platforms', items: ['Git', 'GitHub', 'Linux/Bash', 'REST APIs', 'VS Code', 'AWS/GCP'], thumb: '#4d1a6e' },
];

export type Achievement = { id: string; title: string; org: string; dateRange: string; detail: string; thumb: string };

export const achievements: Achievement[] = [
  {
    id: 'tennis-champion',
    title: "Men's Varsity Tennis — American Rivers Conference Champions",
    org: 'Luther College',
    dateRange: '2024–25',
    detail: 'Balanced NCAA D-III athletics with full-time CS coursework as a varsity player on the conference-champion team.',
    thumb: '#6e3a1a',
  },
  {
    id: 'sgfi-bronze',
    title: 'Bronze Medal, SGFI National School Games',
    org: 'Chandigarh U-19 Tennis Team',
    dateRange: '2024–25',
    detail: 'Led the Chandigarh nationals tennis team (U-19) to a bronze medal at the national games in Ranchi, India.',
    thumb: '#6e1a1a',
  },
];

export type Certificate = { id: string; title: string; issuer: string; thumb: string };

// Empty for now — add real certificates here as { id, title, issuer, thumb }
// once you have them, and the Certifications row will reappear automatically.
export const certificates: Certificate[] = [];
