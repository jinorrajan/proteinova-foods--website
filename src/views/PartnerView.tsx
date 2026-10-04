import React, { useState } from 'react';
import {
  Building2,
  Truck,
  CheckCircle2,
  Send,
  ShieldCheck,
  Clock,
} from 'lucide-react';

export const PartnerView: React.FC = () => {
  const [city, setCity] = useState('');
  const [partnershipType, setPartnershipType] = useState('Retailer');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const handleSubmitInquiry = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const businessName = formData.get('businessName') as string;
    const contactPerson = formData.get('contactPerson') as string;
    const phoneNumber = formData.get('phoneNumber') as string;
    const email = formData.get('email') as string;
    const requirements = formData.get('requirements') as string;
    
    const subject = `Partnership Inquiry: ${partnershipType} - ${businessName}`;
    const body = `Partnership Type: ${partnershipType}
Business Name: ${businessName}
Contact Person: ${contactPerson}
Phone Number: ${phoneNumber}
Email: ${email}
City: ${city}

Special Packaging Requirements:
${requirements || 'None'}
`;
    
    window.location.href = `mailto:proteinovafoods@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setInquirySubmitted(true);
  };

  return (
    <div className="w-full bg-[#ffffff] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ecf7e9] text-[#073b2a] text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Institutional Supply & B2B Wholesale</span>
          </div>
          <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-[#002418] font-extrabold tracking-tight mb-4">
            Direct Farm-Gate Consignment for Premium Culinary Establishments.
          </h1>
          <p className="text-base text-[#414944] leading-relaxed">
            Reliable, refrigerated, scheduled egg shipments for 5-star hotels, artisanal bakeries, cloud kitchen networks, and modern trade retail shelves across India.
          </p>
        </div>

        {/* Inquiry Form */}
        <div className="max-w-2xl mb-16">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
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
                  <label className="block text-xs font-bold text-[#002418] uppercase tracking-wider mb-2">
                    Partnership Type *
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {['Retailer', 'Distributor', 'Franchise', 'B2B/Corporate Supply'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setPartnershipType(type)}
                        className={`p-2.5 rounded-xl text-center text-[11px] sm:text-xs font-bold transition-all cursor-pointer border ${
                          partnershipType === type
                            ? 'bg-[#002418] text-white border-[#002418] shadow-xs'
                            : 'bg-[#f6f7f5] text-[#414944] border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#002418] uppercase tracking-wider mb-1">
                    Business / Hotel / Bakery Name *
                  </label>
                  <input
                    type="text"
                    name="businessName"
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
                      name="contactPerson"
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
                      name="phoneNumber"
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
                    name="email"
                    required
                    placeholder="procurement@bakery.com"
                    className="w-full bg-[#f6f7f5] border border-slate-200 px-3.5 py-2 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#073b2a]/30"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#002418] uppercase tracking-wider mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="e.g. Mumbai"
                    className="w-full bg-[#f6f7f5] border border-slate-200 px-3.5 py-2 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#073b2a]/30"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#002418] uppercase tracking-wider mb-1">
                    Special Packaging Requirements
                  </label>
                  <textarea
                    name="requirements"
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
                    <span>Request Rate Card & Sample Crate</span>
                  </button>
                </div>

                <p className="text-[10px] text-[#717974] text-center">
                  NDA & Quality SLAs provided. All shipments include Batch COA (Certificate of Analysis).
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
