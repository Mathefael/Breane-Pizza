import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-brand-red/10 rounded-2xl rotate-3"></div>
            <img
              src="https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=1000&q=80"
              alt="Crafting Pizza"
              className="relative rounded-2xl object-cover w-full h-[500px] shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-black text-brand-red uppercase tracking-widest mb-4">OUR STORY</h2>
            <h3 className="text-4xl md:text-5xl font-black text-brand-dark mb-6 leading-tight uppercase">
              Crafted With <br />Passion Since 2012
            </h3>
            <p className="text-lg text-brand-dark/70 mb-8 leading-relaxed">
              At Breane, we believe that pizza is more than just food—it's an experience. We craft every pizza with passion, using fresh ingredients and authentic recipes to deliver the perfect slice every time.
            </p>
            <p className="text-lg text-brand-dark/70 mb-10 leading-relaxed">
              Our journey started in a small kitchen with big dreams. Today, we continue that tradition of excellence, bringing the authentic taste of handmade dough and premium toppings to your table.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <div>
                <span className="block text-4xl font-black text-brand-red mb-1">10k+</span>
                <span className="text-sm font-bold text-brand-dark/60 uppercase">Pizzas Delivered</span>
              </div>
              <div>
                <span className="block text-4xl font-black text-brand-red mb-1">100%</span>
                <span className="text-sm font-bold text-brand-dark/60 uppercase">Fresh Ingredients</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
