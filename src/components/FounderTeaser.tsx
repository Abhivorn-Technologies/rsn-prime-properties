import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import founderImg from "@/assets/founder.jpg";

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
            <div className="relative rounded-3xl overflow-hidden shadow-elegant aspect-[4/5]">
              <img
                src={founderImg}
                alt="Founder & CEO of RSN Infra & Properties"
                className="w-full h-full object-cover object-top"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-bold uppercase tracking-widest text-primary">
              Meet the Founder
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
              A vision built on <span className="gradient-text">trust</span>
            </h2>
            <Quote className="h-10 w-10 text-primary/30 mt-5" />
            <p className="mt-3 text-lg font-display font-semibold text-foreground italic leading-snug">
              "We don't just sell plots — we help you build your future, your dreams,
              and your financial stability."
            </p>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              With over a decade of expertise in Hyderabad's real estate market, our
              founder leads RSN Infra & Properties with one mission: making land ownership
              transparent, secure, and genuinely rewarding for every family.
            </p>
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
