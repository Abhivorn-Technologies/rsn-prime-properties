import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Ramesh Kumar",
    role: "Investor, Hyderabad",
    text: "RSN made my plot purchase truly hassle-free. Clear documentation, excellent locations and a team that genuinely cares.",
  },
  {
    name: "Priya Sharma",
    role: "First-time Buyer",
    text: "I was nervous about my first investment, but the RSN team guided me through every step. Highly trustworthy.",
  },
  {
    name: "Suresh Reddy",
    role: "Business Owner",
    text: "Bought 2 plots through RSN. Excellent appreciation value and the most transparent dealings I've ever experienced.",
  },
];

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-primary">Testimonials</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </motion.div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-card rounded-3xl p-7 shadow-soft border border-border/40 hover:shadow-elegant transition-all"
            >
              <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/15" />
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-primary-glow text-primary-glow" />
                ))}
              </div>
              <p className="mt-4 text-foreground/90 leading-relaxed">"{r.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-bold">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-foreground">{r.name}</div>
                  <div className="text-sm text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
