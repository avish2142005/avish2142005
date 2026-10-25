const fs = require("fs");
const path = require("path");

const assetsDir = path.resolve(__dirname, "../assets");

console.log("[generate-got-theme] Crafting Game of Thrones Tri-Apex Theme (Wolf, Lion, Eagle) for Avish Kumar (@avish2142005)...");

// -------------------------------------------------------------
// 1. HERO BANNER: got-hero-banner.svg (and ronin-hero-v2.svg)
// -------------------------------------------------------------
function getHeroBannerSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 520" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <!-- Background Gradients: Castle Black & Northern Frost -->
    <linearGradient id="gotHeroBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#02050b" />
      <stop offset="35%" stop-color="#060c18" />
      <stop offset="70%" stop-color="#091426" />
      <stop offset="100%" stop-color="#020408" />
    </linearGradient>

    <!-- Valyrian Steel Blade Gradient -->
    <linearGradient id="valyrianSteel" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="30%" stop-color="#cbd5e1" />
      <stop offset="50%" stop-color="#64748b" />
      <stop offset="70%" stop-color="#94a3b8" />
      <stop offset="100%" stop-color="#f8fafc" />
    </linearGradient>

    <!-- Northern Frost Ice Blue Gradient (Wolf) -->
    <linearGradient id="iceFrostGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="50%" stop-color="#7dd3fc" />
      <stop offset="100%" stop-color="#0284c7" />
    </linearGradient>

    <!-- Iron Throne / Valyrian Gold Gradient (Lion) -->
    <linearGradient id="ironGold" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f59e0b" />
      <stop offset="50%" stop-color="#fde047" />
      <stop offset="100%" stop-color="#d97706" />
    </linearGradient>

    <!-- Sky / Storm Cyan Gradient (Eagle) -->
    <linearGradient id="skyEagleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#06b6d4" />
      <stop offset="50%" stop-color="#67e8f9" />
      <stop offset="100%" stop-color="#8b5cf6" />
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
    <radialGradient id="lionGoldGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.35" />
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
      <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#142236" stroke-width="0.8" opacity="0.6" />
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

  <!-- Ambient Light Wells (Wolf, Lion, Eagle) -->
  <circle cx="260" cy="260" r="320" fill="url(#direwolfGlow)" />
  <circle cx="1300" cy="200" r="360" fill="url(#lionGoldGlow)" />
  <circle cx="800" cy="240" r="420" fill="url(#heroFrostAura)" />

  <!-- Decorative Valyrian Perimeter Border -->
  <rect x="16" y="16" width="1568" height="488" rx="6" fill="none" stroke="#1a2f4c" stroke-width="1.5" />
  <rect x="22" y="22" width="1556" height="476" rx="4" fill="none" stroke="#0e1a2c" stroke-width="1" />
  <!-- Moving Frost Edge Laser -->
  <rect x="16" y="16" width="1568" height="488" rx="6" fill="none" stroke="#38bdf8" stroke-width="2.5" class="laser-border" filter="url(#iceGlowFilter)" />

  <!-- Corner Runes (Ancient Northern Seals) -->
  <g fill="none" stroke="#38bdf8" stroke-width="1.5" class="rune-pulse">
    <!-- Top-Left Corner -->
    <path d="M 16 60 L 60 16 M 16 35 L 35 16 M 16 16 L 90 16 M 16 16 L 16 90" />
    <circle cx="38" cy="38" r="4" fill="#38bdf8" />
    <!-- Top-Right Corner -->
    <path d="M 1584 60 L 1540 16 M 1584 35 L 1565 16 M 1584 16 L 1510 16 M 1584 16 L 1584 90" />
    <circle cx="1562" cy="38" r="4" fill="#f59e0b" />
    <!-- Bottom-Left Corner -->
    <path d="M 16 460 L 60 504 M 16 485 L 35 504 M 16 504 L 90 504 M 16 504 L 16 430" />
    <circle cx="38" cy="482" r="4" fill="#06b6d4" />
    <!-- Bottom-Right Corner -->
    <path d="M 1584 460 L 1540 504 M 1584 485 L 1565 504 M 1584 504 L 1510 504 M 1584 504 L 1584 430" />
    <circle cx="1562" cy="482" r="4" fill="#38bdf8" />
  </g>

  <!-- Left Emblematics: Tri-Sigil Heraldic Crest (Wolf, Lion, Eagle Vector) -->
  <g transform="translate(130, 85)">
    <!-- Shield Outline -->
    <path d="M 150 20 L 260 65 L 240 240 Q 150 340 150 360 Q 150 340 60 240 L 40 65 Z" fill="#060c18" stroke="#1e3a5f" stroke-width="2" />
    <path d="M 150 32 L 246 72 L 228 230 Q 150 322 150 340 Q 150 322 72 230 L 54 72 Z" fill="#0a1424" stroke="#38bdf8" stroke-width="1.2" opacity="0.8" />

    <!-- Central Tri-Sigil Vector Artwork -->
    <!-- 1. The Wolf (Top) -->
    <g transform="translate(150, 110)">
      <path d="M 0 -45 L 14 -30 L 28 -34 L 20 -15 L 36 -6 L 42 10 L 30 18 L 38 32 L 20 36 L 14 48 L 0 40 L -14 48 L -20 36 L -38 32 L -30 18 L -42 10 L -36 -6 L -20 -15 L -28 -34 L -14 -30 Z" fill="#112236" stroke="#38bdf8" stroke-width="1.8" />
      <polygon points="-12,-4 -6,-8 -8,-1" fill="#7dd3fc" />
      <polygon points="12,-4 6,-8 8,-1" fill="#7dd3fc" />
      <circle cx="0" cy="20" r="3" fill="#38bdf8" />
    </g>

    <!-- 2. The Lion (Bottom Left) -->
    <g transform="translate(105, 220)">
      <circle cx="0" cy="0" r="32" fill="#14170e" stroke="#f59e0b" stroke-width="1.5" />
      <!-- Lion Mane & Face Vector -->
      <path d="M 0 -22 C 14 -22 22 -10 22 4 C 22 16 12 24 0 24 C -12 24 -22 16 -22 4 C -22 -10 -14 -22 0 -22 Z" fill="#241f0d" stroke="#fbbf24" stroke-width="1.2" />
      <path d="M -8 -4 L 0 -12 L 8 -4 L 6 8 L 0 12 L -6 8 Z" fill="#f59e0b" />
      <circle cx="-5" cy="-2" r="1.5" fill="#fff" />
      <circle cx="5" cy="-2" r="1.5" fill="#fff" />
    </g>

    <!-- 3. The Eagle (Bottom Right) -->
    <g transform="translate(195, 220)">
      <circle cx="0" cy="0" r="32" fill="#08151c" stroke="#06b6d4" stroke-width="1.5" />
      <!-- Eagle Beak & Eye Vector -->
      <path d="M -16 -12 L 8 -18 L 18 -6 L 8 16 L -10 18 L -18 6 Z" fill="#0f2634" stroke="#67e8f9" stroke-width="1.2" />
      <!-- Hooked Beak -->
      <path d="M 8 -4 Q 22 2 16 16 Q 10 12 8 8 Z" fill="#f59e0b" stroke="#fde047" stroke-width="1" />
      <circle cx="0" cy="-4" r="2.5" fill="#fbbf24" />
      <circle cx="0" cy="-4" r="1" fill="#030712" />
    </g>

    <!-- Longclaw Valyrian Steel Blade (Axis of the Triad) -->
    <line x1="150" y1="20" x2="150" y2="350" stroke="#f8fafc" stroke-width="2.5" filter="url(#iceGlowFilter)" />
    <line x1="149" y1="20" x2="149" y2="350" stroke="#38bdf8" stroke-width="0.8" />

    <!-- Seal Banner Under Crest -->
    <rect x="30" y="375" width="240" height="30" rx="3" fill="#060c18" stroke="#38bdf8" stroke-width="1.2" />
    <text x="150" y="395" text-anchor="middle" font-family="'Cinzel', 'Palatino', serif" font-size="11" font-weight="900" fill="#38bdf8" letter-spacing="2">TRI-APEX ARCHITECT // S+</text>
  </g>

  <!-- Center & Right Identity Hierarchy -->
  <g transform="translate(480, 85)">
    <!-- Realm Top Category Badge -->
    <g transform="translate(0, 25)">
      <rect x="0" y="0" width="340" height="26" rx="3" fill="#081424" stroke="#38bdf8" stroke-width="1" />
      <circle cx="14" cy="13" r="4" fill="#38bdf8" filter="url(#iceGlowFilter)" />
      <text x="32" y="18" font-family="'Courier New', monospace" font-size="11" font-weight="800" fill="#7dd3fc" letter-spacing="2">TRI-CHARACTER DOMINANCE // WESTEROS</text>
    </g>

    <!-- Main Identity Title: AVISH KUMAR -->
    <g transform="translate(0, 105)">
      <!-- Backdrop glow -->
      <text x="0" y="0" font-family="'Cinzel', 'Trajan Pro', serif" font-size="64" font-weight="900" fill="#38bdf8" letter-spacing="5" opacity="0.3" filter="url(#runicGlow)">AVISH KUMAR</text>
      <!-- Main Metallic Text -->
      <text x="0" y="0" font-family="'Cinzel', 'Trajan Pro', serif" font-size="64" font-weight="900" fill="url(#valyrianSteel)" letter-spacing="5">AVISH KUMAR</text>
    </g>

    <!-- Subtitle: THE TRI-APEX ARCHITECT // WOLF • LION • EAGLE -->
    <g transform="translate(4, 150)">
      <text x="0" y="0" font-family="'Cinzel', serif" font-size="20" font-weight="700" fill="url(#iceFrostGrad)" letter-spacing="3">TRI-APEX ARCHITECT &#8226; WOLF &#8226; LION &#8226; EAGLE</text>
    </g>

    <!-- Tri-Color Valyrian Divider Bar -->
    <g transform="translate(0, 172)">
      <line x1="0" y1="0" x2="880" y2="0" stroke="#162942" stroke-width="2" />
      <line x1="0" y1="0" x2="260" y2="0" stroke="#38bdf8" stroke-width="2.5" filter="url(#iceGlowFilter)" />
      <line x1="260" y1="0" x2="520" y2="0" stroke="#f59e0b" stroke-width="2.5" />
      <line x1="520" y1="0" x2="720" y2="0" stroke="#06b6d4" stroke-width="2.5" />
      <polygon points="520,-6 526,0 520,6 514,0" fill="#fde047" />
    </g>

    <!-- The Tri-Character Creed Monologue -->
    <g transform="translate(2, 215)">
      <text x="0" y="0" font-family="'Georgia', serif" font-style="italic" font-size="15.5" fill="#f8fafc" letter-spacing="1">"Endurance of the Direwolf. Dominion of the Golden Lion. Omniscience of the High Eagle.</text>
      <text x="0" y="26" font-family="'Georgia', serif" font-style="italic" font-size="15.5" fill="#94a3b8" letter-spacing="1">Forging low-level OS kernels, sovereign full-stack citadels, and cognitive AI architectures."</text>
    </g>

    <!-- Tactical Telemetry Badges (The 3 Characters + Rank) -->
    <g transform="translate(0, 280)">
      <!-- Box 1: The Wolf (Systems) -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="200" height="60" rx="4" fill="#060e1a" stroke="#1b3658" stroke-width="1.2" />
        <rect x="0" y="0" width="4" height="60" fill="#38bdf8" />
        <text x="16" y="22" font-family="'Courier New', monospace" font-size="10" font-weight="800" fill="#38bdf8" letter-spacing="1">🐺 THE WOLF</text>
        <text x="16" y="44" font-family="'Cinzel', serif" font-size="15" font-weight="800" fill="#f8fafc">SYSTEMS // AquaOS</text>
      </g>

      <!-- Box 2: The Lion (Full Stack) -->
      <g transform="translate(220, 0)">
        <rect x="0" y="0" width="200" height="60" rx="4" fill="#0d1109" stroke="#5a3d08" stroke-width="1.2" />
        <rect x="0" y="0" width="4" height="60" fill="#f59e0b" />
        <text x="16" y="22" font-family="'Courier New', monospace" font-size="10" font-weight="800" fill="#fbbf24" letter-spacing="1">🦁 THE LION</text>
        <text x="16" y="44" font-family="'Cinzel', serif" font-size="15" font-weight="800" fill="#f8fafc">FULL-STACK CASTLES</text>
      </g>

      <!-- Box 3: The Eagle (AI) -->
      <g transform="translate(440, 0)">
        <rect x="0" y="0" width="210" height="60" rx="4" fill="#05121a" stroke="#0e5a6f" stroke-width="1.2" />
        <rect x="0" y="0" width="4" height="60" fill="#06b6d4" />
        <text x="16" y="22" font-family="'Courier New', monospace" font-size="10" font-weight="800" fill="#67e8f9" letter-spacing="1">🦅 THE EAGLE</text>
        <text x="16" y="44" font-family="'Cinzel', serif" font-size="15" font-weight="800" fill="#f8fafc">AI ORACLE // Nutri-ai</text>
      </g>

      <!-- Box 4: Citadel Rank -->
      <g transform="translate(670, 0)">
        <rect x="0" y="0" width="210" height="60" rx="4" fill="#080e1c" stroke="#253856" stroke-width="1.2" />
        <rect x="0" y="0" width="4" height="60" fill="#10b981" />
        <text x="16" y="22" font-family="'Courier New', monospace" font-size="10" font-weight="800" fill="#34d399" letter-spacing="1">⚔️ CITADEL GRADE</text>
        <text x="16" y="44" font-family="'Cinzel', serif" font-size="15" font-weight="800" fill="url(#valyrianSteel)">TRI-APEX MASTER</text>
      </g>
    </g>

    <!-- GitHub Handle Link Pin -->
    <g transform="translate(0, 365)">
      <rect x="0" y="0" width="310" height="32" rx="3" fill="#0c172a" stroke="#38bdf8" stroke-width="1" />
      <text x="15" y="21" font-family="'Courier New', monospace" font-size="12" font-weight="800" fill="#38bdf8">&gt; GITHUB.COM/AVISH2142005</text>
      <circle cx="290" cy="16" r="4" fill="#10b981" />
    </g>
  </g>

  <!-- Animated Celestial Dust Layer -->
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
    <linearGradient id="lionPillGold" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#b45309" />
      <stop offset="100%" stop-color="#f59e0b" />
    </linearGradient>
    <linearGradient id="eaglePillCyan" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0e7490" />
      <stop offset="100%" stop-color="#06b6d4" />
    </linearGradient>
    <linearGradient id="citadelPillEmerald" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#047857" />
      <stop offset="100%" stop-color="#10b981" />
    </linearGradient>
  </defs>

  <g transform="translate(6, 2)" font-family="'Cinzel', Consolas, monospace" font-size="10.5" font-weight="900" letter-spacing="1">
    <!-- 01: IDENTITY -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="76" height="32" rx="3" fill="#080e18" stroke="#1e293b" stroke-width="1" />
      <text x="38" y="20" text-anchor="middle" fill="#94a3b8" font-size="9.5">ARCHITECT</text>
      <rect x="79" y="0" width="115" height="32" rx="3" fill="url(#starkPillBlue)" />
      <text x="136" y="20" text-anchor="middle" fill="#040711">AVISH KUMAR</text>
    </g>

    <!-- 02: WOLF -->
    <g transform="translate(206, 0)">
      <rect x="0" y="0" width="62" height="32" rx="3" fill="#080e18" stroke="#1e293b" stroke-width="1" />
      <text x="31" y="20" text-anchor="middle" fill="#94a3b8" font-size="9.5">🐺 WOLF</text>
      <rect x="65" y="0" width="102" height="32" rx="3" fill="url(#starkPillBlue)" />
      <text x="116" y="20" text-anchor="middle" fill="#03060f">SYSTEMS</text>
    </g>

    <!-- 03: LION -->
    <g transform="translate(385, 0)">
      <rect x="0" y="0" width="62" height="32" rx="3" fill="#080e18" stroke="#1e293b" stroke-width="1" />
      <text x="31" y="20" text-anchor="middle" fill="#94a3b8" font-size="9.5">🦁 LION</text>
      <rect x="65" y="0" width="102" height="32" rx="3" fill="url(#lionPillGold)" />
      <text x="116" y="20" text-anchor="middle" fill="#03060f">FULL-STACK</text>
    </g>

    <!-- 04: EAGLE -->
    <g transform="translate(564, 0)">
      <rect x="0" y="0" width="62" height="32" rx="3" fill="#080e18" stroke="#1e293b" stroke-width="1" />
      <text x="31" y="20" text-anchor="middle" fill="#94a3b8" font-size="9.5">🦅 EAGLE</text>
      <rect x="65" y="0" width="98" height="32" rx="3" fill="url(#eaglePillCyan)" />
      <text x="114" y="20" text-anchor="middle" fill="#040711">AI ORACLE</text>
    </g>

    <!-- 05: RANK -->
    <g transform="translate(735, 0)">
      <rect x="0" y="0" width="68" height="32" rx="3" fill="#080e18" stroke="#1e293b" stroke-width="1" />
      <text x="34" y="20" text-anchor="middle" fill="#94a3b8" font-size="9.5">RANK</text>
      <rect x="71" y="0" width="100" height="32" rx="3" fill="url(#citadelPillEmerald)" />
      <text x="121" y="20" text-anchor="middle" fill="#03060f">TRI-APEX S+</text>
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
      <stop offset="0%" stop-color="#040914" />
      <stop offset="50%" stop-color="#081224" />
      <stop offset="100%" stop-color="#03060c" />
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
    <text x="35" y="30" text-anchor="middle" font-family="'Cinzel', monospace" font-size="20" font-weight="900" fill="#38bdf8">${num}</text>
  </g>

  <!-- Main Title & Hierarchy -->
  <g transform="translate(108, 32)">
    <text x="0" y="0" font-family="'Cinzel', serif" font-size="20" font-weight="900" fill="#f8fafc" letter-spacing="2.5">${title}</text>
    <text x="0" y="24" font-family="'Courier New', monospace" font-size="11.5" font-weight="700" fill="#7dd3fc" letter-spacing="1.5">${subtitle}</text>
  </g>

  <!-- Tri-Sigil Embellishment (Right: Wolf, Lion, Eagle Vector) -->
  <g transform="translate(850, 43)">
    <circle cx="0" cy="0" r="22" fill="#0a1424" stroke="#1e3a5f" stroke-width="1.5" />
    <!-- Triad Glyph Points -->
    <circle cx="0" cy="-8" r="3" fill="#38bdf8" />
    <circle cx="-7" cy="6" r="3" fill="#f59e0b" />
    <circle cx="7" cy="6" r="3" fill="#06b6d4" />
    <polygon points="0,-8 7,6 -7,6" fill="none" stroke="#64748b" stroke-width="0.8" />
  </g>

  <!-- Valyrian Blade Underline -->
  <line x1="108" y1="68" x2="800" y2="68" stroke="#162a45" stroke-width="1" />
  <line x1="108" y1="68" x2="320" y2="68" stroke="#38bdf8" stroke-width="1.5" />
