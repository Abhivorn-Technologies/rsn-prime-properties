import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, Sparkles, TrendingUp, MapPin, CheckCircle2, ArrowUpRight, Users, Target } from "lucide-react";
import irisResort from "@/assets/iris-resort.png";
import sindhuSarovar from "@/assets/sindhu-sarovar.png";

export function OngoingProjects() {
  return (
    <div className="bg-background">
      {/* Project 1: Supraja Iris Resort */}
      <section className="py-10 lg:py-16 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-8"
            >
              <div>
                <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-3">
                  <MapPin className="h-4 w-4" /> Kamkole, Hyderabad
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Supraja Iris Resort – <span className="gradient-text">Resort Plots</span>
                </h3>
              </div>
              
              <div className="prose prose-invert max-w-none space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The <span className="text-foreground font-semibold">Supraja Iris Resort – Resort Plots at Kamkole</span> reflects the growing shift toward integrated, lifestyle-oriented plotted developments. 
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  The project is strategically positioned with strong connectivity to key highways, educational institutions, and emerging infrastructure corridors — factors that are increasingly critical in long-term real estate value creation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  As the real estate sector continues to evolve, developments that combine accessibility, planning, and lifestyle positioning are likely to play a significant role in shaping future investment trends.
                </p>
                <p className="italic font-medium text-foreground border-l-4 border-primary pl-4">
                  "It will be interesting to observe how such projects contribute to the broader transformation of plotted development ecosystems."
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  "#RealEstate", "#StrategicInvestment", "#UrbanDevelopment", 
                  "#PlottedDevelopment", "#InfrastructureGrowth", "#HyderabadRealEstate"
                ].map(tag => (
                  <span key={tag} className="text-[10px] font-bold text-primary bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right Content: Image + Professional Perspective */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 space-y-8"
            >
              {/* Image above the box */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-elegant aspect-[4/3] group">
                <img
                  src={irisResort}
                  alt="Supraja Iris Resort"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                    Mega Project
                  </span>
                  <span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                    350 Acres
                  </span>
                </div>
              </div>

              {/* Box below the image */}
              <div className="bg-card/50 border border-border/50 rounded-[2rem] p-8 shadow-soft">
                <p className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" /> Professional Perspective
                </p>
                <ul className="space-y-4 list-none p-0">
                  {[
                    "A clear focus on planned development within a large-scale layout",
                    "Integration of resort-style amenities to enhance end-user experience",
                    "Alignment with the rising demand for second homes and weekend living spaces",
                    "Potential for appreciation driven by location and infrastructure growth"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-snug">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project 2: Supraja Sindhu Sarovar */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-8"
            >
              <div>
                <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-3">
                  <Target className="h-4 w-4" /> Mominpet, Hyderabad
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Supraja <span className="gradient-text">Sindhu Sarovar</span>
                </h3>
              </div>
              
              <div className="prose prose-invert max-w-none space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At <span className="text-foreground font-bold">Sri Supraja Infracon</span>, we believe the future of plotted development lies far beyond land ownership — it lies in creating purposeful, experience-driven ecosystems.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With projects like Sindhu Sarovar, our vision is to redefine how plotted communities are designed, perceived, and lived in. Every development is guided by strategic location selection, integrated infrastructure, and a commitment to quality living.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  As we continue to build, our focus remains clear: to create developments that not only appreciate in value, but also enhance the way people experience space, time, and community.
                </p>
                <p className="font-semibold text-foreground italic border-l-4 border-primary pl-4">
                  "The future of real estate will belong to those who build with vision, responsibility, and a deep understanding of evolving aspirations."
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  "#Leadership", "#RealEstateVision", "#PlottedDevelopment", 
                  "#FutureOfLiving", "#UrbanTransformation", "#SriSuprajaInfracon"
                ].map(tag => (
                  <span key={tag} className="text-[10px] font-bold text-primary bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-bold px-10 py-5 rounded-2xl shadow-soft hover:shadow-elegant hover:scale-105 transition-all"
                >
                  Register Interest <ArrowUpRight className="h-5 w-5" />
                </Link>
              </div>
            </motion.div>

            {/* Right Content: Image + Today's Investors */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 space-y-8"
            >
              {/* Image above the box */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-elegant aspect-[4/3] group">
                <img
                  src={sindhuSarovar}
                  alt="Supraja Sindhu Sarovar"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-soft">
                    Premium Plots
                  </span>
                  <span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                    Waterfront
                  </span>
                </div>
              </div>

              {/* Box below the image */}
              <div className="bg-card/50 border border-border/50 rounded-[2rem] p-8 shadow-soft">
                <p className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                  <Users className="h-5 w-5 text-primary" /> Today’s investors are seeking:
                </p>
                <ul className="space-y-4 list-none p-0">
                  {[
                    "Thoughtfully planned environments",
                    "Seamless connectivity to growth corridors",
                    "Spaces that enable lifestyle, wellness, and long-term value creation"
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-snug">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
