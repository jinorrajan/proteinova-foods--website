import React, { useState } from 'react';
import { Package, Truck, ShieldCheck, CheckCircle2, ArrowRight, Building2, Phone, Mail } from 'lucide-react';
import { PRODUCTS } from '../data/productsData';

interface WholesaleViewProps {
  initialProductId?: string;
  onSuccess: (details: any) => void;
}

export const WholesaleView: React.FC<WholesaleViewProps> = ({ initialProductId, onSuccess }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    businessName: '',
    businessType: 'Supermarket / Retail Chain',
    location: '',
    interestedVarieties: initialProductId ? [initialProductId] : ['brown-eggs'],
    estimatedVolume: '10 to 50 Crates / week',
    notes: '',
  });

  const [submitting, setSubmitting] = useState(false);

  const toggleVariety = (id: string) => {
    setFormData((prev) => {
      const exists = prev.interestedVarieties.includes(id);
      return {
        ...prev,
        interestedVarieties: exists
          ? prev.interestedVarieties.filter((v) => v !== id)
          : [...prev.interestedVarieties, id],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      onSuccess({
        refNumber: `POV-WS-${Math.floor(100000 + Math.random() * 900000)}`,
        type: 'Wholesale & B2B Commercial Supply',
        ...formData,
      });
    }, 600);
  };

  return (
    <div className="pt-32 pb-24 space-y-20 max-w-7xl mx-auto px-6 sm:px-8">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <span className="text-xs uppercase tracking-[0.2em] text-[#E58A1F] font-semibold">
          Commercial Distribution & B2B Supply
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif text-[#2C1F18] font-light leading-tight">
          Your Business. Your Supply Requirements. <br />
          <span className="italic font-normal text-[#E58A1F]">Let's Connect.</span>
        </h1>
        <p className="text-base sm:text-lg text-[#5E5147] font-light leading-relaxed">
          Looking for certified egg products for your wholesale or distribution operations? ProteinOva welcomes enquiries from businesses interested in dependable quality, volume consistency, and hygienic packing.
        </p>
      </div>

      {/* 3 Pillars of Commercial Supply */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-8 rounded-3xl border border-[#2C1F18]/08 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-[#E58A1F]/15 flex items-center justify-center text-[#E58A1F]">
            <Package className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-serif text-[#2C1F18]">Wholesale Businesses</h3>
          <p className="text-xs text-[#7E7268] leading-relaxed">
            Reliable palletized and master-carton egg deliveries with acoustic crack detection and guaranteed Class-A grading for high-volume requirements.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-[#2C1F18]/08 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-[#E58A1F]/15 flex items-center justify-center text-[#E58A1F]">
            <Building2 className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-serif text-[#2C1F18]">Retail & Grocery Chains</h3>
          <p className="text-xs text-[#7E7268] leading-relaxed">
            Shelf-ready 6, 10, and 12-egg bio-cartons and value trays formatted for high consumer visibility, barcoded for modern retail POS inventory systems.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-[#2C1F18]/08 shadow-xs space-y-3">
          <div className="w-10 h-10 rounded-2xl bg-[#E58A1F]/15 flex items-center justify-center text-[#E58A1F]">
            <Truck className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-serif text-[#2C1F18]">Regional Distributors</h3>
          <p className="text-xs text-[#7E7268] leading-relaxed">
            Discuss exclusive or authorized regional distribution channels across major industrial, commercial, and metro centers.
          </p>
        </div>
      </div>

      {/* Main Wholesale Enquiry Form */}
      <div className="bg-white rounded-3xl border border-[#2C1F18]/08 p-8 sm:p-14 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs uppercase tracking-[0.2em] text-[#E58A1F] font-semibold">
            Direct Commercial Line
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#2C1F18]">
            Let's Understand Your Business Requirements
          </h2>
          <p className="text-xs sm:text-sm text-[#7E7268] leading-relaxed">
            Fill out your company details, the egg varieties you are interested in, and your estimated volume. A commercial account representative will contact you within 24 hours.
          </p>

          <div className="pt-4 space-y-3 text-xs text-[#483931]">
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#E58A1F]" />
              <span>Full compliance with food safety & hygiene standards</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#E58A1F]" />
              <span>Cold-chain delivery schedules available</span>
            </div>
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#E58A1F]" />
              <span>Customized packaging options for contract buyers</span>
            </div>
          </div>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#2C1F18] mb-1.5">
                Contact Person Name *
              </label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Ramesh Kumar"
                className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#2C1F18]/10 text-xs text-[#2C1F18] focus:outline-none focus:border-[#E58A1F]"
              />
            </div>

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
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#2C1F18] mb-1.5">
                Business / Company Name *
              </label>
              <input
                type="text"
                required
                value={formData.businessName}
                onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                placeholder="e.g. Green Valley Supermarket"
                className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#2C1F18]/10 text-xs text-[#2C1F18] focus:outline-none focus:border-[#E58A1F]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#2C1F18] mb-1.5">
                Business Type
              </label>
              <select
                value={formData.businessType}
                onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#2C1F18]/10 text-xs text-[#2C1F18] focus:outline-none focus:border-[#E58A1F]"
              >
                <option value="Supermarket / Retail Chain">Supermarket / Retail Chain</option>
                <option value="Wholesale Egg Distributor">Wholesale Egg Distributor</option>
                <option value="Hotel, Restaurant, Catering (Horeca)">Hotel, Restaurant, Catering (Horeca)</option>
                <option value="Commercial Bakery">Commercial Bakery</option>
                <option value="Grocery / Neighborhood Store">Grocery / Neighborhood Store</option>
                <option value="Institutional Buyer">Institutional Buyer</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold text-[#2C1F18] mb-1.5">
                City / Location *
              </label>
              <input
                type="text"
                required
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                placeholder="e.g. Salem, Tamil Nadu"
                className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#26362C]/10 text-xs text-[#26362C] focus:outline-none focus:border-[#E5A900]"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#2C1F18] mb-1.5">
                Estimated Volume
              </label>
              <select
                value={formData.estimatedVolume}
                onChange={(e) => setFormData({ ...formData, estimatedVolume: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#2C1F18]/10 text-xs text-[#2C1F18] focus:outline-none focus:border-[#E58A1F]"
              >
                <option value="5 to 20 Crates / week">5 to 20 Crates / week</option>
                <option value="20 to 100 Crates / week">20 to 100 Crates / week</option>
                <option value="100+ Crates (Truckload Supply)">100+ Crates (Truckload Supply)</option>
                <option value="Custom Trial Requirement">Custom Trial Requirement</option>
              </select>
            </div>
          </div>

          {/* Interested Products Checkboxes */}
          <div>
            <label className="block text-xs font-semibold text-[#2C1F18] mb-2">
              Interested Egg Varieties (Select all that apply)
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {PRODUCTS.map((p) => {
                const isSelected = formData.interestedVarieties.includes(p.id);
                return (
                  <button
                    type="button"
                    key={p.id}
                    onClick={() => toggleVariety(p.id)}
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
              Additional Details / Delivery Schedule
            </label>
            <textarea
              rows={3}
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              placeholder="Tell us about your specific delivery cadence, custom packaging needs, or trial requirements..."
              className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#2C1F18]/10 text-xs text-[#2C1F18] focus:outline-none focus:border-[#E58A1F]"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={submitting}
              className="w-full py-3.5 rounded-xl bg-[#2C1F18] hover:bg-[#E58A1F] text-white text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs disabled:opacity-50"
            >
              <span>{submitting ? 'Submitting Enquiry...' : 'Submit Wholesale Enquiry'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
