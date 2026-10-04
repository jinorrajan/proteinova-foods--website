import React from 'react';
import { ArrowRight, Bookmark, Egg, ShoppingBag } from 'lucide-react';
import { Recipe } from '../data/recipes';

interface RecipeCardProps {
  recipe: Recipe;
  isBookmarked: boolean;
  onToggleBookmark: (recipeId: string) => void;
  onOpenDetails: (recipe: Recipe) => void;
}

export const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  isBookmarked,
  onToggleBookmark,
  onOpenDetails,
}) => {
  return (
    <article className="bg-[#ffffff] rounded-3xl overflow-hidden border border-[#e1ebde]/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
      {/* Media & Badges */}
      <div className="relative h-60 w-full overflow-hidden bg-[#e6f1e4]">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          alt={recipe.altText}
          src={recipe.image}
          loading="lazy"
        />

        {/* Top-left Time & Difficulty */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#002418] text-xs font-bold shadow-sm">
            {recipe.totalTimeMinutes} Mins • {recipe.difficulty}
          </span>
        </div>

        {/* Top-right Protein Callout */}
        <div className="absolute top-3 right-3">
          <span
            className={`px-2.5 py-1 rounded-full text-xs font-bold shadow-sm ${
              recipe.proteinGrams >= 25
                ? 'bg-[#fdc826] text-[#002418]'
                : 'bg-[#073b2a] text-white'
            }`}
          >
            {recipe.proteinGrams}g Protein
          </span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          {/* Egg Variety Pill */}
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#e6f1e4] text-[#002418] text-xs font-semibold mb-3">
            <Egg className="w-3.5 h-3.5 text-[#765a00]" />
            <span>{recipe.eggType}</span>
          </div>

          {/* Title */}
          <h3
            onClick={() => onOpenDetails(recipe)}
            className="font-headline text-lg sm:text-xl text-[#002418] font-bold tracking-tight group-hover:text-[#073b2a] transition-colors mb-2 cursor-pointer"
          >
            {recipe.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-[#414944] line-clamp-2 mb-4 leading-relaxed">
            {recipe.description}
          </p>

          {/* Grocery items line */}
          <div className="text-xs text-[#414944]/80 mb-4 flex items-center gap-1.5">
            <ShoppingBag className="w-3.5 h-3.5 text-[#717974] shrink-0" />
            <span className="truncate">
              {recipe.keyIngredients.join(', ')}
            </span>
          </div>
        </div>

        {/* Bottom Actions Row */}
        <div className="pt-4 border-t border-[#e1ebde]/50 flex items-center justify-between">
          <button
            onClick={() => onOpenDetails(recipe)}
            className="inline-flex items-center gap-1.5 text-sm text-[#002418] font-bold group-hover:text-[#765a00] transition-colors cursor-pointer"
            type="button"
          >
            <span>View Recipe &amp; Method</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={() => onToggleBookmark(recipe.id)}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
              isBookmarked
                ? 'bg-[#fdc826] text-[#002418] shadow-sm'
                : 'bg-[#e6f1e4] hover:bg-[#dbe5d8] text-[#002418]'
            }`}
            type="button"
            title={isBookmarked ? 'Remove Bookmark' : 'Save Recipe'}
            aria-label={isBookmarked ? 'Remove Bookmark' : 'Save Recipe'}
          >
            <Bookmark
              className={`w-4 h-4 ${isBookmarked ? 'fill-[#002418]' : ''}`}
            />
          </button>
        </div>
      </div>
    </article>
  );
};
