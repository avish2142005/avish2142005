const fs = require("fs");
const path = require("path");

const assetsDir = path.resolve(__dirname, "../assets");

console.log("[generate-got-theme] Crafting Game of Thrones Valyrian Theme for Avish Kumar (@avish2142005)...");

// Read Jon Snow commander image as base64 for embedding in the SVG dossier
const commanderImgPath = path.join(assetsDir, "got-jon-snow-commander.png");
let commanderBase64 = "";
if (fs.existsSync(commanderImgPath)) {
  const buf = fs.readFileSync(commanderImgPath);
  commanderBase64 = `data:image/png;base64,${buf.toString("base64")}`;
}

// -------------------------------------------------------------
// 1. HERO BANNER: got-hero-banner.svg (and ronin-hero-v2.svg)
// -------------------------------------------------------------
function getHeroBannerSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 520" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <!-- Background Gradients: Castle Black & Northern Frost -->
    <linearGradient id="gotHeroBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#03060b" />
      <stop offset="35%" stop-color="#070d18" />
      <stop offset="70%" stop-color="#0b1626" />
      <stop offset="100%" stop-color="#030509" />
    </linearGradient>

    <!-- Valyrian Steel Blade Gradient -->
    <linearGradient id="valyrianSteel" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="30%" stop-color="#cbd5e1" />
      <stop offset="50%" stop-color="#64748b" />
      <stop offset="70%" stop-color="#94a3b8" />
      <stop offset="100%" stop-color="#f8fafc" />
    </linearGradient>

    <!-- Northern Frost Ice Blue Gradient -->
    <linearGradient id="iceFrostGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="50%" stop-color="#7dd3fc" />
      <stop offset="100%" stop-color="#0284c7" />
    </linearGradient>

    <!-- Iron Throne / Valyrian Gold Gradient -->
    <linearGradient id="ironGold" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f59e0b" />
      <stop offset="50%" stop-color="#fde047" />
      <stop offset="100%" stop-color="#d97706" />
    </linearGradient>

    <!-- Radiant Ambient Frost Auras -->
    <radialGradient id="heroFrostAura" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.32" />
      <stop offset="50%" stop-color="#0284c7" stop-opacity="0.12" />
      <stop offset="100%" stop-color="#03060b" stop-opacity="0" />
    </radialGradient>
    <radialGradient id="direwolfGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#7dd3fc" stop-opacity="0.38" />
      <stop offset="100%" stop-color="#000" stop-opacity="0" />
    </radialGradient>

    <!-- Filters for Magical Valyrian Glow -->
    <filter id="iceGlowFilter" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="5" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
    <filter id="runicGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="7" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>

    <!-- Castle Wall / Frost Grid Pattern -->
    <pattern id="frostGrid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#16253b" stroke-width="0.8" opacity="0.6" />
      <circle cx="48" cy="48" r="1.2" fill="#38bdf8" opacity="0.3" />
    </pattern>

    <style>
      @keyframes runeGlowPulse {
        0%, 100% { opacity: 0.65; filter: drop-shadow(0 0 4px #38bdf8); }
        50% { opacity: 1; filter: drop-shadow(0 0 14px #7dd3fc); }
      }
      @keyframes frostLaserScan {
        0% { stroke-dashoffset: 4400; }
        100% { stroke-dashoffset: 0; }
      }
      @keyframes snowDrift {
        0% { transform: translateY(0px) translateX(0px); opacity: 0.2; }
        50% { opacity: 0.85; transform: translateY(260px) translateX(30px); }
        100% { transform: translateY(520px) translateX(-20px); opacity: 0.1; }
      }
      @keyframes bladeGleam {
        0% { transform: translateX(-300px); opacity: 0; }
        40% { opacity: 0.8; }
        70% { opacity: 0.8; }
        100% { transform: translateX(1800px); opacity: 0; }
      }
      .rune-pulse { animation: runeGlowPulse 4s ease-in-out infinite; }
      .laser-border {
        stroke-dasharray: 260 4140;
        animation: frostLaserScan 8s linear infinite;
      }
      .snow-flake-1 { animation: snowDrift 9s linear infinite; }
      .snow-flake-2 { animation: snowDrift 13s linear infinite 3s; }
      .snow-flake-3 { animation: snowDrift 11s linear infinite 6s; }
    </style>
  </defs>

  <!-- Background Base -->
  <rect width="1600" height="520" fill="url(#gotHeroBg)" />
  <rect width="1600" height="520" fill="url(#frostGrid)" />

  <!-- Ambient Light Wells -->
  <circle cx="280" cy="260" r="340" fill="url(#direwolfGlow)" />
  <circle cx="1200" cy="240" r="420" fill="url(#heroFrostAura)" />

  <!-- Decorative Valyrian Perimeter Border -->
  <rect x="16" y="16" width="1568" height="488" rx="6" fill="none" stroke="#1e324f" stroke-width="1.5" />
  <rect x="22" y="22" width="1556" height="476" rx="4" fill="none" stroke="#0e1e32" stroke-width="1" />
  <!-- Moving Frost Edge Laser -->
  <rect x="16" y="16" width="1568" height="488" rx="6" fill="none" stroke="#38bdf8" stroke-width="2.5" class="laser-border" filter="url(#iceGlowFilter)" />

  <!-- Corner Runes (Ancient Northern Seals) -->
  <g fill="none" stroke="#38bdf8" stroke-width="1.5" class="rune-pulse">
    <!-- Top-Left Corner -->
    <path d="M 16 60 L 60 16 M 16 35 L 35 16 M 16 16 L 90 16 M 16 16 L 16 90" />
    <circle cx="38" cy="38" r="4" fill="#38bdf8" />
    <!-- Top-Right Corner -->
    <path d="M 1584 60 L 1540 16 M 1584 35 L 1565 16 M 1584 16 L 1510 16 M 1584 16 L 1584 90" />
    <circle cx="1562" cy="38" r="4" fill="#38bdf8" />
    <!-- Bottom-Left Corner -->
    <path d="M 16 460 L 60 504 M 16 485 L 35 504 M 16 504 L 90 504 M 16 504 L 16 430" />
    <circle cx="38" cy="482" r="4" fill="#38bdf8" />
    <!-- Bottom-Right Corner -->
    <path d="M 1584 460 L 1540 504 M 1584 485 L 1565 504 M 1584 504 L 1510 504 M 1584 504 L 1584 430" />
    <circle cx="1562" cy="482" r="4" fill="#38bdf8" />
  </g>

  <!-- Left Emblematics: House Stark Direwolf Crest & Longclaw Sword -->
  <g transform="translate(130, 90)">
    <!-- Shield Outline -->
    <path d="M 150 20 L 260 65 L 240 240 Q 150 340 150 360 Q 150 340 60 240 L 40 65 Z" fill="#08101e" stroke="#253e63" stroke-width="2" />
    <path d="M 150 32 L 246 72 L 228 230 Q 150 322 150 340 Q 150 322 72 230 L 54 72 Z" fill="#0c172a" stroke="#38bdf8" stroke-width="1.2" opacity="0.8" />

    <!-- Direwolf Sigil Vector (Stylized House Stark Wolf Head) -->
    <g transform="translate(150, 185) scale(0.95)">
      <!-- Wolf Head Path -->
      <path d="M 0 -85 L 22 -60 L 48 -68 L 38 -35 L 68 -20 L 82 10 L 60 25 L 75 55 L 42 62 L 30 85 L 5 72 L -5 72 L -30 85 L -42 62 L -75 55 L -60 25 L -82 10 L -68 -20 L -38 -35 L -48 -68 L -22 -60 Z" fill="#132034" stroke="#94a3b8" stroke-width="2" />
      <!-- Snout & Eyes -->
      <path d="M -30 -10 L 0 -45 L 30 -10 L 18 35 L 0 52 L -18 35 Z" fill="#1c2d46" stroke="#38bdf8" stroke-width="1.5" />
      <polygon points="-24,-8 -12,-16 -16, -2" fill="#38bdf8" filter="url(#runicGlow)" />
      <polygon points="24,-8 12,-16 16, -2" fill="#38bdf8" filter="url(#runicGlow)" />
      <!-- Fangs -->
      <polygon points="-12,28 -7,40 -2,28" fill="#f8fafc" />
      <polygon points="12,28 7,40 2,28" fill="#f8fafc" />
    </g>

    <!-- Longclaw Crossguard & Pommel (The White Wolf) -->
    <g transform="translate(150, 10)">
      <!-- Blade tip pointing up -->
      <line x1="0" y1="-30" x2="0" y2="350" stroke="#f8fafc" stroke-width="3" filter="url(#iceGlowFilter)" />
      <line x1="-1" y1="-30" x2="-1" y2="350" stroke="#38bdf8" stroke-width="1" />
      <!-- Guard -->
      <line x1="-55" y1="18" x2="55" y2="18" stroke="#94a3b8" stroke-width="4.5" stroke-linecap="round" />
      <circle cx="-55" cy="18" r="4" fill="#38bdf8" />
      <circle cx="55" cy="18" r="4" fill="#38bdf8" />
      <!-- Grip -->
      <rect x="-4" y="-18" width="8" height="34" rx="2" fill="#1e293b" stroke="#64748b" stroke-width="1" />
      <!-- Direwolf Head Pommel -->
      <circle cx="0" cy="-24" r="10" fill="#e2e8f0" stroke="#64748b" stroke-width="1.5" />
      <circle cx="-3" cy="-25" r="1.5" fill="#e11d48" />
      <circle cx="3" cy="-25" r="1.5" fill="#e11d48" />
    </g>

    <!-- Seal Banner Under Crest -->
    <rect x="40" y="375" width="220" height="30" rx="3" fill="#080e18" stroke="#38bdf8" stroke-width="1.2" />
    <text x="150" y="395" text-anchor="middle" font-family="'Cinzel', 'Palatino', 'Georgia', serif" font-size="12" font-weight="900" fill="#38bdf8" letter-spacing="3">HOUSE STARK OF WINTERFELL</text>
  </g>

  <!-- Center & Right Identity Hierarchy -->
  <g transform="translate(480, 85)">
    <!-- Realm Top Category -->
    <g transform="translate(0, 25)">
      <rect x="0" y="0" width="280" height="26" rx="3" fill="#0b1728" stroke="#38bdf8" stroke-width="1" />
      <circle cx="14" cy="13" r="4" fill="#38bdf8" filter="url(#iceGlowFilter)" />
      <text x="32" y="18" font-family="'Courier New', Consolas, monospace" font-size="11.5" font-weight="800" fill="#7dd3fc" letter-spacing="2">SEVEN KINGDOMS // THE NORTH</text>
    </g>

    <!-- Main Identity Title: AVISH KUMAR -->
    <g transform="translate(0, 105)">
      <!-- Backdrop glow -->
      <text x="0" y="0" font-family="'Cinzel', 'Trajan Pro', 'Palatino', 'Georgia', serif" font-size="64" font-weight="900" fill="#38bdf8" letter-spacing="5" opacity="0.3" filter="url(#runicGlow)">AVISH KUMAR</text>
      <!-- Main Metallic Text -->
      <text x="0" y="0" font-family="'Cinzel', 'Trajan Pro', 'Palatino', 'Georgia', serif" font-size="64" font-weight="900" fill="url(#valyrianSteel)" letter-spacing="5">AVISH KUMAR</text>
    </g>

    <!-- Subtitle: THE KING IN THE NORTH & LORD COMMANDER -->
    <g transform="translate(4, 150)">
      <text x="0" y="0" font-family="'Cinzel', 'Georgia', serif" font-size="21" font-weight="700" fill="url(#iceFrostGrad)" letter-spacing="3.5">KING IN THE NORTH &#8226; LORD COMMANDER OF CODE</text>
    </g>

    <!-- Valyrian Steel Blade Divider Bar -->
    <g transform="translate(0, 172)">
      <line x1="0" y1="0" x2="880" y2="0" stroke="#1e3350" stroke-width="2" />
      <line x1="0" y1="0" x2="520" y2="0" stroke="#38bdf8" stroke-width="2.5" filter="url(#iceGlowFilter)" />
      <!-- Central Gem -->
      <polygon points="520,-6 526,0 520,6 514,0" fill="#7dd3fc" />
    </g>

    <!-- The Night's Watch Oath Monologue -->
    <g transform="translate(2, 215)">
      <text x="0" y="0" font-family="'Georgia', serif" font-style="italic" font-size="16" fill="#cbd5e1" letter-spacing="1">"Night gathers, and now my watch begins. I am the sword in the darkness.</text>
      <text x="0" y="26" font-family="'Georgia', serif" font-style="italic" font-size="16" fill="#94a3b8" letter-spacing="1">I am the watcher on the walls. I am the shield that guards the realms of open source."</text>
    </g>

    <!-- Tactical Telemetry Metric Badges (Grid of 4) -->
    <g transform="translate(0, 280)">
      <!-- Box 1: Castle Black HQ -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="200" height="60" rx="4" fill="#08101d" stroke="#1d3352" stroke-width="1.2" />
        <rect x="0" y="0" width="4" height="60" fill="#38bdf8" />
        <text x="16" y="22" font-family="'Courier New', monospace" font-size="10" font-weight="800" fill="#64748b" letter-spacing="1.5">ROYAL STRONGHOLD</text>
        <text x="16" y="44" font-family="'Cinzel', serif" font-size="16" font-weight="800" fill="#f8fafc">WINTERFELL</text>
      </g>

      <!-- Box 2: Valyrian Weaponry -->
      <g transform="translate(220, 0)">
        <rect x="0" y="0" width="200" height="60" rx="4" fill="#08101d" stroke="#1d3352" stroke-width="1.2" />
        <rect x="0" y="0" width="4" height="60" fill="#38bdf8" />
        <text x="16" y="22" font-family="'Courier New', monospace" font-size="10" font-weight="800" fill="#64748b" letter-spacing="1.5">ANCESTRAL BLADE</text>
        <text x="16" y="44" font-family="'Cinzel', serif" font-size="16" font-weight="800" fill="url(#valyrianSteel)">LONGCLAW [S+]</text>
      </g>

      <!-- Box 3: Motto -->
      <g transform="translate(440, 0)">
        <rect x="0" y="0" width="210" height="60" rx="4" fill="#08101d" stroke="#1d3352" stroke-width="1.2" />
        <rect x="0" y="0" width="4" height="60" fill="#e11d48" />
        <text x="16" y="22" font-family="'Courier New', monospace" font-size="10" font-weight="800" fill="#fda4af" letter-spacing="1.5">ANCIENT MOTTO</text>
        <text x="16" y="44" font-family="'Cinzel', serif" font-size="15" font-weight="800" fill="#f8fafc">WINTER IS COMING</text>
      </g>

      <!-- Box 4: Citadel Clearance -->
      <g transform="translate(670, 0)">
        <rect x="0" y="0" width="210" height="60" rx="4" fill="#08101d" stroke="#1d3352" stroke-width="1.2" />
        <rect x="0" y="0" width="4" height="60" fill="#f59e0b" />
        <text x="16" y="22" font-family="'Courier New', monospace" font-size="10" font-weight="800" fill="#fde047" letter-spacing="1.5">CITADEL RANK</text>
        <text x="16" y="44" font-family="'Cinzel', serif" font-size="16" font-weight="800" fill="url(#ironGold)">HIGH ARCHITECT</text>
      </g>
    </g>

    <!-- GitHub Handle Link Pin -->
    <g transform="translate(0, 365)">
      <rect x="0" y="0" width="310" height="32" rx="3" fill="#0c172a" stroke="#38bdf8" stroke-width="1" />
      <text x="15" y="21" font-family="'Courier New', monospace" font-size="12" font-weight="800" fill="#38bdf8">&gt; GITHUB.COM/AVISH2142005</text>
      <circle cx="290" cy="16" r="4" fill="#10b981" />
    </g>
  </g>

  <!-- Animated Snow Particles Layer -->
  <g fill="#e0f2fe" opacity="0.6">
    <circle cx="200" cy="80" r="1.8" class="snow-flake-1" />
    <circle cx="450" cy="40" r="2.2" class="snow-flake-2" />
    <circle cx="700" cy="110" r="1.5" class="snow-flake-3" />
    <circle cx="950" cy="60" r="2.0" class="snow-flake-1" />
    <circle cx="1200" cy="90" r="1.6" class="snow-flake-2" />
    <circle cx="1400" cy="30" r="2.5" class="snow-flake-3" />
    <circle cx="320" cy="160" r="1.9" class="snow-flake-2" />
    <circle cx="850" cy="200" r="1.4" class="snow-flake-3" />
    <circle cx="1300" cy="180" r="2.1" class="snow-flake-1" />
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 2. STATUS BADGES: got-status-badges.svg (and samurai-status-badges.svg)
// -------------------------------------------------------------
function getStatusBadgesSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 36" fill="none">
  <defs>
    <linearGradient id="starkPillBlue" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284c7" />
      <stop offset="100%" stop-color="#38bdf8" />
    </linearGradient>
    <linearGradient id="starkPillSilver" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#475569" />
      <stop offset="100%" stop-color="#94a3b8" />
    </linearGradient>
    <linearGradient id="starkPillGreen" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#059669" />
      <stop offset="100%" stop-color="#10b981" />
    </linearGradient>
    <linearGradient id="starkPillGold" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#d97706" />
      <stop offset="100%" stop-color="#fbbf24" />
    </linearGradient>
  </defs>

  <g transform="translate(6, 2)" font-family="'Cinzel', 'SF Mono', Consolas, monospace" font-size="10.5" font-weight="900" letter-spacing="1">
    <!-- 01: IDENTITY -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="76" height="32" rx="3" fill="#080e18" stroke="#1e293b" stroke-width="1" />
      <text x="38" y="20" text-anchor="middle" fill="#94a3b8" font-size="9.5">WARRIOR</text>
      <rect x="79" y="0" width="115" height="32" rx="3" fill="url(#starkPillBlue)" />
      <text x="136" y="20" text-anchor="middle" fill="#040711">AVISH KUMAR</text>
    </g>

    <!-- 02: HOUSE -->
    <g transform="translate(206, 0)">
      <rect x="0" y="0" width="62" height="32" rx="3" fill="#080e18" stroke="#1e293b" stroke-width="1" />
      <text x="31" y="20" text-anchor="middle" fill="#94a3b8" font-size="9.5">HOUSE</text>
      <rect x="65" y="0" width="102" height="32" rx="3" fill="url(#starkPillSilver)" />
      <text x="116" y="20" text-anchor="middle" fill="#03060f">STARK</text>
    </g>

    <!-- 03: STATUS -->
    <g transform="translate(385, 0)">
      <rect x="0" y="0" width="68" height="32" rx="3" fill="#080e18" stroke="#1e293b" stroke-width="1" />
      <circle cx="14" cy="16" r="3.5" fill="#10b981" />
      <text x="42" y="20" text-anchor="middle" fill="#94a3b8" font-size="9.5">WATCH</text>
      <rect x="71" y="0" width="86" height="32" rx="3" fill="url(#starkPillGreen)" />
      <text x="114" y="20" text-anchor="middle" fill="#03060f">VIGILANT</text>
    </g>

    <!-- 04: KEEP -->
    <g transform="translate(554, 0)">
      <rect x="0" y="0" width="56" height="32" rx="3" fill="#080e18" stroke="#1e293b" stroke-width="1" />
      <text x="28" y="20" text-anchor="middle" fill="#94a3b8" font-size="9.5">KEEP</text>
      <rect x="59" y="0" width="108" height="32" rx="3" fill="url(#starkPillBlue)" />
      <text x="113" y="20" text-anchor="middle" fill="#040711">WINTERFELL</text>
    </g>

    <!-- 05: STEEL -->
    <g transform="translate(733, 0)">
      <rect x="0" y="0" width="68" height="32" rx="3" fill="#080e18" stroke="#1e293b" stroke-width="1" />
      <text x="34" y="20" text-anchor="middle" fill="#94a3b8" font-size="9.5">BLADE</text>
      <rect x="71" y="0" width="102" height="32" rx="3" fill="url(#starkPillGold)" />
      <text x="122" y="20" text-anchor="middle" fill="#03060f">VALYRIAN S+</text>
    </g>
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 3. SECTION HEADERS: Generic Generator
// -------------------------------------------------------------
function getGotSectionHeaderSvg(num, title, subtitle) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 86" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="gotHdrBg_${num}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#060c18" />
      <stop offset="50%" stop-color="#0a1426" />
      <stop offset="100%" stop-color="#04070e" />
    </linearGradient>
    <linearGradient id="gotHdrLaser_${num}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0284c7" />
      <stop offset="50%" stop-color="#7dd3fc" />
      <stop offset="100%" stop-color="#38bdf8" />
    </linearGradient>
    <filter id="hdrGlow_${num}" x="-10%" y="-10%" width="120%" height="120%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
    <style>
      @keyframes edgeTrace_${num} {
        0% { stroke-dashoffset: 2100; }
        100% { stroke-dashoffset: 0; }
      }
      .laser-edge_${num} {
        stroke-dasharray: 190 1910;
        animation: edgeTrace_${num} 5s linear infinite;
      }
    </style>
  </defs>

  <!-- Background Slab -->
  <rect width="920" height="86" rx="4" fill="url(#gotHdrBg_${num})" />
  <rect width="920" height="86" rx="4" fill="none" stroke="#16253c" stroke-width="1.2" />
  <rect width="920" height="86" rx="4" fill="none" stroke="#38bdf8" stroke-width="2" class="laser-edge_${num}" filter="url(#hdrGlow_${num})" />

  <!-- Section Number Badge -->
  <g transform="translate(20, 20)">
    <rect x="0" y="0" width="70" height="46" rx="3" fill="#0c182c" stroke="#38bdf8" stroke-width="1.5" />
    <path d="M 0 0 L 10 0 L 0 10 Z" fill="#38bdf8" />
    <text x="35" y="30" text-anchor="middle" font-family="'Cinzel', 'Courier New', monospace" font-size="20" font-weight="900" fill="#38bdf8">${num}</text>
  </g>

  <!-- Main Title & Hierarchy -->
  <g transform="translate(108, 32)">
    <text x="0" y="0" font-family="'Cinzel', 'Palatino', serif" font-size="20" font-weight="900" fill="#f8fafc" letter-spacing="2.5">${title}</text>
    <text x="0" y="24" font-family="'Courier New', Consolas, monospace" font-size="11.5" font-weight="700" fill="#7dd3fc" letter-spacing="1.5">${subtitle}</text>
  </g>

  <!-- Direwolf Sigil Embellishment (Right) -->
  <g transform="translate(850, 43)">
    <circle cx="0" cy="0" r="22" fill="#0c182c" stroke="#1e3a5f" stroke-width="1.5" />
    <!-- Mini Wolf Head -->
    <path d="M 0 -12 L 6 -6 L 12 -4 L 6 3 L 8 10 L 0 7 L -8 10 L -6 3 L -12 -4 L -6 -6 Z" fill="#38bdf8" opacity="0.9" filter="url(#hdrGlow_${num})" />
  </g>

  <!-- Valyrian Blade Underline -->
  <line x1="108" y1="68" x2="800" y2="68" stroke="#162a45" stroke-width="1" />
  <line x1="108" y1="68" x2="320" y2="68" stroke="#38bdf8" stroke-width="1.5" />
</svg>`;
}

// -------------------------------------------------------------
// 4. OPERATIVE DOSSIER: got-operative-dossier.svg (and operative-dossier-v2.svg)
// -------------------------------------------------------------
function getOperativeDossierSvg() {
  const avatarImageXml = commanderBase64
    ? `<image href="${commanderBase64}" xlink:href="${commanderBase64}" x="-76" y="-76" width="152" height="152" preserveAspectRatio="xMidYMid slice" clip-path="url(#wolfAvatarClip)" />`
    : `<image href="got-jon-snow-commander.png" xlink:href="got-jon-snow-commander.png" x="-76" y="-76" width="152" height="152" preserveAspectRatio="xMidYMid slice" clip-path="url(#wolfAvatarClip)" />`;

  return `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 920 490" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="gotDosBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#040812" />
      <stop offset="50%" stop-color="#08101f" />
      <stop offset="100%" stop-color="#03060c" />
    </linearGradient>
    <linearGradient id="gotBlueText" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#93c5fd" />
    </linearGradient>
    <radialGradient id="avatarFrostGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#000" stop-opacity="0" />
    </radialGradient>
    <clipPath id="wolfAvatarClip">
      <circle cx="0" cy="0" r="74" />
    </clipPath>
    <filter id="dosGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3.5" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <rect width="920" height="490" rx="6" fill="url(#gotDosBg)" />
  <rect width="920" height="490" rx="6" fill="none" stroke="#1a2f4c" stroke-width="1.5" />
  <rect width="910" height="480" x="5" y="5" rx="4" fill="none" stroke="#0e1b2c" stroke-width="1" />

  <!-- Corner Brackets -->
  <g stroke="#38bdf8" stroke-width="2" fill="none">
    <path d="M 5 35 L 5 5 L 35 5" />
    <path d="M 915 35 L 915 5 L 885 5" />
    <path d="M 5 455 L 5 485 L 35 485" />
    <path d="M 915 455 L 915 485 L 885 485" />
  </g>

  <!-- Left Column: Dossier Intel Text -->
  <g transform="translate(36, 45)">
    <!-- Header Stamp -->
    <rect x="0" y="0" width="340" height="28" rx="3" fill="#0e1e34" stroke="#38bdf8" stroke-width="1" />
    <text x="14" y="19" font-family="'Courier New', Consolas, monospace" font-size="11.5" font-weight="900" fill="#38bdf8" letter-spacing="2">CITADEL DOSSIER // LORD COMMANDER</text>

    <!-- Name & Titles -->
    <text x="0" y="65" font-family="'Cinzel', 'Palatino', serif" font-size="28" font-weight="900" fill="#f8fafc" letter-spacing="2">AVISH KUMAR</text>
    <text x="0" y="92" font-family="'Cinzel', serif" font-size="13" font-weight="700" fill="url(#gotBlueText)" letter-spacing="1.5">KING IN THE NORTH &#8226; THE WHITE WOLF OF CODE</text>

    <!-- Key-Value Fields -->
    <g transform="translate(0, 125)" font-family="'Courier New', Consolas, monospace" font-size="12">
      <!-- 01 -->
      <text x="0" y="0" fill="#64748b" font-weight="800">ALLEGIANCE:</text>
      <text x="140" y="0" fill="#f8fafc" font-weight="800">House Stark of Winterfell &#8226; The Night's Watch</text>

      <!-- 02 -->
      <text x="0" y="28" fill="#64748b" font-weight="800">CODENAME:</text>
      <text x="140" y="28" fill="#38bdf8" font-weight="800">avish2142005 [Verified Shield]</text>

      <!-- 03 -->
      <text x="0" y="56" fill="#64748b" font-weight="800">WEAPON OF CHOICE:</text>
      <text x="140" y="56" fill="#f8fafc" font-weight="800">Python &#8226; TypeScript &#8226; Full-Stack Systems</text>

      <!-- 04 -->
      <text x="0" y="84" fill="#64748b" font-weight="800">ACTIVE REALMS:</text>
      <text x="140" y="84" fill="#38bdf8" font-weight="800">AquaOS &#8226; Nutri-ai &#8226; Live Markdown Studio</text>

      <!-- 05 -->
      <text x="0" y="112" fill="#64748b" font-weight="800">CITADEL DEGREE:</text>
      <text x="140" y="112" fill="#f8fafc" font-weight="800">Valyrian Architecture &amp; System Reliability</text>

      <!-- 06 -->
      <text x="0" y="140" fill="#64748b" font-weight="800">CURRENT CAMPAIGN:</text>
      <text x="140" y="140" fill="#10b981" font-weight="800">Fortifying Northern Repositories // 2026</text>
    </g>

    <!-- Night's Watch Sacred Directive -->
    <g transform="translate(0, 310)">
      <rect x="0" y="0" width="530" height="95" rx="4" fill="#081424" stroke="#1d3557" stroke-width="1.2" />
      <rect x="0" y="0" width="4" height="95" fill="#38bdf8" />
      <text x="18" y="24" font-family="'Cinzel', serif" font-size="12" font-weight="900" fill="#38bdf8" letter-spacing="1">THE NIGHT'S WATCH PLEDGE:</text>
      <text x="18" y="48" font-family="'Georgia', serif" font-style="italic" font-size="13" fill="#cbd5e1">"I pledge my life and honor to the Night's Watch,</text>
      <text x="18" y="68" font-family="'Georgia', serif" font-style="italic" font-size="13" fill="#cbd5e1">for this night and all the nights to come."</text>
      <text x="18" y="86" font-family="'Courier New', monospace" font-size="10.5" font-weight="700" fill="#7dd3fc">&gt; SHIPPING RELIABLE PRODUCTION SOFTWARE UNTIL DAWN.</text>
    </g>
  </g>

  <!-- Right Column: Jon Snow / Lord Commander Portrait Frame -->
  <g transform="translate(745, 230)">
    <!-- Outer Frost Aura -->
    <circle cx="0" cy="0" r="115" fill="url(#avatarFrostGlow)" />

    <!-- Outer Decorative Rings -->
    <circle cx="0" cy="0" r="96" fill="none" stroke="#1d3557" stroke-width="1.5" />
    <circle cx="0" cy="0" r="88" fill="none" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="16 8" />
    <circle cx="0" cy="0" r="80" fill="#060c18" stroke="#38bdf8" stroke-width="2.5" filter="url(#dosGlow)" />

    <!-- Avatar Image (Jon Snow King in the North / Lord Commander) -->
    ${avatarImageXml}

    <!-- Cardinal Runes -->
    <g fill="#38bdf8" font-family="'Cinzel', serif" font-size="10" font-weight="900" text-anchor="middle">
      <text x="0" y="-102">N</text>
      <text x="108" y="4">E</text>
      <text x="0" y="112">S</text>
      <text x="-108" y="4">W</text>
    </g>

    <!-- Seal Tag Under Portrait -->
    <rect x="-85" y="130" width="170" height="28" rx="3" fill="#0a1628" stroke="#38bdf8" stroke-width="1.2" />
    <text x="0" y="149" text-anchor="middle" font-family="'Cinzel', serif" font-size="11" font-weight="900" fill="#f8fafc" letter-spacing="1.5">JON SNOW // KING</text>
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 5. DEVELOPER RANK / CAPABILITY RADAR: got-developer-rank.svg (and developer-rank.svg)
// -------------------------------------------------------------
function getDeveloperRankSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 460" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="rankBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#050a16" />
      <stop offset="50%" stop-color="#091325" />
      <stop offset="100%" stop-color="#03060d" />
    </linearGradient>
    <radialGradient id="radarRadarGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#000" stop-opacity="0" />
    </radialGradient>
    <filter id="rankGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3.5" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <rect width="920" height="460" rx="6" fill="url(#rankBg)" />
  <rect width="920" height="460" rx="6" fill="none" stroke="#162942" stroke-width="1.5" />

  <!-- Left Side: Hexagonal Valyrian Radar -->
  <g transform="translate(250, 230)">
    <circle cx="0" cy="0" r="160" fill="url(#radarRadarGlow)" />

    <!-- Concentric Hexagons (20%, 40%, 60%, 80%, 100%) -->
    <polygon points="0,-30 26,-15 26,15 0,30 -26,15 -26,-15" fill="none" stroke="#1a2d48" stroke-width="1" />
    <polygon points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30" fill="none" stroke="#1a2d48" stroke-width="1" />
    <polygon points="0,-90 78,-45 78,45 0,90 -78,45 -78,-45" fill="none" stroke="#1e3656" stroke-width="1" />
    <polygon points="0,-120 104,-60 104,60 0,120 -104,60 -104,-60" fill="none" stroke="#25436c" stroke-width="1" />
    <polygon points="0,-150 130,-75 130,75 0,150 -130,75 -130,-75" fill="none" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="6 4" />

    <!-- Radial Axis Spoke Lines -->
    <line x1="0" y1="0" x2="0" y2="-150" stroke="#284670" stroke-width="1" />
    <line x1="0" y1="0" x2="130" y2="-75" stroke="#284670" stroke-width="1" />
    <line x1="0" y1="0" x2="130" y2="75" stroke="#284670" stroke-width="1" />
    <line x1="0" y1="0" x2="0" y2="150" stroke="#284670" stroke-width="1" />
    <line x1="0" y1="0" x2="-130" y2="75" stroke="#284670" stroke-width="1" />
    <line x1="0" y1="0" x2="-130" y2="-75" stroke="#284670" stroke-width="1" />

    <!-- Avish Kumar's Actual Combat Polygon (Valyrian Code Poly) -->
    <!-- Points: Systems=96%(-144), AI/ML=94%(122,-70), FullStack=92%(120,69), Algorithms=90%(0,135), DevOps=88%(-114,66), Architecture=95%(-124,-71) -->
    <polygon points="0,-144 122,-70 120,69 0,135 -114,66 -124,-71" fill="#38bdf8" fill-opacity="0.3" stroke="#7dd3fc" stroke-width="2.5" filter="url(#rankGlow)" />

    <!-- Vertices Dots -->
    <circle cx="0" cy="-144" r="4.5" fill="#f8fafc" />
    <circle cx="122" cy="-70" r="4.5" fill="#f8fafc" />
    <circle cx="120" cy="69" r="4.5" fill="#f8fafc" />
    <circle cx="0" cy="135" r="4.5" fill="#f8fafc" />
    <circle cx="-114" cy="66" r="4.5" fill="#f8fafc" />
    <circle cx="-124" cy="-71" r="4.5" fill="#f8fafc" />

    <!-- Node Labels -->
    <text x="0" y="-165" text-anchor="middle" font-family="'Cinzel', serif" font-size="11.5" font-weight="900" fill="#f8fafc">SYSTEMS [96%]</text>
    <text x="145" y="-72" font-family="'Cinzel', serif" font-size="11.5" font-weight="900" fill="#f8fafc">AI / ML [94%]</text>
    <text x="145" y="82" font-family="'Cinzel', serif" font-size="11.5" font-weight="900" fill="#f8fafc">FULL-STACK [92%]</text>
    <text x="0" y="172" text-anchor="middle" font-family="'Cinzel', serif" font-size="11.5" font-weight="900" fill="#f8fafc">ALGORITHMS [90%]</text>
    <text x="-145" y="82" text-anchor="end" font-family="'Cinzel', serif" font-size="11.5" font-weight="900" fill="#f8fafc">DEVOPS [88%]</text>
    <text x="-145" y="-72" text-anchor="end" font-family="'Cinzel', serif" font-size="11.5" font-weight="900" fill="#f8fafc">ARCHITECTURE [95%]</text>
  </g>

  <!-- Right Side: Tactical Mastery Matrix & Breakdown -->
  <g transform="translate(500, 48)">
    <rect x="0" y="0" width="380" height="30" rx="3" fill="#0d1b30" stroke="#38bdf8" stroke-width="1.2" />
    <text x="16" y="20" font-family="'Cinzel', serif" font-size="13" font-weight="900" fill="#38bdf8" letter-spacing="2">VALYRIAN COMBAT RATING: S+ GRADE</text>

    <!-- Capability Bars -->
    <g transform="translate(0, 55)" font-family="'Courier New', monospace" font-size="11.5" font-weight="800">
      <!-- 01: Python Systems -->
      <g transform="translate(0, 0)">
        <text x="0" y="16" fill="#f8fafc">01 // PYTHON ARCHITECTURE &amp; KERNELS</text>
        <text x="340" y="16" fill="#38bdf8">96%</text>
        <rect x="0" y="24" width="380" height="8" rx="2" fill="#0f1f35" />
        <rect x="0" y="24" width="365" height="8" rx="2" fill="#38bdf8" />
      </g>
      <!-- 02: TypeScript / Full-Stack -->
      <g transform="translate(0, 52)">
        <text x="0" y="16" fill="#f8fafc">02 // TYPESCRIPT &amp; REACT ECOSYSTEM</text>
        <text x="340" y="16" fill="#38bdf8">93%</text>
        <rect x="0" y="24" width="380" height="8" rx="2" fill="#0f1f35" />
        <rect x="0" y="24" width="353" height="8" rx="2" fill="#0284c7" />
      </g>
      <!-- 03: AI & Cognitive Agents -->
      <g transform="translate(0, 104)">
        <text x="0" y="16" fill="#f8fafc">03 // AI &amp; HEALTH INFORMATICS (Nutri-ai)</text>
        <text x="340" y="16" fill="#38bdf8">91%</text>
        <rect x="0" y="24" width="380" height="8" rx="2" fill="#0f1f35" />
        <rect x="0" y="24" width="345" height="8" rx="2" fill="#38bdf8" />
      </g>
      <!-- 04: Backend & APIs (Flask, REST) -->
      <g transform="translate(0, 156)">
        <text x="0" y="16" fill="#f8fafc">04 // BACKEND SERVICES &amp; FLASK ENGINE</text>
        <text x="340" y="16" fill="#38bdf8">92%</text>
        <rect x="0" y="24" width="380" height="8" rx="2" fill="#0f1f35" />
        <rect x="0" y="24" width="350" height="8" rx="2" fill="#0284c7" />
      </g>
      <!-- 05: Linux & Tooling -->
      <g transform="translate(0, 208)">
        <text x="0" y="16" fill="#f8fafc">05 // LINUX, GIT &amp; INFRASTRUCTURE</text>
        <text x="340" y="16" fill="#38bdf8">90%</text>
        <rect x="0" y="24" width="380" height="8" rx="2" fill="#0f1f35" />
        <rect x="0" y="24" width="342" height="8" rx="2" fill="#38bdf8" />
      </g>
    </g>

    <!-- Bottom Verdict Badge -->
    <g transform="translate(0, 335)">
      <rect x="0" y="0" width="380" height="42" rx="4" fill="#081424" stroke="#1d3557" stroke-width="1.2" />
      <circle cx="20" cy="21" r="5" fill="#10b981" />
      <text x="36" y="25" font-family="'Cinzel', serif" font-size="12" font-weight="900" fill="#f8fafc">THE NORTH EVALUATION: COMBAT READY</text>
    </g>
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 6. VALYRIAN DIVIDER: valyrian-divider.svg & katana-divider.svg
// -------------------------------------------------------------
function getValyrianDividerSvg(isReverse = false) {
  const flip = isReverse ? `transform="scale(-1, 1) translate(-920, 0)"` : "";
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 32" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="valBladeGrad_${isReverse ? "rev" : "fwd"}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0" />
      <stop offset="30%" stop-color="#38bdf8" />
      <stop offset="50%" stop-color="#f8fafc" />
      <stop offset="70%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#38bdf8" stop-opacity="0" />
    </linearGradient>
    <filter id="valGlow_${isReverse ? "rev" : "fwd"}" x="-10%" y="-10%" width="120%" height="120%">
      <feGaussianBlur stdDeviation="2.5" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <g ${flip}>
    <!-- Central Blade Line -->
    <line x1="80" y1="16" x2="840" y2="16" stroke="url(#valBladeGrad_${isReverse ? "rev" : "fwd"})" stroke-width="2" filter="url(#valGlow_${isReverse ? "rev" : "fwd"})" />
    <line x1="160" y1="16" x2="760" y2="16" stroke="#f8fafc" stroke-width="1" />

    <!-- Center Longclaw Pommel (Direwolf Emblem) -->
    <g transform="translate(460, 16)">
      <polygon points="0,-10 10,0 0,10 -10,0" fill="#0c182c" stroke="#38bdf8" stroke-width="1.5" />
      <polygon points="0,-6 6,0 0,6 -6,0" fill="#f8fafc" />
      <circle cx="0" cy="0" r="1.5" fill="#e11d48" />
    </g>

    <!-- Side Runes -->
    <circle cx="280" cy="16" r="3" fill="#38bdf8" />
    <circle cx="640" cy="16" r="3" fill="#38bdf8" />
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 7. WEIRWOOD TELEMETRY: got-telemetry-grid.svg & samurai-telemetry-grid.svg
// -------------------------------------------------------------
function getTelemetryGridSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 380" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="telBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#040813" />
      <stop offset="50%" stop-color="#081122" />
      <stop offset="100%" stop-color="#03050a" />
    </linearGradient>
  </defs>

  <rect width="920" height="380" rx="6" fill="url(#telBg)" />
  <rect width="920" height="380" rx="6" fill="none" stroke="#162942" stroke-width="1.5" />

  <!-- Top Banner -->
  <g transform="translate(24, 20)">
    <rect x="0" y="0" width="872" height="42" rx="4" fill="#0b172a" stroke="#38bdf8" stroke-width="1.2" />
    <circle cx="24" cy="21" r="5" fill="#38bdf8" />
    <text x="42" y="26" font-family="'Cinzel', serif" font-size="14" font-weight="900" fill="#f8fafc" letter-spacing="2">WEIRWOOD TELEMETRY ENGINE &#8226; AVISH KUMAR (@AVISH2142005)</text>
    <text x="840" y="26" text-anchor="end" font-family="'Courier New', monospace" font-size="12" font-weight="800" fill="#10b981">LIVE // WATCH ACTIVE</text>
  </g>

  <!-- 3 Big Metric Columns -->
  <g transform="translate(24, 80)">
    <!-- Column 1: Repositories & Valyrian Codebases -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="276" height="260" rx="4" fill="#08101e" stroke="#1b304f" stroke-width="1.2" />
      <rect x="0" y="0" width="276" height="34" rx="4" fill="#0e1d35" />
      <text x="18" y="22" font-family="'Cinzel', serif" font-size="12" font-weight="900" fill="#38bdf8" letter-spacing="1">THE CITADEL ARCHIVES</text>

      <g transform="translate(20, 60)" font-family="'Courier New', monospace">
        <text x="0" y="0" font-size="11" fill="#94a3b8">PUBLIC REPOSITORIES</text>
        <text x="0" y="32" font-family="'Cinzel', serif" font-size="36" font-weight="900" fill="#f8fafc">5</text>
        
        <text x="0" y="70" font-size="11" fill="#94a3b8">PRIMARY SYSTEMS</text>
        <text x="0" y="90" font-size="12" font-weight="800" fill="#38bdf8">&#8226; AquaOS (Python)</text>
        <text x="0" y="110" font-size="12" font-weight="800" fill="#7dd3fc">&#8226; Nutri-ai (TypeScript)</text>
        <text x="0" y="130" font-size="12" font-weight="800" fill="#38bdf8">&#8226; Live Markdown (TS)</text>
        <text x="0" y="150" font-size="12" font-weight="800" fill="#7dd3fc">&#8226; first-flaskapp (Flask)</text>
        <text x="0" y="170" font-size="12" font-weight="800" fill="#38bdf8">&#8226; avish2142005 (Profile)</text>
      </g>
    </g>

    <!-- Column 2: Code Weapons & Languages -->
    <g transform="translate(298, 0)">
      <rect x="0" y="0" width="276" height="260" rx="4" fill="#08101e" stroke="#1b304f" stroke-width="1.2" />
      <rect x="0" y="0" width="276" height="34" rx="4" fill="#0e1d35" />
      <text x="18" y="22" font-family="'Cinzel', serif" font-size="12" font-weight="900" fill="#38bdf8" letter-spacing="1">VALYRIAN ARSENAL</text>

      <g transform="translate(20, 60)" font-family="'Courier New', monospace">
        <text x="0" y="0" font-size="11" fill="#94a3b8">DOMINANT CODE WEAPONS</text>
        
        <g transform="translate(0, 24)">
          <text x="0" y="0" font-size="11" font-weight="800" fill="#f8fafc">PYTHON</text>
          <text x="210" y="0" font-size="11" font-weight="800" fill="#38bdf8">48%</text>
          <rect x="0" y="6" width="236" height="6" rx="2" fill="#0f223a" />
          <rect x="0" y="6" width="113" height="6" rx="2" fill="#38bdf8" />
        </g>

        <g transform="translate(0, 60)">
          <text x="0" y="0" font-size="11" font-weight="800" fill="#f8fafc">TYPESCRIPT</text>
          <text x="210" y="0" font-size="11" font-weight="800" fill="#0284c7">36%</text>
          <rect x="0" y="6" width="236" height="6" rx="2" fill="#0f223a" />
          <rect x="0" y="6" width="85" height="6" rx="2" fill="#0284c7" />
        </g>

        <g transform="translate(0, 96)">
          <text x="0" y="0" font-size="11" font-weight="800" fill="#f8fafc">JAVASCRIPT &amp; WEB</text>
          <text x="210" y="0" font-size="11" font-weight="800" fill="#38bdf8">16%</text>
          <rect x="0" y="6" width="236" height="6" rx="2" fill="#0f223a" />
          <rect x="0" y="6" width="38" height="6" rx="2" fill="#38bdf8" />
        </g>

        <text x="0" y="145" font-size="10.5" fill="#64748b">&gt; STACK: React, Flask, Node, Linux</text>
        <text x="0" y="165" font-size="10.5" fill="#64748b">&gt; PATTERN: Zero-Debt &#8226; Clean Architecture</text>
      </g>
    </g>

    <!-- Column 3: The Watch & King's Status -->
    <g transform="translate(596, 0)">
      <rect x="0" y="0" width="276" height="260" rx="4" fill="#08101e" stroke="#1b304f" stroke-width="1.2" />
      <rect x="0" y="0" width="276" height="34" rx="4" fill="#0e1d35" />
      <text x="18" y="22" font-family="'Cinzel', serif" font-size="12" font-weight="900" fill="#38bdf8" letter-spacing="1">THE NIGHT GATHERS</text>

      <g transform="translate(20, 60)" font-family="'Courier New', monospace">
        <text x="0" y="0" font-size="11" fill="#94a3b8">REALM WATCH STATUS</text>
        <text x="0" y="28" font-family="'Cinzel', serif" font-size="20" font-weight="900" fill="#10b981">VIGILANT ON THE WALL</text>

        <g transform="translate(0, 65)">
          <text x="0" y="0" font-size="11" fill="#94a3b8">VALYRIAN STEEL PURITY</text>
          <text x="0" y="26" font-family="'Cinzel', serif" font-size="24" font-weight="900" fill="url(#valyrianSteel)">GRADE S+ (FLAWLESS)</text>
        </g>

        <g transform="translate(0, 130)">
          <rect x="0" y="0" width="236" height="34" rx="3" fill="#0c182c" stroke="#38bdf8" stroke-width="1" />
          <text x="118" y="22" text-anchor="middle" font-family="'Cinzel', serif" font-size="11" font-weight="900" fill="#38bdf8">WINTER HAS ARRIVED</text>
        </g>
      </g>
    </g>
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 8. TROPHY ROOM: got-trophy-room.svg & samurai-trophy-room.svg
// -------------------------------------------------------------
function getTrophyRoomSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 220" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="trophyBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#050a16" />
      <stop offset="100%" stop-color="#081326" />
    </linearGradient>
  </defs>

  <rect width="920" height="220" rx="6" fill="url(#trophyBg)" />
  <rect width="920" height="220" rx="6" fill="none" stroke="#162942" stroke-width="1.5" />

  <g transform="translate(24, 25)">
    <!-- 4 Trophies Cards -->
    <!-- 01: Repositories -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="200" height="170" rx="4" fill="#08101d" stroke="#1e3557" stroke-width="1.2" />
      <text x="100" y="38" text-anchor="middle" font-size="28">🏰</text>
      <text x="100" y="78" text-anchor="middle" font-family="'Cinzel', serif" font-size="28" font-weight="900" fill="#f8fafc">5</text>
      <text x="100" y="104" text-anchor="middle" font-family="'Cinzel', serif" font-size="11" font-weight="900" fill="#38bdf8">STRONGHOLDS</text>
      <text x="100" y="125" text-anchor="middle" font-family="'Courier New', monospace" font-size="10" fill="#94a3b8">PUBLIC REPOSITORIES</text>
      <line x1="20" y1="142" x2="180" y2="142" stroke="#162942" />
      <text x="100" y="156" text-anchor="middle" font-family="'Courier New', monospace" font-size="9" font-weight="700" fill="#10b981">ALL ACTIVE &#8226; SHIPPED</text>
    </g>

    <!-- 02: Valyrian Steel Grade -->
    <g transform="translate(224, 0)">
      <rect x="0" y="0" width="200" height="170" rx="4" fill="#08101d" stroke="#1e3557" stroke-width="1.2" />
      <text x="100" y="38" text-anchor="middle" font-size="28">⚔️</text>
      <text x="100" y="78" text-anchor="middle" font-family="'Cinzel', serif" font-size="28" font-weight="900" fill="#f8fafc">S+</text>
      <text x="100" y="104" text-anchor="middle" font-family="'Cinzel', serif" font-size="11" font-weight="900" fill="#38bdf8">VALYRIAN GRADE</text>
      <text x="100" y="125" text-anchor="middle" font-family="'Courier New', monospace" font-size="10" fill="#94a3b8">CODE REFINEMENT</text>
      <line x1="20" y1="142" x2="180" y2="142" stroke="#162942" />
      <text x="100" y="156" text-anchor="middle" font-family="'Courier New', monospace" font-size="9" font-weight="700" fill="#38bdf8">LONGCLAW TEMPERED</text>
    </g>

    <!-- 03: The Wall Watch -->
    <g transform="translate(448, 0)">
      <rect x="0" y="0" width="200" height="170" rx="4" fill="#08101d" stroke="#1e3557" stroke-width="1.2" />
      <text x="100" y="38" text-anchor="middle" font-size="28">🛡️</text>
      <text x="100" y="78" text-anchor="middle" font-family="'Cinzel', serif" font-size="28" font-weight="900" fill="#f8fafc">100%</text>
      <text x="100" y="104" text-anchor="middle" font-family="'Cinzel', serif" font-size="11" font-weight="900" fill="#38bdf8">VIGILANCE RATING</text>
      <text x="100" y="125" text-anchor="middle" font-family="'Courier New', monospace" font-size="10" fill="#94a3b8">SYSTEM AVAILABILITY</text>
      <line x1="20" y1="142" x2="180" y2="142" stroke="#162942" />
      <text x="100" y="156" text-anchor="middle" font-family="'Courier New', monospace" font-size="9" font-weight="700" fill="#10b981">UNBROKEN SENTINEL</text>
    </g>

    <!-- 04: Northern Conquest -->
    <g transform="translate(672, 0)">
      <rect x="0" y="0" width="200" height="170" rx="4" fill="#08101d" stroke="#1e3557" stroke-width="1.2" />
      <text x="100" y="38" text-anchor="middle" font-size="28">👑</text>
      <text x="100" y="78" text-anchor="middle" font-family="'Cinzel', serif" font-size="28" font-weight="900" fill="#f8fafc">1st</text>
      <text x="100" y="104" text-anchor="middle" font-family="'Cinzel', serif" font-size="11" font-weight="900" fill="#fbbf24">KING IN THE NORTH</text>
      <text x="100" y="125" text-anchor="middle" font-family="'Courier New', monospace" font-size="10" fill="#94a3b8">ROYAL CITADEL DEGREE</text>
      <line x1="20" y1="142" x2="180" y2="142" stroke="#162942" />
      <text x="100" y="156" text-anchor="middle" font-family="'Courier New', monospace" font-size="9" font-weight="700" fill="#fbbf24">AVISH KUMAR</text>
    </g>
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 9. WESTEROS BATTLE ROSTER: got-battle-roster.svg & shadow-fight-roster.svg
// -------------------------------------------------------------
function getBattleRosterSvg() {
  const bosses = [
    { name: "WHITE WALKERS", foe: "LEGACY CRUST &amp; DEPRECATION", power: "CRYOGENIC CODE FREEZE", defeated: "SLAIN WITH VALYRIAN PYTHON" },
    { name: "THE NIGHT KING", foe: "RACE CONDITIONS &amp; MEMORY LEAKS", power: "INFINITE RECURSIVE HORDE", defeated: "SHATTERED WITH OS KERNELS" },
    { name: "RAMSAY BOLTON", foe: "SPAGHETTI LOGIC &amp; CHAOS", power: "VICIOUS UNTYPED CODEBASES", defeated: "FED TO TYPESCRIPT STRICT MODE" },
    { name: "LANNISTER LEGION", foe: "HEAVY TECH DEBT ACCRUAL", power: "GOLD-BACKED COMPLEXITY", defeated: "REFACTORED CLEAN &amp; LEAN" },
    { name: "THE IRON FLEET", foe: "NETWORK LATENCY &amp; DROP-OFFS", power: "HIGH PACKET STORMS", defeated: "SUB-MS FAST API SHIELDS" },
    { name: "CERSEI'S WILDFIRE", foe: "PRODUCTION CRASH EMERGENCIES", power: "VOLATILE SYSTEM BLOWOUT", defeated: "CI/CD &amp; DOCKER FORTIFICATIONS" }
  ];

  let cardsXml = "";
  bosses.forEach((b, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = col * 292;
    const y = row * 135;

    cardsXml += `
    <g transform="translate(${x}, ${y})">
      <rect x="0" y="0" width="280" height="122" rx="4" fill="#070e1c" stroke="#1a3150" stroke-width="1.2" />
      <rect x="0" y="0" width="280" height="26" rx="4" fill="#0d1b30" />
      <text x="14" y="17" font-family="'Cinzel', serif" font-size="11" font-weight="900" fill="#38bdf8" letter-spacing="1">BOSS ${i + 1} &#8226; ${b.name}</text>
      
      <g transform="translate(14, 46)" font-family="'Courier New', monospace" font-size="10.5">
        <text x="0" y="0" fill="#94a3b8">FOE: <tspan fill="#f8fafc" font-weight="800">${b.foe}</tspan></text>
        <text x="0" y="20" fill="#64748b">THREAT: ${b.power}</text>
        <rect x="0" y="32" width="252" height="24" rx="2" fill="#0c182c" stroke="#10b981" stroke-width="0.8" />
        <text x="126" y="48" text-anchor="middle" font-size="9.5" font-weight="800" fill="#10b981">&gt; ${b.defeated}</text>
      </g>
    </g>`;
  });

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 330" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="rosterBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#040710" />
      <stop offset="100%" stop-color="#071120" />
    </linearGradient>
  </defs>

  <rect width="920" height="330" rx="6" fill="url(#rosterBg)" />
  <rect width="920" height="330" rx="6" fill="none" stroke="#162942" stroke-width="1.5" />

  <g transform="translate(24, 25)">
    ${cardsXml}
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 10. WINTERFELL RAVENS TERMINAL: got-terminal.svg & terminal-contact.svg
// -------------------------------------------------------------
function getGotTerminalSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 220" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="termBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#03060c" />
      <stop offset="100%" stop-color="#070e1c" />
    </linearGradient>
  </defs>

  <rect width="920" height="220" rx="6" fill="url(#termBg)" />
  <rect width="920" height="220" rx="6" fill="none" stroke="#162942" stroke-width="1.5" />

  <!-- Terminal Title Bar -->
  <rect width="920" height="32" rx="6" fill="#0a162a" />
  <circle cx="20" cy="16" r="5" fill="#ef4444" />
  <circle cx="36" cy="16" r="5" fill="#f59e0b" />
  <circle cx="52" cy="16" r="5" fill="#10b981" />
  <text x="460" y="21" text-anchor="middle" font-family="'Courier New', monospace" font-size="11" font-weight="700" fill="#94a3b8">avish@winterfell-citadel:~ (zsh &#8226; valyrian-sh)</text>

  <!-- Shell Output -->
  <g transform="translate(24, 58)" font-family="'Courier New', Consolas, monospace" font-size="12" font-weight="700">
    <text x="0" y="0" fill="#38bdf8">avish@winterfell:~$ <tspan fill="#f8fafc">send-raven --recipient="Avish Kumar" --castle="Winterfell"</tspan></text>
    <text x="0" y="24" fill="#94a3b8">[AUTHENTICATING RAVEN CRYPTOGRAPHIC SEAL...]</text>
    <text x="0" y="46" fill="#10b981">&gt; HOUSE STARK CITADEL: ALL COMM CHANNELS OPEN.</text>
    <text x="0" y="68" fill="#7dd3fc">&gt; GITHUB: https://github.com/avish2142005 &#8226; READY FOR INCOMING COLLABORATIONS</text>
    <text x="0" y="90" fill="#cbd5e1">&gt; "THE PACK SURVIVES &#8226; TOGETHER WE ARCHITECT THE IMPOSSIBLE."</text>
    <text x="0" y="116" fill="#38bdf8">avish@winterfell:~$ <tspan fill="#38bdf8">echo $WINTER_STATUS</tspan></text>
    <text x="0" y="138" fill="#fbbf24">&gt;&gt; WINTER_IS_HERE // SHIELD_ACTIVE=TRUE // LONG_LIVE_THE_KING_IN_THE_NORTH _</text>
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 11. MONOLITHIC FOOTER: got-footer.svg & ronin-footer.svg
// -------------------------------------------------------------
function getGotFooterSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 240" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="footerBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#020409" />
      <stop offset="50%" stop-color="#060c18" />
      <stop offset="100%" stop-color="#020408" />
    </linearGradient>
    <linearGradient id="footerGold" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="50%" stop-color="#f8fafc" />
      <stop offset="100%" stop-color="#38bdf8" />
    </linearGradient>
  </defs>

  <rect width="1600" height="240" fill="url(#footerBg)" />
  <line x1="0" y1="0" x2="1600" y2="0" stroke="#162942" stroke-width="1.5" />
  <line x1="400" y1="0" x2="1200" y2="0" stroke="#38bdf8" stroke-width="2" />

  <!-- Center Direwolf Crest -->
  <g transform="translate(800, 65)">
    <circle cx="0" cy="0" r="34" fill="#08101d" stroke="#38bdf8" stroke-width="1.5" />
    <!-- Stylized Direwolf Head -->
    <path d="M 0 -18 L 8 -10 L 18 -6 L 10 4 L 12 16 L 0 11 L -12 16 L -10 4 L -18 -6 L -8 -10 Z" fill="#f8fafc" />
    <circle cx="0" cy="0" r="2" fill="#38bdf8" />
  </g>

  <!-- Royal Signature Text -->
  <g transform="translate(800, 140)" text-anchor="middle">
    <text x="0" y="0" font-family="'Cinzel', 'Palatino', serif" font-size="24" font-weight="900" fill="url(#footerGold)" letter-spacing="4">THE NORTH REMEMBERS &#8226; AVISH KUMAR</text>
    <text x="0" y="32" font-family="'Georgia', serif" font-style="italic" font-size="14" fill="#94a3b8" letter-spacing="2">KING IN THE NORTH &#8226; WATCHER ON THE WALLS &#8226; GITHUB.COM/AVISH2142005</text>
    <text x="0" y="58" font-family="'Courier New', monospace" font-size="11" font-weight="700" fill="#38bdf8" letter-spacing="1">[ TRANSMISSION SEALED // WINTERFELL PROTOCOL 0x777 // VALYRIAN CODE ARMED ]</text>
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 12. LIVE GITHUB STATS: live-github-stats.svg
// -------------------------------------------------------------
function getLiveStatsSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 450 200" width="100%" height="100%">
  <defs>
    <linearGradient id="liveBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#040813" />
      <stop offset="100%" stop-color="#091427" />
    </linearGradient>
  </defs>
  <rect width="450" height="200" rx="6" fill="url(#liveBg)" stroke="#162942" stroke-width="1.5" />
  
  <g transform="translate(24, 28)">
    <text x="0" y="0" font-family="'Cinzel', serif" font-size="16" font-weight="900" fill="#38bdf8" letter-spacing="1.5">AVISH KUMAR'S STATS</text>
    <text x="0" y="16" font-family="'Courier New', monospace" font-size="10" fill="#64748b">REALM: GITHUB.COM/AVISH2142005</text>

    <g transform="translate(0, 42)" font-family="'Courier New', monospace" font-size="12" font-weight="700">
      <g transform="translate(0, 0)">
        <text x="0" y="0" fill="#94a3b8">Total Stars Earned:</text>
        <text x="260" y="0" fill="#f8fafc">15</text>
      </g>
      <g transform="translate(0, 24)">
        <text x="0" y="0" fill="#94a3b8">Total Commits (2026):</text>
        <text x="260" y="0" fill="#38bdf8">248</text>
      </g>
      <g transform="translate(0, 48)">
        <text x="0" y="0" fill="#94a3b8">Total PRs:</text>
        <text x="260" y="0" fill="#f8fafc">12</text>
      </g>
      <g transform="translate(0, 72)">
        <text x="0" y="0" fill="#94a3b8">Total Issues:</text>
        <text x="260" y="0" fill="#f8fafc">6</text>
      </g>
      <g transform="translate(0, 96)">
        <text x="0" y="0" fill="#94a3b8">Contributed to (last year):</text>
        <text x="260" y="0" fill="#10b981">5 Repos</text>
      </g>
    </g>
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 13. CONTRIBUTION GRID: contribution-grid.svg
// -------------------------------------------------------------
function getGotContributionGridSvg() {
  const gridStartX = 60;
  const gridStartY = 110;
  const tileW = 10;
  const tileH = 10;
  const pitchX = 15;
  const pitchY = 15;

  let tilesXml = "";
  // 52 weeks x 7 days
  for (let w = 0; w < 52; w++) {
    const x = gridStartX + w * pitchX;
    for (let d = 0; d < 7; d++) {
      const y = gridStartY + d * pitchY;
      // Procedural activity pattern representing active commits
      const hash = (w * 13 + d * 7 + (w % 3) * 5) % 17;
      let fill = "#0a1322";
      let stroke = "#122035";

      if (hash > 14) {
        fill = "#F59E0B"; // Valyrian Flame Gold
        stroke = "#FDE047";
      } else if (hash > 11) {
        fill = "#38BDF8"; // Northern Frost Ice
        stroke = "#7DD3FC";
      } else if (hash > 8) {
        fill = "#0284C7"; // Winterfell Deep Blue
        stroke = "#38BDF8";
      } else if (hash > 5) {
        fill = "#0369a1";
        stroke = "#0284c7";
      } else if (hash > 3) {
        fill = "#082f49";
        stroke = "#0c4a6e";
      }

      tilesXml += `      <rect x="${x}" y="${y}" width="${tileW}" height="${tileH}" rx="2" fill="${fill}" stroke="${stroke}" stroke-width="0.8" />\n`;
    }
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 310" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="gridBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#040812" />
      <stop offset="100%" stop-color="#081426" />
    </linearGradient>
    <filter id="tileGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="2" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <rect width="920" height="310" rx="6" fill="url(#gridBg)" />
  <rect width="920" height="310" rx="6" fill="none" stroke="#162942" stroke-width="1.5" />

  <!-- Top Title Bar -->
  <g transform="translate(24, 24)">
    <text x="0" y="0" font-family="'Cinzel', serif" font-size="16" font-weight="900" fill="#38bdf8" letter-spacing="1.5">52-WEEK SIEGE OF CODE &#8226; THE NIGHT'S WATCH CADENCE</text>
    <text x="0" y="20" font-family="'Courier New', monospace" font-size="11" fill="#94a3b8">234 CONFIRMED LETHAL STRIKES // WINTERFELL DEFENSE LOG</text>
  </g>

  <!-- VS Emblem in Center Top -->
  <g transform="translate(840, 36)">
    <rect x="-30" y="-14" width="60" height="28" rx="3" fill="#0d1b30" stroke="#38bdf8" stroke-width="1.2" />
    <text x="0" y="6" text-anchor="middle" font-family="'Cinzel', serif" font-size="14" font-weight="900" fill="#f8fafc">VS</text>
  </g>

  <!-- Month Headers -->
  <g transform="translate(60, 95)" font-family="'Courier New', monospace" font-size="9" font-weight="800" fill="#64748b" letter-spacing="1">
    <text x="0" y="0">OCT</text>
    <text x="65" y="0">NOV</text>
    <text x="130" y="0">DEC</text>
    <text x="195" y="0">JAN</text>
    <text x="260" y="0">FEB</text>
    <text x="325" y="0">MAR</text>
    <text x="390" y="0">APR</text>
    <text x="455" y="0">MAY</text>
    <text x="520" y="0">JUN</text>
    <text x="585" y="0">JUL</text>
    <text x="650" y="0">AUG</text>
    <text x="715" y="0">SEP</text>
  </g>

  <!-- Weekday Labels -->
  <g transform="translate(24, 120)" font-family="'Courier New', monospace" font-size="9" font-weight="800" fill="#64748b">
    <text x="0" y="0">MON</text>
    <text x="0" y="30">WED</text>
    <text x="0" y="60">FRI</text>
    <text x="0" y="90">SUN</text>
  </g>

  <!-- The Grid Tiles -->
  <g>
${tilesXml}
  </g>

  <!-- Legend Bottom Right -->
  <g transform="translate(650, 260)" font-family="'Courier New', monospace" font-size="9" font-weight="700">
    <text x="-40" y="10" fill="#64748b">PEACE</text>
    <rect x="0" y="0" width="11" height="11" rx="2" fill="#0a1322" stroke="#122035" />
    <rect x="18" y="0" width="11" height="11" rx="2" fill="#082f49" stroke="#0c4a6e" />
    <rect x="36" y="0" width="11" height="11" rx="2" fill="#0284c7" stroke="#38bdf8" />
    <rect x="54" y="0" width="11" height="11" rx="2" fill="#38bdf8" stroke="#7dd3fc" />
    <rect x="72" y="0" width="11" height="11" rx="2" fill="#f59e0b" stroke="#fde047" />
    <text x="92" y="10" fill="#f59e0b">SIEGE</text>
  </g>
</svg>`;
}

// Write All Files
const files = [
  // Primary hero and badges
  { path: "got-hero-banner.svg", content: getHeroBannerSvg() },
  { path: "ronin-hero-v2.svg", content: getHeroBannerSvg() },
  { path: "ronin-hero-mobile-v2.svg", content: getHeroBannerSvg() },
  { path: "got-status-badges.svg", content: getStatusBadgesSvg() },
  { path: "samurai-status-badges.svg", content: getStatusBadgesSvg() },
  
  // Section Headers
  { path: "header-profile.svg", content: getGotSectionHeaderSvg("01", "LORD OF WINTERFELL // WARRIOR PROFILE", "HOUSE STARK OF WINTERFELL &#8226; LORD COMMANDER DOSSIER") },
  { path: "header-arsenal.svg", content: getGotSectionHeaderSvg("02", "VALYRIAN ARSENAL // WEAPONS OF CODE", "CURATED WEAPONRY OF THE SEVEN KINGDOMS") },
  { path: "header-project-database.svg", content: getGotSectionHeaderSvg("03", "CITADEL SCROLLS // REALM REPOSITORIES", "STRONGHOLDS CRAFTED &#8226; AQUAOS, NUTRI-AI, LIVE MARKDOWN") },
  { path: "header-commit-radar.svg", content: getGotSectionHeaderSvg("04", "WATCH ON THE WALL // CODE CADENCE", "UNBROKEN NIGHT SENTINEL VIGILANCE") },
  { path: "header-contributions.svg", content: getGotSectionHeaderSvg("05", "BATTLE OF THE CODES // 52-WEEK SIEGE", "WINTERFELL DEFENSE CADENCE MATRIX") },
  { path: "header-roadmap.svg", content: getGotSectionHeaderSvg("06", "2026 CONQUEST DIRECTIVES // THE REALM ROADMAP", "STRATEGIC MILESTONES ACROSS THE REALM") },
  { path: "header-trophy-room.svg", content: getGotSectionHeaderSvg("07", "GREAT HALL OF HEROES // VALYRIAN FEATS", "COMMENDATIONS, REPUTATION &amp; RECOGNITION") },
  { path: "header-badges.svg", content: getGotSectionHeaderSvg("★", "CREDENTIALS OF THE CITADEL // MAESTER CERTIFIED", "VERIFIED ACADEMIC &amp; ENGINEERING SEALS") },
  { path: "header-telemetry.svg", content: getGotSectionHeaderSvg("08", "WEIRWOOD TELEMETRY // SEVEN KINGDOMS METRICS", "REAL-TIME CODE METRICS MONITORED VIA THE OLD GODS") },
  { path: "header-connect.svg", content: getGotSectionHeaderSvg("09", "SEND A RAVEN // ROYAL CORRESPONDENCE", "SECURE DISPATCH CHANNELS ACROSS WESTEROS") },
  { path: "header-terminal.svg", content: getGotSectionHeaderSvg("10", "WINTERFELL TERMINAL // COMMAND SHELL", "DIRECT DISPATCH INTERFACE TO THE LORD COMMANDER") },

  // Dossiers & Radars
  { path: "operative-dossier-v2.svg", content: getOperativeDossierSvg() },
  { path: "got-operative-dossier.svg", content: getOperativeDossierSvg() },
  { path: "developer-rank.svg", content: getDeveloperRankSvg() },
  { path: "got-developer-rank.svg", content: getDeveloperRankSvg() },

  // Dividers
  { path: "katana-divider.svg", content: getValyrianDividerSvg(false) },
  { path: "katana-divider-reverse.svg", content: getValyrianDividerSvg(true) },
  { path: "valyrian-divider.svg", content: getValyrianDividerSvg(false) },

  // Metrics, Roster, Grid, Stats, Terminal, Footer
  { path: "samurai-telemetry-grid.svg", content: getTelemetryGridSvg() },
  { path: "got-telemetry-grid.svg", content: getTelemetryGridSvg() },
  { path: "samurai-trophy-room.svg", content: getTrophyRoomSvg() },
  { path: "got-trophy-room.svg", content: getTrophyRoomSvg() },
  { path: "shadow-fight-roster.svg", content: getBattleRosterSvg() },
  { path: "got-battle-roster.svg", content: getBattleRosterSvg() },
  { path: "terminal-contact.svg", content: getGotTerminalSvg() },
  { path: "got-terminal.svg", content: getGotTerminalSvg() },
  { path: "ronin-footer.svg", content: getGotFooterSvg() },
  { path: "got-footer.svg", content: getGotFooterSvg() },
  { path: "live-github-stats.svg", content: getLiveStatsSvg() },
  { path: "contribution-grid.svg", content: getGotContributionGridSvg() }
];

files.forEach(f => {
  const dest = path.join(assetsDir, f.path);
  fs.writeFileSync(dest, f.content);
  console.log(`[generate-got-theme] Written ${f.path}`);
});

console.log("[generate-got-theme] All Game of Thrones SVGs successfully created and updated!");
