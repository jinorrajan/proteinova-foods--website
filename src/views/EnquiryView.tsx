import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, RefreshCw } from 'lucide-react';
import { PRODUCTS } from '../data/productsData';

interface EnquiryViewProps {
  initialProductId?: string;
  onNavigate: (view: string, params?: any) => void;
}

export const EnquiryView: React.FC<EnquiryViewProps> = ({ initialProductId, onNavigate }) => {
  const [selectedProduct, setSelectedProduct] = useState(initialProductId || 'brown-eggs');
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    enquiryType: 'Individual Product Enquiry',
    estimatedQuantity: '2 to 5 Packs / week',
    location: '',
    message: '',
    privacyConsent: true,
  });

  const [submittedData, setSubmittedData] = useState<any | null>(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (initialProductId) {
      setSelectedProduct(initialProductId);
    }
  }, [initialProductId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      const conf = {
        refNumber: `POV-ENQ-${Math.floor(100000 + Math.random() * 900000)}`,
        product: PRODUCTS.find((p) => p.id === selectedProduct)?.name || 'Egg Variety',
        ...formData,
      };
      setSubmittedData(conf);

      // Trigger celebratory confetti
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 },
        colors: ['#E58A1F', '#2C1F18', '#D8C3A5'],
      });
    }, 600);
  };

  return (
    <div className="pt-32 pb-24 space-y-16 max-w-4xl mx-auto px-6 sm:px-8">
      {!submittedData ? (
        /* ================= SCREEN 12: PRODUCT ENQUIRY ================= */
        <div className="space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-[0.2em] text-[#E58A1F] font-semibold">
              Product Enquiry
            </span>
            <h1 className="text-4xl sm:text-5xl font-serif text-[#2C1F18] font-light">
              Tell Us What You're Looking For.
            </h1>
            <p className="text-sm sm:text-base text-[#5E5147] font-light max-w-lg mx-auto">
              Interested in one of our egg varieties? Share your requirements and our team will get in touch with you.
            </p>
          </div>

          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#2C1F18]/08 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Product Selector */}
              <div>
                <label className="block text-xs font-semibold text-[#2C1F18] mb-2">
                  Select Egg Variety *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {PRODUCTS.map((p) => {
                    const isSelected = selectedProduct === p.id;
                    return (
                      <button
                        type="button"
                        key={p.id}
                        onClick={() => setSelectedProduct(p.id)}
                        className={`p-3 rounded-xl text-center text-xs font-medium border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-[#E58A1F] text-white border-[#E58A1F] shadow-xs'
                            : 'bg-[#FAF7F2] text-[#483931] border-[#2C1F18]/08 hover:border-[#E58A1F]'
                        }`}
                      >
                        <span className="block font-bold">{p.name}</span>
                        <span className="text-[10px] opacity-80">{p.specs.proteinPerEgg}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#2C1F18] mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Priya Sharma"
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
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@email.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#2C1F18]/10 text-xs text-[#2C1F18] focus:outline-none focus:border-[#E58A1F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2C1F18] mb-1.5">
                    Enquiry Type
                  </label>
                  <select
                    value={formData.enquiryType}
                    onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#2C1F18]/10 text-xs text-[#2C1F18] focus:outline-none focus:border-[#E58A1F]"
                  >
                    <option value="Individual Product Enquiry">Individual / Household Enquiry</option>
                    <option value="Wholesale Enquiry">Wholesale Supply</option>
                    <option value="Retail Partnership">Retail Partnership</option>
                    <option value="General Product Information">General Product Information</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#2C1F18] mb-1.5">
                    Location / City *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    placeholder="e.g. Namakkal, Tamil Nadu"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#26362C]/10 text-xs text-[#26362C] focus:outline-none focus:border-[#E5A900]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2C1F18] mb-1.5">
                    Estimated Requirement
                  </label>
                  <input
                    type="text"
                    value={formData.estimatedQuantity}
                    onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                    placeholder="e.g. 5 cartons / week"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#2C1F18]/10 text-xs text-[#2C1F18] focus:outline-none focus:border-[#E58A1F]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2C1F18] mb-1.5">
                  Additional Notes
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share any special preferences, packaging questions, or instructions..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#FAF7F2] border border-[#2C1F18]/10 text-xs text-[#2C1F18] focus:outline-none focus:border-[#E58A1F]"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="consent"
                  checked={formData.privacyConsent}
                  onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                  className="rounded text-[#E58A1F] focus:ring-[#E58A1F]"
                />
                <label htmlFor="consent" className="text-xs text-[#7E7268]">
                  I agree to receive product communications from ProteinOva via phone, email, or WhatsApp.
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 rounded-xl bg-[#2C1F18] hover:bg-[#E58A1F] text-white text-xs font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs disabled:opacity-50"
                >
                  <span>{submitting ? 'Submitting Enquiry...' : 'Submit Enquiry'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        /* ================= SCREEN 14: ENQUIRY CONFIRMATION ================= */
        <div className="bg-white rounded-3xl border border-[#2C1F18]/08 p-8 sm:p-14 shadow-sm text-center space-y-8 animate-in zoom-in-95 duration-200">
          <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-100 shadow-xs">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-[#E58A1F] font-semibold">
              Enquiry Received
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#2C1F18]">
              Thank You for Contacting ProteinOva!
            </h2>
            <p className="text-sm sm:text-base text-[#5E5147] font-light max-w-lg mx-auto">
              Your enquiry has been successfully logged. Our customer desk will review your details and reach out to you shortly.
            </p>
          </div>

          {/* Submitted Summary Card */}
          <div className="max-w-md mx-auto p-6 bg-[#FAF7F2] rounded-2xl border border-[#2C1F18]/06 text-left space-y-3 text-xs">
            <div className="flex items-center justify-between pb-2 border-b border-[#2C1F18]/08">
              <span className="text-[#7E7268]">Reference Number:</span>
              <span className="font-mono font-bold text-[#E58A1F]">{submittedData.refNumber}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#7E7268]">Enquiry Type:</span>
              <span className="font-semibold text-[#2C1F18]">{submittedData.enquiryType}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#7E7268]">Product Variety:</span>
              <span className="font-semibold text-[#2C1F18]">{submittedData.product}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-[#7E7268]">Contact Person:</span>
              <span className="text-[#2C1F18]">{submittedData.fullName} ({submittedData.mobile})</span>
            </div>
          </div>

          {/* Direct Dispatch Options */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
            <a
              href={`mailto:connect@proteinova.in?subject=${encodeURIComponent(`[${submittedData.refNumber}] ${submittedData.enquiryType || 'Enquiry'} from ${submittedData.fullName}`)}&body=${encodeURIComponent(`Hello ProteinOva Team,\n\nRef: ${submittedData.refNumber}\nName: ${submittedData.fullName}\nMobile: ${submittedData.mobile}\nLocation: ${submittedData.location || ''}\nProduct: ${submittedData.product || ''}\nMessage: ${submittedData.message || ''}\n\nSent via ProteinOva Website`)}`}
              className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#26362C] hover:bg-[#E5A900] hover:text-[#26362C] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-xs"
            >
              <span>Email: connect@proteinova.in</span>
            </a>

            <a
              href={`https://wa.me/919791220001?text=${encodeURIComponent(`*ProteinOva Enquiry [${submittedData.refNumber}]*\n*Name:* ${submittedData.fullName}\n*Mobile:* ${submittedData.mobile}\n*Product:* ${submittedData.product || ''}\n*Location:* ${submittedData.location || ''}\n*Message:* ${submittedData.message || ''}`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-xs"
            >
              <span>WhatsApp: +91 9791220001</span>
            </a>
          </div>

          {/* Navigation Actions */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('home')}
              className="px-6 py-2.5 rounded-full bg-[#26362C] text-white text-xs font-semibold hover:bg-[#E5A900] hover:text-[#26362C] transition-colors cursor-pointer"
            >
              Return to Homepage
            </button>
            <button
              onClick={() => onNavigate('products')}
              className="px-6 py-2.5 rounded-full bg-white border border-[#26362C]/15 text-[#26362C] text-xs font-semibold hover:border-[#E5A900] transition-colors cursor-pointer"
            >
              Explore Products
            </button>
            <button
              onClick={() => onNavigate('recipes')}
              className="px-6 py-2.5 rounded-full bg-white border border-[#26362C]/15 text-[#26362C] text-xs font-semibold hover:border-[#E5A900] transition-colors cursor-pointer"
            >
              Discover Recipes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
