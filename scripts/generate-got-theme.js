const fs = require("fs");
const path = require("path");

const assetsDir = path.resolve(__dirname, "../assets");

console.log("[generate-got-theme] Crafting AI Engineer Portfolio with Realistic Lion Logo (Royal Gold Theme) for Avish Kumar (@avish2142005)...");

// Load the realistic free lion image and encode as base64 data URI for flawless embedded SVG rendering
const lionPngPath = path.resolve(assetsDir, "got-sigil-lion.png");
let lionDataUri = "";
if (fs.existsSync(lionPngPath)) {
  const lionBase64 = fs.readFileSync(lionPngPath).toString("base64");
  lionDataUri = `data:image/png;base64,${lionBase64}`;
}

// -------------------------------------------------------------
// 1. HERO BANNER: got-hero-banner.svg (and ronin-hero-v2.svg)
// AI Engineer Focus // Realistic Lion Logo
// -------------------------------------------------------------
function getHeroBannerSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 520" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <!-- Deep Espresso & Obsidian Canvas -->
    <linearGradient id="aiCanvasBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070503" />
      <stop offset="35%" stop-color="#0e0a06" />
      <stop offset="70%" stop-color="#140f09" />
      <stop offset="100%" stop-color="#080604" />
    </linearGradient>

    <!-- Royal Sunlit Gold Gradient -->
    <linearGradient id="aiRoyalGold" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f59e0b" />
      <stop offset="40%" stop-color="#fbbf24" />
      <stop offset="70%" stop-color="#fde047" />
      <stop offset="100%" stop-color="#d97706" />
    </linearGradient>

    <!-- Metallic Platinum / Warm Ivory -->
    <linearGradient id="aiPlatinumText" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#ffffff" />
      <stop offset="50%" stop-color="#fef3c7" />
      <stop offset="100%" stop-color="#cbd5e1" />
    </linearGradient>

    <!-- Amber Glow Filter -->
    <filter id="aiRoyalGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="5" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>

    <pattern id="aiRegalGrid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#24190e" stroke-width="0.8" opacity="0.6" />
      <circle cx="40" cy="40" r="1.2" fill="#f59e0b" opacity="0.3" />
    </pattern>

    <!-- Circular Clip Path for Realistic Lion Logo -->
    <clipPath id="heroRealisticLionClip">
      <circle cx="180" cy="190" r="148" />
    </clipPath>

    <style>
      @keyframes goldLaserTrace {
        0% { stroke-dashoffset: 4400; }
        100% { stroke-dashoffset: 0; }
      }
      .laser-gold-border {
        stroke-dasharray: 260 4140;
        animation: goldLaserTrace 8s linear infinite;
      }
    </style>
  </defs>

  <!-- Base Canvas -->
  <rect width="1600" height="520" fill="url(#aiCanvasBg)" />
  <rect width="1600" height="520" fill="url(#aiRegalGrid)" />

  <!-- Ambient Radiant Glow Well Behind Lion Logo -->
  <circle cx="280" cy="260" r="380" fill="#f59e0b" opacity="0.14" filter="url(#aiRoyalGlow)" />
  <circle cx="1200" cy="180" r="320" fill="#fbbf24" opacity="0.08" filter="url(#aiRoyalGlow)" />

  <!-- Perimeter Royal Gold Borders -->
  <rect x="16" y="16" width="1568" height="488" rx="6" fill="none" stroke="#2e1f10" stroke-width="1.5" />
  <rect x="22" y="22" width="1556" height="476" rx="4" fill="none" stroke="#1c1208" stroke-width="1" />
  <rect x="16" y="16" width="1568" height="488" rx="6" fill="none" stroke="#f59e0b" stroke-width="2" class="laser-gold-border" filter="url(#aiRoyalGlow)" />

  <!-- Classical Royal Corner Ornaments -->
  <g fill="none" stroke="#f59e0b" stroke-width="1.8">
    <path d="M 16 65 L 65 16 M 16 35 L 35 16 M 16 16 L 90 16 M 16 16 L 16 90" />
    <circle cx="38" cy="38" r="3.5" fill="#fbbf24" />

    <path d="M 1584 65 L 1535 16 M 1584 35 L 1565 16 M 1584 16 L 1510 16 M 1584 16 L 1584 90" />
    <circle cx="1562" cy="38" r="3.5" fill="#fbbf24" />

    <path d="M 16 455 L 65 504 M 16 485 L 35 504 M 16 504 L 90 504 M 16 504 L 16 430" />
    <circle cx="38" cy="482" r="3.5" fill="#f59e0b" />

    <path d="M 1584 455 L 1535 504 M 1584 485 L 1565 504 M 1584 504 L 1510 504 M 1584 504 L 1584 430" />
    <circle cx="1562" cy="482" r="3.5" fill="#f59e0b" />
  </g>

  <!-- LEFT HERO ARTWORK: The Realistic Lion Logo In Royal Frame -->
  <g transform="translate(70, 70)">
    <!-- Decorative Royal Crest Frame Rings -->
    <circle cx="180" cy="190" r="176" fill="none" stroke="#3d2914" stroke-width="1.5" />
    <circle cx="180" cy="190" r="164" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="8 6" opacity="0.75" />
    <circle cx="180" cy="190" r="152" fill="#120c06" stroke="#f59e0b" stroke-width="3" filter="url(#aiRoyalGlow)" />

    <!-- REALISTIC LION IMAGE EMBEDDED WITH CIRCULAR CLIP -->
    <g clip-path="url(#heroRealisticLionClip)">
      <image href="${lionDataUri}" x="12" y="10" width="336" height="360" preserveAspectRatio="xMidYMid slice" />
    </g>
    <!-- Outer Beveled Gold Rim -->
    <circle cx="180" cy="190" r="148" fill="none" stroke="#fbbf24" stroke-width="2" />

    <!-- Professional Seal Under Lion Logo -->
    <g transform="translate(60, 375)">
      <rect x="0" y="0" width="240" height="30" rx="3" fill="#140d06" stroke="#f59e0b" stroke-width="1.2" />
      <text x="120" y="20" text-anchor="middle" font-family="'Cinzel', serif" font-size="11" font-weight="900" fill="#fbbf24" letter-spacing="2">AI ENGINEER // GRADE S+</text>
    </g>
  </g>

  <!-- RIGHT HERO HIERARCHY: AI Engineer Focus in Royal Gold Styling -->
  <g transform="translate(540, 75)">
    <!-- Top Professional Title Badge -->
    <g transform="translate(0, 18)">
      <rect x="0" y="0" width="460" height="28" rx="3" fill="#170f07" stroke="#f59e0b" stroke-width="1.2" />
      <circle cx="16" cy="14" r="4.5" fill="#fbbf24" />
      <text x="34" y="19" font-family="'Courier New', monospace" font-size="11" font-weight="800" fill="#fde047" letter-spacing="2">ARTIFICIAL INTELLIGENCE &amp; MACHINE LEARNING ENGINEER</text>
    </g>

    <!-- Main Identity Title: AVISH KUMAR -->
    <g transform="translate(0, 98)">
      <text x="0" y="0" font-family="'Cinzel', 'Trajan Pro', serif" font-size="64" font-weight="900" fill="#f59e0b" letter-spacing="6" opacity="0.25" filter="url(#aiRoyalGlow)">AVISH KUMAR</text>
      <text x="0" y="0" font-family="'Cinzel', 'Trajan Pro', serif" font-size="64" font-weight="900" fill="url(#aiPlatinumText)" letter-spacing="6">AVISH KUMAR</text>
    </g>

    <!-- Subtitle: AI Engineering Disciplines -->
    <g transform="translate(4, 142)">
      <text x="0" y="0" font-family="'Cinzel', serif" font-size="19" font-weight="800" fill="url(#aiRoyalGold)" letter-spacing="3">AI ENGINEER &#8226; COGNITIVE ARCHITECTURES &#8226; APPLIED ML SYSTEMS</text>
    </g>

    <!-- Royal Gold Divider Bar -->
    <g transform="translate(0, 165)">
      <line x1="0" y1="0" x2="980" y2="0" stroke="#2e1f10" stroke-width="1.5" />
      <line x1="0" y1="0" x2="420" y2="0" stroke="#f59e0b" stroke-width="2.5" filter="url(#aiRoyalGlow)" />
      <polygon points="420,-6 428,0 420,6 412,0" fill="#fde047" />
      <line x1="428" y1="0" x2="680" y2="0" stroke="#fef3c7" stroke-width="1.8" />
    </g>

    <!-- Professional Mission & AI Philosophy -->
    <g transform="translate(2, 206)">
      <text x="0" y="0" font-family="'Georgia', serif" font-style="italic" font-size="15.5" fill="#f8fafc" letter-spacing="0.8">"Engineering high-accuracy neural models, autonomous AI agents, and sub-millisecond inference pipelines."</text>
      <text x="0" y="26" font-family="'Georgia', serif" font-style="italic" font-size="15" fill="#d4d4d8" letter-spacing="0.6">Unifying cognitive health intelligence, low-level execution kernels, and scalable microservice APIs.</text>
    </g>

    <!-- 4 AI Engineering Badges -->
    <g transform="translate(0, 270)">
      <!-- Badge 1: Core AI Stack -->
      <g transform="translate(0, 0)">
        <rect x="0" y="0" width="225" height="62" rx="4" fill="#120c06" stroke="#3d2914" stroke-width="1.2" />
        <rect x="0" y="0" width="4" height="62" fill="#f59e0b" />
        <text x="16" y="22" font-family="'Courier New', monospace" font-size="10" font-weight="800" fill="#fbbf24" letter-spacing="1">🧠 CORE AI STACK</text>
        <text x="16" y="45" font-family="'Cinzel', serif" font-size="14.5" font-weight="800" fill="#ffffff">PYTORCH &#8226; FASTAPI</text>
      </g>

      <!-- Badge 2: AI Health Model -->
      <g transform="translate(245, 0)">
        <rect x="0" y="0" width="225" height="62" rx="4" fill="#120c06" stroke="#3d2914" stroke-width="1.2" />
        <rect x="0" y="0" width="4" height="62" fill="#fef3c7" />
        <text x="16" y="22" font-family="'Courier New', monospace" font-size="10" font-weight="800" fill="#fde047" letter-spacing="1">🔬 HEALTH AI ORACLE</text>
        <text x="16" y="45" font-family="'Cinzel', serif" font-size="14.5" font-weight="800" fill="#ffffff">Nutri-ai PLATFORM</text>
      </g>

      <!-- Badge 3: Systems Architecture -->
      <g transform="translate(490, 0)">
        <rect x="0" y="0" width="225" height="62" rx="4" fill="#120c06" stroke="#3d2914" stroke-width="1.2" />
        <rect x="0" y="0" width="4" height="62" fill="#d97706" />
        <text x="16" y="22" font-family="'Courier New', monospace" font-size="10" font-weight="800" fill="#fbbf24" letter-spacing="1">⚙️ AI WORKLOAD KERNEL</text>
        <text x="16" y="45" font-family="'Cinzel', serif" font-size="14.5" font-weight="800" fill="#ffffff">AquaOS POSIX CORE</text>
      </g>

      <!-- Badge 4: Production Rank -->
      <g transform="translate(735, 0)">
        <rect x="0" y="0" width="235" height="62" rx="4" fill="#120c06" stroke="#3d2914" stroke-width="1.2" />
        <rect x="0" y="0" width="4" height="62" fill="#10b981" />
        <text x="16" y="22" font-family="'Courier New', monospace" font-size="10" font-weight="800" fill="#34d399" letter-spacing="1">🏆 INFERENCE GRADE</text>
        <text x="16" y="45" font-family="'Cinzel', serif" font-size="14.5" font-weight="800" fill="#fde047">ENTERPRISE S+</text>
      </g>
    </g>

    <!-- Professional GitHub Pin -->
    <g transform="translate(0, 360)">
      <rect x="0" y="0" width="340" height="32" rx="3" fill="#160f07" stroke="#f59e0b" stroke-width="1" />
      <text x="16" y="21" font-family="'Courier New', monospace" font-size="12" font-weight="800" fill="#fde047">&gt; GITHUB.COM/AVISH2142005</text>
      <circle cx="320" cy="16" r="4.5" fill="#10b981" />
    </g>
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 2. STATUS BADGES: got-status-badges.svg (and samurai-status-badges.svg)
// AI Engineer Focus
// -------------------------------------------------------------
function getStatusBadgesSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 36" fill="none">
  <defs>
    <linearGradient id="goldStatusGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#b45309" />
      <stop offset="100%" stop-color="#f59e0b" />
    </linearGradient>
    <linearGradient id="ivoryStatusGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#78350f" />
      <stop offset="100%" stop-color="#fde047" />
    </linearGradient>
    <linearGradient id="emeraldStatusGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#047857" />
      <stop offset="100%" stop-color="#10b981" />
    </linearGradient>
  </defs>

  <g transform="translate(6, 2)" font-family="'Cinzel', Consolas, monospace" font-size="10.5" font-weight="900" letter-spacing="1">
    <!-- 01: ENGINEER -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="76" height="32" rx="3" fill="#0d0804" stroke="#2a1c0e" stroke-width="1" />
      <text x="38" y="20" text-anchor="middle" fill="#d4d4d8" font-size="9.5">ENGINEER</text>
      <rect x="79" y="0" width="115" height="32" rx="3" fill="url(#goldStatusGrad)" />
      <text x="136" y="20" text-anchor="middle" fill="#090502">AVISH KUMAR</text>
    </g>

    <!-- 02: ROLE: AI ENGINEER -->
    <g transform="translate(206, 0)">
      <rect x="0" y="0" width="62" height="32" rx="3" fill="#0d0804" stroke="#2a1c0e" stroke-width="1" />
      <text x="31" y="20" text-anchor="middle" fill="#d4d4d8" font-size="9.5">ROLE</text>
      <rect x="65" y="0" width="102" height="32" rx="3" fill="url(#goldStatusGrad)" />
      <text x="116" y="20" text-anchor="middle" fill="#090502">AI ENGINEER</text>
    </g>

    <!-- 03: MODELS -->
    <g transform="translate(385, 0)">
      <rect x="0" y="0" width="62" height="32" rx="3" fill="#0d0804" stroke="#2a1c0e" stroke-width="1" />
      <text x="31" y="20" text-anchor="middle" fill="#d4d4d8" font-size="9.5">MODELS</text>
      <rect x="65" y="0" width="102" height="32" rx="3" fill="url(#ivoryStatusGrad)" />
      <text x="116" y="20" text-anchor="middle" fill="#090502">DEEP LEARNING</text>
    </g>

    <!-- 04: INFERENCE SPEED -->
    <g transform="translate(564, 0)">
      <rect x="0" y="0" width="62" height="32" rx="3" fill="#0d0804" stroke="#2a1c0e" stroke-width="1" />
      <text x="31" y="20" text-anchor="middle" fill="#d4d4d8" font-size="9.5">INFERENCE</text>
      <rect x="65" y="0" width="98" height="32" rx="3" fill="url(#goldStatusGrad)" />
      <text x="114" y="20" text-anchor="middle" fill="#090502">SUB-MS</text>
    </g>

    <!-- 05: QUALITY -->
    <g transform="translate(735, 0)">
      <rect x="0" y="0" width="68" height="32" rx="3" fill="#0d0804" stroke="#2a1c0e" stroke-width="1" />
      <text x="34" y="20" text-anchor="middle" fill="#d4d4d8" font-size="9.5">QUALITY</text>
      <rect x="71" y="0" width="100" height="32" rx="3" fill="url(#emeraldStatusGrad)" />
      <text x="121" y="20" text-anchor="middle" fill="#090502">GRADE S+</text>
    </g>
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 3. SECTION HEADERS: Generic Generator in Royal Gold
// -------------------------------------------------------------
function getGotSectionHeaderSvg(num, title, subtitle) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 86" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="regalHdrBg_${num}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#0a0704" />
      <stop offset="50%" stop-color="#140e08" />
      <stop offset="100%" stop-color="#0a0704" />
    </linearGradient>
    <filter id="hdrGoldGlow_${num}" x="-10%" y="-10%" width="120%" height="120%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
    <style>
      @keyframes goldEdgeTrace_${num} {
        0% { stroke-dashoffset: 2100; }
        100% { stroke-dashoffset: 0; }
      }
      .laser-gold-edge_${num} {
        stroke-dasharray: 190 1910;
        animation: goldEdgeTrace_${num} 5s linear infinite;
      }
    </style>
  </defs>

  <rect width="920" height="86" rx="4" fill="url(#regalHdrBg_${num})" />
  <rect width="920" height="86" rx="4" fill="none" stroke="#2a1c0e" stroke-width="1.2" />
  <rect width="920" height="86" rx="4" fill="none" stroke="#f59e0b" stroke-width="2" class="laser-gold-edge_${num}" filter="url(#hdrGoldGlow_${num})" />

  <!-- Section Number Badge -->
  <g transform="translate(20, 20)">
    <rect x="0" y="0" width="70" height="46" rx="3" fill="#160f07" stroke="#f59e0b" stroke-width="1.5" />
    <path d="M 0 0 L 10 0 L 0 10 Z" fill="#f59e0b" />
    <text x="35" y="30" text-anchor="middle" font-family="'Cinzel', monospace" font-size="20" font-weight="900" fill="#fbbf24">${num}</text>
  </g>

  <!-- Main Title & Hierarchy -->
  <g transform="translate(108, 32)">
    <text x="0" y="0" font-family="'Cinzel', serif" font-size="20" font-weight="900" fill="#f8fafc" letter-spacing="2.5">${title}</text>
    <text x="0" y="24" font-family="'Courier New', monospace" font-size="11.5" font-weight="700" fill="#fde047" letter-spacing="1.5">${subtitle}</text>
  </g>

  <!-- Royal Embellishment Emblem (Right) -->
  <g transform="translate(850, 43)">
    <circle cx="0" cy="0" r="22" fill="#140d06" stroke="#f59e0b" stroke-width="1.5" />
    <polygon points="0,-12 3,-3 12,0 3,3 0,12 -3,3 -12,0 -3,-3" fill="#fbbf24" />
  </g>

  <line x1="108" y1="68" x2="800" y2="68" stroke="#2a1c0e" stroke-width="1" />
  <line x1="108" y1="68" x2="320" y2="68" stroke="#f59e0b" stroke-width="1.5" />
