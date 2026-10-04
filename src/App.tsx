/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { RecipeModal } from './components/RecipeModal';
import { SubmitRecipeModal } from './components/SubmitRecipeModal';
import { BookmarksDrawer } from './components/BookmarksDrawer';
import { ChatDrawer } from './components/ChatDrawer';
import { RecipesView } from './views/RecipesView';
import { HomeView } from './views/HomeView';
import { ProductsView } from './views/ProductsView';
import { AboutView } from './views/AboutView';
import { PartnerView } from './views/PartnerView';
import { ContactView } from './views/ContactView';
import { RECIPES, Recipe } from './data/recipes';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [savedRecipeIds, setSavedRecipeIds] = useState<Set<string>>(() => {
    try {
      const stored = localStorage.getItem('proteinova_saved_recipes');
      if (stored) return new Set(JSON.parse(stored));
    } catch {}
    return new Set(['golden-truffle-soft-scramble', 'spiced-skillet-shakshuka']);
  });
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);

  React.useEffect(() => {
    try {
      localStorage.setItem('proteinova_saved_recipes', JSON.stringify(Array.from(savedRecipeIds)));
    } catch {}
  }, [savedRecipeIds]);

  // Toggle bookmark helper
  const handleToggleBookmark = (recipeId: string) => {
    setSavedRecipeIds((prev) => {
      const next = new Set(prev);
      if (next.has(recipeId)) {
        next.delete(recipeId);
      } else {
        next.add(recipeId);
      }
      return next;
    });
  };

  // Open recipe and sync URL
  const handleOpenRecipe = (recipe: Recipe | null) => {
    setSelectedRecipe(recipe);
    try {
      const url = new URL(window.location.href);
      if (recipe) {
        url.searchParams.set('recipe', recipe.id);
      } else {
        url.searchParams.delete('recipe');
      }
      window.history.replaceState({}, '', url.toString());
    } catch {
      // Fallback
    }
  };

  // Detect recipe parameter from URL on initial load or popstate
  React.useEffect(() => {
    const handleUrlRecipe = () => {
      try {
        const params = new URLSearchParams(window.location.search);
        let recipeId = params.get('recipe');
        if (!recipeId && window.location.hash.startsWith('#recipe=')) {
          recipeId = window.location.hash.replace('#recipe=', '');
        }
        if (recipeId) {
          const matched = RECIPES.find((r) => r.id === recipeId);
          if (matched) {
            setCurrentTab('recipes');
            setSelectedRecipe(matched);
          }
        }
      } catch {
        // Fallback
      }
    };

    handleUrlRecipe();
    window.addEventListener('popstate', handleUrlRecipe);
    return () => window.removeEventListener('popstate', handleUrlRecipe);
  }, []);

  const savedRecipesList = RECIPES.filter((r) => savedRecipeIds.has(r.id));

  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff] text-[#151e16] antialiased">
      {/* Top Navigation */}
      <Header
        currentTab={currentTab}
        onNavigate={(tab) => setCurrentTab(tab)}
        savedCount={savedRecipeIds.size}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
      />

      {/* Main Content Body */}
      <main className="flex-1 pt-20">
        {currentTab === 'recipes' && (
          <RecipesView
            onOpenRecipe={(recipe) => handleOpenRecipe(recipe)}
            onToggleBookmark={handleToggleBookmark}
            savedRecipeIds={savedRecipeIds}
            onOpenSubmitModal={() => setIsSubmitModalOpen(true)}
            onNavigateHome={() => setCurrentTab('home')}
          />
        )}

        {currentTab === 'home' && (
          <HomeView
            onNavigate={(tab) => setCurrentTab(tab)}
            onOpenRecipe={(recipe) => handleOpenRecipe(recipe)}
          />
        )}

        {currentTab === 'products' && (
          <ProductsView
            onNavigatePartner={() => setCurrentTab('partner-with-us')}
          />
        )}

        {currentTab === 'about-us' && (
          <AboutView
            onNavigateRecipes={() => setCurrentTab('recipes')}
            onNavigateProducts={() => setCurrentTab('products')}
          />
        )}

        {currentTab === 'partner-with-us' && <PartnerView />}

        {currentTab === 'contact-us' && <ContactView />}
      </main>

      {/* Footer */}
      <Footer onNavigate={(tab) => setCurrentTab(tab)} />

      {/* Floating Interactive Culinary Concierge Chat - Only shown on Recipes screen */}
      {currentTab === 'recipes' && <ChatDrawer />}

      {/* Modals & Slide-overs */}
      <RecipeModal
        recipe={selectedRecipe}
        onClose={() => handleOpenRecipe(null)}
        isBookmarked={selectedRecipe ? savedRecipeIds.has(selectedRecipe.id) : false}
        onToggleBookmark={handleToggleBookmark}
      />

      <BookmarksDrawer
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        savedRecipes={savedRecipesList}
        onOpenRecipe={(recipe) => setSelectedRecipe(recipe)}
        onRemoveBookmark={handleToggleBookmark}
      />



      <SubmitRecipeModal
        isOpen={isSubmitModalOpen}
        onClose={() => setIsSubmitModalOpen(false)}
      />
    </div>
  );
}
