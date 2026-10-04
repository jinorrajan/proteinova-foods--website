import React, { useState, useEffect } from 'react';
import {
  X,
  Play,
  Pause,
  RotateCcw,
  Check,
  Flame,
  Egg,
  Bookmark,
  Share2,
  Printer,
  ChevronRight,
  Info,
  Copy,
  CheckCheck,
  MessageCircle,
  ExternalLink,
} from 'lucide-react';
import { Recipe } from '../data/recipes';

interface RecipeModalProps {
  recipe: Recipe | null;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (recipeId: string) => void;
}

export const RecipeModal: React.FC<RecipeModalProps> = ({
  recipe,
  onClose,
  isBookmarked,
  onToggleBookmark,
}) => {
  const [servingsMultiplier, setServingsMultiplier] = useState(1);
  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  // Cooking Timer State
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timerLabel, setTimerLabel] = useState<string>('Step Timer');

  // Share Dialog & Copy Feedback State
  const [showShareMenu, setShowShareMenu] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [shareToastMessage, setShareToastMessage] = useState<string | null>(null);

  useEffect(() => {
    // Reset state when recipe changes
    if (recipe) {
      setCheckedIngredients({});
      setActiveStepIndex(0);
      setShowShareMenu(false);
      setIsCopied(false);
      setShareToastMessage(null);
      const firstStepMinutes = recipe.steps[0]?.durationMinutes || recipe.cookTimeMinutes || 5;
      setTimerSeconds(firstStepMinutes * 60);
      setTimerLabel(`Step 1: ${recipe.steps[0]?.title || 'Cooking'}`);
      setIsTimerRunning(false);
    }
  }, [recipe]);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (isTimerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0 && isTimerRunning) {
      setIsTimerRunning(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isTimerRunning, timerSeconds]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!recipe) return null;

  const toggleIngredient = (idx: number) => {
    setCheckedIngredients((prev) => ({
      ...prev,
      [idx]: !prev[idx],
    }));
  };

  const setTimerForStep = (stepNumber: number, minutes?: number, title?: string) => {
    const mins = minutes || 3;
    setTimerSeconds(mins * 60);
    setTimerLabel(`Step ${stepNumber}: ${title || 'Cooking'}`);
    setIsTimerRunning(true);
  };

  const formatTimer = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Generate unique URL for this specific recipe
  const getShareUrl = () => {
    try {
      const url = new URL(window.location.origin + window.location.pathname);
      url.searchParams.set('recipe', recipe.id);
      return url.toString();
    } catch {
      return `${window.location.href.split('?')[0]}?recipe=${recipe.id}`;
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for older or restricted environments
        const textArea = document.createElement('textarea');
        textArea.value = text;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        textArea.remove();
      }
      setIsCopied(true);
      setShareToastMessage('Unique recipe link copied to clipboard!');
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
      setTimeout(() => {
        setShareToastMessage(null);
      }, 3500);
    } catch {
      setShareToastMessage('Failed to copy. Please manually copy the URL below.');
    }
  };

  const handleShareClick = async () => {
    const shareUrl = getShareUrl();

    // Copy to clipboard immediately so the user has the link ready
    await copyToClipboard(shareUrl);

    // If native sharing is supported, attempt to trigger it
    if (navigator.share) {
      try {
        await navigator.share({
          title: `${recipe.title} - Proteinova Culinary Recipes`,
          text: `Check out this chef-crafted recipe for ${recipe.title} made with Proteinova eggs!`,
          url: shareUrl,
        });
      } catch (err: any) {
        // If user cancelled or permissions disallowed in iframe, open the share menu popover
        if (err.name !== 'AbortError') {
          setShowShareMenu(true);
        }
      }
    } else {
      // On desktop or browsers without navigator.share, toggle the rich share menu
      setShowShareMenu(true);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const uniqueShareUrl = getShareUrl();
  const shareText = encodeURIComponent(
    `Check out this recipe for "${recipe.title}" (${recipe.proteinGrams}g Protein) on Proteinova: ${uniqueShareUrl}`
  );
  const whatsappUrl = `https://api.whatsapp.com/send?text=${shareText}`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${shareText}`;
  const emailUrl = `mailto:?subject=${encodeURIComponent(
    `Proteinova Recipe: ${recipe.title}`
  )}&body=${shareText}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl border border-[#073b2a]/10 max-h-[92vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Toast Alert for Link Copied */}
        {shareToastMessage && (
          <div className="absolute top-16 left-1/2 -translate-x-1/2 z-40 bg-[#002418] text-white px-5 py-2.5 rounded-full shadow-xl border border-[#fdc826] flex items-center gap-2 text-xs font-bold animate-in fade-in slide-in-from-top-2">
            <CheckCheck className="w-4 h-4 text-[#fdc826]" />
            <span>{shareToastMessage}</span>
          </div>
        )}

        {/* Sticky Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-white/95 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-1 rounded-full bg-[#e6f1e4] text-[#002418] text-xs font-bold uppercase tracking-wider">
              {recipe.difficulty} • {recipe.totalTimeMinutes}m Total
            </span>
            <span className="hidden sm:inline-block text-xs text-[#717974]">
              {recipe.eggType}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Bookmark button */}
            <button
              onClick={() => onToggleBookmark(recipe.id)}
              className={`p-2 rounded-xl transition-colors cursor-pointer ${
                isBookmarked
                  ? 'bg-[#fdc826] text-[#002418]'
                  : 'bg-[#e6f1e4] text-[#002418] hover:bg-[#dbe5d8]'
              }`}
              title={isBookmarked ? 'Saved to Bookmarks' : 'Save to Bookmarks'}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-[#002418]' : ''}`} />
            </button>

            {/* Prominent Share Button */}
            <div className="relative">
              <button
                onClick={handleShareClick}
                className="px-3.5 py-2 rounded-xl bg-[#e6f1e4] text-[#002418] hover:bg-[#dbe5d8] transition-all cursor-pointer flex items-center gap-1.5 text-xs font-bold shadow-xs active:scale-95"
                title="Share Recipe Link"
                aria-label="Share Recipe with Friends"
              >
                {isCopied ? (
                  <CheckCheck className="w-4 h-4 text-emerald-700" />
                ) : (
                  <Share2 className="w-4 h-4 text-[#073b2a]" />
                )}
                <span>{isCopied ? 'Link Copied!' : 'Share'}</span>
              </button>

              {/* Share Popover Menu */}
              {showShareMenu && (
                <div className="absolute right-0 top-12 z-50 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 space-y-3 animate-in fade-in slide-in-from-top-2">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span className="text-xs font-bold text-[#002418] uppercase tracking-wider">
                      Share This Recipe
                    </span>
                    <button
                      onClick={() => setShowShareMenu(false)}
                      className="text-slate-400 hover:text-slate-600 p-1 cursor-pointer"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Read-only URL box with direct copy */}
                  <div className="flex items-center gap-1.5 bg-[#f6f7f5] border border-slate-200 rounded-xl p-1.5">
                    <input
                      type="text"
                      readOnly
                      value={uniqueShareUrl}
                      className="w-full bg-transparent text-[11px] text-[#414944] px-1 focus:outline-none select-all truncate font-mono"
                    />
                    <button
                      onClick={() => copyToClipboard(uniqueShareUrl)}
                      className="px-2.5 py-1 bg-[#002418] hover:bg-[#073b2a] text-white text-[10px] font-bold rounded-lg transition-colors cursor-pointer shrink-0 flex items-center gap-1"
                    >
                      {isCopied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                      <span>{isCopied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>

                  {/* Social / Direct Channels */}
                  <div className="grid grid-cols-3 gap-2 pt-1">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 text-[11px] font-semibold transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 mb-0.5 text-emerald-600" />
                      <span>WhatsApp</span>
                    </a>
                    <a
                      href={twitterUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center justify-center p-2 rounded-xl bg-sky-50 hover:bg-sky-100 text-sky-800 text-[11px] font-semibold transition-colors"
                    >
                      <ExternalLink className="w-4 h-4 mb-0.5 text-sky-600" />
                      <span>X / Twitter</span>
                    </a>
                    <a
                      href={emailUrl}
                      className="flex flex-col items-center justify-center p-2 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 text-[11px] font-semibold transition-colors"
                    >
                      <Share2 className="w-4 h-4 mb-0.5 text-amber-600" />
                      <span>Email</span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Print button */}
            <button
              onClick={handlePrint}
              className="p-2 rounded-xl bg-[#e6f1e4] text-[#002418] hover:bg-[#dbe5d8] transition-colors cursor-pointer hidden sm:flex"
              title="Print Recipe"
            >
              <Printer className="w-4 h-4" />
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer ml-1"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Content */}
        <div className="overflow-y-auto flex-1 p-6 sm:p-8 space-y-8">
          {/* Hero Banner inside modal */}
          <div className="relative rounded-2xl overflow-hidden h-64 sm:h-80 shadow-inner">
            <img
              src={recipe.image}
              alt={recipe.altText}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-6 text-white">
              <span className="text-[#fdc826] text-xs font-bold uppercase tracking-wider mb-1">
                {recipe.subtitle}
              </span>
              <h1 className="font-headline text-2xl sm:text-3xl font-extrabold tracking-tight">
                {recipe.title}
              </h1>
              <p className="text-sm text-slate-200 mt-2 max-w-2xl line-clamp-2">
                {recipe.description}
              </p>
            </div>
          </div>

          {/* Key Metrics Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 p-4 rounded-2xl bg-[#ecf7e9] text-center">
            <div>
              <span className="block text-xs uppercase text-[#414944] font-semibold">Prep</span>
              <span className="font-headline text-lg font-bold text-[#002418]">{recipe.prepTimeMinutes}m</span>
            </div>
            <div>
              <span className="block text-xs uppercase text-[#414944] font-semibold">Cook</span>
              <span className="font-headline text-lg font-bold text-[#002418]">{recipe.cookTimeMinutes}m</span>
            </div>
            <div>
              <span className="block text-xs uppercase text-[#414944] font-semibold">Protein</span>
              <span className="font-headline text-lg font-bold text-[#002418]">{recipe.proteinGrams}g</span>
            </div>
            <div>
              <span className="block text-xs uppercase text-[#414944] font-semibold">Calories</span>
              <span className="font-headline text-lg font-bold text-[#002418]">{recipe.calories} kcal</span>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <span className="block text-xs uppercase text-[#765a00] font-bold">Standard</span>
              <span className="font-headline text-lg font-bold text-[#002418]">{recipe.servings} serving</span>
            </div>
          </div>

          {/* Interactive Chef Timer Bar */}
          <div className="bg-[#073b2a] text-white p-5 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 shadow-md">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-[#fdc826] text-[#002418] flex items-center justify-center font-mono font-bold text-xl">
                ⏱️
              </div>
              <div>
                <div className="text-xs text-[#bbeed5] font-semibold uppercase tracking-wider">
                  Interactive Cooking Timer
                </div>
                <div className="text-sm text-white font-medium">{timerLabel}</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="font-mono text-3xl font-extrabold text-[#fdc826] tracking-wider">
                {formatTimer(timerSeconds)}
              </div>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                  className="px-3.5 py-2 rounded-xl bg-[#fdc826] text-[#002418] font-bold text-xs flex items-center gap-1 hover:bg-[#f4bf1b] transition-colors cursor-pointer"
                >
                  {isTimerRunning ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span>{isTimerRunning ? 'Pause' : 'Start'}</span>
                </button>
                <button
                  onClick={() => {
                    setIsTimerRunning(false);
                    const defMins = recipe.steps[activeStepIndex]?.durationMinutes || 5;
                    setTimerSeconds(defMins * 60);
                  }}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  title="Reset Timer"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Mastery Pro-Note */}
          {recipe.masteryNote && (
            <div className="p-5 rounded-2xl bg-[#fffdf5] border border-[#ffdf95] flex items-start gap-3.5">
              <div className="p-2 rounded-xl bg-[#ffdf95] text-[#765a00] shrink-0">
                <Flame className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-headline text-sm font-bold text-[#002418]">
                  Mastery Note: {recipe.masteryNote.title}
                </h4>
                <p className="text-xs sm:text-sm text-[#414944] mt-1 leading-relaxed">
                  {recipe.masteryNote.text}
                </p>
              </div>
            </div>
          )}

          {/* Two-Column: Ingredients & Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Ingredients Left Column */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-headline text-lg font-bold text-[#002418] flex items-center gap-2">
                  <Egg className="w-5 h-5 text-[#765a00]" />
                  <span>Ingredients</span>
                </h3>
                {/* Servings Scaler */}
                <div className="inline-flex rounded-lg bg-[#ecf7e9] p-1 text-xs font-semibold">
                  {[1, 2, 4].map((scale) => (
                    <button
                      key={scale}
                      onClick={() => setServingsMultiplier(scale)}
                      className={`px-2 py-0.5 rounded-md transition-colors cursor-pointer ${
                        servingsMultiplier === scale
                          ? 'bg-white text-[#002418] shadow-sm font-bold'
                          : 'text-[#414944] hover:text-[#002418]'
                      }`}
                    >
                      {scale}x
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-[#f6f7f5] p-4 rounded-2xl border border-slate-200/80 space-y-2.5">
                <p className="text-xs text-[#717974] mb-2">
                  Tap to check off items as you mis-en-place:
                </p>
                {recipe.fullIngredients.map((ing, idx) => {
                  const isChecked = !!checkedIngredients[idx];
                  return (
                    <label
                      key={idx}
                      onClick={() => toggleIngredient(idx)}
                      className={`flex items-start gap-3 p-2 rounded-xl transition-all cursor-pointer ${
                        isChecked
                          ? 'bg-white/50 text-[#717974] line-through'
                          : 'bg-white text-[#002418] shadow-xs hover:bg-[#ecf7e9]'
                      }`}
                    >
                      <div
                        className={`w-5 h-5 rounded-md border flex items-center justify-center mt-0.5 shrink-0 transition-colors ${
                          isChecked
                            ? 'bg-[#073b2a] border-[#073b2a] text-white'
                            : 'border-slate-300 bg-white'
                        }`}
                      >
                        {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                      </div>
                      <div className="text-xs sm:text-sm">
                        <span className="font-bold">{ing.amount}</span> {ing.item}
                        {ing.note && <span className="text-xs text-[#717974] ml-1">({ing.note})</span>}
                      </div>
                    </label>
                  );
                })}
              </div>

              {/* Nutrition breakdown pill card */}
              <div className="p-4 rounded-2xl bg-[#ecf7e9] border border-[#bbeed5]/50">
                <h4 className="text-xs uppercase font-bold text-[#002418] mb-2 flex items-center gap-1.5">
                  <Info className="w-4 h-4 text-[#073b2a]" />
                  <span>Clinical Macro Profile / Serving</span>
                </h4>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="bg-white p-2 rounded-xl">
                    <span className="text-[#717974] block">Fats</span>
                    <span className="font-bold text-[#002418]">{recipe.fatsGrams}g</span>
                  </div>
                  <div className="bg-white p-2 rounded-xl">
                    <span className="text-[#717974] block">Carbs</span>
                    <span className="font-bold text-[#002418]">{recipe.carbsGrams}g</span>
                  </div>
                  <div className="bg-white p-2 rounded-xl">
                    <span className="text-[#717974] block">Protein</span>
                    <span className="font-bold text-[#073b2a]">{recipe.proteinGrams}g</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step-by-Step Instructions Right Column */}
            <div className="lg:col-span-7 space-y-4">
              <h3 className="font-headline text-lg font-bold text-[#002418] flex items-center gap-2">
                <span>Step-by-Step Method</span>
                <span className="text-xs text-[#717974] font-normal">
                  ({recipe.steps.length} sequential phases)
                </span>
              </h3>

              <div className="space-y-4">
                {recipe.steps.map((step, idx) => {
                  const isActive = activeStepIndex === idx;
                  return (
                    <div
                      key={step.stepNumber}
                      onClick={() => setActiveStepIndex(idx)}
                      className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                        isActive
                          ? 'bg-white border-[#073b2a] shadow-md ring-1 ring-[#073b2a]/10'
                          : 'bg-[#ffffff] border-slate-200/80 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex items-center gap-2.5">
                          <span
                            className={`w-7 h-7 rounded-full text-xs font-bold flex items-center justify-center shrink-0 ${
                              isActive
                                ? 'bg-[#002418] text-white'
                                : 'bg-[#e6f1e4] text-[#002418]'
                            }`}
                          >
                            {step.stepNumber}
                          </span>
                          <h4 className="font-headline text-sm sm:text-base font-bold text-[#002418]">
                            {step.title}
                          </h4>
                        </div>

                        {step.durationMinutes && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setActiveStepIndex(idx);
                              setTimerForStep(step.stepNumber, step.durationMinutes, step.title);
                            }}
                            className="inline-flex items-center gap-1 text-xs font-bold text-[#073b2a] bg-[#ecf7e9] hover:bg-[#dbe5d8] px-2.5 py-1 rounded-lg transition-colors cursor-pointer"
                            title="Set timer to this step"
                          >
                            <Play className="w-3 h-3 fill-current" />
                            <span>{step.durationMinutes}m Timer</span>
                          </button>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm text-[#414944] leading-relaxed pl-9">
                        {step.instruction}
                      </p>

                      {step.temperatureCelsius && (
                        <div className="mt-2.5 ml-9 inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-[#ffdf95]/50 text-[#765a00] text-xs font-semibold">
                          <Flame className="w-3.5 h-3.5" />
                          <span>Recommended Pan Temp: ~{step.temperatureCelsius}°C</span>
                        </div>
                      )}

                      {step.proTip && (
                        <div className="mt-2.5 ml-9 p-2.5 rounded-xl bg-[#ecf7e9] text-xs text-[#002418] leading-relaxed border-l-3 border-[#073b2a]">
                          <strong className="text-[#073b2a]">Chef's Tip:</strong> {step.proTip}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Dedicated Share Banner inside Modal */}
              <div className="p-4 rounded-2xl bg-[#f6f7f5] border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 mt-6">
                <div className="flex items-center gap-2.5 text-xs text-[#002418]">
                  <Share2 className="w-4 h-4 text-[#765a00] shrink-0" />
                  <span>
                    Sharing this recipe gives your friends direct access to the ingredients &amp; timers.
                  </span>
                </div>
                <button
                  onClick={handleShareClick}
                  className="px-4 py-2 rounded-xl bg-[#002418] hover:bg-[#073b2a] text-white text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shrink-0"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{isCopied ? 'Link Copied!' : 'Copy Share URL'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-[#f6f7f5] flex items-center justify-between">
          <button
            onClick={handleShareClick}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#073b2a] hover:text-[#002418] transition-colors cursor-pointer"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>{isCopied ? 'Link Copied to Clipboard!' : 'Share Recipe With Friends'}</span>
          </button>

          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-[#002418] text-white text-xs sm:text-sm font-bold hover:bg-[#073b2a] transition-colors cursor-pointer"
          >
            Done Cooking
          </button>
        </div>
      </div>
    </div>
  );
};
