import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';

interface HeaderProps {
  currentView: string;
  onNavigate: (view: string, params?: any) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'Our Products' },
    { id: 'recipes', label: 'Recipes' },
    { id: 'business', label: 'B2B & Partners' },
    { id: 'faq', label: 'FAQ' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'py-3.5 bg-white/90 backdrop-blur-md border-b border-[#26362C]/10 shadow-xs'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Brand Logo with Official Egg Swirl Motif */}
        <button
          onClick={() => {
            onNavigate('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-3 text-left group cursor-pointer"
        >
          <div className="w-8 h-10 flex items-center justify-center group-hover:scale-108 transition-transform">
            <img
              src="/logo.png"
              alt="ProteinOva Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-[#26362C]">
              Protein<span className="text-[#E5A900]">Ova</span>
            </span>
            <span className="block text-[9px] uppercase tracking-[0.22em] text-[#717B74] font-semibold -mt-1">
              Pure Protein
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive =
              currentView === link.id ||
              (link.id === 'business' && (currentView === 'wholesale' || currentView === 'partner' || currentView === 'business'));

            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer py-1 relative ${
                  isActive
                    ? 'text-[#E5A900]'
                    : 'text-[#26362C]/80 hover:text-[#E5A900]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E5A900] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://wa.me/919791220001?text=Hello%20ProteinOva,%20I%20would%20like%20to%20enquire%20about%20your%20egg%20products."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#26362C] bg-white border border-[#26362C]/15 rounded-full hover:border-[#E5A900] transition-all hover:shadow-2xs"
          >
            <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>WhatsApp</span>
          </a>

          <button
            onClick={() => onNavigate('business', { tab: 'wholesale' })}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#26362C] hover:bg-[#E5A900] hover:text-[#26362C] rounded-full transition-all shadow-xs cursor-pointer group"
          >
            <span>B2B Wholesale</span>
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#26362C] hover:text-[#E5A900] transition-colors cursor-pointer"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#26362C]/10 px-6 py-6 shadow-xl animate-in slide-in-from-top-2">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left text-sm font-semibold uppercase tracking-wider py-1.5 border-b border-[#26362C]/05 cursor-pointer ${
                  currentView === link.id ? 'text-[#E5A900]' : 'text-[#26362C]'
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="pt-2 flex flex-col gap-2.5">
              <button
                onClick={() => {
                  onNavigate('wholesale');
                  setMobileMenuOpen(false);
                }}
                className="w-full py-2.5 text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#26362C] rounded-full cursor-pointer"
              >
                Wholesale & Supply Enquiry
              </button>
              <a
                href="https://wa.me/919791220001?text=Hello%20ProteinOva,%20I%20would%20like%20to%20enquire%20about%20your%20products."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 text-center text-xs font-semibold text-[#26362C] bg-white border border-[#26362C]/15 rounded-full flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
