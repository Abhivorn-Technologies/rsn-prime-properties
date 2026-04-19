import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./routes/index";
import About from "./routes/about";
import Properties from "./routes/properties";
import Services from "./routes/services";
import Testimonials from "./routes/testimonials";
import WhyChooseUs from "./routes/why-choose-us";
import Contact from "./routes/contact";

// Scroll to top or specific section on navigation
function ScrollToTop() {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        // We use a small timeout to ensure the DOM is ready
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 10);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash, key]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/services" element={<Services />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Fallback for 404 - you can create a dedicated NotFound page later */}
        <Route path="*" element={<Index />} />
      </Routes>
    </Router>
  );
}

export default App;
