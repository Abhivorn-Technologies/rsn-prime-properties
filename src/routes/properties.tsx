import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Properties } from "@/components/Properties";


export default function PropertiesPage() {
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
