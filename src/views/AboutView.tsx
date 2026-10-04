import React from 'react';
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  Truck,
  Store,
  PackageSearch,
  Target,
  Eye
} from 'lucide-react';

interface AboutViewProps {
  onNavigateRecipes: () => void;
  onNavigateProducts: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({
  onNavigateRecipes,
  onNavigateProducts,
}) => {
  const whatWeDo = [
    {
      icon: <Store className="w-6 h-6 text-[#fdc826]" />,
      title: 'Retail Eggs',
      desc: 'Conveniently packed eggs for households through Proteinova stores and retail partners.',
    },
    {
      icon: <Truck className="w-6 h-6 text-[#fdc826]" />,
      title: 'Bulk & B2B Supply',
      desc: 'Reliable egg supply for hotels, restaurants, bakeries, caterers, supermarkets, institutions and other businesses.',
    },
    {
      icon: <Award className="w-6 h-6 text-[#fdc826]" />,
      title: 'Multiple Egg Varieties',
      desc: 'White Eggs, Brown Eggs, Country Eggs and Quail Eggs.',
    },
    {
      icon: <PackageSearch className="w-6 h-6 text-[#fdc826]" />,
      title: 'Multiple Grades & Pack Sizes',
      desc: 'Different egg sizes and pack formats designed for retail and commercial requirements.',
    },
  ];

  const whyProteinova = [
    'Quality-focused sourcing',
    'Consistent egg grading',
    'Hygienic handling & packing',
    'Multiple egg varieties',
    '6, 12 & 30 retail pack options',
    'Bulk supply capability',
    'Retail + B2B distribution model',
  ];

  return (
    <div className="w-full bg-[#ffffff] min-h-screen py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section - About Proteinova */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center mb-16">
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ecf7e9] text-[#073b2a] text-xs font-bold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>About Proteinova</span>
            </div>
            <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-[#002418] font-extrabold tracking-tight mb-4">
              Better Eggs. Better Everyday Nutrition.
            </h1>
            <p className="text-base sm:text-lg text-[#414944] leading-relaxed mb-4">
              Proteinova Food Products Private Limited is a modern egg brand focused on making quality eggs more accessible to families, retailers and businesses. We work closely with trusted supply partners to source eggs and bring them through a structured process of selection, grading, hygienic packing and reliable distribution.
            </p>
            <p className="text-base sm:text-lg text-[#414944] leading-relaxed mb-4">
              From convenient retail packs for everyday households to bulk egg supply for hotels, restaurants, bakeries, supermarkets and institutions, Proteinova is building a dependable egg distribution network designed around quality, consistency and convenience.
            </p>
            <p className="text-base sm:text-lg text-[#414944] leading-relaxed font-semibold text-[#073b2a]">
              At Proteinova, we believe something as simple as an egg can play an important role in everyday nutrition.
              <br />
              Pure Protein. Pure Power.
            </p>
          </div>
          <div className="flex-1 w-full lg:max-w-lg">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3]">
              <img 
                src="/about_hero.jpg" 
                alt="Fresh Proteinova Eggs in a Basket" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 border border-black/5 rounded-3xl pointer-events-none"></div>
            </div>
          </div>
        </div>

        {/* Our Story */}
        <div className="bg-[#f6f7f5] rounded-3xl p-6 lg:p-10 mb-16 border border-slate-200/80">
          <h2 className="font-headline text-2xl sm:text-3xl text-[#002418] font-bold tracking-tight mb-4">
            Our Story: From a Daily Essential to a Trusted Brand
          </h2>
          <p className="text-sm sm:text-base text-[#414944] leading-relaxed mb-4">
            Eggs are one of the most widely consumed sources of protein, yet customers and businesses often face challenges with consistent quality, grading, packaging and dependable supply.
          </p>
          <p className="text-sm sm:text-base text-[#414944] leading-relaxed mb-4">
            Proteinova was created with a simple idea: <strong>To make buying quality eggs simpler, more reliable and more professional.</strong>
          </p>
          <p className="text-sm sm:text-base text-[#414944] leading-relaxed">
            We are building an integrated model that connects sourcing, quality selection, grading, packing, warehousing, distribution and retail under one brand. Whether it is a family purchasing a 6, 12 or 30 egg pack or a business requiring eggs in larger volumes, our goal is to provide the right eggs for the right requirement.
          </p>
        </div>

        {/* What We Do Grid */}
        <div className="mb-16">
          <h2 className="font-headline text-2xl sm:text-3xl text-[#002418] font-bold tracking-tight mb-2">
            What We Do
          </h2>
          <p className="text-[#414944] mb-8">One Brand. Multiple Egg Solutions.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whatWeDo.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#f6f7f5] p-6 rounded-3xl border border-slate-200/80 flex flex-col hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#073b2a] flex items-center justify-center mb-4 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="font-headline text-base font-bold text-[#002418] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#414944] leading-relaxed flex-grow">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-[#ecf7e9] rounded-3xl p-6 lg:p-8 border border-[#dbe5d8]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#073b2a] flex items-center justify-center">
                <Eye className="w-5 h-5 text-[#fdc826]" />
              </div>
              <h2 className="font-headline text-xl sm:text-2xl text-[#002418] font-bold">
                Our Vision
              </h2>
            </div>
            <h3 className="font-semibold text-[#073b2a] mb-2">To Build a Trusted Modern Egg Brand</h3>
            <p className="text-sm text-[#414944] leading-relaxed mb-3">
              Our vision is to build Proteinova into a trusted and accessible egg brand, serving households and businesses through a strong retail and distribution network.
            </p>
            <p className="text-sm text-[#414944] leading-relaxed">
              We aim to make quality eggs easier to identify, easier to purchase and easier to source at scale.
            </p>
          </div>
          <div className="bg-[#ecf7e9] rounded-3xl p-6 lg:p-8 border border-[#dbe5d8]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#073b2a] flex items-center justify-center">
                <Target className="w-5 h-5 text-[#fdc826]" />
              </div>
              <h2 className="font-headline text-xl sm:text-2xl text-[#002418] font-bold">
                Our Mission
              </h2>
            </div>
            <p className="text-sm text-[#414944] leading-relaxed mb-4">
              Our mission is to deliver:
            </p>
            <ul className="flex flex-wrap gap-2 mb-4">
              {['Consistent Quality', 'Better Grading', 'Hygienic Packing', 'Reliable Supply', 'Convenient Access'].map((item, i) => (
                <li key={i} className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-[#073b2a] border border-[#dbe5d8] shadow-sm">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-sm text-[#414944] leading-relaxed">
              while continuously improving the way eggs move from source to shelf and from businesses to families.
            </p>
          </div>
        </div>

        {/* Why Proteinova */}
        <div className="bg-[#f6f7f5] rounded-3xl p-6 lg:p-10 border border-slate-200/80 mb-16">
          <div className="max-w-2xl mb-8">
            <h2 className="font-headline text-2xl sm:text-3xl text-[#002418] font-bold tracking-tight">
              Why Proteinova?
            </h2>
            <p className="text-sm sm:text-base text-[#414944] mt-2 font-semibold">
              Quality You Can See. Reliability You Can Count On.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {whyProteinova.map((reason, i) => (
              <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm transition-all hover:border-[#ecf7e9] hover:bg-[#ecf7e9]">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-sm font-semibold text-[#002418]">{reason}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bar */}
        <div className="p-8 rounded-3xl bg-[#002418] text-white flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-headline text-xl sm:text-2xl font-bold mb-1">
              Taste the Biological Difference Tonight
            </h3>
            <p className="text-xs sm:text-sm text-[#bbeed5]">
              Browse chef-curated recipes or order a fresh farm-direct sample pack.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={onNavigateRecipes}
              className="px-5 py-2.5 rounded-xl bg-[#fdc826] hover:bg-[#f4bf1b] text-[#002418] text-xs sm:text-sm font-bold transition-all cursor-pointer"
            >
              Explore Recipes
            </button>
            <button
              onClick={onNavigateProducts}
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer"
            >
              View Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
