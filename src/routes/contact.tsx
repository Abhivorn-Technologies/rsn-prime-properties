import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact RSN Infra & Properties — Site Visits & Enquiries" },
      {
        name: "description",
        content:
          "Get in touch with RSN Infra & Properties for site visits, plot details, villa enquiries and investment guidance. Call 9705811199 or visit our Kukatpally office.",
      },
      { property: "og:title", content: "Contact RSN Infra & Properties" },
      {
        property: "og:description",
        content:
          "Reach out for site visits, property details and investment guidance in Hyderabad.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
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
