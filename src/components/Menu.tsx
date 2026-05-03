import { motion } from "motion/react";
import { MessageSquare, ShoppingCart, Tag } from "lucide-react";
import { PIZZAS, BUSINESS_INFO } from "../constants";
import { useState } from "react";

import { Pizza } from "../types";

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-brand-beige">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="text-sm font-black text-brand-red uppercase tracking-[.3em] mb-4">OUR MENU</h2>
            <h3 className="text-4xl md:text-5xl font-black text-brand-dark uppercase tracking-tighter">
              Authentic <span className="text-brand-red">Slices</span>
            </h3>
          </div>
          <p className="max-w-md text-brand-dark/60 font-medium">
            Every pizza is made to order with our signature handmade dough and fresh, local ingredients.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PIZZAS.map((pizza, idx) => (
            <PizzaCard key={pizza.id} pizza={pizza} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface PizzaCardProps {
  pizza: Pizza;
  index: number;
  [key: string]: any; // Allow extra props like 'key'
}

function PizzaCard({ pizza, index }: PizzaCardProps) {
  const [size, setSize] = useState("Medium");
  const [extras, setExtras] = useState<string[]>([]);
  
  const priceMultipliers: Record<string, number> = { "Small": 0.8, "Medium": 1, "Large": 1.2 };
  const TOPPINGS = ["Extra Cheese", "Bacon", "Mushrooms", "Olives"];
  
  const currentPrice = Math.round(pizza.price * priceMultipliers[size]) + (extras.length * 2);

  const toggleExtra = (topping: string) => {
    setExtras(prev => prev.includes(topping) ? prev.filter(t => t !== topping) : [...prev, topping]);
  };

  const whatsappLink = `https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(
    `${BUSINESS_INFO.whatsappMessage}\n\nI'd like to order:\n- ${pizza.name} (${size})${extras.length > 0 ? `\n- Add: ${extras.join(", ")}` : ""}`
  )}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-brand-dark/5 hover:shadow-2xl transition-all group border border-brand-dark/5 flex flex-col h-full"
    >
      <div className="relative h-64 overflow-hidden shrink-0">
        <img
          src={pizza.image}
          alt={pizza.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {pizza.tags.map((tag: string) => (
            <span key={tag} className="px-3 py-1 bg-brand-dark/80 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-wider rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h4 className="text-2xl font-black text-brand-dark uppercase tracking-tight">{pizza.name}</h4>
          <span className="text-2xl font-black text-brand-red">${currentPrice}</span>
        </div>
        
        <p className="text-brand-dark/60 text-sm mb-6 line-clamp-2">
          {pizza.description}
        </p>

        {/* Size Selector */}
        <div className="mb-6">
          <p className="text-[10px] font-black text-brand-dark/40 uppercase tracking-widest mb-2">Select Size</p>
          <div className="flex items-center gap-2 p-1 bg-brand-beige rounded-2xl">
            {["Small", "Medium", "Large"].map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`flex-1 py-2 rounded-xl text-[10px] font-black uppercase transition-all ${
                  size === s 
                    ? "bg-brand-red text-white shadow-lg shadow-brand-red/20" 
                    : "text-brand-dark/40 hover:text-brand-dark"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Extras Selector */}
        <div className="mb-8">
          <p className="text-[10px] font-black text-brand-dark/40 uppercase tracking-widest mb-2">Extra Toppings (+$2 each)</p>
          <div className="flex flex-wrap gap-2">
            {TOPPINGS.map((topping) => (
              <button
                key={topping}
                onClick={() => toggleExtra(topping)}
                className={`px-3 py-1.5 rounded-full text-[10px] font-bold border transition-all ${
                  extras.includes(topping) 
                    ? "bg-brand-orange/10 border-brand-orange text-brand-orange" 
                    : "bg-transparent border-brand-dark/10 text-brand-dark/60 hover:border-brand-dark/30"
                }`}
              >
                {topping}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-auto">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="btn-primary w-full py-4 text-sm tracking-widest"
          >
            <MessageSquare size={18} />
            ORDER NOW
          </a>
        </div>
      </div>
    </motion.div>
  );
}
