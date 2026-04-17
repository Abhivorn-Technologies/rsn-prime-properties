import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { About } from "@/components/About";
import { Founder } from "@/components/Founder";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About RSN Infra & Properties — Our Story, Mission & Founder" },
      {
        name: "description",
        content:
          "Learn about RSN Infra & Properties — a decade of trusted real estate expertise in Hyderabad. Meet our founder & CEO and discover our mission, values and journey.",
      },
      { property: "og:title", content: "About RSN Infra & Properties — Trusted Real Estate in Hyderabad" },
      {
        property: "og:description",
        content:
          "Premium open plots, villas, and investment land — built on transparency, integrity and customer-first service.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About Us"
        title="Building Futures with"
        highlight="Trusted Real Estate"
        description="A decade of helping families invest in land that delivers strong returns, security and long-term peace of mind."
        breadcrumb="About"
      />
      <About />
      <Founder />
    </SiteLayout>
  );
}
