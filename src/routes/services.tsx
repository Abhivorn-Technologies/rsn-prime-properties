import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Services } from "@/components/Services";

export default function ServicesPage() {
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