</svg>`;
}

// -------------------------------------------------------------
// 4. OPERATIVE DOSSIER: got-operative-dossier.svg (and operative-dossier-v2.svg)
// AI Engineer Credentials with Realistic Lion Logo
// -------------------------------------------------------------
function getOperativeDossierSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 490" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="aiDosBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070503" />
      <stop offset="50%" stop-color="#120c06" />
      <stop offset="100%" stop-color="#080503" />
    </linearGradient>
    <radialGradient id="aiDosGoldAura" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.3" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>
    <filter id="aiDosGlow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3.5" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
    <clipPath id="dosRealisticLionClip">
      <circle cx="0" cy="0" r="82" />
    </clipPath>
  </defs>

  <rect width="920" height="490" rx="6" fill="url(#aiDosBg)" />
  <rect width="920" height="490" rx="6" fill="none" stroke="#2e1f10" stroke-width="1.5" />
  <rect width="910" height="480" x="5" y="5" rx="4" fill="none" stroke="#1c1208" stroke-width="1" />

  <!-- Corner Brackets -->
  <g stroke="#f59e0b" stroke-width="2" fill="none">
    <path d="M 5 35 L 5 5 L 35 5" />
    <path d="M 915 35 L 915 5 L 885 5" />
    <path d="M 5 455 L 5 485 L 35 485" />
    <path d="M 915 455 L 915 485 L 885 485" />
  </g>

  <!-- Left Column: AI Engineer Intel Text -->
  <g transform="translate(36, 45)">
    <!-- Header Stamp -->
    <rect x="0" y="0" width="380" height="28" rx="3" fill="#140d06" stroke="#f59e0b" stroke-width="1" />
    <text x="14" y="19" font-family="'Courier New', monospace" font-size="11" font-weight="900" fill="#fde047" letter-spacing="2">AI ENGINEERING DOSSIER // MACHINE LEARNING</text>

    <!-- Name & Professional Title -->
    <text x="0" y="65" font-family="'Cinzel', 'Palatino', serif" font-size="28" font-weight="900" fill="#f8fafc" letter-spacing="2">AVISH KUMAR</text>
    <text x="0" y="92" font-family="'Cinzel', serif" font-size="13" font-weight="700" fill="#fbbf24" letter-spacing="1.5">AI ENGINEER &#8226; COGNITIVE SYSTEMS &amp; DEEP LEARNING</text>

    <!-- Key-Value AI Engineering Fields -->
    <g transform="translate(0, 125)" font-family="'Courier New', monospace" font-size="12">
      <text x="0" y="0" fill="#a1a1aa" font-weight="800">PRIMARY FOCUS:</text>
      <text x="150" y="0" fill="#f8fafc" font-weight="800">Deep Learning, Autonomous Agents &amp; ML Architecture</text>

      <text x="0" y="28" fill="#a1a1aa" font-weight="800">CORE ARSENAL:</text>
      <text x="150" y="28" fill="#fde047" font-weight="800">Python 3.12 &#8226; PyTorch &#8226; FastAPI &#8226; TypeScript &#8226; Docker</text>

      <text x="0" y="56" fill="#a1a1aa" font-weight="800">FLAGSHIP PLATFORMS:</text>
      <text x="150" y="56" fill="#ffffff" font-weight="800">Nutri-ai (Health AI) &#8226; AquaOS (AI Kernel Framework)</text>

      <text x="0" y="84" fill="#a1a1aa" font-weight="800">INFERENCE ENGINE:</text>
      <text x="150" y="84" fill="#fde047" font-weight="800">Sub-ms Model Dispatch, RESTful Pipelines, Vector DBs</text>

      <text x="0" y="112" fill="#a1a1aa" font-weight="800">SYSTEM STANDARDS:</text>
      <text x="150" y="112" fill="#ffffff" font-weight="800">Deterministic Concurrency, Zero Latency Drift, POSIX</text>

      <text x="0" y="140" fill="#a1a1aa" font-weight="800">ACTIVE DIRECTIVES:</text>
      <text x="150" y="140" fill="#10b981" font-weight="800">2026 Production AI Multi-Agent Deployments</text>
    </g>

    <!-- AI Code Philosophy Box -->
    <g transform="translate(0, 310)">
      <rect x="0" y="0" width="530" height="95" rx="4" fill="#120c06" stroke="#3d2914" stroke-width="1.2" />
      <rect x="0" y="0" width="4" height="95" fill="#f59e0b" />
      <text x="18" y="24" font-family="'Cinzel', serif" font-size="12" font-weight="900" fill="#fbbf24" letter-spacing="1">AI ENGINEERING PHILOSOPHY:</text>
      <text x="18" y="48" font-family="'Georgia', serif" font-style="italic" font-size="13" fill="#cbd5e1">"Engineering deep learning systems with mathematical integrity.</text>
      <text x="18" y="68" font-family="'Georgia', serif" font-style="italic" font-size="13" fill="#cbd5e1">Bridging cognitive reasoning models with sub-millisecond cloud pipelines."</text>
      <text x="18" y="86" font-family="'Courier New', monospace" font-size="10.5" font-weight="700" fill="#fde047">&gt; PRODUCTION INFERENCE PURITY &#8226; ZERO TECHNICAL DEBT.</text>
    </g>
  </g>

  <!-- Right Column: Realistic Lion Logo Crest -->
  <g transform="translate(745, 225)">
    <circle cx="0" cy="0" r="120" fill="url(#aiDosGoldAura)" />
    <circle cx="0" cy="0" r="100" fill="none" stroke="#2e1f10" stroke-width="1.5" />
    <circle cx="0" cy="0" r="92" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="14 6" />
    <circle cx="0" cy="0" r="84" fill="#120c06" stroke="#f59e0b" stroke-width="2.5" filter="url(#aiDosGlow)" />

    <!-- REALISTIC LION IMAGE EMBEDDED WITH CIRCULAR CLIP -->
    <g clip-path="url(#dosRealisticLionClip)">
      <image href="${lionDataUri}" x="-95" y="-95" width="190" height="200" preserveAspectRatio="xMidYMid slice" />
    </g>
    <circle cx="0" cy="0" r="82" fill="none" stroke="#fbbf24" stroke-width="2" />

    <rect x="-95" y="125" width="190" height="28" rx="3" fill="#140d06" stroke="#f59e0b" stroke-width="1.2" />
    <text x="0" y="144" text-anchor="middle" font-family="'Cinzel', serif" font-size="11" font-weight="900" fill="#f8fafc" letter-spacing="1.5">AVISH KUMAR // AI</text>
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 5. DEVELOPER RANK / RADAR: got-developer-rank.svg (and developer-rank.svg)
// AI Engineer Capabilities
// -------------------------------------------------------------
function getDeveloperRankSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 460" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="aiRankBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070503" />
      <stop offset="50%" stop-color="#120c06" />
      <stop offset="100%" stop-color="#080503" />
    </linearGradient>
    <radialGradient id="aiRankGoldAura" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.25" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>
    <filter id="aiRankFilter" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="3.5" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <rect width="920" height="460" rx="6" fill="url(#aiRankBg)" />
  <rect width="920" height="460" rx="6" fill="none" stroke="#2e1f10" stroke-width="1.5" />

  <!-- Left Side: Hexagonal AI Radar -->
  <g transform="translate(250, 230)">
    <circle cx="0" cy="0" r="160" fill="url(#aiRankGoldAura)" />

    <!-- Concentric Hexagons -->
    <polygon points="0,-30 26,-15 26,15 0,30 -26,15 -26,-15" fill="none" stroke="#24190e" stroke-width="1" />
    <polygon points="0,-60 52,-30 52,30 0,60 -52,30 -52,-30" fill="none" stroke="#24190e" stroke-width="1" />
    <polygon points="0,-90 78,-45 78,45 0,90 -78,45 -78,-45" fill="none" stroke="#2e1f10" stroke-width="1" />
    <polygon points="0,-120 104,-60 104,60 0,120 -104,60 -104,-60" fill="none" stroke="#3d2914" stroke-width="1" />
    <polygon points="0,-150 130,-75 130,75 0,150 -130,75 -130,-75" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="6 4" />

    <!-- Spoke Lines -->
    <line x1="0" y1="0" x2="0" y2="-150" stroke="#3d2914" stroke-width="1" />
    <line x1="0" y1="0" x2="130" y2="-75" stroke="#3d2914" stroke-width="1" />
    <line x1="0" y1="0" x2="130" y2="75" stroke="#3d2914" stroke-width="1" />
    <line x1="0" y1="0" x2="0" y2="150" stroke="#3d2914" stroke-width="1" />
    <line x1="0" y1="0" x2="-130" y2="75" stroke="#3d2914" stroke-width="1" />
    <line x1="0" y1="0" x2="-130" y2="-75" stroke="#3d2914" stroke-width="1" />

    <!-- Avish Kumar's AI Engineering Polygon -->
    <!-- Axes: Deep Learning=98%, Neural Architectures=97%, Low-Latency Inference=96%, Data Structures=96%, AI Systems & Pipelines=97%, Distributed APIs=95% -->
    <polygon points="0,-147 125,-72 123,71 0,144 -126,73 -124,-71" fill="#f59e0b" fill-opacity="0.32" stroke="#fde047" stroke-width="2.5" filter="url(#aiRankFilter)" />

    <!-- Vertices Dots -->
    <circle cx="0" cy="-147" r="4.5" fill="#f59e0b" />
    <circle cx="125" cy="-72" r="4.5" fill="#ffffff" />
    <circle cx="123" cy="71" r="4.5" fill="#fbbf24" />
    <circle cx="0" cy="144" r="4.5" fill="#f8fafc" />
    <circle cx="-126" cy="73" r="4.5" fill="#fde047" />
    <circle cx="-124" cy="-71" r="4.5" fill="#10b981" />

    <!-- Node Labels -->
    <text x="0" y="-168" text-anchor="middle" font-family="'Cinzel', serif" font-size="11.5" font-weight="900" fill="#fde047">DEEP LEARNING [98%]</text>
    <text x="145" y="-72" font-family="'Cinzel', serif" font-size="11.5" font-weight="900" fill="#ffffff">NEURAL MODELS [97%]</text>
    <text x="145" y="82" font-family="'Cinzel', serif" font-size="11.5" font-weight="900" fill="#fbbf24">LOW-LATENCY INFERENCE [96%]</text>
    <text x="0" y="172" text-anchor="middle" font-family="'Cinzel', serif" font-size="11.5" font-weight="900" fill="#f8fafc">MATHEMATICAL MASTERY [96%]</text>
    <text x="-145" y="82" text-anchor="end" font-family="'Cinzel', serif" font-size="11.5" font-weight="900" fill="#fde047">AI SYSTEM ARCHITECTURE [97%]</text>
    <text x="-145" y="-72" text-anchor="end" font-family="'Cinzel', serif" font-size="11.5" font-weight="900" fill="#10b981">DISTRIBUTED FASTAPI [95%]</text>
  </g>

  <!-- Right Side: AI Technical Breakdown -->
  <g transform="translate(500, 48)">
    <rect x="0" y="0" width="380" height="30" rx="3" fill="#160f07" stroke="#f59e0b" stroke-width="1.2" />
    <text x="16" y="20" font-family="'Cinzel', serif" font-size="13" font-weight="900" fill="#fbbf24" letter-spacing="2">AI ENGINEERING COMPETENCY MATRIX</text>

    <!-- Capability Bars -->
    <g transform="translate(0, 55)" font-family="'Courier New', monospace" font-size="11.5" font-weight="800">
      <!-- 01: Deep Learning -->
      <g transform="translate(0, 0)">
        <text x="0" y="16" fill="#f8fafc">01 // APPLIED DEEP LEARNING &amp; PYTORCH</text>
        <text x="340" y="16" fill="#fbbf24">98%</text>
        <rect x="0" y="24" width="380" height="8" rx="2" fill="#1c1208" />
        <rect x="0" y="24" width="372" height="8" rx="2" fill="#f59e0b" />
      </g>
      <!-- 02: Cognitive Models -->
      <g transform="translate(0, 52)">
        <text x="0" y="16" fill="#f8fafc">02 // HEALTH AI &amp; DIAGNOSTICS (Nutri-ai)</text>
        <text x="340" y="16" fill="#fde047">97%</text>
        <rect x="0" y="24" width="380" height="8" rx="2" fill="#1c1208" />
        <rect x="0" y="24" width="368" height="8" rx="2" fill="#fde047" />
      </g>
      <!-- 03: OS AI Kernel -->
      <g transform="translate(0, 104)">
        <text x="0" y="16" fill="#f8fafc">03 // AI WORKLOAD OS KERNEL (AquaOS)</text>
        <text x="340" y="16" fill="#ffffff">96%</text>
        <rect x="0" y="24" width="380" height="8" rx="2" fill="#1c1208" />
        <rect x="0" y="24" width="365" height="8" rx="2" fill="#ffffff" />
      </g>
      <!-- 04: Real-time UI -->
      <g transform="translate(0, 156)">
        <text x="0" y="16" fill="#f8fafc">04 // TELEMETRY COMPILATION (Live Markdown)</text>
        <text x="340" y="16" fill="#fbbf24">96%</text>
        <rect x="0" y="24" width="380" height="8" rx="2" fill="#1c1208" />
        <rect x="0" y="24" width="365" height="8" rx="2" fill="#f59e0b" />
      </g>
      <!-- 05: Microservices & APIs -->
      <g transform="translate(0, 208)">
        <text x="0" y="16" fill="#f8fafc">05 // SUB-MS AI REST APIS (first-flaskapp)</text>
        <text x="340" y="16" fill="#10b981">95%</text>
        <rect x="0" y="24" width="380" height="8" rx="2" fill="#1c1208" />
        <rect x="0" y="24" width="361" height="8" rx="2" fill="#10b981" />
      </g>
      <!-- 06: Data Structures -->
      <g transform="translate(0, 260)">
        <text x="0" y="16" fill="#f8fafc">06 // ALGORITHMS &amp; TENSOR MATHEMATICS</text>
        <text x="340" y="16" fill="#f8fafc">96%</text>
        <rect x="0" y="24" width="380" height="8" rx="2" fill="#1c1208" />
        <rect x="0" y="24" width="365" height="8" rx="2" fill="#cbd5e1" />
      </g>
    </g>
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 6. ROYAL BLADE DIVIDER: valyrian-divider.svg
// -------------------------------------------------------------
function getValyrianDividerSvg(reverse) {
  const startColor = reverse ? "#ffffff" : "#f59e0b";
  const endColor = reverse ? "#f59e0b" : "#ffffff";

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 32" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="regalDiv_${reverse ? 'rev' : 'fwd'}" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#070503" />
      <stop offset="25%" stop-color="${startColor}" />
      <stop offset="50%" stop-color="#fbbf24" />
      <stop offset="75%" stop-color="${endColor}" />
      <stop offset="100%" stop-color="#070503" />
    </linearGradient>
  </defs>
  <rect width="920" height="32" fill="none" />
  <line x1="20" y1="16" x2="900" y2="16" stroke="url(#regalDiv_${reverse ? 'rev' : 'fwd'})" stroke-width="1.8" />
  
  <g transform="translate(460, 16)">
    <polygon points="0,-8 8,0 0,8 -8,0" fill="#ffffff" />
    <circle cx="-16" cy="0" r="3" fill="#f59e0b" />
    <circle cx="0" cy="0" r="2.5" fill="#fbbf24" />
    <circle cx="16" cy="0" r="3" fill="#f59e0b" />
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 7. SYSTEM TELEMETRY GRID: got-telemetry-grid.svg
// AI Engineering Metrics in Royal Gold Theme
// -------------------------------------------------------------
function getTelemetryGridSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 380" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="regalTelBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070503" />
      <stop offset="100%" stop-color="#120c06" />
    </linearGradient>
  </defs>

  <rect width="920" height="380" rx="6" fill="url(#regalTelBg)" />
  <rect width="920" height="380" rx="6" fill="none" stroke="#2e1f10" stroke-width="1.5" />

  <!-- Top Banner -->
  <g transform="translate(24, 20)">
    <rect x="0" y="0" width="872" height="42" rx="4" fill="#140d06" stroke="#f59e0b" stroke-width="1.2" />
    <circle cx="24" cy="21" r="5" fill="#f59e0b" />
    <text x="42" y="26" font-family="'Cinzel', serif" font-size="14" font-weight="900" fill="#f8fafc" letter-spacing="2">AI MODEL INFERENCE &amp; SYSTEM TELEMETRY &#8226; AVISH KUMAR (@AVISH2142005)</text>
    <text x="840" y="26" text-anchor="end" font-family="'Courier New', monospace" font-size="12" font-weight="800" fill="#10b981">LIVE // MONITORED</text>
  </g>

  <!-- 3 Big Metric Columns -->
  <g transform="translate(24, 80)">
    <!-- Column 1: Cognitive Health AI -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="276" height="260" rx="4" fill="#0d0804" stroke="#2a1c0e" stroke-width="1.2" />
      <rect x="0" y="0" width="276" height="34" rx="4" fill="#1a1107" />
      <text x="18" y="22" font-family="'Cinzel', serif" font-size="12" font-weight="900" fill="#fbbf24" letter-spacing="1">🧠 COGNITIVE HEALTH AI</text>

      <g transform="translate(20, 60)" font-family="'Courier New', monospace">
        <text x="0" y="0" font-size="11" fill="#a1a1aa">HEALTH AI MODEL</text>
        <text x="0" y="28" font-family="'Cinzel', serif" font-size="20" font-weight="900" fill="#f8fafc">Nutri-ai Platform</text>
        
        <text x="0" y="65" font-size="11" fill="#a1a1aa">ENGINEERING TRAITS</text>
        <text x="0" y="85" font-size="12" font-weight="800" fill="#fbbf24">&#8226; Biomarker Neural Parsing</text>
        <text x="0" y="105" font-size="12" font-weight="800" fill="#fde047">&#8226; Dietary Diagnostics ML</text>
        <text x="0" y="125" font-size="12" font-weight="800" fill="#fbbf24">&#8226; Sub-ms JSON Inference</text>
        <text x="0" y="145" font-size="12" font-weight="800" fill="#fde047">&#8226; Automated Model Calibration</text>

        <rect x="0" y="165" width="236" height="24" rx="2" fill="#160f07" stroke="#f59e0b" stroke-width="0.8" />
        <text x="118" y="181" text-anchor="middle" font-size="10" font-weight="800" fill="#fbbf24">&gt; 1.2MS INFERENCE RESPONSE</text>
      </g>
    </g>

    <!-- Column 2: Systems Core for AI -->
    <g transform="translate(298, 0)">
      <rect x="0" y="0" width="276" height="260" rx="4" fill="#0d0804" stroke="#2a1c0e" stroke-width="1.2" />
      <rect x="0" y="0" width="276" height="34" rx="4" fill="#1a1107" />
      <text x="18" y="22" font-family="'Cinzel', serif" font-size="12" font-weight="900" fill="#ffffff" letter-spacing="1">⚙️ AI COMPUTE KERNEL</text>

      <g transform="translate(20, 60)" font-family="'Courier New', monospace">
        <text x="0" y="0" font-size="11" fill="#a1a1aa">OPERATING KERNEL</text>
        <text x="0" y="28" font-family="'Cinzel', serif" font-size="20" font-weight="900" fill="#f8fafc">AquaOS Architecture</text>
        
        <text x="0" y="65" font-size="11" fill="#a1a1aa">ENGINEERING TRAITS</text>
        <text x="0" y="85" font-size="12" font-weight="800" fill="#e2e8f0">&#8226; POSIX Process Sandboxing</text>
        <text x="0" y="105" font-size="12" font-weight="800" fill="#ffffff">&#8226; Distributed Workload Shell</text>
        <text x="0" y="125" font-size="12" font-weight="800" fill="#e2e8f0">&#8226; Zero Memory Leak Pools</text>
        <text x="0" y="145" font-size="12" font-weight="800" fill="#ffffff">&#8226; Low-Level Task Scheduling</text>

        <rect x="0" y="165" width="236" height="24" rx="2" fill="#160f07" stroke="#ffffff" stroke-width="0.8" />
        <text x="118" y="181" text-anchor="middle" font-size="10" font-weight="800" fill="#ffffff">&gt; ZERO MEMORY LEAKS</text>
      </g>
    </g>

    <!-- Column 3: Full-Stack ML Dashboards -->
    <g transform="translate(596, 0)">
      <rect x="0" y="0" width="276" height="260" rx="4" fill="#0d0804" stroke="#2a1c0e" stroke-width="1.2" />
      <rect x="0" y="0" width="276" height="34" rx="4" fill="#1a1107" />
      <text x="18" y="22" font-family="'Cinzel', serif" font-size="12" font-weight="900" fill="#fde047" letter-spacing="1">📜 ML UI &amp; APIS</text>

      <g transform="translate(20, 60)" font-family="'Courier New', monospace">
        <text x="0" y="0" font-size="11" fill="#a1a1aa">REACTIVE SUITE</text>
        <text x="0" y="28" font-family="'Cinzel', serif" font-size="20" font-weight="900" fill="#f8fafc">Markdown &amp; Flask</text>

        <text x="0" y="65" font-size="11" fill="#a1a1aa">ENGINEERING TRAITS</text>
        <text x="0" y="85" font-size="12" font-weight="800" fill="#fbbf24">&#8226; Real-time AST Compilation</text>
        <text x="0" y="105" font-size="12" font-weight="800" fill="#fde047">&#8226; React 19 &amp; Strict TypeScript</text>
        <text x="0" y="125" font-size="12" font-weight="800" fill="#fbbf24">&#8226; Sub-ms API Endpoints</text>
        <text x="0" y="145" font-size="12" font-weight="800" fill="#fde047">&#8226; Full-Stack ML Integration</text>

        <rect x="0" y="165" width="236" height="24" rx="2" fill="#160f07" stroke="#f59e0b" stroke-width="0.8" />
        <text x="118" y="181" text-anchor="middle" font-size="10" font-weight="800" fill="#fde047">&gt; ZERO-LATENCY RECONCILE</text>
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
    <linearGradient id="regalTrophyBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070503" />
      <stop offset="100%" stop-color="#120c06" />
    </linearGradient>
  </defs>

  <rect width="920" height="220" rx="6" fill="url(#regalTrophyBg)" />
  <rect width="920" height="220" rx="6" fill="none" stroke="#2e1f10" stroke-width="1.5" />

  <g transform="translate(24, 25)">
    <!-- Card 1: Nutri-ai -->
    <g transform="translate(0, 0)">
      <rect x="0" y="0" width="200" height="170" rx="4" fill="#0d0804" stroke="#2a1c0e" stroke-width="1.2" />
      <text x="100" y="38" text-anchor="middle" font-size="26">🧠</text>
      <text x="100" y="78" text-anchor="middle" font-family="'Cinzel', serif" font-size="28" font-weight="900" fill="#f8fafc">Nutri-ai</text>
      <text x="100" y="104" text-anchor="middle" font-family="'Cinzel', serif" font-size="11" font-weight="900" fill="#fbbf24">AI HEALTH ORACLE</text>
      <text x="100" y="125" text-anchor="middle" font-family="'Courier New', monospace" font-size="10" fill="#a1a1aa">COGNITIVE MODEL</text>
      <line x1="20" y1="142" x2="180" y2="142" stroke="#24190e" />
      <text x="100" y="156" text-anchor="middle" font-family="'Courier New', monospace" font-size="9" font-weight="700" fill="#10b981">SUB-MS INFERENCE</text>
    </g>

    <!-- Card 2: AquaOS -->
    <g transform="translate(224, 0)">
      <rect x="0" y="0" width="200" height="170" rx="4" fill="#0d0804" stroke="#2a1c0e" stroke-width="1.2" />
      <text x="100" y="38" text-anchor="middle" font-size="26">⚙️</text>
      <text x="100" y="78" text-anchor="middle" font-family="'Cinzel', serif" font-size="28" font-weight="900" fill="#f8fafc">AquaOS</text>
      <text x="100" y="104" text-anchor="middle" font-family="'Cinzel', serif" font-size="11" font-weight="900" fill="#ffffff">SYSTEMS KERNEL</text>
      <text x="100" y="125" text-anchor="middle" font-family="'Courier New', monospace" font-size="10" fill="#a1a1aa">POSIX ISOLATION</text>
      <line x1="20" y1="142" x2="180" y2="142" stroke="#24190e" />
      <text x="100" y="156" text-anchor="middle" font-family="'Courier New', monospace" font-size="9" font-weight="700" fill="#fbbf24">UNBROKEN CORE</text>
    </g>

    <!-- Card 3: Live Markdown -->
    <g transform="translate(448, 0)">
      <rect x="0" y="0" width="200" height="170" rx="4" fill="#0d0804" stroke="#2a1c0e" stroke-width="1.2" />
      <text x="100" y="38" text-anchor="middle" font-size="26">📜</text>
      <text x="100" y="78" text-anchor="middle" font-family="'Cinzel', serif" font-size="28" font-weight="900" fill="#f8fafc">Markdown</text>
      <text x="100" y="104" text-anchor="middle" font-family="'Cinzel', serif" font-size="11" font-weight="900" fill="#fde047">AST COMPILER</text>
      <text x="100" y="125" text-anchor="middle" font-family="'Courier New', monospace" font-size="10" fill="#a1a1aa">REACT 19 STUDIO</text>
      <line x1="20" y1="142" x2="180" y2="142" stroke="#24190e" />
      <text x="100" y="156" text-anchor="middle" font-family="'Courier New', monospace" font-size="9" font-weight="700" fill="#f59e0b">ZERO-LATENCY AST</text>
    </g>

    <!-- Card 4: AI Grade S+ -->
    <g transform="translate(672, 0)">
      <rect x="0" y="0" width="200" height="170" rx="4" fill="#0d0804" stroke="#2a1c0e" stroke-width="1.2" />
      <text x="100" y="38" text-anchor="middle" font-size="26">🏆</text>
      <text x="100" y="78" text-anchor="middle" font-family="'Cinzel', serif" font-size="28" font-weight="900" fill="#f8fafc">Grade S+</text>
      <text x="100" y="104" text-anchor="middle" font-family="'Cinzel', serif" font-size="11" font-weight="900" fill="#10b981">AI ENGINEER S+</text>
      <text x="100" y="125" text-anchor="middle" font-family="'Courier New', monospace" font-size="10" fill="#a1a1aa">AVISH KUMAR</text>
      <line x1="20" y1="142" x2="180" y2="142" stroke="#24190e" />
      <text x="100" y="156" text-anchor="middle" font-family="'Courier New', monospace" font-size="9" font-weight="700" fill="#10b981">ZERO TECHNICAL DEBT</text>
    </g>
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 9. AI ENGINEERING CHALLENGES (Battle Roster): got-battle-roster.svg
// -------------------------------------------------------------
function getBattleRosterSvg() {
  const challenges = [
    { title: "INFERENCE DRIFT", problem: "MODEL ACCURACY DECAY IN PRODUCTION", solution: "RESOLVED WITH NUTRI-AI CONTINUOUS CALIBRATION" },
    { title: "COMPUTE PROCESS COLLISIONS", problem: "PARALLEL INFERENCE LOCKOUT", solution: "ISOLATED WITH POSIX KERNEL WORKERS IN AQUAOS" },
    { title: "REAL-TIME AST COMPILATION", problem: "TELEMETRY RENDERING LAG", solution: "OPTIMIZED VIA REACT 19 VIRTUAL RECONCILIATION" },
    { title: "HIGH-THROUGHPUT ML APIS", problem: "SLOW HIGH-VOLUME JSON DISPATCH", solution: "DEPLOYED WITH ASYNCHRONOUS FASTAPI & FLASK" },
    { title: "HEAP ALLOCATION OVERFLOW", problem: "MEMORY SPIKES IN PYTHON LOOPS", solution: "RESOLVED VIA CUSTOM MEMORY POOLING" },
    { title: "UNCAUGHT RUNTIME FAULTS", problem: "SERVICE DEPENDENCY BREAKS", solution: "AUTOMATED VIA CONTAINERIZED CI/CD PIPELINES" }
  ];

  let cardsXml = "";
  challenges.forEach((b, i) => {
    const col = i % 3;
    const row = Math.floor(i / 3);
    const x = col * 292;
    const y = row * 135;

    cardsXml += `
    <g transform="translate(${x}, ${y})">
      <rect x="0" y="0" width="280" height="122" rx="4" fill="#0d0804" stroke="#2a1c0e" stroke-width="1.2" />
      <rect x="0" y="0" width="280" height="26" rx="4" fill="#181007" />
      <text x="14" y="17" font-family="'Cinzel', serif" font-size="11" font-weight="900" fill="#fbbf24" letter-spacing="1">CHALLENGE 0${i + 1} &#8226; ${b.title}</text>
      
      <g transform="translate(14, 46)" font-family="'Courier New', monospace" font-size="10.5">
        <text x="0" y="0" fill="#a1a1aa">ISSUE: <tspan fill="#f8fafc" font-weight="800">${b.problem}</tspan></text>
        <rect x="0" y="18" width="252" height="38" rx="2" fill="#140d06" stroke="#10b981" stroke-width="0.8" />
        <text x="126" y="34" text-anchor="middle" font-size="9" font-weight="800" fill="#10b981">&gt; ${b.solution}</text>
        <text x="126" y="47" text-anchor="middle" font-size="8.5" fill="#fde047">STATUS: PRODUCTION VERIFIED</text>
      </g>
    </g>`;
  });

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 330" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="regalRosterBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070503" />
      <stop offset="100%" stop-color="#120c06" />
    </linearGradient>
  </defs>

  <rect width="920" height="330" rx="6" fill="url(#regalRosterBg)" />
  <rect width="920" height="330" rx="6" fill="none" stroke="#2e1f10" stroke-width="1.5" />

  <g transform="translate(24, 25)">
    ${cardsXml}
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 10. AI DEVELOPER COMMAND TERMINAL: got-terminal.svg & terminal-contact.svg
// -------------------------------------------------------------
function getGotTerminalSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 220" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="regalTermBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070503" />
      <stop offset="100%" stop-color="#120c06" />
    </linearGradient>
  </defs>

  <rect width="920" height="220" rx="6" fill="url(#regalTermBg)" />
  <rect width="920" height="220" rx="6" fill="none" stroke="#2e1f10" stroke-width="1.5" />

  <!-- Terminal Top Bar -->
  <g transform="translate(0, 0)">
    <rect width="920" height="34" rx="6" fill="#140d06" />
    <circle cx="20" cy="17" r="5" fill="#ef4444" />
    <circle cx="36" cy="17" r="5" fill="#f59e0b" />
    <circle cx="52" cy="17" r="5" fill="#10b981" />
    <text x="460" y="22" text-anchor="middle" font-family="'Courier New', monospace" font-size="12" font-weight="800" fill="#fbbf24">AVISH KUMAR // AI WORKSTATION // SHELL: BASH // PYTHON 3.12</text>
  </g>

  <!-- Shell Output -->
  <g transform="translate(24, 60)" font-family="'Courier New', monospace" font-size="12" font-weight="700">
    <text x="0" y="0" fill="#f59e0b">avish@ai-workstation:~$ <tspan fill="#f8fafc">python3 -m ai_suite --evaluate-models</tspan></text>
    <text x="0" y="24" fill="#a1a1aa">&gt; [AI-ENGINE] Nutri-ai Model: Inference latency 1.2ms. Accuracy 99.4%. [OPTIMAL]</text>
    <text x="0" y="46" fill="#fbbf24">&gt; [KERNEL]    AquaOS Sandbox: POSIX process isolation active. [RUNNING]</text>
    <text x="0" y="68" fill="#fde047">&gt; [WEB-AST]   Live Markdown: Synchronous dual-pane compiler ready. [SYNCED]</text>
    <text x="0" y="92" fill="#10b981">&gt; STATUS: ALL AI INFERENCE PIPELINES ARMED. ZERO COMPILATION WARNINGS.</text>
    <text x="0" y="118" fill="#f59e0b">avish@ai-workstation:~$ <tspan fill="#f8fafc">echo "Ready for high-impact AI engineering roles."</tspan> █</text>
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 11. MONOLITHIC PROFESSIONAL FOOTER: got-footer.svg & ronin-footer.svg
// -------------------------------------------------------------
function getGotFooterSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1600 240" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="regalFooterBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070503" />
      <stop offset="50%" stop-color="#120c06" />
      <stop offset="100%" stop-color="#070503" />
    </linearGradient>
    <linearGradient id="regalFooterGold" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f59e0b" />
      <stop offset="50%" stop-color="#fef3c7" />
      <stop offset="100%" stop-color="#f59e0b" />
    </linearGradient>
  </defs>

  <rect width="1600" height="240" fill="url(#regalFooterBg)" />
  <rect x="16" y="16" width="1568" height="208" rx="4" fill="none" stroke="#2e1f10" stroke-width="1.2" />

  <g transform="translate(800, 68)">
    <line x1="-320" y1="0" x2="-30" y2="0" stroke="#f59e0b" stroke-width="1.2" />
    <polygon points="0,-10 10,0 0,10 -10,0" fill="#fbbf24" />
    <circle cx="0" cy="0" r="3" fill="#ffffff" />
    <line x1="30" y1="0" x2="320" y2="0" stroke="#f59e0b" stroke-width="1.2" />
  </g>

  <!-- Monolithic Signature -->
  <g transform="translate(800, 130)" text-anchor="middle">
    <text x="0" y="0" font-family="'Cinzel', serif" font-size="24" font-weight="900" fill="url(#regalFooterGold)" letter-spacing="4">AVISH KUMAR &#8226; ARTIFICIAL INTELLIGENCE ENGINEER</text>
    <text x="0" y="30" font-family="'Courier New', monospace" font-size="12" font-weight="700" fill="#a1a1aa" letter-spacing="2">DEEP LEARNING ARCHITECTURES &#8226; AUTONOMOUS AGENTS &#8226; SUB-MS INFERENCE</text>
  </g>

  <!-- Coordinates & Build Stamp -->
  <g transform="translate(800, 195)" text-anchor="middle" font-family="'Courier New', monospace" font-size="10" font-weight="700" fill="#71717a" letter-spacing="1.5">
    <text x="0" y="0">[ AVISH2142005 // AI ENGINEER PORTFOLIO // REALISTIC LION EMBLEM // ROYAL GOLD S+ ]</text>
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 12. STANDALONE CIRCULAR LOGO: assets/ai-lion-logo.svg
// -------------------------------------------------------------
function getStandaloneLionLogoSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 320" width="320" height="320">
  <defs>
    <radialGradient id="standaloneLogoHalo" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fbbf24" stop-opacity="0.35" />
      <stop offset="70%" stop-color="#f59e0b" stop-opacity="0.1" />
      <stop offset="100%" stop-color="#000000" stop-opacity="0" />
    </radialGradient>
    <clipPath id="standaloneLionClip">
      <circle cx="160" cy="160" r="142" />
    </clipPath>
  </defs>
  <circle cx="160" cy="160" r="158" fill="url(#standaloneLogoHalo)" />
  <circle cx="160" cy="160" r="150" fill="#0d0804" stroke="#3d2914" stroke-width="2" />
  <circle cx="160" cy="160" r="145" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="10 6" />
  <g clip-path="url(#standaloneLionClip)">
    <image href="${lionDataUri}" x="12" y="10" width="300" height="315" preserveAspectRatio="xMidYMid slice" />
  </g>
  <circle cx="160" cy="160" r="142" fill="none" stroke="#fbbf24" stroke-width="3" />
</svg>`;
}

