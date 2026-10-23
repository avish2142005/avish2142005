const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3333;
const ROOT_DIR = __dirname;
const ASSETS_DIR = path.join(ROOT_DIR, "assets");
const README_PATH = path.join(ROOT_DIR, "README.md");

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".json": "application/json"
};

function markdownToHtml(md) {
  // Simple markdown processor for GitHub profile READMEs
  let html = md;

  // Process code blocks
  html = html.replace(/```([a-zA-Z0-9_-]*)\n([\s\S]*?)```/g, (match, lang, code) => {
    return `<pre class="code-block"><code class="language-${lang}">${escapeHtml(code.trim())}</code></pre>`;
  });

  // Process inline code
  html = html.replace(/`([^`]+)`/g, '<code class="inline-code">$1</code>');

  // Process lists: checkbox items
  html = html.replace(/^- \[x\] (.*)$/gim, '<li class="task-list-item"><input type="checkbox" checked disabled> <span class="task-checked">$1</span></li>');
  html = html.replace(/^- \[ \] (.*)$/gim, '<li class="task-list-item"><input type="checkbox" disabled> <span>$1</span></li>');
  html = html.replace(/^- (.*)$/gim, '<li class="regular-list-item">$1</li>');

  // Wrap contiguous list items in ul
  html = html.replace(/((?:<li[\s\S]*?<\/li>\s*)+)/g, '<ul class="task-list">$1</ul>');

  // Process headings
  html = html.replace(/^### (.*$)/gim, '<h3 class="gh-h3">$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2 class="gh-h2">$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1 class="gh-h1">$1</h1>');

  // Bold & Italic
  html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*([^*]+)\*/g, '<em>$1</em>');

  // Markdown links [text](url)
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>');

  return html;
}

function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function getPreviewHtml(readmeMd) {
  const renderedContent = markdownToHtml(readmeMd);

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Avish Kumar (@avish2142005) // King in the North GitHub Profile</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;600;700&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-canvas: #090d16;
      --bg-panel: #0d1424;
      --border-color: #1e293b;
      --accent-ice: #38bdf8;
      --accent-frost: #7dd3fc;
      --accent-steel: #94a3b8;
      --text-main: #f1f5f9;
      --text-muted: #94a3b8;
      --text-dim: #64748b;
    }

    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      background-color: var(--bg-canvas);
      color: var(--text-main);
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif;
      font-size: 14px;
      line-height: 1.6;
      position: relative;
      overflow-x: hidden;
      min-height: 100vh;
    }

    /* Ambient Canvas Background for Snow */
    #snow-canvas {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      pointer-events: none;
      z-index: 99;
    }

    /* Top Command Header */
    .top-bar {
      position: sticky;
      top: 0;
      z-index: 100;
      background: rgba(13, 20, 36, 0.88);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid rgba(56, 189, 248, 0.2);
      padding: 12px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .brand-group {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .brand-sigil {
      width: 32px;
      height: 32px;
      border-radius: 6px;
      background: #101c33;
      border: 1px solid var(--accent-ice);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
    }

    .brand-title {
      font-family: 'Cinzel', serif;
      font-size: 15px;
      font-weight: 800;
      letter-spacing: 1.5px;
      color: #fff;
    }

    .brand-subtitle {
      font-size: 11px;
      color: var(--accent-ice);
      font-family: 'JetBrains Mono', monospace;
    }

    .action-controls {
      display: flex;
      gap: 10px;
      align-items: center;
    }

    .btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 7px 14px;
      border-radius: 6px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      text-decoration: none;
      transition: all 0.2s ease;
      font-family: -apple-system, sans-serif;
    }

    .btn-primary {
      background: #0284c7;
      color: #fff;
      border: 1px solid var(--accent-ice);
      box-shadow: 0 0 12px rgba(56, 189, 248, 0.35);
    }
    .btn-primary:hover {
      background: #0369a1;
      box-shadow: 0 0 18px rgba(56, 189, 248, 0.55);
    }

    .btn-secondary {
      background: #111e33;
      color: #cbd5e1;
      border: 1px solid #1e3a5f;
    }
    .btn-secondary:hover {
      background: #162844;
      color: #fff;
      border-color: var(--accent-ice);
    }

    /* GitHub-Accurate Shell Layout */
    .profile-container {
      max-width: 1280px;
      margin: 24px auto;
      padding: 0 24px;
      display: grid;
      grid-template-columns: 296px 1fr;
      gap: 32px;
    }

    @media (max-width: 900px) {
      .profile-container {
        grid-template-columns: 1fr;
      }
    }

    /* Left Sidebar: GitHub User Card */
    .sidebar-profile {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .avatar-wrapper {
      position: relative;
      width: 100%;
      border-radius: 50%;
      padding-top: 100%;
      background: #0c1527;
      border: 2px solid var(--accent-ice);
      box-shadow: 0 0 25px rgba(56, 189, 248, 0.25);
      overflow: hidden;
    }

    .avatar-img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .user-names {
      margin-top: 4px;
    }

    .user-fullname {
      font-size: 24px;
      font-weight: 700;
      color: #fff;
      font-family: 'Cinzel', serif;
      letter-spacing: 1px;
    }

    .user-handle {
      font-size: 18px;
      color: var(--text-dim);
      font-family: 'JetBrains Mono', monospace;
    }

    .user-bio {
      font-size: 13.5px;
      color: #cbd5e1;
      line-height: 1.5;
      font-style: italic;
    }

    .user-details {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 8px;
      font-size: 13px;
      color: var(--text-muted);
      border-top: 1px solid var(--border-color);
      padding-top: 14px;
    }

    .user-details li {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    /* Right Main Panel: Profile README Frame */
    .readme-card {
      background: #0a0f1d;
      border: 1px solid #1e3a5f;
      border-radius: 8px;
      box-shadow: 0 8px 30px rgba(0, 0, 0, 0.6);
      overflow: hidden;
    }

    .readme-header {
      padding: 12px 18px;
      background: #0d1527;
      border-bottom: 1px solid #1e3a5f;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .readme-meta {
      display: flex;
      align-items: center;
      gap: 8px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      color: var(--text-muted);
    }

    .readme-content {
      padding: 32px 32px 64px 32px;
      background: #080c18;
      overflow-x: auto;
    }

    @media (max-width: 600px) {
      .readme-content {
        padding: 16px 12px;
      }
    }

    /* GitHub Markdown Specific Styling */
    .readme-content h1, .readme-content h2, .readme-content h3 {
      font-family: 'Cinzel', serif;
      letter-spacing: 1.2px;
      margin-top: 24px;
      margin-bottom: 16px;
      font-weight: 700;
      color: #fff;
    }

    .readme-content h3 {
      font-size: 16px;
      border-bottom: 1px solid #16253c;
      padding-bottom: 6px;
      color: var(--accent-frost);
    }

    .readme-content p {
      margin-bottom: 16px;
      line-height: 1.6;
    }

    .readme-content a {
      color: var(--accent-ice);
      text-decoration: none;
      transition: color 0.15s ease;
    }
    .readme-content a:hover {
      text-decoration: underline;
      color: var(--accent-frost);
    }

    .readme-content img {
      max-width: 100%;
      height: auto;
      vertical-align: middle;
    }

    .readme-content table {
      width: 100%;
      border-collapse: collapse;
      margin: 16px 0;
      background: #09101e;
      border: 1px solid #1b304f;
      border-radius: 6px;
      overflow: hidden;
    }

    .readme-content table td {
      border: 1px solid #162942;
      padding: 16px;
      vertical-align: top;
    }

    .readme-content ul.task-list {
      list-style: none;
      margin: 12px 0 20px 0;
    }

    .readme-content li.task-list-item {
      display: flex;
      align-items: center;
      gap: 10px;
      margin: 8px 0;
      font-size: 14px;
      color: #cbd5e1;
    }

    .readme-content li.task-list-item input[type="checkbox"] {
      width: 16px;
      height: 16px;
      accent-color: var(--accent-ice);
    }

    .task-checked {
      color: #64748b;
      text-decoration: line-through;
    }

    .readme-content pre.code-block {
      background: #050811;
      border: 1px solid #1e3a5f;
      border-radius: 6px;
      padding: 14px 18px;
      overflow-x: auto;
      font-family: 'JetBrains Mono', monospace;
      font-size: 13px;
      color: var(--accent-frost);
      margin: 16px 0;
    }

    .inline-code {
      background: #0f1c30;
      border: 1px solid #1e3a5f;
      padding: 2px 6px;
      border-radius: 4px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      color: var(--accent-frost);
    }

    /* Toast Notification */
    #toast {
      position: fixed;
      bottom: 24px;
      right: 24px;
      background: #0284c7;
      color: #fff;
      padding: 12px 20px;
      border-radius: 6px;
      font-size: 13px;
      font-weight: 600;
      box-shadow: 0 4px 18px rgba(2, 132, 199, 0.4);
      opacity: 0;
      transform: translateY(20px);
      transition: all 0.25s ease;
      z-index: 999;
      pointer-events: none;
    }

    #toast.show {
      opacity: 1;
      transform: translateY(0);
    }
  </style>
</head>
<body>

  <canvas id="snow-canvas"></canvas>

  <!-- Top Action Header -->
  <header class="top-bar">
    <div class="brand-group">
      <div class="brand-sigil">🐺</div>
      <div>
        <div class="brand-title">HOUSE STARK // VALYRIAN CITADEL</div>
        <div class="brand-subtitle">avish2142005 / README.md &bull; Live Preview</div>
      </div>
    </div>
    <div class="action-controls">
      <button class="btn btn-secondary" onclick="toggleSnow()">❄️ Toggle Snow</button>
      <button class="btn btn-secondary" onclick="copyMarkdown()">📋 Copy Markdown</button>
      <a class="btn btn-primary" href="https://github.com/avish2142005" target="_blank">🌐 GitHub Profile</a>
    </div>
  </header>

  <div class="profile-container">
    <!-- Left Sidebar: GitHub User Card -->
    <aside class="sidebar-profile">
      <div class="avatar-wrapper">
        <img src="https://avatars.githubusercontent.com/u/192861318?v=4" alt="Avish Kumar Avatar" class="avatar-img" onerror="this.src='./assets/got-jon-snow-commander.png'">
      </div>
      <div class="user-names">
        <div class="user-fullname">Avish Kumar</div>
        <div class="user-handle">avish2142005</div>
      </div>
      <div class="user-bio">
        "Lord Commander of Code &amp; King in the North. Engineering resilient Python kernels, TypeScript ecosystems &amp; cognitive AI systems."
      </div>
      <ul class="user-details">
        <li>🏰 <strong>Keep:</strong> Winterfell // The North</li>
        <li>⚔️ <strong>Blade:</strong> Longclaw (Valyrian Steel)</li>
        <li>📜 <strong>Repositories:</strong> 5 Public Fortresses</li>
        <li>🛡️ <strong>Watch:</strong> Vigilant on the Wall</li>
      </ul>
    </aside>

    <!-- Main Content: Profile README -->
    <main class="readme-card">
      <div class="readme-header">
        <div class="readme-meta">
          <span>avish2142005</span>
          <span>/</span>
          <strong>README.md</strong>
        </div>
        <span style="color: #10b981; font-size: 11px; font-weight: 700; font-family: 'JetBrains Mono', monospace;">● GAME OF THRONES THEME ACTIVE</span>
      </div>

      <article class="readme-content" id="readme-article">
        ${renderedContent}
      </article>
    </main>
  </div>

  <div id="toast">Markdown copied to clipboard! Ready to paste into GitHub.</div>

  <script>
    // Raw markdown stored for 1-click copy
    const rawMarkdown = ${JSON.stringify(readmeMd)};

    function copyMarkdown() {
      navigator.clipboard.writeText(rawMarkdown).then(() => {
        showToast("✓ Copied raw Game of Thrones README.md!");
      }).catch(err => {
        console.error("Failed to copy:", err);
        showToast("Error copying to clipboard");
      });
    }

    function showToast(msg) {
      const toast = document.getElementById("toast");
      toast.textContent = msg;
      toast.classList.add("show");
      setTimeout(() => {
        toast.classList.remove("show");
      }, 2500);
    }

    // Snow Canvas Simulation
    const canvas = document.getElementById("snow-canvas");
    const ctx = canvas.getContext("2d");
    let snowActive = true;
    let flakes = [];

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    for (let i = 0; i < 90; i++) {
      flakes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2.2 + 0.6,
        d: Math.random() * 90,
        speed: Math.random() * 0.9 + 0.4
      });
    }

    let angle = 0;
    function drawSnow() {
      if (!snowActive) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        return;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "rgba(224, 242, 254, 0.65)";
      ctx.beginPath();
      for (let i = 0; i < flakes.length; i++) {
        const f = flakes[i];
        ctx.moveTo(f.x, f.y);
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
      }
      ctx.fill();

      angle += 0.01;
      for (let i = 0; i < flakes.length; i++) {
        const f = flakes[i];
        f.y += f.speed;
        f.x += Math.sin(angle) * 0.5;

        if (f.y > canvas.height) {
          f.y = -5;
          f.x = Math.random() * canvas.width;
        }
      }
      requestAnimationFrame(drawSnow);
    }
    requestAnimationFrame(drawSnow);

    function toggleSnow() {
      snowActive = !snowActive;
      if (snowActive) requestAnimationFrame(drawSnow);
      showToast(snowActive ? "Winter snow enabled" : "Snow disabled");
    }
  </script>
</body>
</html>`;
}

