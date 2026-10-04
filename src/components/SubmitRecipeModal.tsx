import React, { useState } from 'react';
import { X, Upload, CheckCircle2, Camera, Award, Egg } from 'lucide-react';

interface SubmitRecipeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SubmitRecipeModal: React.FC<SubmitRecipeModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    recipeTitle: '',
    eggVariety: 'Classic White Eggs',
    cookingTime: '15 mins',
    instagramHandle: '',
    ingredients: '',
    instructions: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Keep state showing success for 3 seconds then close or let user close
    }, 1500);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl border border-[#073b2a]/10 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#073b2a] text-white p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#fdc826] text-[#002418] flex items-center justify-center">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs text-[#fdc826] font-bold uppercase tracking-wider">
                #CookWithProteinova
              </span>
              <h3 className="font-headline text-lg sm:text-xl font-bold">
                Submit Your Signature Egg Recipe
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center justify-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#ecf7e9] text-[#073b2a] flex items-center justify-center">
                <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
              </div>
              <h4 className="font-headline text-2xl font-bold text-[#002418]">
                Recipe Successfully Submitted!
              </h4>
              <p className="text-sm text-[#414944] max-w-md leading-relaxed">
                Thank you! Our executive culinary panel reviews home-chef recipes each week. If selected, you will receive a complimentary hamper of Proteinova Classic, Country, and Duck eggs delivered right to your doorstep.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-[#fdc826] text-[#002418] font-bold text-sm hover:bg-[#f4bf1b] transition-colors cursor-pointer"
                >
                  Return to Recipes
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 rounded-2xl bg-[#ecf7e9] text-xs text-[#002418] flex items-center gap-2 border border-[#bbeed5]/60">
                <Award className="w-4 h-4 text-[#765a00] shrink-0" />
                <span>
                  10 Home Chefs are selected monthly for our fresh farm egg hampers.
                </span>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#002418] uppercase tracking-wider mb-1.5">
                  Recipe Title *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Masala Poached Egg Sourdough with Curry Leaves"
                  value={formData.recipeTitle}
                  onChange={(e) => setFormData({ ...formData, recipeTitle: e.target.value })}
                  className="w-full bg-[#f6f7f5] border border-slate-200 px-4 py-2.5 rounded-xl text-sm text-[#151e16] focus:outline-none focus:ring-2 focus:ring-[#073b2a]/30"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#002418] uppercase tracking-wider mb-1.5">
                    Egg Variety Used *
                  </label>
                  <select
                    value={formData.eggVariety}
                    onChange={(e) => setFormData({ ...formData, eggVariety: e.target.value })}
                    className="w-full bg-[#f6f7f5] border border-slate-200 px-3 py-2.5 rounded-xl text-sm text-[#151e16] focus:outline-none focus:ring-2 focus:ring-[#073b2a]/30"
                  >
                    <option value="Proteinova Classic White Eggs">Classic White Eggs</option>
                    <option value="Proteinova Farm-Fresh Brown Eggs">Farm-Fresh Brown Eggs</option>
                    <option value="Proteinova Country Free-Range Heritage">Country Free-Range Heritage</option>
                    <option value="Proteinova Rich Culinary Duck Eggs">Rich Culinary Duck Eggs</option>
                    <option value="Proteinova Concentrated Quail Eggs">Concentrated Quail Eggs</option>
                    <option value="Proteinova Pure Liquid Egg Whites">Clinical Pure Egg Whites</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#002418] uppercase tracking-wider mb-1.5">
                    Cooking Time (mins)
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 15 mins"
                    value={formData.cookingTime}
                    onChange={(e) => setFormData({ ...formData, cookingTime: e.target.value })}
                    className="w-full bg-[#f6f7f5] border border-slate-200 px-4 py-2.5 rounded-xl text-sm text-[#151e16] focus:outline-none focus:ring-2 focus:ring-[#073b2a]/30"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#002418] uppercase tracking-wider mb-1.5">
                  Your Instagram or LinkedIn Handle *
                </label>
                <input
                  type="text"
                  required
                  placeholder="@chef_kitchen or profile link"
                  value={formData.instagramHandle}
                  onChange={(e) => setFormData({ ...formData, instagramHandle: e.target.value })}
                  className="w-full bg-[#f6f7f5] border border-slate-200 px-4 py-2.5 rounded-xl text-sm text-[#151e16] focus:outline-none focus:ring-2 focus:ring-[#073b2a]/30"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#002418] uppercase tracking-wider mb-1.5">
                  Key Ingredients *
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="3 eggs, 1 tbsp cold butter, 1 tsp chili crisp, toasted sourdough..."
                  value={formData.ingredients}
                  onChange={(e) => setFormData({ ...formData, ingredients: e.target.value })}
                  className="w-full bg-[#f6f7f5] border border-slate-200 p-3 rounded-xl text-sm text-[#151e16] focus:outline-none focus:ring-2 focus:ring-[#073b2a]/30"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#002418] uppercase tracking-wider mb-1.5">
                  Method / Preparation Steps *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Step 1: Whisk eggs gently... Step 2: Pour into medium low skillet..."
                  value={formData.instructions}
                  onChange={(e) => setFormData({ ...formData, instructions: e.target.value })}
                  className="w-full bg-[#f6f7f5] border border-slate-200 p-3 rounded-xl text-sm text-[#151e16] focus:outline-none focus:ring-2 focus:ring-[#073b2a]/30"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-[#002418] text-white font-bold text-sm hover:bg-[#073b2a] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md"
                >
                  <Upload className="w-4 h-4" />
                  <span>Submit Recipe for Culinary Hamper Selection</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
