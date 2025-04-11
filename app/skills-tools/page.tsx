import CodeSnippet from "@/components/code-snippet";
import { Icons } from "@/components/icons";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";
import { Badge } from "@/components/ui/badge";
import { code } from "@/config/codeContent";
import { mySkills } from "@/constants";

const SkillsToolsPage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Skills & Tools</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          From backend logic to product vision — I build with clarity, adapt with curiosity.
        </PageHeaderHeading>
        <PageHeaderDescription>
          I’m a backend-focused software developer with a sharp eye on system design, 
          performance optimization, and architectural patterns. My technical journey is 
          grounded in strong fundamentals, but driven by curiosity to explore beyond — 
          from cloud-native tools to modern frontend frameworks. I enjoy learning new 
          technologies, exploring unfamiliar stacks, and integrating them into real-world 
          solutions.
        </PageHeaderDescription>
        <PageHeaderDescription>
          Beyond coding, I have a growing passion for product thinking and leadership. 
          I strive to understand the big picture, connect technical decisions with business 
          impact, and contribute meaningfully — whether as an engineer, a planner, or a future founder.
        </PageHeaderDescription>
      </PageHeader>

      {/* skills and tools badges */}

      <div
        id="badges"
        className="flex flex-wrap items-center justify-center gap-2 my-4"
      >
        {mySkills.map((item) => (
          <Badge
            key={item.title}
            className="p-4 py-2 border border-secondary bg-secondary-foreground text-secondary"
          >
            {Icons[item.icon as keyof typeof Icons]?.({
              className: "mr-2 size-4",
            })}
            {item.title}
          </Badge>
        ))}
      </div>

      <Pager
        prevHref="/projects"
        nextHref="/experience"
        prevTitle="Projects"
        nextTitle="Experience"
      />
    </>
  );
};
export default SkillsToolsPage;
