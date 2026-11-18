import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, Users, ChefHat, Share2, Printer, Check, ChevronRight, ChevronLeft, Maximize2, Minimize2 } from 'lucide-react';
import { Recipe } from '../data/recipesData';

interface RecipeModalProps {
  recipe: Recipe | null;
  onClose: () => void;
  onOpenProduct: (eggType: string) => void;
}

export const RecipeModal: React.FC<RecipeModalProps> = ({ recipe, onClose, onOpenProduct }) => {
  if (!recipe) return null;

  const [servingsMultiplier, setServingsMultiplier] = useState(recipe.servings || 4);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});
  const [kitchenMode, setKitchenMode] = useState(false);
  const [activeKitchenStep, setActiveKitchenStep] = useState(0);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [copiedLink, setCopiedLink] = useState(false);

  // Helper to dynamically scale quantities in ingredient strings
  const scaleQuantity = (ingredient: string) => {
    const baseServings = recipe.servings || 4;
    const ratio = servingsMultiplier / baseServings;
    if (ratio === 1) return ingredient;

    return ingredient.replace(/^([\d\.]+)/, (match) => {
      const num = parseFloat(match);
      if (isNaN(num)) return match;
      const scaled = num * ratio;
      return scaled % 1 === 0 ? scaled.toString() : scaled.toFixed(1);
    });
  };

  const toggleIngredient = (idx: number) => {
    setCheckedIngredients((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const handleShare = async () => {
    const shareData = {
      title: `${recipe.title} — ProteinOva Recipe`,
      text: `Try this delicious ${recipe.title} prepared with fresh ProteinOva ${recipe.eggType}!`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('User cancelled share', err);
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const imagesList = recipe.allImages && recipe.allImages.length > 0 ? recipe.allImages : [recipe.image];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.94, y: 16 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className={`bg-[#FCFBF7] text-[#26362C] rounded-3xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden transition-all duration-300 ${
          kitchenMode ? 'max-w-5xl h-[92vh]' : 'max-w-4xl'
        }`}
      >
        {/* Top Header Bar */}
        <div className="px-6 py-4 bg-white border-b border-[#26362C]/08 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#F4C430]/20 text-[#26362C]">
              {recipe.category}
            </span>
            <span className="text-xs text-[#717B74] font-medium hidden sm:inline">•</span>
            <button
              onClick={() => {
                onClose();
                onOpenProduct(recipe.eggType);
              }}
              className="text-xs font-medium text-[#717B74] hover:text-[#E5A900] transition-colors hidden sm:inline cursor-pointer"
            >
              Prepared with {recipe.eggType}
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setKitchenMode(!kitchenMode)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                kitchenMode
                  ? 'bg-[#26362C] text-white shadow-xs'
                  : 'bg-white text-[#26362C] border border-[#26362C]/15 hover:border-[#E5A900]'
              }`}
              title="Toggle Kitchen Cooking Mode (Distraction-Free)"
            >
              {kitchenMode ? <Minimize2 className="w-3.5 h-3.5" /> : <Maximize2 className="w-3.5 h-3.5" />}
              <span>{kitchenMode ? 'Exit Cook Mode' : 'Kitchen Mode'}</span>
            </button>

            <button
              onClick={handleShare}
              className="p-2 rounded-full text-[#26362C] hover:bg-black/05 transition-colors cursor-pointer relative"
              title="Share Recipe"
            >
              <Share2 className="w-4 h-4" />
              {copiedLink && (
                <span className="absolute -bottom-8 right-0 text-[10px] bg-[#26362C] text-white px-2 py-0.5 rounded-full shadow-xs whitespace-nowrap animate-in fade-in">
                  Link Copied!
                </span>
              )}
            </button>

            <button
              onClick={handlePrint}
              className="p-2 rounded-full text-[#26362C] hover:bg-black/05 transition-colors cursor-pointer"
              title="Print Recipe"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full text-[#26362C] hover:bg-black/05 transition-colors cursor-pointer ml-1"
              title="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content Body */}
        {kitchenMode ? (
          /* ================= KITCHEN COOKING MODE ================= */
          <div className="flex-1 overflow-y-auto p-6 sm:p-12 flex flex-col justify-between bg-white">
            <div className="max-w-3xl mx-auto w-full">
              <div className="flex items-center justify-between text-xs text-[#717B74] mb-4">
                <span>Cooking Step {activeKitchenStep + 1} of {recipe.steps.length}</span>
                <span className="font-mono text-[#E5A900] font-semibold">{recipe.timeMinutes} Mins Total</span>
              </div>

              <div className="w-full bg-[#26362C]/10 h-1.5 rounded-full overflow-hidden mb-8">
                <motion.div
                  className="bg-[#E5A900] h-full rounded-full"
                  initial={false}
                  animate={{ width: `${((activeKitchenStep + 1) / recipe.steps.length) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.035em] text-[#26362C] mb-6 leading-tight">
                {recipe.title}
              </h2>

              <motion.div
                key={activeKitchenStep}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25 }}
                className="p-8 bg-[#FCFBF7] border border-[#26362C]/10 rounded-3xl shadow-sm min-h-[220px] flex items-center"
              >
                <p className="text-xl sm:text-2xl text-[#26362C] font-normal leading-relaxed">
                  {recipe.steps[activeKitchenStep]}
                </p>
              </motion.div>
            </div>

            <div className="max-w-3xl mx-auto w-full pt-8 flex items-center justify-between">
              <button
                disabled={activeKitchenStep === 0}
                onClick={() => setActiveKitchenStep((prev) => Math.max(0, prev - 1))}
                className="flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-[#26362C]/15 text-[#26362C] hover:bg-[#FCFBF7] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Previous Step</span>
              </button>

              <button
                disabled={activeKitchenStep === recipe.steps.length - 1}
                onClick={() => setActiveKitchenStep((prev) => Math.min(recipe.steps.length - 1, prev + 1))}
                className="flex items-center gap-2 px-7 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-[#26362C] text-white hover:bg-[#E5A900] hover:text-[#26362C] disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer transition-colors shadow-xs"
              >
                <span>Next Step</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* ================= STANDARD RECIPE VIEW ================= */
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
            {/* Title & Quick Meta */}
            <div>
              <h2 className="text-2xl sm:text-4xl font-semibold tracking-[-0.035em] text-[#26362C] leading-tight mb-2">
                {recipe.title}
              </h2>
              <p className="text-sm text-[#717B74] leading-relaxed max-w-2xl">
                {recipe.shortDesc}
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-4 pt-4 border-t border-[#26362C]/08 text-xs font-medium text-[#26362C]">
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-[#E5A900]" />
                  <span>{recipe.timeMinutes} Minutes</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ChefHat className="w-4 h-4 text-[#E58A1F]" />
                  <span>Difficulty: {recipe.difficulty}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-[#E5A900]" />
                  <span>Base: {recipe.servings || 4} Servings</span>
                </div>
              </div>
            </div>

            {/* Image Gallery Showcase */}
            <div className="space-y-3">
              <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-[#FCFBF7] border border-[#26362C]/08 relative">
                <img
                  src={imagesList[activeImageIndex]}
                  alt={recipe.title}
                  className="w-full h-full object-cover transition-all duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/products/Brown.jpeg';
                  }}
                />
              </div>

              {imagesList.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {imagesList.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImageIndex(i)}
                      className={`w-16 h-16 rounded-xl overflow-hidden border-2 shrink-0 cursor-pointer transition-all ${
                        activeImageIndex === i ? 'border-[#E5A900] scale-95 shadow-xs' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Step ${i}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Ingredients & Servings Scaler */}
            <div className="bg-white p-6 rounded-2xl border border-[#26362C]/08 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#26362C]/08">
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-[#26362C]">Ingredients</h3>
                  <p className="text-xs text-[#717B74]">Tap any ingredient to check it off as you cook</p>
                </div>

                {/* Servings Scaler Buttons */}
                <div className="flex items-center gap-1.5 bg-[#FCFBF7] p-1 rounded-full border border-[#26362C]/10 text-xs font-semibold">
                  <span className="px-2 text-[#717B74]">Yield:</span>
                  {[2, 4, 6, 8].map((s) => (
                    <button
                      key={s}
                      onClick={() => setServingsMultiplier(s)}
                      className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                        servingsMultiplier === s
                          ? 'bg-[#26362C] text-white shadow-2xs'
                          : 'text-[#717B74] hover:text-[#26362C]'
                      }`}
                    >
                      {s} Servings
                    </button>
                  ))}
                </div>
              </div>

              {/* Animated Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {recipe.ingredients.map((ing, idx) => {
                  const isChecked = checkedIngredients[idx];
                  return (
                    <motion.button
                      key={idx}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => toggleIngredient(idx)}
                      className={`flex items-start gap-3 p-3 rounded-xl text-left text-xs transition-colors cursor-pointer border ${
                        isChecked
                          ? 'bg-[#F4C430]/15 border-[#E5A900]/40 text-[#26362C]/60 line-through'
                          : 'bg-[#FCFBF7] border-[#26362C]/06 hover:border-[#E5A900]/60 text-[#26362C]'
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded-md border flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                          isChecked ? 'bg-[#E5A900] border-[#E5A900] text-white' : 'border-[#26362C]/30 bg-white'
                        }`}
                      >
                        {isChecked && (
                          <motion.svg
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 0.2 }}
                            className="w-3 h-3 stroke-current"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="3.5"
                          >
                            <motion.path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M5 13l4 4L19 7"
                            />
                          </motion.svg>
                        )}
                      </div>
                      <span>{scaleQuantity(ing)}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Preparation Steps */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#26362C]">Step-by-Step Method</h3>
              <div className="space-y-3">
                {recipe.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#26362C]/08"
                  >
                    <span className="w-6 h-6 rounded-full bg-[#E5A900]/15 text-[#E5A900] flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-sm text-[#26362C] leading-relaxed font-normal">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};
