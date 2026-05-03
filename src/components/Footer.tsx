import { BUSINESS_INFO } from "../constants";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-beige py-20 border-t border-brand-beige/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
             <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-brand-red rounded flex items-center justify-center rotate-3">
                <span className="text-white font-display font-black text-lg italic">B</span>
              </div>
              <span className="font-display font-bold text-xl tracking-tighter text-white">BREANE</span>
            </a>
            <p className="text-brand-beige/50 text-sm leading-relaxed mb-8">
              Premium artisanal pizza delivered to your door. Fresh ingredients, handmade dough, and 100% passion in every slice.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={Instagram} />
              <SocialIcon icon={Facebook} />
              <SocialIcon icon={Twitter} />
            </div>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-brand-orange mb-8 text-sm">Quick Links</h4>
            <ul className="space-y-4 text-sm font-medium">
              <li><a href="#about" className="hover:text-brand-orange transition-colors">About Us</a></li>
              <li><a href="#menu" className="hover:text-brand-orange transition-colors">Our Menu</a></li>
              <li><a href="#offers" className="hover:text-brand-orange transition-colors">Special Offers</a></li>
              <li><a href="#contact" className="hover:text-brand-orange transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-brand-orange mb-8 text-sm">Hours</h4>
            <div className="space-y-4 text-sm">
              <p className="flex justify-between items-center pb-2 border-b border-brand-beige/10">
                <span className="text-brand-beige/50">Mon–Thu</span>
                <span className="font-bold">6 PM – 11 PM</span>
              </p>
              <p className="flex justify-between items-center pb-2 border-b border-brand-beige/10">
                <span className="text-brand-beige/50">Fri–Sat</span>
                <span className="font-bold">6 PM – 12 AM</span>
              </p>
              <p className="flex justify-between items-center pb-2 border-b border-brand-beige/10">
                <span className="text-brand-beige/50">Sunday</span>
                <span className="font-bold">6 PM – 11 PM</span>
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-black uppercase tracking-widest text-brand-orange mb-8 text-sm">Location</h4>
            <p className="text-sm font-medium leading-relaxed mb-4">
              {BUSINESS_INFO.address}
            </p>
            <p className="text-sm font-bold text-brand-orange">
              {BUSINESS_INFO.phone}
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-brand-beige/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-brand-beige/40">
          <p>© 2024 BREANE PIZZA. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-beige transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-beige transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ icon: Icon }: any) {
  return (
    <a href="#" className="w-10 h-10 rounded-full bg-brand-beige/10 flex items-center justify-center hover:bg-brand-red transition-all group">
      <Icon size={18} className="group-hover:scale-110 transition-transform" />
    </a>
  );
}
