import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";

const services = [
  {
    title: "Backend Engineering",
    description:
      "Custom REST APIs, automation workflows, and high-performance backend logic. I help founders and dev teams build robust backend systems using Python, Node.js, and modern architecture patterns.",
    points: [
      "Design and development of RESTful APIs",
      "Workflow automation (scraping, document generation, data sync)",
      "Database optimization (PostgreSQL, Oracle)",
      "Asynchronous jobs using Celery and RabbitMQ",
      "3rd-party API integrations (e.g. Microsoft Graph, SharePoint)"
    ]
  },
  {
    title: "Technical Writing",
    description:
      "Clear, developer-friendly technical content that communicates complex systems in a human-readable format. Perfect for SaaS, dev tools, or internal documentation needs.",
    points: [
      "Tutorials and use-case articles for dev tools",
      "System and API documentation (Swagger, Markdown)",
      "Developer onboarding guides and internal wikis",
      "Developer ghostwriting for personal branding"
    ]
  }
];

const ServicesPage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Services</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Your backend should be quiet, fast, and bulletproof. That’s what I build.
        </PageHeaderHeading>
        <PageHeaderDescription>
          I help startups, dev teams, and solo founders design solid backends, clean API contracts, and systems that scale
          with confidence. Whether you're building your MVP or scaling internal tools, my goal is to eliminate bottlenecks,
          automate workflows, and let your product run faster with fewer bugs.
        </PageHeaderDescription>
      </PageHeader>

      <div className="grid gap-10 mb-10 md:grid-cols-2">
        {services.map((service, index) => (
          <div key={index} className="border rounded-2xl p-6 bg-card shadow-sm">
            <h2 className="text-xl font-semibold text-foreground mb-3">
              {service.title}
            </h2>
            <p className="text-muted-foreground mb-4">
              {service.description}
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm text-foreground">
              {service.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Pager
        prevHref="/education"
        nextHref="/contact"
        prevTitle="Education"
        nextTitle="Contact"
      />
    </>
  );
};

export default ServicesPage;