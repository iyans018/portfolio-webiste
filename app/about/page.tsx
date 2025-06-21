import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import Pager from "@/components/pager";

const AboutMePage = () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>About Oktavian</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Code with clarity, build with purpose
        </PageHeaderHeading>
        <PageHeaderDescription>
          I'm a backend developer based in Indonesia with a focus on Python and Node.js. I specialize in designing scalable REST APIs, 
          optimizing relational databases, and integrating third-party services like Microsoft Graph and SharePoint. I’ve worked in highly 
          structured enterprise environments, contributing to legal, HR, and procurement systems.
        </PageHeaderDescription>

        <PageHeaderDescription>
          Outside of engineering, I’m also passionate about writing. I use Medium to translate backend 
          experience into technical articles, and I’m currently expanding into developer-focused ghostwriting.
        </PageHeaderDescription>

        <PageHeaderDescription>
          My long-term goal is to lead backend initiatives, build developer tools, and help more products 
          communicate clearly and scale efficiently.
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
