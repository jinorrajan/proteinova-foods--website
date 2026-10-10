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
import { LegalView, LegalTabType } from './views/LegalView';
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

  // Map of tab IDs to canonical URL pathnames
  const tabToPath: Record<string, string> = {
    'home': '/',
    'about-us': '/about',
    'products': '/products',
    'recipes': '/recipes',
    'partner-with-us': '/partner',
    'contact-us': '/contact',
    'privacy-policy': '/privacypolicy',
    'terms-of-supply': '/termsofsupply',
    'food-safety': '/foodsafety',
  };

  // Resolve current route from window.location pathname & query
  const getTabFromLocation = (): string => {
    try {
      const path = window.location.pathname.toLowerCase().replace(/\/$/, '') || '/';
      const hash = window.location.hash.toLowerCase().replace(/^#\/?/, '');
      
      // Match pathnames
      if (path === '/privacypolicy' || path === '/privacy-policy' || hash === 'privacypolicy' || hash === 'privacy-policy') {
        return 'privacy-policy';
      }
      if (path === '/termsofsupply' || path === '/terms-of-supply' || path === '/terms' || hash === 'termsofsupply' || hash === 'terms-of-supply' || hash === 'terms') {
        return 'terms-of-supply';
      }
      if (path === '/foodsafety' || path === '/food-safety' || hash === 'foodsafety' || hash === 'food-safety') {
        return 'food-safety';
      }
      if (path === '/about' || path === '/about-us' || hash === 'about') {
        return 'about-us';
      }
      if (path === '/products' || hash === 'products') {
        return 'products';
      }
      if (path === '/recipes' || hash === 'recipes') {
        return 'recipes';
      }
      if (path === '/partner' || path === '/partner-with-us' || hash === 'partner') {
        return 'partner-with-us';
      }
      if (path === '/contact' || path === '/contact-us' || hash === 'contact') {
        return 'contact-us';
      }

      // Query param fallback (?page=privacypolicy)
      const params = new URLSearchParams(window.location.search);
      const pageParam = params.get('page');
      if (pageParam && (pageParam === 'privacypolicy' || pageParam === 'privacy-policy')) return 'privacy-policy';
      if (pageParam && (pageParam === 'termsofsupply' || pageParam === 'terms-of-supply')) return 'terms-of-supply';
      if (pageParam && (pageParam === 'foodsafety' || pageParam === 'food-safety')) return 'food-safety';
    } catch {}
    return 'home';
  };

  // Navigation handler with browser history pushState
  const handleNavigate = (tab: string, replace = false) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    try {
      const targetPath = tabToPath[tab] || '/';
      const url = new URL(window.location.href);
      url.pathname = targetPath;
      if (tab !== 'recipes') {
        url.searchParams.delete('recipe');
      }
      if (replace) {
        window.history.replaceState({ tab }, '', url.toString());
      } else {
        window.history.pushState({ tab }, '', url.toString());
      }
    } catch {
      // Fallback
    }
  };

  // Sync route on initial load and browser back/forward buttons
  React.useEffect(() => {
    const syncRouteFromLocation = () => {
      const resolvedTab = getTabFromLocation();
      setCurrentTab(resolvedTab);

      // Also check recipe query param if on recipes tab
      try {
        const params = new URLSearchParams(window.location.search);
        let recipeId = params.get('recipe');
        if (!recipeId && window.location.hash.startsWith('#recipe=')) {
          recipeId = window.location.hash.replace('#recipe=', '');
        }
        if (recipeId) {
          const matched = RECIPES.find((r) => r.id === recipeId);
          if (matched) {
            setSelectedRecipe(matched);
          }
        }
      } catch {}
    };

    syncRouteFromLocation();
    window.addEventListener('popstate', syncRouteFromLocation);
    return () => window.removeEventListener('popstate', syncRouteFromLocation);
  }, []);

  const savedRecipesList = RECIPES.filter((r) => savedRecipeIds.has(r.id));

  return (
    <div className="min-h-screen flex flex-col bg-[#ffffff] text-[#151e16] antialiased">
      {/* Top Navigation */}
      <Header
        currentTab={currentTab}
        onNavigate={(tab) => handleNavigate(tab)}
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
            onNavigateHome={() => handleNavigate('home')}
          />
        )}

        {currentTab === 'home' && (
          <HomeView
            onNavigate={(tab) => handleNavigate(tab)}
            onOpenRecipe={(recipe) => handleOpenRecipe(recipe)}
          />
        )}

        {currentTab === 'products' && (
          <ProductsView
            onNavigatePartner={() => handleNavigate('partner-with-us')}
          />
        )}

        {currentTab === 'about-us' && (
          <AboutView
            onNavigateRecipes={() => handleNavigate('recipes')}
            onNavigateProducts={() => handleNavigate('products')}
          />
        )}

        {currentTab === 'partner-with-us' && <PartnerView />}

        {currentTab === 'contact-us' && <ContactView />}

        {['privacy-policy', 'terms-of-supply', 'food-safety'].includes(currentTab) && (
          <LegalView
            activeSection={currentTab as LegalTabType}
            onSectionChange={(tab) => handleNavigate(tab)}
            onNavigateHome={() => handleNavigate('home')}
            onNavigateContact={() => handleNavigate('contact-us')}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={(tab) => handleNavigate(tab)} />

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
