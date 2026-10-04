import React, { useState } from 'react';
import {
  Building2,
  Calculator,
  Truck,
  CheckCircle2,
  Send,
  ShieldCheck,
  Package,
  Layers,
  PhoneCall,
  Clock,
} from 'lucide-react';

export const PartnerView: React.FC = () => {
  const [eggType, setEggType] = useState('Farm-Fresh Brown');
  const [cratesCount, setCratesCount] = useState<number>(10); // 30 eggs/crate
  const [deliveryFrequency, setDeliveryFrequency] = useState('twice-weekly');
  const [city, setCity] = useState('Mumbai');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  // Pricing calculations
  // Base crate price approx ₹420 for 30 eggs
  const basePricePerCrate =
    eggType === 'Classic White'
      ? 380
      : eggType === 'Farm-Fresh Brown'
      ? 420
      : eggType === 'Country Free-Range'
      ? 590
      : 680; // Duck eggs

  // Volume discount tiers
  const discountPercent =
    cratesCount >= 50 ? 18 : cratesCount >= 20 ? 12 : cratesCount >= 10 ? 8 : 0;

  const totalRawPrice = basePricePerCrate * cratesCount;
  const discountedPrice = Math.round(totalRawPrice * (1 - discountPercent / 100));
  const savings = totalRawPrice - discountedPrice;
  const totalEggs = cratesCount * 30;

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  return (
    <div className="w-full bg-[#ffffff] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ecf7e9] text-[#073b2a] text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Institutional Supply &amp; B2B Wholesale</span>
          </div>
          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-[#002418] font-extrabold tracking-tight mb-4">
            Direct Farm-Gate Consignment for Premium Culinary Establishments.
          </h1>
          <p className="text-base text-[#414944] leading-relaxed">
            Reliable, refrigerated, scheduled egg shipments for 5-star hotels, artisanal bakeries, cloud kitchen networks, and modern trade retail shelves across India.
          </p>
        </div>

        {/* 2-Column: Interactive Wholesale Calculator & Inquiry Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Left: Interactive Consignment Calculator */}
          <div className="lg:col-span-7 bg-[#f6f7f5] rounded-3xl p-6 sm:p-8 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#073b2a] text-white flex items-center justify-center">
                <Calculator className="w-5 h-5 text-[#fdc826]" />
              </div>
              <div>
                <h3 className="font-headline text-xl font-bold text-[#002418]">
                  Wholesale Volume &amp; Consignment Calculator
                </h3>
                <p className="text-xs text-[#717974]">
                  Simulate pallet pricing and automated refrigerated delivery schedules
                </p>
              </div>
            </div>

            <div className="space-y-5">
              {/* Egg Variety */}
              <div>
                <label className="block text-xs font-bold text-[#002418] uppercase tracking-wider mb-2">
                  Select Product Line
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['Classic White', 'Farm-Fresh Brown', 'Country Free-Range', 'Duck Eggs'].map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setEggType(t)}
                      className={`p-2.5 rounded-xl text-center text-xs font-bold transition-all cursor-pointer border ${
                        eggType === t
                          ? 'bg-[#002418] text-white border-[#002418] shadow-xs'
                          : 'bg-white text-[#414944] border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Crates Slider / Stepper */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-bold text-[#002418] uppercase tracking-wider">
                    Order Volume (30-Egg Crates)
                  </label>
                  <span className="font-mono text-sm font-bold text-[#073b2a]">
                    {cratesCount} Crates ({totalEggs.toLocaleString()} Eggs)
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="100"
                  step="5"
                  value={cratesCount}
                  onChange={(e) => setCratesCount(Number(e.target.value))}
                  className="w-full accent-[#073b2a] cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-[#717974] mt-1">
                  <span>5 crates (150 eggs)</span>
                  <span>20 crates (600 eggs)</span>
                  <span>50 crates (1,500 eggs)</span>
                  <span>100 crates (Pallet)</span>
                </div>
              </div>

              {/* City & Delivery Frequency */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#002418] uppercase tracking-wider mb-1.5">
                    Hub Destination
                  </label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-white border border-slate-200 px-3 py-2.5 rounded-xl text-xs sm:text-sm text-[#151e16] focus:outline-none focus:ring-2 focus:ring-[#073b2a]/30"
                  >
                    <option value="Mumbai">Mumbai &amp; MMR</option>
                    <option value="Bengaluru">Bengaluru &amp; Mysore</option>
                    <option value="Delhi NCR">Delhi NCR &amp; Gurgaon</option>
                    <option value="Hyderabad">Hyderabad &amp; Secunderabad</option>
                    <option value="Pune">Pune &amp; Lonavala</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#002418] uppercase tracking-wider mb-1.5">
                    Dispatch Cadence
                  </label>
                  <select
                    value={deliveryFrequency}
                    onChange={(e) => setDeliveryFrequency(e.target.value)}
                    className="w-full bg-white border border-slate-200 px-3 py-2.5 rounded-xl text-xs sm:text-sm text-[#151e16] focus:outline-none focus:ring-2 focus:ring-[#073b2a]/30"
                  >
                    <option value="daily">Daily Chilled Delivery (6 AM)</option>
                    <option value="twice-weekly">Twice Weekly (Tue / Fri)</option>
                    <option value="weekly">Weekly Bulk Consignment</option>
                  </select>
                </div>
              </div>

              {/* Price Calculation Output Box */}
              <div className="p-5 rounded-2xl bg-[#ecf7e9] border border-[#bbeed5] space-y-3">
                <div className="flex items-center justify-between text-xs text-[#414944]">
                  <span>Catalog Rate ({cratesCount} × ₹{basePricePerCrate}):</span>
                  <span className="font-mono line-through">₹{totalRawPrice.toLocaleString()}</span>
                </div>
                {discountPercent > 0 && (
                  <div className="flex items-center justify-between text-xs font-bold text-[#765a00]">
                    <span>Institutional Tier Discount ({discountPercent}%):</span>
                    <span className="font-mono">-₹{savings.toLocaleString()}</span>
                  </div>
                )}
                <div className="pt-2 border-t border-[#bbeed5] flex items-center justify-between">
                  <div>
                    <span className="text-xs uppercase font-bold text-[#002418] block">
                      Estimated Consignment Total
                    </span>
                    <span className="text-[11px] text-[#717974]">
                      Includes Chilled Cold-Chain &amp; Farm Gate Inspection
                    </span>
                  </div>
                  <div className="text-right">
                    <div className="font-headline text-2xl font-extrabold text-[#073b2a]">
                      ₹{discountedPrice.toLocaleString()}
                    </div>
                    <span className="text-[10px] text-[#717974]">
                      (₹{(discountedPrice / totalEggs).toFixed(2)} / egg)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Institutional Partner Inquiry Form */}
          <div className="lg:col-span-5 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            {inquirySubmitted ? (
              <div className="py-12 text-center flex flex-col items-center justify-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#ecf7e9] text-[#073b2a] flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10 stroke-[2.5]" />
                </div>
                <h4 className="font-headline text-xl font-bold text-[#002418]">
                  Wholesale Inquiry Received!
                </h4>
                <p className="text-xs sm:text-sm text-[#414944] leading-relaxed">
                  Our institutional client director will contact you within 2 business hours with contract tier rates, cold-chain scheduling, and sample delivery for {city}.
                </p>
                <button
                  onClick={() => setInquirySubmitted(false)}
                  className="px-5 py-2.5 rounded-xl bg-[#002418] text-white text-xs font-bold"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmitInquiry} className="space-y-4">
                <div>
                  <h3 className="font-headline text-xl font-bold text-[#002418] mb-1">
                    Book Farm Sample / Consignment
                  </h3>
                  <p className="text-xs text-[#717974]">
                    Direct institutional rates tailored to your monthly egg consumption
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#002418] uppercase tracking-wider mb-1">
                    Business / Hotel / Bakery Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. The Grand Sourdough Bakery"
                    className="w-full bg-[#f6f7f5] border border-slate-200 px-3.5 py-2 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#073b2a]/30"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-[#002418] uppercase tracking-wider mb-1">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Chef / Procurement Mgr"
                      className="w-full bg-[#f6f7f5] border border-slate-200 px-3.5 py-2 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#073b2a]/30"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-[#002418] uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full bg-[#f6f7f5] border border-slate-200 px-3.5 py-2 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#073b2a]/30"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#002418] uppercase tracking-wider mb-1">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="procurement@bakery.com"
                    className="w-full bg-[#f6f7f5] border border-slate-200 px-3.5 py-2 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#073b2a]/30"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#002418] uppercase tracking-wider mb-1">
                    Special Packaging Requirements
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Need 30-egg plastic stackable crates, delivery between 5 AM - 7 AM"
                    className="w-full bg-[#f6f7f5] border border-slate-200 p-3 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#073b2a]/30"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 px-4 rounded-xl bg-[#002418] hover:bg-[#073b2a] text-white text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 shadow-md"
                  >
                    <Send className="w-4 h-4 text-[#fdc826]" />
                    <span>Request Rate Card &amp; Sample Crate</span>
                  </button>
                </div>

                <p className="text-[10px] text-[#717974] text-center">
                  NDA &amp; Quality SLAs provided. All shipments include Batch COA (Certificate of Analysis).
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Institutional Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-[#ecf7e9] text-[#073b2a]">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-headline text-sm font-bold text-[#002418]">
                Temperature-Tracked Fleet
              </h4>
              <p className="text-xs text-[#717974] mt-0.5">
                Real-time IoT dataloggers monitor every refrigerated vehicle from farm gate to your loading bay.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-[#ecf7e9] text-[#073b2a]">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-headline text-sm font-bold text-[#002418]">
                6 AM Kitchen Delivery
              </h4>
              <p className="text-xs text-[#717974] mt-0.5">
                Pre-opening early morning dispatch ensures your morning bake and breakfast line are never delayed.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-[#ecf7e9] text-[#073b2a]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-headline text-sm font-bold text-[#002418]">
                Batch COA Compliance
              </h4>
              <p className="text-xs text-[#717974] mt-0.5">
                Every consignment includes independent microbiological certificates for zero Salmonella and heavy metals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
