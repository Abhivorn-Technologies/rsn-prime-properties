import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { Testimonials } from "@/components/Testimonials";

export default function TestimonialsPage() {
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
