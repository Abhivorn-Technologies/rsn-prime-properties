import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, Sparkles, TrendingUp, MapPin, CheckCircle2, ArrowUpRight, Users, Target, ChevronLeft, ChevronRight } from "lucide-react";
import irisResort from "@/assets/iris-resort.png";
import sindhuSarovar from "@/assets/sindhu-sarovar.png";
import image1 from "@/assets/image1.jpeg";
import image2 from "@/assets/image2.jpeg";
import image3 from "@/assets/image3.jpeg";
import image4 from "@/assets/image4.jpeg";
import image5 from "@/assets/image5.jpeg";
import image6 from "@/assets/image6.jpeg";
import image7 from "@/assets/image7.jpeg";
import image8 from "@/assets/image8.jpeg";
import image9 from "@/assets/image9.jpeg";
import image10 from "@/assets/image10.jpeg";
import image11 from "@/assets/image11.jpeg";
import image12 from "@/assets/image12.jpeg";
import lemonTreeResort from "@/assets/lemon-tree-resort.png";
import oneNineRezo from "@/assets/one-nine-rezo.png";

export function OngoingProjects() {
  const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12];
  
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
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground leading-tight whitespace-nowrap">
                  Supraja Iris Resort – <span className="gradient-text">Resort Plots</span>
                </h3>
              </div>
              
              <div className="prose prose-invert max-w-none space-y-3">
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
              className="lg:col-span-5 space-y-6"
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
              <div className="bg-card/50 border border-border/50 rounded-[2rem] p-6 shadow-soft">
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
      <section className="py-16 lg:py-24 border-b border-border/40">
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
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground leading-tight whitespace-nowrap">
                  Supraja <span className="gradient-text">Sindhu Sarovar</span>
                </h3>
              </div>
              
              <div className="prose prose-invert max-w-none space-y-3">
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

            </motion.div>

            {/* Right Content: Image + Today's Investors */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 space-y-6"
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
              <div className="bg-card/50 border border-border/50 rounded-[2rem] p-6 shadow-soft">
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

      {/* Project 3: Lemon Tree Resort */}
      <section className="py-10 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 space-y-4"
            >
              <div>
                <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-3">
                  <Sparkles className="h-4 w-4" /> Adjacent to Woxsen University
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground leading-tight whitespace-nowrap">
                  Lemon Tree Resort – <span className="gradient-text">The West Capitol</span>
                </h3>
              </div>
              
              <div className="prose prose-invert max-w-none space-y-3">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Positioned within a rare investment window, <span className="text-foreground font-semibold">Lemon Tree Resort</span> at Kamkole represents a high-growth destination built for tomorrow’s returns.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Strategically located on the <span className="text-foreground font-medium">RRR Corridor</span> and near the <span className="text-foreground font-medium">NIMZ (National Investment Manufacturing Zone)</span>, this project is part of a future-ready zone powered by education, innovation, and large-scale infrastructure.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With <span className="text-primary font-bold">40% of construction already completed</span>, investors have a unique opportunity to enter a premium development before its full realization, benefiting from the rapid appreciation driven by the surrounding tourism hub, theme parks, and convention centers.
                </p>
                <p className="italic font-medium text-foreground border-l-4 border-primary pl-4">
                  "The best time to invest was yesterday. The next best time is now. This is a rare investment window for those who seek strategic growth."
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  "#LemonTreeResort", "#InvestmentOpportunity", "#WoxsenUniversity", 
                  "#RRRCorridor", "#NIMZ", "#HighAppreciation"
                ].map(tag => (
                  <span key={tag} className="text-[10px] font-bold text-primary bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Right Content: Image + Investment Journey */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 space-y-6"
            >
              {/* Image above the box */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-elegant aspect-[4/3] group">
                <img
                  src={lemonTreeResort}
                  alt="Lemon Tree Resort"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                    40% Completed
                  </span>
                  <span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                    Under Construction
                  </span>
                </div>
              </div>

              {/* Box below the image: The Investment Journey */}
              <div className="bg-card/50 border border-border/50 rounded-[2rem] p-6 shadow-soft">
                <p className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" /> The Investment Journey
                </p>
                <ul className="space-y-4 list-none p-0">
                  {[
                    { title: "Stage 1: Smart Entry", desc: "Attractive entry pricing with under-construction advantage." },
                    { title: "Stage 2: Growth Phase", desc: "Infrastructure and attractions taking shape, demand starts increasing." },
                    { title: "Stage 3: Maximize Returns", desc: "Significant price appreciation and strong resale/rental demand." }
                  ].map((item, i) => (
                    <li key={i} className="flex gap-3 text-sm leading-snug">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary shrink-0">
                        {i + 1}
                      </div>
                      <div>
                        <span className="text-foreground font-bold block mb-1">{item.title}</span>
                        <span className="text-muted-foreground">{item.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Project 4: One Nine Rezo */}
      <section className="py-10 lg:py-16 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-5 order-2 lg:order-1 space-y-6"
            >
              <div className="relative rounded-[2rem] overflow-hidden shadow-elegant aspect-[4/3] group">
                <img
                  src={oneNineRezo}
                  alt="One Nine Rezo Villas"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                    Gated Community
                  </span>
                  <span className="bg-white/10 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                    Luxury Villas
                  </span>
                </div>
              </div>

              {/* Stats Box */}
              <div className="bg-background border border-border/50 rounded-[2rem] p-6 shadow-soft">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-2xl font-bold gradient-text">37 Acres</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Planned Area</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold gradient-text">G+2</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider font-medium">Triplex Design</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-7 order-1 lg:order-2 space-y-4"
            >
              <div>
                <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm mb-3">
                  <Building2 className="h-4 w-4" /> Kondapur, Hyderabad
                </div>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground leading-tight whitespace-nowrap">
                  One Nine Rezo – <span className="gradient-text">Elite Gated Community</span>
                </h3>
              </div>
              
              <div className="prose prose-invert max-w-none space-y-3">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  At <span className="text-foreground font-semibold">One Nine Rezo</span>, real estate is about more than just properties—it’s about creating lifestyles, communities, and long-term value.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our featured project offers premium <span className="text-foreground font-medium">G+2 triplex villas</span> within a thoughtfully planned 37-acre gated community. Designed for modern families, these villas combine luxury, connectivity, and superior craftsmanship.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Backed by years of expertise, One Nine Rezo delivers trusted solutions across residential and investment properties, ensuring every transaction is backed by integrity and a customer-first approach.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { title: "Premium Selection", desc: "Handpicked villas in high-growth locations." },
                  { title: "Trusted Expertise", desc: "Secure, transparent transactions for peace of mind." },
                  { title: "Smart Investments", desc: "Carefully vetted properties for sustainable ROI growth." }
                ].map((feature, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 h-6 w-6 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <div>
                      <span className="text-foreground font-bold block">{feature.title}</span>
                      <span className="text-sm text-muted-foreground">{feature.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground font-bold px-8 py-4 rounded-xl shadow-soft hover:shadow-elegant hover:scale-105 transition-all"
                >
                  Book Site Visit <ArrowUpRight className="h-5 w-5" />
                </Link>
                <a
                  href="https://oneninerezo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-background border border-border hover:border-primary/50 text-foreground font-bold px-8 py-4 rounded-xl transition-all"
                >
                  Visit Website <ArrowUpRight className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Offerings Section: Bento Grid */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-sm font-bold uppercase tracking-widest text-primary mb-3 block">Premium Features</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              World-Class <span className="gradient-text">Amenities & Lifestyle</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Experience a blend of luxury, comfort, and nature with our thoughtfully curated project features.
            </p>
          </motion.div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {images.map((img, index) => {
              const labels = [
                "Grand Entrance", "Clubhouse", "Swimming Pool", "Green Parks", 
                "Kids Area", "Gym", "Jogging Track", "Security", 
                "Party Lawn", "Yoga Deck", "Street Lights", "Drainage"
              ];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
                  className="break-inside-avoid group relative rounded-3xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-500 border border-border/50 bg-white"
                >
                  <img
                    src={img}
                    alt={labels[index]}
                    className="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-white font-bold text-lg">{labels[index]}</p>
                    <div className="w-8 h-1 bg-primary mt-2 rounded-full" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
