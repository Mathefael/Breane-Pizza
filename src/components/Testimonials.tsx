import { motion } from "motion/react";
import { Star } from "lucide-react";
import { FEEDBACK } from "../constants";

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-beige overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-black text-brand-dark/40 uppercase tracking-[.3em] mb-4">REVIEWS</h2>
          <h3 className="text-4xl md:text-5xl font-black text-brand-dark uppercase tracking-tighter">
            What <span className="text-brand-orange">Lovers</span> Say
          </h3>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          {FEEDBACK.map((review, idx) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-3xl max-w-sm flex-1 basis-[320px] shadow-xl shadow-brand-dark/5"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#F27D26" color="#F27D26" />
                ))}
              </div>
              <p className="text-lg font-medium text-brand-dark/80 italic mb-8 leading-relaxed">
                "{review.comment}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-orange/20 rounded-full flex items-center justify-center font-black text-brand-orange uppercase">
                  {review.name.charAt(0)}
                </div>
                <span className="font-bold text-brand-dark">{review.name}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
