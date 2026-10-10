import React, { useState, useEffect } from 'react';
import {
  ShieldCheck,
  FileText,
  Award,
  ChevronRight,
  ArrowLeft,
  Mail,
  Building2,
  CheckCircle2,
  AlertCircle,
  Truck,
  Scale,
  ExternalLink,
  Download,
  Printer
} from 'lucide-react';

export type LegalTabType = 'privacy-policy' | 'terms-of-supply' | 'food-safety';

interface LegalViewProps {
  activeSection: LegalTabType;
  onSectionChange: (section: LegalTabType) => void;
  onNavigateHome: () => void;
  onNavigateContact: () => void;
}

export const LegalView: React.FC<LegalViewProps> = ({
  activeSection,
  onSectionChange,
  onNavigateHome,
  onNavigateContact,
}) => {
  const [activeTab, setActiveTab] = useState<LegalTabType>(activeSection);

  useEffect(() => {
    setActiveTab(activeSection);
  }, [activeSection]);

  const handleTabClick = (tab: LegalTabType) => {
    setActiveTab(tab);
    onSectionChange(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-full bg-[#f8faf9] min-h-screen pb-20">
      {/* Hero Header */}
      <section className="bg-gradient-to-b from-[#073b2a] to-[#0a4d37] text-white pt-10 pb-16 px-4 sm:px-6 lg:px-8 border-b border-[#002418]">
        <div className="max-w-7xl mx-auto">
          {/* Breadcrumb & Back */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 text-sm">
            <nav className="flex items-center gap-2 text-[#bbeed5]">
              <button
                onClick={onNavigateHome}
                className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5 font-medium"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Home</span>
              </button>
              <ChevronRight className="w-3.5 h-3.5 text-[#76a68f]" />
              <span className="text-[#fdc826] font-semibold">Legal & Compliance</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#76a68f]" />
              <span className="text-white capitalize">
                {activeTab === 'privacy-policy'
                  ? 'Privacy Policy'
                  : activeTab === 'terms-of-supply'
                  ? 'Terms of Supply'
                  : 'Food Safety Standards'}
              </span>
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-white transition-colors cursor-pointer"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Document</span>
              </button>
            </div>
          </div>

          {/* Title Header */}
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#002418]/70 border border-white/15 text-[#fdc826] text-xs font-bold uppercase tracking-wider mb-4">
              <Scale className="w-3.5 h-3.5" />
              Corporate Governance & Compliance Portal
            </div>
            <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4">
              Proteinova Legal & Regulatory Documentation
            </h1>
            <p className="text-base sm:text-lg text-[#bbeed5] leading-relaxed">
              Official legal policies, contractual terms of agricultural supply, and clinical food hygiene standards established by Proteinova Food Products Private Limited.
            </p>
          </div>

          {/* Document Switcher Tabs */}
          <div className="mt-10 flex flex-wrap gap-2.5 sm:gap-4 p-1.5 bg-[#002418]/60 backdrop-blur-md rounded-2xl border border-white/10 max-w-3xl">
            <button
              onClick={() => handleTabClick('privacy-policy')}
              className={`flex-1 min-w-[200px] flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeTab === 'privacy-policy'
                  ? 'bg-[#fdc826] text-[#002418] shadow-md scale-[1.01]'
                  : 'text-[#bbeed5] hover:text-white hover:bg-white/5'
              }`}
            >
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Privacy Policy</span>
            </button>

            <button
              onClick={() => handleTabClick('terms-of-supply')}
              className={`flex-1 min-w-[200px] flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeTab === 'terms-of-supply'
                  ? 'bg-[#fdc826] text-[#002418] shadow-md scale-[1.01]'
                  : 'text-[#bbeed5] hover:text-white hover:bg-white/5'
              }`}
            >
              <FileText className="w-4 h-4 shrink-0" />
              <span>Terms of Supply</span>
            </button>

            <button
              onClick={() => handleTabClick('food-safety')}
              className={`flex-1 min-w-[200px] flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all cursor-pointer ${
                activeTab === 'food-safety'
                  ? 'bg-[#fdc826] text-[#002418] shadow-md scale-[1.01]'
                  : 'text-[#bbeed5] hover:text-white hover:bg-white/5'
              }`}
            >
              <Award className="w-4 h-4 shrink-0" />
              <span>Food Safety Standards</span>
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Quick Sidebar Info & Verification */}
          <aside className="lg:col-span-4 space-y-6">
            {/* Quick summary widget */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80">
              <h3 className="text-xs font-bold text-[#073b2a] uppercase tracking-wider mb-4 flex items-center gap-2">
                <Building2 className="w-4 h-4 text-[#fdc826]" />
                Corporate Legal Entity
              </h3>
              <div className="space-y-3 text-sm text-[#414944]">
                <div>
                  <span className="block text-xs font-semibold text-slate-500">Registered Name</span>
                  <span className="font-bold text-[#002418]">Proteinova Food Products Pvt. Ltd.</span>
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-500">Governing Jurisdiction</span>
                  <span>Republic of India (State of Tamil Nadu)</span>
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-500">FSSAI Central License</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-[#073b2a]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    FSSAI Standard Compliant
                  </span>
                </div>
                <div>
                  <span className="block text-xs font-semibold text-slate-500">Quality Certifications</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-[#073b2a]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    ISO 22000:2018 Certified
                  </span>
                </div>
                <div className="pt-2 border-t border-slate-100">
                  <span className="block text-xs font-semibold text-slate-500">Effective Revision Date</span>
                  <span className="text-xs font-medium text-slate-700">October 1, 2026</span>
                </div>
              </div>
            </div>

            {/* Quick Trust Guarantee Callout */}
            <div className="bg-[#ecf7e9] rounded-2xl p-6 border border-[#bbeed5] text-[#002418]">
              <div className="w-10 h-10 rounded-xl bg-[#073b2a] text-[#fdc826] flex items-center justify-center mb-3">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-headline font-bold text-base mb-1.5 text-[#002418]">
                Biological Integrity Guarantee
              </h4>
              <p className="text-xs text-[#2b4c3e] leading-relaxed mb-4">
                Every carton, crate, and batch of Proteinova eggs is produced under bio-secure avian management with zero hormone usage, zero prophylactic antibiotics, and audited cold-chain temperature traceability.
              </p>
              <div className="flex flex-col gap-2 text-xs font-semibold text-[#073b2a]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Zero Antibiotic Residues</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Acoustic & Optical Candling Grading</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Farm-to-Door Cold-Chain Integrity</span>
                </div>
              </div>
            </div>

            {/* Legal Support & Inquiries */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/80">
              <h4 className="font-headline font-bold text-sm text-[#002418] mb-2 flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#073b2a]" />
                Legal & Grievance Contact
              </h4>
              <p className="text-xs text-[#414944] leading-relaxed mb-4">
                For commercial wholesale agreements, compliance verifications, or privacy grievances, please address our compliance department.
              </p>
              <button
                onClick={onNavigateContact}
                className="w-full py-2.5 px-4 rounded-xl bg-[#073b2a] hover:bg-[#002418] text-white text-xs font-bold transition-colors cursor-pointer text-center"
              >
                Contact Legal Counsel & Grievance Officer
              </button>
            </div>
          </aside>

          {/* Right Column: Full Formal Legal Document */}
          <main className="lg:col-span-8 bg-white rounded-2xl p-6 sm:p-10 shadow-sm border border-slate-200/80 text-[#151e16]">
            {/* ========================================================== */}
            {/* 1. PRIVACY POLICY DOCUMENT */}
            {/* ========================================================== */}
            {activeTab === 'privacy-policy' && (
              <article className="prose prose-slate max-w-none">
                <div className="border-b border-slate-200 pb-6 mb-8">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#073b2a] mb-1">
                    <span>Corporate Document Ref: PFP-POL-PRV-2026.01</span>
                  </div>
                  <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-[#002418]">
                    Master Privacy Policy & Data Protection Notice
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">
                    Last Revised: October 2026 | Effective for Proteinova Food Products Private Limited, its subsidiaries, web platforms, and mobile service systems.
                  </p>
                </div>

                <div className="space-y-8 text-sm sm:text-base text-[#343e37] leading-relaxed">
                  <section>
                    <h3 className="text-lg font-bold text-[#002418] mb-3 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-[#ecf7e9] text-[#073b2a] text-xs font-bold flex items-center justify-center shrink-0">
                        1
                      </span>
                      Preamble & Regulatory Framework
                    </h3>
                    <p className="mb-3">
                      Proteinova Food Products Private Limited (hereinafter referred to as <strong>“Proteinova”</strong>, <strong>“we”</strong>, <strong>“us”</strong>, or <strong>“our”</strong>) operates the official web portal at <strong>proteinovafoods.com</strong>, associated institutional ordering portals, and the <strong>Proteinova Connect</strong> operational software.
                    </p>
                    <p>
                      This Privacy Policy governs the collection, processing, storage, and dissemination of personal data collected from retail consumers, wholesale B2B institutional partners, culinary contributors, and web visitors, in compliance with the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>, the <strong>Information Technology Act, 2000</strong>, and the <strong>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011</strong>.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-[#002418] mb-3 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-[#ecf7e9] text-[#073b2a] text-xs font-bold flex items-center justify-center shrink-0">
                        2
                      </span>
                      Categories of Information Collected
                    </h3>
                    <p className="mb-3">
                      We collect information strictly necessary to provide food distribution services, culinary community engagement, and farm-gate supply operations:
                    </p>
                    <div className="bg-[#f8faf9] rounded-xl p-4 border border-slate-200/70 space-y-3">
                      <div>
                        <strong className="text-[#002418]">A. Commercial & Institutional Partner Data:</strong> Business entity name, Goods & Services Tax Identification Number (GSTIN), Food Safety and Standards Authority of India (FSSAI) license details, dispatch depot addresses, contact person details, and commercial billing preferences.
                      </div>
                      <div>
                        <strong className="text-[#002418]">B. Consumer & Inquiry Data:</strong> Full legal name, electronic mail address, telephone numbers, and delivery physical address when requesting direct supply or sample hampers.
                      </div>
                      <div>
                        <strong className="text-[#002418]">C. Culinary Content Submissions:</strong> Recipe submissions, culinary preparation photographs, social media handles (e.g., Instagram/LinkedIn), and testimonials submitted via our interactive portal.
                      </div>
                      <div>
                        <strong className="text-[#002418]">D. Technical & Telemetry Data:</strong> Internet Protocol (IP) addresses, browser telemetry, device metadata, operating system specs, and session cookies for load balancing and cyber defense.
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-[#002418] mb-3 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-[#ecf7e9] text-[#073b2a] text-xs font-bold flex items-center justify-center shrink-0">
                        3
                      </span>
                      Lawful Purpose of Processing
                    </h3>
                    <p className="mb-2">Your data is processed strictly for legitimate agricultural and commercial objectives:</p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>Facilitating scheduled refrigerated deliveries, order tracking, and farm-gate supply operations.</li>
                      <li>Verifying institutional accounts (Hotels, Restaurants, Bakeries, Supermarkets) and issuing valid tax invoices.</li>
                      <li>Conducting nutritional community events, home-chef hampers distributions, and consumer culinary inquiries.</li>
                      <li>Ensuring traceability and food recall capability in strict adherence to statutory FSSAI and ISO 22000 quality mandates.</li>
                      <li>Detecting, preventing, and prosecuting unauthorized fraudulent inquiries or cybersecurity vulnerabilities.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-[#002418] mb-3 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-[#ecf7e9] text-[#073b2a] text-xs font-bold flex items-center justify-center shrink-0">
                        4
                      </span>
                      Zero Commercial Sale & Third-Party Disclosure Policy
                    </h3>
                    <p className="mb-3">
                      <strong>Proteinova maintains an absolute zero-monetization policy regarding user data.</strong> We do not rent, trade, lease, or sell your personal or commercial data to third-party advertising brokers or data aggregation syndicates.
                    </p>
                    <p>
                      Disclosure is confined solely to:
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5 mt-2">
                      <li><strong>Authorized Cold-Chain Logistics Operators:</strong> For executing physical deliveries of perishable egg consignments.</li>
                      <li><strong>Statutory & Regulatory Authorities:</strong> Where mandated by Indian judicial subpoenas, FSSAI regulatory investigations, or tax audit mandates under applicable law.</li>
                      <li><strong>Cloud Infrastructure Providers:</strong> ISO/IEC 27001-certified enterprise hosting environments utilizing TLS cryptographic encryption.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-[#002418] mb-3 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-[#ecf7e9] text-[#073b2a] text-xs font-bold flex items-center justify-center shrink-0">
                        5
                      </span>
                      Information Security & Cryptographic Safeguards
                    </h3>
                    <p>
                      We enforce enterprise-grade administrative, physical, and technological safeguards to shield your data against unauthorized destruction, alteration, or exfiltration. All data in transit across our web portals is encrypted using Transport Layer Security (TLS 1.3). Internal access to institutional accounts and partner directories is restricted to authorized personnel governed by strict non-disclosure obligations.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-[#002418] mb-3 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-[#ecf7e9] text-[#073b2a] text-xs font-bold flex items-center justify-center shrink-0">
                        6
                      </span>
                      Data Subject Rights under the DPDP Act
                    </h3>
                    <p className="mb-2">
                      As a Data Principal under Indian law, you possess enforceable rights regarding your information:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
                      <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                        <strong className="block text-xs uppercase tracking-wider text-[#073b2a] mb-1">Right to Access & Rectify</strong>
                        <span className="text-xs text-slate-600">Request a complete copy of personal records or update erroneous billing addresses.</span>
                      </div>
                      <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                        <strong className="block text-xs uppercase tracking-wider text-[#073b2a] mb-1">Right to Erasure</strong>
                        <span className="text-xs text-slate-600">Request permanent deletion of non-statutory records once trade obligations expire.</span>
                      </div>
                      <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                        <strong className="block text-xs uppercase tracking-wider text-[#073b2a] mb-1">Right to Revoke Consent</strong>
                        <span className="text-xs text-slate-600">Opt out of culinary marketing, newsletters, or recipe promotion features at any time.</span>
                      </div>
                      <div className="p-3.5 rounded-xl border border-slate-200 bg-white">
                        <strong className="block text-xs uppercase tracking-wider text-[#073b2a] mb-1">Right to Grievance Redressal</strong>
                        <span className="text-xs text-slate-600">Formal grievance adjudication handled within 30 statutory business days.</span>
                      </div>
                    </div>
                  </section>

                  <section className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                    <h3 className="text-base font-bold text-[#002418] mb-2 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#073b2a]" />
                      Designated Grievance & Compliance Officer
                    </h3>
                    <p className="text-xs text-slate-600 mb-3">
                      In accordance with the Information Technology Act 2000 and DPDP Act 2023, queries or complaints regarding data privacy should be directed to:
                    </p>
                    <div className="text-xs space-y-1 text-slate-800 font-medium">
                      <p><strong>Designation:</strong> Data Protection & Grievance Redressal Officer</p>
                      <p><strong>Entity:</strong> Proteinova Food Products Private Limited</p>
                      <p><strong>Corporate Address:</strong> Coimbatore & Chennai Regional Operations, Tamil Nadu, India</p>
                      <p><strong>Email Address:</strong> <a href="mailto:compliance@proteinovafoods.com" className="text-[#073b2a] underline font-bold">compliance@proteinovafoods.com</a></p>
                    </div>
                  </section>
                </div>
              </article>
            )}

            {/* ========================================================== */}
            {/* 2. TERMS OF SUPPLY & SERVICE DOCUMENT */}
            {/* ========================================================== */}
            {activeTab === 'terms-of-supply' && (
              <article className="prose prose-slate max-w-none">
                <div className="border-b border-slate-200 pb-6 mb-8">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#073b2a] mb-1">
                    <span>Corporate Document Ref: PFP-TERMS-SUP-2026.02</span>
                  </div>
                  <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-[#002418]">
                    Master Commercial Terms of Supply & Distribution
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">
                    Applicable to all B2B Institutional Accounts, Wholesale Procurements, Retail Partners, and Direct Supply Orders.
                  </p>
                </div>

                <div className="space-y-8 text-sm sm:text-base text-[#343e37] leading-relaxed">
                  <section>
                    <h3 className="text-lg font-bold text-[#002418] mb-3 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-[#ecf7e9] text-[#073b2a] text-xs font-bold flex items-center justify-center shrink-0">
                        1
                      </span>
                      Contractual Scope & Binding Agreement
                    </h3>
                    <p className="mb-3">
                      These Terms of Supply constitute a legally binding agreement between <strong>Proteinova Food Products Private Limited</strong> (<strong>“Supplier”</strong>) and the purchasing entity (<strong>“Buyer”</strong> or <strong>“Customer”</strong>), encompassing any wholesale order, institutional supply contract, or direct procurement of shell eggs, specialty poultry items, or pasteurized egg derivatives.
                    </p>
                    <p>
                      By tendering a Purchase Order (PO), registering via our web portal, or taking delivery of Proteinova consignments, the Buyer unequivocally accepts these terms to the exclusion of any contradictory customer terms unless executed in a bilateral written addendum signed by an authorized director of Proteinova.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-[#002418] mb-3 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-[#ecf7e9] text-[#073b2a] text-xs font-bold flex items-center justify-center shrink-0">
                        2
                      </span>
                      Agricultural Commodity Nature & Pricing Adjustments
                    </h3>
                    <p className="mb-3">
                      Fresh shell eggs are live biological commodities subject to national agricultural market benchmarks (NECC) and farm-gate production cycles:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Spot vs Contract Tariffs:</strong> Orders placed outside standing annual supply agreements are invoiced at prevailing wholesale rate cards confirmed at order confirmation.</li>
                      <li><strong>Statutory Levies:</strong> Prices quoted are exclusive or inclusive of applicable GST, agricultural market cesses, and refrigerated logistics surcharges as enumerated in commercial invoices.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-[#002418] mb-3 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-[#ecf7e9] text-[#073b2a] text-xs font-bold flex items-center justify-center shrink-0">
                        3
                      </span>
                      Cold-Chain Logistics, Delivery & Handover
                    </h3>
                    <p className="mb-3">
                      Proteinova guarantees temperature-monitored refrigerated dispatch up to the Buyer’s designated receiving dock:
                    </p>
                    <div className="bg-[#f8faf9] rounded-xl p-4 border border-slate-200/70 space-y-2.5">
                      <div>
                        <strong className="text-[#002418]">A. Receiving Dock Protocols:</strong> The Buyer must make personnel available during designated delivery windows. Delays exceeding 45 minutes attributable to dock congestion may incur detention charges.
                      </div>
                      <div>
                        <strong className="text-[#002418]">B. Transfer of Risk:</strong> Risk of physical loss, egg shell micro-fractures, temperature abuse, or contamination transfers entirely to the Buyer immediately upon physical offloading from our refrigerated vehicles.
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-[#002418] mb-3 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-[#ecf7e9] text-[#073b2a] text-xs font-bold flex items-center justify-center shrink-0">
                        4
                      </span>
                      Mandatory Inspection & Perishable Damage Policy
                    </h3>
                    <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200 mb-3">
                      <div className="flex items-center gap-2 font-bold text-amber-900 text-sm mb-1">
                        <AlertCircle className="w-4 h-4 text-amber-700 shrink-0" />
                        Crucial Notice on Biological Perishables
                      </div>
                      <p className="text-xs text-amber-800 leading-relaxed">
                        Due to the perishable nature of agricultural poultry items and hygiene chain sensitivities, all physical inspection must take place at the moment of handover. No returns can be entertained once items enter customer storage facilities where ambient temperatures cannot be verified.
                      </p>
                    </div>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>In-Transit Breakage Allowance:</strong> Standard industry breakage tolerance of up to <strong>1.5%</strong> is recognized across palletized shell egg transportation. Breakage exceeding this threshold must be endorsed on the physical Delivery Challan / Proof of Delivery (POD) signed by our driver.</li>
                      <li><strong>Latent Defect Window:</strong> Claims concerning grading discrepancies or internal egg quality must be submitted within <strong>24 hours</strong> of dispatch accompanied by lot codes, high-resolution photographic evidence, and cold-room temperature log sheets.</li>
                      <li><strong>Resolution:</strong> Validated claims will be reimbursed via commercial credit note applicable to subsequent consignments.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-[#002418] mb-3 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-[#ecf7e9] text-[#073b2a] text-xs font-bold flex items-center justify-center shrink-0">
                        5
                      </span>
                      Buyer Storage Obligations & Food Hygiene Custody
                    </h3>
                    <p>
                      The Buyer explicitly covenants to store all shell eggs in dry, clean, insect-free refrigeration maintained consistently between <strong>4°C and 15°C</strong> with relative humidity below 80%. Exposure to direct solar radiation, sudden thermal fluctuations causing shell sweating/condensation, or co-storage alongside pungent volatile chemicals voids all freshness warranties.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-[#002418] mb-3 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-[#ecf7e9] text-[#073b2a] text-xs font-bold flex items-center justify-center shrink-0">
                        6
                      </span>
                      Payment Terms, Title & Interest on Overdue Balances
                    </h3>
                    <p className="mb-2">
                      Unless credit terms are sanctioned in writing:
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5">
                      <li>All institutional invoices are payable within agreed credit tenure (7, 15, or 30 days).</li>
                      <li>Title to all delivered goods remains with Proteinova until full invoice realization.</li>
                      <li>Overdue invoices accrue commercial interest at <strong>18% per annum</strong> computed on daily balance from due date until settlement.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-[#002418] mb-3 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-[#ecf7e9] text-[#073b2a] text-xs font-bold flex items-center justify-center shrink-0">
                        7
                      </span>
                      Agricultural Force Majeure & Governing Jurisdiction
                    </h3>
                    <p className="mb-3">
                      Neither party shall be liable for non-performance occasioned by events beyond reasonable foresight, including statutory avian influenza culling orders, government blockades, severe veterinary quarantine mandates, national logistics strikes, or natural climatic catastrophes.
                    </p>
                    <p>
                      Any unresolved disputes arising out of commercial supply shall be subject to the exclusive jurisdiction of the competent courts in <strong>Chennai / Coimbatore, Tamil Nadu, India</strong>.
                    </p>
                  </section>
                </div>
              </article>
            )}

            {/* ========================================================== */}
            {/* 3. FOOD SAFETY STANDARDS DOCUMENT */}
            {/* ========================================================== */}
            {activeTab === 'food-safety' && (
              <article className="prose prose-slate max-w-none">
                <div className="border-b border-slate-200 pb-6 mb-8">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#073b2a] mb-1">
                    <span>Quality Assurance Code: PFP-QA-STD-2026.03</span>
                  </div>
                  <h2 className="font-headline text-2xl sm:text-3xl font-extrabold text-[#002418]">
                    Food Safety Standards & Quality Assurance Charter
                  </h2>
                  <p className="text-sm text-slate-500 mt-1">
                    Rigorous Clinical Hygiene, ISO 22000 Protocols, and Laboratory Testing Standards for Proteinova Nutrition.
                  </p>
                </div>

                <div className="space-y-8 text-sm sm:text-base text-[#343e37] leading-relaxed">
                  <section>
                    <h3 className="text-lg font-bold text-[#002418] mb-3 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-[#ecf7e9] text-[#073b2a] text-xs font-bold flex items-center justify-center shrink-0">
                        1
                      </span>
                      Core Scientific Quality Commitment
                    </h3>
                    <p className="mb-3">
                      Proteinova Food Products Private Limited operates under a fundamental commitment: to transform poultry nutrition in India from an unorganized commodity into a clinically certified, hygienically packaged, and nutrient-dense dietary essential.
                    </p>
                    <p>
                      Our farm management, bird nutritional formulation, automated processing, and distribution conform strictly to <strong>FSSAI Food Safety and Standards (Food Products Standards and Food Additives) Regulations</strong> and <strong>ISO 22000:2018 Food Safety Management Systems</strong>.
                    </p>
                  </section>

                  {/* Pillars Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6 not-prose">
                    <div className="p-4 rounded-xl bg-[#ecf7e9] border border-[#bbeed5] flex gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#073b2a] text-[#fdc826] flex items-center justify-center shrink-0">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#002418] text-sm">ISO 22000:2018 Certified</h4>
                        <p className="text-xs text-[#2b4c3e] mt-1">
                          Full Hazard Analysis Critical Control Point (HACCP) systematic preventive protocols from flock feed to sealed consumer carton.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#ecf7e9] border border-[#bbeed5] flex gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#073b2a] text-[#fdc826] flex items-center justify-center shrink-0">
                        <ShieldCheck className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#002418] text-sm">Zero Antibiotic Residue (ABR)</h4>
                        <p className="text-xs text-[#2b4c3e] mt-1">
                          Zero prophylactic antibiotics, zero growth promoters, and zero hormone usage throughout flock maturation cycles.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#ecf7e9] border border-[#bbeed5] flex gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#073b2a] text-[#fdc826] flex items-center justify-center shrink-0">
                        <Truck className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#002418] text-sm">Active Cold-Chain Protocol</h4>
                        <p className="text-xs text-[#2b4c3e] mt-1">
                          Continuous temperature-controlled transport preventing condensation and bacterial migration through porous eggshell membranes.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-[#ecf7e9] border border-[#bbeed5] flex gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#073b2a] text-[#fdc826] flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-[#002418] text-sm">Clinical UV Disinfection</h4>
                        <p className="text-xs text-[#2b4c3e] mt-1">
                          Advanced surface sanitation removing microbial contamination and dust without compromising the natural protective cuticle.
                        </p>
                      </div>
                    </div>
                  </div>

                  <section>
                    <h3 className="text-lg font-bold text-[#002418] mb-3 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-[#ecf7e9] text-[#073b2a] text-xs font-bold flex items-center justify-center shrink-0">
                        2
                      </span>
                      Bio-Secured Avian Husbandry & Natural Feed Rations
                    </h3>
                    <p className="mb-3">
                      Safety starts with the biological wellness of the flock:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                      <li><strong>Closed-Biosecurity Environments:</strong> Closed farms protected from wild migratory birds, rodents, and external environmental contaminants.</li>
                      <li><strong>100% Vegetarian Mineral-Enriched Diet:</strong> Flocks receive custom formulated rations containing clean grains, organic selenium, marigold extracts (for natural rich yolk carotenoids), and purified water.</li>
                      <li><strong>Veterinary Supervision:</strong> Continuous health telemetry overseen by certified avian veterinarians conducting routine serological screenings.</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-[#002418] mb-3 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-[#ecf7e9] text-[#073b2a] text-xs font-bold flex items-center justify-center shrink-0">
                        3
                      </span>
                      Automated Optical & Acoustic Candling
                    </h3>
                    <p className="mb-3">
                      Before packaging, every egg passes through high-precision automated grading lines:
                    </p>
                    <div className="bg-[#f8faf9] rounded-xl p-4 border border-slate-200/70 space-y-2 text-sm">
                      <p><strong>A. Acoustic Crack Detection:</strong> Identifies invisible micro-fractures in shells that could permit bacterial entry.</p>
                      <p><strong>B. Optical Candling:</strong> Scans internal yolk integrity, checks air cell depth, and eliminates blood spots or meat spots.</p>
                      <p><strong>C. Electronic Weight Sorting:</strong> Accurately sorts eggs into precise uniform weight classifications (Classic, Medium, Large, Extra Large).</p>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-[#002418] mb-3 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-[#ecf7e9] text-[#073b2a] text-xs font-bold flex items-center justify-center shrink-0">
                        4
                      </span>
                      Independent Laboratory Testing & Compliance Verification
                    </h3>
                    <p className="mb-3">
                      Every batch is backed by certified NABL-accredited third-party laboratory audits validating:
                    </p>
                    <div className="overflow-x-auto not-prose border border-slate-200 rounded-xl">
                      <table className="w-full text-left text-xs">
                        <thead className="bg-[#073b2a] text-white">
                          <tr>
                            <th className="p-3">Safety Parameter</th>
                            <th className="p-3">Regulatory Benchmark</th>
                            <th className="p-3">Proteinova Standard</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 text-slate-700 bg-white">
                          <tr>
                            <td className="p-3 font-semibold text-[#002418]">Salmonella spp.</td>
                            <td className="p-3">Absent in 25g (FSSAI)</td>
                            <td className="p-3 text-emerald-700 font-bold">100% Negative (Nil Detectable)</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold text-[#002418]">Antibiotic Residues (Tetracyclines, Fluoroquinolones)</td>
                            <td className="p-3">&lt; Maximum Residue Limit (MRL)</td>
                            <td className="p-3 text-emerald-700 font-bold">Zero Residue (Non-Detectable)</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold text-[#002418]">Heavy Metals (Lead, Cadmium, Arsenic)</td>
                            <td className="p-3">&lt; 0.1 mg/kg limit</td>
                            <td className="p-3 text-emerald-700 font-bold">Below Analytical Detection Limits</td>
                          </tr>
                          <tr>
                            <td className="p-3 font-semibold text-[#002418]">Cold-Chain Transport Storage</td>
                            <td className="p-3">Recommended &lt; 20°C</td>
                            <td className="p-3 text-emerald-700 font-bold">Continuous 4°C - 8°C Monitored</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-lg font-bold text-[#002418] mb-3 flex items-center gap-2">
                      <span className="w-7 h-7 rounded-lg bg-[#ecf7e9] text-[#073b2a] text-xs font-bold flex items-center justify-center shrink-0">
                        5
                      </span>
                      Traceability & Safe Handling Guidelines for Consumers
                    </h3>
                    <p className="mb-2">
                      To preserve freshness once received:
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
                      <li>Always store eggs pointed-end down in refrigerator racks to keep the air pocket centered.</li>
                      <li>Never wash shell eggs before storing; washing strips the natural cuticle layer and permits airborne moisture penetration.</li>
                      <li>Check the printed batch code and Best Before date on every carton.</li>
                    </ul>
                  </section>
                </div>
              </article>
            )}

            {/* Bottom Back Button & Action bar */}
            <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={onNavigateHome}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Return to Homepage</span>
              </button>

              <button
                onClick={onNavigateContact}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#073b2a] hover:bg-[#002418] text-white text-xs font-bold transition-all shadow-md cursor-pointer"
              >
                <span>Have Compliance Questions? Contact Us</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};
