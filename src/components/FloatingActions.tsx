import { useEffect, useState } from "react";
import { Phone, ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon";

export function FloatingActions() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="fixed right-6 bottom-8 sm:right-8 sm:bottom-12 z-40 flex flex-col gap-4"
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://wa.me/919705811199?text=Hi%2C%20I%27m%20interested%20in%20RSN%20Infra%20Properties"
            target="_blank"
            rel="noreferrer"
            aria-label="WhatsApp"
            className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-elegant transition-transform"
          >
            <WhatsAppIcon className="h-7 w-7" />
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="tel:9705811199"
            aria-label="Call now"
            className="w-14 h-14 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center shadow-elegant transition-transform"
          >
            <Phone className="h-6 w-6" />
          </motion.a>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
            className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-elegant transition-transform"
          >
            <ArrowUp className="h-5 w-5" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