// -------------------------------------------------------------
// 13. LIVE GITHUB STATS: live-github-stats.svg
// -------------------------------------------------------------
function getLiveStatsSvg() {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 495 195" width="495" height="195">
  <defs>
    <linearGradient id="regalStatsBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070503" />
      <stop offset="100%" stop-color="#120c06" />
    </linearGradient>
  </defs>
  <rect width="495" height="195" rx="4.5" fill="url(#regalStatsBg)" stroke="#2e1f10" stroke-width="1.2" />
  
  <g transform="translate(25, 35)">
    <text x="0" y="0" font-family="'Cinzel', serif" font-size="16" font-weight="900" fill="#fbbf24" letter-spacing="1.5">AVISH KUMAR // AI ENGINEERING METRICS</text>
    
    <g transform="translate(0, 30)" font-family="'Courier New', monospace" font-size="12.5" font-weight="700">
      <text x="0" y="0" fill="#a1a1aa">TOTAL COMMITS:</text>
      <text x="240" y="0" fill="#ffffff" font-weight="900">234+ PRODUCTION</text>
      
      <text x="0" y="26" fill="#a1a1aa">MANAGED REPOSITORIES:</text>
      <text x="240" y="26" fill="#fbbf24" font-weight="900">5 PRODUCTION</text>
      
      <text x="0" y="52" fill="#a1a1aa">CODE REVIEW PURITY:</text>
      <text x="240" y="52" fill="#10b981" font-weight="900">100% VERIFIED</text>
      
      <text x="0" y="78" fill="#a1a1aa">INFERENCE PIPELINE:</text>
      <text x="240" y="78" fill="#fde047" font-weight="900">SUB-MS CONTINUOUS</text>
    </g>
  </g>
</svg>`;
}

// -------------------------------------------------------------
// 14. CONTRIBUTION GRID: contribution-grid.svg
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

  const goldPalette = {
    0: { fill: "#0c0804", stroke: "#1c1208" },
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

      const col = goldPalette[level];
      const x = startX + w * (size + gap);
      const y = startY + d * (size + gap);

      tilesXml += `    <rect x="${x}" y="${y}" width="${size}" height="${size}" rx="2" fill="${col.fill}" stroke="${col.stroke}" stroke-width="0.8" />\n`;
    }
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 920 270" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <defs>
    <linearGradient id="regalContribBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070503" />
      <stop offset="100%" stop-color="#120c06" />
    </linearGradient>
  </defs>

  <rect width="920" height="270" rx="6" fill="url(#regalContribBg)" />
  <rect width="920" height="270" rx="6" fill="none" stroke="#2e1f10" stroke-width="1.5" />

  <!-- Header Info -->
  <g transform="translate(24, 24)">
    <text x="0" y="0" font-family="'Cinzel', serif" font-size="16" font-weight="900" fill="#fbbf24" letter-spacing="1.5">52-WEEK AI DEVELOPMENT CADENCE &#8226; CONTINUOUS DELIVERY</text>
    <text x="0" y="20" font-family="'Courier New', monospace" font-size="11" fill="#a1a1aa">234 CONFIRMED LETHAL STRIKES // ANNUAL CODE LOG</text>
  </g>

  <!-- VS Emblem in Center Top -->
  <g transform="translate(840, 36)">
    <rect x="-30" y="-14" width="60" height="28" rx="3" fill="#140d06" stroke="#f59e0b" stroke-width="1.2" />
    <text x="0" y="6" text-anchor="middle" font-family="'Cinzel', serif" font-size="14" font-weight="900" fill="#f8fafc">VS</text>
  </g>

  <!-- Month Headers -->
  <g transform="translate(60, 95)" font-family="'Courier New', monospace" font-size="9" font-weight="800" fill="#71717a" letter-spacing="1">
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
  <g transform="translate(24, 120)" font-family="'Courier New', monospace" font-size="9" font-weight="800" fill="#71717a">
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
    <text x="-40" y="10" fill="#71717a">LESS</text>
    <rect x="0" y="0" width="11" height="11" rx="2" fill="#0c0804" stroke="#1c1208" />
    <rect x="18" y="0" width="11" height="11" rx="2" fill="#451a03" stroke="#78350f" />
    <rect x="36" y="0" width="11" height="11" rx="2" fill="#92400e" stroke="#b45309" />
    <rect x="54" y="0" width="11" height="11" rx="2" fill="#d97706" stroke="#f59e0b" />
    <rect x="72" y="0" width="11" height="11" rx="2" fill="#fbbf24" stroke="#fef08a" />
    <text x="92" y="10" fill="#fbbf24">ACTIVE</text>
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
  { path: "ai-lion-logo.svg", content: getStandaloneLionLogoSvg() },
  
  // Section Headers
  { path: "header-profile.svg", content: getGotSectionHeaderSvg("01", "AI ENGINEERING DOSSIER", "AVISH KUMAR // ARTIFICIAL INTELLIGENCE ENGINEER") },
  { path: "header-arsenal.svg", content: getGotSectionHeaderSvg("02", "TECHNICAL ARSENAL // AI, ML, SYSTEMS &amp; FRAMEWORKS", "PYTORCH &#8226; FASTAPI &#8226; DEEP LEARNING &#8226; LINUX") },
  { path: "header-project-database.svg", content: getGotSectionHeaderSvg("03", "AI &amp; SOFTWARE REPOSITORIES // PRODUCTION SUITE", "NUTRI-AI (HEALTH AI) &#8226; AQUAOS (KERNEL) &#8226; MARKDOWN (UI)") },
  { path: "header-commit-radar.svg", content: getGotSectionHeaderSvg("04", "DEVELOPMENT CADENCE // INFERENCE &amp; REPO ACTIVITY", "CONTINUOUS INTEGRATION &amp; MODEL DEPLOYMENTS") },
  { path: "header-contributions.svg", content: getGotSectionHeaderSvg("05", "52-WEEK DEVELOPMENT MATRIX // ANNUAL ACTIVITY", "PRODUCTION COMMITS ACROSS AI &amp; SYSTEMS REPOSITORIES") },
  { path: "header-roadmap.svg", content: getGotSectionHeaderSvg("06", "AI ENGINEERING ROADMAP // 2026 OBJECTIVES", "AUTONOMOUS AGENTS &#8226; LOW-LATENCY INFERENCE") },
  { path: "header-trophy-room.svg", content: getGotSectionHeaderSvg("07", "KEY ACHIEVEMENTS // AI &amp; SYSTEM MILESTONES", "MODEL ACCURACY, SUB-MS INFERENCE &amp; SCALE") },
  { path: "header-badges.svg", content: getGotSectionHeaderSvg("★", "CERTIFICATIONS &amp; ACCREDITATIONS", "VERIFIED INDUSTRY CREDENTIALS &amp; SECURITY BADGES") },
  { path: "header-telemetry.svg", content: getGotSectionHeaderSvg("08", "AI TELEMETRY // REAL-TIME INFERENCE METRICS", "MODEL PERFORMANCE, ACCURACY &amp; REPOSITORY HEALTH") },
  { path: "header-connect.svg", content: getGotSectionHeaderSvg("09", "PROFESSIONAL CONTACT &amp; NETWORKING", "CONNECT FOR AI ENGINEERING COLLABORATIONS") },
  { path: "header-terminal.svg", content: getGotSectionHeaderSvg("10", "AI DEVELOPER CONSOLE // TERMINAL INTERFACE", "DIRECT DISPATCH &amp; MODEL EVALUATION") },

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

console.log("[generate-got-theme] All AI Engineer Assets with Realistic Lion Logo successfully generated!");
