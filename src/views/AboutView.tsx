import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  ArrowUpRight, 
  Package, 
  Truck, 
  Store, 
  Layers, 
  Building2, 
  Compass, 
  Sparkles,
  MapPin,
  HeartHandshake,
  Award
} from 'lucide-react';
import { MagneticButton } from '../components/MagneticButton';

interface AboutViewProps {
  onNavigate: (view: string, params?: any) => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onNavigate }) => {
  const whatWeDoList = [
    {
      icon: Store,
      title: 'Retail Egg Products',
      desc: 'Conveniently packed eggs designed for households, supermarkets, and everyday consumers seeking fresh nutrition.',
      tag: 'Consumer Retail',
    },
    {
      icon: Building2,
      title: 'Wholesale & B2B Supply',
      desc: 'Bulk egg supply solutions for hotels, restaurants, bakeries, caterers, supermarkets, retailers, and institutional buyers.',
      tag: 'Commercial Scale',
    },
    {
      icon: Layers,
      title: 'Multiple Egg Varieties',
      desc: 'A diverse portfolio of White, Brown, Country, Quail, and Duck Eggs to meet different culinary and dietary preferences.',
      tag: '5 Verified Varieties',
    },
    {
      icon: Package,
      title: 'Grading & Packaging',
      desc: 'Precision egg selection, size-based grading, and protective packaging solutions tailored to retail and commercial requirements.',
      tag: 'Hygienic Grading',
    },
    {
      icon: Truck,
      title: 'Distribution & Supply Management',
      desc: 'Coordinated sourcing and delivery planning to support consistent availability and dependable long-term business relationships.',
      tag: 'Dependable Logistics',
    },
  ];

  const missionPillars = [
    'Quality-focused sourcing and selection',
    'Consistent egg grading and handling',
    'Hygienic and protective packaging',
    'Dependable wholesale and retail supply',
    'Customer-focused service',
    'Long-term partnerships with producers and buyers',
  ];

  return (
    <div className="pt-28 sm:pt-36 pb-28 space-y-24 sm:space-y-32 max-w-7xl mx-auto px-6 sm:px-8">
      {/* ================= 1. HERO: CENTERED SYMMETRICAL EDITORIAL STAGE ================= */}
      <section className="space-y-12">
        {/* Centered Grand Title & Tagline (Zero Dead Space) */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#E5A900]">
            <img src="/logo.png" alt="ProteinOva Logo" className="w-4 h-5 object-contain" />
            <span>About ProteinOva • Pure Protein. Pure Power.</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-[-0.04em] text-[#26362C] leading-[1.08]">
            Delivering Quality Eggs. <br />
            <span className="text-[#E5A900]">Building Trust Every Day.</span>
          </h1>

          <p className="text-base sm:text-xl text-[#717B74] font-normal leading-relaxed pt-1">
            <strong className="text-[#26362C] font-semibold">Proteinova Food Products Private Limited</strong> is a growing Indian egg brand headquartered in <strong className="text-[#26362C] font-semibold">Namakkal, Tamil Nadu</strong> — one of India's leading poultry production hubs.
          </p>
        </div>

        {/* 3-Column Symmetrical Hero Bento (Fills Entire Screen Width Evenly) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Bento Card 1 (Left - 4 cols): Sourcing & Grading Foundation */}
          <div className="lg:col-span-4 bg-white p-7 sm:p-8 rounded-3xl border border-[#26362C]/10 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E5A900] block">
                01 • Sourcing & Grading
              </span>
              <h3 className="text-xl font-semibold text-[#26362C] tracking-tight leading-snug">
                Organized Sourcing & Hygienic Handling
              </h3>
              <p className="text-xs sm:text-sm text-[#717B74] leading-relaxed">
                Built on industry experience and a commitment to quality, Proteinova specializes in the <strong className="text-[#26362C]">sourcing, grading, packaging, wholesale, retail, and distribution of eggs</strong>, serving both individual consumers and commercial businesses.
              </p>
            </div>

            <div className="pt-4 border-t border-[#26362C]/06 space-y-2 text-xs text-[#26362C]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E5A900]" />
                <span>Automated Optical & UV-C Grading</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E5A900]" />
                <span>Acoustic Micro-Crack Verification</span>
              </div>
            </div>
          </div>

          {/* Bento Card 2 (Center - 4 cols): Visual Hero Image */}
          <div className="lg:col-span-4 relative rounded-3xl overflow-hidden shadow-md border border-[#26362C]/10 min-h-[360px] flex flex-col justify-end group">
            <img
              src="/products/Country.jpeg"
              alt="ProteinOva Sourcing and Farm Heritage"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#26362C]/90 via-[#26362C]/30 to-transparent" />
            
            <div className="relative z-10 p-6 text-white space-y-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-white/20 backdrop-blur-md text-[#F4C430]">
                <MapPin className="w-3 h-3" />
                <span>Namakkal Hub • 637001</span>
              </span>
              <h4 className="text-lg font-semibold text-white">
                5 Verified Varieties
              </h4>
              <p className="text-xs text-[#D2D8D4] leading-relaxed">
                White, Brown, Country, Quail, and Duck Eggs to suit everyday nutrition, household preferences, and food-service needs.
              </p>
            </div>
          </div>

          {/* Bento Card 3 (Right - 4 cols): Distribution & Scale */}
          <div className="lg:col-span-4 bg-white p-7 sm:p-8 rounded-3xl border border-[#26362C]/10 shadow-xs flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E5A900] block">
                02 • Distribution & Scale
              </span>
              <h3 className="text-xl font-semibold text-[#26362C] tracking-tight leading-snug">
                From Everyday Essentials to Bulk Volume
              </h3>
              <p className="text-xs sm:text-sm text-[#717B74] leading-relaxed">
                From families purchasing daily essentials to supermarkets, hotels, restaurants, bakeries, caterers, and institutional buyers requiring large quantities, Proteinova delivers consistency, convenience, and value.
              </p>
            </div>

            <div className="pt-4 border-t border-[#26362C]/06 space-y-2 text-xs text-[#26362C]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E5A900]" />
                <span>Retail Bio-Pulp & Crate Packaging</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#E5A900]" />
                <span>Scheduled Cold-Chain Logistics</span>
              </div>
            </div>
          </div>
        </div>

        {/* Full-Width Core Philosophy Banner (Grounded in Deep Green) */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#26362C] text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-md border border-[#26362C]">
          <div className="space-y-2 max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.18em] text-[#F4C430] font-semibold block">
              Our Guiding Philosophy
            </span>
            <p className="text-base sm:text-lg font-medium leading-relaxed text-[#FCFBF7]">
              "At Proteinova, we believe that an everyday essential deserves exceptional attention. Every egg represents our dedication to building lasting customer relationships through quality products and reliable service."
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-xs font-semibold text-[#F4C430] border border-white/15">
              <ShieldCheck className="w-4 h-4" />
              <span>Certified Class-A Quality</span>
            </span>
          </div>
        </div>
      </section>

      {/* ================= 2. OUR STORY ================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center border-t border-[#26362C]/08 pt-16 sm:pt-20">
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.16em] text-[#E5A900] font-semibold">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.035em] text-[#26362C] leading-tight">
              Rooted in Namakkal. <br />
              <span className="text-[#717B74]">Driven by a Bigger Vision.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#26362C]/80 leading-relaxed">
            Proteinova was founded with a clear vision: to transform the traditional egg supply business into a modern, organized, and customer-focused brand.
          </p>

          <p className="text-sm sm:text-base text-[#26362C]/80 leading-relaxed">
            With Namakkal's strong poultry ecosystem at the heart of our operations, we are building a business model that seamlessly connects sourcing, quality selection, grading, packaging, and distribution.
          </p>

          <p className="text-sm sm:text-base text-[#26362C]/80 leading-relaxed">
            Our journey is driven by a simple belief — customers deserve clarity, consistency, and confidence in the eggs they purchase. By combining practical industry knowledge with modern retail and distribution practices, we are working to make quality eggs more accessible to homes and businesses.
          </p>

          <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#26362C]/10 space-y-1.5">
            <span className="text-[11px] uppercase tracking-[0.18em] text-[#E5A900] font-semibold">
              Our Core Ambition
            </span>
            <p className="text-base sm:text-lg font-medium text-[#26362C] leading-snug">
              "Our ambition is not simply to sell eggs, but to build a trusted brand that people and businesses can rely on every day."
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-3xl overflow-hidden bg-white border border-[#26362C]/10 shadow-lg p-2">
            <img
              src="/products/Brown.jpeg"
              alt="ProteinOva Modern Egg Packaging"
              className="w-full h-80 sm:h-96 object-cover rounded-2xl"
            />
          </div>
          <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-[#26362C]/08 flex items-center justify-between text-xs text-[#26362C]">
            <span className="font-semibold">Pure Protein • Pure Power</span>
            <span className="text-[#717B74]">Namakkal Logistics</span>
          </div>
        </div>
      </section>

      {/* ================= 3. WHAT WE DO ================= */}
      <section className="space-y-10 border-t border-[#26362C]/08 pt-16 sm:pt-20">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs uppercase tracking-[0.16em] text-[#E5A900] font-semibold">
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.035em] text-[#26362C]">
            One Brand. <br />
            <span className="text-[#E5A900]">Complete Egg Solutions.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#717B74]">
            From families purchasing daily essentials to commercial food-service kitchens requiring dependable bulk supply, we coordinate every stage of handling.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whatWeDoList.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-7 rounded-3xl border border-[#26362C]/10 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between space-y-5"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-[#E5A900]/10 text-[#E5A900] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold text-[#717B74] uppercase tracking-wider bg-[#26362C]/05 px-3 py-1 rounded-full">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-[#26362C] tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#717B74] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#26362C]/06">
                  <span className="text-xs font-semibold text-[#26362C] flex items-center gap-1">
                    <span>Verified Quality Standard</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#E5A900]" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ================= 4. VISION & MISSION ================= */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch border-t border-[#26362C]/08 pt-16 sm:pt-20">
        {/* Vision Card */}
        <div className="lg:col-span-5 bg-gradient-to-br from-[#26362C] to-[#1c2921] text-white p-8 sm:p-12 rounded-3xl shadow-xl flex flex-col justify-between space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#F4C430] text-xs font-semibold uppercase tracking-wider">
              <Compass className="w-3.5 h-3.5" />
              <span>Our Vision</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white leading-snug">
              To Become a Trusted Name in Everyday Nutrition.
            </h3>

            <p className="text-sm text-[#D2D8D4] leading-relaxed">
              To build Proteinova into a leading, trusted egg brand by making quality eggs accessible to households and businesses through an organized retail, wholesale, and distribution network.
            </p>
          </div>

          <div className="pt-6 border-t border-white/10 flex items-center gap-3">
            <img src="/logo.png" alt="ProteinOva Logo" className="w-8 h-10 object-contain brightness-110" />
            <div>
              <span className="text-sm font-bold text-white block">ProteinOva Standard</span>
              <span className="text-xs text-[#A3ADA6]">Farm to Fork Integrity</span>
            </div>
          </div>
        </div>

        {/* Mission Card */}
        <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-3xl border border-[#26362C]/10 shadow-xs flex flex-col justify-between space-y-8">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E5A900]/10 text-[#E5A900] text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Mission</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#26362C]">
              Quality. Consistency. Convenience.
            </h3>

            <p className="text-sm text-[#717B74]">
              We deliver long-term value to customers and enterprise buyers through focused execution across six key pillars:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {missionPillars.map((pillar) => (
                <div key={pillar} className="flex items-start gap-2.5 p-3 rounded-2xl bg-[#FCFBF7] border border-[#26362C]/06">
                  <CheckCircle2 className="w-4 h-4 text-[#E5A900] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#26362C] font-medium leading-snug">{pillar}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-[#26362C]/08 flex items-center justify-between text-xs text-[#717B74]">
            <span>Continuous Improvement & Rigor</span>
            <span className="font-semibold text-[#26362C]">Namakkal Hub to National Reach</span>
          </div>
        </div>
      </section>

      {/* ================= 5. OUR COMMITMENT ================= */}
      <section className="bg-[#FAF8F5] p-8 sm:p-14 rounded-3xl border border-[#26362C]/10 space-y-6">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs uppercase tracking-[0.16em] text-[#E5A900] font-semibold">
            Our Commitment
          </span>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-[-0.035em] text-[#26362C]">
            Every Egg Matters.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-[#26362C]/85 leading-relaxed">
          <p>
            We understand that quality, consistency, and reliability are essential — whether a customer purchases a small retail pack for their family breakfast or a commercial business requires tens of thousands of eggs weekly.
          </p>
          <p>
            Our approach focuses on responsible handling, clear product specifications, suitable protective packaging, and reliable order coordination. As Proteinova grows, we remain committed to improving our processes, strengthening our distribution network, and creating a better egg-buying experience.
          </p>
        </div>

        <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="p-4 bg-white rounded-2xl border border-[#26362C]/08 text-center space-y-1">
            <span className="text-2xl font-bold text-[#E5A900]">100%</span>
            <span className="block text-[11px] uppercase tracking-wider text-[#717B74] font-semibold">Sanitized Cuticle</span>
          </div>
          <div className="p-4 bg-white rounded-2xl border border-[#26362C]/08 text-center space-y-1">
            <span className="text-2xl font-bold text-[#26362C]">Zero</span>
            <span className="block text-[11px] uppercase tracking-wider text-[#717B74] font-semibold">Micro-Cracks</span>
          </div>
          <div className="p-4 bg-white rounded-2xl border border-[#26362C]/08 text-center space-y-1">
            <span className="text-2xl font-bold text-[#E5A900]">5 Types</span>
            <span className="block text-[11px] uppercase tracking-wider text-[#717B74] font-semibold">Verified Varieties</span>
          </div>
          <div className="p-4 bg-white rounded-2xl border border-[#26362C]/08 text-center space-y-1">
            <span className="text-2xl font-bold text-[#26362C]">Daily</span>
            <span className="block text-[11px] uppercase tracking-wider text-[#717B74] font-semibold">Cold Distribution</span>
          </div>
        </div>
      </section>

      {/* ================= 6. GROW WITH PROTEINOVA (CTA) ================= */}
      <section className="bg-[#26362C] text-white rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden">
        <div className="max-w-3xl space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#F4C430] text-xs font-semibold uppercase tracking-wider">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>Grow With ProteinOva</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.035em] text-white leading-tight">
            Your Trusted Partner for <br />
            <span className="text-[#F4C430]">Everyday Eggs and Bulk Supply.</span>
          </h2>

          <p className="text-base text-[#D2D8D4] leading-relaxed max-w-2xl">
            Whether you are a consumer, supermarket, retailer, distributor, restaurant, bakery, or institutional buyer, Proteinova is ready to support your egg requirements. Together, let's build a stronger and more dependable egg supply network.
          </p>

          <div className="pt-4 flex flex-wrap items-center gap-4">
            <MagneticButton>
              <button
                onClick={() => onNavigate('products')}
                className="px-6 py-3.5 rounded-full bg-[#F4C430] hover:bg-[#E5A900] text-[#26362C] text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-md flex items-center gap-2"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </MagneticButton>

            <button
              onClick={() => onNavigate('business', { tab: 'partner' })}
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
            >
              Partner With Us
            </button>

            <button
              onClick={() => onNavigate('business', { tab: 'wholesale' })}
              className="px-6 py-3.5 rounded-full bg-transparent hover:bg-white/05 text-[#F4C430] border border-[#F4C430]/40 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1.5"
            >
              <span>B2B Enquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Decorative background watermark */}
        <div className="absolute right-4 -bottom-10 opacity-10 pointer-events-none select-none hidden md:block">
          <img src="/logo.png" alt="ProteinOva Logo" className="w-96 h-96 object-contain" />
        </div>
      </section>
    </div>
  );
};
