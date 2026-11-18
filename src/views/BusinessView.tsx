import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Package, 
  Truck, 
  Store, 
  TrendingUp, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Building2, 
  Sparkles, 
  Phone, 
  Mail, 
  MessageCircle,
  HelpCircle
} from 'lucide-react';
import { PRODUCTS } from '../data/productsData';
import { MagneticButton } from '../components/MagneticButton';

interface BusinessViewProps {
  initialTab?: 'wholesale' | 'partner';
  initialProductId?: string;
  onSuccess: (details: any) => void;
  onNavigate?: (view: string, params?: any) => void;
}

export const BusinessView: React.FC<BusinessViewProps> = ({ 
  initialTab = 'wholesale', 
  initialProductId, 
  onSuccess,
  onNavigate 
}) => {
  const [activeTab, setActiveTab] = useState<'wholesale' | 'partner'>(initialTab);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  // ================= WHOLESALE FORM STATE =================
  const [wholesaleForm, setWholesaleForm] = useState({
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

  const [submittingWholesale, setSubmittingWholesale] = useState(false);

  const toggleWholesaleVariety = (id: string) => {
    setWholesaleForm((prev) => {
      const exists = prev.interestedVarieties.includes(id);
      return {
        ...prev,
        interestedVarieties: exists
          ? prev.interestedVarieties.filter((v) => v !== id)
          : [...prev.interestedVarieties, id],
      };
    });
  };

  const handleWholesaleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittingWholesale(true);
    const subject = encodeURIComponent(`[Wholesale Quote] From ${wholesaleForm.businessName} (${wholesaleForm.fullName})`);
    const body = encodeURIComponent(
      `Hello ProteinOva Team,\n\n` +
      `Business: ${wholesaleForm.businessName}\n` +
      `Contact: ${wholesaleForm.fullName}\n` +
      `Mobile: ${wholesaleForm.mobile}\n` +
      `Email: ${wholesaleForm.email}\n` +
      `Type: ${wholesaleForm.businessType}\n` +
      `Location: ${wholesaleForm.location}\n` +
      `Estimated Volume: ${wholesaleForm.estimatedVolume}\n` +
      `Varieties: ${wholesaleForm.interestedVarieties.join(', ')}\n` +
      `Notes: ${wholesaleForm.notes}\n\n` +
      `---\nSent via ProteinOva B2B Portal`
    );
    window.location.href = `mailto:connect@proteinova.in?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSubmittingWholesale(false);
      onSuccess({
        refNumber: `POV-WS-${Math.floor(100000 + Math.random() * 900000)}`,
        type: 'Wholesale & B2B Commercial Supply',
        ...wholesaleForm,
      });
    }, 600);
  };

  // ================= RETAIL PARTNER FORM STATE =================
  const [partnerForm, setPartnerForm] = useState({
    shopName: '',
    ownerName: '',
    mobile: '',
    email: '',
    location: '',
    interestedProducts: ['brown-eggs', 'white-eggs'],
    estimatedRequirement: '50 to 100 Packs / week',
    additionalInfo: '',
  });

  const [submittingPartner, setSubmittingPartner] = useState(false);

  const togglePartnerProduct = (id: string) => {
    setPartnerForm((prev) => {
      const exists = prev.interestedProducts.includes(id);
      return {
        ...prev,
        interestedProducts: exists
          ? prev.interestedProducts.filter((p) => p !== id)
          : [...prev.interestedProducts, id],
      };
    });
  };

  const handlePartnerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittingPartner(true);
    const subject = encodeURIComponent(`[Retail Partnership] From ${partnerForm.shopName} (${partnerForm.ownerName})`);
    const body = encodeURIComponent(
      `Hello ProteinOva Team,\n\n` +
      `Store: ${partnerForm.shopName}\n` +
      `Owner: ${partnerForm.ownerName}\n` +
      `Mobile: ${partnerForm.mobile}\n` +
      `Email: ${partnerForm.email}\n` +
      `Location: ${partnerForm.location}\n` +
      `Weekly Sales Est: ${partnerForm.estimatedRequirement}\n` +
      `Products: ${partnerForm.interestedProducts.join(', ')}\n` +
      `Remarks: ${partnerForm.additionalInfo}\n\n` +
      `---\nSent via ProteinOva Retail Portal`
    );
    window.location.href = `mailto:connect@proteinova.in?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setSubmittingPartner(false);
      onSuccess({
        refNumber: `POV-RT-${Math.floor(100000 + Math.random() * 900000)}`,
        type: 'Retail Store Partnership',
        ...partnerForm,
      });
    }, 600);
  };

  return (
    <div className="pt-28 sm:pt-36 pb-28 space-y-16 max-w-7xl mx-auto px-6 sm:px-8">
      {/* ================= 1. SECTION HEADER ================= */}
      <div className="max-w-3xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5A900]/10 border border-[#E5A900]/25 text-[#26362C] text-xs font-semibold tracking-wider uppercase">
          <Building2 className="w-3.5 h-3.5 text-[#E5A900]" />
          <span>B2B Commercial Supply & Retail Partnerships</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-semibold tracking-[-0.04em] text-[#26362C] leading-tight">
          Your Business. <br />
          <span className="text-[#E5A900]">Your Trusted Egg Partner.</span>
        </h1>

        <p className="text-base sm:text-lg text-[#717B74] font-normal leading-relaxed">
          From high-volume palletized wholesale crating for hotels, bakeries, and food manufacturers to shelf-ready retail bio-packs for supermarkets and grocery stores, ProteinOva delivers consistency, cold-chain speed, and verified Class-A quality.
        </p>
      </div>

      {/* ================= 2. SEGMENTED CONTROL / TABS ================= */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-b border-[#26362C]/10 pb-6">
        <div className="inline-flex p-1.5 rounded-2xl bg-[#F2F6F3] border border-[#26362C]/08 max-w-md w-full sm:w-auto">
          <button
            onClick={() => setActiveTab('wholesale')}
            className={`flex-1 sm:flex-initial px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer flex items-center justify-center gap-2 ${
              activeTab === 'wholesale'
                ? 'bg-[#26362C] text-white shadow-xs'
                : 'text-[#26362C] hover:text-[#E5A900]'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>Wholesale & Bulk Supply</span>
          </button>

          <button
            onClick={() => setActiveTab('partner')}
            className={`flex-1 sm:flex-initial px-6 py-3 rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all cursor-pointer flex items-center justify-center gap-2 ${
              activeTab === 'partner'
                ? 'bg-[#26362C] text-white shadow-xs'
                : 'text-[#26362C] hover:text-[#E5A900]'
            }`}
          >
            <Store className="w-4 h-4" />
            <span>Retail Store Partnership</span>
          </button>
        </div>

        {/* Quick Hotline Indicator */}
        <div className="flex items-center gap-4 text-xs text-[#717B74]">
          <span className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-[#E5A900]" />
            <a href="tel:+919791220001" className="hover:text-[#26362C] font-medium">+91 9791220001</a>
          </span>
          <span>•</span>
          <span className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-[#E5A900]" />
            <a href="mailto:connect@proteinova.in" className="hover:text-[#26362C] font-medium">connect@proteinova.in</a>
          </span>
        </div>
      </div>

      {/* ================= 3. TAB 1: WHOLESALE & BULK SUPPLY ================= */}
      {activeTab === 'wholesale' && (
        <motion.div
          key="wholesale-tab"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="space-y-16"
        >
          {/* Wholesale 3 Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-7 rounded-3xl border border-[#26362C]/10 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#E5A900]/10 flex items-center justify-center text-[#E5A900]">
                <Package className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-[#26362C] tracking-tight">Wholesale & Institutions</h3>
              <p className="text-xs text-[#717B74] leading-relaxed">
                Reliable palletized and master-carton egg deliveries with acoustic crack detection and guaranteed Class-A grading for high-volume operations.
              </p>
              <div className="pt-2 text-[11px] font-semibold text-[#26362C] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E5A900]" />
                <span>Master crates of 180 to 360 eggs</span>
              </div>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-[#26362C]/10 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#E5A900]/10 flex items-center justify-center text-[#E5A900]">
                <Building2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-[#26362C] tracking-tight">Bakeries & Horeca</h3>
              <p className="text-xs text-[#717B74] leading-relaxed">
                Consistent albumin density and yolk stability for pastry chefs and commercial kitchens, plus specialty duck and quail egg supply.
              </p>
              <div className="pt-2 text-[11px] font-semibold text-[#26362C] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E5A900]" />
                <span>Strict batch microbiological tests</span>
              </div>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-[#26362C]/10 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#E5A900]/10 flex items-center justify-center text-[#E5A900]">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-[#26362C] tracking-tight">Regional Distributors</h3>
              <p className="text-xs text-[#717B74] leading-relaxed">
                Protected geographic territories and scheduled morning fleet runs directly from our central Namakkal packaging headquarters.
              </p>
              <div className="pt-2 text-[11px] font-semibold text-[#26362C] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E5A900]" />
                <span>Protected dealer margins</span>
              </div>
            </div>
          </div>

          {/* Wholesale Form Grid */}
          <div className="bg-white rounded-3xl border border-[#26362C]/10 p-8 sm:p-12 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.16em] text-[#E5A900] font-semibold">
                  Commercial Quotation
                </span>
                <h2 className="text-3xl sm:text-4xl font-semibold text-[#26362C] tracking-tight leading-snug">
                  Request Wholesale Volume Pricing
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#717B74] leading-relaxed">
                Fill in your company details, the egg varieties you need, and your estimated volume. A commercial account representative from our Namakkal desk will contact you within 24 hours.
              </p>

              <div className="p-5 rounded-2xl bg-[#F4F7F4] border border-[#26362C]/06 space-y-3 text-xs text-[#26362C]">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#E5A900] shrink-0" />
                  <span>Full compliance with UV-C sanitization & FSSAI standards</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E5A900] shrink-0" />
                  <span>Daily cold-chain delivery routes across major hubs</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Package className="w-4 h-4 text-[#E5A900] shrink-0" />
                  <span>Zero-breakage guarantee on transit shipments</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/919791220001?text=Hello%20ProteinOva,%20I%20would%20like%20to%20discuss%20wholesale%20egg%20supply."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-semibold text-[#26362C] hover:text-[#E5A900] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Prefer WhatsApp? Message our commercial team directly →</span>
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleWholesaleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#26362C] mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={wholesaleForm.fullName}
                      onChange={(e) => setWholesaleForm({ ...wholesaleForm, fullName: e.target.value })}
                      placeholder="e.g. Rajesh Kumar"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#26362C]/10 text-xs text-[#26362C] focus:outline-none focus:border-[#E5A900]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#26362C] mb-1.5">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={wholesaleForm.mobile}
                      onChange={(e) => setWholesaleForm({ ...wholesaleForm, mobile: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#26362C]/10 text-xs text-[#26362C] focus:outline-none focus:border-[#E5A900]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#26362C] mb-1.5">
                      Business / Entity Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={wholesaleForm.businessName}
                      onChange={(e) => setWholesaleForm({ ...wholesaleForm, businessName: e.target.value })}
                      placeholder="e.g. Apex Hospitality Group"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#26362C]/10 text-xs text-[#26362C] focus:outline-none focus:border-[#E5A900]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#26362C] mb-1.5">
                      Business Type
                    </label>
                    <select
                      value={wholesaleForm.businessType}
                      onChange={(e) => setWholesaleForm({ ...wholesaleForm, businessType: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#26362C]/10 text-xs text-[#26362C] focus:outline-none focus:border-[#E5A900]"
                    >
                      <option value="Supermarket / Retail Chain">Supermarket / Retail Chain</option>
                      <option value="Hotel / Restaurant (Horeca)">Hotel / Restaurant (Horeca)</option>
                      <option value="Bakery / Confectionery">Bakery / Confectionery</option>
                      <option value="Regional Egg Wholesaler">Regional Egg Wholesaler</option>
                      <option value="Institutional Caterer">Institutional Caterer</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#26362C] mb-1.5">
                      Delivery Location / City *
                    </label>
                    <input
                      type="text"
                      required
                      value={wholesaleForm.location}
                      onChange={(e) => setWholesaleForm({ ...wholesaleForm, location: e.target.value })}
                      placeholder="e.g. Salem, Tamil Nadu"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#26362C]/10 text-xs text-[#26362C] focus:outline-none focus:border-[#E5A900]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#26362C] mb-1.5">
                      Estimated Weekly Volume
                    </label>
                    <select
                      value={wholesaleForm.estimatedVolume}
                      onChange={(e) => setWholesaleForm({ ...wholesaleForm, estimatedVolume: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#26362C]/10 text-xs text-[#26362C] focus:outline-none focus:border-[#E5A900]"
                    >
                      <option value="5 to 20 Crates / week">5 to 20 Crates / week</option>
                      <option value="20 to 100 Crates / week">20 to 100 Crates / week</option>
                      <option value="100+ Crates (Truckload Supply)">100+ Crates (Truckload Supply)</option>
                      <option value="Custom Trial Requirement">Custom Trial Requirement</option>
                    </select>
                  </div>
                </div>

                {/* Varieties Checkboxes */}
                <div>
                  <label className="block text-xs font-semibold text-[#26362C] mb-2">
                    Interested Egg Varieties (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {PRODUCTS.map((p) => {
                      const isSelected = wholesaleForm.interestedVarieties.includes(p.id);
                      return (
                        <button
                          type="button"
                          key={p.id}
                          onClick={() => toggleWholesaleVariety(p.id)}
                          className={`p-2.5 rounded-xl text-left text-xs font-medium border transition-all cursor-pointer flex items-center justify-between ${
                            isSelected
                              ? 'bg-[#E5A900]/15 border-[#E5A900] text-[#26362C] font-semibold'
                              : 'bg-[#FAF8F5] border-[#26362C]/08 text-[#717B74]'
                          }`}
                        >
                          <span>{p.name}</span>
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#E5A900]" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#26362C] mb-1.5">
                    Delivery Cadence / Special Notes
                  </label>
                  <textarea
                    rows={3}
                    value={wholesaleForm.notes}
                    onChange={(e) => setWholesaleForm({ ...wholesaleForm, notes: e.target.value })}
                    placeholder="Specific delivery frequency, custom packaging requirements, or questions..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#26362C]/10 text-xs text-[#26362C] focus:outline-none focus:border-[#E5A900]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submittingWholesale}
                    className="w-full py-3.5 rounded-full bg-[#26362C] hover:bg-[#E5A900] hover:text-[#26362C] text-white text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs disabled:opacity-50"
                  >
                    <span>{submittingWholesale ? 'Submitting Quotation Request...' : 'Submit Wholesale Quotation Request'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      )}

      {/* ================= 4. TAB 2: RETAIL STORE PARTNERSHIP ================= */}
      {activeTab === 'partner' && (
        <motion.div
          key="partner-tab"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="space-y-16"
        >
          {/* Retail 3 Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-7 rounded-3xl border border-[#26362C]/10 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#E5A900]/10 flex items-center justify-center text-[#E5A900]">
                <Store className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-[#26362C] tracking-tight">Premium Shelf Appeal</h3>
              <p className="text-xs text-[#717B74] leading-relaxed">
                Hygienically packaged, tamper-evident 6, 12, and 30-egg bio-pulp cartons designed to stand out on grocery shelves and build customer loyalty.
              </p>
              <div className="pt-2 text-[11px] font-semibold text-[#26362C] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E5A900]" />
                <span>Barcoded for modern retail POS</span>
              </div>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-[#26362C]/10 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#E5A900]/10 flex items-center justify-center text-[#E5A900]">
                <TrendingUp className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-[#26362C] tracking-tight">Healthy Retail Margins</h3>
              <p className="text-xs text-[#717B74] leading-relaxed">
                Direct-from-brand supply eliminates distributor markups, giving your retail store attractive margins, marketing support, and POS collateral.
              </p>
              <div className="pt-2 text-[11px] font-semibold text-[#26362C] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E5A900]" />
                <span>Weekly credit & replenishment terms</span>
              </div>
            </div>

            <div className="bg-white p-7 rounded-3xl border border-[#26362C]/10 shadow-xs space-y-3">
              <div className="w-10 h-10 rounded-2xl bg-[#E5A900]/10 flex items-center justify-center text-[#E5A900]">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold text-[#26362C] tracking-tight">Zero-Damage Guarantee</h3>
              <p className="text-xs text-[#717B74] leading-relaxed">
                100% immediate replacement for any transit cracked eggs upon delivery verification. Your inventory stays fresh and guaranteed.
              </p>
              <div className="pt-2 text-[11px] font-semibold text-[#26362C] flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#E5A900]" />
                <span>Guaranteed replacement SLA</span>
              </div>
            </div>
          </div>

          {/* Retail Partner Application Form */}
          <div className="bg-white rounded-3xl border border-[#26362C]/10 p-8 sm:p-12 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-[0.16em] text-[#E5A900] font-semibold">
                  Retail Stockist Onboarding
                </span>
                <h2 className="text-3xl sm:text-4xl font-semibold text-[#26362C] tracking-tight leading-snug">
                  Become a ProteinOva Retail Partner
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#717B74] leading-relaxed">
                Join our growing network of supermarkets, gourmet food boutiques, and neighborhood dairy stockists. We provide point-of-sale display materials, regular stocking, and direct dealer margins.
              </p>

              <div className="p-5 rounded-2xl bg-[#F4F7F4] border border-[#26362C]/06 space-y-3 text-xs text-[#26362C]">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E5A900]" />
                  <span>Free in-store shelf branding & posters</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E5A900]" />
                  <span>Flexible initial trial batches with return support</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E5A900]" />
                  <span>Customer referrals from our website store locator</span>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handlePartnerSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#26362C] mb-1.5">
                      Store / Supermarket Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={partnerForm.shopName}
                      onChange={(e) => setPartnerForm({ ...partnerForm, shopName: e.target.value })}
                      placeholder="e.g. Fresh Daily Supermarket"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#26362C]/10 text-xs text-[#26362C] focus:outline-none focus:border-[#E5A900]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#26362C] mb-1.5">
                      Owner / Manager Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={partnerForm.ownerName}
                      onChange={(e) => setPartnerForm({ ...partnerForm, ownerName: e.target.value })}
                      placeholder="e.g. S. Venkatesh"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#26362C]/10 text-xs text-[#26362C] focus:outline-none focus:border-[#E5A900]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#26362C] mb-1.5">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={partnerForm.mobile}
                      onChange={(e) => setPartnerForm({ ...partnerForm, mobile: e.target.value })}
                      placeholder="+91 97912 20001"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#26362C]/10 text-xs text-[#26362C] focus:outline-none focus:border-[#E5A900]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#26362C] mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={partnerForm.email}
                      onChange={(e) => setPartnerForm({ ...partnerForm, email: e.target.value })}
                      placeholder="store@domain.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#26362C]/10 text-xs text-[#26362C] focus:outline-none focus:border-[#E5A900]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#26362C] mb-1.5">
                      Store Location / Area *
                    </label>
                    <input
                      type="text"
                      required
                      value={partnerForm.location}
                      onChange={(e) => setPartnerForm({ ...partnerForm, location: e.target.value })}
                      placeholder="e.g. Salem Road, Namakkal"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#26362C]/10 text-xs text-[#26362C] focus:outline-none focus:border-[#E5A900]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#26362C] mb-1.5">
                      Estimated Weekly Sales
                    </label>
                    <select
                      value={partnerForm.estimatedRequirement}
                      onChange={(e) => setPartnerForm({ ...partnerForm, estimatedRequirement: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#26362C]/10 text-xs text-[#26362C] focus:outline-none focus:border-[#E5A900]"
                    >
                      <option value="20 to 50 Packs / week">20 to 50 Packs / week</option>
                      <option value="50 to 150 Packs / week">50 to 150 Packs / week</option>
                      <option value="150+ Packs / week">150+ Packs / week</option>
                    </select>
                  </div>
                </div>

                {/* Varieties Checkboxes */}
                <div>
                  <label className="block text-xs font-semibold text-[#26362C] mb-2">
                    Egg Varieties for Your Shelves
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {PRODUCTS.map((p) => {
                      const isSelected = partnerForm.interestedProducts.includes(p.id);
                      return (
                        <button
                          type="button"
                          key={p.id}
                          onClick={() => togglePartnerProduct(p.id)}
                          className={`p-2.5 rounded-xl text-left text-xs font-medium border transition-all cursor-pointer flex items-center justify-between ${
                            isSelected
                              ? 'bg-[#E5A900]/15 border-[#E5A900] text-[#26362C] font-semibold'
                              : 'bg-[#FAF8F5] border-[#26362C]/08 text-[#717B74]'
                          }`}
                        >
                          <span>{p.name}</span>
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-[#E5A900]" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#26362C] mb-1.5">
                    Store Type & Remarks
                  </label>
                  <textarea
                    rows={2}
                    value={partnerForm.additionalInfo}
                    onChange={(e) => setPartnerForm({ ...partnerForm, additionalInfo: e.target.value })}
                    placeholder="E.g., Existing egg brands stocked, chiller display space, opening hours..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF8F5] border border-[#26362C]/10 text-xs text-[#26362C] focus:outline-none focus:border-[#E5A900]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={submittingPartner}
                    className="w-full py-3.5 rounded-full bg-[#26362C] hover:bg-[#E5A900] hover:text-[#26362C] text-white text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs disabled:opacity-50"
                  >
                    <span>{submittingPartner ? 'Submitting Application...' : 'Submit Retail Partner Application'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};
