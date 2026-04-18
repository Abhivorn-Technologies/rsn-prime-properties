import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  breadcrumb: string;
}

export function PageHeader({ eyebrow, title, highlight, description, breadcrumb }: PageHeaderProps) {
  return (
    <section className="relative pt-28 md:pt-36 pb-16 md:pb-20 overflow-hidden bg-gradient-primary">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,white,transparent_50%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center gap-2 text-sm text-primary-foreground/80 mb-6"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="inline-flex items-center gap-1 hover:text-white transition">
            <Home className="h-4 w-4" /> Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span className="text-white font-medium">{breadcrumb}</span>
        </motion.nav>

        {eyebrow && (
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-block px-4 py-1.5 rounded-full glass text-xs font-bold uppercase tracking-widest text-white"
          >
            {eyebrow}
          </motion.span>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
        >
          {title}{" "}
          {highlight && (
            <span className="bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent">
              {highlight}
            </span>
          )}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 text-lg text-white/90 max-w-2xl mx-auto"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
