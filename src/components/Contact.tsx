import { motion } from "motion/react";
import { Phone, Mail, MapPin, MessageSquare, Clock } from "lucide-react";
import { BUSINESS_INFO } from "../constants";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-sm font-black text-brand-red uppercase tracking-[.3em] mb-4">GET IN TOUCH</h2>
            <h3 className="text-4xl md:text-5xl font-black text-brand-dark uppercase tracking-tighter mb-8 shadow-brand-red/10">
              Visit Us <br />Or Say <span className="text-brand-red">Hello</span>
            </h3>

            <div className="space-y-8 mb-12">
              <ContactItem 
                icon={Phone} 
                title="Call Us" 
                value={BUSINESS_INFO.phone} 
                href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, "")}`}
              />
              <ContactItem 
                icon={MessageSquare} 
                title="WhatsApp" 
                value={BUSINESS_INFO.whatsapp} 
                href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMessage)}`}
                isAction
              />
              <ContactItem 
                icon={Mail} 
                title="Email" 
                value={BUSINESS_INFO.email} 
                href={`mailto:${BUSINESS_INFO.email}`}
              />
              <ContactItem 
                icon={MapPin} 
                title="Address" 
                value={BUSINESS_INFO.address} 
              />
              <ContactItem 
                icon={Clock} 
                title="Business Hours" 
                value={BUSINESS_INFO.hours} 
              />
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
               <a
                href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(BUSINESS_INFO.whatsappMessage)}`}
                target="_blank"
                rel="noreferrer"
                className="btn-primary flex-1 py-4 uppercase text-xs tracking-widest"
              >
                <MessageSquare size={18} />
                Order on WhatsApp
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phone.replace(/\D/g, "")}`}
                className="btn-secondary flex-1 py-4 uppercase text-xs tracking-widest"
              >
                <Phone size={18} />
                Call Now
              </a>
            </div>
          </div>

          <div className="h-[500px] lg:h-auto min-h-[400px] bg-brand-beige rounded-[2.5rem] overflow-hidden relative border border-brand-dark/5 shadow-2xl">
            {/* Google Maps Placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center opacity-40">
              <MapPin size={64} className="mb-4 text-brand-red" />
              <p className="font-bold uppercase tracking-widest text-brand-dark">
                Google Maps Implementation
              </p>
              <p className="text-sm">
                Integrate your real location here
              </p>
            </div>
            {/* Overlay Map Visual */}
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1000&q=80"
              alt="Map view"
              className="w-full h-full object-cover grayscale opacity-20"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon: Icon, title, value, href, isAction }: any) {
  const content = (
    <div className="flex items-start gap-4">
      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 ${isAction ? 'bg-brand-orange text-white' : 'bg-brand-beige text-brand-dark'}`}>
        <Icon size={22} />
      </div>
      <div>
        <h4 className="text-[10px] font-black uppercase tracking-widest text-brand-dark/40 mb-1">{title}</h4>
        <p className={`font-bold text-lg ${isAction ? 'text-brand-orange' : 'text-brand-dark'}`}>{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a 
        href={href} 
        target={href.startsWith('http') ? "_blank" : undefined} 
        rel={href.startsWith('http') ? "noreferrer" : undefined}
        className="block group"
      >
        <motion.div whileHover={{ x: 5 }} className="transition-transform">
          {content}
        </motion.div>
      </a>
    );
  }

  return <div>{content}</div>;
}
