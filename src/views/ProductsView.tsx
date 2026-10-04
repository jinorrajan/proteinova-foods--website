import React, { useState } from 'react';
import {
  Egg,
  ShieldCheck,
  Check,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Layers,
  ThermometerSnowflake,
  ChefHat,
  Award,
} from 'lucide-react';
import { PRODUCTS, Product } from '../data/products';

interface ProductsViewProps {
  onSelectRecipeEggType?: (eggKey: string) => void;
  onNavigatePartner?: () => void;
}

export const ProductsView: React.FC<ProductsViewProps> = ({
  onSelectRecipeEggType,
  onNavigatePartner,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'hen' | 'specialty' | 'liquid'>('all');

  const filteredProducts = PRODUCTS.filter((p) => {
    if (activeFilter === 'hen') return p.eggTypeKey === 'brown' || p.eggTypeKey === 'white' || p.eggTypeKey === 'country';
    if (activeFilter === 'specialty') return p.eggTypeKey === 'duck' || p.eggTypeKey === 'quail';
    if (activeFilter === 'liquid') return p.eggTypeKey === 'liquid';
    return true;
  });

  return (
    <div className="w-full bg-[#ffffff] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ecf7e9] text-[#073b2a] text-xs font-bold uppercase tracking-wider mb-3">
            <Egg className="w-3.5 h-3.5" />
            <span>Farm Gate Grade-A Collection</span>
          </div>
          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-[#002418] font-extrabold tracking-tight mb-4">
            Clinically Graded Fresh Eggs for Pure Biological Nutrition.
          </h1>
          <p className="text-base text-[#414944] leading-relaxed">
            Every Proteinova egg is harvested under strict biosecurity protocols, laser-candled, UV-sanitized, and packed within 6 hours of lay. Zero prophylactic antibiotics, zero synthetic dyes, and 100% cold-chain traceability.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto no-scrollbar pb-1">
          {[
            { id: 'all', label: 'All Varieties (6)' },
            { id: 'hen', label: 'Heritage Hen Eggs' },
            { id: 'specialty', label: 'Duck & Quail Specialty' },
            { id: 'liquid', label: 'Pure Liquid Albumen' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeFilter === tab.id
                  ? 'bg-[#002418] text-white shadow-xs'
                  : 'bg-[#ecf7e9] text-[#414944] hover:bg-[#dbe5d8]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            return (
              <div
                key={product.id}
                className="bg-[#ffffff] rounded-3xl overflow-hidden border border-[#e1ebde] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Image & Badge */}
                <div className="relative h-60 w-full overflow-hidden bg-[#e6f1e4]">
                  <img
                    src={product.image}
                    alt={product.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-[#fdc826] text-[#002418] text-xs font-extrabold uppercase tracking-wider shadow-sm">
                      {product.badge}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#002418] text-xs font-bold shadow-sm">
                      {product.haughUnits}+ Haugh Freshness
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="font-headline text-xl text-[#002418] font-bold tracking-tight mb-1">
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#765a00] font-semibold mb-2">
                      {product.tagline}
                    </p>
                    <p className="text-xs text-[#414944] leading-relaxed line-clamp-3 mb-4">
                      {product.description}
                    </p>

                    {/* Spec Mini Matrix */}
                    <div className="grid grid-cols-3 gap-2 p-2.5 rounded-xl bg-[#ecf7e9] text-center text-xs mb-4">
                      <div>
                        <span className="text-[10px] text-[#717974] uppercase block">Protein</span>
                        <span className="font-bold text-[#002418]">{product.proteinPerEgg}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#717974] uppercase block">Yolk Color</span>
                        <span className="font-bold text-[#765a00]">Scale {product.yolkColorScale}/15</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-[#717974] uppercase block">Haugh Score</span>
                        <span className="font-bold text-[#073b2a]">{product.haughUnits} AA</span>
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div className="space-y-1.5 mb-4">
                      <span className="text-[11px] font-bold text-[#002418] uppercase tracking-wider block">
                        Clinical Quality Highlights:
                      </span>
                      {product.keyHighlights.slice(0, 3).map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-[#414944]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Ideal Culinary Applications */}
                    <div>
                      <span className="text-[11px] font-bold text-[#765a00] uppercase tracking-wider block mb-1.5 flex items-center gap-1">
                        <ChefHat className="w-3.5 h-3.5" />
                        <span>Recommended Culinary Uses:</span>
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {product.idealFor.map((use, uIdx) => (
                          <span
                            key={uIdx}
                            className="px-2.5 py-1 rounded-lg bg-[#f6f7f5] text-[#002418] text-[11px] font-medium border border-slate-200"
                          >
                            {use}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Clean Bottom Information Row */}
                  <div className="pt-4 border-t border-[#e1ebde] flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5 text-[#073b2a] font-semibold">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>Zero Antibiotics &amp; Hormones</span>
                    </div>

                    <button
                      type="button"
                      onClick={onNavigatePartner}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#002418] hover:text-[#765a00] transition-colors cursor-pointer"
                    >
                      <span>Wholesale Specs</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* B2B Commercial Supply Banner */}
        <div className="mt-14 p-8 rounded-3xl bg-[#073b2a] text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="max-w-2xl">
            <span className="text-xs text-[#fdc826] font-bold uppercase tracking-wider mb-2 block">
              Commercial &amp; Wholesale Supply
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold mb-2">
              Supplying 5-Star Hospitality, Bakeries &amp; Cloud Kitchens
            </h2>
            <p className="text-xs sm:text-sm text-[#bbeed5] leading-relaxed">
              Order palletized crates (180 to 2,000+ eggs) with dedicated refrigerated delivery schedules, batch traceability certificates, and guaranteed 88+ Haugh freshness.
            </p>
          </div>

          <button
            onClick={onNavigatePartner}
            className="whitespace-nowrap px-6 py-3.5 bg-[#fdc826] hover:bg-[#f4bf1b] text-[#002418] text-sm font-bold rounded-xl transition-all shadow-md cursor-pointer flex items-center gap-2 shrink-0"
          >
            <span>Open Wholesale Calculator</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
