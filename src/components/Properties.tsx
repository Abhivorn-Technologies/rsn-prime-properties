import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import plot from "@/assets/property-plot.jpg";
import villa from "@/assets/property-villa.jpg";
import flats from "@/assets/property-flats.jpg";
import highway from "@/assets/property-highway.jpg";
import farm from "@/assets/property-farm.jpg";
import layout from "@/assets/property-layout.jpg";

const properties = [
  { img: plot, title: "Open Plot in Hyderabad", location: "Shamshabad, Hyderabad", price: "₹ 25 Lakhs onwards" },
  { img: villa, title: "Luxury Villa Project", location: "Kollur, Hyderabad", price: "₹ 1.8 Cr onwards" },
  { img: flats, title: "Premium Flats", location: "Kukatpally, Hyderabad", price: "₹ 65 Lakhs onwards" },
  { img: highway, title: "Investment Land Near Highway", location: "ORR, Hyderabad", price: "₹ 18 Lakhs onwards" },
  { img: farm, title: "Farm Land Opportunity", location: "Yadadri, Telangana", price: "₹ 12 Lakhs / acre" },
  { img: layout, title: "Residential Layout", location: "Maheshwaram, Hyderabad", price: "₹ 22 Lakhs onwards" },
];

export function Properties() {
  return (
    <section id="properties" className="py-20 lg:py-28 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-primary">Featured</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Premium <span className="gradient-text">Properties</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Hand-picked properties in high-appreciation locations.
          </p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {properties.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              whileHover={{ y: -10 }}
              className="group bg-card rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all border border-border/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                  width={1024}
                  height={768}
                />
                <div className="absolute top-4 left-4 bg-gradient-primary text-primary-foreground text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-soft">
                  Featured
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground">{p.title}</h3>
                <div className="mt-2 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 text-primary" />
                  {p.location}
                </div>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="text-lg font-bold gradient-text">{p.price}</span>
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 bg-primary/10 hover:bg-gradient-primary text-primary hover:text-primary-foreground font-semibold text-sm px-4 py-2 rounded-full transition-all"
                  >
                    Enquire
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
