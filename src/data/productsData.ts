export interface ProductItem {
  id: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  nutritionPanel: string;
  nutritionPoster: string;
  specs: {
    yolkProfile: string;
    shellType: string;
    proteinPerEgg: string;
    bestFor: string[];
    grading: string;
  };
  packaging: {
    retail: string[];
    wholesale: string[];
  };
  faqs: { q: string; a: string }[];
  accentColor: string;
  badge: string;
}

export const PRODUCTS: ProductItem[] = [
  {
    id: 'brown-eggs',
    name: 'Brown Eggs',
    tagline: 'Wholesome Everyday Strength & Rich Natural Flavor',
    description:
      'ProteinOva Brown Eggs come from well-nourished hens raised with balanced grain diets. Known for their sturdy natural shell, firm whites, and vibrant golden yolks, they deliver dependable everyday nutrition for growing families.',
    image: '/products/Brown.jpeg',
    nutritionPanel: '/products/Brown Egg Nutrition Facts Panel.png',
    nutritionPoster: '/products/Brown Egg Nutrition Facts.png',
    specs: {
      yolkProfile: 'Deep Golden Yolk (Roche Index 11-12)',
      shellType: 'Natural Calcium-Dense Brown Shell',
      proteinPerEgg: '6.3g - 6.8g Pure Protein',
      bestFor: ['Breakfast Scrambles', 'Artisan Baking', 'Boiled Snacks', 'Gym Meals'],
      grading: 'Class A Automated Inspection & UV Sanitized',
    },
    packaging: {
      retail: ['6-Egg Eco-Pulp Carton', '12-Egg Family Pack', '30-Egg Value Tray'],
      wholesale: ['Crates of 180 Eggs (6 Trays)', 'Master Box of 360 Eggs (12 Trays)', 'Cold-Chain Pallet Supply (10,800+ Eggs)'],
    },
    faqs: [
      {
        q: 'What makes ProteinOva Brown Eggs special?',
        a: 'Every brown egg goes through multi-stage candling, acoustic crack detection, and hygienic UV sanitization to guarantee unmatched freshness and zero contamination.',
      },
      {
        q: 'What is the shelf life under recommended refrigeration?',
        a: 'Up to 30 days stored at 4°C - 7°C in clean, dry conditions.',
      },
    ],
    accentColor: '#B66A38',
    badge: 'Everyday Classic',
  },
  {
    id: 'white-eggs',
    name: 'White Eggs',
    tagline: 'Pure, Consistent & Crisp for Culinary Precision',
    description:
      'The timeless culinary standard. ProteinOva White Eggs feature pure porcelain shells, velvety whites with optimal whipping volume, and balanced golden yolks ideal for pastry chefs, bakeries, and everyday breakfast perfection.',
    image: '/products/White.jpeg',
    nutritionPanel: '/products/White Egg Nutrition Facts Panel.png',
    nutritionPoster: '/products/White Egg Nutrition Facts Infographic.png',
    specs: {
      yolkProfile: 'Balanced Sunlit Yolk',
      shellType: 'Porous Smooth Porcelain Shell',
      proteinPerEgg: '6.0g - 6.5g Pure Protein',
      bestFor: ['Meringues & Soufflés', 'Fluffy Omelettes', 'Baking & Confectionery', 'High-Volume Kitchens'],
      grading: 'Class A Weight-Sorted & Washed',
    },
    packaging: {
      retail: ['6-Egg Bio-Carton', '12-Egg Box', '30-Egg Classic Tray'],
      wholesale: ['180-Egg Commercial Crate', '360-Egg Master Corrugated Box', 'Bulk Truckload Supply'],
    },
    faqs: [
      {
        q: 'Are white eggs nutritionally identical to brown eggs?',
        a: 'Yes. The shell color is determined by the breed of hen. Both provide world-class bioavailability, identical amino acid profiles, and clean protein.',
      },
      {
        q: 'Why do bakers prefer ProteinOva White Eggs?',
        a: 'Because of their consistent albumin viscosity and whipping stability, which gives delicate pastries and cakes uniform rise and structure.',
      },
    ],
    accentColor: '#D8C3A5',
    badge: 'Chef Favorite',
  },
  {
    id: 'country-eggs',
    name: 'Country Eggs',
    tagline: 'Free-Range Farm Purity with Authentic Rustic Depth',
    description:
      'Sourced from native, free-roaming country hens that forage naturally across open pastures. ProteinOva Country Eggs have distinct dark yolks, thicker whites, and deep traditional umami prized in authentic ethnic recipes.',
    image: '/products/Country.jpeg',
    nutritionPanel: '/products/Country Egg Nutrition Facts Poster.png',
    nutritionPoster: '/products/Country Eggs Nutrition Infographic.png',
    specs: {
      yolkProfile: 'Intense Sunset Amber Yolk',
      shellType: 'Rustic Thick Natural Mineral Shell',
      proteinPerEgg: '6.5g - 7.0g Dense Protein',
      bestFor: ['Traditional Curries', 'Slow-cooked Biryanis', 'Poha & Khagina', 'Nourishing Broths'],
      grading: 'Hand-Selected & Verified Farm-Origin',
    },
    packaging: {
      retail: ['6-Egg Rustic Kraft Box', '10-Egg Farm Caddy'],
      wholesale: ['150-Egg Ventilated Crate', 'B2B Custom Restaurant Packs'],
    },
    faqs: [
      {
        q: 'What diet do the country hens receive?',
        a: 'The hens roam freely with continuous access to natural greens, grains, and sunshine, yielding higher natural lutein and beta-carotene in the yolks.',
      },
      {
        q: 'Why are country egg yolks darker in color?',
        a: 'The dark amber color is the natural consequence of pasture foraging rich in chlorophyll and natural plant carotenoids.',
      },
    ],
    accentColor: '#8C4B27',
    badge: 'Free-Range Native',
  },
  {
    id: 'duck-eggs',
    name: 'Duck Eggs',
    tagline: 'Velvety Richness & Supreme Culinary Indulgence',
    description:
      'Substantially larger than standard hen eggs, ProteinOva Duck Eggs deliver an ultra-creamy, velvety yolk that is nearly twice the size of chicken eggs. Highly sought after by gourmet chefs for rich custards, pasta making, and full-bodied curries.',
    image: '/products/Duck Egg.jpeg',
    nutritionPanel: '/products/Duck Egg Nutrition Facts Label.png',
    nutritionPoster: '/products/Duck Egg Nutrition Infographic.png',
    specs: {
      yolkProfile: 'Extra-Large Jumbo Custard Yolk',
      shellType: 'Thick Protective Pearlescent Shell',
      proteinPerEgg: '9.0g High-Density Protein',
      bestFor: ['Gourmet Pastas', 'Crème Brûlée & Custards', 'Rich Egg Curries', 'Artisan Noodles'],
      grading: 'Specialty Selection & Cold-Sealed',
    },
    packaging: {
      retail: ['4-Egg Protective Nest Box', '6-Egg Specialty Pack'],
      wholesale: ['120-Egg Padded Crates for Horeca', 'Weekly Standing Orders for Fine-Dining'],
    },
    faqs: [
      {
        q: 'How do duck eggs compare in size to chicken eggs?',
        a: 'ProteinOva Duck Eggs are approximately 30% to 50% larger than large chicken eggs, offering 9 grams of protein per egg.',
      },
      {
        q: 'Can duck eggs be used as a 1:1 substitute in cooking?',
        a: 'In savory dishes yes. In delicate baking, because of higher albumin solids and lower water content, they give extra rise and a richer crumb.',
      },
    ],
    accentColor: '#36615E',
    badge: 'Gourmet Specialty',
  },
  {
    id: 'quail-eggs',
    name: 'Quail Eggs',
    tagline: 'Petite Natural Marvels Packed with Dense Vitality',
    description:
      'Beautifully patterned with natural mottled speckles, ProteinOva Quail Eggs are exquisite miniature treasures. Each bite offers a creamy, buttery yolk-to-white ratio packed with vital micronutrients, iron, and B-vitamins.',
    image: '/products/Quails.jpeg',
    nutritionPanel: '/products/Quail Egg Nutrition Facts Infographic.png',
    nutritionPoster: '/products/Quail Eggs and Nutrition Facts.png',
    specs: {
      yolkProfile: 'High Yolk-to-White Ratio (Dense & Silky)',
      shellType: 'Naturally Speckled Camouflage Shell',
      proteinPerEgg: '1.2g per mini-egg (Dense Micro-Nutrients)',
      bestFor: ['Luxury Canapés', 'Ramen & Noodle Bowls', 'Cocktail Bites', 'Healthy Children Snacks'],
      grading: 'Individually Cushioned & Certified',
    },
    packaging: {
      retail: ['18-Egg Clear Cushion Tray', '24-Egg Gourmet Gift Box'],
      wholesale: ['200-Egg Caterer Trays', 'Bulk Event & Hospitality Cartons'],
    },
    faqs: [
      {
        q: 'How many quail eggs equal one chicken egg?',
        a: 'Typically 4 to 5 quail eggs equal the volume of one standard medium hen egg.',
      },
      {
        q: 'How long should quail eggs be boiled?',
        a: 'Boil for 2 minutes for a soft jammy center, or 3.5 minutes for a firm hard boil.',
      },
    ],
    accentColor: '#5C5449',
    badge: 'Delicacy & Canapés',
  },
];
