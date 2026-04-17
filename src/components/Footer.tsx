import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Twitter, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/rsn-logo.png";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Properties", to: "/properties" },
  { label: "Why Choose Us", to: "/why-choose-us" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
] as const;

const services = [
  "Open Plots & Flats",
  "Luxury Villas",
  "Investment Guidance",
  "Verified Properties",
  "Legal Assistance",
];

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="bg-white rounded-2xl p-3 inline-block">
              <img src={logo} alt="RSN Infra & Properties" className="h-14 w-auto" />
            </div>
            <p className="mt-4 text-accent-foreground/80 leading-relaxed text-sm">
              Building your future with trusted real estate investments in high-growth locations.
            </p>
            <div className="mt-5 flex gap-3">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="w-10 h-10 rounded-full glass-dark flex items-center justify-center hover:bg-gradient-primary hover:scale-110 transition-all"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold">Quick Links</h4>
            <ul className="mt-4 space-y-2">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-accent-foreground/80 hover:text-primary-glow transition-colors text-sm">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold">Services</h4>
            <ul className="mt-4 space-y-2">
              {services.map((s) => (
                <li key={s} className="text-accent-foreground/80 text-sm">{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold">Contact Info</h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex gap-3">
                <Phone className="h-4 w-4 text-primary-glow shrink-0 mt-0.5" />
                <a href="tel:9705811199" className="text-accent-foreground/80 hover:text-primary-glow">9705811199</a>
              </li>
              <li className="flex gap-3">
                <Mail className="h-4 w-4 text-primary-glow shrink-0 mt-0.5" />
                <a href="mailto:rsninfraproperties@gmail.com" className="text-accent-foreground/80 hover:text-primary-glow break-all">
                  rsninfraproperties@gmail.com
                </a>
              </li>
              <li className="flex gap-3">
                <MapPin className="h-4 w-4 text-primary-glow shrink-0 mt-0.5" />
                <span className="text-accent-foreground/80">
                  H.No: 16-2-227/125, Sardar Patel Nagar, Near JNTU Kukatpally, Hyderabad - 500072
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center text-sm text-accent-foreground/70">
          © 2025 RSN Infra & Properties. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
