import React from 'react';
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  Microscope,
  Leaf,
  Truck,
  HeartHandshake,
  ArrowRight,
} from 'lucide-react';

interface AboutViewProps {
  onNavigateRecipes: () => void;
  onNavigateProducts: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onNavigateRecipes,
  onNavigateProducts,
}) => {
  const pillars = [
    {
      icon: <Microscope className="w-6 h-6 text-[#fdc826]" />,
      title: 'Clinical Farm Hygiene & Bio-Security',
      desc: 'Our farm-gate operations follow zero-pathogen cleanroom protocols. Daily screening for Salmonella Enteritidis and heavy metals ensures absolute kitchen safety.',
    },
    {
      icon: <Leaf className="w-6 h-6 text-[#fdc826]" />,
      title: '100% Vegetarian Biological Ration',
      desc: 'Formulated with organic whole grains, sprouted seeds, and cold-pressed flaxseed oil. We never feed animal by-products, synthetic colorants, or hormone additives.',
    },
    {
      icon: <Award className="w-6 h-6 text-[#fdc826]" />,
      title: '88+ Haugh Freshness Index',
      desc: 'Standard commercial eggs hover around 60–70 Haugh units. Proteinova eggs measure 86–94 Haugh at harvest, ensuring the thickest albumen and roundest golden yolk dome.',
    },
    {
      icon: <Truck className="w-6 h-6 text-[#fdc826]" />,
      title: 'Unbroken 4°C–8°C Cold Chain Logistics',
      desc: 'Eggs degrade 7x faster at room temperatures. We chill and transport from farm gate to distributor hubs under calibrated climate control within 24 hours of lay.',
    },
  ];

  const comparisonTable = [
    {
      feature: 'Packing Time from Lay',
      proteinova: 'Within 6 hours',
      commercial: '3 to 14 days typical',
    },
    {
      feature: 'Haugh Freshness Rating',
      proteinova: '86 - 94 Haugh (Grade AA)',
      commercial: '60 - 72 Haugh (Grade A/B)',
    },
    {
      feature: 'Antibiotic & Hormone Use',
      proteinova: 'Strictly 0% Prophylactic',
      commercial: 'Frequently unregulated',
    },
    {
      feature: 'Flock Diet',
      proteinova: 'Non-GMO grain, cold-pressed flaxseed, marigold',
      commercial: 'Standard grain feed with synthetic yolk dyes',
    },
    {
      feature: 'Cold-Chain Transport',
      proteinova: 'Guaranteed 4°C - 8°C chilled transit',
      commercial: 'Ambient open trucks in high summer heat',
    },
    {
      feature: 'Salmonella Screening',
      proteinova: 'Batch-wise PCR laboratory clearance',
      commercial: 'Periodic random batch sampling',
    },
  ];

  return (
    <div className="w-full bg-[#ffffff] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ecf7e9] text-[#073b2a] text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Our Agricultural &amp; Nutritional Mission</span>
          </div>
          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-[#002418] font-extrabold tracking-tight mb-4">
            Re-Engineering Egg Quality from Farm Gate to the Kitchen.
          </h1>
          <p className="text-base sm:text-lg text-[#414944] leading-relaxed">
            Proteinova was founded to bridge the critical gap between commercial egg production and clinical nutritional integrity. We believe that true nutrition begins in the flock’s biological habitat, ethical rearing, and scientifically audited farm gates.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-[#f6f7f5] p-6 rounded-3xl border border-slate-200/80 flex flex-col justify-between hover:shadow-md transition-all"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#073b2a] flex items-center justify-center mb-4 shadow-sm">
                  {pillar.icon}
                </div>
                <h3 className="font-headline text-base font-bold text-[#002418] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#414944] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 flex items-center gap-1.5 text-xs font-semibold text-[#073b2a]">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Audited Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Matrix */}
        <div className="bg-[#ecf7e9] rounded-3xl p-6 lg:p-10 border border-[#dbe5d8] mb-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs text-[#765a00] font-bold uppercase tracking-wider block mb-1">
              Quality Benchmarking
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl text-[#002418] font-bold tracking-tight">
              The Proteinova Difference vs. Commercial Eggs
            </h2>
            <p className="text-xs sm:text-sm text-[#414944] mt-2">
              Compare our certified clinical parameters directly against standard wholesale market supply.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#073b2a]/15 text-[#002418]">
                  <th className="py-3 px-4 font-bold uppercase tracking-wider">Quality Metric</th>
                  <th className="py-3 px-4 font-bold uppercase tracking-wider bg-[#ffffff]/60 rounded-t-xl text-[#073b2a]">
                    Proteinova Farm Standard
                  </th>
                  <th className="py-3 px-4 font-bold uppercase tracking-wider text-[#717974]">
                    Generic Commodity Eggs
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#073b2a]/10">
                {comparisonTable.map((row, i) => (
                  <tr key={i} className="hover:bg-white/40 transition-colors">
                    <td className="py-3.5 px-4 font-semibold text-[#151e16]">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-4 font-bold text-[#073b2a] bg-[#ffffff]/40">
                      <span className="inline-flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{row.proteinova}</span>
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-[#717974]">
                      {row.commercial}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="p-8 rounded-3xl bg-[#002418] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-headline text-xl sm:text-2xl font-bold mb-1">
              Taste the Biological Difference Tonight
            </h3>
            <p className="text-xs sm:text-sm text-[#bbeed5]">
              Browse chef-curated recipes or order a fresh farm-direct sample pack.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={onNavigateRecipes}
              className="px-5 py-2.5 rounded-xl bg-[#fdc826] hover:bg-[#f4bf1b] text-[#002418] text-xs sm:text-sm font-bold transition-all cursor-pointer"
            >
              Explore Recipes
            </button>
            <button
              onClick={onNavigateProducts}
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer"
            >
              View Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
