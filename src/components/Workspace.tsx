import { motion } from "framer-motion";
import office2 from "@/assets/office_image2.jpeg";

export function Workspace() {
  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">

          {/* Left: Content */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
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
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Whether you're a first-time buyer or a seasoned investor, our team is here
              to guide you through every step — from site visits and legal checks to
              documentation and final registration.
            </p>
          </motion.div>

          {/* Right: Image (office2 only) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 relative"
          >
            <div className="absolute -inset-4 bg-gradient-primary rounded-3xl opacity-20 blur-2xl" />
            <div className="relative rounded-2xl overflow-hidden shadow-elegant border-2 lg:border-4 border-white">
              <img
                src={office2}
                alt="RSN Office Consultation Area"
                className="w-full aspect-[3/2] object-cover"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
