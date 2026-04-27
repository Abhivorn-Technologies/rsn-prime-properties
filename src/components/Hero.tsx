import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone, ShieldCheck, MapPin, Award } from "lucide-react";
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
            className="mt-6 text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
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
            className="mt-4 text-base sm:text-lg text-white/90 max-w-xl"
          >
            Premium Open Plots, Villas, Flats & Secure Property Investments in High Growth Locations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <Link
              to="/properties"
              className="inline-flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-full font-bold text-xs shadow-elegant hover:scale-105 transition-all"
            >
              Explore Properties
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white text-white px-4 py-2 rounded-full font-bold text-xs hover:bg-white hover:text-primary transition-all"
            >
              <Phone className="h-3.5 w-3.5" />
              Contact Us
            </Link>
          </motion.div>
        </div>

        {/* Floating stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 grid grid-cols-1 sm:flex sm:flex-wrap lg:grid lg:grid-cols-3 gap-3 max-w-4xl"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, delay: i * 0.4 }}
              className="bg-white/95 backdrop-blur-xl rounded-2xl p-4 flex items-center gap-3 shadow-elegant border border-white/20"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0 shadow-glow">
                <s.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-primary text-base whitespace-nowrap">{s.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

    </section>
  );
}
