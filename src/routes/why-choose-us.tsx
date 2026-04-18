import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function WhyPage() {
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
