import { motion } from "motion/react";
import { MessageSquare, List } from "lucide-react";
import { BUSINESS_INFO } from "../constants";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=1920&q=85"
          alt="Premium Pizza Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/70 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-brand-orange text-white rounded-full text-xs font-bold uppercase tracking-widest mb-6">
              AUTHENTIC ITALIAN EXPERIENCE
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] mb-6 tracking-tighter uppercase">
              The Best <br />
              <span className="text-brand-red">Pizza</span> <br />
              In Town
            </h1>
            <p className="text-lg md:text-xl text-brand-beige/80 mb-10 max-w-lg leading-relaxed font-light">
              Fresh ingredients, fast delivery, and an unforgettable taste that will keep you coming back for more.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMessage)}`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-lg px-8 py-4 shadow-2xl shadow-brand-red/20"
              >
                <MessageSquare size={22} />
                ORDER ON WHATSAPP
              </motion.a>
              <a
                href="#menu"
                className="btn-outline text-brand-beige border-brand-beige/30 hover:bg-brand-beige hover:text-brand-dark px-8 py-4"
              >
                <List size={22} />
                VIEW MENU
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Badge */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
        animate={{ opacity: 1, scale: 1, rotate: -12 }}
        className="hidden lg:flex absolute bottom-20 right-20 w-40 h-40 bg-brand-orange text-white rounded-full items-center justify-center text-center p-4 shadow-2xl"
      >
        <span className="font-display font-black text-sm leading-tight uppercase">
          Delivery under <br />
          <span className="text-3xl">45</span> <br />
          minutes
        </span>
      </motion.div>
    </section>
  );
}
