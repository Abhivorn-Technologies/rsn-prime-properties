import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Testimonials } from "@/components/Testimonials";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Client Testimonials — Real Stories | RSN Infra & Properties" },
      {
        name: "description",
        content:
          "Read genuine reviews from our satisfied clients who trusted RSN Infra & Properties for their land, villa and flat investments in Hyderabad.",
      },
      { property: "og:title", content: "Client Testimonials — RSN Infra & Properties" },
      {
        property: "og:description",
        content:
          "Real stories from happy investors and homeowners across Hyderabad.",
      },
    ],
  }),
  component: TestimonialsPage,
});

function TestimonialsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Client Stories"
        title="What Our"
        highlight="Clients Say"
        description="Real reviews from families and investors who chose RSN Infra & Properties as their trusted partner."
        breadcrumb="Testimonials"
      />
      <Testimonials />
    </SiteLayout>
  );
}
