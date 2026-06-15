export const profile = {
  name: "Phonlawat Thaenthong",
  title: "FullStack Developer , Software Engineering",
  tagline:
    "Driven by curiosity and a growth mindset, I am a multi-talented engineer who bridges the gap between hardware and software. My expertise includes Full-Stack Development, Embedded Systems, Networking, and AI. I believe in the power of teamwork and constant evolution.",
  phone: "093-134-3447",
  email: "pthaenthong@gmail.com",
  linkedin: "https://www.linkedin.com/in/phonlawat-thaenthong/",
  github: "https://github.com/PhonlawatThaenthong",
  education: {
    school: "Prince of Songkla University",
    degree: "Bachelor of Computer Engineering",
    period: "2023 - Present",
    gpax: "3.51 (6 semesters)",
  },
};

export const skills = {
  "Programming Languages": [
    "Python",
    "JavaScript",
    "TypeScript",
    "C",
    "C++",
    "Dart",
    "HTML",
    "CSS",
  ],
  Frontend: ["ReactJS", "NextJS", "Flutter", "Bootstrap", "Ant Design"],
  Backend: ["NodeJS", "FastAPI", "Strapi", "MongoDB", "PostgreSQL"],
  "Tools & Infra": [
    "Git",
    "Figma",
    "Postman",
    "n8n",
    "NotebookLM",
    "Network Infrastructure",
  ],
};

export const projects = [
  {
    period: "2025 - Present",
    title: "Network Infrastructure Module (240-351)",
    role: "Network Engineer",
    tags: ["Networking", "Infrastructure", "Routing", "Switching"],
    link: "https://github.com/NuimanLP/240-351-Network-Infra-Module",
    image: "/network-topology.png",
    points: [
      "Designed an enterprise CoE network topology with segmented VLANs (MGMT, Guest, Staff, DMZ, EWC) routed through an L3 core switch.",
      "Configured wireless infrastructure (WLC + LWAPP APs), 802.1x and Web Auth, plus a VRRP failover firewall pair (MikroTik) for high availability.",
      "Implemented core services: FreeRADIUS, VPN, DNS, DMZ, PBR routing, and FortiAnalyzer log management.",
    ],
  },
  {
    period: "2026 - Present",
    title: "EZYLife Application for the Blind",
    role: "Internship at PSU Dolphin",
    tags: ["Flutter", "Dart", "Firebase", "Accessibility"],
    video: "/psu-dolphin/dolphin.mp4",
    gallery: [
      "/psu-dolphin/dolphin-1.jpg",
      "/psu-dolphin/dolphin-2.jpg",
      "/psu-dolphin/dolphin-3.jpg",
      "/psu-dolphin/dolphin-4.jpg",
      "/psu-dolphin/dolphin-5.jpg",
      "/psu-dolphin/dolphin-6.jpg",
      "/psu-dolphin/dolphin-7.jpg",
      "/psu-dolphin/dolphin-8.jpg",
      "/psu-dolphin/dolphin-9.jpg",
      "/psu-dolphin/dolphin-10.jpg",
      "/psu-dolphin/dolphin-11.jpg",
    ],
    points: [
      "Developed a cross-platform mobile application, EZY App, using Flutter and Dart to enhance digital accessibility for visually impaired users, featuring 100% screen-reader compatibility (TalkBack and VoiceOver).",
      "Led the core structural development, including the Home, Product Listing, and Detail pages.",
      "Managed the Firebase backend integration for the authentication system.",
    ],
  },
  {
    period: "2025 - 2026",
    title: "AI Expired Date Detection and Notification",
    role: "Project Manager",
    tags: ["AI", "OCR", "Python", "Discord API"],
    points: [
      "Led the development of an AI-based system to automatically detect product expiration dates from images.",
      "Implemented OCR technology to accurately extract date information from photos.",
      "Integrated Discord notifications to alert users when expiration dates are approaching.",
    ],
  },
  {
    period: "2024 - 2025",
    title: "Gesture Car Control",
    role: "Network Developer & Hardware Developer",
    tags: ["ESP32", "Arduino", "Embedded", "Wireless"],
    points: [
      "Developed a wireless communication system between ESP32 and Arduino devices.",
      "Built the networking layer enabling real-time gesture-based control.",
    ],
  },
  {
    period: "2023 - 2024",
    title: "Tourist Booking Website",
    role: "Frontend & Backend Developer",
    tags: ["Full-Stack", "ReactJS", "NodeJS", "Admin Panel"],
    points: [
      "Designed and developed a tourist booking and reservation website.",
      "Implemented a full-stack system covering both frontend and backend functionalities.",
      "Built an admin management system for back-office operations and data management.",
    ],
  },
];
