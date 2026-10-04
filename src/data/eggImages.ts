/**
 * High-fidelity vector data URLs for the 5 raw egg varieties:
 * - Brown (Farm-Fresh Brown Eggs)
 * - Country (Country Free-Range Heritage)
 * - Duck Egg (Rich Culinary Duck Eggs)
 * - Quails (Concentrated Quail Eggs)
 * - White (Classic White Eggs)
 *
 * Using base64 data:image/svg+xml ensures:
 * 1. Zero network failure (embedded directly in bundle)
 * 2. Perfect MIME-type decoding without server header mismatches
 * 3. Immediate, crisp rendering across all screen resolutions
 */

function svgToDataUrl(svg: string): string {
  if (typeof window !== 'undefined' && window.btoa) {
    return `data:image/svg+xml;base64,${window.btoa(unescape(encodeURIComponent(svg)))}`;
  }
  // Node or fallback
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// 1. Brown Eggs (Farm-Fresh Brown in wicker basket with cracked golden yolk)
const brownEggSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" width="100%" height="100%">
  <defs>
    <radialGradient id="tableBg" cx="50%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#fff8f0"/>
      <stop offset="60%" stop-color="#eed8be"/>
      <stop offset="100%" stop-color="#d4b595"/>
    </radialGradient>
    <linearGradient id="woodBoard" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#8c582f"/>
      <stop offset="50%" stop-color="#6e401f"/>
      <stop offset="100%" stop-color="#4a2810"/>
    </linearGradient>
    <radialGradient id="brownShell" cx="38%" cy="32%" r="65%">
      <stop offset="0%" stop-color="#e29b63"/>
      <stop offset="45%" stop-color="#ba6f35"/>
      <stop offset="85%" stop-color="#7a3f16"/>
      <stop offset="100%" stop-color="#54280b"/>
    </radialGradient>
    <radialGradient id="brownShellFront" cx="35%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#ebb078"/>
      <stop offset="50%" stop-color="#c97c40"/>
      <stop offset="90%" stop-color="#824618"/>
      <stop offset="100%" stop-color="#592b0c"/>
    </radialGradient>
    <radialGradient id="yolkGrad" cx="35%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#fff385"/>
      <stop offset="40%" stop-color="#ffb703"/>
      <stop offset="80%" stop-color="#fb8500"/>
      <stop offset="100%" stop-color="#d95400"/>
    </radialGradient>
    <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#2c1a0c" flood-opacity="0.28"/>
    </filter>
    <filter id="eggShadow" x="-30%" y="-30%" width="160%" height="160%">
      <feDropShadow dx="0" dy="12" stdDeviation="12" flood-color="#361b0a" flood-opacity="0.32"/>
    </filter>
  </defs>

  <!-- Rustic Farm Table -->
  <rect width="1000" height="700" fill="url(#tableBg)"/>
  
  <!-- Wood Plank Grooves -->
  <line x1="0" y1="240" x2="1000" y2="240" stroke="#cbb293" stroke-width="2" opacity="0.45"/>
  <line x1="0" y1="480" x2="1000" y2="480" stroke="#cbb293" stroke-width="2" opacity="0.45"/>

  <!-- Straw Bed Under Basket -->
  <g stroke="#d9a85e" stroke-width="4" stroke-linecap="round" fill="none" opacity="0.75">
    <path d="M120,440 Q300,480 600,430"/>
    <path d="M160,460 Q380,500 680,450"/>
    <path d="M220,430 Q440,470 720,420"/>
  </g>

  <!-- Wicker Basket Structure -->
  <ellipse cx="440" cy="350" rx="300" ry="180" fill="url(#woodBoard)" filter="url(#softShadow)"/>
  <ellipse cx="440" cy="320" rx="280" ry="140" fill="#3b200c"/>
  <ellipse cx="440" cy="310" rx="265" ry="125" fill="#e8c894" opacity="0.85"/>

  <!-- Interwoven Straw Strands inside basket -->
  <g stroke="#cf9c48" stroke-width="5" stroke-linecap="round" fill="none" opacity="0.8">
    <path d="M220,290 Q360,250 500,300"/>
    <path d="M280,265 Q420,330 620,270"/>
    <path d="M240,320 Q440,270 650,320"/>
  </g>

  <!-- Eggs Inside Wicker Basket (Clustered) -->
  <g filter="url(#eggShadow)">
    <ellipse cx="320" cy="245" rx="68" ry="90" fill="url(#brownShell)" transform="rotate(-22 320 245)"/>
    <ellipse cx="430" cy="210" rx="72" ry="94" fill="url(#brownShell)" transform="rotate(4 430 210)"/>
    <ellipse cx="545" cy="240" rx="68" ry="90" fill="url(#brownShell)" transform="rotate(26 545 240)"/>
    <ellipse cx="340" cy="315" rx="76" ry="98" fill="url(#brownShellFront)" transform="rotate(-12 340 315)"/>
    <ellipse cx="445" cy="295" rx="78" ry="102" fill="url(#brownShellFront)" transform="rotate(2 445 295)"/>
    <ellipse cx="550" cy="320" rx="74" ry="96" fill="url(#brownShellFront)" transform="rotate(16 550 320)"/>
    <!-- Centerpiece Egg Plump -->
    <ellipse cx="430" cy="370" rx="80" ry="105" fill="url(#brownShellFront)" transform="rotate(8 430 370)"/>
  </g>

  <!-- Fresh Green Leaves -->
  <g filter="url(#softShadow)">
    <path d="M180,290 Q130,240 100,270 Q145,310 180,290 Z" fill="#2d6a2e"/>
    <path d="M180,290 Q225,230 250,260 Q210,310 180,290 Z" fill="#448d42"/>
    <path d="M120,480 Q70,450 60,490 Q100,515 120,480 Z" fill="#387a36"/>
  </g>

  <!-- Foreground Dark Wood Board with Cracked Egg -->
  <rect x="520" y="440" width="440" height="230" rx="20" fill="url(#woodBoard)" filter="url(#softShadow)"/>
  
  <!-- Clear Albumen Glassy Puddle -->
  <path d="M570,510 Q700,480 820,530 Q910,590 840,630 Q740,650 640,620 Q560,570 570,510 Z" fill="#ffffff" opacity="0.65"/>
  
  <!-- Broken Half Eggshell Resting on Board -->
  <path d="M590,530 Q540,550 560,605 Q620,625 655,575 Q630,540 590,530 Z" fill="url(#brownShell)"/>
  <path d="M590,530 Q565,565 580,595 Q610,580 605,555 Z" fill="#fff5eb" opacity="0.9"/>

  <!-- Plump, Golden-Orange Egg Yolk Dome -->
  <circle cx="730" cy="565" r="62" fill="url(#yolkGrad)" filter="url(#softShadow)"/>
  <!-- Specular Sun Reflection -->
  <ellipse cx="710" cy="540" rx="18" ry="11" fill="#ffffff" opacity="0.8" transform="rotate(-30 710 540)"/>

  <!-- Second Half Shell Fragment -->
  <path d="M830,520 Q875,495 905,535 Q890,575 855,560 Z" fill="url(#brownShell)"/>
  <path d="M835,525 Q865,510 885,535 Q875,555 855,545 Z" fill="#fff5eb" opacity="0.9"/>
</svg>`;

// 2. White Eggs (Classic White in wooden box with cracked egg)
const whiteEggSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" width="100%" height="100%">
  <defs>
    <radialGradient id="tableBgW" cx="50%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="60%" stop-color="#f2f5f3"/>
      <stop offset="100%" stop-color="#dce3de"/>
    </radialGradient>
    <radialGradient id="whiteShell" cx="36%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="45%" stop-color="#fafbfa"/>
      <stop offset="80%" stop-color="#e0e5e2"/>
      <stop offset="100%" stop-color="#b6c2bc"/>
    </radialGradient>
    <radialGradient id="whiteShellFront" cx="35%" cy="28%" r="65%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="50%" stop-color="#fdfefd"/>
      <stop offset="85%" stop-color="#e4ebe6"/>
      <stop offset="100%" stop-color="#beccc3"/>
    </radialGradient>
    <radialGradient id="yolkGradW" cx="35%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#fff885"/>
      <stop offset="40%" stop-color="#ffc300"/>
      <stop offset="80%" stop-color="#ff9500"/>
      <stop offset="100%" stop-color="#e06500"/>
    </radialGradient>
    <filter id="softShadowW" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="16" stdDeviation="18" flood-color="#14261d" flood-opacity="0.18"/>
    </filter>
  </defs>

  <rect width="1000" height="700" fill="url(#tableBgW)"/>

  <!-- Light Wood Crate Frame -->
  <rect x="150" y="240" width="600" height="240" rx="24" fill="#deb887" filter="url(#softShadowW)"/>
  <rect x="165" y="255" width="570" height="210" rx="16" fill="#f5deb3"/>
  
  <!-- Golden Straw inside Crate -->
  <g stroke="#d9a85e" stroke-width="4.5" stroke-linecap="round" fill="none" opacity="0.8">
    <path d="M180,310 Q320,260 480,320"/>
    <path d="M260,280 Q420,340 640,290"/>
    <path d="M220,350 Q440,290 680,340"/>
  </g>

  <!-- Pristine White Eggs Cluster -->
  <g filter="url(#softShadowW)">
    <ellipse cx="280" cy="275" rx="68" ry="92" fill="url(#whiteShell)" transform="rotate(-18 280 275)"/>
    <ellipse cx="380" cy="240" rx="72" ry="96" fill="url(#whiteShell)" transform="rotate(4 380 240)"/>
    <ellipse cx="490" cy="255" rx="70" ry="92" fill="url(#whiteShell)" transform="rotate(22 490 255)"/>
    <ellipse cx="600" cy="285" rx="68" ry="90" fill="url(#whiteShell)" transform="rotate(10 600 285)"/>
    <ellipse cx="320" cy="345" rx="76" ry="100" fill="url(#whiteShellFront)" transform="rotate(-10 320 345)"/>
    <ellipse cx="430" cy="325" rx="78" ry="104" fill="url(#whiteShellFront)" transform="rotate(2 430 325)"/>
    <ellipse cx="535" cy="340" rx="75" ry="98" fill="url(#whiteShellFront)" transform="rotate(14 535 340)"/>
  </g>

  <!-- Green Herbal Accent -->
  <path d="M130,230 Q80,180 50,210 Q95,250 130,230 Z" fill="#2d6a2e"/>
  <path d="M130,230 Q175,170 200,200 Q160,250 130,230 Z" fill="#448d42"/>

  <!-- Foreground: Cracked White Egg with Golden Yolk Spilling -->
  <!-- Albumen Liquid Spread -->
  <path d="M460,520 Q600,480 760,530 Q870,590 790,640 Q680,660 560,630 Q460,580 460,520 Z" fill="#ffffff" opacity="0.85" filter="url(#softShadowW)"/>

  <!-- Left Broken White Shell -->
  <path d="M480,540 Q430,560 450,615 Q510,635 545,585 Q520,550 480,540 Z" fill="url(#whiteShell)"/>
  <path d="M480,540 Q455,575 470,605 Q500,590 495,565 Z" fill="#ffffff"/>

  <!-- Bright Golden Yolk Sphere -->
  <circle cx="650" cy="575" r="62" fill="url(#yolkGradW)" filter="url(#softShadowW)"/>
  <ellipse cx="630" cy="550" rx="18" ry="11" fill="#ffffff" opacity="0.9" transform="rotate(-30 630 550)"/>

  <!-- Right Broken White Shell Half -->
  <path d="M750,530 Q795,505 825,545 Q810,585 775,570 Z" fill="url(#whiteShell)"/>
</svg>`;

// 3. Country Free-Range Heritage (Speckled eggs with farm rooster in background)
const countryEggSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" width="100%" height="100%">
  <defs>
    <radialGradient id="tableBgC" cx="50%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#fdf8ec"/>
      <stop offset="50%" stop-color="#e9ddc7"/>
      <stop offset="100%" stop-color="#cbb692"/>
    </radialGradient>
    <radialGradient id="countryShell" cx="38%" cy="32%" r="65%">
      <stop offset="0%" stop-color="#d69b6a"/>
      <stop offset="45%" stop-color="#ab6b38"/>
      <stop offset="85%" stop-color="#734019"/>
      <stop offset="100%" stop-color="#4d270c"/>
    </radialGradient>
    <radialGradient id="yolkGradC" cx="35%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#ffea66"/>
      <stop offset="40%" stop-color="#fb8500"/>
      <stop offset="80%" stop-color="#d94e00"/>
      <stop offset="100%" stop-color="#9e3000"/>
    </radialGradient>
    <filter id="softShadowC" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="16" stdDeviation="18" flood-color="#2a1908" flood-opacity="0.3"/>
    </filter>
  </defs>

  <rect width="1000" height="700" fill="url(#tableBgC)"/>

  <!-- Green Farm Pasture Silhouette in Background -->
  <path d="M0,280 Q250,220 500,260 Q750,220 1000,280 L1000,0 L0,0 Z" fill="#88b884" opacity="0.25"/>

  <!-- Heritage Rooster Farm Silhouette (Right Background) -->
  <g opacity="0.45" transform="translate(720, 80) scale(0.65)">
    <!-- Body -->
    <ellipse cx="140" cy="180" rx="60" ry="70" fill="#7a3411"/>
    <!-- Rooster Tail Feathers -->
    <path d="M180,160 Q260,80 240,240 Q180,210 180,160 Z" fill="#1b3b24"/>
    <path d="M170,150 Q230,60 210,230" stroke="#0f2617" stroke-width="12" fill="none"/>
    <!-- Head & Comb -->
    <circle cx="100" cy="110" r="30" fill="#8c3d14"/>
    <path d="M90,85 Q100,65 110,85 Q120,65 130,90 Z" fill="#d90429"/>
    <!-- Beak -->
    <polygon points="75,110 50,118 75,126" fill="#ffb703"/>
  </g>

  <!-- Wicker Basket with Straw -->
  <ellipse cx="410" cy="380" rx="310" ry="190" fill="#693c17" filter="url(#softShadowC)"/>
  <ellipse cx="410" cy="350" rx="285" ry="150" fill="#3b200b"/>
  <ellipse cx="410" cy="340" rx="270" ry="135" fill="#e8c792" opacity="0.85"/>

  <!-- Golden Pasture Straw -->
  <g stroke="#cf9842" stroke-width="5" stroke-linecap="round" fill="none" opacity="0.8">
    <path d="M190,320 Q340,270 500,330"/>
    <path d="M260,290 Q420,360 640,300"/>
    <path d="M210,380 Q440,310 680,370"/>
  </g>

  <!-- Speckled Country Eggs in Basket -->
  <g filter="url(#softShadowC)">
    <ellipse cx="290" cy="275" rx="68" ry="92" fill="url(#countryShell)" transform="rotate(-20 290 275)"/>
    <ellipse cx="400" cy="235" rx="72" ry="96" fill="url(#countryShell)" transform="rotate(4 400 235)"/>
    <ellipse cx="510" cy="265" rx="70" ry="92" fill="url(#countryShell)" transform="rotate(24 510 265)"/>
    <ellipse cx="320" cy="355" rx="76" ry="102" fill="url(#countryShell)" transform="rotate(-12 320 355)"/>
    <ellipse cx="425" cy="335" rx="78" ry="105" fill="url(#countryShell)" transform="rotate(2 425 335)"/>
    <ellipse cx="530" cy="355" rx="75" ry="100" fill="url(#countryShell)" transform="rotate(16 530 355)"/>
  </g>

  <!-- Earthy Natural Speckles on Eggs -->
  <g fill="#381c08" opacity="0.6">
    <circle cx="280" cy="260" r="4"/><circle cx="300" cy="285" r="3"/><circle cx="265" cy="295" r="2.5"/>
    <circle cx="390" cy="220" r="5"/><circle cx="415" cy="245" r="3.5"/><circle cx="380" cy="260" r="4"/>
    <circle cx="500" cy="250" r="4.5"/><circle cx="525" cy="275" r="3"/><circle cx="490" cy="290" r="3.5"/>
    <circle cx="310" cy="340" r="5"/><circle cx="335" cy="365" r="4"/><circle cx="305" cy="385" r="3"/>
    <circle cx="415" cy="320" r="6"/><circle cx="440" cy="350" r="4.5"/><circle cx="410" cy="370" r="4"/>
    <circle cx="520" cy="340" r="5"/><circle cx="545" cy="365" r="3.5"/>
  </g>

  <!-- Green Banana Leaf Base in Foreground -->
  <path d="M480,480 Q640,430 840,480 Q960,560 880,630 Q740,680 580,630 Q460,560 480,480 Z" fill="#4f8b48" opacity="0.9" filter="url(#softShadowC)"/>
  <line x1="490" y1="520" x2="860" y2="600" stroke="#376832" stroke-width="4"/>

  <!-- Cracked Open Country Egg on Banana Leaf -->
  <ellipse cx="710" cy="570" r="58" fill="url(#yolkGradC)" filter="url(#softShadowC)"/>
  <ellipse cx="690" cy="545" rx="16" ry="10" fill="#ffffff" opacity="0.85" transform="rotate(-30 690 545)"/>

  <!-- Broken Country Eggshell Halves -->
  <path d="M570,530 Q530,550 545,605 Q605,625 640,575 Z" fill="url(#countryShell)"/>
  <path d="M790,520 Q835,495 865,535 Q850,575 815,560 Z" fill="url(#countryShell)"/>
</svg>`;

// 4. Duck Eggs (Pale white/light jade porcelain shells with enormous yolk)
const duckEggSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" width="100%" height="100%">
  <defs>
    <radialGradient id="tableBgD" cx="50%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#f5f7f5"/>
      <stop offset="60%" stop-color="#e3e8e4"/>
      <stop offset="100%" stop-color="#c8d1ca"/>
    </radialGradient>
    <radialGradient id="duckShell" cx="36%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#ffffff"/>
      <stop offset="45%" stop-color="#edf3ef"/>
      <stop offset="80%" stop-color="#c8d7cd"/>
      <stop offset="100%" stop-color="#9fb0a5"/>
    </radialGradient>
    <radialGradient id="yolkGradD" cx="35%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#ffe266"/>
      <stop offset="35%" stop-color="#ff9900"/>
      <stop offset="75%" stop-color="#e85d04"/>
      <stop offset="100%" stop-color="#b03a00"/>
    </radialGradient>
    <filter id="softShadowD" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="16" stdDeviation="18" flood-color="#14241b" flood-opacity="0.22"/>
    </filter>
  </defs>

  <rect width="1000" height="700" fill="url(#tableBgD)"/>

  <!-- Bamboo Woven Basket -->
  <ellipse cx="440" cy="350" rx="310" ry="180" fill="#a48259" filter="url(#softShadowD)"/>
  <ellipse cx="440" cy="320" rx="290" ry="140" fill="#543e24"/>
  <ellipse cx="440" cy="310" rx="275" ry="125" fill="#f0e2cc" opacity="0.85"/>

  <!-- Large, Colossal Duck Eggs in Basket -->
  <g filter="url(#softShadowD)">
    <!-- Back row -->
    <ellipse cx="310" cy="245" rx="78" ry="105" fill="url(#duckShell)" transform="rotate(-18 310 245)"/>
    <ellipse cx="440" cy="210" rx="82" ry="110" fill="url(#duckShell)" transform="rotate(4 440 210)"/>
    <ellipse cx="570" cy="245" rx="78" ry="105" fill="url(#duckShell)" transform="rotate(22 570 245)"/>
    <!-- Front row -->
    <ellipse cx="340" cy="335" rx="84" ry="112" fill="url(#duckShell)" transform="rotate(-10 340 335)"/>
    <ellipse cx="460" cy="310" rx="86" ry="115" fill="url(#duckShell)" transform="rotate(2 460 310)"/>
    <ellipse cx="580" cy="335" rx="82" ry="110" fill="url(#duckShell)" transform="rotate(16 580 335)"/>
  </g>

  <!-- Herb Garnish -->
  <path d="M180,280 Q130,230 100,260 Q145,300 180,280 Z" fill="#2d6a2e"/>

  <!-- Foreground: Massive Dense Duck Egg Yolk and Clear Albumen -->
  <path d="M520,490 Q680,450 840,510 Q940,580 860,635 Q740,660 600,625 Q500,560 520,490 Z" fill="#ffffff" opacity="0.75" filter="url(#softShadowD)"/>

  <!-- Colossal Yolk (Extra Large Diameter) -->
  <circle cx="710" cy="565" r="74" fill="url(#yolkGradD)" filter="url(#softShadowD)"/>
  <ellipse cx="685" cy="535" rx="22" ry="13" fill="#ffffff" opacity="0.85" transform="rotate(-30 685 535)"/>

  <!-- Duck Shell Halves (Porcelain Pale Hue) -->
  <path d="M550,520 Q500,545 520,605 Q585,625 625,570 Z" fill="url(#duckShell)"/>
  <path d="M820,510 Q870,485 905,530 Q890,575 850,560 Z" fill="url(#duckShell)"/>
</svg>`;

// 5. Quail Eggs (Heavily mottled dark speckles on miniature eggs)
const quailEggSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 700" width="100%" height="100%">
  <defs>
    <radialGradient id="tableBgQ" cx="50%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#faf5ec"/>
      <stop offset="60%" stop-color="#ebdcc7"/>
      <stop offset="100%" stop-color="#cbba9e"/>
    </radialGradient>
    <radialGradient id="quailShell" cx="38%" cy="32%" r="65%">
      <stop offset="0%" stop-color="#f0e2cf"/>
      <stop offset="50%" stop-color="#d4be9f"/>
      <stop offset="85%" stop-color="#9e8564"/>
      <stop offset="100%" stop-color="#69533a"/>
    </radialGradient>
    <radialGradient id="yolkGradQ" cx="35%" cy="30%" r="65%">
      <stop offset="0%" stop-color="#fff580"/>
      <stop offset="40%" stop-color="#ffaa00"/>
      <stop offset="80%" stop-color="#ff7b00"/>
      <stop offset="100%" stop-color="#cc4400"/>
    </radialGradient>
    <filter id="softShadowQ" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="16" stdDeviation="16" flood-color="#2a1a0c" flood-opacity="0.25"/>
    </filter>
  </defs>

  <rect width="1000" height="700" fill="url(#tableBgQ)"/>

  <!-- Wicker Basket -->
  <ellipse cx="420" cy="360" rx="310" ry="180" fill="#754720" filter="url(#softShadowQ)"/>
  <ellipse cx="420" cy="330" rx="285" ry="145" fill="#38200c"/>
  <ellipse cx="420" cy="320" rx="270" ry="130" fill="#e2c496" opacity="0.85"/>

  <!-- Multiple Miniature Quail Eggs (Dense Pile) -->
  <g filter="url(#softShadowQ)">
    <!-- Row 1 -->
    <ellipse cx="270" cy="270" rx="42" ry="56" fill="url(#quailShell)" transform="rotate(-15 270 270)"/>
    <ellipse cx="350" cy="240" rx="44" ry="58" fill="url(#quailShell)" transform="rotate(8 350 240)"/>
    <ellipse cx="430" cy="225" rx="45" ry="60" fill="url(#quailShell)" transform="rotate(-4 430 225)"/>
    <ellipse cx="510" cy="245" rx="44" ry="58" fill="url(#quailShell)" transform="rotate(22 510 245)"/>
    <ellipse cx="590" cy="275" rx="42" ry="56" fill="url(#quailShell)" transform="rotate(12 590 275)"/>
    <!-- Row 2 -->
    <ellipse cx="305" cy="330" rx="46" ry="62" fill="url(#quailShell)" transform="rotate(-8 305 330)"/>
    <ellipse cx="385" cy="305" rx="48" ry="64" fill="url(#quailShell)" transform="rotate(5 385 305)"/>
    <ellipse cx="470" cy="315" rx="48" ry="64" fill="url(#quailShell)" transform="rotate(-6 470 315)"/>
    <ellipse cx="550" cy="340" rx="46" ry="62" fill="url(#quailShell)" transform="rotate(18 550 340)"/>
    <!-- Row 3 Foreground -->
    <ellipse cx="360" cy="380" rx="48" ry="65" fill="url(#quailShell)" transform="rotate(14 360 380)"/>
    <ellipse cx="445" cy="370" rx="50" ry="66" fill="url(#quailShell)" transform="rotate(-3 445 370)"/>
    <ellipse cx="525" cy="390" rx="48" ry="65" fill="url(#quailShell)" transform="rotate(10 525 390)"/>
  </g>

  <!-- Heavy Characteristic Chocolate-Brown Mottled Blotches -->
  <g fill="#241306">
    <!-- Egg 1 -->
    <circle cx="265" cy="260" r="7"/><circle cx="280" cy="280" r="5"/><circle cx="255" cy="285" r="4"/><circle cx="275" cy="250" r="6"/>
    <!-- Egg 2 -->
    <circle cx="340" cy="230" r="8"/><circle cx="360" cy="250" r="6"/><circle cx="335" cy="260" r="5"/>
    <!-- Egg 3 -->
    <circle cx="420" cy="215" r="9"/><circle cx="445" cy="235" r="7"/><circle cx="410" cy="245" r="6"/><circle cx="435" cy="255" r="5"/>
    <!-- Egg 4 -->
    <circle cx="500" cy="235" r="8"/><circle cx="525" cy="255" r="6"/><circle cx="495" cy="270" r="7"/>
    <!-- Egg 5 -->
    <circle cx="580" cy="265" r="7"/><circle cx="600" cy="290" r="5"/><circle cx="575" cy="295" r="6"/>
    <!-- Egg 6 -->
    <circle cx="295" cy="320" r="9"/><circle cx="320" cy="345" r="7"/><circle cx="290" cy="355" r="6"/>
    <!-- Egg 7 -->
    <circle cx="375" cy="295" r="10"/><circle cx="400" cy="320" r="8"/><circle cx="365" cy="335" r="7"/>
    <!-- Egg 8 -->
    <circle cx="460" cy="305" r="10"/><circle cx="485" cy="330" r="8"/><circle cx="450" cy="345" r="6"/>
    <!-- Egg 9 -->
    <circle cx="540" cy="330" r="9"/><circle cx="565" cy="355" r="7"/><circle cx="535" cy="370" r="6"/>
    <!-- Egg 10 -->
    <circle cx="350" cy="370" r="10"/><circle cx="375" cy="395" r="8"/><circle cx="345" cy="405" r="6"/>
    <!-- Egg 11 -->
    <circle cx="435" cy="360" r="11"/><circle cx="460" cy="385" r="8"/><circle cx="425" cy="400" r="7"/>
    <!-- Egg 12 -->
    <circle cx="515" cy="380" r="10"/><circle cx="540" cy="405" r="7"/><circle cx="505" cy="420" r="6"/>
  </g>

  <!-- Foreground: Tiny Cracked Speckled Quail Egg -->
  <!-- Albumen -->
  <path d="M640,510 Q730,480 820,520 Q880,570 820,610 Q740,625 660,600 Q620,560 640,510 Z" fill="#ffffff" opacity="0.75" filter="url(#softShadowQ)"/>
  
  <!-- Miniature Yolk (Petite & Vibrant) -->
  <circle cx="740" cy="560" r="38" fill="url(#yolkGradQ)" filter="url(#softShadowQ)"/>
  <ellipse cx="725" cy="545" rx="12" ry="7" fill="#ffffff" opacity="0.85" transform="rotate(-30 725 545)"/>

  <!-- Broken Tiny Shell with Speckles -->
  <path d="M660,530 Q630,550 645,595 Q690,610 715,570 Z" fill="url(#quailShell)"/>
  <circle cx="665" cy="555" r="4.5" fill="#241306"/><circle cx="680" cy="575" r="4" fill="#241306"/>
</svg>`;

export const EGG_IMAGE_DATA_URLS: Record<string, string> = {
  brown: svgToDataUrl(brownEggSvg),
  white: svgToDataUrl(whiteEggSvg),
  country: svgToDataUrl(countryEggSvg),
  duck: svgToDataUrl(duckEggSvg),
  quail: svgToDataUrl(quailEggSvg),
};

export function getProductEggImage(eggTypeKey: string, fallbackUrl?: string): string {
  if (EGG_IMAGE_DATA_URLS[eggTypeKey]) {
    return EGG_IMAGE_DATA_URLS[eggTypeKey];
  }
  return fallbackUrl || EGG_IMAGE_DATA_URLS['brown'];
}
