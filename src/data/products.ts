export interface Product {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  image: string;
  eggTypeKey: 'white' | 'brown' | 'country' | 'duck' | 'quail';
  haughUnits: number; // Quality/freshness metric (>72 is Grade AA)
  yolkColorScale: number; // DSM Yolk Fan 1-15 (13-14 is deep golden orange)
  proteinPerEgg: string;
  packOptions: { size: string; count: number; price: number; sku: string }[];
  keyHighlights: string[];
  certifications: string[];
  idealFor: string[];
  nutritionalTable: {
    energyKcal: number;
    proteinG: number;
    totalFatG: number;
    cholesterolMg: number;
    cholineMg: number;
    vitaminDMcg: number;
    vitaminB12Mcg: number;
  };
}

export const PRODUCTS: Product[] = [
  {
    id: 'proteinova-farm-fresh-brown',
    name: 'Proteinova Farm-Fresh Brown Eggs',
    badge: 'Best Seller',
    tagline: 'Naturally enriched with Flaxseed Omega-3 and Vitamin E',
    description:
      'Harvested from certified antibiotic-free heritage hens raised on all-vegetarian grain rations. Celebrated for robust shell structural integrity and rich, plump, sunset-gold yolks.',
    image: '/Brown.jpeg',
    eggTypeKey: 'brown',
    haughUnits: 88,
    yolkColorScale: 13,
    proteinPerEgg: '6.8g',
    packOptions: [
      { size: 'Pack of 6', count: 6, price: 95, sku: 'PROT-BRN-06' },
      { size: 'Family Carton of 12', count: 12, price: 180, sku: 'PROT-BRN-12' },
      { size: 'Chef Crate of 30', count: 30, price: 420, sku: 'PROT-BRN-30' },
    ],
    keyHighlights: [
      '88+ Haugh Freshness Score',
      'Clinical Farm-Gate Sorting within 6 hours',
      'UV Sanitized & Temperature-Tracked Cold Chain',
      'Naturally High in Choline & Lutein',
    ],
    certifications: ['FSSAI Certified', 'ISO 22000', 'Salmonella Negative Tested', 'Zero Hormones'],
    idealFor: ['Vortex Poaching', 'Sunny-Side Crispy Fry', 'Heritage Curries', 'Breakfast Toast'],
    nutritionalTable: {
      energyKcal: 78,
      proteinG: 6.8,
      totalFatG: 5.2,
      cholesterolMg: 185,
      cholineMg: 152,
      vitaminDMcg: 1.8,
      vitaminB12Mcg: 0.9,
    },
  },
  {
    id: 'proteinova-classic-white',
    name: 'Proteinova Classic White Eggs',
    badge: 'Clinical Grade A',
    tagline: 'High-albumin viscosity engineered for daily biological nutrition',
    description:
      'Pristine, laser-candled white shell eggs featuring a proud, jelly-tight inner albumen halo. The quintessential standard for precision baking, omelettes, and active family meal preps.',
    image: '/White.jpeg',
    eggTypeKey: 'white',
    haughUnits: 86,
    yolkColorScale: 11,
    proteinPerEgg: '6.4g',
    packOptions: [
      { size: 'Pack of 6', count: 6, price: 85, sku: 'PROT-WHT-06' },
      { size: 'Carton of 12', count: 12, price: 160, sku: 'PROT-WHT-12' },
      { size: 'Institutional Tray of 30', count: 30, price: 380, sku: 'PROT-WHT-30' },
    ],
    keyHighlights: [
      'Dense outer & inner albumen separation',
      'Ultra-clean neutral taste profile',
      'Zero fishy aftertaste (zero meat meal fed)',
      'Uniform weight calibration (58g - 62g)',
    ],
    certifications: ['FSSAI Certified', 'Clean Room Packed', 'Cold-Chain Guarded'],
    idealFor: ['Velvety Scrambles', 'French Rolled Omelette', 'Macarons & Meringues', 'Daily Soft Boil'],
    nutritionalTable: {
      energyKcal: 72,
      proteinG: 6.4,
      totalFatG: 4.8,
      cholesterolMg: 178,
      cholineMg: 144,
      vitaminDMcg: 1.4,
      vitaminB12Mcg: 0.8,
    },
  },
  {
    id: 'proteinova-country-free-range',
    name: 'Proteinova Country Free-Range Heritage',
    badge: '100% Pasture Foraged',
    tagline: 'Deep marigold yolks from hens with unlimited open-field sunlight',
    description:
      'Reared in sunlit herbal pastures where heritage indigenous flocks forage on natural botanicals, wild seeds, and beneficial insects. Yields deep crimson-amber yolks and intensely savory umami.',
    image: '/Country.jpeg',
    eggTypeKey: 'country',
    haughUnits: 92,
    yolkColorScale: 14,
    proteinPerEgg: '7.1g',
    packOptions: [
      { size: 'Pack of 6', count: 6, price: 135, sku: 'PROT-FRG-06' },
      { size: 'Carton of 12', count: 12, price: 260, sku: 'PROT-FRG-12' },
      { size: 'Farm Crate of 30', count: 30, price: 590, sku: 'PROT-FRG-30' },
    ],
    keyHighlights: [
      'Certified Cage-Free & Pasture Foraged',
      'Highest Vitamin D3 & Carotenoid content',
      'Deep aromatic yolk with velvety mouthfeel',
      'Strictly non-GMO fed',
    ],
    certifications: ['Certified Humane Animal Welfare', 'Non-GMO Verified', 'Lab Heavy Metal Tested'],
    idealFor: ['Shakshuka', 'Artisan Custards', 'Heritage Regional Curries', 'Turkish Çılbır'],
    nutritionalTable: {
      energyKcal: 82,
      proteinG: 7.1,
      totalFatG: 5.6,
      cholesterolMg: 195,
      cholineMg: 168,
      vitaminDMcg: 2.6,
      vitaminB12Mcg: 1.2,
    },
  },
  {
    id: 'proteinova-culinary-duck-eggs',
    name: 'Proteinova Rich Culinary Duck Eggs',
    badge: 'Chef Specialty',
    tagline: 'Colossal yolks & massive albumin density for luxury culinary craft',
    description:
      'Approximately 30% larger than chicken eggs, duck eggs provide unparalleled fat-to-protein ratio and extraordinary foaming stability. Prized by master pastry chefs, pasta makers, and fine dining kitchens.',
    image: '/Duck Egg.jpeg',
    eggTypeKey: 'duck',
    haughUnits: 94,
    yolkColorScale: 14,
    proteinPerEgg: '9.2g',
    packOptions: [
      { size: 'Pack of 4', count: 4, price: 160, sku: 'PROT-DCK-04' },
      { size: 'Box of 8', count: 8, price: 300, sku: 'PROT-DCK-08' },
      { size: 'Chef Flat of 20', count: 20, price: 680, sku: 'PROT-DCK-20' },
    ],
    keyHighlights: [
      '9.2g Biological Complete Protein per egg',
      'Higher lipid content for supreme pastry rise',
      'Lacy crisp frying performance in olive oil',
      'Pond-accessible ethical waterfowl habitats',
    ],
    certifications: ['Specialty Poultry Tested', 'Zero Antibiotic Prophylaxis', 'Salmonella Negative'],
    idealFor: ['Soufflé Omelette', 'Authentic Carbonara', 'High-Rise Choux Pastry', 'Crispy Olive Oil Fry'],
    nutritionalTable: {
      energyKcal: 130,
      proteinG: 9.2,
      totalFatG: 9.6,
      cholesterolMg: 619,
      cholineMg: 184,
      vitaminDMcg: 3.2,
      vitaminB12Mcg: 3.8,
    },
  },
  {
    id: 'proteinova-concentrated-quail-eggs',
    name: 'Proteinova Concentrated Quail Eggs',
    badge: 'Micro-Nutrition',
    tagline: 'Miniature superfood packed with dense micro-nutrients & zinc',
    description:
      'Dappled speckled shells hiding nutrient-dense golden spheres. Weighing roughly 10g each, they offer nearly 3x the vitamin B1, iron, and potassium per gram compared to standard hen eggs.',
    image: '/Quails.jpeg',
    eggTypeKey: 'quail',
    haughUnits: 90,
    yolkColorScale: 12,
    proteinPerEgg: '1.2g (x12 = 14.4g)',
    packOptions: [
      { size: 'Carton of 18', count: 18, price: 140, sku: 'PROT-QUA-18' },
      { size: 'Party Pack of 36', count: 36, price: 260, sku: 'PROT-QUA-36' },
    ],
    keyHighlights: [
      'Gourmet visual presentation for canapés & ramen',
      'Rich in Ovomucoid protein (natural antiallergenic)',
      'Rapid 2.5-minute jammy boil',
      'Specially padded protective honeycomb packaging',
    ],
    certifications: ['FSSAI Specialty Standard', 'Pathogen Free Lab Verified'],
    idealFor: ['Ajitsuke Tamago Ramen', 'Deviled Hors d’Oeuvres', 'Cocktail Garnish', 'Kids Bento Boxes'],
    nutritionalTable: {
      energyKcal: 158, // per 100g (approx 10 eggs)
      proteinG: 13.1,
      totalFatG: 11.1,
      cholesterolMg: 844,
      cholineMg: 263,
      vitaminDMcg: 1.4,
      vitaminB12Mcg: 1.6,
    },
  }
];
