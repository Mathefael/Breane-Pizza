import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Phone, Menu as MenuIcon, X, Clock, MapPin } from "lucide-react";
import { useState, useEffect } from "react";
import { BUSINESS_INFO } from "../constants";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Menu", href: "#menu" },
    { name: "Offers", href: "#offers" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Top Utility Bar */}
      <div className="bg-brand-dark text-brand-beige py-2 px-4 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-[10px] font-bold uppercase tracking-[0.2em]">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Clock size={12} className="text-brand-orange" /> {BUSINESS_INFO.hours}</span>
            <span className="flex items-center gap-2"><MapPin size={12} className="text-brand-orange" /> {BUSINESS_INFO.address}</span>
          </div>
          <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, "")}`} className="hover:text-brand-orange transition-colors">
            {BUSINESS_INFO.phone}
          </a>
        </div>
      </div>

      <header className={`fixed top-0 sm:top-auto left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-header py-2' : 'bg-transparent py-4 sm:py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 group">
            <div className={`w-10 h-10 bg-brand-red rounded-lg flex items-center justify-center rotate-3 group-hover:rotate-12 transition-transform shadow-lg ${scrolled ? 'scale-90' : ''}`}>
              <span className="text-white font-display font-black text-xl italic">B</span>
            </div>
            <span className={`font-display font-bold text-2xl tracking-tighter transition-colors ${scrolled ? 'text-brand-dark' : 'text-white sm:text-white'}`}>BREANE</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-bold uppercase tracking-wider transition-colors ${scrolled ? 'text-brand-dark hover:text-brand-red' : 'text-white hover:text-brand-orange'}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMessage)}`}
              target="_blank"
              rel="noreferrer"
              className="btn-primary py-2.5 px-6 text-xs"
            >
              <MessageSquare size={16} />
              ORDER NOW
            </a>
          </nav>

          {/* Mobile menu toggle */}
          <button 
            className={`md:hidden p-2 ${scrolled ? 'text-brand-dark' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-full left-0 right-0 bg-white shadow-2xl overflow-hidden"
            >
              <div className="flex flex-col p-8 gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-2xl font-black uppercase tracking-tighter text-brand-dark border-b border-brand-dark/5 pb-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <div className="flex flex-col gap-4 mt-4">
                  <a
                    href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMessage)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary w-full py-4"
                  >
                    <MessageSquare size={20} />
                    ORDER ON WHATSAPP
                  </a>
                  <a
                    href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, "")}`}
                    className="btn-secondary w-full py-4"
                  >
                    <Phone size={20} />
                    CALL NOW
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
