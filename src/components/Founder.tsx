import { motion } from "framer-motion";
import { Quote, Award, Users, TrendingUp } from "lucide-react";
import ceoPhoto from "@/assets/ceo_photo.jpeg";

const stats = [
  { icon: Award, value: "6+", label: "Years Experience" },
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
            The vision and passion behind RSN Infra &amp; Properties.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Left: Photo only — no overlay card */}
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
                alt="Founder of RSN Infra &amp; Properties"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
            {/* Re-added card on image without name */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-card text-foreground p-4 sm:p-5 rounded-2xl shadow-elegant border border-border w-max max-w-[95vw] z-10">
              <div className="text-[10px] sm:text-xs uppercase tracking-wider text-primary font-bold text-center">Founder</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground mt-1 font-medium text-center">RSN Infra &amp; Properties</div>
            </div>
          </motion.div>

          {/* Right: Content with highlighted name */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <Quote className="h-12 w-12 text-primary/30" />

            {/* Highlighted Founder Name */}
            <div className="mt-3 inline-flex flex-col">
              <span className="text-2xl sm:text-3xl font-black gradient-text tracking-tight">
                CHERUKAPALLY NARENDAR
              </span>
              <span className="mt-1 text-xs font-bold uppercase tracking-widest text-primary/70">
                Founder — RSN Infra &amp; Properties
              </span>
              <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-primary-glow" />
            </div>

            <blockquote className="mt-5 text-xl sm:text-2xl font-display font-semibold text-foreground leading-snug">
              "Real estate isn't just about land or buildings — it's about helping families
              secure their future, one trusted investment at a time."
            </blockquote>

            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Narendar started solo in 2019 with a single belief — that every family deserves
                honest, transparent guidance when investing in land. With no large team, just
                determination and a deep knowledge of Hyderabad's emerging corridors, he built
                RSN Infra &amp; Properties from the ground up.
              </p>
              <p>
                By 2020, the portfolio expanded to luxury villas and HMDA-approved layouts.
                By 2022, over 500 families had trusted RSN for their property journeys. Today,
                in 2026, RSN serves high-growth corridors across Telangana — a testament to
                one man's vision turned into a thriving brand.
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
