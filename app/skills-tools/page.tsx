import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const skills = {
  languages: ["Python", "JavaScript (Node.js)", "Go (Learning)", "SQL"],
  backend: [
    "RESTful API",
    "Event-Driven Architecture",
    "WebSocket",
    "Celery",
    "RabbitMQ",
    "Redis",
    "PostgreSQL",
    "Apache Airflow",
  ],
  frontend: ["React.js", "Next.js", "Vue.js", "Nuxt.js", "Tailwind CSS"],
  devTools: ["Git & GitHub", "Docker", "PM2", "UWSGI", "NGINX", "VS Code"],
  workflow: ["Microservices (Experimental)", "Pub/Sub Messaging", "System Design (Studying)"],
  cloud: ["Microsoft SharePoint Integration", "Deployment to Linux VPS (manual)", "CDN Concepts (Studied)"],
  softSkills: [
    "Technical Documentation Writing",
    "Journaling & Idea Development",
    "Leadership & Team Planning (Learning)",
    "Product Strategy & Business Thinking (Learning)",
    "Public Speaking & Comedy Writing (for communication improvement)",
  ],
}

const sectionStyle = "space-y-4"

export default function SkillsToolsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-6">Skills & Tools</h1>
      <p className="text-gray-600 mb-10 text-lg">
        I’m a backend-focused software developer with a sharp eye on system design, performance
        optimization, and architectural patterns. My technical journey is grounded in strong
        fundamentals, but driven by curiosity to explore beyond — from cloud-native tools to modern
        frontend frameworks. I enjoy learning new technologies, exploring unfamiliar stacks, and
        integrating them into real-world solutions.
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        <div className={sectionStyle}>
          <h2 className="text-xl font-semibold">Languages</h2>
          <div className="flex flex-wrap gap-2">
            {skills.languages.map((item) => (
              <Badge key={item} className="bg-yellow-100 text-yellow-800">
                {item}
              </Badge>
            ))}
          </div>
        </div>

        <div className={sectionStyle}>
          <h2 className="text-xl font-semibold">Backend & API</h2>
          <div className="flex flex-wrap gap-2">
            {skills.backend.map((item) => (
              <Badge key={item} className="bg-blue-100 text-blue-800">
                {item}
              </Badge>
            ))}
          </div>
        </div>

        <div className={sectionStyle}>
          <h2 className="text-xl font-semibold">Frontend (In Progress)</h2>
          <div className="flex flex-wrap gap-2">
            {skills.frontend.map((item) => (
              <Badge key={item} className="bg-green-100 text-green-800">
                {item}
              </Badge>
            ))}
          </div>
        </div>

        <div className={sectionStyle}>
          <h2 className="text-xl font-semibold">Dev Tools</h2>
          <div className="flex flex-wrap gap-2">
            {skills.devTools.map((item) => (
              <Badge key={item} className="bg-gray-200 text-gray-800">
                {item}
              </Badge>
            ))}
          </div>
        </div>

        <div className={sectionStyle}>
          <h2 className="text-xl font-semibold">Workflow & Architecture</h2>
          <div className="flex flex-wrap gap-2">
            {skills.workflow.map((item) => (
              <Badge key={item} className="bg-purple-100 text-purple-800">
                {item}
              </Badge>
            ))}
          </div>
        </div>

        <div className={sectionStyle}>
          <h2 className="text-xl font-semibold">Cloud & Integrations</h2>
          <div className="flex flex-wrap gap-2">
            {skills.cloud.map((item) => (
              <Badge key={item} className="bg-sky-100 text-sky-800">
                {item}
              </Badge>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 space-y-4">
          <h2 className="text-xl font-semibold">Soft Skills & Others</h2>
          <div className="flex flex-wrap gap-2">
            {skills.softSkills.map((item) => (
              <Badge key={item} className="bg-pink-100 text-pink-800">
                {item}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <Separator className="my-10" />

      <p className="text-gray-600 text-base">
        Beyond coding, I have a growing passion for product thinking and leadership. I strive to
        understand the big picture, connect technical decisions with business impact, and contribute
        meaningfully — whether as an engineer, a planner, or a future founder.
      </p>
    </main>
  )
} 
