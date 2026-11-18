import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ArrowUpRight, ShieldCheck, Sparkles, Clock, ChefHat, CheckCircle2, MessageCircle, Package, Truck, Award, ChevronRight } from 'lucide-react';
import { Egg3DCanvas } from '../components/Egg3DCanvas';
import { MagneticButton } from '../components/MagneticButton';
import { PRODUCTS } from '../data/productsData';
import { RECIPES_DATA } from '../data/recipesData';

interface HomeViewProps {
  onNavigate: (view: string, params?: any) => void;
  onOpenRecipe: (recipe: any) => void;
}

const VARIETY_DATA = {
  brown: {
    name: 'Brown Eggs',
    num: '01',
    subtitle: 'Everyday Classic & Baking',
    yolk: 'Deep Golden Yolk (Roche 12)',
    protein: '6.8g Pure Protein',
    glow: 'rgba(244, 196, 48, 0.16)',
  },
  white: {
    name: 'White Eggs',
    num: '02',
    subtitle: 'Pastry Precision & Breakfast',
    yolk: 'Crisp Sunlit Amber',
    protein: '6.5g Pure Protein',
    glow: 'rgba(229, 169, 0, 0.14)',
  },
  country: {
    name: 'Country Eggs',
    num: '03',
    subtitle: 'Free-Range Native Forage',
    yolk: 'Dark Sunset Amber',
    protein: '7.0g Dense Protein',
    glow: 'rgba(38, 54, 44, 0.12)',
  },
  duck: {
    name: 'Duck Eggs',
    num: '04',
    subtitle: 'Velvety Richness & Custards',
    yolk: 'Creamy Velvety Center',
    protein: '9.0g High-Density',
    glow: 'rgba(244, 196, 48, 0.14)',
  },
  quail: {
    name: 'Quail Eggs',
    num: '05',
    subtitle: 'Petite Gourmet Canapés',
    yolk: 'Dense Mineral-Rich Yolk',
    protein: '1.2g per mini-egg',
    glow: 'rgba(229, 169, 0, 0.12)',
  },
};

