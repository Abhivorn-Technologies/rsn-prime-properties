import { motion } from "framer-motion";
import { Building2, Home, TrendingUp, ShieldCheck, FileCheck, HeartHandshake } from "lucide-react";

const services = [
  { icon: Home, title: "Open Plots & Flats", desc: "Premium residential plots and modern flats in high-growth locations." },
  { icon: Building2, title: "Villas", desc: "Luxury villas designed for comfort, style, and long-term value." },
  { icon: TrendingUp, title: "Investment Guidance", desc: "Expert advice to help you invest smartly with maximum returns." },
  { icon: ShieldCheck, title: "Verified Properties", desc: "Every property is verified for clear title and full legal compliance." },
  { icon: FileCheck, title: "Clear Title & Documentation", desc: "Hassle-free paperwork and complete transparency at every step." },
  { icon: HeartHandshake, title: "End-to-End Support", desc: "From site visit to registration — we are with you all the way." },
];

export function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-primary">What We Offer</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Comprehensive real estate solutions tailored to your investment goals.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8 }}
              className="group relative bg-card rounded-3xl p-7 shadow-soft hover:shadow-elegant transition-all border border-border/40 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity" />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                  <s.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
