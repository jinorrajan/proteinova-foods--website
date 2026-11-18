import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, ChevronRight, Package, Truck, HelpCircle } from 'lucide-react';
import { PRODUCTS, ProductItem } from '../data/productsData';

interface ProductDetailViewProps {
  productId: string;
  onNavigate: (view: string, params?: any) => void;
}

export const ProductDetailView: React.FC<ProductDetailViewProps> = ({ productId, onNavigate }) => {
  const product = PRODUCTS.find((p) => p.id === productId) || PRODUCTS[0];
  const [activeTab, setActiveTab] = useState<'overview' | 'nutrition' | 'packaging' | 'faqs'>('overview');

  const otherProducts = PRODUCTS.filter((p) => p.id !== product.id);

  return (
    <div className="pt-32 pb-24 space-y-16 max-w-7xl mx-auto px-6 sm:px-8">
      {/* Back Breadcrumb */}
      <div>
        <button
          onClick={() => onNavigate('products')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#7E7268] hover:text-[#E58A1F] transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Products</span>
        </button>
      </div>

      {/* Main Hero Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Visual Column: Product and Nutrition Panel */}
        <div className="lg:col-span-6 space-y-4">
          <div className="w-full aspect-4/3 rounded-3xl overflow-hidden bg-white border border-[#2C1F18]/08 shadow-sm">
            <img
              src={activeTab === 'nutrition' ? product.nutritionPanel : product.image}
              alt={product.name}
              className="w-full h-full object-contain p-4 transition-all duration-300"
            />
          </div>

          {/* Quick tab switcher for image vs nutrition */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex-1 py-2 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-[#2C1F18] text-white border-[#2C1F18]'
                  : 'bg-white text-[#483931] border-[#2C1F18]/10 hover:border-[#E58A1F]'
              }`}
            >
              Product Imagery
            </button>
            <button
              onClick={() => setActiveTab('nutrition')}
              className={`flex-1 py-2 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                activeTab === 'nutrition'
                  ? 'bg-[#2C1F18] text-white border-[#2C1F18]'
                  : 'bg-white text-[#483931] border-[#2C1F18]/10 hover:border-[#E58A1F]'
              }`}
            >
              Verified Nutrition Panel
            </button>
          </div>
        </div>

        {/* Right Details Column */}
        <div className="lg:col-span-6 space-y-6">
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-[0.2em] text-[#E58A1F] font-semibold">
              ProteinOva Signature Series
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif text-[#2C1F18] font-light">
              {product.name}
            </h1>
            <p className="text-base text-[#7E7268] italic">
              {product.tagline}
            </p>
          </div>

          <p className="text-sm sm:text-base text-[#483931] leading-relaxed font-light">
            {product.description}
          </p>

          {/* Specifications Grid */}
          <div className="bg-white p-6 rounded-2xl border border-[#2C1F18]/08 shadow-xs space-y-3.5">
            <h3 className="text-xs uppercase tracking-wider text-[#7E7268] font-bold">
              Specifications & Quality Standards
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 bg-[#FAF7F2] rounded-xl">
                <span className="text-[#7E7268] block">Protein Bioavailability:</span>
                <span className="font-semibold text-[#2C1F18] text-sm">{product.specs.proteinPerEgg}</span>
              </div>
              <div className="p-3 bg-[#FAF7F2] rounded-xl">
                <span className="text-[#7E7268] block">Yolk Profile:</span>
                <span className="font-semibold text-[#2C1F18] text-sm">{product.specs.yolkProfile}</span>
              </div>
              <div className="p-3 bg-[#FAF7F2] rounded-xl">
                <span className="text-[#7E7268] block">Shell Integrity:</span>
                <span className="font-medium text-[#2C1F18]">{product.specs.shellType}</span>
              </div>
              <div className="p-3 bg-[#FAF7F2] rounded-xl">
                <span className="text-[#7E7268] block">Grading & Hygiene:</span>
                <span className="font-medium text-[#2C1F18]">{product.specs.grading}</span>
              </div>
            </div>
          </div>

          {/* Action Pathways */}
          <div className="pt-2 flex flex-wrap items-center gap-3.5">
            <button
              onClick={() => onNavigate('enquiry', { productId: product.id })}
              className="px-6 py-3.5 rounded-full bg-[#E58A1F] hover:bg-[#D0760E] text-white text-xs font-semibold transition-all cursor-pointer shadow-xs"
            >
              Enquire About {product.name}
            </button>

            <button
              onClick={() => onNavigate('wholesale', { productId: product.id })}
              className="px-6 py-3.5 rounded-full bg-[#2C1F18] hover:bg-[#483931] text-white text-xs font-semibold transition-all cursor-pointer shadow-xs"
            >
              Wholesale / Bulk Supply Quote
            </button>
          </div>
        </div>
      </div>

      {/* Available Packaging Options */}
      <section className="bg-white rounded-3xl border border-[#2C1F18]/08 p-8 sm:p-12 shadow-sm space-y-6">
        <div className="space-y-1">
          <span className="text-xs uppercase tracking-[0.2em] text-[#E58A1F] font-semibold">
            Supply Configurations
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif text-[#2C1F18]">
            Packaging & Volume Options
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Retail Packaging */}
          <div className="p-6 bg-[#FAF7F2] rounded-2xl border border-[#2C1F18]/06 space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-[#2C1F18]">
              <Package className="w-4 h-4 text-[#E58A1F]" />
              <h4>Household & Grocery Retail Packs</h4>
            </div>
            <ul className="space-y-2 text-xs text-[#483931]">
              {product.packaging.retail.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E58A1F]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Wholesale Packaging */}
          <div className="p-6 bg-[#FAF7F2] rounded-2xl border border-[#2C1F18]/06 space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-[#2C1F18]">
              <Truck className="w-4 h-4 text-[#E58A1F]" />
              <h4>Wholesale & Commercial Crating</h4>
            </div>
            <ul className="space-y-2 text-xs text-[#483931]">
              {product.packaging.wholesale.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#E58A1F]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Product FAQs */}
      <section className="space-y-4">
        <h3 className="text-xl font-serif text-[#2C1F18]">
          Frequently Asked Questions About {product.name}
        </h3>
        <div className="space-y-3">
          {product.faqs.map((faq, i) => (
            <div key={i} className="p-5 bg-white rounded-2xl border border-[#2C1F18]/08 space-y-1">
              <h4 className="text-sm font-bold text-[#2C1F18] flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#E58A1F]" />
                {faq.q}
              </h4>
              <p className="text-xs text-[#5E5147] leading-relaxed pl-6">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Explore Related Varieties */}
      <section className="space-y-6 pt-8 border-t border-[#2C1F18]/08">
        <h3 className="text-2xl font-serif text-[#2C1F18]">
          Explore Other Egg Varieties
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {otherProducts.map((p) => (
            <div
              key={p.id}
              onClick={() => onNavigate('product-detail', { id: p.id })}
              className="bg-white rounded-2xl border border-[#2C1F18]/08 p-4 hover:border-[#E58A1F] transition-all cursor-pointer group shadow-xs"
            >
              <div className="w-full h-36 rounded-xl overflow-hidden bg-[#FAF7F2] mb-3">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
              </div>
              <h4 className="font-serif font-bold text-base text-[#2C1F18] group-hover:text-[#E58A1F] transition-colors">
                {p.name}
              </h4>
              <p className="text-xs text-[#7E7268] line-clamp-1">{p.specs.proteinPerEgg}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
