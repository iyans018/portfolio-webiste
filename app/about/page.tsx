import CodeSnippet from "@/components/code-snippet";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";
import { code } from "@/config/codeContent";

const AboutMePage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>About Oktavian</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Code with clarity, build with purpose
        </PageHeaderHeading>
        <PageHeaderDescription>
          I'm a backend developer who enjoys the grind of becoming better at programming. 
          Beyond writing code, I’m passionate about contributing to impactful projects and 
          getting involved in the planning and building process — even if my title doesn't always 
          say "lead", my mindset is always proactive.
        </PageHeaderDescription>

        <PageHeaderDescription>
          I stay curious and committed to learning — exploring Go, Next.js, Redis, RabbitMQ, 
          Cloud Computing, system design, and more. I believe in understanding the bigger 
          picture of every project, because sense of ownership makes all the difference.
        </PageHeaderDescription>

        <PageHeaderDescription>
          Currently, I’m also learning leadership and business strategy, with the goal of 
          turning ideas into digital products, building a strong team, and securing funding 
          to grow them.
        </PageHeaderDescription>
      </PageHeader>

      <Pager
        prevHref="/"
        nextHref="/projects"
        prevTitle="Introduction"
        nextTitle="Projects"
      />
    </>
  );
};
export default AboutMePage;
