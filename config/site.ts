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
    email: "mailto:hi@abhishekg.com.np",
    githubUsername: "iyans018",
  },
  bitinfonepal: "https://bitinfonepal.com",
  projects: {
    bitinfonepal: {
      title:
        "bitinfonepal.com · An educational website for BIT students in Nepal",
      description:
        "bitinfonepal.com is a dedicated educational platform for BIT students in Nepal, offering resources such as study materials, file uploads, and pagination features, all designed with an intuitive interface using Next.js, React, and Tailwind CSS. The platform also integrates MathJax for rendering complex mathematical formulas, enhancing the academic experience for students. Developed with TypeScript, and Nodemailer.",
      tags: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "AppScript",
        "Cheerio",
        "SheetAPI",
        "TypeScript",
        "Nodemailer",
        "File Upload",
        "MathJax",
        "Web Application",
      ],
      live: "https://bitinfonepal.com",
    },
    notebook: {
      title: "Notebook · Full Stack Web Application",
      github: "https://github.com/cypherab01/notebook",
      live: "https://notebook.abhishekg.com.np",
      description:
        "A comprehensive full-stack web application for note-taking. While it serves as a basic CRUD application, it incorporates modern technologies like Auth.js (NextAuth), MongoDB, and API routes in Next.js, among others.",
      tags: [
        "Next.js",
        "React",
        "Tailwind CSS",
        "shadcn/ui",
        "Next.js API Routes",
        "MongoDB",
        "Auth.js",
        "JWT Authentication",
        "Bcrypt",
        "Nodemailer",
        "Radix UI",
        "TypeScript",
        "Full Stack",
        "Web Application",
      ],
    },
    gharkosaaman: {
      title: "Gharkosaaman · An Exchange Platform",
      description:
        "An exchange platform for exchanging goods & items available unused in the home.",
      tags: [
        "Next.js",
        "Tailwind CSS",
        "MongoDB",
        "JWT Authentication",
        "Bcrypt",
        "Nodemailer",
        "Radix UI",
        "TypeScript",
        "Full Stack",
        "Uploadthing",
        "Web Application",
      ],
    },
    movie: {
      title: "Movie App · Discover about the movies",
      description: "React Native app for discovering about the movies.",
      github: "https://github.com/cypherab01/rn-movie-app",
      tags: [
        "React Native",
        "Expo",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Navigation",
        "NativeWind",
        "Reanimated",
        "Mobile App",
      ],
    },
  },
};

export type SiteConfig = typeof siteConfig;

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};
