import { motion } from "framer-motion";
import { CheckCircle2, Target, Eye, Heart, Sparkles, Trophy } from "lucide-react";
import aboutImg from "@/assets/about-image.jpg";
import aiImage1 from "@/assets/luxury_villa_1.png";
import aiImage2 from "@/assets/premium_plot_1.png";
import aiImage3 from "@/assets/modern_architecture_1.png";
import aiImage4 from "@/assets/villa_garden_1.png";
import journeyGrowth from "@/assets/journey_growth.png";
import journeyDev from "@/assets/journey_development.png";

const features = [
  "Clear Title & Legal Assistance",
  "Prime Locations",
  "Affordable Pricing",
  "Flexible Options",
  "End-to-End Support",
  "100% Transparent Deals",
];

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    text: "To help individuals and families invest in land that promises strong returns, long-term security, and complete peace of mind.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To become Hyderabad's most trusted real estate brand by setting new benchmarks in transparency, quality, and customer-first service.",
  },
  {
    icon: Heart,
    title: "Our Values",
    text: "Integrity, transparency, and genuine care for every customer's investment journey — from first enquiry to final registration.",
  },
];

const milestones = [
  { year: "2014", title: "Founded", text: "Started with a focus on premium open plots in Hyderabad outskirts." },
  { year: "2018", title: "Expanded Portfolio", text: "Added luxury villas, flats and HMDA-approved layouts." },
  { year: "2021", title: "500+ Families Served", text: "Crossed a milestone of 500+ trusted property handovers." },
  { year: "2024", title: "Statewide Reach", text: "Now serving high-growth corridors across Telangana." },
];

export function About() {
  return (
    <>
      <section id="about" className="py-10 lg:py-28 bg-gradient-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className="hidden lg:block absolute -inset-4 bg-gradient-primary rounded-3xl opacity-20 blur-2xl" />
              <img
                src={aboutImg}
                alt="RSN Infra Properties team"
                className="relative rounded-3xl shadow-elegant w-full h-auto lg:h-[480px] object-cover"
                loading="lazy"
                width={1024}
                height={1024}
              />
              <div className="hidden lg:block absolute -bottom-6 -right-6 bg-gradient-primary text-primary-foreground p-6 rounded-2xl shadow-elegant max-w-[200px]">
                <div className="text-3xl font-bold">10+</div>
                <div className="text-sm opacity-90">Years of Trust</div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-sm font-bold uppercase tracking-widest text-primary">About Us</span>
              <h2 className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-bold text-foreground sm:whitespace-nowrap">
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
                    viewport={{ once: false, amount: 0.2 }}
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

      {/* Mission / Vision / Values */}
      <section className="py-24 lg:py-32 bg-background overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Left Side: Image Collage */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="space-y-4"
                >
                  <div className="rounded-3xl overflow-hidden shadow-elegant aspect-square">
                    <img src={aiImage1} alt="Luxury Villa" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-elegant aspect-[3/4]">
                    <img src={aiImage2} alt="Premium Plot" className="w-full h-full object-cover" />
                  </div>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="space-y-4 pt-12"
                >
                  <div className="rounded-3xl overflow-hidden shadow-elegant aspect-[3/4]">
                    <img src={aiImage3} alt="Modern Architecture" className="w-full h-full object-cover" />
                  </div>
                  <div className="rounded-3xl overflow-hidden shadow-elegant aspect-square">
                    <img src={aiImage4} alt="Villa Garden" className="w-full h-full object-cover" />
                  </div>
                </motion.div>
              </div>
              {/* Decorative background element */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-primary/5 rounded-full blur-3xl" />
            </div>

            {/* Right Side: Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <span className="text-sm font-bold uppercase tracking-widest text-primary">What Drives Us</span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Built on <span className="gradient-text">Strong Foundations</span>
              </h2>
              <p className="mt-6 text-muted-foreground leading-relaxed">
                Our core principles guide every decision we make, ensuring that your 
                investment is handled with the highest level of care and expertise.
              </p>

              <div className="mt-10 space-y-6">
                {pillars.map((p, i) => (
                  <motion.div
                    key={p.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="flex gap-6 group"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-card border border-border/50 flex items-center justify-center shadow-soft shrink-0 group-hover:bg-primary transition-colors duration-300">
                      <p.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{p.title}</h3>
                      <p className="mt-2 text-muted-foreground leading-relaxed">{p.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Journey / Milestones - Compact Vertical Timeline */}
      <section className="py-16 lg:py-24 bg-gradient-soft overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary">
              <Sparkles className="h-4 w-4" /> Our Journey
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-bold">
              A Decade of <span className="gradient-text">Trusted Growth</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Central Line */}
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-primary/20 hidden lg:block" />

            <div className="space-y-8 lg:space-y-16 relative">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className={`flex flex-col lg:flex-row items-center gap-6 lg:gap-12 ${
                    i % 2 === 0 ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Card Content */}
                  <div className={`w-full lg:w-1/2 flex flex-col items-center text-center ${
                    i % 2 === 0 ? "lg:items-end lg:text-right" : "lg:items-start lg:text-left"
                  }`}>
                    <div className="bg-card rounded-[2rem] p-6 lg:p-8 shadow-elegant border border-border/50 relative group hover:border-primary/30 transition-all duration-500 w-full max-w-md">
                      <div className="text-3xl lg:text-4xl font-black gradient-text mb-1">{m.year}</div>
                      <div className="text-lg font-bold text-foreground mb-2">{m.title}</div>
                      <p className="text-sm text-muted-foreground leading-relaxed">{m.text}</p>
                      
                      {/* Decorative elements */}
                      <Trophy className={`absolute top-6 h-10 w-10 text-primary/5 group-hover:text-primary/10 transition-colors ${
                        i % 2 === 0 ? "left-6" : "right-6"
                      }`} />
                    </div>
                  </div>

                  {/* Center Dot (Desktop only) */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-background border-4 border-primary items-center justify-center z-10 shadow-glow">
                    <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                  </div>

                  {/* Image Content (Alternate Milestone Only) */}
                  <div className="w-full lg:w-1/2">
                    {i % 2 === 0 ? (
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="rounded-2xl overflow-hidden shadow-xl aspect-video lg:aspect-auto h-auto lg:h-[220px] border-2 border-white"
                      >
                        <img 
                          src={i === 0 ? aiImage1 : journeyGrowth} 
                          alt="Growth" 
                          className="w-full h-full object-cover" 
                        />
                      </motion.div>
                    ) : (
                      <motion.div 
                        whileHover={{ scale: 1.02 }}
                        className="rounded-2xl overflow-hidden shadow-xl aspect-video lg:aspect-auto h-auto lg:h-[220px] border-2 border-white"
                      >
                        <img 
                          src={i === 1 ? aiImage3 : journeyDev} 
                          alt="Development" 
                          className="w-full h-full object-cover" 
                        />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
