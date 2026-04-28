import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/rsn-logo.png";

const links = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Properties", to: "/properties" },
  { label: "Projects", to: "/projects" },
  { label: "Why Us", to: "/why-choose-us" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Contact", to: "/contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 bg-white ${
        scrolled 
          ? "shadow-sm" 
          : "shadow-none"
      }`}
    >
      {/* Top Bar */}
      <div className={`border-b border-border/10 overflow-hidden transition-all duration-300 ${scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center py-2 text-[10px] sm:text-xs font-medium text-foreground/70">
          <div className="flex items-center gap-3 sm:gap-6">
            <a href="mailto:rsninfraproperties@gmail.com" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Mail className="h-3 sm:h-3.5 w-3 sm:w-3.5 text-primary" />
              <span className="hidden xs:inline">rsninfraproperties@gmail.com</span>
              <span className="xs:hidden">Email Us</span>
            </a>
            <a href="tel:9705811199" className="flex items-center gap-1.5 hover:text-primary transition-colors">
              <Phone className="h-3 sm:h-3.5 w-3 sm:w-3.5 text-primary" />
              +91 9705811199
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-primary transition-colors"><Facebook className="h-3 sm:h-3.5 w-3 sm:w-3.5" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Instagram className="h-3 sm:h-3.5 w-3 sm:w-3.5" /></a>
            <a href="#" className="hover:text-primary transition-colors"><Twitter className="h-3 sm:h-3.5 w-3 sm:w-3.5" /></a>
          </div>
        </div>
      </div>

      <nav className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between transition-all duration-300 ${scrolled ? "h-12 lg:h-16" : "h-14 lg:h-20"}`}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <img 
              src={logo} 
              alt="RSN Infra & Properties" 
              className={`transition-all duration-300 ${scrolled ? "h-6 lg:h-10" : "h-8 lg:h-12"} w-auto`} 
            />
          </Link>
        </motion.div>

        <div className="flex items-center gap-8">
          <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
            {links.map((l, i) => (
              <motion.li 
                key={l.to}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <NavLink
                  to={l.to}
                  end
                  className={({ isActive }) => 
                    `text-sm font-bold uppercase tracking-tight transition-colors relative group ${
                      isActive ? "text-primary" : "text-foreground/80 hover:text-primary"
                    }`
                  }
                >
                  {l.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-gold transition-all group-hover:w-full" />
                </NavLink>
              </motion.li>
            ))}
          </ul>

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
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border/10 overflow-hidden"
          >
            <ul className="px-4 py-6 space-y-2">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    end
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-3 rounded-xl font-bold uppercase text-sm transition-all ${
                        isActive ? "bg-primary/10 text-primary" : "text-foreground hover:bg-secondary"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
              <li className="pt-4 mt-4 border-t border-border/10">
                <a
                  href="tel:9705811199"
                  className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-4 rounded-xl font-bold uppercase text-sm shadow-soft"
                >
                  <Phone className="h-4 w-4" />
                  Call Now
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
