import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Properties } from "@/components/Properties";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RSN Infra & Properties — Premium Plots, Villas & Investments in Hyderabad" },
      {
        name: "description",
        content:
          "RSN Infra & Properties offers premium open plots, luxury villas, flats and secure real estate investments in high-growth locations across Hyderabad. 100% legal, transparent and trusted.",
      },
      { property: "og:title", content: "RSN Infra & Properties — Premium Real Estate in Hyderabad" },
      {
        property: "og:description",
        content:
          "Premium open plots, villas, flats and secure property investments in high-growth locations. Trusted real estate partner in Hyderabad.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "keywords", content: "RSN Infra, real estate Hyderabad, open plots, villas, flats, land investment, Kukatpally, JNTU, plots near ORR" },
    ],
    links: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Properties />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
      <Toaster position="top-center" richColors />
    </div>
  );
}
