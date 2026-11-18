import React, { useState } from 'react';
import { Store, TrendingUp, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/productsData';

interface PartnerViewProps {
  onSuccess: (details: any) => void;
}

export const PartnerView: React.FC<PartnerViewProps> = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    shopName: '',
    ownerName: '',
    mobile: '',
    email: '',
    location: '',
    interestedProducts: ['brown-eggs', 'white-eggs'],
    estimatedRequirement: '50 to 100 Packs / week',
    additionalInfo: '',
  });

  const [submitting, setSubmitting] = useState(false);

  const toggleProduct = (id: string) => {
    setFormData((prev) => {
      const exists = prev.interestedProducts.includes(id);
      return {
        ...prev,
        interestedProducts: exists
          ? prev.interestedProducts.filter((p) => p !== id)
          : [...prev.interestedProducts, id],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      onSuccess({
        refNumber: `POV-RT-${Math.floor(100000 + Math.random() * 900000)}`,
        type: 'Retail Store Partnership',
        ...formData,
      });
    }, 600);
  };

  return (
    <div className="pt-32 pb-24 space-y-20 max-w-7xl mx-auto px-6 sm:px-8">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs uppercase tracking-[0.2em] text-[#E58A1F] font-semibold">
          Retailer & Grocery Collaboration
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif text-[#2C1F18] font-light leading-tight">
          Let's Grow Your <br />
          <span className="italic font-normal text-[#E58A1F]">Business Together.</span>
        </h1>
        <p className="text-base sm:text-lg text-[#5E5147] font-light leading-relaxed">
          Are you running a neighborhood grocery store, premium supermarket, or dairy outlet? Connect with ProteinOva to explore our available egg varieties, attractive retail packs, and dependable stocking schedules.
        </p>
      </div>

      {/* Retail Partner Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-3xl border border-[#2C1F18]/08 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-[#E58A1F]/15 flex items-center justify-center text-[#E58A1F]">
            <Store className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-serif text-[#2C1F18]">Premium Shelf Appeal</h3>
          <p className="text-xs text-[#7E7268] leading-relaxed">
            Hygienically packaged, tamper-evident 6 and 12-egg bio-pulp cartons designed to stand out on grocery shelves and build customer trust.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-[#2C1F18]/08 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-[#E58A1F]/15 flex items-center justify-center text-[#E58A1F]">
            <TrendingUp className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-serif text-[#2C1F18]">Consistent Margins</h3>
          <p className="text-xs text-[#7E7268] leading-relaxed">
            Direct brand distribution eliminates middlemen markups, giving your retail outlet healthy retail margins and promotional co-marketing.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-[#2C1F18]/08 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-[#E58A1F]/15 flex items-center justify-center text-[#E58A1F]">
            <Sparkles className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-serif text-[#2C1F18]">Zero-Damage Guarantee</h3>
          <p className="text-xs text-[#7E7268] leading-relaxed">
            We provide guaranteed replacement for any transit damage and schedule regular replenishment so your eggs are always fresh.
          </p>
        </div>
      </div>

      {/* Retail Form */}
      <div className="bg-white rounded-3xl border border-[#2C1F18]/08 p-8 sm:p-14 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs uppercase tracking-[0.2em] text-[#E58A1F] font-semibold">
            Partner Application
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#2C1F18]">
            Become an Authorized ProteinOva Retailer
          </h2>
          <p className="text-xs sm:text-sm text-[#7E7268] leading-relaxed">
            Tell us about your store location and weekly requirement. Our regional field team will visit your store with sample boxes and commercial terms.
          </p>

          <div className="pt-4 space-y-3 text-xs text-[#483931]">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#E58A1F]" />
              <span>Free point-of-sale branding and shelf talkers</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#E58A1F]" />
              <span>Bi-weekly stock inspection & fresh replenishment</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#2C1F18] mb-1.5">
                Shop / Store Name *
              </label>
              <input
                type="text"
                required
                value={formData.shopName}
                onChange={(e) => setFormData({ ...formData, shopName: e.target.value })}
                placeholder="e.g. Daily Fresh Mart"
                className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#2C1F18]/10 text-xs text-[#2C1F18] focus:outline-none focus:border-[#E58A1F]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#2C1F18] mb-1.5">
                Owner / Contact Person *
              </label>
              <input
                type="text"
                required
                value={formData.ownerName}
                onChange={(e) => setFormData({ ...formData, ownerName: e.target.value })}
                placeholder="e.g. Anand Patil"
                className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#2C1F18]/10 text-xs text-[#2C1F18] focus:outline-none focus:border-[#E58A1F]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#2C1F18] mb-1.5">
                Mobile Number *
              </label>
              <input
                type="tel"
                required
                value={formData.mobile}
                onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                placeholder="+91 98765 43210"
                className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#2C1F18]/10 text-xs text-[#2C1F18] focus:outline-none focus:border-[#E58A1F]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#2C1F18] mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="store@email.com"
                className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#2C1F18]/10 text-xs text-[#2C1F18] focus:outline-none focus:border-[#E58A1F]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#2C1F18] mb-1.5">
                Shop Location / Area *
              </label>
              <input
                type="text"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g. Salem Road, Namakkal"
                className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#26362C]/10 text-xs text-[#26362C] focus:outline-none focus:border-[#E5A900]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#2C1F18] mb-1.5">
                Estimated Weekly Sales
              </label>
              <select
                value={formData.estimatedRequirement}
                onChange={(e) => setFormData({ ...formData, estimatedRequirement: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#2C1F18]/10 text-xs text-[#2C1F18] focus:outline-none focus:border-[#E58A1F]"
              >
                <option value="20 to 50 Packs / week">20 to 50 Packs / week</option>
                <option value="50 to 150 Packs / week">50 to 150 Packs / week</option>
                <option value="150+ Packs / week">150+ Packs / week</option>
              </select>
            </div>
          </div>

          {/* Interested Products */}
          <div>
            <label className="block text-xs font-semibold text-[#2C1F18] mb-2">
              Egg Varieties to Stock
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {PRODUCTS.map((p) => {
                const isSelected = formData.interestedProducts.includes(p.id);
                return (
                  <button
                    type="button"
                    key={p.id}
                    onClick={() => toggleProduct(p.id)}
                    className={`p-2.5 rounded-xl text-left text-xs font-medium border transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'bg-[#E58A1F]/15 border-[#E58A1F] text-[#2C1F18]'
                        : 'bg-[#FAF7F2] border-[#2C1F18]/08 text-[#7E7268]'
                    }`}
                  >
                    <span>{p.name}</span>
                    {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#E58A1F]" />}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#2C1F18] mb-1.5">
              Additional Store Notes
            </label>
            <textarea
              rows={3}
              value={formData.additionalInfo}
              onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
              placeholder="Tell us about your customer demographics, existing egg brands, or preferred delivery timing..."
              className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#2C1F18]/10 text-xs text-[#2C1F18] focus:outline-none focus:border-[#E58A1F]"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3.5 rounded-xl bg-[#2C1F18] hover:bg-[#E58A1F] text-white text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs disabled:opacity-50"
            >
              <span>{submitting ? 'Submitting Application...' : 'Become a Retail Partner'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