export const HomeView: React.FC<HomeViewProps> = ({ onNavigate, onOpenRecipe }) => {
  const [activeVariety, setActiveVariety] = useState<'brown' | 'white' | 'country' | 'duck' | 'quail'>('brown');

  const currentInfo = VARIETY_DATA[activeVariety];
  const featuredRecipes = RECIPES_DATA.slice(0, 4);

  return (
    <div className="space-y-28 sm:space-y-36 pb-24 overflow-x-hidden">
      {/* ================= 1. HERO STAGE ================= */}
      <section className="relative pt-32 sm:pt-36 pb-12 flex flex-col justify-between overflow-hidden">
        {/* Soft Ambient Radial Glow */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[140px] pointer-events-none"
          animate={{ backgroundColor: currentInfo.glow }}
          transition={{ duration: 0.8 }}
        />

        {/* Hero Top Content (Masked Reveal) */}
        <div className="max-w-4xl mx-auto px-6 w-full text-center space-y-3 relative z-10">
        {/* Masked Slide-up Headline */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-[-0.04em] text-[#26362C] leading-[1.04]"
            >
              Good Eggs. <br />
              <span className="font-semibold text-[#E5A900]">Better Everyday</span> Meals.
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-base sm:text-xl text-[#717B74] font-normal max-w-xl mx-auto leading-relaxed pt-1"
          >
            Discover five verified egg varieties, graded with automated optical precision for everyday households and commercial kitchens.
          </motion.p>
        </div>

        {/* 3D Showcase (Balanced 3-Column Stage) */}
        <div className="max-w-6xl mx-auto px-6 w-full my-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          {/* Left Column Annotations */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:flex lg:col-span-3 flex-col gap-9 text-right"
          >
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-[0.14em] text-[#E5A900] font-semibold block">
                01 / Yolk Pigment
              </span>
              <h3 className="text-sm font-semibold text-[#26362C]">
                {currentInfo.yolk}
              </h3>
              <p className="text-xs text-[#717B74] leading-relaxed">
                Natural feed carotenoids without artificial color enhancers.
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-[0.14em] text-[#E5A900] font-semibold block">
                02 / Bioactive Density
              </span>
              <h3 className="text-sm font-semibold text-[#26362C]">
                {currentInfo.protein}
              </h3>
              <p className="text-xs text-[#717B74] leading-relaxed">
                Optimal albumin viscosity for muscular recovery and baking.
              </p>
            </div>
          </motion.div>

          {/* Center Column: 3D Egg Canvas */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="lg:col-span-6 flex flex-col items-center justify-center"
          >
            <div className="w-full max-w-[440px] h-[360px] sm:h-[420px] flex items-center justify-center">
              <Egg3DCanvas eggVariety={activeVariety} className="w-full h-full" />
            </div>
          </motion.div>

          {/* Right Column Annotations */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:flex lg:col-span-3 flex-col gap-9 text-left"
          >
            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-[0.14em] text-[#E5A900] font-semibold block">
                03 / Cuticle Hygiene
              </span>
              <h3 className="text-sm font-semibold text-[#26362C]">
                Non-Thermal UV Sanitized
              </h3>
              <p className="text-xs text-[#717B74] leading-relaxed">
                99.9% surface disinfection while preserving the natural shell barrier.
              </p>
            </div>

            <div className="space-y-1">
              <span className="text-[11px] uppercase tracking-[0.14em] text-[#E5A900] font-semibold block">
                04 / Acoustic Tested
              </span>
              <h3 className="text-sm font-semibold text-[#26362C]">
                Zero Micro-Cracks
              </h3>
              <p className="text-xs text-[#717B74] leading-relaxed">
                Automated sound-wave tapping eliminates hidden structural faults.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Central Action Buttons with Magnetic Physics */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="relative z-10 flex flex-wrap items-center justify-center gap-4 pt-1 pb-6"
        >
          <MagneticButton>
            <button
              onClick={() => onNavigate('products')}
              className="px-7 py-3.5 rounded-full bg-[#26362C] hover:bg-[#E5A900] hover:text-[#26362C] text-white text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 shadow-xs hover:shadow-md cursor-pointer group"
            >
              <span>Explore All 5 Varieties</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </MagneticButton>

          <MagneticButton>
            <button
              onClick={() => onNavigate('recipes')}
              className="px-6 py-3.5 rounded-full bg-white hover:bg-[#FCFBF7] text-[#26362C] border border-[#26362C]/15 text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 shadow-2xs cursor-pointer"
            >
              <ChefHat className="w-4 h-4 text-[#E5A900]" />
              <span>300+ Chef Recipes</span>
            </button>
          </MagneticButton>
        </motion.div>

        {/* Variety Dock (Apple Segmented Style) */}
        <div className="w-full border-y border-[#26362C]/10 bg-white/75 backdrop-blur-md relative z-20 mt-4">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between overflow-x-auto gap-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#717B74] shrink-0 hidden md:block">
              Select Variety:
            </span>

            <div className="flex items-center gap-1.5 sm:gap-2.5 mx-auto md:mx-0 bg-[#FCFBF7] p-1 rounded-full border border-[#26362C]/10">
              {(['brown', 'white', 'country', 'duck', 'quail'] as const).map((key) => {
                const item = VARIETY_DATA[key];
                const isActive = activeVariety === key;
                return (
                  <button
                    key={key}
                    onClick={() => setActiveVariety(key)}
                    className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[#26362C] text-[#F4C430] shadow-xs font-semibold'
                        : 'text-[#717B74] hover:text-[#26362C]'
                    }`}
                  >
                    <span className="text-[10px] opacity-70 font-mono">{item.num}</span>
                    <span className="whitespace-nowrap">{item.name}</span>
                  </button>
                );
              })}
            </div>

            <div className="hidden lg:flex items-center gap-1.5 text-xs text-[#717B74] shrink-0 font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#E5A900]" />
              <span>Interactive 3D Stage</span>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. SECTION 02: THE PROTEINOVA RANGE (STAGGERED BENTO) ================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#26362C]/10 pb-8"
        >
          <div className="space-y-2 max-w-xl">
            <span className="text-xs uppercase tracking-[0.14em] text-[#E5A900] font-semibold">
              Curated Specimen Library
            </span>
            <h2 className="text-4xl sm:text-5xl font-semibold tracking-[-0.035em] text-[#26362C]">
              A Variety for Every Need.
            </h2>
            <p className="text-base text-[#717B74] font-normal">
              Each egg category carries distinct yolk pigmentation, albumin density, and shell characteristics suited for specific recipes.
            </p>
          </div>

          <button
            onClick={() => onNavigate('products')}
            className="self-start md:self-end flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#26362C] hover:text-[#E5A900] transition-colors cursor-pointer group"
          >
            <span>Compare all varieties</span>
            <ChevronRight className="w-4 h-4 text-[#E5A900] group-hover:translate-x-0.5 transition-transform" />
          </button>
        </motion.div>

        {/* Staggered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PRODUCTS.map((prod, idx) => (
            <motion.div
              key={prod.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-3xl border border-[#26362C]/10 p-7 flex flex-col justify-between hover:border-[#E5A900]/60 transition-all hover:shadow-lg group"
            >
              <div className="space-y-5">
                <div className="w-full h-56 rounded-2xl overflow-hidden bg-[#FCFBF7] relative">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-[#26362C] shadow-2xs">
                    {prod.badge}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold tracking-[-0.03em] text-[#26362C] group-hover:text-[#E5A900] transition-colors">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-[#717B74] mt-1.5 line-clamp-2 leading-relaxed">
                    {prod.description}
                  </p>
                </div>

                <div className="p-3.5 bg-[#FCFBF7] rounded-2xl space-y-1.5 text-xs text-[#26362C] border border-[#26362C]/08">
                  <div className="flex items-center justify-between">
                    <span className="text-[#717B74]">Protein Density:</span>
                    <span className="font-semibold text-[#26362C]">{prod.specs.proteinPerEgg}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#717B74]">Yolk Profile:</span>
                    <span className="font-medium text-[#26362C] truncate max-w-[180px]">{prod.specs.yolkProfile}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-[#26362C]/08 flex items-center justify-between">
                <button
                  onClick={() => onNavigate('product-detail', { id: prod.id })}
                  className="text-xs font-semibold text-[#26362C] hover:text-[#E5A900] transition-colors cursor-pointer flex items-center gap-1"
                >
                  <span>Details & Specs</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onNavigate('enquiry', { productId: prod.id })}
                  className="px-4 py-2 rounded-full text-xs font-semibold bg-[#26362C] text-white hover:bg-[#E5A900] hover:text-[#26362C] transition-colors cursor-pointer shadow-2xs"
                >
                  Enquire
                </button>
              </div>
            </motion.div>
          ))}

          {/* 6th Card: Commercial Distribution & Palletizing */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-[#26362C] text-white rounded-3xl p-7 flex flex-col justify-between shadow-xl relative overflow-hidden"
          >
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.14em] text-[#F4C430] font-semibold">
                Commercial Logistics
              </span>
              <h3 className="text-3xl font-semibold tracking-[-0.03em] leading-snug">
                Cold-Chain Crating & Bulk Supply
              </h3>
              <p className="text-xs text-[#D2D8D4] leading-relaxed">
                Supplying hotels, bakeries, and retail chains with dependable morning deliveries and zero-damage guarantees.
              </p>

              <div className="space-y-2 text-xs text-[#FCFBF7] pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F4C430]" />
                  <span>Master cartons of 180 to 360 eggs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#F4C430]" />
                  <span>Tamper-evident sealed bio-cartons</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-4 border-t border-white/10">
              <button
                onClick={() => onNavigate('wholesale')}
                className="w-full py-3 rounded-full bg-[#F4C430] hover:bg-[#E5A900] text-[#26362C] text-xs font-semibold uppercase tracking-wider text-center transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-xs"
              >
                <span>Request B2B Wholesale Pricing</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= 3. SECTION 03: COMMERCIAL SUPPLY (WHOLESALE) ================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="bg-[#26362C] text-white rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden"
        >
          <div className="max-w-2xl space-y-6 relative z-10">
            <span className="text-xs uppercase tracking-[0.14em] text-[#F4C430] font-semibold">
              B2B Supply Partnerships
            </span>

            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.035em] leading-tight">
              Looking for an Egg <br />
              <span className="text-[#F4C430]">Supply Partner?</span>
            </h2>

            <p className="text-base text-[#D2D8D4] font-normal leading-relaxed">
              Whether you operate a supermarket chain, food manufacturing unit, or regional wholesale trade, connect with ProteinOva to discuss your exact volume schedules.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <div className="p-4 bg-white/08 rounded-2xl border border-white/10">
                <Package className="w-5 h-5 text-[#F4C430] mb-2" />
                <h4 className="text-sm font-semibold text-white">Wholesale Buyers</h4>
                <p className="text-xs text-[#D2D8D4] mt-1">Bulk cartons & verified grade consistency</p>
              </div>

              <div className="p-4 bg-white/08 rounded-2xl border border-white/10">
                <Truck className="w-5 h-5 text-[#F4C430] mb-2" />
                <h4 className="text-sm font-semibold text-white">Retail Stores</h4>
                <p className="text-xs text-[#D2D8D4] mt-1">Attractive shelf-ready retail packs</p>
              </div>

              <div className="p-4 bg-white/08 rounded-2xl border border-white/10">
                <Award className="w-5 h-5 text-[#F4C430] mb-2" />
                <h4 className="text-sm font-semibold text-white">Distributors</h4>
                <p className="text-xs text-[#D2D8D4] mt-1">Protected regional distribution rights</p>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3.5">
              <MagneticButton>
                <button
                  onClick={() => onNavigate('wholesale')}
                  className="px-6 py-3 rounded-full bg-[#F4C430] hover:bg-[#E5A900] text-[#26362C] text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-xs"
                >
                  Wholesale Enquiry
                </button>
              </MagneticButton>

              <button
                onClick={() => onNavigate('partner')}
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer"
              >
                Become a Retail Partner
              </button>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= 4. SECTION 04: RECIPE DISCOVERY ================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#26362C]/10 pb-8">
          <div className="space-y-2 max-w-xl">
            <span className="text-xs uppercase tracking-[0.14em] text-[#E5A900] font-semibold">
              The Kitchen Collection
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.035em] text-[#26362C]">
              Something Delicious Starts Here.
            </h2>
            <p className="text-base text-[#717B74]">
              Discover tested egg recipes from our 300+ document repository. Step-by-step instructions, preparation images, and ingredient yield scalers.
            </p>
          </div>

          <button
            onClick={() => onNavigate('recipes')}
            className="self-start md:self-end flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#26362C] hover:text-[#E5A900] transition-colors cursor-pointer group"
          >
            <span>Explore all 300+ dishes</span>
            <ChevronRight className="w-4 h-4 text-[#E5A900] group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Featured Recipes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredRecipes.map((rec, idx) => (
            <motion.div
              key={rec.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => onOpenRecipe(rec)}
              className="bg-white rounded-3xl border border-[#26362C]/10 overflow-hidden hover:border-[#E5A900]/60 transition-all hover:shadow-lg cursor-pointer group flex flex-col justify-between"
            >
              <div>
                <div className="w-full h-52 bg-[#FCFBF7] overflow-hidden relative">
                  <img
                    src={rec.image}
                    alt={rec.title}
                    className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-700"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/products/Brown.jpeg';
                    }}
                  />
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/95 text-[#26362C] shadow-2xs">
                    {rec.category}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-2 text-xs text-[#717B74]">
                    <span className="flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#E5A900]" />
                      {rec.timeMinutes} mins
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#26362C] group-hover:text-[#E5A900] transition-colors line-clamp-1">
                    {rec.title}
                  </h3>

                  <p className="text-xs text-[#717B74] line-clamp-2 leading-relaxed">
                    {rec.shortDesc}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-3 border-t border-[#26362C]/08 flex items-center justify-between text-xs font-semibold text-[#E5A900]">
                <span>Open Cooking Mode</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ================= 5. SECTION 05: ABOUT THE BRAND ================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-white rounded-3xl border border-[#26362C]/10 p-8 sm:p-14 shadow-sm"
        >
          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs uppercase tracking-[0.14em] text-[#E5A900] font-semibold">
              The ProteinOva Story
            </span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.035em] text-[#26362C]">
              More Than Just Eggs.
            </h2>

            <p className="text-base text-[#26362C] font-normal leading-relaxed">
              Proteinova Food Products Private Limited is built on a clear premise: something as simple as an egg should be guaranteed fresh, safely sanitized, and professionally distributed. Headquartered in Namakkal, Tamil Nadu, we bridge poultry producers and everyday buyers.
            </p>

            <p className="text-sm text-[#717B74] leading-relaxed">
              We work directly with certified farm partners to bring eggs through multi-stage candling, acoustic crack detection, hygienic UV sanitization, and temperature-controlled dispatch.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('about')}
                className="px-6 py-2.5 rounded-full bg-[#26362C] hover:bg-[#E5A900] hover:text-[#26362C] text-white text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 shadow-2xs"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="aspect-square rounded-3xl overflow-hidden bg-[#FCFBF7] border border-[#26362C]/10 shadow-sm">
              <img
                src="/products/Country.jpeg"
                alt="ProteinOva Sourcing and Quality"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= SECTION: FREQUENTLY ASKED QUESTIONS ================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 space-y-8">
        <div className="space-y-2 max-w-2xl">
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#E5A900] font-semibold block">
            FAQ / CUSTOMER AND BUYER ANSWERS
          </span>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.035em] text-[#26362C]">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#717B74] pt-1">
            Find answers about Proteinova eggs, packaging, storage, bulk supply and business partnerships.
          </p>
        </div>

        <div className="space-y-3 max-w-4xl">
          {[
            {
              q: 'What egg varieties does Proteinova offer?',
              a: 'White, Brown, Country, Quail and Duck Eggs, subject to availability.',
            },
            {
              q: 'What retail pack sizes are available?',
              a: 'Pack formats may include 6, 12 and 30 eggs depending on the variety.',
            },
            {
              q: 'Can I order eggs in bulk?',
              a: 'Yes. Please share the egg variety, grade, quantity and delivery location.',
            },
            {
              q: 'Does Proteinova supply supermarkets and restaurants?',
              a: 'Business buyers can enquire about supply terms and available products.',
            },
            {
              q: 'How should eggs be stored?',
              a: 'Follow product storage instructions and avoid using cracked or damaged eggs.',
            },
          ].map((item, idx) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="bg-[#F4F7F4] hover:bg-[#EEF4EF] transition-colors rounded-2xl p-5 sm:p-6 border border-[#26362C]/06 shadow-xs"
            >
              <h3 className="text-base sm:text-lg font-semibold text-[#26362C] tracking-tight">
                {item.q}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[#546258] leading-relaxed">
                {item.a}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="pt-2">
          <button
            onClick={() => onNavigate('faq')}
            className="px-6 py-2.5 rounded-full bg-white border border-[#26362C]/15 hover:border-[#E5A900] text-[#26362C] hover:text-[#E5A900] text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer flex items-center gap-2 shadow-2xs"
          >
            <span>Explore All 15+ Questions & Answers</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* ================= 6. SECTION 06: CONNECT WITH US ================= */}
      <section className="max-w-7xl mx-auto px-6 sm:px-8 text-center space-y-5">
        <span className="text-xs uppercase tracking-[0.14em] text-[#E5A900] font-semibold">
          Get in Touch
        </span>
        <h2 className="text-3xl sm:text-5xl font-semibold tracking-[-0.035em] text-[#26362C]">
          Let's Talk About Your Requirements.
        </h2>
        <p className="text-base text-[#717B74] max-w-xl mx-auto">
          Looking for our products, interested in wholesale supply, or want to become a retail partner? Our team is ready to assist you.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton>
            <button
              onClick={() => onNavigate('contact')}
              className="px-7 py-3.5 rounded-full bg-[#26362C] hover:bg-[#E5A900] hover:text-[#26362C] text-white text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer shadow-sm"
            >
              Send an Enquiry
            </button>
          </MagneticButton>

          <MagneticButton>
            <a
              href="https://wa.me/919791220001?text=Hello%20ProteinOva,%20I%20would%20like%20to%20discuss%20egg%20supply."
              target="_blank"
              rel="noopener noreferrer"
              className="px-7 py-3.5 rounded-full bg-white border border-[#26362C]/20 text-[#26362C] hover:border-[#E5A900] hover:text-[#E5A900] text-xs font-semibold uppercase tracking-wider transition-all flex items-center gap-2 shadow-2xs"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Us Directly</span>
            </a>
          </MagneticButton>
        </div>
      </section>
    </div>
  );
};
