const fs = require("fs");
const path = require("path");

const assetsDir = path.resolve(__dirname, "../assets");

console.log("[generate-got-theme] Crafting Apex Eagle / Raptor Theme (Chiaroscuro Obsidian & Amber) for Avish Kumar (@avish2142005)...");

// -------------------------------------------------------------
// REUSABLE VECTOR ASSET: Chiaroscuro Eagle Head Vector
// (Accurately captures the dramatic white feathers, hooked amber beak,
// and piercing amber-gold predator eye emerging from pitch black darkness)
// -------------------------------------------------------------
function getVectorEagleArt(x, y, scale = 1, showGlow = true) {
  return `
  <g transform="translate(${x}, ${y}) scale(${scale})">
    ${showGlow ? `
    <!-- Ambient Predator Eye & Beak Glow -->
    <radialGradient id="eagleEyeGlow_${x}_${y}" cx="55%" cy="38%" r="45%">
      <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.5" />
      <stop offset="40%" stop-color="#f59e0b" stop-opacity="0.2" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>
    <circle cx="90" cy="70" r="140" fill="url(#eagleEyeGlow_${x}_${y})" />
    ` : ''}

    <!-- Shadow Silhouette Backdrop -->
    <path d="M -40 220 C -20 160 -10 100 20 50 C 40 20 80 -10 130 -20 C 180 -10 210 20 230 70 C 245 110 250 160 260 220 Z" fill="#020306" />

    <!-- Crown & Brow Plumage (Chiaroscuro Illuminated White & Silver Feathers) -->
    <!-- Layer 1: Dark feather undertones -->
    <path d="M 30 70 L 60 30 L 100 5 L 145 -5 L 185 10 L 210 40 L 215 80 L 195 95 L 170 70 L 140 75 L 115 60 L 80 75 Z" fill="#334155" />
    <path d="M 40 85 L 75 45 L 120 20 L 160 15 L 190 35 L 195 75 L 175 80 L 145 65 L 110 70 L 80 85 Z" fill="#64748b" />
    
    <!-- Layer 2: Mid-tone silver plumage -->
    <path d="M 25 110 L 55 70 L 95 40 L 140 28 L 175 42 L 180 85 L 160 90 L 130 75 L 95 82 L 60 100 Z" fill="#94a3b8" />
    <path d="M 15 140 L 45 95 L 80 65 L 125 50 L 160 60 L 165 95 L 145 95 L 115 85 L 75 98 L 40 130 Z" fill="#cbd5e1" />

    <!-- Layer 3: High-contrast illuminated white crest feathers -->
    <path d="M 10 170 L 35 120 L 70 85 L 110 68 L 145 75 L 150 102 L 130 102 L 100 90 L 60 108 L 25 160 Z" fill="#e2e8f0" />
    <path d="M 5 200 L 25 150 L 55 110 L 95 88 L 130 92 L 135 115 L 115 112 L 85 102 L 45 125 L 15 190 Z" fill="#f8fafc" />
    <path d="M 45 130 L 70 95 L 105 82 L 125 86 L 120 105 L 95 98 L 65 115 Z" fill="#ffffff" />
    <path d="M 65 60 L 100 35 L 135 30 L 160 45 L 150 65 L 125 50 L 95 55 Z" fill="#ffffff" />
    <path d="M 85 30 L 115 15 L 145 12 L 165 25 L 155 38 L 135 25 L 110 25 Z" fill="#ffffff" />

    <!-- Feather detail streaks (Fine razor texture) -->
    <g stroke="#ffffff" stroke-width="1.2" opacity="0.85" stroke-linecap="round">
      <line x1="80" y1="35" x2="65" y2="55" />
      <line x1="105" y1="25" x2="90" y2="50" />
      <line x1="130" y1="20" x2="115" y2="45" />
      <line x1="150" y1="30" x2="135" y2="55" />
      <line x1="70" y1="70" x2="55" y2="95" />
      <line x1="95" y1="65" x2="80" y2="90" />
      <line x1="120" y1="60" x2="105" y2="85" />
      <line x1="55" y1="110" x2="40" y2="135" />
      <line x1="80" y1="105" x2="65" y2="130" />
      <line x1="40" y1="150" x2="25" y2="175" />
    </g>

    <!-- Menacing Deep Brow Overhang (Shadow casting over the eye) -->
    <path d="M 75 88 C 95 82 120 84 140 92 L 148 105 C 125 96 95 96 75 105 Z" fill="#0f172a" />
    <path d="M 85 92 C 102 88 122 90 138 98 L 142 104 C 122 98 100 97 85 103 Z" fill="#020617" />

    <!-- PIERCING PREDATOR AMBER EYE (The Focal Soul of the Character) -->
    <g transform="translate(108, 106)">
      <!-- Eye socket dark rim -->
      <path d="M -22 0 C -12 -12 12 -12 24 2 C 12 12 -12 10 -22 0 Z" fill="#090d16" stroke="#1e293b" stroke-width="1.5" />
      
      <!-- Glowing amber iris -->
      <ellipse cx="2" cy="0" rx="13" ry="8" fill="#d97706" />
      <ellipse cx="2" cy="0" rx="10" ry="7" fill="#f59e0b" />
      <ellipse cx="2" cy="0" rx="7" ry="5.5" fill="#fbbf24" />

      <!-- Razor focused predator pupil -->
      <circle cx="2" cy="0" r="4" fill="#030712" />
      <circle cx="3" cy="-0.5" r="1.5" fill="#000000" />

      <!-- Specular high-contrast catchlight -->
      <circle cx="-1" cy="-2.5" r="2" fill="#ffffff" />
      <circle cx="5" cy="1" r="1" fill="#fef08a" />
      
      <!-- Eye contour razor eyeliner -->
      <path d="M -22 0 C -10 -9 10 -9 24 2" fill="none" stroke="#000000" stroke-width="2.5" />
      <path d="M -22 0 C -10 8 10 7 24 2" fill="none" stroke="#0f172a" stroke-width="1.5" />
    </g>

    <!-- Hooked Amber Beak Base / Cere -->
    <path d="M 125 100 C 135 98 145 102 152 110 L 148 122 C 140 118 132 116 125 118 Z" fill="#b45309" />
    <ellipse cx="140" cy="112" rx="3.5" ry="2" fill="#451a03" />

    <!-- HOOKED AMBER TALON-BEAK (Razor sharp, illuminated top, shadowed underside) -->
    <!-- Beak upper illuminated amber curve -->
    <path d="M 132 104 C 160 100 195 110 215 130 C 228 142 235 160 236 178 C 235 195 224 208 214 212 C 218 198 218 180 208 165 C 195 148 175 140 150 142 L 134 135 Z" fill="#f59e0b" stroke="#fde047" stroke-width="0.8" />
    <!-- Beak bright ridge highlight -->
    <path d="M 135 105 C 162 102 195 112 214 132 C 224 144 230 160 232 178 C 230 162 222 148 210 136 C 192 118 162 108 135 105 Z" fill="#fde047" />
    <path d="M 160 110 C 185 118 205 132 218 148 C 224 156 227 166 228 175 C 226 166 222 158 216 150 C 204 136 185 122 160 110 Z" fill="#ffffff" opacity="0.6" />
    
    <!-- Beak dark under-hook shadow -->
    <path d="M 214 212 C 210 214 205 210 202 202 C 196 186 195 170 190 156 C 180 148 165 144 148 144 L 140 148 L 138 135 C 165 135 188 144 202 160 C 212 174 215 194 214 212 Z" fill="#9a3412" />
    <!-- Hook tip needle point -->
    <path d="M 224 195 C 222 205 218 212 214 212 C 216 208 218 200 218 192 Z" fill="#451a03" />

    <!-- Lower Jaw / Beak Gape -->
    <path d="M 132 145 L 165 145 C 180 148 190 158 195 170 C 185 164 175 160 160 158 L 130 155 Z" fill="#78350f" />

    <!-- Throat & Neck Feathers Fading into Absolute Pitch Black (#000000) -->
    <path d="M 15 220 L 40 170 L 75 145 L 110 140 L 135 155 L 130 185 L 115 210 L 90 230 L 45 240 Z" fill="#1e293b" opacity="0.6" />
    <path d="M 35 240 L 65 195 L 95 175 L 125 170 L 120 205 L 95 235 L 60 250 Z" fill="#0f172a" opacity="0.8" />
  </g>`;
}

