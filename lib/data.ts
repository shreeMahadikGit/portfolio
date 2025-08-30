export const PROFILE = {
  name: "Shree Mahadik",
  title: "Software Development Engineer (Full‑Stack)",
  location: "Mumbai, Maharashtra",
  email: "shreemahadik899@gmail.com",
  phone: "+91 8433687490",
  github: "https://github.com/shreeMahadikGit",
  // Add LinkedIn or website later if desired
  summary:
    "Full‑stack engineer specializing in scalable microservices, high‑performance web apps, and polished UX. Experience across logistics, real‑time notifications, SSR performance, and web3.",
}

export const SKILLS = {
  languages: ["JavaScript", "TypeScript", "C++", "Dart", "Rust"],
  frontend: [
    "React.js",
    "Next.js",
    "Server-Side Rendering (SSR)",
    "Vue.js",
    "Redux",
    "TanStack",
    "Webpack",
    "Material UI",
    "Chakra UI",
    "Zustand",
    "React Hook Form",
    "React Query",
    "Vuex",
  ],
  backend: [
    "Node.js",
    "Microservices",
    "Redis",
    "WebSockets",
    "Kafka",
    "Bull.js",
    "RabbitMQ",
    "MongoDB",
    "PostgreSQL",
    "Sequelize ORM",
  ],
  cloudDevOps: [
    "Google Cloud (GCP)",
    "AWS",
    "Microsoft Azure",
    "Docker",
    "Kubernetes",
    "Strapi",
    "Postman",
    "Jest",
    "TensorFlow",
  ],
}

export type ExperienceItem = {
  company: string
  role: string
  location: string
  period: string
  bullets: string[]
  tags?: string[]
}

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "Jio Commerce Platform (Fynd)",
    role: "Software Development Engineer I",
    location: "Mumbai, MH",
    period: "Oct 2023 – Present",
    bullets: [
      "Designed and scaled microservices-based distributed systems for logistics providers (Shadowfax, Xpressbees, Delhivery, Bluedart, DHL) with high availability and horizontal scalability.",
      "Platform powers JCP brands including Tira, Netmeds, and Sephora for real-time logistics operations.",
      "Automated serviceable pincode updates with cron orchestration, reducing manual effort and CPU usage by 40%.",
      "Integrated Kafka as a buffer between delivery partner extensions and core services, eliminating webhook timeouts and decoupling flows.",
      "Built and maintained user-facing features with Vue.js ensuring modular, scalable code.",
    ],
    tags: ["Node.js", "Kafka", "Microservices", "Vue.js", "Redis", "PostgreSQL"],
  },
  {
    company: "Fynd Platform",
    role: "SDE I – Web (SSR & Extensions)",
    location: "Mumbai, MH",
    period: "Dec 2022 – Oct 2023",
    bullets: [
      "Led end-to-end development for Fynd Coupons (React), adding SSR for SEO; improved mobile Lighthouse from 14→50+ and desktop from 59→80+ by optimizing FCP/LCP.",
      "Implemented SSR for React extensions, reducing storefront load times by ~60% and improving SEO keyword ranking by 40 positions.",
      "Engineered auto-login feature for Fynd Coupons MicroSite on Jio News serving 400K+ monthly users.",
      "Reduced bundle size by 80% via Babel and gzip strategies.",
      "Delivered real-time push notifications for Store OS using Vue.js + Node.js + FCM + Webhooks; 20K+ monthly notifications, 2K+/day across 20+ storefronts, improving response by 35%.",
    ],
    tags: ["React", "Next/SSR", "Performance", "Babel", "FCM", "Bull.js"],
  },
  {
    company: "Frolic (Real-money Gaming)",
    role: "Graduate Software Development Engineer",
    location: "Noida, UP",
    period: "Dec 2022 – Oct 2023",
    bullets: [
      "Developed smart contracts on Ethereum/Solana; integrated with PostgreSQL-backed systems.",
      "Built B2B NFT infrastructure and marketplace; launched Frolic extension for Fynd to gamify storefront UX.",
    ],
    tags: ["Solidity", "Solana", "PostgreSQL", "NFT", "Web3"],
  },
]

export type Project = {
  name: string
  description: string
  links?: { label: string; href: string }[]
  stack: string[]
  type?: string
}

export const PROJECTS: Project[] = [
  {
    name: "Fynd Logistics Extensions",
    type: "Enterprise",
    description:
      "Fynd Logistics is a MEVN-stack extension designed to manage multiple Delivery Partners, allowing storefront users to seamlessly integrate them for fulfilling their orders.",
    links: [{ label: "Website", href: "https://www.fynd.com/solutions/logistics" }],
    stack: ["Vue Js", "Express", "React", "Node"],
  },
  {
    name: "Fynd Coupons",
    type: "Enterprise",
    description:
      "Fynd Coupons is a MERN stack web application which helpes user gain discount coupons on there favourite brands",
    links: [{ label: "Website", href: "https://www.fyndcoupons.com/" }],
    stack: ["React JS", "Javascript", "Helmet", "GTM", "Google Analytics"],
  },
  {
    name: "KraftNFT",
    type: "Enterprise",
    description:
      "PERN-based NFT marketplace with non-custodial Metamask integration enabling minting, auctions, and bid cancellations.",
    links: [
      { label: "Website", href: "https://docs.fynd.com/commerce/docs/extensions/available-extensions/kraft-nft/" },
    ],
    stack: ["PostgreSQL", "Solidity", "Express", "React", "Node", "Metamask"],
  },
  {
    name: "Expense Tracker (Flutter + Firebase)",
    type: "Open Source",
    description:
      "Serverless mobile app with an intuitive UI to track daily expenses, Google OAuth, and real-time sync.",
    links: [{ label: "GitHub", href: "https://github.com/shreeMahadikGit/Expense-tracker-flutter" }],
    stack: ["Flutter", "Dart", "Firebase", "Google OAuth"],
  },
  {
    name: "Real-Time Number Plate Detection",
    type: "Private/ Freelance",
    description:
      "License Plate Recognition using a custom ML model, OpenCV + TensorFlow. Achieved ~95% accuracy and cut manual time by ~60%.",
    links: [{ label: "GitHub", href: "https://github.com/shreeMahadikGit/RealTime-Number-Plate-detection-Project" }],
    stack: ["Python", "TensorFlow", "OpenCV"],
  },
]

export const ACHIEVEMENTS = [
  "Google Cloud Ready Program — Silver League (certificate + swag).",
  "#30DaysOfGoogleCloud — Bronze League (certificate + swag).",
]

export const EDUCATION = {
  degree: "Bachelors in Computer Science (CGPA: 9.8/10)",
  school: "B.K. Birla College, Kalyan, Maharashtra",
  year: "2022",
}
