import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import ceoPhoto from "@/assets/ceo_photo.jpeg";

export function FounderTeaser() {
  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center bg-gradient-soft rounded-3xl p-6 sm:p-10 lg:p-14 border border-border shadow-soft">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative max-w-md mx-auto w-full"
          >
            <div className="absolute -inset-3 bg-gradient-primary rounded-3xl opacity-25 blur-xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-elegant aspect-[4/5] bg-card/50">
              <img
                src={ceoPhoto}
                alt="Founder of RSN Infra & Properties"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-card text-foreground p-4 sm:p-5 rounded-2xl shadow-elegant border border-border w-max max-w-[95vw] z-10">
              <div className="text-[10px] sm:text-xs uppercase tracking-wider text-primary font-bold text-center">Founder</div>
              <div className="text-[10px] sm:text-xs text-muted-foreground mt-1 font-medium text-center">RSN Infra & Properties</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
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

            <Link
              to="/about"
              className="mt-7 inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-6 py-3 rounded-full font-semibold shadow-soft hover:shadow-elegant hover:scale-105 transition-all"
            >
              Read Full Story <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
