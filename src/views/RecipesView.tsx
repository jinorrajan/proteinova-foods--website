import React, { useState, useMemo } from 'react';
import {
  Home,
  Utensils,
  Search,
  ChevronDown,
  Award,
  CheckCircle,
  Thermometer,
  Droplets,
  Snowflake,
  Camera,
  Mail,
  Send,
  ArrowRight,
  Bookmark,
  Sparkles,
  Lightbulb,
  Check,
  Egg as EggIcon,
  Flame,
} from 'lucide-react';
import { RECIPES, Recipe } from '../data/recipes';
import { RecipeCard } from '../components/RecipeCard';

interface RecipesViewProps {
  onOpenRecipe: (recipe: Recipe) => void;
  onToggleBookmark: (recipeId: string) => void;
  savedRecipeIds: Set<string>;
  onOpenSubmitModal: () => void;
  onNavigateHome: () => void;
}

export const RecipesView: React.FC<RecipesViewProps> = ({
  onOpenRecipe,
  onToggleBookmark,
  savedRecipeIds,
  onOpenSubmitModal,
  onNavigateHome,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All Recipes (18)');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedEggGrade, setSelectedEggGrade] = useState<string>('all');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [emailInput, setEmailInput] = useState<string>('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState<boolean>(false);

  const categories = [
    'All Recipes (18)',
    'Breakfast Classics',
    'High Protein (>20g)',
    'Quick & Easy (<15 Mins)',
    'Weekend Brunch',
    'Gourmet & Baking',
    'Regional Indian',
  ];

  // The featured hero recipe
  const heroRecipe = useMemo(() => {
    return RECIPES.find((r) => r.isWeeklySpecial) || RECIPES[0];
  }, []);

  // Filter regular recipe list (excluding or including hero depending on search/filter)
  const regularRecipes = useMemo(() => {
    return RECIPES.filter((r) => r.id !== heroRecipe.id);
  }, [heroRecipe]);

  const filteredRecipes = useMemo(() => {
    return regularRecipes.filter((recipe) => {
      // Category filter
      if (activeCategory !== 'All Recipes (18)') {
        const matchesCategory = recipe.categories.some(
          (cat) => cat.toLowerCase() === activeCategory.toLowerCase()
        );
        if (!matchesCategory) return false;
      }

      // Egg Grade filter
      if (selectedEggGrade !== 'all') {
        if (recipe.eggTypeKey !== selectedEggGrade) return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const inTitle = recipe.title.toLowerCase().includes(q);
        const inDesc = recipe.description.toLowerCase().includes(q);
        const inEgg = recipe.eggType.toLowerCase().includes(q);
        const inIngr = recipe.keyIngredients.some((ing) => ing.toLowerCase().includes(q));
        if (!inTitle && !inDesc && !inEgg && !inIngr) return false;
      }

      return true;
    });
  }, [regularRecipes, activeCategory, selectedEggGrade, searchQuery]);

  // Display initial 9 or all recipes
  const displayedRecipes = useMemo(() => {
    if (isExpanded || searchQuery || activeCategory !== 'All Recipes (18)' || selectedEggGrade !== 'all') {
      return filteredRecipes;
    }
    return filteredRecipes.slice(0, 9);
  }, [filteredRecipes, isExpanded, searchQuery, activeCategory, selectedEggGrade]);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailInput) return;
    setNewsletterSubscribed(true);
  };

  const isHeroBookmarked = savedRecipeIds.has(heroRecipe.id);

  return (
    <div className="w-full bg-[#ffffff] min-h-screen">
      {/* Top Ambient Glow & Breadcrumbs Header */}
      <div className="relative w-full overflow-hidden bg-[#ffffff]">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[760px] h-[320px] bg-[#fdc826]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6 relative z-10">
          {/* Breadcrumbs */}
          <nav
            aria-label="Breadcrumbs"
            className="flex items-center gap-1.5 text-[#414944] text-xs font-semibold mb-4"
          >
            <button
              onClick={onNavigateHome}
              className="hover:text-[#002418] transition-colors flex items-center gap-1 cursor-pointer"
            >
              <Home className="w-3.5 h-3.5" />
              <span>Home</span>
            </button>
            <span className="text-[#c0c9c2]">/</span>
            <span className="text-[#002418] font-bold">Recipes &amp; Kitchen Inspiration</span>
          </nav>

          {/* Main Headline Block */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffdf95]/50 text-[#321700] text-xs font-bold uppercase tracking-wider mb-2.5">
                <Utensils className="w-3.5 h-3.5 text-[#765a00]" />
                <span>Culinary Inspiration &amp; Nutrition</span>
              </div>
              <h1 className="font-headline text-3xl sm:text-4xl lg:text-5xl text-[#002418] tracking-tight font-extrabold mb-3 leading-[1.15]">
                Wholesome Recipes, Mastered With Proteinova Eggs.
              </h1>
              <p className="text-base sm:text-lg text-[#414944] max-w-2xl leading-relaxed">
                Explore chef-crafted breakfast bowls, protein-dense quick bites, comfort bakes, and heritage regional delicacies made with our clinically graded, farm-fresh origin eggs.
              </p>
            </div>

            {/* Quick Micro-Stats */}
            <div className="flex items-center gap-4 lg:pb-2 shrink-0">
              <div className="bg-[#ecf7e9] px-4 py-3 rounded-2xl flex items-center gap-3 shadow-xs border border-[#e1ebde]/60">
                <div className="w-10 h-10 rounded-xl bg-[#073b2a] text-white flex items-center justify-center font-bold">
                  <span className="text-lg">🥚</span>
                </div>
                <div>
                  <div className="font-headline text-lg text-[#002418] font-extrabold leading-tight">
                    18+
                  </div>
                  <div className="text-xs text-[#414944] font-medium">Curated Recipes</div>
                </div>
              </div>

              <div className="bg-[#ecf7e9] px-4 py-3 rounded-2xl flex items-center gap-3 shadow-xs border border-[#e1ebde]/60">
                <div className="w-10 h-10 rounded-xl bg-[#fdc826] text-[#6e5400] flex items-center justify-center font-bold">
                  <span className="text-lg">💪</span>
                </div>
                <div>
                  <div className="font-headline text-lg text-[#002418] font-extrabold leading-tight">
                    Up to 28g
                  </div>
                  <div className="text-xs text-[#414944] font-medium">Protein / Serving</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Category Filter Strip & Interactive Search Controller */}
      <section className="w-full bg-[#ecf7e9] sticky top-20 z-30 border-y border-[#dbe5d8] shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#002418] text-white shadow-xs'
                      : 'bg-[#ffffff] text-[#414944] hover:text-[#002418] hover:bg-[#e6f1e4]'
                  }`}
                  type="button"
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search & Egg Type Selector */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="relative flex items-center flex-1 sm:flex-initial">
              <Search className="w-4 h-4 absolute left-3 text-[#717974] pointer-events-none" />
              <input
                type="text"
                placeholder="Search dish or spice..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9 pr-3 py-2 w-full sm:w-52 bg-[#ffffff] text-[#151e16] rounded-xl text-xs shadow-xs focus:outline-none focus:ring-2 focus:ring-[#002418]/20 placeholder:text-[#717974] border border-[#dbe5d8]/80"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 text-xs text-slate-400 hover:text-slate-700 cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>

            <div className="relative">
              <select
                value={selectedEggGrade}
                onChange={(e) => setSelectedEggGrade(e.target.value)}
                className="appearance-none bg-[#ffffff] text-[#151e16] text-xs font-semibold pl-3 pr-8 py-2 rounded-xl shadow-xs focus:outline-none focus:ring-2 focus:ring-[#002418]/20 cursor-pointer border border-[#dbe5d8]/80"
              >
                <option value="all">Egg Grade: All</option>
                <option value="white">Classic White</option>
                <option value="brown">Farm-Fresh Brown</option>
                <option value="country">Country Free-Range</option>
                <option value="duck">Rich Culinary Duck</option>
                <option value="quail">Concentrated Quail</option>
              </select>
              <ChevronDown className="w-4 h-4 absolute right-2.5 top-1/2 -translate-y-1/2 text-[#717974] pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Recipe of the Week: Featured Hero Card */}
      {(!searchQuery && activeCategory === 'All Recipes (18)' && selectedEggGrade === 'all') && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-6 w-full">
          <div className="relative bg-[#ffffff] rounded-3xl overflow-hidden border border-[#e1ebde] shadow-xl shadow-[#073b2a]/5">
            <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px]">
              {/* Left: Dish Media */}
              <div className="lg:col-span-7 relative min-h-[320px] lg:min-h-full overflow-hidden group">
                <img
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  alt={heroRecipe.altText}
                  src={heroRecipe.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#002418]/80 via-[#002418]/20 to-transparent lg:hidden" />

                {/* Badges Floating Over Media */}
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#fdc826] text-[#6e5400] text-xs font-bold uppercase tracking-wider shadow-md">
                    <Award className="w-3.5 h-3.5" />
                    Chef's Pick of the Week
                  </span>
                  <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#002418] text-xs font-bold shadow-sm">
                    <CheckCircle className="w-3.5 h-3.5 text-[#765a00]" />
                    Proteinova Brown &amp; White
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 text-white lg:hidden">
                  <div className="font-headline text-xl font-bold">
                    {heroRecipe.title}
                  </div>
                </div>
              </div>

              {/* Right: Editorial Recipe Overview */}
              <div className="lg:col-span-5 p-6 lg:p-8 flex flex-col justify-between bg-[#ffffff]">
                <div>
                  <div className="hidden lg:flex items-center gap-2 mb-2 text-[#765a00] text-xs uppercase tracking-widest font-bold">
                    <span>Signature Technique</span>
                    <span>•</span>
                    <span>Zero-Browning Curds</span>
                  </div>

                  <h2 className="hidden lg:block font-headline text-2xl lg:text-3xl text-[#002418] font-extrabold tracking-tight mb-3">
                    {heroRecipe.title}
                  </h2>

                  <p className="text-sm text-[#414944] mb-4 leading-relaxed">
                    {heroRecipe.description}
                  </p>

                  {/* Metrics Pill Grid */}
                  <div className="grid grid-cols-4 gap-2 mb-4 p-3 rounded-2xl bg-[#ecf7e9]">
                    <div className="text-center">
                      <span className="block text-[11px] text-[#414944] uppercase font-semibold">
                        Total Time
                      </span>
                      <span className="font-headline text-lg text-[#002418] font-bold">
                        {heroRecipe.totalTimeMinutes}m
                      </span>
                    </div>
                    <div className="text-center">
                      <span className="block text-[11px] text-[#414944] uppercase font-semibold">
                        Prep
                      </span>
                      <span className="font-headline text-lg text-[#002418] font-bold">
                        {heroRecipe.prepTimeMinutes}m
                      </span>
                    </div>
                    <div className="text-center">
                      <span className="block text-[11px] text-[#414944] uppercase font-semibold">
                        Difficulty
                      </span>
                      <span className="font-headline text-lg text-[#002418] font-bold">
                        {heroRecipe.difficulty}
                      </span>
                    </div>
                    <div className="text-center">
                      <span className="block text-[11px] text-[#765a00] uppercase font-bold">
                        Protein
                      </span>
                      <span className="font-headline text-lg text-[#002418] font-bold">
                        {heroRecipe.proteinGrams}g
                      </span>
                    </div>
                  </div>

                  {/* Chef's Technique Callout */}
                  {heroRecipe.masteryNote && (
                    <div className="bg-[#e1ebde]/50 p-4 rounded-2xl mb-6 border border-[#bbeed5]/50">
                      <div className="flex items-start gap-2.5">
                        <Lightbulb className="w-5 h-5 text-[#765a00] mt-0.5 shrink-0" />
                        <div className="space-y-1">
                          <div className="text-xs font-bold text-[#002418]">
                            Mastery Note: {heroRecipe.masteryNote.title}
                          </div>
                          <p className="text-xs text-[#414944] leading-snug">
                            {heroRecipe.masteryNote.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Action Hub */}
                <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
                  <button
                    onClick={() => onOpenRecipe(heroRecipe)}
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-[#fdc826] text-[#002418] text-sm font-bold px-6 py-3 rounded-xl hover:bg-[#f4bf1b] hover:shadow-[0_4px_14px_rgba(253,200,38,0.45)] transition-all cursor-pointer"
                    type="button"
                  >
                    <span>View Full Step-by-Step Method</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => onToggleBookmark(heroRecipe.id)}
                    className={`w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-xl text-sm font-semibold transition-colors cursor-pointer ${
                      isHeroBookmarked
                        ? 'bg-[#002418] text-white'
                        : 'bg-[#e6f1e4] hover:bg-[#dbe5d8] text-[#002418]'
                    }`}
                    type="button"
                  >
                    <Bookmark className={`w-4 h-4 ${isHeroBookmarked ? 'fill-current' : ''}`} />
                    <span>{isHeroBookmarked ? 'Saved' : 'Save'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Recipe Collection Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-8">
          <div>
            <span className="text-xs text-[#765a00] uppercase tracking-widest font-bold block mb-1">
              Precision Egg Craft
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl text-[#002418] font-bold tracking-tight">
              Handcrafted Recipes by Our Culinary Team
            </h2>
          </div>
          <div className="text-[#414944] text-xs font-medium">
            Showing <span className="font-bold text-[#002418]">{displayedRecipes.length}</span> of {filteredRecipes.length} recipes
          </div>
        </div>

        {displayedRecipes.length === 0 ? (
          <div className="py-16 text-center bg-[#f6f7f5] rounded-3xl p-8 border border-slate-200">
            <EggIcon className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <h3 className="font-headline text-lg font-bold text-[#002418] mb-1">
              No recipes matched your criteria
            </h3>
            <p className="text-xs text-[#717974] max-w-sm mx-auto mb-4">
              Try adjusting your search keywords or clearing the category and egg grade filters.
            </p>
            <button
              onClick={() => {
                setActiveCategory('All Recipes (18)');
                setSelectedEggGrade('all');
                setSearchQuery('');
              }}
              className="px-4 py-2 rounded-xl bg-[#002418] text-white text-xs font-bold"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedRecipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                isBookmarked={savedRecipeIds.has(recipe.id)}
                onToggleBookmark={onToggleBookmark}
                onOpenDetails={onOpenRecipe}
              />
            ))}
          </div>
        )}

        {/* Pagination / Show More Trigger */}
        {!searchQuery && activeCategory === 'All Recipes (18)' && selectedEggGrade === 'all' && (
          <div className="mt-10 flex flex-col items-center justify-center gap-2">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="inline-flex items-center gap-2 bg-[#e6f1e4] hover:bg-[#dbe5d8] text-[#002418] px-8 py-3 rounded-xl text-sm font-bold transition-all shadow-xs cursor-pointer"
              type="button"
            >
              <span>
                {isExpanded
                  ? 'Show Initial 9 Recipes'
                  : 'Load Remaining 9 Seasonal Recipes'}
              </span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  isExpanded ? 'rotate-180' : ''
                }`}
              />
            </button>
            <p className="text-xs text-[#414944]">
              New laboratory-tested recipes published every Thursday
            </p>
          </div>
        )}
      </section>

      {/* Cooking Tips & Egg Masterclass Strip (Bento Editorial Style) */}
      <section className="w-full bg-[#002418] text-white py-14 my-8 relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-[#bbeed5]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-[#073b2a] text-[#fdc826] text-xs font-bold uppercase tracking-wider mb-2.5">
              Science In The Kitchen
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-extrabold tracking-tight text-white mb-2">
              The Anatomy of Perfect Egg Cooking
            </h2>
            <p className="text-sm sm:text-base text-[#bbeed5] leading-relaxed">
              Precision protein coagulation isn't magic—it's biochemistry. Here is how Proteinova quality ensures chef-grade results in your home kitchen.
            </p>
          </div>

          {/* 3 Pillar Bento Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Tip 1 */}
            <div className="bg-[#073b2a]/80 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-between shadow-lg border border-white/5">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#fdc826]/20 text-[#fdc826] flex items-center justify-center mb-4">
                  <Thermometer className="w-6 h-6" />
                </div>
                <div className="text-xs text-[#fdc826] uppercase tracking-wider font-bold mb-1">
                  Masterclass Principle 01
                </div>
                <h3 className="font-headline text-lg font-bold text-white mb-2">
                  Temperature Control &amp; Heat Cycling
                </h3>
                <p className="text-xs sm:text-sm text-[#bbeed5] leading-relaxed">
                  Egg white albumen denatures at 62°C while yolk lipids set at 68°C. Gentle, medium-low heat allows proteins to weave a velvety moisture-trapping matrix without tightening into rubbery curds.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-2 text-xs text-[#76a68f]">
                <Check className="w-4 h-4 text-[#fdc826]" />
                <span>Recommended for Soft Scrambles &amp; Omelettes</span>
              </div>
            </div>

            {/* Tip 2 */}
            <div className="bg-[#073b2a]/80 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-between shadow-lg border border-white/5">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#fdc826]/20 text-[#fdc826] flex items-center justify-center mb-4">
                  <Droplets className="w-6 h-6" />
                </div>
                <div className="text-xs text-[#fdc826] uppercase tracking-wider font-bold mb-1">
                  Masterclass Principle 02
                </div>
                <h3 className="font-headline text-lg font-bold text-white mb-2">
                  Freshness Indicators &amp; Viscosity
                </h3>
                <p className="text-xs sm:text-sm text-[#bbeed5] leading-relaxed">
                  Grade-A eggs possess a distinct outer thin albumen and a dense, proud inner albumen halo surrounding a plump domed yolk. Proteinova farm-gate packing ensures high Haugh units for optimal poaching.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-2 text-xs text-[#76a68f]">
                <Check className="w-4 h-4 text-[#fdc826]" />
                <span>Clean, vortex-free poaching guaranteed</span>
              </div>
            </div>

            {/* Tip 3 */}
            <div className="bg-[#073b2a]/80 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-between shadow-lg border border-white/5">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#fdc826]/20 text-[#fdc826] flex items-center justify-center mb-4">
                  <Snowflake className="w-6 h-6" />
                </div>
                <div className="text-xs text-[#fdc826] uppercase tracking-wider font-bold mb-1">
                  Masterclass Principle 03
                </div>
                <h3 className="font-headline text-lg font-bold text-white mb-2">
                  Thermal Shock Peeling Method
                </h3>
                <p className="text-xs sm:text-sm text-[#bbeed5] leading-relaxed">
                  Lower fresh eggs directly into vigorously boiling water, simmer for exactly 6.5 minutes for jammy yolks, then immediately plunge into an ice-water shock bath to cleanly contract the inner membrane.
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-white/10 flex items-center gap-2 text-xs text-[#76a68f]">
                <Check className="w-4 h-4 text-[#fdc826]" />
                <span>Effortless shells without tearing the whites</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community & Recipe Sharing / Newsletter Activation Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 w-full mb-8">
        <div className="bg-[#e1ebde]/40 rounded-3xl p-6 lg:p-10 relative overflow-hidden border border-[#dbe5d8]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Call to Action for Home Chefs */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#fdc826] text-[#6e5400] text-xs font-bold uppercase tracking-wider mb-2.5">
                <Camera className="w-3.5 h-3.5" />
                <span>#CookWithProteinova</span>
              </div>
              <h2 className="font-headline text-2xl sm:text-3xl text-[#002418] font-extrabold tracking-tight mb-3">
                Have a Signature Egg Recipe? Share &amp; Win Fresh Supply.
              </h2>
              <p className="text-sm sm:text-base text-[#414944] max-w-xl mb-6 leading-relaxed">
                Tag your kitchen creations with <strong className="text-[#002418]">#CookWithProteinova</strong> on Instagram or LinkedIn. Every month, our executive culinary panel selects 10 home chefs to receive curated monthly hampers of Proteinova Classic, Country, and Duck eggs.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  className="inline-flex items-center gap-2 bg-[#002418] text-white px-5 py-3 rounded-xl text-xs sm:text-sm font-bold hover:bg-[#073b2a] transition-colors shadow-xs"
                  href="https://instagram.com"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Camera className="w-4 h-4" />
                  <span>Tag Us On Instagram</span>
                </a>
                <button
                  onClick={onOpenSubmitModal}
                  className="inline-flex items-center gap-2 bg-[#ffffff] text-[#002418] px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold hover:bg-[#e6f1e4] transition-colors shadow-xs border border-slate-200 cursor-pointer"
                  type="button"
                >
                  <span>Submit Recipe Directly</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Weekly Kitchen Letter Subscription */}
            <div className="lg:col-span-5 bg-[#ffffff] p-6 rounded-2xl shadow-md border border-[#dbe5d8]/80">
              <div className="flex items-center gap-3 mb-2.5">
                <div className="w-10 h-10 rounded-full bg-[#ffdf95] flex items-center justify-center text-[#002418]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-headline text-base font-bold text-[#002418]">
                    The Weekly Shell
                  </h3>
                  <p className="text-xs text-[#414944]">Chef-tested recipes &amp; nutritional notes</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#414944] mb-4 leading-relaxed">
                Get high-protein dinner plans, pastry chef techniques, and seasonal egg releases delivered to your inbox every Thursday morning.
              </p>

              {newsletterSubscribed ? (
                <div className="p-3.5 bg-[#ecf7e9] rounded-xl text-[#073b2a] text-xs font-semibold flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-600 stroke-[3]" />
                  <span>You're subscribed! Welcome to The Weekly Shell.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                  <div className="relative">
                    <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-[#717974]" />
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-[#ecf7e9] text-[#151e16] text-xs sm:text-sm rounded-xl focus:outline-none focus:ring-2 focus:ring-[#002418]/20 placeholder:text-[#717974] border border-[#dbe5d8]"
                    />
                  </div>
                  <button
                    className="w-full bg-[#fdc826] hover:bg-[#f4bf1b] text-[#002418] text-xs sm:text-sm font-bold py-3 px-4 rounded-xl shadow-xs hover:shadow-[0_4px_14px_rgba(253,200,38,0.45)] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    type="submit"
                  >
                    <Send className="w-4 h-4" />
                    <span>Get Free Weekly Recipes</span>
                  </button>
                  <p className="text-[11px] text-[#414944]/70 text-center">
                    Zero spam. Pure culinary science. Unsubscribe at any time.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
