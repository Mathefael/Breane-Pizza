import { motion } from "motion/react";
import { MessageSquare, Phone } from "lucide-react";
import { BUSINESS_INFO } from "../constants";

export default function CallToAction() {
  return (
    <section className="py-24 bg-brand-red text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl -ml-48 -mb-48"></div>
      
      <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
            Craving <br />The Perfect Slice?
          </h2>
          <p className="text-xl md:text-2xl font-light mb-12 opacity-80 max-w-2xl mx-auto">
            Order now and enjoy the best pizza in town, delivered hot to your door or ready for pickup.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-lg mx-auto">
             <a
              href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMessage)}`}
              target="_blank"
              rel="noreferrer"
              className="bg-white text-brand-red px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-white/90 transition-all flex items-center justify-center gap-3 shadow-2xl"
            >
              <MessageSquare size={24} />
              WhatsApp Now
            </a>
            <a
              href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, "")}`}
              className="border-2 border-white/30 text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-white hover:text-brand-red transition-all flex items-center justify-center gap-3"
            >
              <Phone size={24} />
              Call To Order
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
