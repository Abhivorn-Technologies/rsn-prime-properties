import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, Send, Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const schema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(80)
    .regex(/^[A-Za-z\s]+$/, "Please enter a valid name using only alphabets"),
  phone: z
    .string()
    .trim()
    .regex(/^\d{10}$/, "Please enter a valid 10-digit phone number"),
  email: z.string().trim().email("Invalid email").max(120),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(800),
});

type FormData = z.infer<typeof schema>;

const cards = [
  {
    icon: Phone,
    label: "Phone",
    value: "9705811199",
    href: "tel:9705811199",
  },
  {
    icon: Mail,
    label: "Email",
    value: "rsninfraproperties@gmail.com",
    href: "mailto:rsninfraproperties@gmail.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "H.No: 16-2-227/125, Sardar Patel Nagar, Near JNTU Kukatpally, Hyderabad - 500072",
    href: "https://maps.google.com/?q=JNTU+Kukatpally+Hyderabad",
  },
];

export function Contact() {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    toast.success("Inquiry sent! We'll contact you shortly.", {
      description: `Thank you, ${data.name}.`,
    });
    reset();
    setLoading(false);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-sm font-bold uppercase tracking-widest text-primary">Contact</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Reach out for site visits, property details, or investment guidance.
          </p>
        </motion.div>

        <div className="mt-14 grid lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-5 space-y-4">
            {cards.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.label === "Address" ? "_blank" : undefined}
                rel="noreferrer"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4 bg-card rounded-2xl p-5 shadow-soft hover:shadow-elegant transition-all border border-border/40 group"
              >
                <div className="w-12 h-12 shrink-0 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow group-hover:scale-110 transition-transform">
                  <c.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-primary">{c.label}</div>
                  <div className="mt-0.5 text-foreground font-medium leading-relaxed text-sm lg:text-base">{c.value}</div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-card rounded-3xl p-7 sm:p-9 shadow-elegant border border-border/40"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                <input
                  {...register("name")}
                  placeholder="Your full name"
                  className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                />
                {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                <input
                  {...register("phone")}
                  maxLength={10}
                  placeholder="9876543210"
                  className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
                />
                {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone.message}</p>}
              </div>
            </div>
            <div className="mt-5">
              <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
              <input
                {...register("email")}
                type="email"
                placeholder="you@example.com"
                className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all"
              />
              {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
            </div>
            <div className="mt-5">
              <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
              <textarea
                {...register("message")}
                rows={5}
                placeholder="Tell us about the property you're interested in..."
                className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-all resize-none"
              />
              {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message.message}</p>}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="mt-6 w-full inline-flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground px-6 py-4 rounded-full font-semibold shadow-soft hover:shadow-elegant hover:scale-[1.01] transition-all disabled:opacity-70 disabled:hover:scale-100"
            >
              {loading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" /> Sending...
                </>
              ) : (
                <>
                  <Send className="h-5 w-5" /> Send Inquiry
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
