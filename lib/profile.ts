export const PROFILE = {
  name: "Shree Mahadik",
  title: "Full-Stack Engineer • SDE I @ Fynd (JCP)",
  location: "Mumbai, Maharashtra",
  email: "shreemahadik899@gmail.com",
  phone: "+91 8433687490",
  github: "https://github.com/shreeMahadikGit",
  // Primary highlights for hero
  highlights: [
    "Built microservices & real-time systems (Kafka, Redis, WebSockets)",
    "SSR + performance wins (LCP/FCP, SEO) across React/Vue apps",
    "Logistics & notifications at scale (20k+ pushes/month)",
  ],
  skills: {
    languages: ["JavaScript", "TypeScript", "C++", "Dart", "Rust"],
    frontend: ["React", "Next.js", "SSR", "Vue.js"],
    backend: ["Node.js", "Fastify", "Microservices", "Redis", "Kafka", "WebSockets"],
    cloud: ["GCP", "AWS", "Azure"],
    db: ["PostgreSQL", "MongoDB", "Sequelize ORM"],
    tools: ["Docker", "Kubernetes", "Bull", "RabbitMQ", "Jest", "Strapi", "Postman", "TensorFlow"],
  },
  experience: [
    {
      company: "Fynd • Jio Commerce Platform (JCP)",
      title: "Software Development Engineer I",
      period: "Oct 2023 – Present",
      bullets: [
        "Designed and scaled microservices for logistics partners (Shadowfax, Xpressbees, Delhivery, Bluedart, DHL).",
        "Integrated Kafka to decouple partner webhooks and core services; removed timeouts and improved reliability.",
        "Automated serviceable-pincode sync with cron orchestration; reduced CPU usage ~40%.",
        "Built user-facing features in Vue; delivered Store OS push notifications (20k+/month, 1k+ managers).",
      ],
    },
    {
      company: "Frolic (Real-money Gaming)",
      title: "Graduate Software Development Engineer",
      period: "Dec 2022 – Oct 2023",
      bullets: [
        "Developed smart contracts on Ethereum & Solana; integrated with a PostgreSQL-backed system.",
        "Engineered B2B NFT infra and marketplace; launched Frolic extension on Fynd Platform.",
      ],
    },
  ],
  projects: [
    {
      name: "Fynd Coupons",
      link: "#",
      description:
        "End-to-end site with SSR for SEO. Mobile performance improved from 14 to 50+, desktop 59 to 80+ (FCP/LCP).",
      stack: ["React", "SSR", "Babel", "Gzip"],
    },
    {
      name: "Push Notification System • Store OS",
      link: "#",
      description:
        "Real-time push via FCM + Webhooks, queueing with Bull, scaling to 2k+ daily across 20+ storefronts.",
      stack: ["Vue", "Node", "FCM", "Bull"],
    },
    {
      name: "Real-time Number Plate Detection",
      link: "https://github.com/Real-NP",
      description: "OpenCV + TensorFlow model with ~95% accuracy; reduced manual processing by ~60%.",
      stack: ["Python", "TensorFlow", "OpenCV"],
    },
  ],
  education: {
    school: "B.K. Birla College",
    degree: "Bachelors in Computer Science",
    cgpa: "9.8/10",
    year: "2022",
    location: "Kalyan, Maharashtra",
  },
  achievements: ["Google Cloud Ready – Silver League", "#30DaysOfGoogleCloud – Bronze League"],
} as const