</svg>`;
}

// -------------------------------------------------------------
// 4. OPERATIVE DOSSIER: got-operative-dossier.svg (and operative-dossier-v2.svg)
// Pure SVG Vector Crest (No photos, no broken links!)
// -------------------------------------------------------------
function getOperativeDossierSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 490" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="gotDosBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#030712" />
      <stop offset="50%" stop-color="#070e1c" />
      <stop offset="100%" stop-color="#020509" />
    </linearGradient>
    <linearGradient id="gotBlueText" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#93c5fd" />
    </linearGradient>
    <radialGradient id="avatarFrostGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.4" />
      <stop offset="100%" stop-color="#000" stop-opacity="0" />
    </radialGradient>
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
    <rect x="0" y="0" width="360" height="28" rx="3" fill="#081424" stroke="#38bdf8" stroke-width="1" />
    <text x="14" y="19" font-family="'Courier New', monospace" font-size="11" font-weight="900" fill="#38bdf8" letter-spacing="2">CITADEL DOSSIER // TRI-APEX COMMAND</text>

    <!-- Name & Titles -->
    <text x="0" y="65" font-family="'Cinzel', 'Palatino', serif" font-size="28" font-weight="900" fill="#f8fafc" letter-spacing="2">AVISH KUMAR</text>
    <text x="0" y="92" font-family="'Cinzel', serif" font-size="13" font-weight="700" fill="url(#gotBlueText)" letter-spacing="1.5">TRI-APEX ARCHITECT &#8226; WOLF &#8226; LION &#8226; EAGLE</text>

    <!-- Key-Value Fields -->
    <g transform="translate(0, 125)" font-family="'Courier New', monospace" font-size="12">
      <!-- 01 -->
      <text x="0" y="0" fill="#64748b" font-weight="800">ALLEGIANCE:</text>
      <text x="140" y="0" fill="#f8fafc" font-weight="800">The Westeros Triad (Winterfell &#8226; Casterly &#8226; Eyrie)</text>

      <!-- 02 -->
      <text x="0" y="28" fill="#64748b" font-weight="800">CODENAME:</text>
      <text x="140" y="28" fill="#38bdf8" font-weight="800">avish2142005 [Tri-Sigil Shield]</text>

      <!-- 03 -->
      <text x="0" y="56" fill="#64748b" font-weight="800">CORE ARSENAL:</text>
      <text x="140" y="56" fill="#f8fafc" font-weight="800">Python &#8226; TypeScript &#8226; React 19 &#8226; AI Models</text>

      <!-- 04 -->
      <text x="0" y="84" fill="#64748b" font-weight="800">TRI-FORTRESSES:</text>
      <text x="140" y="84" fill="#38bdf8" font-weight="800">AquaOS (Wolf) &#8226; Markdown (Lion) &#8226; Nutri-ai (Eagle)</text>

      <!-- 05 -->
      <text x="0" y="112" fill="#64748b" font-weight="800">CITADEL MASTERY:</text>
      <text x="140" y="112" fill="#f8fafc" font-weight="800">Systems, Full-Stack Citadels &amp; Cognitive AI</text>

      <!-- 06 -->
      <text x="0" y="140" fill="#64748b" font-weight="800">CURRENT CAMPAIGN:</text>
      <text x="140" y="140" fill="#10b981" font-weight="800">Fortifying Northern Repositories // 2026</text>
    </g>

    <!-- Sacred Tri-Apex Directive -->
    <g transform="translate(0, 310)">
      <rect x="0" y="0" width="530" height="95" rx="4" fill="#06101c" stroke="#1d3557" stroke-width="1.2" />
      <rect x="0" y="0" width="4" height="95" fill="#38bdf8" />
      <text x="18" y="24" font-family="'Cinzel', serif" font-size="12" font-weight="900" fill="#38bdf8" letter-spacing="1">THE TRI-APEX CREED:</text>
      <text x="18" y="48" font-family="'Georgia', serif" font-style="italic" font-size="13" fill="#cbd5e1">"The Wolf hunts in the dark. The Lion reigns over the fortress.</text>
      <text x="18" y="68" font-family="'Georgia', serif" font-style="italic" font-size="13" fill="#cbd5e1">The Eagle watches from the sky. Three disciplines, one engineer."</text>
      <text x="18" y="86" font-family="'Courier New', monospace" font-size="10.5" font-weight="700" fill="#7dd3fc">&gt; SHIPPING BULLETPROOF CODE ACROSS EVERY DIMENSION.</text>
    </g>
  </g>

  <!-- Right Column: Pure Vector Tri-Sigil Heraldic Seal (No photos!) -->
  <g transform="translate(745, 230)">
    <!-- Outer Frost Glow -->
    <circle cx="0" cy="0" r="120" fill="url(#avatarFrostGlow)" />

    <!-- Concentric Decorative Rings -->
    <circle cx="0" cy="0" r="98" fill="none" stroke="#1d3557" stroke-width="1.5" />
    <circle cx="0" cy="0" r="90" fill="none" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="16 8" />
    <circle cx="0" cy="0" r="82" fill="#040812" stroke="#38bdf8" stroke-width="2.5" filter="url(#dosGlow)" />

    <!-- Inner Heraldic Triad Glyphs -->
    <!-- 🐺 Wolf Emblem (Top) -->
    <g transform="translate(0, -32) scale(0.65)">
      <path d="M 0 -45 L 14 -30 L 28 -34 L 20 -15 L 36 -6 L 42 10 L 30 18 L 38 32 L 20 36 L 14 48 L 0 40 L -14 48 L -20 36 L -38 32 L -30 18 L -42 10 L -36 -6 L -20 -15 L -28 -34 L -14 -30 Z" fill="#0c1b2c" stroke="#38bdf8" stroke-width="2" />
      <circle cx="-8" cy="-5" r="2.5" fill="#7dd3fc" />
      <circle cx="8" cy="-5" r="2.5" fill="#7dd3fc" />
    </g>

    <!-- 🦁 Lion Emblem (Bottom-Left) -->
    <g transform="translate(-32, 28) scale(0.65)">
      <circle cx="0" cy="0" r="32" fill="#141708" stroke="#f59e0b" stroke-width="2" />
      <path d="M 0 -20 C 12 -20 20 -10 20 4 C 20 15 10 22 0 22 C -10 22 -20 15 -20 4 C -20 -10 -12 -20 0 -20 Z" fill="#241e06" stroke="#fbbf24" stroke-width="1.5" />
      <path d="M -7 -4 L 0 -11 L 7 -4 L 5 7 L 0 11 L -5 7 Z" fill="#f59e0b" />
    </g>

    <!-- 🦅 Eagle Emblem (Bottom-Right) -->
    <g transform="translate(32, 28) scale(0.65)">
      <circle cx="0" cy="0" r="32" fill="#061720" stroke="#06b6d4" stroke-width="2" />
      <path d="M -16 -12 L 8 -18 L 18 -6 L 8 16 L -10 18 L -18 6 Z" fill="#0d2430" stroke="#67e8f9" stroke-width="1.5" />
      <path d="M 8 -4 Q 22 2 16 16 Q 10 12 8 8 Z" fill="#f59e0b" stroke="#fde047" stroke-width="1.2" />
      <circle cx="0" cy="-4" r="2.5" fill="#fbbf24" />
    </g>

    <!-- Center Longclaw Valyrian Star -->
    <polygon points="0,-12 3,-3 12,0 3,3 0,12 -3,3 -12,0 -3,-3" fill="#f8fafc" filter="url(#dosGlow)" />

    <!-- Cardinal Runes -->
    <g fill="#38bdf8" font-family="'Cinzel', serif" font-size="10" font-weight="900" text-anchor="middle">
      <text x="0" y="-105">🐺</text>
      <text x="110" y="4">🦅</text>
      <text x="0" y="115">⚔️</text>
      <text x="-110" y="4">🦁</text>
    </g>

    <!-- Seal Tag Under Vector Crest -->
    <rect x="-95" y="130" width="190" height="28" rx="3" fill="#081424" stroke="#38bdf8" stroke-width="1.2" />
    <text x="0" y="149" text-anchor="middle" font-family="'Cinzel', serif" font-size="11" font-weight="900" fill="#f8fafc" letter-spacing="1.5">TRI-APEX ARCHITECT</text>
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
      <stop offset="0%" stop-color="#040812" />
      <stop offset="50%" stop-color="#07101e" />
      <stop offset="100%" stop-color="#020409" />
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

  <!-- Left Side: Hexagonal Tri-Apex Radar -->
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

    <!-- Avish Kumar's Actual Tri-Apex Combat Polygon -->
    <!-- Points: Wolf(OS)=96%(-144), Eagle(AI)=93%(121,-70), Lion(FullStack)=95%(123,71), Algorithms=91%(0,136), DevOps=89%(-115,67), Architecture=95%(-124,-71) -->
    <polygon points="0,-144 121,-70 123,71 0,136 -115,67 -124,-71" fill="#38bdf8" fill-opacity="0.3" stroke="#7dd3fc" stroke-width="2.5" filter="url(#rankGlow)" />

    <!-- Vertices Dots -->
    <circle cx="0" cy="-144" r="4.5" fill="#38bdf8" />
    <circle cx="121" cy="-70" r="4.5" fill="#06b6d4" />
    <circle cx="123" cy="71" r="4.5" fill="#f59e0b" />
    <circle cx="0" cy="136" r="4.5" fill="#f8fafc" />
    <circle cx="-115" cy="67" r="4.5" fill="#10b981" />
    <circle cx="-124" cy="-71" r="4.5" fill="#f8fafc" />

    <!-- Node Labels -->
    <text x="0" y="-165" text-anchor="middle" font-family="'Cinzel', serif" font-size="11.5" font-weight="900" fill="#38bdf8">🐺 WOLF: OS &amp; KERNELS [96%]</text>
    <text x="145" y="-72" font-family="'Cinzel', serif" font-size="11.5" font-weight="900" fill="#06b6d4">🦅 EAGLE: AI ORACLE [93%]</text>
    <text x="145" y="82" font-family="'Cinzel', serif" font-size="11.5" font-weight="900" fill="#f59e0b">🦁 LION: FULL-STACK [95%]</text>
    <text x="0" y="172" text-anchor="middle" font-family="'Cinzel', serif" font-size="11.5" font-weight="900" fill="#f8fafc">ALGORITHMS [91%]</text>
    <text x="-145" y="82" text-anchor="end" font-family="'Cinzel', serif" font-size="11.5" font-weight="900" fill="#10b981">INFRASTRUCTURE [89%]</text>
    <text x="-145" y="-72" text-anchor="end" font-family="'Cinzel', serif" font-size="11.5" font-weight="900" fill="#f8fafc">SYSTEM RELIABILITY [95%]</text>
  </g>

  <!-- Right Side: Tactical Mastery Matrix & Breakdown -->
  <g transform="translate(500, 48)">
    <rect x="0" y="0" width="380" height="30" rx="3" fill="#0d1b30" stroke="#38bdf8" stroke-width="1.2" />
    <text x="16" y="20" font-family="'Cinzel', serif" font-size="13" font-weight="900" fill="#38bdf8" letter-spacing="2">TRI-APEX COMBAT RATING: S+ GRADE</text>

    <!-- Capability Bars -->
    <g transform="translate(0, 55)" font-family="'Courier New', monospace" font-size="11.5" font-weight="800">
      <!-- 01: Wolf (Python / AquaOS) -->
      <g transform="translate(0, 0)">
        <text x="0" y="16" fill="#f8fafc">01 // 🐺 THE WOLF: OS KERNEL (AquaOS)</text>
        <text x="340" y="16" fill="#38bdf8">96%</text>
        <rect x="0" y="24" width="380" height="8" rx="2" fill="#0f1f35" />
        <rect x="0" y="24" width="365" height="8" rx="2" fill="#38bdf8" />
      </g>
      <!-- 02: Lion (TypeScript / Full-Stack) -->
      <g transform="translate(0, 52)">
        <text x="0" y="16" fill="#f8fafc">02 // 🦁 THE LION: FULL-STACK CITADELS</text>
        <text x="340" y="16" fill="#f59e0b">95%</text>
        <rect x="0" y="24" width="380" height="8" rx="2" fill="#0f1f35" />
        <rect x="0" y="24" width="361" height="8" rx="2" fill="#f59e0b" />
      </g>
      <!-- 03: Eagle (Nutri-ai / AI Models) -->
      <g transform="translate(0, 104)">
        <text x="0" y="16" fill="#f8fafc">03 // 🦅 THE EAGLE: COGNITIVE AI (Nutri-ai)</text>
        <text x="340" y="16" fill="#06b6d4">93%</text>
        <rect x="0" y="24" width="380" height="8" rx="2" fill="#0f1f35" />
        <rect x="0" y="24" width="353" height="8" rx="2" fill="#06b6d4" />
      </g>
      <!-- 04: Backend & APIs (Flask, REST) -->
      <g transform="translate(0, 156)">
        <text x="0" y="16" fill="#f8fafc">04 // ⚔️ BACKEND SERVICES &amp; REST APIS</text>
        <text x="340" y="16" fill="#38bdf8">92%</text>
        <rect x="0" y="24" width="380" height="8" rx="2" fill="#0f1f35" />
        <rect x="0" y="24" width="350" height="8" rx="2" fill="#0284c7" />
      </g>
      <!-- 05: Linux & Tooling -->
      <g transform="translate(0, 208)">
        <text x="0" y="16" fill="#f8fafc">05 // 🛡️ LINUX, DOCKER &amp; CI/CD PIPES</text>
        <text x="340" y="16" fill="#10b981">90%</text>
        <rect x="0" y="24" width="380" height="8" rx="2" fill="#0f1f35" />
        <rect x="0" y="24" width="342" height="8" rx="2" fill="#10b981" />
      </g>
      <!-- 06: Data Structures & Algorithms -->
      <g transform="translate(0, 260)">
        <text x="0" y="16" fill="#f8fafc">06 // 💎 ADVANCED DATA STRUCTURES</text>
        <text x="340" y="16" fill="#f8fafc">91%</text>
        <rect x="0" y="24" width="380" height="8" rx="2" fill="#0f1f35" />
        <rect x="0" y="24" width="346" height="8" rx="2" fill="#f8fafc" />
      </g>
    </g>
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 6. VALYRIAN BLADE DIVIDER: valyrian-divider.svg
// -------------------------------------------------------------
function getValyrianDividerSvg(reverse) {
  const startGrad = reverse ? "#f59e0b" : "#38bdf8";
  const endGrad = reverse ? "#38bdf8" : "#06b6d4";

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 32" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="divBlade_${reverse ? 'rev' : 'fwd'}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#050a16" />
      <stop offset="25%" stop-color="${startGrad}" />
      <stop offset="50%" stop-color="#ffffff" />
      <stop offset="75%" stop-color="${endGrad}" />
      <stop offset="100%" stop-color="#050a16" />
    </linearGradient>
  </defs>
  <rect width="920" height="32" fill="none" />
  <line x1="20" y1="16" x2="900" y2="16" stroke="url(#divBlade_${reverse ? 'rev' : 'fwd'})" stroke-width="1.8" />
  
  <!-- Central Tri-Sigil Gem -->
  <g transform="translate(460, 16)">
    <polygon points="0,-8 8,0 0,8 -8,0" fill="#ffffff" />
    <circle cx="-16" cy="0" r="3" fill="#38bdf8" />
    <circle cx="0" cy="0" r="2.5" fill="#f59e0b" />
    <circle cx="16" cy="0" r="3" fill="#06b6d4" />
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 7. WEIRWOOD TELEMETRY GRID: got-telemetry-grid.svg
// -------------------------------------------------------------
function getTelemetryGridSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 380" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="telBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#030712" />
      <stop offset="100%" stop-color="#081426" />
    </linearGradient>
  </defs>

  <rect width="920" height="380" rx="6" fill="url(#telBg)" />
  <rect width="920" height="380" rx="6" fill="none" stroke="#162942" stroke-width="1.5" />

  <!-- Top Banner -->
  <g transform="translate(24, 20)">
    <rect x="0" y="0" width="872" height="42" rx="4" fill="#081424" stroke="#38bdf8" stroke-width="1.2" />
    <circle cx="24" cy="21" r="5" fill="#38bdf8" />
    <text x="42" y="26" font-family="'Cinzel', serif" font-size="14" font-weight="900" fill="#f8fafc" letter-spacing="2">TRI-APEX TELEMETRY ENGINE &#8226; AVISH KUMAR (@AVISH2142005)</text>
    <text x="840" y="26" text-anchor="end" font-family="'Courier New', monospace" font-size="12" font-weight="800" fill="#10b981">LIVE // WATCH ACTIVE</text>
  </g>

  <!-- 3 Big Metric Columns (Wolf, Lion, Eagle) -->
  <g transform="translate(24, 80)">
    <!-- Column 1: 🐺 THE WOLF DOMAIN (Systems) -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="276" height="260" rx="4" fill="#060e1a" stroke="#1e3a5f" stroke-width="1.2" />
      <rect x="0" y="0" width="276" height="34" rx="4" fill="#0c1d34" />
      <text x="18" y="22" font-family="'Cinzel', serif" font-size="12" font-weight="900" fill="#38bdf8" letter-spacing="1">🐺 THE WOLF // SYSTEMS</text>

      <g transform="translate(20, 60)" font-family="'Courier New', monospace">
        <text x="0" y="0" font-size="11" fill="#94a3b8">FLAGSHIP KERNEL</text>
        <text x="0" y="28" font-family="'Cinzel', serif" font-size="20" font-weight="900" fill="#f8fafc">AquaOS Core</text>
        
        <text x="0" y="65" font-size="11" fill="#94a3b8">CHARACTER TRAITS</text>
        <text x="0" y="85" font-size="12" font-weight="800" fill="#38bdf8">&#8226; OS Memory Abstractions</text>
        <text x="0" y="105" font-size="12" font-weight="800" fill="#7dd3fc">&#8226; POSIX Process Isolation</text>
        <text x="0" y="125" font-size="12" font-weight="800" fill="#38bdf8">&#8226; Python Low-Level Engine</text>
        <text x="0" y="145" font-size="12" font-weight="800" fill="#7dd3fc">&#8226; Linux Shell &amp; Bash Tools</text>

        <rect x="0" y="165" width="236" height="24" rx="2" fill="#08182b" stroke="#38bdf8" stroke-width="0.8" />
        <text x="118" y="181" text-anchor="middle" font-size="10" font-weight="800" fill="#38bdf8">&gt; ZERO MEMORY LEAKS</text>
      </g>
    </g>

    <!-- Column 2: 🦁 THE LION DOMAIN (Full-Stack) -->
    <g transform="translate(298, 0)">
      <rect x="0" y="0" width="276" height="260" rx="4" fill="#0d1109" stroke="#5a3d08" stroke-width="1.2" />
      <rect x="0" y="0" width="276" height="34" rx="4" fill="#241a05" />
      <text x="18" y="22" font-family="'Cinzel', serif" font-size="12" font-weight="900" fill="#f59e0b" letter-spacing="1">🦁 THE LION // CITADELS</text>

      <g transform="translate(20, 60)" font-family="'Courier New', monospace">
        <text x="0" y="0" font-size="11" fill="#94a3b8">SOVEREIGN FORTRESS</text>
        <text x="0" y="28" font-family="'Cinzel', serif" font-size="20" font-weight="900" fill="#f8fafc">Live Markdown</text>
        
        <text x="0" y="65" font-size="11" fill="#94a3b8">CHARACTER TRAITS</text>
        <text x="0" y="85" font-size="12" font-weight="800" fill="#fbbf24">&#8226; Real-time AST Parsing</text>
        <text x="0" y="105" font-size="12" font-weight="800" fill="#fde047">&#8226; TypeScript &amp; React 19</text>
        <text x="0" y="125" font-size="12" font-weight="800" fill="#fbbf24">&#8226; Postgres &amp; MongoDB</text>
        <text x="0" y="145" font-size="12" font-weight="800" fill="#fde047">&#8226; High-Scale Architectures</text>

        <rect x="0" y="165" width="236" height="24" rx="2" fill="#1f1504" stroke="#f59e0b" stroke-width="0.8" />
        <text x="118" y="181" text-anchor="middle" font-size="10" font-weight="800" fill="#f59e0b">&gt; PRODUCTION DOMINION</text>
      </g>
    </g>

    <!-- Column 3: 🦅 THE EAGLE DOMAIN (AI & Telemetry) -->
    <g transform="translate(596, 0)">
      <rect x="0" y="0" width="276" height="260" rx="4" fill="#04121a" stroke="#0e5a6f" stroke-width="1.2" />
      <rect x="0" y="0" width="276" height="34" rx="4" fill="#0b2332" />
      <text x="18" y="22" font-family="'Cinzel', serif" font-size="12" font-weight="900" fill="#06b6d4" letter-spacing="1">🦅 THE EAGLE // ORACLE</text>

      <g transform="translate(20, 60)" font-family="'Courier New', monospace">
        <text x="0" y="0" font-size="11" fill="#94a3b8">STRATOSPHERIC AI</text>
        <text x="0" y="28" font-family="'Cinzel', serif" font-size="20" font-weight="900" fill="#f8fafc">Nutri-ai Model</text>

        <text x="0" y="65" font-size="11" fill="#94a3b8">CHARACTER TRAITS</text>
        <text x="0" y="85" font-size="12" font-weight="800" fill="#67e8f9">&#8226; Cognitive Diagnostics</text>
        <text x="0" y="105" font-size="12" font-weight="800" fill="#a5f3fc">&#8226; Sub-ms RESTful APIs</text>
        <text x="0" y="125" font-size="12" font-weight="800" fill="#67e8f9">&#8226; Machine Intelligence</text>
        <text x="0" y="145" font-size="12" font-weight="800" fill="#a5f3fc">&#8226; Real-Time Telemetry</text>

        <rect x="0" y="165" width="236" height="24" rx="2" fill="#041822" stroke="#06b6d4" stroke-width="0.8" />
        <text x="118" y="181" text-anchor="middle" font-size="10" font-weight="800" fill="#06b6d4">&gt; HIGH-ALTITUDE PRECISION</text>
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
      <stop offset="0%" stop-color="#040812" />
      <stop offset="100%" stop-color="#071120" />
    </linearGradient>
  </defs>

  <rect width="920" height="220" rx="6" fill="url(#trophyBg)" />
  <rect width="920" height="220" rx="6" fill="none" stroke="#162942" stroke-width="1.5" />

  <g transform="translate(24, 25)">
    <!-- 4 Trophies Cards -->
    <!-- 01: The Wolf Feat -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="200" height="170" rx="4" fill="#060e1a" stroke="#1e3a5f" stroke-width="1.2" />
      <text x="100" y="38" text-anchor="middle" font-size="28">🐺</text>
      <text x="100" y="78" text-anchor="middle" font-family="'Cinzel', serif" font-size="28" font-weight="900" fill="#f8fafc">AquaOS</text>
      <text x="100" y="104" text-anchor="middle" font-family="'Cinzel', serif" font-size="11" font-weight="900" fill="#38bdf8">WOLF RESILIENCE</text>
      <text x="100" y="125" text-anchor="middle" font-family="'Courier New', monospace" font-size="10" fill="#94a3b8">OS KERNEL &amp; POSIX</text>
      <line x1="20" y1="142" x2="180" y2="142" stroke="#162942" />
      <text x="100" y="156" text-anchor="middle" font-family="'Courier New', monospace" font-size="9" font-weight="700" fill="#10b981">UNBROKEN KERNEL</text>
    </g>

    <!-- 02: The Lion Feat -->
    <g transform="translate(224, 0)">
      <rect x="0" y="0" width="200" height="170" rx="4" fill="#0d1109" stroke="#5a3d08" stroke-width="1.2" />
      <text x="100" y="38" text-anchor="middle" font-size="28">🦁</text>
      <text x="100" y="78" text-anchor="middle" font-family="'Cinzel', serif" font-size="28" font-weight="900" fill="#f8fafc">Markdown</text>
      <text x="100" y="104" text-anchor="middle" font-family="'Cinzel', serif" font-size="11" font-weight="900" fill="#f59e0b">LION DOMINION</text>
      <text x="100" y="125" text-anchor="middle" font-family="'Courier New', monospace" font-size="10" fill="#94a3b8">FULL-STACK CASTLE</text>
      <line x1="20" y1="142" x2="180" y2="142" stroke="#162942" />
      <text x="100" y="156" text-anchor="middle" font-family="'Courier New', monospace" font-size="9" font-weight="700" fill="#fbbf24">SUB-MS AST PARSING</text>
    </g>

    <!-- 03: The Eagle Feat -->
    <g transform="translate(448, 0)">
      <rect x="0" y="0" width="200" height="170" rx="4" fill="#04121a" stroke="#0e5a6f" stroke-width="1.2" />
      <text x="100" y="38" text-anchor="middle" font-size="28">🦅</text>
      <text x="100" y="78" text-anchor="middle" font-family="'Cinzel', serif" font-size="28" font-weight="900" fill="#f8fafc">Nutri-ai</text>
      <text x="100" y="104" text-anchor="middle" font-family="'Cinzel', serif" font-size="11" font-weight="900" fill="#06b6d4">EAGLE VISION</text>
      <text x="100" y="125" text-anchor="middle" font-family="'Courier New', monospace" font-size="10" fill="#94a3b8">COGNITIVE AI ORACLE</text>
      <line x1="20" y1="142" x2="180" y2="142" stroke="#162942" />
      <text x="100" y="156" text-anchor="middle" font-family="'Courier New', monospace" font-size="9" font-weight="700" fill="#06b6d4">DEEP MODEL DIAGNOSTICS</text>
    </g>

    <!-- 04: The Citadel S+ Master -->
    <g transform="translate(672, 0)">
      <rect x="0" y="0" width="200" height="170" rx="4" fill="#080e1a" stroke="#1e3557" stroke-width="1.2" />
      <text x="100" y="38" text-anchor="middle" font-size="28">⚔️</text>
      <text x="100" y="78" text-anchor="middle" font-family="'Cinzel', serif" font-size="28" font-weight="900" fill="#f8fafc">Grade S+</text>
      <text x="100" y="104" text-anchor="middle" font-family="'Cinzel', serif" font-size="11" font-weight="900" fill="#10b981">TRI-APEX MASTER</text>
      <text x="100" y="125" text-anchor="middle" font-family="'Courier New', monospace" font-size="10" fill="#94a3b8">AVISH KUMAR</text>
      <line x1="20" y1="142" x2="180" y2="142" stroke="#162942" />
      <text x="100" y="156" text-anchor="middle" font-family="'Courier New', monospace" font-size="9" font-weight="700" fill="#10b981">ZERO TECHNICAL DEBT</text>
    </g>
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 9. WESTEROS BATTLE ROSTER: got-battle-roster.svg & shadow-fight-roster.svg
// -------------------------------------------------------------
function getBattleRosterSvg() {
  const bosses = [
    { name: "WHITE WALKERS", foe: "LEGACY CRUST &amp; DEPRECATION", power: "CRYOGENIC CODE FREEZE", defeated: "🐺 SLAIN WITH WOLF PYTHON KERNEL" },
    { name: "THE NIGHT KING", foe: "RACE CONDITIONS &amp; DEADLOCKS", power: "INFINITE RECURSIVE HORDE", defeated: "🐺 SHATTERED WITH POSIX ISOLATION" },
    { name: "LANNISTER DEBT", foe: "SPAGHETTI LOGIC &amp; UNTYPED STATE", power: "UNCONTROLLED FRONTEND BLOWOUT", defeated: "🦁 REIGNED IN WITH STRICT TYPESCRIPT" },
    { name: "IRON FLEET HORDE", foe: "DATABASE CONGESTION &amp; SCALE DROPS", power: "HIGH PACKET STORMS", defeated: "🦁 FORTIFIED WITH POSTGRES &amp; NEXT.JS" },
    { name: "SKY DRIFT CHAOS", foe: "AI MODEL DECAY &amp; LATENCY", power: "DRIFTING DATA PATTERNS", defeated: "🦅 ANCHORED BY NUTRI-AI COGNITION" },
    { name: "CERSEI'S WILDFIRE", foe: "UNHANDLED EXCEPTION CASCADES", power: "VOLATILE SERVER OUTAGES", defeated: "🦅 MONITORED BY REAL-TIME TELEMETRY" }
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
// 10. WINTERFELL COMMAND TERMINAL: got-terminal.svg & terminal-contact.svg
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

  <!-- Terminal Top Bar -->
  <g transform="translate(0, 0)">
    <rect width="920" height="34" rx="6" fill="#08101f" />
    <circle cx="20" cy="17" r="5" fill="#ef4444" />
    <circle cx="36" cy="17" r="5" fill="#f59e0b" />
    <circle cx="52" cy="17" r="5" fill="#10b981" />
    <text x="460" y="22" text-anchor="middle" font-family="'Courier New', monospace" font-size="12" font-weight="800" fill="#7dd3fc">TRI-APEX TERMINAL // SHELL: BASH // REALM: AVISH2142005</text>
  </g>

  <!-- Shell Output -->
  <g transform="translate(24, 60)" font-family="'Courier New', monospace" font-size="12" font-weight="700">
    <text x="0" y="0" fill="#38bdf8">root@westeros:~# <tspan fill="#f8fafc">tri-apex-status --all-disciplines</tspan></text>
    <text x="0" y="24" fill="#94a3b8">&gt; [WOLF]  Systems Engine: AquaOS Kernel loaded. POSIX Isolation active. [OK]</text>
    <text x="0" y="46" fill="#f59e0b">&gt; [LION]  Full-Stack Core: Live Markdown AST compiled. React 19 deployed. [OK]</text>
    <text x="0" y="68" fill="#06b6d4">&gt; [EAGLE] AI Telemetry: Nutri-ai models calibrated. Latency: 1.2ms. [OK]</text>
    <text x="0" y="92" fill="#10b981">&gt; STATUS: ALL 3 ARCHETYPES OPERATIONAL. ZERO REGRESSIONS DETECTED.</text>
    <text x="0" y="118" fill="#38bdf8">root@westeros:~# <tspan fill="#f8fafc">echo "Ready for enterprise conquests."</tspan> █</text>
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 11. MONOLITHIC TRI-APEX FOOTER: got-footer.svg & ronin-footer.svg
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
      <stop offset="50%" stop-color="#f59e0b" />
      <stop offset="100%" stop-color="#06b6d4" />
    </linearGradient>
  </defs>

  <rect width="1600" height="240" fill="url(#footerBg)" />
  <line x1="0" y1="0" x2="1600" y2="0" stroke="#162942" stroke-width="1.5" />
  <line x1="300" y1="0" x2="700" y2="0" stroke="#38bdf8" stroke-width="2" />
  <line x1="700" y1="0" x2="1100" y2="0" stroke="#f59e0b" stroke-width="2" />
  <line x1="1100" y1="0" x2="1300" y2="0" stroke="#06b6d4" stroke-width="2" />

  <!-- Center Tri-Sigil Vector Crest -->
  <g transform="translate(800, 60)">
    <circle cx="0" cy="0" r="32" fill="#08101d" stroke="#38bdf8" stroke-width="1.5" />
    <circle cx="-10" cy="-4" r="3.5" fill="#38bdf8" />
    <circle cx="0" cy="8" r="3.5" fill="#f59e0b" />
    <circle cx="10" cy="-4" r="3.5" fill="#06b6d4" />
    <polygon points="-10,-4 10,-4 0,8" fill="none" stroke="#f8fafc" stroke-width="1" />
  </g>

  <!-- Royal Signature Text -->
  <g transform="translate(800, 135)" text-anchor="middle">
    <text x="0" y="0" font-family="'Cinzel', 'Palatino', serif" font-size="24" font-weight="900" fill="url(#footerGold)" letter-spacing="4">THE TRI-APEX REALM &#8226; AVISH KUMAR</text>
    <text x="0" y="30" font-family="'Georgia', serif" font-style="italic" font-size="14" fill="#94a3b8" letter-spacing="2">🐺 THE PACK SURVIVES &#8226; 🦁 THE PRIDE REIGNS &#8226; 🦅 THE SKY WATCHES &#8226; GITHUB.COM/AVISH2142005</text>
    <text x="0" y="56" font-family="'Courier New', monospace" font-size="11" font-weight="700" fill="#38bdf8" letter-spacing="1">[ TRANSMISSION SEALED // TRI-APEX COMMAND PROTOCOL 0x777 // VALYRIAN CODE ARMED ]</text>
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
        fill = "#F59E0B"; // Valyrian Lion Gold
        stroke = "#FDE047";
      } else if (hash > 11) {
        fill = "#38BDF8"; // Northern Wolf Frost
        stroke = "#7DD3FC";
      } else if (hash > 8) {
        fill = "#06B6D4"; // High Eagle Cyan
        stroke = "#67E8F9";
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
    <text x="0" y="0" font-family="'Cinzel', serif" font-size="16" font-weight="900" fill="#38bdf8" letter-spacing="1.5">52-WEEK SIEGE OF CODE &#8226; THE TRI-APEX CADENCE</text>
    <text x="0" y="20" font-family="'Courier New', monospace" font-size="11" fill="#94a3b8">234 CONFIRMED LETHAL STRIKES // DEFENSE &amp; CONQUEST LOG</text>
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
${tilesXml}  </g>

  <!-- Legend -->
  <g transform="translate(720, 248)" font-family="'Courier New', monospace" font-size="9" font-weight="800">
    <text x="-40" y="10" fill="#64748b">LESS</text>
    <rect x="0" y="0" width="11" height="11" rx="2" fill="#0a1322" stroke="#122035" />
    <rect x="18" y="0" width="11" height="11" rx="2" fill="#082f49" stroke="#0c4a6e" />
    <rect x="36" y="0" width="11" height="11" rx="2" fill="#0369a1" stroke="#0284c7" />
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
  { path: "header-profile.svg", content: getGotSectionHeaderSvg("01", "TRI-APEX DOSSIER // ARCHITECT PROFILE", "WOLF &#8226; LION &#8226; EAGLE // THE TRIUMVIRATE DIRECTIVES") },
  { path: "header-arsenal.svg", content: getGotSectionHeaderSvg("02", "TRI-CHARACTER ARSENAL // WEAPONS OF CODE", "CURATED WEAPONRY OF WOLF, LION, AND EAGLE") },
  { path: "header-project-database.svg", content: getGotSectionHeaderSvg("03", "CITADEL VAULTS // REALM REPOSITORIES", "AQUAOS (WOLF) &#8226; LIVE MARKDOWN (LION) &#8226; NUTRI-AI (EAGLE)") },
  { path: "header-commit-radar.svg", content: getGotSectionHeaderSvg("04", "WATCH ON THE WALL // SENTINEL CADENCE", "UNBROKEN NIGHT SENTINEL VIGILANCE") },
  { path: "header-contributions.svg", content: getGotSectionHeaderSvg("05", "52-WEEK CAMPAIGN // TRI-APEX SIEGE", "WOLF, LION, AND EAGLE CODE CONQUEST MATRIX") },
  { path: "header-roadmap.svg", content: getGotSectionHeaderSvg("06", "2026 CONQUEST DIRECTIVES // REALM ROADMAP", "STRATEGIC MILESTONES ACROSS THE 3 REALMS") },
  { path: "header-trophy-room.svg", content: getGotSectionHeaderSvg("07", "GREAT HALL OF HEROES // TRI-APEX FEATS", "WOLF RESILIENCE, LION DOMINION, EAGLE VISION") },
  { path: "header-badges.svg", content: getGotSectionHeaderSvg("★", "CITADEL CREDENTIALS // MAESTER SEALS", "VERIFIED ACADEMIC &amp; ENGINEERING SEALS") },
  { path: "header-telemetry.svg", content: getGotSectionHeaderSvg("08", "WEIRWOOD TELEMETRY // SEVEN KINGDOMS METRICS", "REAL-TIME CODE METRICS MONITORED VIA THE OLD GODS") },
  { path: "header-connect.svg", content: getGotSectionHeaderSvg("09", "SEND A RAVEN // ROYAL CORRESPONDENCE", "SECURE DISPATCH CHANNELS ACROSS WESTEROS") },
  { path: "header-terminal.svg", content: getGotSectionHeaderSvg("10", "TRI-APEX TERMINAL // COMMAND SHELL", "DIRECT DISPATCH INTERFACE TO AVISH KUMAR") },

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

console.log("[generate-got-theme] All Game of Thrones Tri-Apex SVGs successfully created and updated!");
