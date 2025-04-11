export const code = {
  welcome: `// app/api/welcome/route.js
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({ 
    message: "Hey there, curious mind! Welcome to my little corner of the web — where backend meets bold ideas!" 
  });
}
`,

  aboutMe: `const superpower = () => "Building clean, scalable backend systems with real impact!";
console.log(\`My superpower is: \${superpower()}\`);
`,

  skillsTools: `const mySkills = [
  "HTML", "CSS", "JavaScript", "TypeScript", "ReactJS", "NextJS", "Tailwind CSS",
  "shadcn/ui", "NodeJS", "ExpressJS", "MongoDB", "Git", "GitHub", "Vercel", 
  "Postman", "Linux", "macOS", "Windows", "pnpm", "npm", "yarn", "Docker", "Radix UI"
];

const getSkills = () => {
  return mySkills.length > 0 
    ? \`I have skills in: \${mySkills.join(", ")}! 💻🚀\`
    : "Skills not found... Panic!";
};

console.log(getSkills());
`,

  contact: `const contactDetails = {
    name: "Oktavian Aji",
    email: "oktavian.aji18@gmail.com",
    mobile: "+62-896-4337-1072",
    location: "Jakarta, Indonesia",
    linkedIn: "linkedin.com/in/oktavian-aji-3a43b0216/",
    github: "github.com/iyans018",
  };
  
function reachOut() {
  console.log(\`Reach out to me via email at \${contactDetails.email} or connect on LinkedIn: \${contactDetails.linkedIn}\`);
}

reachOut();
`,

  experience: `const experience = [
  {
    role: "Senior Coffee Consumer",
    company: "Remote Office (My Desk)",
    duration: "Forever",
    skills: ["Caffeine Management", "Bug Staring", "Keyboard Jamming"],
  },
  {
    role: "Full-Stack Developer",
    company: "Stack Overflow Solutions Inc.",
    duration: "When Google is Available",
    skills: ["Copy-Pasting", "Fixing Bugs with Console.log", "Deploying & Praying"],
  },
  {
    role: "Intern",
    company: "My Own Side Projects",
    duration: "Since Birth",
    skills: ["Breaking Code", "Googling Errors", "Naming Variables Creatively"],
  },
];

experience.forEach((job) => {
  console.log(\`👨‍💻 \${job.role} at \${job.company} (\${job.duration}) \n🚀 Skills: \${job.skills.join(", ")}\`);
});
`,

  projects: `const projectField = {
  idea: "Overnight hackathon brilliance",
  execution: "Debugging marathons",
  outcome: "Works on my machine... most days!",
};

console.log("Project Field:", projectField);
`,

  educationJourney: `const educationJourney = {
  degree: "Bachelor of Life Lessons (and Code)",
  courses: [
    "Advanced Caffeine Dependency",
    "Procrastination 101",
    "Debugging: The Final Frontier",
  ],
};

console.log(\`My Education: \${educationJourney.degree}\`);
educationJourney.courses.forEach(course => console.log(\`- \${course}\`));
`,
};
