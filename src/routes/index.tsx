import { SiteLayout } from "@/components/SiteLayout";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { FounderTeaser } from "@/components/FounderTeaser";
import { Services } from "@/components/Services";
import { Properties } from "@/components/Properties";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";

export default function Index() {
  return (
    <SiteLayout>
      <Hero />
      <About />
      <FounderTeaser />
      <Services />
      <Properties />
      <WhyChooseUs />
      <Testimonials />
      <Contact />
    </SiteLayout>
  );
}
