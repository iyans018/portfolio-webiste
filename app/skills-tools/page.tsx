import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header"
import Pager from "@/components/pager"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import React from "react"

interface SkillGroupProps {
  title: string
  items: string[]
  colorClass: string
}

const SkillGroup: React.FC<SkillGroupProps> = ({ title, items, colorClass }) => (
  <div className="space-y-4">
    <h2 className="text-xl font-semibold">{title}</h2>
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Badge key={item} className={colorClass}>
          {item}
        </Badge>
      ))}
    </div>
  </div>
)

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
  workflow: [
    "Microservices (Experimental)",
    "Pub/Sub Messaging",
    "System Design (Studying)",
  ],
  cloud: [
    "Microsoft SharePoint Integration",
    "Deployment to Linux VPS (manual)",
    "CDN Concepts (Studied)",
  ],
  softSkills: [
    "Technical Documentation Writing",
    "Journaling & Idea Development",
    "Leadership & Team Planning (Learning)",
    "Product Strategy & Business Thinking (Learning)",
    "Public Speaking & Comedy Writing (for communication improvement)",
  ],
}

const SkillsToolsPage: React.FC = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Skills & Tools</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Versatile in the backend, curious beyond the stack.
        </PageHeaderHeading>
        <PageHeaderDescription>
          I’m a backend-focused software developer with a sharp eye on system design,
          performance optimization, and architectural patterns. My technical journey is
          grounded in strong fundamentals, but driven by curiosity to explore beyond — from
          cloud-native tools to modern frontend frameworks.
        </PageHeaderDescription>
        <PageHeaderDescription>
          I enjoy learning new technologies, exploring unfamiliar stacks, and integrating
          them into real-world solutions.
        </PageHeaderDescription>
      </PageHeader>

      <div className="grid md:grid-cols-2 gap-10 mb-10">
        <SkillGroup
          title="Languages"
          items={skills.languages}
          colorClass="bg-yellow-100 text-yellow-800"
        />
        <SkillGroup
          title="Backend & API"
          items={skills.backend}
          colorClass="bg-blue-100 text-blue-800"
        />
        <SkillGroup
          title="Frontend (In Progress)"
          items={skills.frontend}
          colorClass="bg-green-100 text-green-800"
        />
        <SkillGroup
          title="Dev Tools"
          items={skills.devTools}
          colorClass="bg-gray-200 text-gray-800"
        />
        <SkillGroup
          title="Workflow & Architecture"
          items={skills.workflow}
          colorClass="bg-purple-100 text-purple-800"
        />
        <SkillGroup
          title="Cloud & Integrations"
          items={skills.cloud}
          colorClass="bg-sky-100 text-sky-800"
        />
        <div className="md:col-span-2">
          <SkillGroup
            title="Soft Skills & Others"
            items={skills.softSkills}
            colorClass="bg-pink-100 text-pink-800"
          />
        </div>
      </div>

      <Separator className="my-10" />

      <p className="text-muted-foreground text-base">
        Beyond coding, I have a growing passion for product thinking and leadership. I strive to
        understand the big picture, connect technical decisions with business impact, and contribute
        meaningfully — whether as an engineer, a planner, or a future founder.
      </p>

      <Pager
        prevHref="/projects"
        nextHref="/experience"
        prevTitle="Projects"
        nextTitle="Experience"
      />
    </>
  )
}

export default SkillsToolsPage