// -------------------------------------------------------------
// 1. HERO BANNER: got-hero-banner.svg (and ronin-hero-v2.svg)
// -------------------------------------------------------------
function getHeroBannerSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 520" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <!-- Background: Pitch Black Obsidian Void (0x000000) -->
    <linearGradient id="apexVoidBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#000000" />
      <stop offset="35%" stop-color="#020408" />
      <stop offset="70%" stop-color="#050a12" />
      <stop offset="100%" stop-color="#000000" />
    </linearGradient>

    <!-- Glowing Amber Gold Gradient (Eagle's Eye & Beak) -->
    <linearGradient id="raptorAmber" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f59e0b" />
      <stop offset="50%" stop-color="#fbbf24" />
      <stop offset="100%" stop-color="#d97706" />
    </linearGradient>

    <!-- Diamond Silver Plumage Gradient -->
    <linearGradient id="featherSilver" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="40%" stop-color="#f1f5f9" />
      <stop offset="75%" stop-color="#cbd5e1" />
      <stop offset="100%" stop-color="#94a3b8" />
    </linearGradient>

    <!-- Stratosphere Atmosphere Gradient -->
    <linearGradient id="stratosphereSky" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0ea5e9" />
      <stop offset="100%" stop-color="#38bdf8" />
    </linearGradient>

    <!-- Ambient Predator Lighting Aura -->
    <radialGradient id="predatorAura" cx="20%" cy="45%" r="60%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.18" />
      <stop offset="30%" stop-color="#0ea5e9" stop-opacity="0.08" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>

    <!-- Subtle Stealth Grid -->
    <pattern id="stealthGrid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0a121e" stroke-width="0.8" opacity="0.6" />
      <circle cx="40" cy="40" r="1" fill="#f59e0b" opacity="0.25" />
    </pattern>

    <!-- Amber Predator Eye Glow Filter -->
    <filter id="eyeGlow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="6" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
    <filter id="laserGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="4" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>

    <style>
      @keyframes amberLaserScan {
        0% { stroke-dashoffset: 4400; }
        100% { stroke-dashoffset: 0; }
      }
      @keyframes radarSweep {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes eyePulse {
        0%, 100% { opacity: 0.8; filter: drop-shadow(0 0 4px #fbbf24); }
        50% { opacity: 1; filter: drop-shadow(0 0 16px #f59e0b); }
      }
      .laser-amber-border {
        stroke-dasharray: 260 4140;
        animation: amberLaserScan 9s linear infinite;
      }
      .eye-pulse { animation: eyePulse 3.5s ease-in-out infinite; }
      .radar-arm { transform-origin: 220px 240px; animation: radarSweep 12s linear infinite; }
    </style>
  </defs>

  <!-- Pitch Black Void Base -->
  <rect width="1600" height="520" fill="url(#apexVoidBg)" />
  <rect width="1600" height="520" fill="url(#stealthGrid)" />
  <circle cx="280" cy="260" r="480" fill="url(#predatorAura)" />

  <!-- Perimeter Obsidian & Amber Hairline Border -->
  <rect x="16" y="16" width="1568" height="488" rx="6" fill="none" stroke="#182232" stroke-width="1.5" />
  <rect x="22" y="22" width="1556" height="476" rx="4" fill="none" stroke="#0a0f18" stroke-width="1" />
  <rect x="16" y="16" width="1568" height="488" rx="6" fill="none" stroke="#f59e0b" stroke-width="2" class="laser-amber-border" filter="url(#laserGlow)" />

  <!-- Tactical HUD Corner Brackets -->
  <g fill="none" stroke="#f59e0b" stroke-width="1.8">
    <path d="M 16 70 L 70 16 M 16 35 L 35 16 M 16 16 L 100 16 M 16 16 L 16 100" />
    <circle cx="40" cy="40" r="3.5" fill="#f59e0b" />

    <path d="M 1584 70 L 1530 16 M 1584 35 L 1565 16 M 1584 16 L 1500 16 M 1584 16 L 1584 100" />
    <circle cx="1560" cy="40" r="3.5" fill="#f59e0b" />

    <path d="M 16 450 L 70 504 M 16 485 L 35 504 M 16 504 L 100 504 M 16 504 L 16 420" />
    <circle cx="40" cy="480" r="3.5" fill="#38bdf8" />

    <path d="M 1584 450 L 1530 504 M 1584 485 L 1565 504 M 1584 504 L 1500 504 M 1584 504 L 1584 420" />
    <circle cx="1560" cy="480" r="3.5" fill="#f59e0b" />
  </g>

  <!-- LEFT HERO ARTWORK: The Majestic Chiaroscuro Eagle Emerging from the Black Void -->
  <g transform="translate(60, 45)">
    <!-- Concentric Stratospheric Radar Rings -->
    <circle cx="220" cy="220" r="190" fill="none" stroke="#0f172a" stroke-width="1.5" />
    <circle cx="220" cy="220" r="160" fill="none" stroke="#1e293b" stroke-width="1" stroke-dasharray="10 6" />
    <circle cx="220" cy="220" r="130" fill="none" stroke="#0ea5e9" stroke-width="0.8" opacity="0.4" />
    
    <!-- Rotating Radar Sweep Line -->
    <line x1="220" y1="220" x2="380" y2="220" stroke="#f59e0b" stroke-width="1" opacity="0.3" class="radar-arm" />

    <!-- Cardinal Coordinates -->
    <g font-family="'Courier New', monospace" font-size="9" font-weight="900" fill="#64748b" text-anchor="middle">
      <text x="220" y="24">360° STRATOSPHERE</text>
      <text x="420" y="224">ALT 35K</text>
      <text x="220" y="420">RADAR LOCK</text>
      <text x="20" y="224">AQUILA</text>
    </g>

    <!-- The Chiaroscuro Eagle Artwork -->
    ${getVectorEagleArt(95, 75, 1.25, true)}

    <!-- Tactical Seal Badge Under the Eagle -->
    <g transform="translate(100, 410)">
      <rect x="0" y="0" width="240" height="30" rx="3" fill="#050a12" stroke="#f59e0b" stroke-width="1.2" />
      <text x="120" y="20" text-anchor="middle" font-family="'Cinzel', serif" font-size="11" font-weight="900" fill="#fbbf24" letter-spacing="2">APEX RAPTOR // AQUILA-01</text>
    </g>
  </g>

  <!-- RIGHT HERO HIERARCHY: Title, Creed, Tactical Flight Badges -->
  <g transform="translate(560, 75)">
    <!-- Tactical Category Callsign Badge -->
    <g transform="translate(0, 20)">
      <rect x="0" y="0" width="410" height="28" rx="3" fill="#080e18" stroke="#f59e0b" stroke-width="1.2" />
      <circle cx="16" cy="14" r="4.5" fill="#f59e0b" class="eye-pulse" />
      <text x="34" y="19" font-family="'Courier New', monospace" font-size="11" font-weight="800" fill="#fbbf24" letter-spacing="2">AQUILA PRIME // SOVEREIGN OF THE STRATOSPHERE</text>
    </g>

    <!-- Identity Title: AVISH KUMAR -->
    <g transform="translate(0, 100)">
      <!-- Amber ambient back-glow -->
      <text x="0" y="0" font-family="'Cinzel', 'Trajan Pro', serif" font-size="64" font-weight="900" fill="#f59e0b" letter-spacing="6" opacity="0.3" filter="url(#eyeGlow)">AVISH KUMAR</text>
      <!-- Main Feather Silver Title -->
      <text x="0" y="0" font-family="'Cinzel', 'Trajan Pro', serif" font-size="64" font-weight="900" fill="url(#featherSilver)" letter-spacing="6">AVISH KUMAR</text>
    </g>

    <!-- Subtitle: ARCHITECT OF CODE & APEX RAPTOR -->
    <g transform="translate(4, 142)">
      <text x="0" y="0" font-family="'Cinzel', serif" font-size="20" font-weight="800" fill="url(#raptorAmber)" letter-spacing="3.5">THE APEX RAPTOR &#8226; SOVEREIGN ARCHITECT OF CODE</text>
    </g>

    <!-- Amber Talon Razor Line -->
    <g transform="translate(0, 165)">
      <line x1="0" y1="0" x2="960" y2="0" stroke="#162234" stroke-width="1.5" />
      <line x1="0" y1="0" x2="380" y2="0" stroke="#f59e0b" stroke-width="2.5" filter="url(#laserGlow)" />
      <polygon points="380,-6 388,0 380,6 372,0" fill="#fbbf24" />
      <line x1="388" y1="0" x2="620" y2="0" stroke="#ffffff" stroke-width="1.8" />
    </g>

    <!-- The Raptor's Creed Monologue -->
    <g transform="translate(2, 206)">
      <text x="0" y="0" font-family="'Georgia', serif" font-style="italic" font-size="15.5" fill="#f8fafc" letter-spacing="1">"From the obsidian void we rise. With piercing vision we strike. Zero blind spots. Absolute precision."</text>
      <text x="0" y="26" font-family="'Georgia', serif" font-style="italic" font-size="15" fill="#94a3b8" letter-spacing="0.8">Mastering low-level OS kernels, resilient web fortresses, and cognitive AI telemetry.</text>
    </g>

    <!-- 4 Tactical Flight HUD Badges -->
    <g transform="translate(0, 270)">
      <!-- Badge 1: Stratospheric Vision -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="220" height="62" rx="4" fill="#040810" stroke="#1e293b" stroke-width="1.2" />
        <rect x="0" y="0" width="4" height="62" fill="#f59e0b" />
        <text x="16" y="22" font-family="'Courier New', monospace" font-size="10" font-weight="800" fill="#fbbf24" letter-spacing="1">👁️ MACRO VISION</text>
        <text x="16" y="45" font-family="'Cinzel', serif" font-size="14.5" font-weight="800" fill="#f8fafc">360° TOPOLOGY</text>
      </g>

      <!-- Badge 2: Talon Dive Strike -->
      <g transform="translate(240, 0)">
        <rect x="0" y="0" width="220" height="62" rx="4" fill="#040810" stroke="#1e293b" stroke-width="1.2" />
        <rect x="0" y="0" width="4" height="62" fill="#ffffff" />
        <text x="16" y="22" font-family="'Courier New', monospace" font-size="10" font-weight="800" fill="#e2e8f0" letter-spacing="1">⚡ DIVE STRIKE</text>
        <text x="16" y="45" font-family="'Cinzel', serif" font-size="14.5" font-weight="800" fill="#f8fafc">SUB-MS LATENCY</text>
      </g>

      <!-- Badge 3: Flight Ceiling -->
      <g transform="translate(480, 0)">
        <rect x="0" y="0" width="220" height="62" rx="4" fill="#040810" stroke="#1e293b" stroke-width="1.2" />
        <rect x="0" y="0" width="4" height="62" fill="#38bdf8" />
        <text x="16" y="22" font-family="'Courier New', monospace" font-size="10" font-weight="800" fill="#7dd3fc" letter-spacing="1">🛰️ FLIGHT CEILING</text>
        <text x="16" y="45" font-family="'Cinzel', serif" font-size="14.5" font-weight="800" fill="#f8fafc">STRATOSPHERE</text>
      </g>

      <!-- Badge 4: Predator Rank -->
      <g transform="translate(720, 0)">
        <rect x="0" y="0" width="230" height="62" rx="4" fill="#040810" stroke="#1e293b" stroke-width="1.2" />
        <rect x="0" y="0" width="4" height="62" fill="#10b981" />
        <text x="16" y="22" font-family="'Courier New', monospace" font-size="10" font-weight="800" fill="#34d399" letter-spacing="1">⚔️ COMBAT STATUS</text>
        <text x="16" y="45" font-family="'Cinzel', serif" font-size="14.5" font-weight="800" fill="#fbbf24">APEX RAPTOR S+</text>
      </g>
    </g>

    <!-- Flight Telemetry Pin Link -->
    <g transform="translate(0, 360)">
      <rect x="0" y="0" width="340" height="32" rx="3" fill="#060c16" stroke="#f59e0b" stroke-width="1" />
      <text x="16" y="21" font-family="'Courier New', monospace" font-size="12" font-weight="800" fill="#fbbf24">&gt; GITHUB.COM/AVISH2142005</text>
      <circle cx="320" cy="16" r="4.5" fill="#10b981" />
    </g>
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 2. STATUS BADGES: got-status-badges.svg (and samurai-status-badges.svg)
// -------------------------------------------------------------
function getStatusBadgesSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 36" fill="none">
  <defs>
    <linearGradient id="amberPill" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#b45309" />
      <stop offset="100%" stop-color="#f59e0b" />
    </linearGradient>
    <linearGradient id="silverPill" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#475569" />
      <stop offset="100%" stop-color="#cbd5e1" />
    </linearGradient>
    <linearGradient id="skyPill" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0369a1" />
      <stop offset="100%" stop-color="#38bdf8" />
    </linearGradient>
    <linearGradient id="emeraldPill" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#047857" />
      <stop offset="100%" stop-color="#10b981" />
    </linearGradient>
  </defs>

  <g transform="translate(6, 2)" font-family="'Cinzel', Consolas, monospace" font-size="10.5" font-weight="900" letter-spacing="1">
    <!-- 01: IDENTITY -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="76" height="32" rx="3" fill="#04060a" stroke="#1e293b" stroke-width="1" />
      <text x="38" y="20" text-anchor="middle" fill="#94a3b8" font-size="9.5">ARCHITECT</text>
      <rect x="79" y="0" width="115" height="32" rx="3" fill="url(#amberPill)" />
      <text x="136" y="20" text-anchor="middle" fill="#040711">AVISH KUMAR</text>
    </g>

    <!-- 02: PREDATOR SPECIES -->
    <g transform="translate(206, 0)">
      <rect x="0" y="0" width="62" height="32" rx="3" fill="#04060a" stroke="#1e293b" stroke-width="1" />
      <text x="31" y="20" text-anchor="middle" fill="#94a3b8" font-size="9.5">🦅 CLASS</text>
      <rect x="65" y="0" width="102" height="32" rx="3" fill="url(#amberPill)" />
      <text x="116" y="20" text-anchor="middle" fill="#03060f">APEX RAPTOR</text>
    </g>

    <!-- 03: MACRO RADAR -->
    <g transform="translate(385, 0)">
      <rect x="0" y="0" width="62" height="32" rx="3" fill="#04060a" stroke="#1e293b" stroke-width="1" />
      <text x="31" y="20" text-anchor="middle" fill="#94a3b8" font-size="9.5">👁️ VISION</text>
      <rect x="65" y="0" width="102" height="32" rx="3" fill="url(#silverPill)" />
      <text x="116" y="20" text-anchor="middle" fill="#03060f">360° RADAR</text>
    </g>

    <!-- 04: TALON VELOCITY -->
    <g transform="translate(564, 0)">
      <rect x="0" y="0" width="62" height="32" rx="3" fill="#04060a" stroke="#1e293b" stroke-width="1" />
      <text x="31" y="20" text-anchor="middle" fill="#94a3b8" font-size="9.5">⚡ TALON</text>
      <rect x="65" y="0" width="98" height="32" rx="3" fill="url(#skyPill)" />
      <text x="114" y="20" text-anchor="middle" fill="#040711">SUB-MS</text>
    </g>

    <!-- 05: RANK -->
    <g transform="translate(735, 0)">
      <rect x="0" y="0" width="68" height="32" rx="3" fill="#04060a" stroke="#1e293b" stroke-width="1" />
      <text x="34" y="20" text-anchor="middle" fill="#94a3b8" font-size="9.5">RANK</text>
      <rect x="71" y="0" width="100" height="32" rx="3" fill="url(#emeraldPill)" />
      <text x="121" y="20" text-anchor="middle" fill="#03060f">APEX S+</text>
    </g>
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 3. SECTION HEADERS: Generic Generator in Obsidian & Amber
// -------------------------------------------------------------
function getGotSectionHeaderSvg(num, title, subtitle) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 86" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="apexHdrBg_${num}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#000000" />
      <stop offset="50%" stop-color="#080e18" />
      <stop offset="100%" stop-color="#000000" />
    </linearGradient>
    <filter id="hdrLaser_${num}" x="-10%" y="-10%" width="120%" height="120%">
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

  <!-- Background Obsidian Slab -->
  <rect width="920" height="86" rx="4" fill="url(#apexHdrBg_${num})" />
  <rect width="920" height="86" rx="4" fill="none" stroke="#162232" stroke-width="1.2" />
  <rect width="920" height="86" rx="4" fill="none" stroke="#f59e0b" stroke-width="2" class="laser-edge_${num}" filter="url(#hdrLaser_${num})" />

  <!-- Section Number Badge -->
  <g transform="translate(20, 20)">
    <rect x="0" y="0" width="70" height="46" rx="3" fill="#090f1a" stroke="#f59e0b" stroke-width="1.5" />
    <path d="M 0 0 L 10 0 L 0 10 Z" fill="#f59e0b" />
    <text x="35" y="30" text-anchor="middle" font-family="'Cinzel', monospace" font-size="20" font-weight="900" fill="#fbbf24">${num}</text>
  </g>

  <!-- Main Title & Hierarchy -->
  <g transform="translate(108, 32)">
    <text x="0" y="0" font-family="'Cinzel', serif" font-size="20" font-weight="900" fill="#f8fafc" letter-spacing="2.5">${title}</text>
    <text x="0" y="24" font-family="'Courier New', monospace" font-size="11.5" font-weight="700" fill="#fbbf24" letter-spacing="1.5">${subtitle}</text>
  </g>

  <!-- Eagle Eye Glyphic Embellishment (Right) -->
  <g transform="translate(850, 43)">
    <circle cx="0" cy="0" r="22" fill="#070c14" stroke="#f59e0b" stroke-width="1.5" />
    <ellipse cx="0" cy="0" rx="12" ry="7" fill="#d97706" />
    <circle cx="0" cy="0" r="3.5" fill="#000000" />
    <circle cx="-2" cy="-2" r="1.2" fill="#ffffff" />
  </g>

  <!-- Talon Underline -->
  <line x1="108" y1="68" x2="800" y2="68" stroke="#162232" stroke-width="1" />
  <line x1="108" y1="68" x2="320" y2="68" stroke="#f59e0b" stroke-width="1.5" />
</svg>`;
}

// -------------------------------------------------------------
// 4. OPERATIVE DOSSIER: got-operative-dossier.svg (and operative-dossier-v2.svg)
// -------------------------------------------------------------
function getOperativeDossierSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 490" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="apexDosBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#000000" />
      <stop offset="50%" stop-color="#060b14" />
      <stop offset="100%" stop-color="#020408" />
    </linearGradient>
    <radialGradient id="dosAmberGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>
    <filter id="dosLaserFilter" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3.5" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <rect width="920" height="490" rx="6" fill="url(#apexDosBg)" />
  <rect width="920" height="490" rx="6" fill="none" stroke="#182232" stroke-width="1.5" />
  <rect width="910" height="480" x="5" y="5" rx="4" fill="none" stroke="#0a0f18" stroke-width="1" />

  <!-- Tactical Corner Brackets -->
  <g stroke="#f59e0b" stroke-width="2" fill="none">
    <path d="M 5 35 L 5 5 L 35 5" />
    <path d="M 915 35 L 915 5 L 885 5" />
    <path d="M 5 455 L 5 485 L 35 485" />
    <path d="M 915 455 L 915 485 L 885 485" />
  </g>

  <!-- Left Column: Dossier Intel Text -->
  <g transform="translate(36, 45)">
    <!-- Header Stamp -->
    <rect x="0" y="0" width="380" height="28" rx="3" fill="#080e18" stroke="#f59e0b" stroke-width="1" />
    <text x="14" y="19" font-family="'Courier New', monospace" font-size="11" font-weight="900" fill="#fbbf24" letter-spacing="2">AERO-DOSSIER // APEX RAPTOR COMMAND</text>

    <!-- Name & Titles -->
    <text x="0" y="65" font-family="'Cinzel', 'Palatino', serif" font-size="28" font-weight="900" fill="#f8fafc" letter-spacing="2">AVISH KUMAR</text>
    <text x="0" y="92" font-family="'Cinzel', serif" font-size="13" font-weight="700" fill="#fbbf24" letter-spacing="1.5">SOVEREIGN OF THE CODE STRATOSPHERE // S+ MASTER</text>

    <!-- Key-Value Fields -->
    <g transform="translate(0, 125)" font-family="'Courier New', monospace" font-size="12">
      <text x="0" y="0" fill="#64748b" font-weight="800">CALLSIGN:</text>
      <text x="140" y="0" fill="#fbbf24" font-weight="800">AQUILA-01 [The Apex Raptor]</text>

      <text x="0" y="28" fill="#64748b" font-weight="800">OPERATIONAL FLIGHT:</text>
      <text x="140" y="28" fill="#f8fafc" font-weight="800">35,000 FT (Stratospheric Altitude)</text>

      <text x="0" y="56" fill="#64748b" font-weight="800">MACRO VISION:</text>
      <text x="140" y="56" fill="#38bdf8" font-weight="800">360° System Topologies &amp; Zero Blind Spots</text>

      <text x="0" y="84" fill="#64748b" font-weight="800">TALON ARSENAL:</text>
      <text x="140" y="84" fill="#f8fafc" font-weight="800">AquaOS (Kernel) &#8226; Nutri-ai (AI) &#8226; Markdown</text>

      <text x="0" y="112" fill="#64748b" font-weight="800">EXECUTION SPEED:</text>
      <text x="140" y="112" fill="#fbbf24" font-weight="800">Sub-Millisecond Terminal Dive Strike</text>

      <text x="0" y="140" fill="#64748b" font-weight="800">ACTIVE MISSIONS:</text>
      <text x="140" y="140" fill="#10b981" font-weight="800">2026 Stratospheric Campaigns // Continuous</text>
    </g>

    <!-- The Raptor Creed Box -->
    <g transform="translate(0, 310)">
      <rect x="0" y="0" width="530" height="95" rx="4" fill="#060c16" stroke="#1e2c40" stroke-width="1.2" />
      <rect x="0" y="0" width="4" height="95" fill="#f59e0b" />
      <text x="18" y="24" font-family="'Cinzel', serif" font-size="12" font-weight="900" fill="#fbbf24" letter-spacing="1">THE RAPTOR'S CODE CREED:</text>
      <text x="18" y="48" font-family="'Georgia', serif" font-style="italic" font-size="13" fill="#cbd5e1">"From the obsidian void we rise. With piercing vision we strike.</text>
      <text x="18" y="68" font-family="'Georgia', serif" font-style="italic" font-size="13" fill="#cbd5e1">Seeing the whole sky before diving at terminal velocity."</text>
      <text x="18" y="86" font-family="'Courier New', monospace" font-size="10.5" font-weight="700" fill="#f59e0b">&gt; CODE PURITY: GRADE S+ ZERO TECHNICAL DEBT.</text>
    </g>
  </g>

  <!-- Right Column: Vector Eagle Heraldic Crest -->
  <g transform="translate(745, 225)">
    <circle cx="0" cy="0" r="120" fill="url(#dosAmberGlow)" />
    <circle cx="0" cy="0" r="100" fill="none" stroke="#1e293b" stroke-width="1.5" />
    <circle cx="0" cy="0" r="92" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="16 8" />
    <circle cx="0" cy="0" r="84" fill="#020408" stroke="#f59e0b" stroke-width="2" filter="url(#dosLaserFilter)" />

    <!-- Centered Vector Eagle Artwork -->
    ${getVectorEagleArt(-75, -95, 0.72, false)}

    <!-- Seal Tag Under Vector Crest -->
    <rect x="-95" y="125" width="190" height="28" rx="3" fill="#080e18" stroke="#f59e0b" stroke-width="1.2" />
    <text x="0" y="144" text-anchor="middle" font-family="'Cinzel', serif" font-size="11" font-weight="900" fill="#f8fafc" letter-spacing="1.5">AQUILA PRIME // S+</text>
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 5. DEVELOPER RANK / CAPABILITY RADAR: got-developer-rank.svg (and developer-rank.svg)
// -------------------------------------------------------------
function getDeveloperRankSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 460" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="apexRankBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#000000" />
      <stop offset="50%" stop-color="#060c18" />
      <stop offset="100%" stop-color="#020408" />
    </linearGradient>
    <radialGradient id="rankAmberGlow" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>
    <filter id="rankGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3.5" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <rect width="920" height="460" rx="6" fill="url(#apexRankBg)" />
  <rect width="920" height="460" rx="6" fill="none" stroke="#162234" stroke-width="1.5" />

  <!-- Left Side: Hexagonal Stratospheric Combat Radar -->
  <g transform="translate(250, 230)">
    <circle cx="0" cy="0" r="160" fill="url(#rankAmberGlow)" />

    <!-- Concentric Hexagons (20%, 40%, 60%, 80%, 100%) -->
    <polygon points="0,-30 26,-15 26,15 0,30 -26,15 -26,-15" fill="none" stroke="#162232" stroke-width="1" />
    <polygon points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30" fill="none" stroke="#162232" stroke-width="1" />
    <polygon points="0,-90 78,-45 78,45 0,90 -78,45 -78,-45" fill="none" stroke="#1e2c40" stroke-width="1" />
    <polygon points="0,-120 104,-60 104,60 0,120 -104,60 -104,-60" fill="none" stroke="#2a3c56" stroke-width="1" />
    <polygon points="0,-150 130,-75 130,75 0,150 -130,75 -130,-75" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="6 4" />

    <!-- Spoke Lines -->
    <line x1="0" y1="0" x2="0" y2="-150" stroke="#25354c" stroke-width="1" />
    <line x1="0" y1="0" x2="130" y2="-75" stroke="#25354c" stroke-width="1" />
    <line x1="0" y1="0" x2="130" y2="75" stroke="#25354c" stroke-width="1" />
    <line x1="0" y1="0" x2="0" y2="150" stroke="#25354c" stroke-width="1" />
    <line x1="0" y1="0" x2="-130" y2="75" stroke="#25354c" stroke-width="1" />
    <line x1="0" y1="0" x2="-130" y2="-75" stroke="#25354c" stroke-width="1" />

    <!-- Avish Kumar's Actual Raptor Radar Combat Polygon -->
    <!-- Axes: Macro Architecture=98%(-147), OS Kernels=96%(125,-72), AI Cognition=95%(123,71), Algorithms=96%(0,144), Full-Stack=97%(-126,73), Low-Latency=95%(-124,-71) -->
    <polygon points="0,-147 125,-72 123,71 0,144 -126,73 -124,-71" fill="#f59e0b" fill-opacity="0.3" stroke="#fbbf24" stroke-width="2.5" filter="url(#rankGlowFilter)" />

    <!-- Vertices Dots -->
    <circle cx="0" cy="-147" r="4.5" fill="#f59e0b" />
    <circle cx="125" cy="-72" r="4.5" fill="#ffffff" />
    <circle cx="123" cy="71" r="4.5" fill="#38bdf8" />
    <circle cx="0" cy="144" r="4.5" fill="#f8fafc" />
    <circle cx="-126" cy="73" r="4.5" fill="#fbbf24" />
    <circle cx="-124" cy="-71" r="4.5" fill="#10b981" />

    <!-- Node Labels -->
    <text x="0" y="-168" text-anchor="middle" font-family="'Cinzel', serif" font-size="11.5" font-weight="900" fill="#fbbf24">MACRO ARCHITECTURE [98%]</text>
    <text x="145" y="-72" font-family="'Cinzel', serif" font-size="11.5" font-weight="900" fill="#ffffff">OS KERNELS [96%]</text>
    <text x="145" y="82" font-family="'Cinzel', serif" font-size="11.5" font-weight="900" fill="#38bdf8">AI COGNITION [95%]</text>
    <text x="0" y="172" text-anchor="middle" font-family="'Cinzel', serif" font-size="11.5" font-weight="900" fill="#f8fafc">ALGORITHMIC LETHALITY [96%]</text>
    <text x="-145" y="82" text-anchor="end" font-family="'Cinzel', serif" font-size="11.5" font-weight="900" fill="#fbbf24">REACTIVE FORTRESSES [97%]</text>
    <text x="-145" y="-72" text-anchor="end" font-family="'Cinzel', serif" font-size="11.5" font-weight="900" fill="#10b981">LOW-LATENCY TALON [95%]</text>
  </g>

  <!-- Right Side: Tactical Mastery Matrix & Breakdown -->
  <g transform="translate(500, 48)">
    <rect x="0" y="0" width="380" height="30" rx="3" fill="#080e18" stroke="#f59e0b" stroke-width="1.2" />
    <text x="16" y="20" font-family="'Cinzel', serif" font-size="13" font-weight="900" fill="#fbbf24" letter-spacing="2">APEX RAPTOR MASTERY: S+ GRADE</text>

    <!-- Capability Bars -->
    <g transform="translate(0, 55)" font-family="'Courier New', monospace" font-size="11.5" font-weight="800">
      <!-- 01: Macro Architecture -->
      <g transform="translate(0, 0)">
        <text x="0" y="16" fill="#f8fafc">01 // 👁️ 30,000-FT MACRO ARCHITECTURE</text>
        <text x="340" y="16" fill="#fbbf24">98%</text>
        <rect x="0" y="24" width="380" height="8" rx="2" fill="#0c1420" />
        <rect x="0" y="24" width="372" height="8" rx="2" fill="#f59e0b" />
      </g>
      <!-- 02: OS Kernels -->
      <g transform="translate(0, 52)">
        <text x="0" y="16" fill="#f8fafc">02 // ⚡ LOW-LEVEL KERNELS (AquaOS)</text>
        <text x="340" y="16" fill="#ffffff">96%</text>
        <rect x="0" y="24" width="380" height="8" rx="2" fill="#0c1420" />
        <rect x="0" y="24" width="365" height="8" rx="2" fill="#ffffff" />
      </g>
      <!-- 03: Full-Stack Fortresses -->
      <g transform="translate(0, 104)">
        <text x="0" y="16" fill="#f8fafc">03 // 🏰 REACTIVE FORTRESSES (Markdown)</text>
        <text x="340" y="16" fill="#fbbf24">97%</text>
        <rect x="0" y="24" width="380" height="8" rx="2" fill="#0c1420" />
        <rect x="0" y="24" width="368" height="8" rx="2" fill="#d97706" />
      </g>
      <!-- 04: AI Cognition -->
      <g transform="translate(0, 156)">
        <text x="0" y="16" fill="#f8fafc">04 // 🧠 COGNITIVE AI TELEMETRY (Nutri-ai)</text>
        <text x="340" y="16" fill="#38bdf8">95%</text>
        <rect x="0" y="24" width="380" height="8" rx="2" fill="#0c1420" />
        <rect x="0" y="24" width="361" height="8" rx="2" fill="#0ea5e9" />
      </g>
      <!-- 05: Microservices & APIs -->
      <g transform="translate(0, 208)">
        <text x="0" y="16" fill="#f8fafc">05 // 🛰️ SUB-MS APIS (first-flaskapp)</text>
        <text x="340" y="16" fill="#10b981">94%</text>
        <rect x="0" y="24" width="380" height="8" rx="2" fill="#0c1420" />
        <rect x="0" y="24" width="357" height="8" rx="2" fill="#10b981" />
      </g>
      <!-- 06: Data Structures -->
      <g transform="translate(0, 260)">
        <text x="0" y="16" fill="#f8fafc">06 // 💎 ALGORITHMIC PROBLEM SOLVING</text>
        <text x="340" y="16" fill="#f8fafc">96%</text>
        <rect x="0" y="24" width="380" height="8" rx="2" fill="#0c1420" />
        <rect x="0" y="24" width="365" height="8" rx="2" fill="#e2e8f0" />
      </g>
    </g>
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 6. TALON BLADE DIVIDER: valyrian-divider.svg
// -------------------------------------------------------------
function getValyrianDividerSvg(reverse) {
  const startColor = reverse ? "#ffffff" : "#f59e0b";
  const endColor = reverse ? "#f59e0b" : "#ffffff";

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 32" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="apexDiv_${reverse ? 'rev' : 'fwd'}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#000000" />
      <stop offset="25%" stop-color="${startColor}" />
      <stop offset="50%" stop-color="#fbbf24" />
      <stop offset="75%" stop-color="${endColor}" />
      <stop offset="100%" stop-color="#000000" />
    </linearGradient>
  </defs>
  <rect width="920" height="32" fill="none" />
  <line x1="20" y1="16" x2="900" y2="16" stroke="url(#apexDiv_${reverse ? 'rev' : 'fwd'})" stroke-width="1.8" />
  
  <!-- Central Eagle Eye Talon Gem -->
  <g transform="translate(460, 16)">
    <polygon points="0,-8 8,0 0,8 -8,0" fill="#ffffff" />
    <circle cx="-16" cy="0" r="3" fill="#f59e0b" />
    <circle cx="0" cy="0" r="2.5" fill="#fbbf24" />
    <circle cx="16" cy="0" r="3" fill="#f59e0b" />
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 7. STRATOSPHERIC TELEMETRY GRID: got-telemetry-grid.svg
// -------------------------------------------------------------
function getTelemetryGridSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 380" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="apexTelBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#000000" />
      <stop offset="100%" stop-color="#060c18" />
    </linearGradient>
  </defs>

  <rect width="920" height="380" rx="6" fill="url(#apexTelBg)" />
  <rect width="920" height="380" rx="6" fill="none" stroke="#162234" stroke-width="1.5" />

  <!-- Top Banner -->
  <g transform="translate(24, 20)">
    <rect x="0" y="0" width="872" height="42" rx="4" fill="#080e18" stroke="#f59e0b" stroke-width="1.2" />
    <circle cx="24" cy="21" r="5" fill="#f59e0b" />
    <text x="42" y="26" font-family="'Cinzel', serif" font-size="14" font-weight="900" fill="#f8fafc" letter-spacing="2">AERO-TELEMETRY RADAR &#8226; AVISH KUMAR (@AVISH2142005)</text>
    <text x="840" y="26" text-anchor="end" font-family="'Courier New', monospace" font-size="12" font-weight="800" fill="#10b981">LIVE // STRATOSPHERE SCAN</text>
  </g>

  <!-- 3 Big Metric Columns (Vision, Velocity, Dominion) -->
  <g transform="translate(24, 80)">
    <!-- Column 1: MACRO VISION -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="276" height="260" rx="4" fill="#04070e" stroke="#1e2c40" stroke-width="1.2" />
      <rect x="0" y="0" width="276" height="34" rx="4" fill="#0b1320" />
      <text x="18" y="22" font-family="'Cinzel', serif" font-size="12" font-weight="900" fill="#fbbf24" letter-spacing="1">👁️ AERIAL MACRO-VISION</text>

      <g transform="translate(20, 60)" font-family="'Courier New', monospace">
        <text x="0" y="0" font-size="11" fill="#94a3b8">PERSPECTIVE</text>
        <text x="0" y="28" font-family="'Cinzel', serif" font-size="20" font-weight="900" fill="#f8fafc">30,000-FT SCAN</text>
        
        <text x="0" y="65" font-size="11" fill="#94a3b8">CHARACTER TRAITS</text>
        <text x="0" y="85" font-size="12" font-weight="800" fill="#fbbf24">&#8226; Whole-System Topologies</text>
        <text x="0" y="105" font-size="12" font-weight="800" fill="#fde047">&#8226; Zero Architectural Blind Spots</text>
        <text x="0" y="125" font-size="12" font-weight="800" fill="#fbbf24">&#8226; Predictive Bottleneck Defense</text>
        <text x="0" y="145" font-size="12" font-weight="800" fill="#fde047">&#8226; Clean Layer Separation</text>

        <rect x="0" y="165" width="236" height="24" rx="2" fill="#08101a" stroke="#f59e0b" stroke-width="0.8" />
        <text x="118" y="181" text-anchor="middle" font-size="10" font-weight="800" fill="#fbbf24">&gt; 360° MACRO ACCURACY</text>
      </g>
    </g>

    <!-- Column 2: DIVE STRIKE -->
    <g transform="translate(298, 0)">
      <rect x="0" y="0" width="276" height="260" rx="4" fill="#04070e" stroke="#1e2c40" stroke-width="1.2" />
      <rect x="0" y="0" width="276" height="34" rx="4" fill="#0b1320" />
      <text x="18" y="22" font-family="'Cinzel', serif" font-size="12" font-weight="900" fill="#ffffff" letter-spacing="1">⚡ TERMINAL DIVE STRIKE</text>

      <g transform="translate(20, 60)" font-family="'Courier New', monospace">
        <text x="0" y="0" font-size="11" fill="#94a3b8">EXECUTION SPEED</text>
        <text x="0" y="28" font-family="'Cinzel', serif" font-size="20" font-weight="900" fill="#f8fafc">SUB-MILLISECOND</text>
        
        <text x="0" y="65" font-size="11" fill="#94a3b8">CHARACTER TRAITS</text>
        <text x="0" y="85" font-size="12" font-weight="800" fill="#e2e8f0">&#8226; AquaOS Modular Kernel</text>
        <text x="0" y="105" font-size="12" font-weight="800" fill="#ffffff">&#8226; POSIX Process Isolation</text>
        <text x="0" y="125" font-size="12" font-weight="800" fill="#e2e8f0">&#8226; Zero Memory Leaks</text>
        <text x="0" y="145" font-size="12" font-weight="800" fill="#ffffff">&#8226; Low-Level Concurrency</text>

        <rect x="0" y="165" width="236" height="24" rx="2" fill="#08101a" stroke="#ffffff" stroke-width="0.8" />
        <text x="118" y="181" text-anchor="middle" font-size="10" font-weight="800" fill="#ffffff">&gt; ZERO LATENCY TOLL</text>
      </g>
    </g>

    <!-- Column 3: SOVEREIGN DOMINION -->
    <g transform="translate(596, 0)">
      <rect x="0" y="0" width="276" height="260" rx="4" fill="#04070e" stroke="#1e2c40" stroke-width="1.2" />
      <rect x="0" y="0" width="276" height="34" rx="4" fill="#0b1320" />
      <text x="18" y="22" font-family="'Cinzel', serif" font-size="12" font-weight="900" fill="#38bdf8" letter-spacing="1">🏰 SOVEREIGN DOMINION</text>

      <g transform="translate(20, 60)" font-family="'Courier New', monospace">
        <text x="0" y="0" font-size="11" fill="#94a3b8">PRODUCTION SUITE</text>
        <text x="0" y="28" font-family="'Cinzel', serif" font-size="20" font-weight="900" fill="#f8fafc">FULL-STACK &amp; AI</text>

        <text x="0" y="65" font-size="11" fill="#94a3b8">CHARACTER TRAITS</text>
        <text x="0" y="85" font-size="12" font-weight="800" fill="#7dd3fc">&#8226; Nutri-ai Cognitive Models</text>
        <text x="0" y="105" font-size="12" font-weight="800" fill="#38bdf8">&#8226; Live Markdown AST Engine</text>
        <text x="0" y="125" font-size="12" font-weight="800" fill="#7dd3fc">&#8226; High-Frequency REST APIs</text>
        <text x="0" y="145" font-size="12" font-weight="800" fill="#38bdf8">&#8226; Scalable Cloud Fortresses</text>

        <rect x="0" y="165" width="236" height="24" rx="2" fill="#08101a" stroke="#38bdf8" stroke-width="0.8" />
        <text x="118" y="181" text-anchor="middle" font-size="10" font-weight="800" fill="#38bdf8">&gt; UNBROKEN WATCH</text>
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
    <linearGradient id="apexTrophyBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#000000" />
      <stop offset="100%" stop-color="#060c18" />
    </linearGradient>
  </defs>

  <rect width="920" height="220" rx="6" fill="url(#apexTrophyBg)" />
  <rect width="920" height="220" rx="6" fill="none" stroke="#162234" stroke-width="1.5" />

  <g transform="translate(24, 25)">
    <!-- Card 1: AquaOS -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="200" height="170" rx="4" fill="#04070e" stroke="#1e2c40" stroke-width="1.2" />
      <text x="100" y="38" text-anchor="middle" font-size="26">⚡</text>
      <text x="100" y="78" text-anchor="middle" font-family="'Cinzel', serif" font-size="28" font-weight="900" fill="#f8fafc">AquaOS</text>
      <text x="100" y="104" text-anchor="middle" font-family="'Cinzel', serif" font-size="11" font-weight="900" fill="#fbbf24">KERNEL RAPTOR</text>
      <text x="100" y="125" text-anchor="middle" font-family="'Courier New', monospace" font-size="10" fill="#94a3b8">POSIX PROCESS CORE</text>
      <line x1="20" y1="142" x2="180" y2="142" stroke="#162234" />
      <text x="100" y="156" text-anchor="middle" font-family="'Courier New', monospace" font-size="9" font-weight="700" fill="#10b981">UNBROKEN KERNEL</text>
    </g>

    <!-- Card 2: Live Markdown -->
    <g transform="translate(224, 0)">
      <rect x="0" y="0" width="200" height="170" rx="4" fill="#04070e" stroke="#1e2c40" stroke-width="1.2" />
      <text x="100" y="38" text-anchor="middle" font-size="26">📜</text>
      <text x="100" y="78" text-anchor="middle" font-family="'Cinzel', serif" font-size="28" font-weight="900" fill="#f8fafc">Markdown</text>
      <text x="100" y="104" text-anchor="middle" font-family="'Cinzel', serif" font-size="11" font-weight="900" fill="#ffffff">AST COMPILER</text>
      <text x="100" y="125" text-anchor="middle" font-family="'Courier New', monospace" font-size="10" fill="#94a3b8">REACTIVE PARSER</text>
      <line x1="20" y1="142" x2="180" y2="142" stroke="#162234" />
      <text x="100" y="156" text-anchor="middle" font-family="'Courier New', monospace" font-size="9" font-weight="700" fill="#fbbf24">SUB-MS AST PARSING</text>
    </g>

    <!-- Card 3: Nutri-ai -->
    <g transform="translate(448, 0)">
      <rect x="0" y="0" width="200" height="170" rx="4" fill="#04070e" stroke="#1e2c40" stroke-width="1.2" />
      <text x="100" y="38" text-anchor="middle" font-size="26">🧠</text>
      <text x="100" y="78" text-anchor="middle" font-family="'Cinzel', serif" font-size="28" font-weight="900" fill="#f8fafc">Nutri-ai</text>
      <text x="100" y="104" text-anchor="middle" font-family="'Cinzel', serif" font-size="11" font-weight="900" fill="#38bdf8">COGNITIVE AI</text>
      <text x="100" y="125" text-anchor="middle" font-family="'Courier New', monospace" font-size="10" fill="#94a3b8">DIAGNOSTIC ORACLE</text>
      <line x1="20" y1="142" x2="180" y2="142" stroke="#162234" />
      <text x="100" y="156" text-anchor="middle" font-family="'Courier New', monospace" font-size="9" font-weight="700" fill="#0ea5e9">INTELLIGENT MODELS</text>
    </g>

    <!-- Card 4: Apex S+ Master -->
    <g transform="translate(672, 0)">
      <rect x="0" y="0" width="200" height="170" rx="4" fill="#04070e" stroke="#1e2c40" stroke-width="1.2" />
      <text x="100" y="38" text-anchor="middle" font-size="26">🦅</text>
      <text x="100" y="78" text-anchor="middle" font-family="'Cinzel', serif" font-size="28" font-weight="900" fill="#f8fafc">Grade S+</text>
      <text x="100" y="104" text-anchor="middle" font-family="'Cinzel', serif" font-size="11" font-weight="900" fill="#10b981">APEX MASTER</text>
      <text x="100" y="125" text-anchor="middle" font-family="'Courier New', monospace" font-size="10" fill="#94a3b8">AVISH KUMAR</text>
      <line x1="20" y1="142" x2="180" y2="142" stroke="#162234" />
      <text x="100" y="156" text-anchor="middle" font-family="'Courier New', monospace" font-size="9" font-weight="700" fill="#10b981">ZERO TECHNICAL DEBT</text>
    </g>
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 9. SLAIN TECHNICAL BEASTS ROSTER: got-battle-roster.svg & shadow-fight-roster.svg
// -------------------------------------------------------------
function getBattleRosterSvg() {
  const bosses = [
    { name: "MEMORY LEAK KRAKEN", foe: "UNCHECKED HEAP ALLOCATIONS", power: "VOLATILE RAM CONSUMPTION", defeated: "🦅 HUNTED BY AQUAOS MEMORY ENGINE" },
    { name: "RACE CONDITION HYDRA", foe: "ASYNC THREAD DEADLOCKS", power: "THREAD DESYNCHRONIZATION", defeated: "⚡ SHATTERED WITH POSIX ISOLATION" },
    { name: "SPAGHETTI AST BEHEMOTH", foe: "UNSTRUCTURED FRONTEND STATE", power: "UNCONTROLLED UI REGRESSION", defeated: "🦅 ANCHORED BY REACT 19 & TYPESCRIPT" },
    { name: "DATABASE CONGESTION TITAN", foe: "UNINDEXED DISK BOTTLENECKS", power: "SLOW QUERY ESCALATIONS", defeated: "⚡ FORTIFIED WITH OPTIMIZED POSTGRES" },
    { name: "AI COGNITIVE DRIFT CHAOS", foe: "MODEL ACCURACY DEGRADATION", power: "DRIFTING DATA DISTRIBUTIONS", defeated: "🦅 PINPOINTED BY NUTRI-AI TELEMETRY" },
    { name: "SERVER CRASH WILDFIRE", foe: "UNHANDLED EXCEPTION CASCADES", power: "OUTAGE SERVICE STORMS", defeated: "⚡ SUB-MS CI/CD FAILSAFE PIPELINES" }
  ];

  let cardsXml = "";
  bosses.forEach((b, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = col * 292;
    const y = row * 135;

    cardsXml += `
    <g transform="translate(${x}, ${y})">
      <rect x="0" y="0" width="280" height="122" rx="4" fill="#04070e" stroke="#1e2c40" stroke-width="1.2" />
      <rect x="0" y="0" width="280" height="26" rx="4" fill="#0b1320" />
      <text x="14" y="17" font-family="'Cinzel', serif" font-size="11" font-weight="900" fill="#fbbf24" letter-spacing="1">PREY ${i + 1} &#8226; ${b.name}</text>
      
      <g transform="translate(14, 46)" font-family="'Courier New', monospace" font-size="10.5">
        <text x="0" y="0" fill="#94a3b8">FOE: <tspan fill="#f8fafc" font-weight="800">${b.foe}</tspan></text>
        <text x="0" y="20" fill="#64748b">THREAT: ${b.power}</text>
        <rect x="0" y="32" width="252" height="24" rx="2" fill="#08101a" stroke="#10b981" stroke-width="0.8" />
        <text x="126" y="48" text-anchor="middle" font-size="9.5" font-weight="800" fill="#10b981">&gt; ${b.defeated}</text>
      </g>
    </g>`;
  });

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 330" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="apexRosterBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#000000" />
      <stop offset="100%" stop-color="#060c18" />
    </linearGradient>
  </defs>

  <rect width="920" height="330" rx="6" fill="url(#apexRosterBg)" />
  <rect width="920" height="330" rx="6" fill="none" stroke="#162234" stroke-width="1.5" />

  <g transform="translate(24, 25)">
    ${cardsXml}
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 10. RAPTOR FLIGHT TERMINAL: got-terminal.svg & terminal-contact.svg
// -------------------------------------------------------------
function getGotTerminalSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 220" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="apexTermBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#000000" />
      <stop offset="100%" stop-color="#060c18" />
    </linearGradient>
  </defs>

  <rect width="920" height="220" rx="6" fill="url(#apexTermBg)" />
  <rect width="920" height="220" rx="6" fill="none" stroke="#162234" stroke-width="1.5" />

  <!-- Terminal Top Bar -->
  <g transform="translate(0, 0)">
    <rect width="920" height="34" rx="6" fill="#090f1a" />
    <circle cx="20" cy="17" r="5" fill="#ef4444" />
    <circle cx="36" cy="17" r="5" fill="#f59e0b" />
    <circle cx="52" cy="17" r="5" fill="#10b981" />
    <text x="460" y="22" text-anchor="middle" font-family="'Courier New', monospace" font-size="12" font-weight="800" fill="#fbbf24">AQUILA TERMINAL // SHELL: BASH // REALM: AVISH2142005</text>
  </g>

  <!-- Shell Output -->
  <g transform="translate(24, 60)" font-family="'Courier New', monospace" font-size="12" font-weight="700">
    <text x="0" y="0" fill="#f59e0b">root@aquila-prime:~# <tspan fill="#f8fafc">aquila-telemetry --status --all-disciplines</tspan></text>
    <text x="0" y="24" fill="#94a3b8">&gt; [RADAR] Stratospheric scan complete. 360° perimeter clear.</text>
    <text x="0" y="46" fill="#fbbf24">&gt; [TALON] Kernel isolation active: AquaOS loaded. Zero memory leaks. [OK]</text>
    <text x="0" y="68" fill="#38bdf8">&gt; [VISION] Cognitive models armed: Nutri-ai operational. Latency: 1.2ms. [OK]</text>
    <text x="0" y="92" fill="#10b981">&gt; STATUS: APEX PREDATOR READY. ZERO TECHNICAL DEBT DETECTED.</text>
    <text x="0" y="118" fill="#f59e0b">root@aquila-prime:~# <tspan fill="#f8fafc">echo "Eyes on the horizon. Ready to build."</tspan> █</text>
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 11. MONOLITHIC RAPTOR FOOTER: got-footer.svg & ronin-footer.svg
// -------------------------------------------------------------
function getGotFooterSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 240" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="apexFooterBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#000000" />
      <stop offset="50%" stop-color="#050a14" />
      <stop offset="100%" stop-color="#000000" />
    </linearGradient>
    <linearGradient id="apexFooterGold" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f59e0b" />
      <stop offset="50%" stop-color="#ffffff" />
      <stop offset="100%" stop-color="#f59e0b" />
    </linearGradient>
  </defs>

  <rect width="1600" height="240" fill="url(#apexFooterBg)" />
  <rect x="16" y="16" width="1568" height="208" rx="4" fill="none" stroke="#162234" stroke-width="1.2" />

  <!-- Central Raptor Wing Lines -->
  <g transform="translate(800, 70)">
    <!-- Wings Vector -->
    <path d="M 0 0 C -80 -40 -240 -30 -360 10 C -240 0 -120 5 0 20 C 120 5 240 0 360 10 C 240 -30 80 -40 0 0 Z" fill="#0b1320" stroke="#f59e0b" stroke-width="1.2" />
    
    <!-- Central Eagle Eye -->
    <ellipse cx="0" cy="8" rx="14" ry="8" fill="#d97706" />
    <circle cx="0" cy="8" r="4" fill="#000000" />
    <circle cx="-2" cy="6" r="1.5" fill="#ffffff" />
  </g>

  <!-- Monolithic Signature -->
  <g transform="translate(800, 130)" text-anchor="middle">
    <text x="0" y="0" font-family="'Cinzel', serif" font-size="24" font-weight="900" fill="url(#apexFooterGold)" letter-spacing="4">AVISH KUMAR &#8226; THE APEX RAPTOR OF CODE</text>
    <text x="0" y="30" font-family="'Courier New', monospace" font-size="12" font-weight="700" fill="#94a3b8" letter-spacing="2">EYES ON THE HORIZON &#8226; TALONS ON THE TARGET &#8226; SOLITARY RULER OF THE STRATOSPHERE</text>
  </g>

  <!-- Coordinates & Build Stamp -->
  <g transform="translate(800, 195)" text-anchor="middle" font-family="'Courier New', monospace" font-size="10" font-weight="700" fill="#64748b" letter-spacing="1.5">
    <text x="0" y="0">[ AQUILA-01 // PROTOCOL 0x777 // OBSIDIAN CHASM &amp; AMBER TALONS // GRADE S+ ]</text>
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 12. LIVE GITHUB STATS: live-github-stats.svg
// -------------------------------------------------------------
function getLiveStatsSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 495 195" width="495" height="195">
  <defs>
    <linearGradient id="apexStatsBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#000000" />
      <stop offset="100%" stop-color="#060c16" />
    </linearGradient>
  </defs>
  <rect width="495" height="195" rx="4.5" fill="url(#apexStatsBg)" stroke="#1e2c40" stroke-width="1.2" />
  
  <g transform="translate(25, 35)">
    <text x="0" y="0" font-family="'Cinzel', serif" font-size="16" font-weight="900" fill="#fbbf24" letter-spacing="1.5">AVISH KUMAR // GITHUB TELEMETRY</text>
    
    <g transform="translate(0, 30)" font-family="'Courier New', monospace" font-size="12.5" font-weight="700">
      <text x="0" y="0" fill="#94a3b8">TOTAL COMMITS:</text>
      <text x="240" y="0" fill="#ffffff" font-weight="900">234+</text>
      
      <text x="0" y="26" fill="#94a3b8">TOTAL REPOSITORIES:</text>
      <text x="240" y="26" fill="#fbbf24" font-weight="900">12 FORTRESSES</text>
      
      <text x="0" y="52" fill="#94a3b8">CODE REVIEW RATIO:</text>
      <text x="240" y="52" fill="#38bdf8" font-weight="900">100% PURITY</text>
      
      <text x="0" y="78" fill="#94a3b8">CURRENT CADENCE:</text>
      <text x="240" y="78" fill="#10b981" font-weight="900">UNBROKEN STRATOSPHERE</text>
    </g>
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 13. CONTRIBUTION GRID: contribution-grid.svg
// -------------------------------------------------------------
function getGotContributionGridSvg() {
  let cachedData = null;
  const calendarPath = path.resolve(__dirname, "cached-calendar.json");
  if (fs.existsSync(calendarPath)) {
    try {
      cachedData = JSON.parse(fs.readFileSync(calendarPath, "utf8"));
    } catch (e) {
      // fallback
    }
  }

  let tilesXml = "";
  const totalWeeks = 52;
  const daysPerWeek = 7;
  const startX = 60;
  const startY = 110;
  const size = 11;
  const gap = 3;

  const amberPalette = {
    0: { fill: "#03060c", stroke: "#0a101a" },
    1: { fill: "#451a03", stroke: "#78350f" },
    2: { fill: "#92400e", stroke: "#b45309" },
    3: { fill: "#d97706", stroke: "#f59e0b" },
    4: { fill: "#fbbf24", stroke: "#fef08a" }
  };

  for (let w = 0; w < totalWeeks; w++) {
    for (let d = 0; d < daysPerWeek; d++) {
      let count = 0;
      if (cachedData && cachedData.weeks && cachedData.weeks[w] && cachedData.weeks[w].contributionDays[d]) {
        count = cachedData.weeks[w].contributionDays[d].contributionCount || 0;
      } else {
        const hash = (w * 7 + d * 13) % 100;
        if (hash > 70) count = 3;
        else if (hash > 45) count = 2;
        else if (hash > 20) count = 1;
        else count = 0;
      }

      let level = 0;
      if (count > 8) level = 4;
      else if (count > 4) level = 3;
      else if (count > 1) level = 2;
      else if (count > 0) level = 1;

      const col = amberPalette[level];
      const x = startX + w * (size + gap);
      const y = startY + d * (size + gap);

      tilesXml += `    <rect x="${x}" y="${y}" width="${size}" height="${size}" rx="2" fill="${col.fill}" stroke="${col.stroke}" stroke-width="0.8" />\n`;
    }
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 270" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="apexContribBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#000000" />
      <stop offset="100%" stop-color="#060c18" />
    </linearGradient>
  </defs>

  <rect width="920" height="270" rx="6" fill="url(#apexContribBg)" />
  <rect width="920" height="270" rx="6" fill="none" stroke="#162234" stroke-width="1.5" />

  <!-- Header Info -->
  <g transform="translate(24, 24)">
    <text x="0" y="0" font-family="'Cinzel', serif" font-size="16" font-weight="900" fill="#fbbf24" letter-spacing="1.5">52-WEEK RAPTOR FLIGHT CADENCE &#8226; STRATOSPHERIC SIEGE</text>
    <text x="0" y="20" font-family="'Courier New', monospace" font-size="11" fill="#94a3b8">234 CONFIRMED LETHAL STRIKES // CONTINUOUS FLIGHT LOG</text>
  </g>

  <!-- VS Emblem in Center Top -->
  <g transform="translate(840, 36)">
    <rect x="-30" y="-14" width="60" height="28" rx="3" fill="#08101a" stroke="#f59e0b" stroke-width="1.2" />
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
    <rect x="0" y="0" width="11" height="11" rx="2" fill="#03060c" stroke="#0a101a" />
    <rect x="18" y="0" width="11" height="11" rx="2" fill="#451a03" stroke="#78350f" />
    <rect x="36" y="0" width="11" height="11" rx="2" fill="#92400e" stroke="#b45309" />
    <rect x="54" y="0" width="11" height="11" rx="2" fill="#d97706" stroke="#f59e0b" />
    <rect x="72" y="0" width="11" height="11" rx="2" fill="#fbbf24" stroke="#fef08a" />
    <text x="92" y="10" fill="#fbbf24">STRIKE</text>
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
  { path: "header-profile.svg", content: getGotSectionHeaderSvg("01", "AERO-DOSSIER // APEX ARCHITECT PROFILE", "AQUILA PRIME // SOVEREIGN OF THE CODE STRATOSPHERE") },
  { path: "header-arsenal.svg", content: getGotSectionHeaderSvg("02", "THE RAPTOR'S ARSENAL // WEAPONS OF THE SKY", "PRECISION TALONS &#8226; LOW-LEVEL ENGINES &#8226; COGNITIVE AI") },
  { path: "header-project-database.svg", content: getGotSectionHeaderSvg("03", "STRATOSPHERIC VAULTS // CODE REPOSITORIES", "NUTRI-AI (ORACLE) &#8226; AQUAOS (KERNEL) &#8226; LIVE MARKDOWN (AST)") },
  { path: "header-commit-radar.svg", content: getGotSectionHeaderSvg("04", "RADAR SENTINEL // CADENCE OF THE SKIES", "UNBROKEN STRATOSPHERIC SURVEILLANCE") },
  { path: "header-contributions.svg", content: getGotSectionHeaderSvg("05", "52-WEEK FLIGHT CAMPAIGN // SIEGE OF CODE", "234+ LETHAL STRIKES ACROSS OPEN-SOURCE HORIZONS") },
  { path: "header-roadmap.svg", content: getGotSectionHeaderSvg("06", "2026 FLIGHT DIRECTIVES // CONQUEST ROADMAP", "STRATEGIC MILESTONES ACROSS THE HORIZON") },
  { path: "header-trophy-room.svg", content: getGotSectionHeaderSvg("07", "RAPTOR'S ROOST // GREAT FEATS &amp; ACCOLADES", "HIGH-ALTITUDE VISION, SUB-MS SPEED &amp; PURITY") },
  { path: "header-badges.svg", content: getGotSectionHeaderSvg("★", "ACADEMIC &amp; ENGINEERING CREDENTIALS", "VERIFIED RAPTOR SEALS &amp; SECURITY ACCREDITATIONS") },
  { path: "header-telemetry.svg", content: getGotSectionHeaderSvg("08", "AERO-TELEMETRY // MAINFRAME FLIGHT METRICS", "REAL-TIME CODE METRICS MONITORED AT 35,000 FT") },
  { path: "header-connect.svg", content: getGotSectionHeaderSvg("09", "RAPTOR DISPATCH // AERIAL CORRESPONDENCE", "SECURE CHANNELS TO AVISH KUMAR") },
  { path: "header-terminal.svg", content: getGotSectionHeaderSvg("10", "AQUILA COMMAND TERMINAL // SHELL INTERFACE", "DIRECT DISPATCH INTERFACE TO THE APEX RAPTOR") },

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

console.log("[generate-got-theme] All Apex Eagle SVGs successfully created and updated!");
