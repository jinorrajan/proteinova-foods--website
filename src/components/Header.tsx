import React, { useState } from 'react';
import { Bookmark, Menu, X, User } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  onNavigate: (tab: string) => void;
  savedCount: number;
  onOpenBookmarks: () => void;
  onOpenProfile: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onNavigate,
  savedCount,
  onOpenBookmarks,
  onOpenProfile,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about-us', label: 'About Us' },
    { id: 'products', label: 'Products' },
    { id: 'recipes', label: 'Recipes' },
    { id: 'partner-with-us', label: 'Partner With Us' },
    { id: 'contact-us', label: 'Contact Us' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#ffffff]/95 backdrop-blur-xl border-b border-[#073b2a]/10 shadow-[0_1px_8px_rgba(7,59,42,0.06)]">
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <button
          onClick={() => handleLinkClick('home')}
          className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
        >
          <img
            alt="Proteinova Food Products Logo"
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida/AEtjO1WgYfAftSS7MhJThrrpKVDFB185Qr0F3m-6MszTZJUSZITIf1CMCFEGeDFf02fDfRaE9H6ypaA5iXctK1EeCOkRbbnGW6rTQEWE89CN0f4wAWD43-S1bpViku9hbTKTOR_Ek7SxkIuWPNk_TYOjy4riWmKJPDXDAbprMBkFre4RZ4KSl90MtPXJkfhkHKVYjGzTUeDP_Hve2MGI-XxOG_U_RKKYG4fl3KE0WjXZDkqiuKY3VgRTBlhfRkow"
            referrerPolicy="no-referrer"
          />
          <span className="font-headline text-xl text-[#002418] tracking-tight font-extrabold hidden sm:inline-block">
            Proteinova
          </span>
        </button>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = currentTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className={`text-sm font-medium transition-colors relative py-1 cursor-pointer ${
                  isActive
                    ? 'text-[#002418] font-bold'
                    : 'text-[#414944] hover:text-[#002418]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#fdc826] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Action Cluster */}
        <div className="flex items-center gap-3">
          {/* Saved Recipes Trigger */}
          <button
            onClick={onOpenBookmarks}
            className="relative p-2 rounded-xl text-[#002418] hover:bg-[#ecf7e9] transition-colors cursor-pointer"
            title="Saved Recipes"
            aria-label="View Saved Recipes"
          >
            <Bookmark className="w-5 h-5" />
            {savedCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#fdc826] text-[#002418] text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
                {savedCount}
              </span>
            )}
          </button>

          {/* Partner CTA */}
          <button
            onClick={() => handleLinkClick('partner-with-us')}
            className="hidden sm:inline-flex items-center justify-center bg-[#fdc826] text-[#002418] px-5 py-2.5 rounded-xl text-sm font-bold hover:shadow-[0_4px_14px_rgba(253,200,38,0.45)] hover:bg-[#f4bf1b] transition-all cursor-pointer"
          >
            Partner With Us
          </button>

          {/* User Profile Avatar */}
          <button
            onClick={onOpenProfile}
            className="w-9 h-9 rounded-full bg-[#002418] text-white flex items-center justify-center hover:bg-[#073b2a] transition-all cursor-pointer shadow-sm"
            aria-label="Account & Preferences"
          >
            <User className="w-4 h-4" />
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-[#002418] hover:bg-[#ecf7e9] transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#073b2a]/10 px-6 py-4 shadow-lg animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleLinkClick(link.id)}
                  className={`text-left py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#ecf7e9] text-[#002418] font-bold'
                      : 'text-[#414944] hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
            <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => handleLinkClick('partner-with-us')}
                className="w-full text-center bg-[#fdc826] text-[#002418] py-2.5 rounded-xl text-sm font-bold"
              >
                Partner With Us
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
