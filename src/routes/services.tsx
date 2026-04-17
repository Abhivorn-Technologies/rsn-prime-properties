import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Services } from "@/components/Services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Open Plots, Villas & Investment Guidance | RSN Infra" },
      {
        name: "description",
        content:
          "Explore RSN Infra & Properties' services — open plots, luxury villas, flats, investment guidance, verified properties, legal documentation and end-to-end support.",
      },
      { property: "og:title", content: "Real Estate Services — RSN Infra & Properties" },
      {
        property: "og:description",
        content:
          "From open plots to luxury villas — we offer verified properties, legal assistance and complete investment guidance in Hyderabad.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="What We Offer"
        title="Comprehensive"
        highlight="Real Estate Services"
        description="From your first site visit to final registration — we handle every step with care, transparency and expertise."
        breadcrumb="Services"
      />
      <Services />
    </SiteLayout>
  );
}
