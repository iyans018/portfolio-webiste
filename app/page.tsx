import { PageActions } from "@/components/page-header";
import {
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { PageHeader } from "@/components/page-header";
import Pager from "@/components/pager";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { ExternalLink, Mail } from "lucide-react";

const IntroductionPage = async () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Oktavian Aji</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Backend Engineer & Technical Writer
        </PageHeaderHeading>
        <PageHeaderDescription>
          I help digital products, SaaS startups, and dev teams eliminate backend bottlenecks, 
          automate internal processes, and communicate their technology through clear, 
          developer-friendly writing. With over 3 years of experience, I bring both hands-on backend 
          engineering skills and the ability to articulate complex systems into accessible content.
        </PageHeaderDescription>
        <PageHeaderDescription className="mt-2"> 
          I’m currently available for freelance projects, consulting, and full-time opportunities.
          Let’s build something that scales in logic, in clarity, and in impact.
        </PageHeaderDescription>
        <PageActions>
          <Button asChild size="sm" className="rounded-md">
            <Link href={siteConfig.links.resume} target="_blank">
              Get Resume
              <ExternalLink className="size-3" strokeWidth={2} />
            </Link>
          </Button>
          <Button asChild size="sm" variant="ghost" className="rounded-md">
            <Link href={siteConfig.links.email}>
              <Mail className="size-4" />
              Send Mail
            </Link>
          </Button>
        </PageActions>
      </PageHeader>

      <Pager
        prevHref="/"
        nextHref="/about"
        prevTitle="Previous"
        nextTitle="About Me"
      />
    </>
  );
};
export default IntroductionPage;
