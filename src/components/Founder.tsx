import { motion } from "framer-motion";
import { Quote, Award, Users, TrendingUp } from "lucide-react";
import ceoPhoto from "@/assets/ceo_photo.jpeg";

const stats = [
  { icon: Award, value: "10+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: TrendingUp, value: "100%", label: "Trusted Deals" },
];

export function Founder() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-primary">Leadership</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Meet Our <span className="gradient-text">Founder</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            The vision and passion behind RSN Infra & Properties.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 relative"
          >
            <div className="absolute -inset-4 bg-gradient-primary rounded-3xl opacity-25 blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-elegant bg-gradient-to-br from-primary/10 to-primary-glow/10">
              <img
                src={ceoPhoto}
                alt="Founder of RSN Infra & Properties"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-card text-foreground p-4 sm:p-5 rounded-2xl shadow-elegant border border-border w-max max-w-[95vw]">
              <div className="text-[10px] sm:text-xs uppercase tracking-wider text-primary font-bold">Founder</div>
              <div className="mt-1 text-sm sm:text-base font-bold whitespace-nowrap">CHERUKUPALLY NARENDAR</div>
              <div className="text-xs sm:text-sm text-muted-foreground mt-0.5 font-medium">RSN Infra & Properties</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <Quote className="h-12 w-12 text-primary/30" />
            <blockquote className="mt-4 text-xl sm:text-2xl font-display font-semibold text-foreground leading-snug">
              "Real estate isn't just about land or buildings — it's about helping families
              secure their future, one trusted investment at a time."
            </blockquote>

            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                With over a decade in Hyderabad's fast-evolving property market, our founder
                established RSN Infra & Properties on a simple belief: every customer deserves
                clarity, honesty, and a fair deal. From the first site visit to final
                registration, his team is involved at every stage.
              </p>
              <p>
                Under his leadership, RSN has grown from a small advisory practice into a
                trusted name for premium open plots, villas and high-ROI investment land
                across Hyderabad's most promising corridors.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-card border border-border rounded-2xl p-4 text-center shadow-soft"
                >
                  <s.icon className="h-5 w-5 text-primary mx-auto" />
                  <div className="mt-2 text-2xl font-bold gradient-text">{s.value}</div>
                  <div className="text-xs text-muted-foreground mt-1 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
