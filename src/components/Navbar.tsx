import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/rsn-logo.png";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Properties", to: "/properties" },
  { label: "Why Us", to: "/why-choose-us" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/95 backdrop-blur-xl shadow-soft border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="RSN Infra & Properties" className="h-10 md:h-12 w-auto" />
        </Link>

        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="text-sm font-semibold text-foreground/80 hover:text-primary transition-colors relative group"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="tel:9705811199"
            className="hidden sm:inline-flex items-center gap-2 bg-gradient-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold shadow-soft hover:shadow-elegant hover:scale-105 transition-all"
          >
            <Phone className="h-4 w-4" />
            Call Now
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-lg text-foreground hover:bg-secondary"
            aria-label="Menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-[28rem]" : "max-h-0"
        } bg-background/95 backdrop-blur-xl border-t border-border`}
      >
        <ul className="px-4 py-4 space-y-1">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-lg text-foreground hover:bg-secondary font-medium"
                activeProps={{ className: "bg-secondary text-primary" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <a
              href="tel:9705811199"
              className="sm:hidden flex items-center justify-center gap-2 bg-gradient-primary text-primary-foreground px-5 py-3 rounded-full font-semibold mt-2"
            >
              <Phone className="h-4 w-4" />
              Call Now
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
