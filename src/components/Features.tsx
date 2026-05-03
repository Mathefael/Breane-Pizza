import { motion } from "motion/react";
import { Truck, Sparkles, DollarSign, Heart } from "lucide-react";

const FEATURES = [
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "Your pizza arrives hot and fresh within 30–45 minutes.",
  },
  {
    icon: Sparkles,
    title: "Premium Ingredients",
    desc: "We use only the finest mozzarella and farm-fresh produce.",
  },
  {
    icon: DollarSign,
    title: "Affordable Prices",
    desc: "Premium quality without the premium price tag. Everyone deserves a perfect slice.",
  },
  {
    icon: Heart,
    title: "Exceptional Service",
    desc: "Our team loves what they do, and it shows in every interaction.",
  },
];

export default function Features() {
  return (
    <section className="py-24 bg-brand-dark text-brand-beige">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black text-brand-orange uppercase tracking-[.3em] mb-4">WHY CHOOSE US</h2>
          <h3 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">The Breane Standard</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {FEATURES.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center text-center p-6"
            >
              <div className="w-16 h-16 bg-brand-orange/10 rounded-2xl flex items-center justify-center mb-6 text-brand-orange rotate-3">
                <feature.icon size={32} />
              </div>
              <h4 className="text-xl font-black uppercase mb-3 tracking-tight">{feature.title}</h4>
              <p className="text-brand-beige/60 leading-relaxed text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
