import React, { useState } from 'react';
import {
  Egg,
  ShieldCheck,
  Check,
  Plus,
  Minus,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Layers,
  ThermometerSnowflake,
  ShoppingBag,
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
  const [selectedPackMap, setSelectedPackMap] = useState<Record<string, number>>({});
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [cartSuccessItem, setCartSuccessItem] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'hen' | 'specialty' | 'liquid'>('all');

  const getSelectedPack = (product: Product) => {
    const idx = selectedPackMap[product.id] ?? 0;
    return product.packOptions[idx] || product.packOptions[0];
  };

  const updateQuantity = (productId: string, delta: number) => {
    setQuantities((prev) => {
      const current = prev[productId] || 1;
      const next = Math.max(1, current + delta);
      return { ...prev, [productId]: next };
    });
  };

  const handleAddToCart = (product: Product) => {
    const pack = getSelectedPack(product);
    const qty = quantities[product.id] || 1;
    setCartSuccessItem(`${qty}x ${product.name} (${pack.size})`);
    setTimeout(() => {
      setCartSuccessItem(null);
    }, 2800);
  };

  const filteredProducts = PRODUCTS.filter((p) => {
    if (activeFilter === 'hen') return p.eggTypeKey === 'brown' || p.eggTypeKey === 'white' || p.eggTypeKey === 'country';
    if (activeFilter === 'specialty') return p.eggTypeKey === 'duck' || p.eggTypeKey === 'quail';
    if (activeFilter === 'liquid') return p.eggTypeKey === 'liquid';
    return true;
  });

  return (
    <div className="w-full bg-[#ffffff] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Toast Alert */}
        {cartSuccessItem && (
          <div className="fixed top-24 right-6 z-50 bg-[#002418] text-white px-5 py-3 rounded-2xl shadow-xl border border-[#fdc826] flex items-center gap-3 animate-in slide-in-from-top-4">
            <span className="w-8 h-8 rounded-full bg-[#fdc826] text-[#002418] flex items-center justify-center font-bold">
              ✓
            </span>
            <div className="text-xs sm:text-sm">
              <span className="font-bold">Added to Order Cart:</span> {cartSuccessItem}
            </div>
          </div>
        )}

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
            const selectedPack = getSelectedPack(product);
            const qty = quantities[product.id] || 1;
            const totalPrice = selectedPack.price * qty;

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

                    {/* Pack Options Segmented Trigger */}
                    <div>
                      <span className="text-xs font-bold text-[#002418] block mb-2 uppercase tracking-wider">
                        Select Packaging:
                      </span>
                      <div className="grid grid-cols-3 gap-1.5">
                        {product.packOptions.map((pack, pIdx) => {
                          const isSelected = (selectedPackMap[product.id] ?? 0) === pIdx;
                          return (
                            <button
                              key={pack.sku}
                              type="button"
                              onClick={() =>
                                setSelectedPackMap((prev) => ({
                                  ...prev,
                                  [product.id]: pIdx,
                                }))
                              }
                              className={`p-2 rounded-xl text-center transition-all cursor-pointer border ${
                                isSelected
                                  ? 'bg-[#002418] text-white border-[#002418] shadow-xs'
                                  : 'bg-[#f6f7f5] text-[#414944] border-slate-200 hover:border-slate-300'
                              }`}
                            >
                              <div className="text-[11px] font-bold leading-tight truncate">
                                {pack.size}
                              </div>
                              <div className={`text-xs mt-0.5 ${isSelected ? 'text-[#fdc826]' : 'text-[#002418] font-bold'}`}>
                                ₹{pack.price}
                              </div>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Pricing & Add to Cart Row */}
                  <div className="pt-4 border-t border-[#e1ebde] flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center border border-slate-200 rounded-xl bg-[#f6f7f5] p-0.5">
                        <button
                          type="button"
                          onClick={() => updateQuantity(product.id, -1)}
                          className="w-7 h-7 flex items-center justify-center text-[#002418] hover:bg-white rounded-lg transition-colors cursor-pointer"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="w-7 text-center text-xs font-bold text-[#002418]">
                          {qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(product.id, 1)}
                          className="w-7 h-7 flex items-center justify-center text-[#002418] hover:bg-white rounded-lg transition-colors cursor-pointer"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-xs text-[#717974]">Total Price</div>
                      <div className="font-headline text-lg font-bold text-[#002418]">
                        ₹{totalPrice}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleAddToCart(product)}
                      className="px-4 py-2.5 rounded-xl bg-[#fdc826] text-[#002418] text-xs font-bold hover:bg-[#f4bf1b] transition-all cursor-pointer flex items-center gap-1.5 shadow-xs"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Order</span>
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
