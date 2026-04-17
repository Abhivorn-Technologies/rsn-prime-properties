import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export const Route = createFileRoute("/why-choose-us")({
  head: () => ({
    meta: [
      { title: "Why Choose RSN Infra & Properties — Trust, Legal & ROI" },
      {
        name: "description",
        content:
          "Discover why hundreds of families trust RSN Infra & Properties — legal assistance, prime locations, affordable pricing, high ROI and dedicated customer support.",
      },
      { property: "og:title", content: "Why Choose RSN Infra & Properties" },
      {
        property: "og:description",
        content:
          "Trusted company, legal assistance, best locations, affordable pricing and high ROI — that's the RSN promise.",
      },
    ],
  }),
  component: WhyPage,
});

function WhyPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="The RSN Promise"
        title="Why Investors"
        highlight="Choose RSN"
        description="Six reasons why hundreds of Hyderabad families trust us with their most important investment."
        breadcrumb="Why Choose Us"
      />
      <WhyChooseUs />
    </SiteLayout>
  );
}
