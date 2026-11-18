import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { RecipeModal } from './components/RecipeModal';
import { HomeView } from './views/HomeView';
import { ProductsView } from './views/ProductsView';
import { ProductDetailView } from './views/ProductDetailView';
import { RecipesView } from './views/RecipesView';
import { WholesaleView } from './views/WholesaleView';
import { PartnerView } from './views/PartnerView';
import { BusinessView } from './views/BusinessView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import { LocationsView } from './views/LocationsView';
import { FaqView } from './views/FaqView';
import { EnquiryView } from './views/EnquiryView';
import { LegalView } from './views/LegalView';
import { Recipe } from './data/recipesData';

export function App() {
  const [currentView, setCurrentView] = useState('home');
  const [viewParams, setViewParams] = useState<any>({});
  const [activeRecipe, setActiveRecipe] = useState<Recipe | null>(null);

  const navigateTo = (view: string, params: any = {}) => {
    setCurrentView(view);
    setViewParams(params);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenRecipe = (recipe: Recipe) => {
    setActiveRecipe(recipe);
  };

  const handleCloseRecipe = () => {
    setActiveRecipe(null);
  };

  const handleOpenProduct = (eggType: string) => {
    const map: Record<string, string> = {
      'Brown Eggs': 'brown-eggs',
      'White Eggs': 'white-eggs',
      'Country Eggs': 'country-eggs',
      'Duck Eggs': 'duck-eggs',
      'Quail Eggs': 'quail-eggs',
    };
    const id = map[eggType] || 'brown-eggs';
    navigateTo('product-detail', { id });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FCFBF7] text-[#26362C] selection:bg-[#F4C430] selection:text-[#26362C] relative">
      {/* Global Navigation Header */}
      <Header currentView={currentView} onNavigate={navigateTo} />

      {/* Main Content with Smooth Page Transitions */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentView + (viewParams.id || '') + (viewParams.productId || '')}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            {currentView === 'home' && (
              <HomeView onNavigate={navigateTo} onOpenRecipe={handleOpenRecipe} />
            )}

            {currentView === 'products' && (
              <ProductsView onNavigate={navigateTo} />
            )}

            {currentView === 'product-detail' && (
              <ProductDetailView
                productId={viewParams.id || 'brown-eggs'}
                onNavigate={navigateTo}
              />
            )}

            {currentView === 'recipes' && (
              <RecipesView onOpenRecipe={handleOpenRecipe} onNavigate={navigateTo} />
            )}

            {(currentView === 'business' || currentView === 'wholesale' || currentView === 'partner') && (
              <BusinessView
                initialTab={currentView === 'partner' || viewParams.tab === 'partner' ? 'partner' : 'wholesale'}
                initialProductId={viewParams.productId}
                onSuccess={(details) => navigateTo('enquiry', details)}
                onNavigate={navigateTo}
              />
            )}

            {currentView === 'about' && (
              <AboutView onNavigate={navigateTo} />
            )}

            {currentView === 'contact' && (
              <ContactView
                onSuccess={(details) => navigateTo('enquiry', details)}
              />
            )}

            {currentView === 'locations' && (
              <LocationsView />
            )}

            {currentView === 'faq' && (
              <FaqView onNavigate={navigateTo} />
            )}

            {currentView === 'enquiry' && (
              <EnquiryView
                initialProductId={viewParams.productId}
                onNavigate={navigateTo}
              />
            )}

            {currentView === 'legal' && (
              <LegalView initialTab={viewParams.tab || 'privacy'} />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Recipe Modal Drawer with Kitchen Cooking Mode */}
      <RecipeModal
        recipe={activeRecipe}
        onClose={handleCloseRecipe}
        onOpenProduct={handleOpenProduct}
      />

      {/* Global Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}

export default App;
