import { motion } from "motion/react";
import { Tag, Zap, Gift } from "lucide-react";
import { PROMOTIONS, BUSINESS_INFO } from "../constants";

export default function Promotions() {
  return (
    <section id="offers" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black text-brand-red uppercase tracking-[.3em] mb-4">LIMITED TIME</h2>
          <h3 className="text-4xl md:text-5xl font-black text-brand-dark uppercase tracking-tighter">
            Hot <span className="text-brand-red">Offers</span> for You
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {PROMOTIONS.map((promo, idx) => (
            <motion.div
              key={promo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative overflow-hidden rounded-[2.5rem] p-10 flex flex-col justify-between h-[340px] ${
                idx === 0 ? "bg-brand-orange text-white" : "bg-brand-red text-white"
              }`}
            >
              <div className="absolute -right-12 -top-12 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
              
              <div>
                <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-md">
                  {idx === 0 ? <Zap size={28} /> : <Gift size={28} />}
                </div>
                <h4 className="text-3xl font-black uppercase mb-4 tracking-tight">{promo.title}</h4>
                <p className="text-white/80 text-xl font-light max-w-sm leading-tight">
                  {promo.description}
                </p>
              </div>

              <div className="flex items-center justify-between mt-auto">
                {promo.price && (
                  <span className="text-4xl font-black tracking-tighter">${promo.price}</span>
                )}
                <a
                  href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
                    `${BUSINESS_INFO.whatsappMessage}\n\nI want to claim the offer: ${promo.title}`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-brand-dark text-white px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-brand-dark/80 transition-colors ml-auto shadow-xl"
                >
                  {promo.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
