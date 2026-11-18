import React, { useState, useMemo } from 'react';
import { Search, Clock, ChefHat, Filter, ArrowRight, Sparkles } from 'lucide-react';
import { RECIPES_DATA, Recipe } from '../data/recipesData';

interface RecipesViewProps {
  onOpenRecipe: (recipe: Recipe) => void;
  onNavigate: (view: string, params?: any) => void;
}

export const RecipesView: React.FC<RecipesViewProps> = ({ onOpenRecipe, onNavigate }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedEggType, setSelectedEggType] = useState<string>('All');

  const categories = ['All', 'Breakfast', 'Traditional', 'Lunch & Dinner', 'Snacks & Starters', 'Dessert & Sweet'];
  const eggTypes = ['All', 'Brown Eggs', 'White Eggs', 'Country Eggs', 'Duck Eggs', 'Quail Eggs'];

  const filteredRecipes = useMemo(() => {
    return RECIPES_DATA.filter((recipe) => {
      const matchesSearch =
        recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        recipe.ingredients.some((ing) => ing.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCat =
        selectedCategory === 'All' || recipe.category.toLowerCase().includes(selectedCategory.toLowerCase());

      const matchesEgg = selectedEggType === 'All' || recipe.eggType === selectedEggType;

      return matchesSearch && matchesCat && matchesEgg;
    });
  }, [searchQuery, selectedCategory, selectedEggType]);

  return (
    <div className="pt-32 pb-24 space-y-16 max-w-7xl mx-auto px-6 sm:px-8">
      {/* Header */}
      <div className="text-center space-y-4 max-w-2xl mx-auto">
        <span className="text-xs uppercase tracking-[0.2em] text-[#E58A1F] font-semibold">
          Culinary Library
        </span>
        <h1 className="text-4xl sm:text-6xl font-serif text-[#2C1F18] font-light">
          Discover Something Delicious.
        </h1>
        <p className="text-base sm:text-lg text-[#5E5147] font-light leading-relaxed">
          Looking for your next meal inspiration? Explore our collection of egg recipes, discover new dishes, and find step-by-step instructions to prepare them.
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-6 rounded-3xl border border-[#2C1F18]/08 shadow-sm space-y-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-[#7E7268] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search recipes, ingredients (e.g. biryani, avocado, toast)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-[#FAF7F2] border border-[#2C1F18]/10 text-xs text-[#2C1F18] placeholder-[#7E7268] focus:outline-none focus:border-[#E58A1F]"
            />
          </div>

          {/* Quick Stats Pill */}
          <div className="text-xs text-[#7E7268] font-medium">
            Showing <span className="font-bold text-[#2C1F18]">{filteredRecipes.length}</span> of {RECIPES_DATA.length} verified dishes
          </div>
        </div>

        {/* Categories Pills */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#2C1F18]/06">
          <span className="text-xs font-semibold text-[#7E7268] mr-2">Category:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#2C1F18] text-white shadow-xs'
                  : 'bg-[#FAF7F2] text-[#483931] hover:bg-[#E58A1F]/15 hover:text-[#E58A1F]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Egg Type Selector */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#2C1F18]/06">
          <span className="text-xs font-semibold text-[#7E7268] mr-2">Egg Variety:</span>
          {eggTypes.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedEggType(type)}
              className={`px-3 py-1 rounded-lg text-xs transition-all cursor-pointer ${
                selectedEggType === type
                  ? 'bg-[#E58A1F] text-white font-semibold'
                  : 'text-[#483931] hover:text-[#E58A1F]'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </div>

      {/* Recipes Grid */}
      {filteredRecipes.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              onClick={() => onOpenRecipe(recipe)}
              className="bg-white rounded-2xl border border-[#2C1F18]/08 overflow-hidden hover:border-[#E58A1F]/60 transition-all hover:shadow-lg cursor-pointer group flex flex-col justify-between"
            >
              <div>
                {/* Photo */}
                <div className="w-full h-48 bg-[#FAF7F2] overflow-hidden relative">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/products/Brown.jpeg';
                    }}
                  />
                  <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold bg-white/95 text-[#2C1F18] shadow-xs">
                    {recipe.category}
                  </span>
                </div>

                {/* Info */}
                <div className="p-5 space-y-2">
                  <div className="flex items-center gap-2 text-[11px] text-[#717B74]">
                    <span className="flex items-center gap-1 font-medium">
                      <Clock className="w-3.5 h-3.5 text-[#E5A900]" />
                      {recipe.timeMinutes} mins
                    </span>
                  </div>

                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#26362C] group-hover:text-[#E5A900] transition-colors line-clamp-1">
                    {recipe.title}
                  </h3>

                  <p className="text-xs text-[#717B74] line-clamp-2 leading-relaxed">
                    {recipe.shortDesc}
                  </p>
                </div>
              </div>

              {/* Action Bottom */}
              <div className="px-5 pb-5 pt-2 border-t border-[#26362C]/06 flex items-center justify-between text-xs font-semibold text-[#E5A900]">
                <span>View Full Recipe</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-16 text-center bg-white rounded-3xl border border-[#2C1F18]/08 space-y-4">
          <p className="text-lg font-serif text-[#2C1F18]">No recipes match your criteria.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('All');
              setSelectedEggType('All');
            }}
            className="px-5 py-2 rounded-full bg-[#2C1F18] text-white text-xs font-semibold hover:bg-[#E58A1F] transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};
