import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";

const testimonials = [
  {
    name: "Dimas R.",
    role: "Tech Lead, Enterprise Legal System",
    content:
      "Oktavian is the kind of backend engineer who understands both business logic and system performance. He doesn’t just ship code — he ships clarity and maintainability. His SharePoint integration and Celery refactor helped us scale with confidence."
  },
  {
    name: "Anita P.",
    role: "Product Manager, HRIS Platform",
    content:
      "He’s the developer you want when the problem is messy. Oktavian translated chaotic workflows into clean, scalable APIs. Our engineers onboarded 2x faster thanks to the documentation he wrote."
  },
  {
    name: "Alvin T.",
    role: "Co-Founder, EdTech MVP",
    content:
      "When we needed a prototype backend in days, not weeks — Oktavian delivered. Async logic, structured endpoints, clean database modeling. He’s efficient and thoughtful with his architecture."
  }
];

const TestimonialsPage = () => {
  return (
    <>
      <PageHeader className="mb-10">
        <PageHeaderHeading>Testimonials</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Words from teams I’ve built with.
        </PageHeaderHeading>
        <PageHeaderDescription>
          Real feedback from people I've worked with — clients, managers, and peers. I focus on high-leverage delivery,
          system clarity, and developer trust. Here’s what they’ve shared.
        </PageHeaderDescription>
      </PageHeader>

      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="border rounded-2xl p-6 bg-card shadow-sm flex flex-col justify-between"
          >
            <p className="text-muted-foreground text-sm mb-4">
              "{testimonial.content}"
            </p>
            <div>
              <p className="font-semibold text-foreground">{testimonial.name}</p>
              <p className="text-xs text-muted-foreground">{testimonial.role}</p>
            </div>
          </div>
        ))}
      </div>

      <Pager
        prevHref="/services"
        nextHref="/contact"
        prevTitle="Services"
        nextTitle="Contact"
      />
    </>
  );
};

export default TestimonialsPage;