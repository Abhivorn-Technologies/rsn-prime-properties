import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import aboutImg from "@/assets/about-image.jpg";

const features = [
  "Clear Title & Legal Assistance",
  "Prime Locations",
  "Affordable Pricing",
  "Flexible Options",
  "End-to-End Support",
  "100% Transparent Deals",
];

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-primary rounded-3xl opacity-20 blur-2xl" />
            <img
              src={aboutImg}
              alt="RSN Infra Properties team"
              className="relative rounded-3xl shadow-elegant w-full h-[480px] object-cover"
              loading="lazy"
              width={1024}
              height={1024}
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-primary text-primary-foreground p-6 rounded-2xl shadow-elegant max-w-[200px]">
              <div className="text-3xl font-bold">10+</div>
              <div className="text-sm opacity-90">Years of Trust</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-bold uppercase tracking-widest text-primary">About Us</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              About <span className="gradient-text">RSN Infra Properties</span>
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At RSN Infra Properties, we specialize in offering premium open plots in fast-growing and
                high-potential locations. Our mission is to help individuals and families invest in land
                that promises strong returns, long-term security, and peace of mind.
              </p>
              <p>
                With a strong foundation built on trust, transparency, and customer satisfaction, we ensure
                every transaction is clear, legal, and hassle-free. From site visits to documentation, our
                team supports you at every step.
              </p>
              <p>
                We carefully select locations close to upcoming infrastructure, highways, educational
                institutions, and commercial hubs, ensuring appreciation value and future growth.
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-3">
              {features.map((f, i) => (
                <motion.div
                  key={f}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-center gap-3 bg-card rounded-xl p-3 shadow-soft border border-border/50"
                >
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">{f}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
