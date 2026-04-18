import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone, ShieldCheck, MapPin, Award, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: ShieldCheck, label: "100% Legal" },
  { icon: MapPin, label: "Prime Locations" },
  { icon: Award, label: "Trusted Service" },
];

export function Hero() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 200]);
  const bgScale = useTransform(scrollY, [0, 800], [1.05, 1.2]);
  const contentY = useTransform(scrollY, [0, 600], [0, 120]);
  const contentOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: bgY, scale: bgScale }}>
        <img
          src={heroBg}
          alt="Premium real estate development"
          className="w-full h-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 w-full"
      >
        <div className="max-w-3xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-semibold text-primary-foreground"
          >
            <span className="w-2 h-2 rounded-full bg-primary-glow animate-pulse" />
            Premium Real Estate Investments
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 text-3xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1]"
          >
            Build Your Future with{" "}
            <span className="bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent">
              Smart Real Estate
            </span>{" "}
            Investments.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg sm:text-xl text-white/90 max-w-2xl"
          >
            Premium Open Plots, Villas, Flats & Secure Property Investments in High Growth Locations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-7 py-4 rounded-full font-semibold shadow-elegant hover:scale-105 transition-all"
            >
              Explore Properties
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 glass text-white px-7 py-4 rounded-full font-semibold hover:bg-white/20 transition-all"
            >
              <Phone className="h-5 w-5" />
              Contact Us
            </Link>
          </motion.div>
        </div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.4 }}
              className="glass rounded-2xl p-5 flex items-center gap-3"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0 shadow-glow">
                <s.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="font-semibold text-white text-lg">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        style={{ opacity: contentOpacity }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/80"
      >
        <span className="text-xs font-semibold uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
