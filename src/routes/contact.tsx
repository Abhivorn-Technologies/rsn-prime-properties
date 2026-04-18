import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Contact } from "@/components/Contact";

export default function ContactPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Get In Touch"
        title="Let's Build Your"
        highlight="Future Together"
        description="Schedule a site visit, ask about a property, or get personalized investment guidance — we're here to help."
        breadcrumb="Contact"
      />
      <Contact />
    </SiteLayout>
  );
}
