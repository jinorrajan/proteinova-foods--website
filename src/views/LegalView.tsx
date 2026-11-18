import React, { useState } from 'react';
import { Shield, FileText } from 'lucide-react';

interface LegalViewProps {
  initialTab?: 'privacy' | 'terms';
}

export const LegalView: React.FC<LegalViewProps> = ({ initialTab = 'privacy' }) => {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>(initialTab);

  return (
    <div className="pt-32 pb-24 space-y-12 max-w-4xl mx-auto px-6 sm:px-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="text-xs uppercase tracking-[0.2em] text-[#E58A1F] font-semibold">
          Legal & Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-serif text-[#2C1F18] font-light">
          {activeTab === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
        </h1>
        <p className="text-xs text-[#7E7268]">Last Updated: November 2026</p>
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-center gap-3">
        <button
          onClick={() => setActiveTab('privacy')}
          className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
            activeTab === 'privacy'
              ? 'bg-[#2C1F18] text-white shadow-xs'
              : 'bg-white text-[#483931] border border-[#2C1F18]/10 hover:border-[#E58A1F]'
          }`}
        >
          <Shield className="w-3.5 h-3.5" />
          <span>Privacy Policy</span>
        </button>

        <button
          onClick={() => setActiveTab('terms')}
          className={`flex items-center gap-2 px-5 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
            activeTab === 'terms'
              ? 'bg-[#2C1F18] text-white shadow-xs'
              : 'bg-white text-[#483931] border border-[#2C1F18]/10 hover:border-[#E58A1F]'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>Terms & Conditions</span>
        </button>
      </div>

      {/* Body Card */}
      <div className="bg-white rounded-3xl border border-[#2C1F18]/08 p-8 sm:p-12 shadow-sm space-y-8 text-xs sm:text-sm text-[#483931] leading-relaxed">
        {activeTab === 'privacy' ? (
          /* ================= PRIVACY POLICY ================= */
          <div className="space-y-6">
            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#2C1F18]">1. Information We Collect</h2>
              <p>
                Proteinova Food Products Private Limited collects contact information submitted voluntarily through our enquiry forms, including your full name, email address, mobile phone number, business entity name, city location, and specific product requirements.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#2C1F18]">2. Why We Collect Enquiry Data</h2>
              <p>
                We use this information exclusively to process and respond to your product inquiries, generate customized wholesale supply quotations, confirm retail dealership partnerships, and provide requested customer support.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#2C1F18]">3. WhatsApp & Email Communications</h2>
              <p>
                When you initiate a WhatsApp conversation or request a quote via our online forms, our sales or customer operations team uses these channels strictly to facilitate commercial correspondence. We do not sell, rent, or trade your contact details to third-party advertisers.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#2C1F18]">4. Data Protection & Retention</h2>
              <p>
                Your data is securely stored on enterprise servers protected by industry-standard encryption protocols. We retain your commercial enquiry records only as long as necessary to fulfill business transactions and regulatory tax/accounting obligations.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#2C1F18]">5. Your Privacy Rights</h2>
              <p>
                You have the right to request access to the personal data we hold about you, request corrections to inaccurate records, or request deletion of your information by emailing <strong className="text-[#26362C]">connect@proteinova.in</strong>.
              </p>
            </section>
          </div>
        ) : (
          /* ================= TERMS & CONDITIONS ================= */
          <div className="space-y-6">
            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#2C1F18]">1. Website Usage Terms</h2>
              <p>
                Welcome to the official website of Proteinova Food Products Private Limited. By browsing, accessing, or submitting inquiries through this website, you agree to comply with and be bound by these Terms & Conditions.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#2C1F18]">2. Product Information Accuracy</h2>
              <p>
                While we strive for complete accuracy in all product specifications, egg grading metrics, and nutritional values, natural agricultural products are subject to seasonal biological variances. All claims reflect standardized laboratory averages.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#2C1F18]">3. Recipe Content & Intellectual Property</h2>
              <p>
                The recipes, culinary photography, preparation guides, and trademarks displayed on this website are the proprietary property of ProteinOva. Visitors are permitted to view, share, and print recipes for personal household cooking only.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#2C1F18]">4. Enquiry Submissions & Supply Availability</h2>
              <p>
                Submitting a product or wholesale enquiry does not constitute a legally binding supply contract. Commercial supply agreements, minimum order commitments, and delivery schedules are confirmed only through formal written sales orders issued by Proteinova Food Products Pvt. Ltd.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-[#2C1F18]">5. Governing Jurisdiction</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of India. Any legal disputes arising out of the website or business transactions shall be subject to the exclusive jurisdiction of the courts in Namakkal, Tamil Nadu.
              </p>
            </section>
          </div>
        )}
      </div>
    </div>
  );
};
