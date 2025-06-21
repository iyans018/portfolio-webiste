import { title } from "process";

export const siteConfig = {
  name: "oktavianaji.xyz",
  url: "https://oktavianaji.xyz",
  ogImage: "https://oktavianaji.xyz/og.jpg",
  description: "Portfolio of Oktavian Aji",
  links: {
    shadcn: "https://ui.shadcn.com/",
    telegram: "https://t.me/iyans018",
    twitter: "https://x.com/iyans018",
    github: "https://github.com/iyans018/portfolio-web-fe",
    githubProfile: "https://github.com/iyans018",
    resume: "https://www.overleaf.com/read/pwbbqtpthxxr#946f81",
    email: "mailto:oktavian.aji18@gmail.com",
    githubUsername: "iyans018",
  },
  bitinfonepal: "https://bitinfonepal.com",
  projects: {
    legal: {
      title:
        "Legal Contract Approval System",
      description:
        "Digitized and automated legal contract workflows using Django + Oracle SQL. Integrated with Microsoft SharePoint for centralized file management, reducing approval time by 50%.",
      tags: [
        "Python",
        "Django",
        "Django REST Framework",
        "Oracle SQL",
        "Celery",
        "Redis",
        "MS Graph API",
        "Python-Docx",
        "SharePoint"
      ]
    },
    partner: {
      title: "Partner Data Management System",
      description:
        "Built a centralized backend to unify partner data across sales and operations, resulting in cleaner analytics and increased team productivity.",
      tags: [
        "Python",
        "Django",
        "Django REST Framework",
        "Oracle SQL",
        "Alfresco"
      ],
    },
    timesheet: {
      title: "Mobile Timesheet App (Internal)",
      description:
        "Mantain leave and time-logging backend, optimized performance, and implemented Airflow DAGs to automate internal reporting workflows.",
      tags: [
        "Python",
        "Django",
        "Django REST Framework",
        "Oracle SQL",
        "Apache Airflow",
        "MS Teams Messaging"
      ],
    },
    moducommerce: {
      title: "ModuCommerce (Capstone Project)",
      description: "Experimental microservices-based e-commerce system using RabbitMQ pub/sub pattern. Simulates scalable architecture and async communication.",
      github: "https://github.com/iyans018/ecommerce-asynchsronous-microservice-v2",
      tags: [
        "Javascript",
        "Node.js",
        "Express.js",
        "RabbitMQ",
        "JMeter",
        "MongoDB",
      ],
    },
    eis: {
      title: "EIS — Extracurricular Information System",
      description: "Created a school system to coordinate student organizations, streamline activity tracking, and centralize documentation.",
      tags: [
        "Vue.js",
        "Nuxt.js",
        "Javascript",
        "Node.js",
        "Python",
        "Django",
        "Django REST Framework",
        "PostgreSQL",
        "Docker",
      ],
    },
  },
};

export type SiteConfig = typeof siteConfig;

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};
