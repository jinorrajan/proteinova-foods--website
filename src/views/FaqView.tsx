import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronDown, MessageCircle, ArrowUpRight, HelpCircle } from 'lucide-react';

interface FaqViewProps {
  onNavigate?: (view: string, params?: any) => void;
}

interface FaqItem {
  id: string;
  category: 'general' | 'products' | 'orders' | 'business';
  q: string;
  a: string;
}

export const FaqView: React.FC<FaqViewProps> = ({ onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<'general' | 'products' | 'orders' | 'business'>('general');
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const categories = [
    { id: 'general', label: 'General' },
    { id: 'products', label: 'Products & Nutrition' },
    { id: 'orders', label: 'Orders & Delivery' },
    { id: 'business', label: 'Business & B2B' },
  ] as const;

  const faqs: FaqItem[] = [
    // General (Directly from official specification)
    {
      id: 'gen-1',
      category: 'general',
      q: 'What egg varieties does Proteinova offer?',
      a: 'White, Brown, Country, Quail and Duck Eggs, subject to availability.',
    },
    {
      id: 'gen-2',
      category: 'general',
      q: 'What retail pack sizes are available?',
      a: 'Pack formats may include 6, 12 and 30 eggs depending on the variety.',
    },
    {
      id: 'gen-3',
      category: 'general',
      q: 'Can I order eggs in bulk?',
      a: 'Yes. Please share the egg variety, grade, quantity and delivery location.',
    },
    {
      id: 'gen-4',
      category: 'general',
      q: 'Does Proteinova supply supermarkets and restaurants?',
      a: 'Business buyers can enquire about supply terms and available products.',
    },
    {
      id: 'gen-5',
      category: 'general',
      q: 'How should eggs be stored?',
      a: 'Follow product storage instructions and avoid using cracked or damaged eggs.',
    },

    // Products & Nutrition
    {
      id: 'prod-1',
      category: 'products',
      q: 'What is the nutritional difference between White and Brown eggs?',
      a: 'Both varieties offer high-quality complete protein (approx. 6.5g to 6.8g per egg). The shell color reflects hen genetics, while both undergo Proteinova automated grading and non-thermal UV sanitization.',
    },
    {
      id: 'prod-2',
      category: 'products',
      q: 'Are Proteinova eggs free from antibiotics and artificial colorants?',
      a: 'Yes. Proteinova eggs are sourced from healthy flocks on clean feed regimes without non-therapeutic antibiotics or synthetic yolk dye enhancers.',
    },
    {
      id: 'prod-3',
      category: 'products',
      q: 'What makes Country and Quail eggs distinctive?',
      a: 'Country eggs come from free-range native foraging birds with dense golden yolks, while Quail eggs offer bite-sized culinary versatility and concentrated micronutrients.',
    },
    {
      id: 'prod-4',
      category: 'products',
      q: 'How does Proteinova sanitize eggs without damaging the shell barrier?',
      a: 'We utilize dry UV-C surface sanitization. This non-thermal optical process eliminates surface bacteria while preserving the eggshell’s natural protective bloom (cuticle) for longer shelf-life.',
    },

    // Orders & Delivery
    {
      id: 'ord-1',
      category: 'orders',
      q: 'How fast are retail and wholesale orders dispatched?',
      a: 'We operate scheduled morning delivery routes from our distribution hubs, maintaining a 24 to 48-hour farm-to-door fresh turnaround.',
    },
    {
      id: 'ord-2',
      category: 'orders',
      q: 'What packaging prevents breakage during transportation?',
      a: 'We utilize shock-absorbing molded fiber pulp cartons and heavy-duty corrugated master cartons engineered to eliminate transit vibration micro-cracks.',
    },
    {
      id: 'ord-3',
      category: 'orders',
      q: 'What is your policy on transit damage?',
      a: 'Proteinova provides a zero-hassle replacement guarantee for any transit breakage verified upon delivery batch inspection.',
    },

    // Business & B2B
    {
      id: 'biz-1',
      category: 'business',
      q: 'How can supermarkets, bakeries, or hotels become wholesale partners?',
      a: 'Submit a Wholesale Enquiry form or contact our commercial sales desk to receive customized price sheets, sample testing packs, and scheduled delivery SLA terms.',
    },
    {
      id: 'biz-2',
      category: 'business',
      q: 'What is the minimum volume for commercial supply?',
      a: 'Standard commercial supply begins from 10 master cartons (1,800 eggs), with customizable recurring standing orders for high-volume commercial kitchens.',
    },
    {
      id: 'biz-3',
      category: 'business',
      q: 'Where is Proteinova headquartered?',
      a: 'Proteinova Food Products Private Limited is headquartered in Namakkal, Tamil Nadu — one of India’s premier poultry production capitals.',
    },
  ];

  // Filtering based on tab or active search query
  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    if (searchQuery.trim() !== '') return matchesSearch;
    return faq.category === activeCategory;
  });

  return (
    <div className="pt-28 sm:pt-36 pb-28 max-w-5xl mx-auto px-6 sm:px-8 space-y-12">
      {/* ================= 1. HEADER ================= */}
      <div className="space-y-3">
        <span className="text-[11px] sm:text-xs uppercase tracking-[0.2em] text-[#E5A900] font-semibold block">
          FAQ / CUSTOMER AND BUYER ANSWERS
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-[-0.035em] text-[#26362C]">
          Frequently Asked Questions
        </h1>
        <p className="text-sm sm:text-base text-[#717B74] font-normal max-w-2xl pt-1">
          Find answers about Proteinova eggs, packaging, storage, bulk supply and business partnerships.
        </p>
      </div>

      {/* ================= 2. SEARCH & CATEGORY SELECTOR ================= */}
      <div className="space-y-6">
        {/* Search input */}
        <div className="relative max-w-md">
          <Search className="w-4 h-4 text-[#717B74] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions or keywords..."
            className="w-full pl-11 pr-4 py-2.5 rounded-full bg-white border border-[#26362C]/10 text-xs sm:text-sm text-[#26362C] placeholder:text-[#A3ADA6] focus:outline-none focus:border-[#E5A900] shadow-xs"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-[#717B74] hover:text-[#26362C]"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Tabs */}
        {!searchQuery && (
          <div className="flex flex-wrap items-center gap-2.5">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setActiveCategory(cat.id);
                    setExpandedId(null);
                  }}
                  className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#26362C] text-white shadow-xs'
                      : 'bg-[#F2F6F3] text-[#26362C] hover:bg-[#E6EFEA] border border-[#26362C]/06'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* ================= 3. FAQ LIST ================= */}
      <div className="space-y-3.5">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory + searchQuery}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="space-y-3.5"
          >
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq) => {
                const isExpanded = expandedId === faq.id;
                return (
                  <div
                    key={faq.id}
                    className="group bg-[#F4F7F4] hover:bg-[#EEF4EF] transition-colors rounded-2xl sm:rounded-3xl p-5 sm:p-6 border border-[#26362C]/06 shadow-xs"
                  >
                    <div
                      className="cursor-pointer"
                      onClick={() => setExpandedId(isExpanded ? null : faq.id)}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="text-base sm:text-lg font-semibold text-[#26362C] tracking-tight leading-snug">
                          {faq.q}
                        </h3>
                        <div className="w-6 h-6 rounded-full bg-white/80 flex items-center justify-center shrink-0 text-[#26362C] mt-0.5 group-hover:bg-white transition-colors">
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              isExpanded ? 'rotate-180' : ''
                            }`}
                          />
                        </div>
                      </div>

                      {/* Answer displayed clearly */}
                      <p className="mt-2.5 text-xs sm:text-sm text-[#546258] leading-relaxed font-normal">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <div className="p-12 text-center bg-white rounded-3xl border border-[#26362C]/10 space-y-3">
                <HelpCircle className="w-8 h-8 text-[#717B74] mx-auto" />
                <h4 className="text-base font-semibold text-[#26362C]">No matching answers found</h4>
                <p className="text-xs text-[#717B74]">
                  Try searching with different terms or check our other categories.
                </p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="px-4 py-2 rounded-full bg-[#26362C] text-white text-xs font-semibold"
                >
                  View All Questions
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ================= 4. STILL HAVE QUESTIONS BANNER ================= */}
      <div className="p-8 sm:p-10 rounded-3xl bg-[#26362C] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#F4C430]">
            Direct Customer Support
          </span>
          <h3 className="text-2xl font-semibold text-white tracking-tight">
            Still have questions about our eggs?
          </h3>
          <p className="text-xs sm:text-sm text-[#D2D8D4]">
            Our Namakkal desk is ready to help you with wholesale inquiries, delivery schedules, and orders.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://wa.me/919791220001?text=Hello%20ProteinOva,%20I%20have%20a%20question%20about%20your%20eggs."
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3 rounded-full bg-[#F4C430] hover:bg-[#E5A900] text-[#26362C] text-xs font-semibold transition-colors flex items-center gap-2 cursor-pointer shadow-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          {onNavigate && (
            <button
              onClick={() => onNavigate('contact')}
              className="px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <span>Contact Desk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
