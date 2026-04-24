import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { OngoingProjects } from "@/components/OngoingProjects";

export default function ProjectsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Our Vision in Action"
        title="Landmark"
        highlight="Projects"
        description="Explore our current developments and upcoming premium destinations across Hyderabad's high-growth corridors."
        breadcrumb="Projects"
      />
      <OngoingProjects />
    </SiteLayout>
  );
}
