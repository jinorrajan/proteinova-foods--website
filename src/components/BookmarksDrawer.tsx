import React from 'react';
import { X, Bookmark, ArrowRight, Trash2 } from 'lucide-react';
import { Recipe } from '../data/recipes';

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedRecipes: Recipe[];
  onOpenRecipe: (recipe: Recipe) => void;
  onRemoveBookmark: (recipeId: string) => void;
}

export const BookmarksDrawer: React.FC<BookmarksDrawerProps> = ({
  isOpen,
  onClose,
  savedRecipes,
  onOpenRecipe,
  onRemoveBookmark,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/50 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      <div
        className="w-full max-w-md bg-white h-full shadow-2xl flex flex-col animate-in slide-in-from-right duration-250"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-[#073b2a] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#fdc826] text-[#002418] flex items-center justify-center">
              <Bookmark className="w-5 h-5 fill-current" />
            </div>
            <div>
              <h3 className="font-headline text-lg font-bold">Saved Recipes</h3>
              <p className="text-xs text-[#bbeed5]">
                {savedRecipes.length} {savedRecipes.length === 1 ? 'recipe' : 'recipes'} in your recipe box
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors cursor-pointer"
            aria-label="Close bookmarks"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 bg-[#f6f7f5]">
          {savedRecipes.length === 0 ? (
            <div className="h-64 flex flex-col items-center justify-center text-center p-6 space-y-3">
              <div className="w-14 h-14 rounded-full bg-[#ecf7e9] text-[#717974] flex items-center justify-center">
                <Bookmark className="w-6 h-6 stroke-[1.5]" />
              </div>
              <h4 className="font-headline text-base font-bold text-[#002418]">
                No Saved Recipes Yet
              </h4>
              <p className="text-xs text-[#717974] max-w-xs">
                Click the bookmark icon on any recipe card to save it for your next cooking session.
              </p>
            </div>
          ) : (
            savedRecipes.map((recipe) => (
              <div
                key={recipe.id}
                className="bg-white p-3.5 rounded-2xl border border-slate-200/80 shadow-xs flex items-center gap-3.5 group hover:shadow-md transition-all"
              >
                <img
                  src={recipe.image}
                  alt={recipe.altText}
                  referrerPolicy="no-referrer"
                  className="w-18 h-18 rounded-xl object-cover shrink-0 cursor-pointer"
                  onClick={() => {
                    onOpenRecipe(recipe);
                    onClose();
                  }}
                />
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold uppercase text-[#765a00] tracking-wider block truncate">
                    {recipe.eggType}
                  </span>
                  <h4
                    onClick={() => {
                      onOpenRecipe(recipe);
                      onClose();
                    }}
                    className="font-headline text-sm font-bold text-[#002418] truncate cursor-pointer group-hover:text-[#073b2a]"
                  >
                    {recipe.title}
                  </h4>
                  <div className="text-xs text-[#717974] mt-1 flex items-center gap-2">
                    <span>{recipe.totalTimeMinutes}m</span>
                    <span>•</span>
                    <span className="font-semibold text-[#073b2a]">{recipe.proteinGrams}g Protein</span>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5 shrink-0">
                  <button
                    onClick={() => {
                      onOpenRecipe(recipe);
                      onClose();
                    }}
                    className="p-2 rounded-xl bg-[#ecf7e9] hover:bg-[#dbe5d8] text-[#002418] transition-colors cursor-pointer"
                    title="View Method"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onRemoveBookmark(recipe.id)}
                    className="p-2 rounded-xl text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
                    title="Remove Bookmark"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {savedRecipes.length > 0 && (
          <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between">
            <span className="text-xs text-[#717974]">
              Recipes stored in local session
            </span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-[#002418] text-white text-xs font-bold hover:bg-[#073b2a] transition-colors cursor-pointer"
            >
              Continue Browsing
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
