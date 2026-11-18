import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../data/productsData';

interface ProductsViewProps {
  onNavigate: (view: string, params?: any) => void;
}

export const ProductsView: React.FC<ProductsViewProps> = ({ onNavigate }) => {
  return (
    <div className="pt-32 pb-24 space-y-20">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 text-center space-y-4">
        <span className="text-xs uppercase tracking-[0.2em] text-[#E58A1F] font-semibold">
          Farm Fresh & Certified
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif text-[#2C1F18] font-light">
          Explore Our Products.
        </h1>
        <p className="text-base sm:text-lg text-[#5E5147] font-light max-w-2xl mx-auto leading-relaxed">
          Every customer has different preferences and requirements. Explore the egg varieties available through ProteinOva and find the products that match your needs.
        </p>
      </div>

      {/* 5 Products Showcase List */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-16">
        {PRODUCTS.map((prod, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div
              key={prod.id}
              className={`bg-white rounded-3xl border border-[#2C1F18]/08 p-6 sm:p-10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Product Photo & Posters */}
              <div className={`lg:col-span-5 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                <div className="w-full aspect-4/3 rounded-2xl overflow-hidden bg-[#FAF7F2] border border-[#2C1F18]/08 relative group">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-[#2C1F18] shadow-xs">
                    {prod.badge}
                  </span>
                </div>
              </div>

              {/* Product Content & Specs */}
              <div className={`lg:col-span-7 space-y-5 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                <div className="space-y-1">
                  <span className="text-xs font-mono font-medium text-[#E58A1F] uppercase tracking-wider">
                    Grade-A Quality
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-serif text-[#2C1F18] font-light">
                    {prod.name}
                  </h2>
                  <p className="text-sm font-medium text-[#7E7268] italic">
                    {prod.tagline}
                  </p>
                </div>

                <p className="text-sm text-[#483931] leading-relaxed">
                  {prod.description}
                </p>

                {/* Specs Bento */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#2C1F18]/06">
                    <span className="text-[10px] uppercase tracking-wider text-[#7E7268] font-bold block">
                      Protein Density
                    </span>
                    <span className="text-sm font-semibold text-[#2C1F18]">{prod.specs.proteinPerEgg}</span>
                  </div>

                  <div className="p-3 bg-[#FAF7F2] rounded-xl border border-[#2C1F18]/06">
                    <span className="text-[10px] uppercase tracking-wider text-[#7E7268] font-bold block">
                      Yolk Tone
                    </span>
                    <span className="text-sm font-semibold text-[#2C1F18]">{prod.specs.yolkProfile}</span>
                  </div>
                </div>

                {/* Packaging preview */}
                <div className="text-xs text-[#7E7268] space-y-1 pt-1">
                  <span className="font-semibold text-[#2C1F18]">Retail Packs:</span>{' '}
                  {prod.packaging.retail.join(', ')}
                </div>

                {/* Actions */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => onNavigate('product-detail', { id: prod.id })}
                    className="px-5 py-2.5 rounded-full bg-[#2C1F18] hover:bg-[#E58A1F] text-white text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 shadow-xs"
                  >
                    <span>Full Specifications & Nutrition</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onNavigate('enquiry', { productId: prod.id })}
                    className="px-5 py-2.5 rounded-full bg-white border border-[#2C1F18]/20 hover:border-[#E58A1F] hover:text-[#E58A1F] text-[#2C1F18] text-xs font-semibold transition-all cursor-pointer"
                  >
                    Enquire About {prod.name}
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Comparative Specification Matrix */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="bg-white rounded-3xl border border-[#2C1F18]/08 p-8 sm:p-12 shadow-sm space-y-8">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#E58A1F] font-semibold">
              Quality Assurance
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif text-[#2C1F18]">
              Cross-Variety Comparison Matrix
            </h3>
            <p className="text-xs sm:text-sm text-[#7E7268]">
              Standardized inspection, grading, and nutrition profiles across all ProteinOva egg categories.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-[#2C1F18]/10 text-[#7E7268] uppercase tracking-wider font-semibold">
                  <th className="py-3 px-4">Variety</th>
                  <th className="py-3 px-4">Protein Content</th>
                  <th className="py-3 px-4">Shell Profile</th>
                  <th className="py-3 px-4">Recommended Culinary Uses</th>
                  <th className="py-3 px-4">Quality Grading</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2C1F18]/06 text-[#483931]">
                {PRODUCTS.map((p) => (
                  <tr key={p.id} className="hover:bg-[#FAF7F2] transition-colors">
                    <td className="py-4 px-4 font-bold text-[#2C1F18]">{p.name}</td>
                    <td className="py-4 px-4 font-mono font-medium text-[#E58A1F]">{p.specs.proteinPerEgg}</td>
                    <td className="py-4 px-4">{p.specs.shellType}</td>
                    <td className="py-4 px-4">{p.specs.bestFor.join(', ')}</td>
                    <td className="py-4 px-4">{p.specs.grading}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};
