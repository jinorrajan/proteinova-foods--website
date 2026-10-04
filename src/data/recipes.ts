export interface RecipeStep {
  stepNumber: number;
  title: string;
  instruction: string;
  durationMinutes?: number;
  proTip?: string;
  temperatureCelsius?: number;
}

export interface Recipe {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  altText: string;
  eggType: string;
  eggTypeKey: 'white' | 'brown' | 'country' | 'duck' | 'quail';
  categories: string[];
  totalTimeMinutes: number;
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  difficulty: 'Easy' | 'Medium' | 'Advanced';
  proteinGrams: number;
  calories: number;
  fatsGrams: number;
  carbsGrams: number;
  servings: number;
  keyIngredients: string[];
  fullIngredients: { item: string; amount: string; note?: string }[];
  steps: RecipeStep[];
  signatureTechnique?: string;
  masteryNote?: { title: string; text: string };
  isWeeklySpecial?: boolean;
}

export const RECIPES: Recipe[] = [
  // Hero Weekly Special
  {
    id: 'golden-truffle-soft-scramble',
    title: 'Golden Truffle Soft Scramble & Sourdough',
    subtitle: 'Signature Technique • Zero-Browning Curds',
    description:
      'Achieve rich, custard-soft curds with continuous low-heat folding. Infused with cold French butter and real black truffle oil, served atop charred sourdough bread.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBP3jzb1lKaJ6PLw04acUWWumNCIUsoRTkKxPAspZVRhhi61aCOo_r-ihkrLYUyl0Y2nQL_OMyMPZu71jjIsNFPPckf4O_7KoMx-B9Ptbm_Ps7_3NIE159GqdgcGLUt0sz4wnogQRbEK0vcb-N6w_8HuKo_wBGf547NmD-edTqeOOoCkd3pF7QA42R1JbYXEcV1mp9ZlZdpGQW9HBut30YgbKTt00KRS1R5vBElIjguu-VGYgvAG_V0hw',
    altText:
      'Editorial close-up overhead shot of velvety truffle soft scrambled eggs resting on toasted artisan sourdough bread, sprinkled with fresh micro-chives, cracked black pepper, and shaved black truffle.',
    eggType: 'Proteinova Brown & White',
    eggTypeKey: 'brown',
    categories: ['Breakfast Classics', 'Weekend Brunch', 'Gourmet & Baking', 'High Protein (>20g)'],
    totalTimeMinutes: 12,
    prepTimeMinutes: 5,
    cookTimeMinutes: 7,
    difficulty: 'Easy',
    proteinGrams: 22,
    calories: 340,
    fatsGrams: 24,
    carbsGrams: 14,
    servings: 1,
    isWeeklySpecial: true,
    signatureTechnique: 'Continuous Figure-8 Fold',
    masteryNote: {
      title: 'The Cold Butter Fold',
      text: 'Pull the skillet off the burner when curds are 85% set. Residual heat gently perfects the remaining albumen without moisture loss.',
    },
    keyIngredients: ['Proteinova eggs', 'cold butter cubes', 'black truffle oil', 'chives', 'artisan sourdough'],
    fullIngredients: [
      { item: 'Proteinova Farm-Fresh Grade A Eggs', amount: '3 large' },
      { item: 'Cold unsalted European-style butter (diced)', amount: '20g' },
      { item: 'Crème fraîche or heavy cream', amount: '1 tbsp' },
      { item: 'Authentic black truffle oil (cold-pressed)', amount: '1/2 tsp' },
      { item: 'Fresh micro-chives (finely snipped)', amount: '1 tbsp' },
      { item: 'Flaky Maldon sea salt & tellicherry pepper', amount: 'to taste' },
      { item: 'Rustic artisanal country sourdough slice', amount: '1 thick slice, charred' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Whisk Albumen & Vitelline Uniformly',
        instruction:
          'Crack 3 eggs into a non-stick cold saucepan. Do not season with salt yet, as salt breaks cell walls prematurely.',
        durationMinutes: 2,
        proTip: 'Whisk with a fork or silicone spatula until strictly homogenous with no pale albumen streaks.',
      },
      {
        stepNumber: 2,
        title: 'Cold Butter Emulsion Induction',
        instruction:
          'Add cold cubed butter directly into the raw mixture. Place over low-medium heat (approx 65°C).',
        durationMinutes: 3,
        temperatureCelsius: 65,
        proTip: 'As butter melts, it naturally emulsifies with the egg yolks, creating micro-curd cushion.',
      },
      {
        stepNumber: 3,
        title: 'Continuous Figure-8 Scraping',
        instruction:
          'Stir continuously in figure-8 motions using a heatproof silicone spatula. Alternate on and off heat every 30 seconds.',
        durationMinutes: 3,
        temperatureCelsius: 68,
      },
      {
        stepNumber: 4,
        title: 'The Cold Finish & Truffle Drizzle',
        instruction:
          'Take off heat while curds remain soft and shiny. Fold in crème fraîche, flaky sea salt, chives, and black truffle oil.',
        durationMinutes: 2,
        proTip: 'Serve immediately over warm, olive-oil charred sourdough toast.',
      },
    ],
  },

  // 1. Velvety Herb Soft Scramble
  {
    id: 'velvety-herb-soft-scramble',
    title: 'Velvety Herb Soft Scramble',
    subtitle: 'Classic French Ribbon Curds',
    description:
      'Delicate, ribbon-like folded egg curds infused with freshly snipped dill, tarragon, and high-fat churned farm butter.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBLuu0TqVbQ8cTkmCaEsaeLsx1BDK-MJr1TQW33bxMl2QDUDTnr679XHKcMZ6PFcewo74mgy9Upj-keRnf6NuehQ4EOxd5jsz-tnrJbSuUUZ9BuzjiIy-Yj_98JDk-ILGmLkTPP08fY0YbTrelDj_uaKXE55F_nJkBEZQGvBF85uUtQxkJoO48VPfgXwAMx9JkYnq0BjtaF1kwsYjvdZQTUd9No4Zly89cpYNmhyHz4dbAKOw7aYY4odQ',
    altText:
      'Close-up gourmet shot of creamy chive scrambled eggs served on toasted brioche with fresh micro-greens.',
    eggType: 'Proteinova Classic White Eggs',
    eggTypeKey: 'white',
    categories: ['Breakfast Classics', 'Quick & Easy (<15 Mins)'],
    totalTimeMinutes: 10,
    prepTimeMinutes: 3,
    cookTimeMinutes: 7,
    difficulty: 'Easy',
    proteinGrams: 18,
    calories: 280,
    fatsGrams: 20,
    carbsGrams: 6,
    servings: 1,
    keyIngredients: ['Eggs', 'fresh chives', 'unsalted butter', 'sea salt flakes'],
    fullIngredients: [
      { item: 'Proteinova Classic White Eggs', amount: '3 units' },
      { item: 'Cold salted grass-fed butter', amount: '15g' },
      { item: 'Fresh chives & tender French tarragon', amount: '2 tbsp finely chopped' },
      { item: 'Toasted buttery brioche bun or sourdough', amount: '1 slice' },
      { item: 'Fresh cracked black peppercorns', amount: 'a pinch' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Gentle Whisking',
        instruction: 'Whisk eggs until completely smooth with no remaining albumen strands.',
        durationMinutes: 2,
      },
      {
        stepNumber: 2,
        title: 'Slow Low-Heat Sweep',
        instruction: 'Melt half the butter in a pan over lowest burner flame. Pour in eggs and stir patiently.',
        durationMinutes: 4,
        temperatureCelsius: 62,
      },
      {
        stepNumber: 3,
        title: 'Herb Fold',
        instruction: 'Fold in chives, tarragon, and remaining butter just as soft custardy ribbons form.',
        durationMinutes: 2,
      },
    ],
  },

  // 2. Spiced Skillet Shakshuka
  {
    id: 'spiced-skillet-shakshuka',
    title: 'Spiced Skillet Shakshuka',
    subtitle: 'Cast-Iron Simmered Molten Heritage Yolks',
    description:
      'A vibrant stew of charred red peppers, crushed San Marzano tomatoes, and smoked paprika hosting molten heritage yolks.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA_yC4zCaoTcyYOdcZEqP8npB5XEy0dleA4Xal6KUFQ_KywQeYa5oIKGMPBPY3w_yC43gmAtZNWZwdesa2-KrxPEvo6FnIpoPYCEQVx7tOO_H79A_FSXCWz3Jv_MrzyNtFwiJSAgcBJkyj6DrGi7CTyicOJ1ztHaEj-tr1qtbo_QTTUbJoLMbrPA7lqUo26S_s9izDzNL_l-5krIUavBQPBOm0TNZIXIcBEISpCCFyRasNZ2gof-9CU_Q',
    altText:
      'Rustic cast iron skillet with bubbling Mediterranean shakshuka, simmered red bell peppers, and three poached heritage eggs.',
    eggType: 'Country Free-Range Heritage',
    eggTypeKey: 'country',
    categories: ['High Protein (>20g)', 'Weekend Brunch', 'Regional Indian'],
    totalTimeMinutes: 25,
    prepTimeMinutes: 8,
    cookTimeMinutes: 17,
    difficulty: 'Medium',
    proteinGrams: 24,
    calories: 390,
    fatsGrams: 22,
    carbsGrams: 18,
    servings: 2,
    keyIngredients: ['Heritage eggs', 'bell peppers', 'tomatoes', 'smoked paprika', 'feta'],
    fullIngredients: [
      { item: 'Proteinova Country Free-Range Heritage Eggs', amount: '4 eggs' },
      { item: 'Ripe San Marzano crushed tomatoes', amount: '400g' },
      { item: 'Red bell peppers (thinly julienned)', amount: '2 medium' },
      { item: 'Garlic cloves (slivered)', amount: '3 cloves' },
      { item: 'Ground cumin & Spanish smoked paprika', amount: '1 tsp each' },
      { item: 'Crumbled sheep milk feta & fresh cilantro', amount: '50g' },
      { item: 'Warm sourdough or pita bread', amount: 'for dipping' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Sauté Aromatics',
        instruction: 'Caramelize red peppers, onions, and slivered garlic in olive oil until sweet and tender.',
        durationMinutes: 7,
      },
      {
        stepNumber: 2,
        title: 'Spice Reduction',
        instruction: 'Bloom cumin and paprika in oil, then stir in crushed tomatoes. Simmer until rich and glossy.',
        durationMinutes: 8,
      },
      {
        stepNumber: 3,
        title: 'Nest Eggs & Cover',
        instruction: 'Make indentations in sauce. Crack eggs gently into nests. Cover pan and cook until whites set but yolks remain jiggly.',
        durationMinutes: 5,
        temperatureCelsius: 85,
      },
      {
        stepNumber: 4,
        title: 'Feta & Herb Garnish',
        instruction: 'Crumble creamy feta and coriander over top. Serve hot right in the skillet.',
        durationMinutes: 2,
      },
    ],
  },

  // 3. Soy-Mirin Jammy Ramen Eggs
  {
    id: 'soy-mirin-jammy-ramen-eggs',
    title: 'Soy-Mirin Jammy Ramen Eggs',
    subtitle: 'Ajitsuke Tamago Culinary Science',
    description:
      'Precision 6-minute boiled eggs submerged in a savory mirin, tamari, and ginger bath for an exquisite gelatinous core.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAtHiNt6ItH0run0ND79pDx71QCKYf08CMxvmaXNEjGeR0sdOWMunS1chh6wIuL1cz4_8rVLjIaAG4KiPpbx3xmdhbwpTsT6lLQlyQxZ454gqOJYwqfVyrJydAIAq0Pj0F8JvNfR41ZRetQzBNDy7D5NG1eFswrigmTuQAEV_B3fw8WBfPGnAncKDB03qcLa49xUF86GL9kYQ9spdpeJzkdDC8rM8RxmaYqrQG96uO1O8D6oaMo1oeF0Q',
    altText:
      'Two halved ramen eggs with glossy, translucent soy-marinated whites and jammy, custard-like amber egg yolks.',
    eggType: 'Concentrated Quail / Brown Eggs',
    eggTypeKey: 'quail',
    categories: ['Quick & Easy (<15 Mins)', 'Gourmet & Baking'],
    totalTimeMinutes: 15,
    prepTimeMinutes: 5,
    cookTimeMinutes: 10,
    difficulty: 'Easy',
    proteinGrams: 14,
    calories: 160,
    fatsGrams: 10,
    carbsGrams: 3,
    servings: 2,
    keyIngredients: ['Quail/brown eggs', 'Japanese mirin', 'soy sauce', 'dashi', 'ginger'],
    fullIngredients: [
      { item: 'Proteinova Farm Brown Eggs or Quail Eggs', amount: '4 chicken or 8 quail eggs' },
      { item: 'Japanese dark tamari / soy sauce', amount: '1/3 cup' },
      { item: 'Hon-mirin sweet rice wine', amount: '1/4 cup' },
      { item: 'Dashi broth or steeped kombu water', amount: '1/2 cup' },
      { item: 'Fresh ginger root (bruised slice)', amount: '1 piece' },
      { item: 'Toasted sesame seeds & sliced spring onion', amount: 'for garnish' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Precision Boil',
        instruction: 'Lower cold eggs into rolling boil. Boil chicken eggs for 6m 15s (or quail eggs for 2m 20s).',
        durationMinutes: 6,
        temperatureCelsius: 100,
        proTip: 'Swirl water in a circular vortex during the first 2 minutes so yolks center naturally.',
      },
      {
        stepNumber: 2,
        title: 'Thermal Shock Ice Plunge',
        instruction: 'Immediately transfer to deep ice water bath for 10 minutes to halt cooking and shrink inner membrane.',
        durationMinutes: 5,
      },
      {
        stepNumber: 3,
        title: 'Marinade Bath',
        instruction: 'Peel gently under cold tap water. Marinate in cold soy-mirin dashi mixture for 4–12 hours.',
        durationMinutes: 4,
      },
    ],
  },

  // 4. Classic French Soufflé Omelette
  {
    id: 'classic-french-souffle-omelette',
    title: 'Classic French Soufflé Omelette',
    subtitle: 'Mère Poulard Style Albumen Expansion',
    description:
      'Harness the unmatched structural albumin density of duck eggs, whisked to peak meringue volume and gently pan-steamed.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAQ4e0BiDo0P5nxUXHEoSThUiNwFKFoqJUFAvf2O5aKcvLbEcpy0bBk5pjUlq6EsYyxT2R6kzoUCOFIyU_DK0Pgndriwm9mKVQmaTM6tVOpRTZ2KCx-tqrKpII2k3xm1i1TAXmRey-oxcroIlsukK5YcaBjNbPRftgtZt-0YWdFYs4WTAl1Dr6MHOdBMeXkXSi3XA_WXv7G2iS8Ock6un7k3IlRRYsddV7lG6s9C8u_e5Z9cjOBQ4WQ8Q',
    altText:
      'Cloud-like, fluffy French soufflé omelette resting on an elegant fine-dining ceramic plate, dusted with fresh fines herbes and Gruyère.',
    eggType: 'Rich Culinary Duck Eggs',
    eggTypeKey: 'duck',
    categories: ['Breakfast Classics', 'Gourmet & Baking', 'High Protein (>20g)'],
    totalTimeMinutes: 18,
    prepTimeMinutes: 8,
    cookTimeMinutes: 10,
    difficulty: 'Advanced',
    proteinGrams: 21,
    calories: 310,
    fatsGrams: 23,
    carbsGrams: 2,
    servings: 1,
    keyIngredients: ['Duck eggs', 'clarified butter', 'Gruyère cheese', 'chives'],
    fullIngredients: [
      { item: 'Proteinova Rich Culinary Duck Eggs', amount: '2 duck eggs (separated)' },
      { item: 'Ghee or clarified French butter', amount: '15g' },
      { item: 'Aged Gruyère cheese (microplaned)', amount: '25g' },
      { item: 'Fines herbes (parsley, chives, tarragon)', amount: '1 tbsp' },
      { item: 'Sea salt and white pepper', amount: 'pinch' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Meringue Whipping',
        instruction: 'Separate duck whites and yolks. Whip whites with a pinch of salt to firm glossy peaks.',
        durationMinutes: 4,
      },
      {
        stepNumber: 2,
        title: 'Fold Yolks Gently',
        instruction: 'Whisk yolks until creamy, then fold gently into whipped duck whites without deflating air pockets.',
        durationMinutes: 2,
      },
      {
        stepNumber: 3,
        title: 'Pan Steam & Golden Crust',
        instruction: 'Melt clarified butter in a copper or non-stick skillet. Pour in fluffy cloud. Cover with lid for 3 minutes.',
        durationMinutes: 4,
        temperatureCelsius: 75,
      },
      {
        stepNumber: 4,
        title: 'Cheese & Fold',
        instruction: 'Sprinkle Gruyère across center, gently fold in half, and slide onto preheated porcelain.',
        durationMinutes: 2,
      },
    ],
  },

  // 5. Kerala Egg Roast (Mutta Roast)
  {
    id: 'kerala-egg-roast-mutta-roast',
    title: 'Kerala Egg Roast (Mutta Roast)',
    subtitle: 'Malabar Coastal Spiced Heritage Dish',
    description:
      'A South Indian culinary crown jewel: slow-caramelized shallots, freshly ground fennel, green chilies, and whole spices.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAPgny9Cazx3s83HLkMH-Gr4gK0mCP_-FYQP4xdzO6k03ElpXdM_g1KidrYSeU5D8x0woHWlIr2s0qYJD9_axFlS_aeHoUA00LYoReX-dcj3euINt1bRM4HCzPGAV0BGVf5bXew4CDzU-Mw2_Slcj_5dvCM4bGyQ_JNmFqORVVLNyRw63IIVwiklAJRUNW92dM3NIGMp3K0DPch6YkO8RQbr4oTbqegh0yKLewvUA3_u_MPU40VSjx4eQ',
    altText:
      'Kerala style Mutta Roast in a traditional bronze uruli, featuring scored hard-boiled eggs coated in thick, glossy caramelized onion and tomato masala.',
    eggType: 'Farm-Fresh Brown Eggs',
    eggTypeKey: 'brown',
    categories: ['Regional Indian', 'High Protein (>20g)', 'Weekend Brunch'],
    totalTimeMinutes: 30,
    prepTimeMinutes: 10,
    cookTimeMinutes: 20,
    difficulty: 'Medium',
    proteinGrams: 20,
    calories: 320,
    fatsGrams: 18,
    carbsGrams: 14,
    servings: 2,
    keyIngredients: ['Brown eggs', 'shallots', 'curry leaves', 'coconut oil', 'garam masala'],
    fullIngredients: [
      { item: 'Proteinova Farm-Fresh Brown Eggs', amount: '4 eggs (hard-boiled & scored)' },
      { item: 'Cold-pressed Kerala coconut oil', amount: '2 tbsp' },
      { item: 'Small red shallots (finely sliced)', amount: '2 cups' },
      { item: 'Fresh green chilies (slit) & ginger juliennes', amount: '2 chilies, 1 inch ginger' },
      { item: 'Fresh curry leaves (sweet neem)', amount: '2 sprigs' },
      { item: 'Kashmiri chili, coriander, turmeric, fennel powder', amount: '1 tsp each' },
      { item: 'Ripe country tomatoes (chopped)', amount: '2 medium' },
      { item: 'Malabar parottas or appams', amount: 'for serving' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Shallot Caramelization',
        instruction: 'Heat coconut oil in an uruli or heavy pan. Sauté shallots, ginger, garlic, and curry leaves till deep golden brown.',
        durationMinutes: 10,
      },
      {
        stepNumber: 2,
        title: 'Spice Roast',
        instruction: 'Add spice powders on gentle flame until fragrant. Add tomatoes and cook down into thick masala paste.',
        durationMinutes: 6,
      },
      {
        stepNumber: 3,
        title: 'Roast Scored Eggs',
        instruction: 'Score boiled eggs lightly with 3 incisions. Toss into masala, coating thoroughly so spices seep into yolk core.',
        durationMinutes: 4,
      },
    ],
  },

  // 6. Poached Eggs & Chili Crisp Avo Toast
  {
    id: 'poached-eggs-chili-crisp-avo-toast',
    title: 'Poached Eggs & Chili Crisp Avo Toast',
    subtitle: 'Vortex Poach with Crunchy Sichuan Aromatics',
    description:
      'Tight spherical poaches floating atop creamy Hass avocado and tangy artisanal sourdough, finished with crunchy Sichuan chili oil.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAJAVFGUugJ9ag0owTvfhiG_5XiB-Sk-hvf7EHZcSC4Lh8AFv7YhB8kVBSE8fOSkK27tKJpdDKF2ckxklWNUGdn6eA3rjaYaSy1yX3FrBP5_ZuPUkFnsu6OB5Jgm8lgE0k54cl5Lg_TGfwcrJXYXfDozRkpO__ozAm4vtziy87ZwTh_jibwW-SWD-0TWvxEMMhUpqLR5ef2yscOIE39Opj_o4mFb5yuUO3AEhmK7cWg1tGgTNHr4jdIBA',
    altText:
      'Perfect poached egg perched on thick-cut toasted multigrain sourdough smeared with creamy mashed avocado, drizzled generously with fiery red chili crisp.',
    eggType: 'Naturally Enriched Brown Eggs',
    eggTypeKey: 'brown',
    categories: ['Breakfast Classics', 'Quick & Easy (<15 Mins)'],
    totalTimeMinutes: 12,
    prepTimeMinutes: 5,
    cookTimeMinutes: 7,
    difficulty: 'Easy',
    proteinGrams: 19,
    calories: 360,
    fatsGrams: 24,
    carbsGrams: 20,
    servings: 1,
    keyIngredients: ['Brown eggs', 'ripe avocado', 'sourdough', 'chili crisp', 'lime juice'],
    fullIngredients: [
      { item: 'Proteinova Naturally Enriched Brown Eggs', amount: '2 eggs' },
      { item: 'Ripe Hass avocado', amount: '1 fruit' },
      { item: 'Thick sourdough country batard slice', amount: '1 slice (toasted)' },
      { item: 'Crispy chili crisp oil (garlic, shallot flakes)', amount: '1.5 tbsp' },
      { item: 'Fresh lime juice & coarse sea salt', amount: 'to taste' },
      { item: 'White sesame seeds & micro-coriander', amount: 'garnish' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Avocado Prep',
        instruction: 'Mash avocado with lime juice, sea salt, and a drizzle of extra virgin olive oil. Spread thickly on warm toasted sourdough.',
        durationMinutes: 3,
      },
      {
        stepNumber: 2,
        title: 'Precision Poach',
        instruction: 'Bring water to gentle simmer (85°C). Create gentle vortex with slotted spoon. Drop egg into eye of vortex for 3 minutes.',
        durationMinutes: 3,
        temperatureCelsius: 85,
      },
      {
        stepNumber: 3,
        title: 'Chili Crisp Drizzle',
        instruction: 'Drain poached egg on kitchen towel, place onto avocado, and crown with hot crunchy chili crisp oil.',
        durationMinutes: 2,
      },
    ],
  },

  // 7. Egg White & Spinach Power Wrap
  {
    id: 'egg-white-spinach-power-wrap',
    title: 'Egg White & Spinach Power Wrap',
    subtitle: 'Lean Biological Fuel Formula',
    description:
      'Designed for serious fitness regimens: 5 separated egg whites folded with blanched spinach and tangy low-sodium cottage cheese.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAvbRPN_1sRTd8E8VprDf48AB8DU56dO4twS_bYuesmqn7vkgtJzI235c54WSFq8y61aEgCa3j3E0_jcXkvjfSkYQ6GGn2BnthIZbhWzyJ0Hbxh2oRt_yfKyS7rNmDJHQssF_HMMd5PBPWgOYa_Kd8L7hZWNKYL0fT9HdPvOJWgd55E6DaojzsfDUKG5qwlF_3YFdsYh3Co-Z7Y7Kg0SVE-xhlBrq1PcWyPlnUDc1MxDLASw9lek0wYBg',
    altText:
      'Sliced high-protein green spinach whole-wheat tortilla wrap stuffed with fluffy steamed egg whites, sautéed baby spinach, and light goat cheese.',
    eggType: 'Classic Commercial White Eggs',
    eggTypeKey: 'white',
    categories: ['High Protein (>20g)', 'Quick & Easy (<15 Mins)'],
    totalTimeMinutes: 10,
    prepTimeMinutes: 3,
    cookTimeMinutes: 7,
    difficulty: 'Easy',
    proteinGrams: 28,
    calories: 270,
    fatsGrams: 5,
    carbsGrams: 22,
    servings: 1,
    keyIngredients: ['Separated egg whites', 'baby spinach', 'wholegrain wrap', 'feta'],
    fullIngredients: [
      { item: 'Proteinova Clinical Grade Egg Whites (or 5 shell eggs)', amount: '150ml (5 whites)' },
      { item: 'Fresh baby spinach leaves', amount: '2 big handfuls' },
      { item: 'Low-fat artisanal paneer or feta', amount: '35g' },
      { item: 'Whole wheat high-fiber wrap/roti', amount: '1 wrap' },
      { item: 'Sun-dried tomato flakes & oregano', amount: '1 tsp' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Wilt Spinach',
        instruction: 'Toss spinach in a warm dry skillet until just wilted. Remove and drain excess moisture.',
        durationMinutes: 2,
      },
      {
        stepNumber: 2,
        title: 'Steamed Egg Whites',
        instruction: 'Whisk whites with sea salt and black pepper. Pour into skillet on medium-low and fold into clean white curds.',
        durationMinutes: 3,
        temperatureCelsius: 64,
      },
      {
        stepNumber: 3,
        title: 'Assemble & Toast',
        instruction: 'Layer egg whites, spinach, feta, and sun-dried tomatoes into the wrap. Roll tightly and toast seam-side down.',
        durationMinutes: 3,
      },
    ],
  },

  // 8. Japanese Tamagoyaki Rolled Omelette
  {
    id: 'japanese-tamagoyaki-rolled-omelette',
    title: 'Japanese Tamagoyaki Rolled Omelette',
    subtitle: 'Kansai Dashi Egg Artistry',
    description:
      'Layered, sweet-savory rolled egg perfection seasoned with light dashi stock, mirin, and pure cane sugar using square skillet pans.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCsv7sXTX-hoGIcJZO0A8HinciPxJZh2-PYVhi2Y1UdnppGcMXzsbWfXngpj4hnc0JlL5-TN0iGaQmYuiCdZzQ5jbfXIERq17T3ZnPqgQtG16CPXvoaMVSWyMutiWOLZEXh8kvBOQQgXYdHtdnxVhvmnORvbzq9aageJM1EmXZI9SvBwmRkx3paHiYh7Yd902qMngAbncnTMgtksEZEx49iYv6nemGMFAag7JuLLfkIx72luarrRScepQ',
    altText:
      'Artfully sliced Japanese tamagoyaki rolled omelette showing multiple thin golden yellow spiral layers on dark wabi-sabi ceramic.',
    eggType: 'Proteinova Grade-A White Eggs',
    eggTypeKey: 'white',
    categories: ['Gourmet & Baking', 'Breakfast Classics'],
    totalTimeMinutes: 15,
    prepTimeMinutes: 5,
    cookTimeMinutes: 10,
    difficulty: 'Medium',
    proteinGrams: 16,
    calories: 220,
    fatsGrams: 14,
    carbsGrams: 4,
    servings: 2,
    keyIngredients: ['Grade-A eggs', 'dashi broth', 'organic mirin', 'light soy', 'sesame oil'],
    fullIngredients: [
      { item: 'Proteinova Grade-A White Eggs', amount: '4 eggs' },
      { item: 'Kombu & bonito dashi broth', amount: '3 tbsp' },
      { item: 'Hon-mirin', amount: '1 tbsp' },
      { item: 'Light Japanese soy sauce (usukuchi)', amount: '1 tsp' },
      { item: 'Cane sugar', amount: '1 tsp' },
      { item: 'Grated daikon radish & shiso leaf', amount: 'for side garnish' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Strain Egg Batter',
        instruction: 'Whisk eggs cutting with chopsticks to avoid foaming. Mix in dashi, mirin, soy, and sugar. Pass through fine sieve.',
        durationMinutes: 3,
      },
      {
        stepNumber: 2,
        title: 'First Layer Pour',
        instruction: 'Oil tamagoyaki pan lightly. Pour thin film of egg. When half-set, roll from back to front.',
        durationMinutes: 3,
      },
      {
        stepNumber: 3,
        title: 'Repeat Multi-Layering',
        instruction: 'Push rolled log back, lift with spatula so new egg runs underneath. Repeat 4 times into tight golden cylinder.',
        durationMinutes: 6,
      },
    ],
  },

  // 9. Crispy Olive Oil Fried Duck Eggs
  {
    id: 'crispy-olive-oil-fried-duck-eggs',
    title: 'Crispy Olive Oil Fried Duck Eggs',
    subtitle: 'Lacy Edges with Jumbo Molten Yolk',
    description:
      'Cooked fast in rippling extra virgin olive oil: hyper-crispy lacy frills combined with an ultra-thick, luscious yolk reservoir.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAAGwaEglSvTwp8pMIAZb4gbTj1UUIEAQZn5fzkq-een8VdYqtOd4owIHUdLHyzg45h3l1fBI5buFeNEtszkWLeRW9QKq4ZbbEQj128X63KZx7TtCwfexaPZ4frTyAzBzB_izVI-TQkWqAkAbuZWf8JHBnNfWcXPBDDImtoLh5_DOlBlUrKWTfPWo4vatFghFSJz4LiWieTpjvErW3LcKAgFUKAWmUq7Kxxm82NVj2kKroOHGNepSgWyw',
    altText:
      'Crispy olive oil fried duck eggs with blistered lace-thin edges and an immense deep orange-gold runny yolk center.',
    eggType: 'Culinary Duck Eggs',
    eggTypeKey: 'duck',
    categories: ['Quick & Easy (<15 Mins)', 'High Protein (>20g)'],
    totalTimeMinutes: 8,
    prepTimeMinutes: 2,
    cookTimeMinutes: 6,
    difficulty: 'Easy',
    proteinGrams: 20,
    calories: 290,
    fatsGrams: 22,
    carbsGrams: 1,
    servings: 1,
    keyIngredients: ['Duck eggs', 'cold-pressed olive oil', 'zaatar herbs', 'crusty loaf'],
    fullIngredients: [
      { item: 'Proteinova Rich Culinary Duck Eggs', amount: '2 duck eggs' },
      { item: 'Cold-pressed extra virgin olive oil', amount: '3 tbsp' },
      { item: 'Levantine zaatar (thyme, sumac, sesame)', amount: '1 tsp' },
      { item: 'Coarse sea salt & crushed pink peppercorns', amount: 'to taste' },
      { item: 'Warm crusty artisan bread', amount: '2 thick slices' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Heat Olive Oil',
        instruction: 'Heat olive oil in small skillet until shimmering hot (about 180°C).',
        durationMinutes: 2,
        temperatureCelsius: 180,
      },
      {
        stepNumber: 2,
        title: 'Crack & Spoon Basting',
        instruction: 'Slip duck eggs directly into hot oil. Tilt skillet and spoon boiling oil continuously over whites around the yolk.',
        durationMinutes: 3,
      },
      {
        stepNumber: 3,
        title: 'Herbal Finish',
        instruction: 'Transfer crispy eggs onto plate. Sprinkle fragrant zaatar herbs and salt flakes.',
        durationMinutes: 1,
      },
    ],
  },

  // 10. Turkish Çılbır (Poached Eggs in Garlic Labneh)
  {
    id: 'turkish-cilbir-poached-eggs',
    title: 'Turkish Çılbır with Aleppo Chili Butter',
    subtitle: 'Ottoman Palace Poached Egg Tradition',
    description:
      'Warm poached country eggs nestled in garlicky whipped Greek yogurt, bathed in sizzling paprika-Aleppo pepper butter.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAJAVFGUugJ9ag0owTvfhiG_5XiB-Sk-hvf7EHZcSC4Lh8AFv7YhB8kVBSE8fOSkK27tKJpdDKF2ckxklWNUGdn6eA3rjaYaSy1yX3FrBP5_ZuPUkFnsu6OB5Jgm8lgE0k54cl5Lg_TGfwcrJXYXfDozRkpO__ozAm4vtziy87ZwTh_jibwW-SWD-0TWvxEMMhUpqLR5ef2yscOIE39Opj_o4mFb5yuUO3AEhmK7cWg1tGgTNHr4jdIBA',
    altText: 'Poached eggs over whipped garlic yogurt with red pepper infused butter and dill.',
    eggType: 'Country Free-Range Heritage',
    eggTypeKey: 'country',
    categories: ['Weekend Brunch', 'Breakfast Classics', 'High Protein (>20g)'],
    totalTimeMinutes: 16,
    prepTimeMinutes: 6,
    cookTimeMinutes: 10,
    difficulty: 'Medium',
    proteinGrams: 21,
    calories: 330,
    fatsGrams: 25,
    carbsGrams: 8,
    servings: 2,
    keyIngredients: ['Heritage eggs', 'Greek labneh', 'Aleppo pepper flakes', 'salted butter', 'fresh dill'],
    fullIngredients: [
      { item: 'Proteinova Country Free-Range Heritage Eggs', amount: '4 eggs' },
      { item: 'Strained Greek yogurt or labneh (room temp)', amount: '1 cup' },
      { item: 'Garlic (microplaned)', amount: '1 small clove' },
      { item: 'Grass-fed butter', amount: '35g' },
      { item: 'Aleppo pepper flakes or Turkish Pul Biber', amount: '1.5 tsp' },
      { item: 'Fresh dill fronds', amount: '2 tbsp' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Whip Labneh',
        instruction: 'Whip room-temperature Greek yogurt with microplaned garlic and a pinch of salt until velvety.',
        durationMinutes: 3,
      },
      {
        stepNumber: 2,
        title: 'Poach Heritage Eggs',
        instruction: 'Poach eggs in gentle 82°C water for 3.5 minutes until whites enclose runny yolks.',
        durationMinutes: 4,
      },
      {
        stepNumber: 3,
        title: 'Aleppo Butter Foam',
        instruction: 'Melt butter until foaming, turn off heat, and stir in Aleppo pepper flakes to infuse red crimson color.',
        durationMinutes: 2,
      },
      {
        stepNumber: 4,
        title: 'Plate & Spoon',
        instruction: 'Swirl labneh into shallow bowls, place poached eggs, and drizzle sizzling fragrant chili butter on top.',
        durationMinutes: 2,
      },
    ],
  },

  // 11. Parsi Akuri (Creamy Spiced Scramble)
  {
    id: 'parsi-akuri-spiced-scramble',
    title: 'Parsi Akuri on Buttered Brun Pav',
    subtitle: 'Zoroastrian Mumbai Heritage Breakfast',
    description:
      'Semi-runny, custard-textured eggs folded with finely diced ginger, raw green chilies, sweet shallots, and fresh turmeric.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBLuu0TqVbQ8cTkmCaEsaeLsx1BDK-MJr1TQW33bxMl2QDUDTnr679XHKcMZ6PFcewo74mgy9Upj-keRnf6NuehQ4EOxd5jsz-tnrJbSuUUZ9BuzjiIy-Yj_98JDk-ILGmLkTPP08fY0YbTrelDj_uaKXE55F_nJkBEZQGvBF85uUtQxkJoO48VPfgXwAMx9JkYnq0BjtaF1kwsYjvdZQTUd9No4Zly89cpYNmhyHz4dbAKOw7aYY4odQ',
    altText: 'Traditional Mumbai Parsi Akuri served with crusty brun pav and fresh mint.',
    eggType: 'Proteinova Classic White Eggs',
    eggTypeKey: 'white',
    categories: ['Regional Indian', 'Breakfast Classics', 'Quick & Easy (<15 Mins)'],
    totalTimeMinutes: 14,
    prepTimeMinutes: 5,
    cookTimeMinutes: 9,
    difficulty: 'Easy',
    proteinGrams: 19,
    calories: 295,
    fatsGrams: 20,
    carbsGrams: 10,
    servings: 2,
    keyIngredients: ['Classic eggs', 'fresh ginger', 'spicy green chilies', 'shallots', 'crusty pav'],
    fullIngredients: [
      { item: 'Proteinova Classic White Eggs', amount: '4 eggs (lightly beaten)' },
      { item: 'Finely minced onions', amount: '1/2 cup' },
      { item: 'Chopped green chilies & ginger paste', amount: '1 tbsp each' },
      { item: 'Turmeric and red chili powder', amount: '1/2 tsp each' },
      { item: 'Fresh coriander leaves', amount: '1/4 cup' },
      { item: 'Crisp hot Mumbai Brun Pav with salted butter', amount: '2 units' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Sauté Aromatics',
        instruction: 'Cook onions in butter until translucent. Add ginger, chilies, and ground spices for 1 minute.',
        durationMinutes: 4,
      },
      {
        stepNumber: 2,
        title: 'Pour & Fold',
        instruction: 'Pour in beaten eggs. Stir continuously. Crucially, remove from heat before it thickens completely.',
        durationMinutes: 3,
      },
    ],
  },

  // 12. Spanish Tortilla de Patatas
  {
    id: 'spanish-tortilla-de-patatas',
    title: 'Spanish Tortilla de Patatas Con Cebolla',
    subtitle: 'Slow-Poached Olive Oil Potato Omelette',
    description:
      'Thick, golden Spanish omelette with tender olive-oil poached potatoes, sweet caramelized onions, and a juicy soft interior.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCsv7sXTX-hoGIcJZO0A8HinciPxJZh2-PYVhi2Y1UdnppGcMXzsbWfXngpj4hnc0JlL5-TN0iGaQmYuiCdZzQ5jbfXIERq17T3ZnPqgQtG16CPXvoaMVSWyMutiWOLZEXh8kvBOQQgXYdHtdnxVhvmnORvbzq9aageJM1EmXZI9SvBwmRkx3paHiYh7Yd902qMngAbncnTMgtksEZEx49iYv6nemGMFAag7JuLLfkIx72luarrRScepQ',
    altText: 'Traditional Spanish Tortilla wedge showing warm juicy layers of potato and farm-fresh egg.',
    eggType: 'Farm-Fresh Brown Eggs',
    eggTypeKey: 'brown',
    categories: ['Weekend Brunch', 'Gourmet & Baking'],
    totalTimeMinutes: 35,
    prepTimeMinutes: 15,
    cookTimeMinutes: 20,
    difficulty: 'Medium',
    proteinGrams: 22,
    calories: 410,
    fatsGrams: 26,
    carbsGrams: 25,
    servings: 4,
    keyIngredients: ['Brown eggs', 'Yukon gold potatoes', 'sweet onion', 'Spanish olive oil'],
    fullIngredients: [
      { item: 'Proteinova Farm-Fresh Brown Eggs', amount: '6 large eggs' },
      { item: 'Thinly sliced Yukon gold potatoes', amount: '500g' },
      { item: 'Sweet Spanish yellow onion (sliced)', amount: '1 large' },
      { item: 'Extra virgin olive oil for confit', amount: '1.5 cups (drained after)' },
      { item: 'Flaky sea salt', amount: 'to taste' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Confit Potatoes & Onion',
        instruction: 'Submerge potatoes and onions in olive oil over low heat until spoon-tender without browning.',
        durationMinutes: 18,
      },
      {
        stepNumber: 2,
        title: 'Rest in Whisked Eggs',
        instruction: 'Drain potatoes, reserving oil. Stir warm potatoes directly into beaten eggs and rest 10 minutes so starch absorbs egg.',
        durationMinutes: 10,
      },
      {
        stepNumber: 3,
        title: 'Pan Flip & Seal',
        instruction: 'Cook in oiled nonstick pan on medium-high for 2 mins, invert with plate, and cook reverse side 1.5 mins.',
        durationMinutes: 5,
      },
    ],
  },

  // 13. Chettinad Mutta Masala Gravy
  {
    id: 'chettinad-mutta-masala-curry',
    title: 'Chettinad Stone-Ground Egg Masala',
    subtitle: 'Black Pepper & Kalpasi Heritage Spices',
    description:
      'Robust Tamil culinary staple featuring roasted fennel, star anise, black peppercorn, and fresh coconut gravy surrounding brown eggs.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAPgny9Cazx3s83HLkMH-Gr4gK0mCP_-FYQP4xdzO6k03ElpXdM_g1KidrYSeU5D8x0woHWlIr2s0qYJD9_axFlS_aeHoUA00LYoReX-dcj3euINt1bRM4HCzPGAV0BGVf5bXew4CDzU-Mw2_Slcj_5dvCM4bGyQ_JNmFqORVVLNyRw63IIVwiklAJRUNW92dM3NIGMp3K0DPch6YkO8RQbr4oTbqegh0yKLewvUA3_u_MPU40VSjx4eQ',
    altText: 'Dark spicy Chettinad egg curry with whole spices and fresh curry leaves.',
    eggType: 'Country Free-Range Heritage',
    eggTypeKey: 'country',
    categories: ['Regional Indian', 'High Protein (>20g)'],
    totalTimeMinutes: 28,
    prepTimeMinutes: 10,
    cookTimeMinutes: 18,
    difficulty: 'Medium',
    proteinGrams: 23,
    calories: 345,
    fatsGrams: 21,
    carbsGrams: 12,
    servings: 3,
    keyIngredients: ['Heritage country eggs', 'roasted peppercorns', 'coconut paste', 'shallots'],
    fullIngredients: [
      { item: 'Proteinova Country Free-Range Heritage Eggs', amount: '6 eggs (boiled)' },
      { item: 'Chettinad roasted spice blend (peppercorn, fennel, coriander)', amount: '2 tbsp' },
      { item: 'Grated fresh coconut paste', amount: '3 tbsp' },
      { item: 'Gingelly (sesame) oil', amount: '2 tbsp' },
      { item: 'Curry leaves and shallots', amount: '1 cup' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Toast Chettinad Spices',
        instruction: 'Dry roast black peppercorns, cumin, coriander seeds, and kalpasi stone flower until aromatic.',
        durationMinutes: 4,
      },
      {
        stepNumber: 2,
        title: 'Simmer Gravy',
        instruction: 'Sauté shallots in gingelly oil, add spice paste, coconut, and simmer until oil separates.',
        durationMinutes: 10,
      },
      {
        stepNumber: 3,
        title: 'Egg Bath',
        instruction: 'Prick eggs with fork and simmer in gravy for 6 minutes to infuse rich spices.',
        durationMinutes: 6,
      },
    ],
  },

  // 14. Hong Kong Dan Tat (Egg Tart Custard)
  {
    id: 'hong-kong-egg-tart-custard',
    title: 'Macau & Hong Kong Flaky Egg Tarts',
    subtitle: 'Mirror-Glazed Silken Egg Custard',
    description:
      'Laminated mille-feuille puff pastry cradling a glossy, trembling egg custard baked to golden perfection.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBP3jzb1lKaJ6PLw04acUWWumNCIUsoRTkKxPAspZVRhhi61aCOo_r-ihkrLYUyl0Y2nQL_OMyMPZu71jjIsNFPPckf4O_7KoMx-B9Ptbm_Ps7_3NIE159GqdgcGLUt0sz4wnogQRbEK0vcb-N6w_8HuKo_wBGf547NmD-edTqeOOoCkd3pF7QA42R1JbYXEcV1mp9ZlZdpGQW9HBut30YgbKTt00KRS1R5vBElIjguu-VGYgvAG_V0hw',
    altText: 'Warm Hong Kong egg tarts with glossy golden custard centers and flaky pastry cups.',
    eggType: 'Proteinova Grade-A White Eggs',
    eggTypeKey: 'white',
    categories: ['Gourmet & Baking', 'Weekend Brunch'],
    totalTimeMinutes: 40,
    prepTimeMinutes: 20,
    cookTimeMinutes: 20,
    difficulty: 'Advanced',
    proteinGrams: 12,
    calories: 285,
    fatsGrams: 16,
    carbsGrams: 28,
    servings: 6,
    keyIngredients: ['Fresh egg yolks', 'evaporated milk', 'vanilla bean', 'flaky puff pastry'],
    fullIngredients: [
      { item: 'Proteinova Egg Yolks + 1 whole egg', amount: '4 yolks + 1 egg' },
      { item: 'Evaporated milk & whole milk', amount: '1/2 cup each' },
      { item: 'Cane sugar dissolved in hot water', amount: '60g' },
      { item: 'Madagascar vanilla extract', amount: '1 tsp' },
      { item: 'Puff pastry sheets or tart shells', amount: '6 cases' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Silken Custard Sieve',
        instruction: 'Whisk eggs with warm milk and sugar syrup gently to avoid bubbles. Strain through micro-mesh 3 times.',
        durationMinutes: 10,
      },
      {
        stepNumber: 2,
        title: 'Bake at High Heat',
        instruction: 'Pour into chilled pastry shells. Bake at 200°C for 18–20 minutes until custard puffs slightly like a pillow.',
        durationMinutes: 20,
        temperatureCelsius: 200,
      },
    ],
  },

  // 15. Deviled Quail Eggs with Smoked Salmon
  {
    id: 'deviled-quail-eggs-salmon',
    title: 'Deviled Quail Eggs with Smoked Salmon',
    subtitle: 'Hors d’Oeuvre with Dijon & Chive',
    description:
      'Bite-sized concentrated quail yolks whipped with Dijon mustard, crème fraîche, and crowned with ribbons of Scottish smoked salmon.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAtHiNt6ItH0run0ND79pDx71QCKYf08CMxvmaXNEjGeR0sdOWMunS1chh6wIuL1cz4_8rVLjIaAG4KiPpbx3xmdhbwpTsT6lLQlyQxZ454gqOJYwqfVyrJydAIAq0Pj0F8JvNfR41ZRetQzBNDy7D5NG1eFswrigmTuQAEV_B3fw8WBfPGnAncKDB03qcLa49xUF86GL9kYQ9spdpeJzkdDC8rM8RxmaYqrQG96uO1O8D6oaMo1oeF0Q',
    altText: 'Elegantly piped deviled quail eggs with smoked salmon rose ribbons.',
    eggType: 'Concentrated Quail / Brown Eggs',
    eggTypeKey: 'quail',
    categories: ['Gourmet & Baking', 'Quick & Easy (<15 Mins)'],
    totalTimeMinutes: 14,
    prepTimeMinutes: 10,
    cookTimeMinutes: 4,
    difficulty: 'Easy',
    proteinGrams: 15,
    calories: 190,
    fatsGrams: 13,
    carbsGrams: 2,
    servings: 4,
    keyIngredients: ['Quail eggs', 'smoked salmon', 'Dijon mustard', 'crème fraîche'],
    fullIngredients: [
      { item: 'Proteinova Concentrated Quail Eggs', amount: '12 eggs' },
      { item: 'Dijon mustard & crème fraîche', amount: '1 tbsp each' },
      { item: 'Cold-smoked salmon ribbons', amount: '60g' },
      { item: 'Capers and baby dill sprigs', amount: 'for garnish' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: '3-Minute Quail Boil',
        instruction: 'Boil quail eggs for exactly 3 minutes, then chill in ice bath. Halve lengthwise and scoop yolks.',
        durationMinutes: 4,
      },
      {
        stepNumber: 2,
        title: 'Pipe & Garnish',
        instruction: 'Pipe whipped yolk mousse back into tiny egg whites. Top with smoked salmon and fresh dill.',
        durationMinutes: 8,
      },
    ],
  },

  // 16. Cloud Egg Nests with Parmesan & Bacon
  {
    id: 'cloud-egg-nests-parmesan',
    title: 'Parmesan Cloud Egg Nests',
    subtitle: 'Air-Whipped Meringue with Molten Centers',
    description:
      'Whipped egg white pillows folded with microplaned Reggiano cheese and smoky bits, baked with raw golden yolk centers.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAQ4e0BiDo0P5nxUXHEoSThUiNwFKFoqJUFAvf2O5aKcvLbEcpy0bBk5pjUlq6EsYyxT2R6kzoUCOFIyU_DK0Pgndriwm9mKVQmaTM6tVOpRTZ2KCx-tqrKpII2k3xm1i1TAXmRey-oxcroIlsukK5YcaBjNbPRftgtZt-0YWdFYs4WTAl1Dr6MHOdBMeXkXSi3XA_WXv7G2iS8Ock6un7k3IlRRYsddV7lG6s9C8u_e5Z9cjOBQ4WQ8Q',
    altText: 'Fluffy golden cloud egg nests on parchment paper with runny yolks in the center.',
    eggType: 'Proteinova Classic White Eggs',
    eggTypeKey: 'white',
    categories: ['Weekend Brunch', 'Breakfast Classics'],
    totalTimeMinutes: 18,
    prepTimeMinutes: 8,
    cookTimeMinutes: 10,
    difficulty: 'Medium',
    proteinGrams: 20,
    calories: 260,
    fatsGrams: 18,
    carbsGrams: 3,
    servings: 2,
    keyIngredients: ['Egg whites', 'egg yolks', 'aged Parmigiano Reggiano', 'smoked bacon crumbles'],
    fullIngredients: [
      { item: 'Proteinova Classic White Eggs', amount: '4 eggs (separated carefully)' },
      { item: 'Finely grated Parmigiano Reggiano', amount: '40g' },
      { item: 'Smoked crisp bacon or mushroom lardons', amount: '3 tbsp' },
      { item: 'Cracked black pepper & sea salt', amount: 'to taste' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Whip Stiff Peaks',
        instruction: 'Whip whites with a pinch of cream of tartar until stiff. Fold in Parmesan and bacon bits.',
        durationMinutes: 5,
      },
      {
        stepNumber: 2,
        title: 'Bake Nests & Add Yolks',
        instruction: 'Shape into 4 cloud nests on tray with well in center. Bake at 200°C for 5 mins, add yolks to center, and bake 3 mins more.',
        durationMinutes: 8,
        temperatureCelsius: 200,
      },
    ],
  },

  // 17. Bengali Dim Shorshe (Mustard Egg Curry)
  {
    id: 'bengali-dim-shorshe-curry',
    title: 'Bengali Dim Shorshe (Mustard Gravy)',
    subtitle: 'Kashundi & Green Chili Mustard Emulsion',
    description:
      'Pan-fried brown eggs bathed in an intensely pungent, yellow and black mustard paste stew cooked in cold-pressed mustard oil.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAPgny9Cazx3s83HLkMH-Gr4gK0mCP_-FYQP4xdzO6k03ElpXdM_g1KidrYSeU5D8x0woHWlIr2s0qYJD9_axFlS_aeHoUA00LYoReX-dcj3euINt1bRM4HCzPGAV0BGVf5bXew4CDzU-Mw2_Slcj_5dvCM4bGyQ_JNmFqORVVLNyRw63IIVwiklAJRUNW92dM3NIGMp3K0DPch6YkO8RQbr4oTbqegh0yKLewvUA3_u_MPU40VSjx4eQ',
    altText: 'Traditional Bengali Dim Shorshe with whole green chilies and mustard oil sheen.',
    eggType: 'Farm-Fresh Brown Eggs',
    eggTypeKey: 'brown',
    categories: ['Regional Indian', 'High Protein (>20g)'],
    totalTimeMinutes: 22,
    prepTimeMinutes: 7,
    cookTimeMinutes: 15,
    difficulty: 'Medium',
    proteinGrams: 21,
    calories: 310,
    fatsGrams: 20,
    carbsGrams: 9,
    servings: 2,
    keyIngredients: ['Brown eggs', 'yellow mustard paste', 'mustard oil', 'slit green chilies'],
    fullIngredients: [
      { item: 'Proteinova Farm-Fresh Brown Eggs', amount: '4 boiled eggs' },
      { item: 'Stone-ground yellow & black mustard seed paste', amount: '3 tbsp' },
      { item: 'Raw kachi ghani mustard oil', amount: '2 tbsp' },
      { item: 'Slit green chilies & nigella seeds (kalonji)', amount: '4 chilies, 1/2 tsp kalonji' },
      { item: 'Steamed Gobindobhog rice', amount: 'for serving' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Sear Boiled Eggs',
        instruction: 'Coat boiled eggs with turmeric and salt. Flash fry in hot mustard oil for 1 minute for golden skin.',
        durationMinutes: 3,
      },
      {
        stepNumber: 2,
        title: 'Mustard Tempering',
        instruction: 'Splutter nigella seeds and green chilies. Whisk mustard paste with warm water and simmer gently (do not overheat mustard or it bitters).',
        durationMinutes: 7,
      },
      {
        stepNumber: 3,
        title: 'Raw Oil Drizzle',
        instruction: 'Add eggs, drizzle 1 tsp raw pungent mustard oil on top, and turn off heat.',
        durationMinutes: 2,
      },
    ],
  },

  // 18. Duck Egg Carbonara con Guanciale
  {
    id: 'duck-egg-carbonara-guanciale',
    title: 'Roman Duck Egg Carbonara',
    subtitle: 'Cream-Free Pecorino Emulsion',
    description:
      'Authentic Roman tradition elevated by duck egg yolks: ultra-rich golden cream formed exclusively from starchy pasta water, crisp guanciale, and Pecorino Romano.',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAAGwaEglSvTwp8pMIAZb4gbTj1UUIEAQZn5fzkq-een8VdYqtOd4owIHUdLHyzg45h3l1fBI5buFeNEtszkWLeRW9QKq4ZbbEQj128X63KZx7TtCwfexaPZ4frTyAzBzB_izVI-TQkWqAkAbuZWf8JHBnNfWcXPBDDImtoLh5_DOlBlUrKWTfPWo4vatFghFSJz4LiWieTpjvErW3LcKAgFUKAWmUq7Kxxm82NVj2kKroOHGNepSgWyw',
    altText: 'Plate of thick spaghettoni wrapped in glossy duck egg yolk sauce with crisp guanciale and coarse black pepper.',
    eggType: 'Rich Culinary Duck Eggs',
    eggTypeKey: 'duck',
    categories: ['Gourmet & Baking', 'High Protein (>20g)', 'Weekend Brunch'],
    totalTimeMinutes: 20,
    prepTimeMinutes: 5,
    cookTimeMinutes: 15,
    difficulty: 'Advanced',
    proteinGrams: 26,
    calories: 520,
    fatsGrams: 28,
    carbsGrams: 42,
    servings: 2,
    keyIngredients: ['Duck egg yolks', 'cured guanciale', 'Pecorino Romano', 'bronze-die spaghettoni'],
    fullIngredients: [
      { item: 'Proteinova Rich Culinary Duck Egg Yolks', amount: '3 duck yolks + 1 whole duck egg' },
      { item: 'Cured pork guanciale (cubed)', amount: '100g' },
      { item: 'Finely grated Pecorino Romano DOP', amount: '60g' },
      { item: 'Bronze-die artisanal spaghettoni', amount: '200g' },
      { item: 'Toasted Tellicherry black peppercorns (coarsely crushed)', amount: '1.5 tbsp' },
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Crisp Guanciale',
        instruction: 'Render guanciale in a wide pan until crisp on the outside and chewy within. Set meat aside, keeping fragrant fat.',
        durationMinutes: 8,
      },
      {
        stepNumber: 2,
        title: 'Whisk Duck Yolk Paste',
        instruction: 'Whisk duck egg yolks, pecorino cheese, and half the pepper into a dense paste in a heatproof ceramic bowl.',
        durationMinutes: 3,
      },
      {
        stepNumber: 3,
        title: 'Off-Heat Emulsion',
        instruction: 'Toss al dente pasta into rendered fat. Remove pan COMPLETELY from heat. Add yolk paste and 1/3 cup hot starchy pasta water, stirring vigorously until glossy and silky.',
        durationMinutes: 4,
        temperatureCelsius: 64,
        proTip: 'Never heat the pan after adding yolks, or you will create scrambled carbonara.',
      },
    ],
  },
];
