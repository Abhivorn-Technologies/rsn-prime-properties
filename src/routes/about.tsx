import { SiteLayout } from "@/components/SiteLayout";
import { PageHeader } from "@/components/PageHeader";
import { About } from "@/components/About";
import { Founder } from "@/components/Founder";
import { Workspace } from "@/components/Workspace";

export default function AboutPage() {
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
      <Workspace />
    </SiteLayout>
  );
}
