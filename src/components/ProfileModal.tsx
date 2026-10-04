import React, { useState } from 'react';
import { X, User, Egg, ShieldCheck, Heart, Award } from 'lucide-react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedCount: number;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({
  isOpen,
  onClose,
  savedCount,
}) => {
  const [dietFocus, setDietFocus] = useState('High Protein (>100g/day)');
  const [preferredEgg, setPreferredEgg] = useState('Farm-Fresh Brown');
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border border-[#073b2a]/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#073b2a] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#fdc826] text-[#002418] flex items-center justify-center font-bold text-lg">
              JR
            </div>
            <div>
              <h3 className="font-headline text-lg font-bold">Jinor Rajan</h3>
              <p className="text-xs text-[#bbeed5]">Proteinova Culinary Club Member</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
            aria-label="Close profile"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSave} className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-3 text-center">
            <div className="p-3 rounded-2xl bg-[#ecf7e9]">
              <span className="block text-xs text-[#414944]">Saved Recipes</span>
              <span className="font-headline text-xl font-bold text-[#002418]">{savedCount}</span>
            </div>
            <div className="p-3 rounded-2xl bg-[#ecf7e9]">
              <span className="block text-xs text-[#414944]">Member Tier</span>
              <span className="font-headline text-base font-bold text-[#765a00]">Chef Select</span>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#002418] uppercase tracking-wider mb-1.5">
              Dietary Goal / Regimen
            </label>
            <select
              value={dietFocus}
              onChange={(e) => setDietFocus(e.target.value)}
              className="w-full bg-[#f6f7f5] border border-slate-200 px-3 py-2.5 rounded-xl text-sm text-[#151e16] focus:outline-none focus:ring-2 focus:ring-[#073b2a]/30"
            >
              <option value="High Protein (>100g/day)">High Protein Fitness Focus (&gt;100g/day)</option>
              <option value="Clean Whole Food Mediterranean">Clean Whole Food Mediterranean</option>
              <option value="Low Carb / Ketogenic">Low Carb / Ketogenic</option>
              <option value="Culinary & Pastry Baking">Culinary &amp; Pastry Baking</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#002418] uppercase tracking-wider mb-1.5">
              Preferred Egg Grade for Home Delivery
            </label>
            <select
              value={preferredEgg}
              onChange={(e) => setPreferredEgg(e.target.value)}
              className="w-full bg-[#f6f7f5] border border-slate-200 px-3 py-2.5 rounded-xl text-sm text-[#151e16] focus:outline-none focus:ring-2 focus:ring-[#073b2a]/30"
            >
              <option value="Farm-Fresh Brown">Farm-Fresh Brown (Omega-3 Enriched)</option>
              <option value="Classic White">Proteinova Classic White (Grade A)</option>
              <option value="Country Free-Range Heritage">Country Free-Range Heritage (Pasture Raised)</option>
              <option value="Rich Culinary Duck">Rich Culinary Duck Eggs</option>
            </select>
          </div>

          <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5 text-xs text-[#414944]">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Farm-gate Cold Chain Guarantee active for your region.</span>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-2.5 px-4 rounded-xl bg-[#002418] text-white text-sm font-bold hover:bg-[#073b2a] transition-colors cursor-pointer"
            >
              {savedSuccess ? 'Preferences Saved!' : 'Update Preferences'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
