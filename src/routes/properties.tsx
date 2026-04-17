import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Properties } from "@/components/Properties";

export const Route = createFileRoute("/properties")({
  head: () => ({
    meta: [
      { title: "Featured Properties — Plots, Villas & Flats in Hyderabad | RSN Infra" },
      {
        name: "description",
        content:
          "Browse premium open plots, luxury villas, residential flats, farm land and investment properties across Hyderabad's high-growth corridors.",
      },
      { property: "og:title", content: "Premium Properties in Hyderabad — RSN Infra & Properties" },
      {
        property: "og:description",
        content:
          "Hand-picked plots, villas and investment land in Hyderabad — verified, legal and ready for site visits.",
      },
    ],
  }),
  component: PropertiesPage,
});

function PropertiesPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Featured Listings"
        title="Premium"
        highlight="Properties"
        description="Hand-picked open plots, villas and investment land across Hyderabad's most promising corridors."
        breadcrumb="Properties"
      />
      <Properties />
    </SiteLayout>
  );
}
