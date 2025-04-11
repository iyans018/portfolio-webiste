import { PageHeader, PageHeaderHeading } from "@/components/page-header";
import Pager from "@/components/pager";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContactForm from "./ContactForm";

const ContactPage = async () => {
  return (
    <>
      <PageHeader>
        <PageHeaderHeading>Contact</PageHeaderHeading>
        <PageHeaderHeading className="mt-2 text-muted-foreground">
          Get in touch before I write another line of code!
        </PageHeaderHeading>
      </PageHeader>

      <div id="tabs" className="flex items-center mt-8">
        <Tabs defaultValue="form" className="w-full">
          <TabsContent value="form" className="mt-4">
            <ContactForm />
          </TabsContent>
        </Tabs>
      </div>

      <Pager
        prevHref="/education"
        nextHref="/"
        prevTitle="Education"
        nextTitle="Home"
      />
    </>
  );
};
export default ContactPage;
