import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (tab: string) => {
    onNavigate(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-[#073b2a] text-white pt-14 pb-10 border-t border-[#002418]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          {/* Brand info */}
          <div className="md:col-span-2 flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <span className="font-headline text-2xl lg:text-3xl text-white font-extrabold tracking-tight">
                PROTEINOVA
              </span>
            </div>
            <p className="text-base text-[#bbeed5] font-medium">
              Better Eggs. Better Everyday Nutrition.
            </p>
            <p className="text-sm text-[#76a68f] max-w-md leading-relaxed">
              Pioneering advanced biological nutrition, clinical farm hygiene, and farm-fresh protein transparency across India.
            </p>
            <div className="mt-3 flex items-center gap-3 text-xs text-[#bbeed5]">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#002418]/60 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-[#fdc826]" />
                ISO 22000 &amp; FSSAI Standard
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#002418]/60 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-[#a0d1b9]" />
                Zero Antibiotic Residue
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-[#fdc826] uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2.5">
              <li>
                <button
                  onClick={() => handleNav('about-us')}
                  className="text-sm text-[#76a68f] hover:text-white transition-colors cursor-pointer text-left"
                >
                  About Our Mission
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('products')}
                  className="text-sm text-[#76a68f] hover:text-white transition-colors cursor-pointer text-left"
                >
                  Farm Fresh Eggs
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('recipes')}
                  className="text-sm text-[#76a68f] hover:text-white transition-colors cursor-pointer text-left"
                >
                  Nutritional Recipes
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('partner-with-us')}
                  className="text-sm text-[#76a68f] hover:text-white transition-colors cursor-pointer text-left"
                >
                  B2B Wholesale &amp; Retail
                </button>
              </li>
            </ul>
          </div>

          {/* Corporate & Contact */}
          <div>
            <h4 className="text-sm font-bold text-[#fdc826] uppercase tracking-wider mb-4">
              Corporate &amp; Contact
            </h4>
            <p className="text-sm text-[#76a68f] mb-1 font-medium">
              Proteinova Food Products Pvt. Ltd.
            </p>
            <p className="text-sm text-[#76a68f] mb-4">
              Institutional Supply &amp; Farm Gate Operations
            </p>
            <button
              onClick={() => handleNav('contact-us')}
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#fdc826] hover:underline cursor-pointer group"
            >
              <span>Inquire Now</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#76a68f]">
          <p>© {new Date().getFullYear()} Proteinova Food Products Private Limited. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Terms of Supply
            </span>
            <span className="hover:text-white transition-colors cursor-pointer">
              Food Safety Standards
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
