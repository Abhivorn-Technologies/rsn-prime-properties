import { motion } from "framer-motion";
import { Award, Scale, MapPinned, IndianRupee, TrendingUp, Headphones } from "lucide-react";

const items = [
  { icon: Award, title: "Trusted Company", desc: "A reputation built on years of honest dealings." },
  { icon: Scale, title: "Legal Assistance", desc: "Complete legal guidance and clear documentation." },
  { icon: MapPinned, title: "Best Locations", desc: "Strategically chosen high-growth areas." },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Competitive prices with flexible payment plans." },
  { icon: TrendingUp, title: "High ROI", desc: "Properties chosen for strong appreciation potential." },
  { icon: Headphones, title: "Customer Support", desc: "Dedicated team available at every step." },
];

export function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-primary">Why Choose Us</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
            The RSN Advantage
          </h2>
          <p className="mt-4 text-muted-foreground">
            What makes us the preferred choice for thousands of investors.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card border border-border/50 rounded-3xl p-7 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <item.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