const server = http.createServer((req, res) => {
  let reqUrl = req.url.split("?")[0];
  if (reqUrl === "/") reqUrl = "/index.html";

  // If requesting root page, serve live compiled README preview
  if (reqUrl === "/index.html") {
    try {
      const readmeMd = fs.readFileSync(README_PATH, "utf8");
      const html = getPreviewHtml(readmeMd);
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(html);
      return;
    } catch (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end("Error loading README.md: " + err.message);
      return;
    }
  }

  // Handle raw markdown request
  if (reqUrl === "/README.md") {
    try {
      const readmeMd = fs.readFileSync(README_PATH, "utf8");
      res.writeHead(200, { "Content-Type": "text/markdown; charset=utf-8" });
      res.end(readmeMd);
      return;
    } catch (err) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
  }

  // Static files in assets/ or root
  let filePath = path.join(ROOT_DIR, reqUrl);
  if (!fs.existsSync(filePath)) {
    filePath = path.join(ASSETS_DIR, path.basename(reqUrl));
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || "application/octet-stream";
    res.writeHead(200, {
      "Content-Type": contentType,
      "Cache-Control": "no-cache, no-store, must-revalidate",
      "Pragma": "no-cache",
      "Expires": "0"
    });
    fs.createReadStream(filePath).pipe(res);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("File Not Found: " + reqUrl);
  }
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`\n=============================================================`);
  console.log(`🐺 GAME OF THRONES PROFILE PREVIEW SERVER RUNNING!`);
  console.log(`👑 AVISH KUMAR // THE KING IN THE NORTH & LORD COMMANDER`);
  console.log(`🌐 PREVIEW LINK: http://localhost:${PORT}`);
  console.log(`=============================================================\n`);
});
