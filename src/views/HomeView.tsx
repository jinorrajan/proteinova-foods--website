import React from 'react';
import {
  ArrowRight,
  ShieldCheck,
  Award,
  Sparkles,
  Egg,
  CheckCircle2,
  ChefHat,
  Heart,
  TrendingUp,
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { RECIPES } from '../data/recipes';

interface HomeViewProps {
  onNavigate: (tab: string) => void;
  onOpenRecipe: (recipe: any) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenRecipe }) => {
  const featuredProducts = PRODUCTS.slice(0, 3);
  const featuredRecipes = RECIPES.slice(0, 3);

  return (
    <div className="w-full bg-[#ffffff] min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#ecf7e9]/60 via-[#ffffff] to-[#ffffff] pt-12 pb-16">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[850px] h-[380px] bg-[#fdc826]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffdf95]/60 text-[#321700] text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[#765a00] animate-pulse" />
                <span>India's Clinical Farm-Fresh Standard</span>
              </div>

              <h1 className="font-headline text-4xl sm:text-5xl lg:text-6xl text-[#002418] font-extrabold tracking-tight leading-[1.1]">
                Better Eggs. <br />
                <span className="text-[#073b2a]">Better Everyday</span> Nutrition.
              </h1>

              <p className="text-base sm:text-lg text-[#414944] max-w-xl leading-relaxed">
                Pioneering advanced biological nutrition, clinical farm hygiene, and transparent cold-chain farm gates. Clinically audited for superior albumin density, golden yolks, and zero antibiotics.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button
                  onClick={() => onNavigate('recipes')}
                  className="px-6 py-3.5 rounded-xl bg-[#fdc826] hover:bg-[#f4bf1b] text-[#002418] font-bold text-sm shadow-md hover:shadow-[0_4px_14px_rgba(253,200,38,0.45)] transition-all cursor-pointer flex items-center gap-2"
                >
                  <span>Explore 18+ Chef Recipes</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onNavigate('products')}
                  className="px-6 py-3.5 rounded-xl bg-[#002418] hover:bg-[#073b2a] text-white font-bold text-sm shadow-sm transition-all cursor-pointer"
                >
                  View Egg Collection
                </button>
              </div>

              {/* Trust Badges Bar */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#414944]">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="font-semibold">88+ Haugh Freshness</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="font-semibold">6-Hour Farm Gate Packing</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="font-semibold">Zero Antibiotic Residue</span>
                </div>
              </div>
            </div>

            {/* Right Media Focal Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-4/3 group">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP3jzb1lKaJ6PLw04acUWWumNCIUsoRTkKxPAspZVRhhi61aCOo_r-ihkrLYUyl0Y2nQL_OMyMPZu71jjIsNFPPckf4O_7KoMx-B9Ptbm_Ps7_3NIE159GqdgcGLUt0sz4wnogQRbEK0vcb-N6w_8HuKo_wBGf547NmD-edTqeOOoCkd3pF7QA42R1JbYXEcV1mp9ZlZdpGQW9HBut30YgbKTt00KRS1R5vBElIjguu-VGYgvAG_V0hw"
                  alt="Golden Truffle Soft Scramble with Sourdough"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
                  <span className="text-[#fdc826] text-xs font-bold uppercase tracking-wider">
                    Chef's Pick of the Week
                  </span>
                  <h3 className="font-headline text-xl font-bold">
                    Golden Truffle Soft Scramble &amp; Sourdough
                  </h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-xs text-slate-200">12m Total • 22g Protein</span>
                    <button
                      onClick={() => onOpenRecipe(RECIPES[0])}
                      className="px-3 py-1.5 rounded-lg bg-[#fdc826] text-[#002418] text-xs font-bold hover:bg-white transition-colors cursor-pointer"
                    >
                      Cook Tonight
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Showcase */}
      <section className="py-16 bg-[#f6f7f5] border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs text-[#765a00] font-bold uppercase tracking-wider block mb-1">
                Farm Gate Lineup
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#002418]">
                Pristine Quality Eggs for Every Culinary Need
              </h2>
            </div>
            <button
              onClick={() => onNavigate('products')}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#002418] hover:text-[#765a00] cursor-pointer"
            >
              <span>View All 6 Product Lines</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((p) => (
              <div
                key={p.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                <div className="relative h-48 overflow-hidden bg-[#e6f1e4]">
                  <img
                    src={p.image}
                    alt={p.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#fdc826] text-[#002418] text-[10px] font-extrabold uppercase tracking-wider">
                    {p.badge}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-headline text-lg font-bold text-[#002418] mb-1">
                      {p.name}
                    </h3>
                    <p className="text-xs text-[#414944] line-clamp-2 mb-3">
                      {p.description}
                    </p>
                    <div className="text-xs text-[#765a00] font-semibold mb-4">
                      {p.proteinPerEgg} Protein • {p.haughUnits}+ Haugh
                    </div>
                  </div>
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-[#717974]">
                      Graded Fresh Daily
                    </span>
                    <button
                      onClick={() => onNavigate('products')}
                      className="px-3.5 py-1.5 rounded-xl bg-[#ecf7e9] hover:bg-[#dbe5d8] text-[#002418] text-xs font-bold transition-colors cursor-pointer"
                    >
                      View Specs
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culinary Inspiration Teaser */}
      <section className="py-16 bg-[#ffffff]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs text-[#765a00] font-bold uppercase tracking-wider block mb-1">
                In The Kitchen
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#002418]">
                Mastered With Proteinova Eggs
              </h2>
            </div>
            <button
              onClick={() => onNavigate('recipes')}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#002418] hover:text-[#765a00] cursor-pointer"
            >
              <span>Explore All 18 Curated Recipes</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredRecipes.map((r) => (
              <div
                key={r.id}
                onClick={() => onOpenRecipe(r)}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="relative h-48 overflow-hidden bg-[#e6f1e4]">
                  <img
                    src={r.image}
                    alt={r.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/95 text-[#002418] text-[10px] font-bold">
                    {r.totalTimeMinutes}m • {r.difficulty}
                  </span>
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-[#073b2a] text-white text-[10px] font-bold">
                    {r.proteinGrams}g Protein
                  </span>
                </div>
                <div className="p-6">
                  <span className="text-[10px] font-bold uppercase text-[#765a00] block mb-1">
                    {r.eggType}
                  </span>
                  <h3 className="font-headline text-base font-bold text-[#002418] group-hover:text-[#073b2a] transition-colors mb-2">
                    {r.title}
                  </h3>
                  <p className="text-xs text-[#414944] line-clamp-2">
                    {r.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* B2B Callout */}
      <section className="py-12 bg-[#002418] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-headline text-2xl font-bold mb-1">
              Are You a Chef, Hotelier, or Bakery Owner?
            </h3>
            <p className="text-xs sm:text-sm text-[#bbeed5]">
              Get wholesale crates with refrigerated morning delivery and batch lab certificates.
            </p>
          </div>
          <button
            onClick={() => onNavigate('partner-with-us')}
            className="px-6 py-3 bg-[#fdc826] hover:bg-[#f4bf1b] text-[#002418] text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap"
          >
            Open Wholesale Calculator &amp; Rate Card
          </button>
        </div>
      </section>
    </div>
  );
};
