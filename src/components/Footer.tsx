import React from 'react';
import { ArrowUpRight, Mail, Phone, MapPin, MessageCircle, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string, params?: any) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#26362C] text-[#FFFFFF] pt-16 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info with Official Egg Swirl Logo */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-12 flex items-center justify-center">
                <img
                  src="/logo.png"
                  alt="ProteinOva Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-2xl font-bold tracking-tight text-white">
                  Protein<span className="text-[#F4C430]">Ova</span>
                </span>
                <span className="block text-[10px] uppercase tracking-[0.2em] text-[#A3ADA6] font-medium -mt-1">
                  Food Products Pvt Ltd
                </span>
              </div>
            </div>

            <p className="text-sm text-[#D2D8D4] leading-relaxed max-w-sm">
              Making quality eggs accessible to families, retailers, and wholesale partners through ethical sourcing, automated UV grading, and dependable cold-chain distribution.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs bg-white/10 text-[#F4C430] border border-[#F4C430]/30 font-medium">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Class-A Quality Certified</span>
              </span>
            </div>
          </div>

          {/* Product Varieties */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.16em] text-[#F4C430] font-semibold">
              Egg Varieties
            </h4>
            <ul className="space-y-2 text-sm text-[#D2D8D4]">
              <li>
                <button
                  onClick={() => onNavigate('product-detail', { id: 'brown-eggs' })}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Brown Eggs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('product-detail', { id: 'white-eggs' })}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  White Eggs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('product-detail', { id: 'country-eggs' })}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Country Eggs (Free-Range)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('product-detail', { id: 'duck-eggs' })}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Duck Eggs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('product-detail', { id: 'quail-eggs' })}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Quail Eggs
                </button>
              </li>
            </ul>
          </div>

          {/* Quick Experiences */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.16em] text-[#F4C430] font-semibold">
              Discover & Business
            </h4>
            <ul className="space-y-2 text-sm text-[#D2D8D4]">
              <li>
                <button onClick={() => onNavigate('recipes')} className="hover:text-white transition-colors cursor-pointer">
                  300+ Recipe Collection
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('business', { tab: 'wholesale' })} className="hover:text-white transition-colors cursor-pointer">
                  Wholesale & Bulk Supply
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('business', { tab: 'partner' })} className="hover:text-white transition-colors cursor-pointer">
                  Become a Retail Partner
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('locations')} className="hover:text-white transition-colors cursor-pointer">
                  Branches & Distribution
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors cursor-pointer">
                  About ProteinOva
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('faq')} className="hover:text-white transition-colors cursor-pointer">
                  Frequently Asked Questions
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-[0.16em] text-[#F4C430] font-semibold">
              Get in Touch
            </h4>
            <div className="space-y-2.5 text-xs text-[#D2D8D4]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#F4C430] shrink-0 mt-0.5" />
                <span>141/40c, Kurinji Tower, Salem Road, Namakkal, Tamil Nadu - 637001</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#F4C430] shrink-0" />
                <a href="tel:+919791220001" className="hover:text-white transition-colors">
                  +91 9791220001
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#F4C430] shrink-0" />
                <a href="mailto:connect@proteinova.in" className="hover:text-white transition-colors">
                  connect@proteinova.in
                </a>
              </div>
              <div className="pt-2">
                <a
                  href="https://wa.me/919791220001"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#F4C430] hover:bg-[#E5A900] text-[#26362C] font-semibold rounded-full transition-colors text-xs"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp Business</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#A3ADA6] gap-4">
          <p>© {new Date().getFullYear()} Proteinova Food Products Private Limited. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('legal', { tab: 'privacy' })}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onNavigate('legal', { tab: 'terms' })}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
