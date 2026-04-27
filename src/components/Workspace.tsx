import { motion } from "framer-motion";
import office1 from "@/assets/office_image1.jpeg";
import office2 from "@/assets/office_image2.jpeg";

export function Workspace() {
  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-bold uppercase tracking-widest text-primary">Our Workspace</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold">
              A Hub of <span className="gradient-text">Excellence</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Located in the heart of Hyderabad, our office is more than just a workspace — 
              it's where your investment dreams take shape. We provide a welcoming 
              environment where transparency and professionalism are at the forefront of 
              every discussion.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {/* Primary Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-elegant border-2 lg:border-4 border-white"
          >
            <img
              src={office1}
              alt="RSN Office Main View"
              className="w-full aspect-[4/3] object-cover"
            />
          </motion.div>

          {/* Secondary Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-elegant border-2 lg:border-4 border-white"
          >
            <img
              src={office2}
              alt="RSN Office Consultation Area"
              className="w-full aspect-[4/3] object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
