# Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild htoomaungmaung.github.io as a modern, storytelling-driven dark-themed portfolio with animations, positioned as an AI Engineering Leader.

**Architecture:** Single-page static site with 3 files: `index.html` (all sections), `css/style.css` (all styles), `js/main.js` (particles, scroll animations, sticky nav, count-up). No frameworks, no build tools, deployed directly to GitHub Pages.

**Tech Stack:** HTML5, CSS3 (Grid, custom properties, IntersectionObserver-triggered transitions), vanilla JavaScript (Canvas API, IntersectionObserver, requestAnimationFrame)

**Spec:** `docs/superpowers/specs/2026-03-31-portfolio-redesign-design.md`

---

### Task 1: Clean up old template files

**Files:**
- Remove: `ai-technical-lead-resume.html`
- Remove: `ai-engineering-manager-resume.html`
- Remove: `css/resume.css`
- Remove: `css/animate.css`
- Remove: `css/bootstrap.css`
- Remove: `css/bootstrap.css.map`
- Remove: `css/flexslider.css`
- Remove: `css/icomoon.css`
- Remove: `css/owl.carousel.min.css`
- Remove: `css/owl.theme.default.min.css`
- Remove: `css/style.css.map`
- Remove: `js/modernizr-2.6.2.min.js`
- Remove: `js/respond.min.js`
- Remove: `js/jquery.min.js`
- Remove: `js/jquery.easing.1.3.js`
- Remove: `js/bootstrap.min.js`
- Remove: `js/jquery.waypoints.min.js`
- Remove: `js/jquery.flexslider-min.js`
- Remove: `js/owl.carousel.min.js`
- Remove: `js/jquery.countTo.js`
- Remove: `js/google_map.js`
- Remove: `fonts/` directory (entire directory)
- Remove: Old unused images (keep only `casual_photo.png` and `about3.png`)

- [ ] **Step 1: Remove old HTML pages**

```bash
cd /Users/htoofranzy/Repository/htoomaungmaung.github.io
rm -f ai-technical-lead-resume.html ai-engineering-manager-resume.html
```

- [ ] **Step 2: Remove old CSS files**

```bash
cd /Users/htoofranzy/Repository/htoomaungmaung.github.io
rm -f css/resume.css css/animate.css css/bootstrap.css css/bootstrap.css.map css/flexslider.css css/icomoon.css css/owl.carousel.min.css css/owl.theme.default.min.css css/style.css.map
```

- [ ] **Step 3: Remove old JS files**

```bash
cd /Users/htoofranzy/Repository/htoomaungmaung.github.io
rm -f js/modernizr-2.6.2.min.js js/respond.min.js js/jquery.min.js js/jquery.easing.1.3.js js/bootstrap.min.js js/jquery.waypoints.min.js js/jquery.flexslider-min.js js/owl.carousel.min.js js/jquery.countTo.js js/google_map.js
```

- [ ] **Step 4: Remove fonts directory and unused images**

```bash
cd /Users/htoofranzy/Repository/htoomaungmaung.github.io
rm -rf fonts/
rm -f images/about.jpg images/about2.jpg images/blog-1.jpg images/blog-2.jpg images/blog-3.jpg images/blog-4.jpg images/cover_bg_1.jpg images/img-1.jpg images/img-2.jpg images/img-3.jpg images/img-4.jpg images/img-5.jpg images/img-6.jpg images/img_bg_1.jpg images/img_bg_1_old.jpg images/img_bg_2.jpg images/img_bg_3.jpg images/loc.png
```

- [ ] **Step 5: Commit cleanup**

```bash
cd /Users/htoofranzy/Repository/htoomaungmaung.github.io
git add -A
git commit -m "chore: remove old Colorlib template files

Remove Bootstrap, jQuery, flexslider, owl carousel, icomoon fonts,
old resume pages, and unused images. Preparing for full portfolio rebuild."
```

---

### Task 2: Write the CSS design system and all styles

**Files:**
- Create: `css/style.css` (full rewrite, replaces old file)

This is the complete stylesheet for the entire site. It includes: CSS custom properties (design tokens), base/reset styles, sticky nav, hero, impact numbers, story, focus cards, career timeline, skills grid, credentials, CTA, footer, all hover/animation classes, and responsive breakpoints.

- [ ] **Step 1: Write the complete stylesheet**

Write `css/style.css` with this content:

```css
/* ============================================
   Portfolio - Htoo Maung Maung
   Design System + All Styles
   ============================================ */

/* --- Design Tokens --- */
:root {
  --bg: #0a0b10;
  --bg-surface: rgba(255,255,255,0.02);
  --border: rgba(59,130,246,0.1);
  --border-hover: rgba(59,130,246,0.3);
  --primary: #3b82f6;
  --secondary: #8b5cf6;
  --accent: #6366f1;
  --sky: #38bdf8;
  --text-1: #f1f5f9;
  --text-2: #94a3b8;
  --text-3: #64748b;
  --success: #4ade80;
  --font-heading: Georgia, 'Times New Roman', serif;
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --max-w: 900px;
  --section-pad: 80px 40px;
  --radius: 12px;
}

/* --- Reset --- */
*, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
html { scroll-behavior: smooth; }
body {
  background: var(--bg);
  color: var(--text-2);
  font-family: var(--font-body);
  font-size: 15px;
  line-height: 1.8;
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
}
a { color: var(--primary); text-decoration: none; transition: color 0.3s; }
a:hover { color: #60a5fa; }
img { max-width: 100%; display: block; }
ul { list-style: none; }

/* --- Utility --- */
.section-inner { max-width: var(--max-w); margin: 0 auto; }
.section-label {
  font-size: 11px;
  color: var(--primary);
  letter-spacing: 3px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 8px;
}
.section-title {
  font-size: 28px;
  color: var(--text-1);
  font-family: var(--font-heading);
  margin-bottom: 24px;
}
.section-divider {
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(59,130,246,0.2), rgba(139,92,246,0.2), transparent);
  max-width: var(--max-w);
  margin: 0 auto;
}
.highlight { color: var(--text-1); font-weight: 500; }

/* --- Scroll Animations --- */
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
.fade-in.visible {
  opacity: 1;
  transform: translateY(0);
}
.fade-in.delay-1 { transition-delay: 0.1s; }
.fade-in.delay-2 { transition-delay: 0.2s; }
.fade-in.delay-3 { transition-delay: 0.3s; }

/* ============================================
   Sticky Navigation
   ============================================ */
.sticky-nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  background: rgba(10,11,16,0.85);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
  transform: translateY(-100%);
  transition: transform 0.3s ease;
}
.sticky-nav.visible { transform: translateY(0); }
.sticky-nav-inner {
  max-width: var(--max-w);
  margin: 0 auto;
  padding: 12px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sticky-nav .nav-name {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-1);
}
.sticky-nav .nav-links {
  display: flex;
  gap: 24px;
}
.sticky-nav .nav-links a {
  font-size: 13px;
  color: var(--text-3);
  transition: color 0.3s;
}
.sticky-nav .nav-links a:hover,
.sticky-nav .nav-links a.active { color: var(--primary); }

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  background: none;
  border: none;
  padding: 4px;
}
.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--text-2);
  transition: all 0.3s;
}
.hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

/* ============================================
   Hero Section
   ============================================ */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 80px 40px;
  overflow: hidden;
}
.hero canvas {
  position: absolute;
  top: 0; left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}
.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.12) 0%, transparent 60%),
    radial-gradient(ellipse at 80% 80%, rgba(139,92,246,0.08) 0%, transparent 50%);
  z-index: 1;
  pointer-events: none;
}
.hero-content {
  position: relative;
  z-index: 2;
}
.hero-status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(34,197,94,0.1);
  border: 1px solid rgba(34,197,94,0.2);
  border-radius: 20px;
  padding: 6px 16px;
  font-size: 12px;
  color: var(--success);
  margin-bottom: 24px;
}
.pulse-dot {
  width: 8px; height: 8px;
  background: var(--success);
  border-radius: 50%;
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.8); }
}
.hero-photo {
  width: 140px; height: 140px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  margin: 0 auto 24px;
  padding: 3px;
  position: relative;
}
.hero-photo::after {
  content: '';
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  z-index: -1;
  filter: blur(16px);
  opacity: 0.5;
}
.hero-photo img {
  width: 100%; height: 100%;
  border-radius: 50%;
  object-fit: cover;
}
.hero h1 {
  font-size: 44px;
  font-weight: 700;
  margin-bottom: 8px;
  background: linear-gradient(135deg, #f1f5f9, #cbd5e1);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hero-role {
  font-size: 15px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 3px;
  font-weight: 600;
  margin-bottom: 20px;
}
.hero-tagline {
  font-size: 16px;
  color: var(--text-2);
  max-width: 540px;
  margin: 0 auto 32px;
  line-height: 1.7;
}
.hero-links {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}
.hero-links a {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #60a5fa;
  font-size: 13px;
  padding: 8px 20px;
  border-radius: 8px;
  background: rgba(59,130,246,0.08);
  border: 1px solid rgba(59,130,246,0.15);
  transition: all 0.3s;
}
.hero-links a:hover {
  background: rgba(59,130,246,0.15);
  transform: translateY(-2px);
}
.hero-links svg { width: 16px; height: 16px; fill: currentColor; }

/* ============================================
   Impact Numbers
   ============================================ */
.impact { padding: 48px 40px; }
.impact-grid {
  max-width: var(--max-w);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 56px;
  flex-wrap: wrap;
}
.impact-item { text-align: center; }
.impact-num {
  font-size: 40px;
  font-weight: 700;
  background: linear-gradient(135deg, var(--primary), var(--secondary));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;
}
.impact-label {
  font-size: 13px;
  color: var(--text-3);
  margin-top: 4px;
}

/* ============================================
   My Story
   ============================================ */
.story { padding: var(--section-pad); }
.story p {
  font-size: 15px;
  color: var(--text-2);
  line-height: 1.8;
  margin-bottom: 16px;
  max-width: var(--max-w);
}

/* ============================================
   What I Do (Focus Cards)
   ============================================ */
.focus { padding: var(--section-pad); }
.focus-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
.focus-card {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px 24px;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}
.focus-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--primary), var(--secondary));
  opacity: 0;
  transition: opacity 0.3s;
}
.focus-card:hover {
  border-color: var(--border-hover);
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(59,130,246,0.1);
}
.focus-card:hover::before { opacity: 1; }
.focus-icon { font-size: 32px; margin-bottom: 16px; }
.focus-card h3 {
  font-size: 16px;
  color: var(--text-1);
  font-weight: 600;
  margin-bottom: 10px;
}
.focus-card p {
  font-size: 13px;
  color: var(--text-3);
  line-height: 1.6;
}

/* ============================================
   Career Journey (Timeline)
   ============================================ */
.journey { padding: var(--section-pad); }
.timeline {
  position: relative;
  padding-left: 40px;
}
.timeline-line {
  position: absolute;
  left: 7px; top: 0; bottom: 0;
  width: 2px;
  background: linear-gradient(180deg, var(--primary), var(--secondary), var(--accent), #475569);
  transform-origin: top;
  transform: scaleY(0);
  transition: transform 0.05s linear;
}
.chapter {
  position: relative;
  margin-bottom: 24px;
  padding: 24px;
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  transition: all 0.3s;
}
.chapter:hover {
  border-color: var(--border-hover);
  background: rgba(59,130,246,0.03);
}
.chapter-dot {
  position: absolute;
  left: -38px; top: 28px;
  width: 16px; height: 16px;
  border-radius: 50%;
  border: 2px solid;
  background: var(--bg);
}
.chapter:nth-child(1) .chapter-dot {
  border-color: var(--primary);
  box-shadow: 0 0 12px rgba(59,130,246,0.5);
}
.chapter:nth-child(2) .chapter-dot { border-color: var(--secondary); }
.chapter:nth-child(3) .chapter-dot { border-color: var(--accent); }
.chapter:nth-child(4) .chapter-dot { border-color: #475569; }

.chapter-date {
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 4px;
}
.chapter:nth-child(1) .chapter-date { color: var(--primary); }
.chapter:nth-child(2) .chapter-date { color: var(--secondary); }
.chapter:nth-child(3) .chapter-date { color: var(--accent); }
.chapter:nth-child(4) .chapter-date { color: var(--text-3); }

.chapter-title {
  font-size: 18px;
  color: var(--text-1);
  font-weight: 600;
  margin-bottom: 4px;
}
.chapter-company {
  font-size: 13px;
  color: var(--text-3);
  margin-bottom: 12px;
}
.chapter-desc {
  font-size: 14px;
  color: var(--text-2);
  line-height: 1.7;
}
.chapter-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 14px;
}
.chapter-tech span {
  font-size: 11px;
  padding: 3px 10px;
  border-radius: 4px;
  background: rgba(59,130,246,0.08);
  color: var(--text-3);
  border: 1px solid rgba(59,130,246,0.1);
}

/* ============================================
   Skills & Tools
   ============================================ */
.skills { padding: var(--section-pad); }
.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}
.skill-group h4 {
  font-size: 11px;
  letter-spacing: 2px;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 14px;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--border);
}
.skill-group:nth-child(1) h4 { color: #60a5fa; }
.skill-group:nth-child(2) h4 { color: #a78bfa; }
.skill-group:nth-child(3) h4 { color: #818cf8; }
.skill-group:nth-child(4) h4 { color: #38bdf8; }

.skill-tags { display: flex; flex-wrap: wrap; gap: 8px; }
.skill-tag {
  font-size: 12px;
  padding: 5px 14px;
  border-radius: 6px;
  color: #cbd5e1;
  transition: all 0.3s;
  position: relative;
}
.skill-group:nth-child(1) .skill-tag { background: rgba(59,130,246,0.08); border: 1px solid rgba(59,130,246,0.12); }
.skill-group:nth-child(2) .skill-tag { background: rgba(139,92,246,0.08); border: 1px solid rgba(139,92,246,0.12); }
.skill-group:nth-child(3) .skill-tag { background: rgba(99,102,241,0.08); border: 1px solid rgba(99,102,241,0.12); }
.skill-group:nth-child(4) .skill-tag { background: rgba(56,189,248,0.08); border: 1px solid rgba(56,189,248,0.12); }

.skill-tag:hover { transform: translateY(-2px); }
.skill-tag.trending::after {
  content: 'trending';
  position: absolute;
  top: -7px; right: -6px;
  font-size: 8px;
  background: linear-gradient(135deg, #f97316, #ef4444);
  color: white;
  padding: 1px 5px;
  border-radius: 3px;
  font-weight: 700;
  letter-spacing: 0.5px;
}

/* ============================================
   Credentials
   ============================================ */
.credentials { padding: var(--section-pad); }
.cred-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
}
.cred-card {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
}
.cred-card h4 {
  font-size: 11px;
  color: var(--primary);
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;
}
.cred-item { margin-bottom: 14px; }
.cred-item:last-child { margin-bottom: 0; }
.cred-item .name {
  font-size: 14px;
  color: var(--text-1);
  font-weight: 500;
}
.cred-item .detail {
  font-size: 12px;
  color: var(--text-3);
  margin-top: 2px;
}
.cred-badge {
  display: inline-block;
  font-size: 11px;
  background: linear-gradient(135deg, rgba(234,179,8,0.15), rgba(234,179,8,0.05));
  color: #fbbf24;
  padding: 3px 10px;
  border-radius: 4px;
  border: 1px solid rgba(234,179,8,0.2);
  margin-top: 4px;
}

/* ============================================
   CTA
   ============================================ */
.cta {
  padding: 96px 40px;
  text-align: center;
  position: relative;
}
.cta::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at 50% 100%, rgba(59,130,246,0.08) 0%, transparent 60%);
  pointer-events: none;
}
.cta h2 {
  font-size: 32px;
  font-family: var(--font-heading);
  margin-bottom: 12px;
  background: linear-gradient(135deg, #f1f5f9, #94a3b8);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
}
.cta p {
  font-size: 15px;
  color: var(--text-3);
  margin-bottom: 32px;
  position: relative;
}
.cta-buttons {
  display: flex;
  gap: 14px;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
}
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, var(--primary), var(--accent));
  color: white;
  padding: 12px 28px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s;
  box-shadow: 0 4px 16px rgba(59,130,246,0.3);
  border: none;
  cursor: pointer;
}
.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(59,130,246,0.4);
  color: white;
}
.btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #60a5fa;
  padding: 12px 28px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  border: 1px solid rgba(59,130,246,0.3);
  background: rgba(59,130,246,0.05);
  transition: all 0.3s;
  cursor: pointer;
}
.btn-outline:hover {
  background: rgba(59,130,246,0.1);
  transform: translateY(-2px);
  color: #60a5fa;
}

/* ============================================
   Footer
   ============================================ */
.footer {
  padding: 24px 40px;
  text-align: center;
  font-size: 12px;
  color: var(--text-3);
  border-top: 1px solid var(--border);
}

/* ============================================
   Responsive
   ============================================ */
@media screen and (max-width: 768px) {
  :root { --section-pad: 56px 24px; }

  .sticky-nav .nav-links { display: none; }
  .sticky-nav .nav-links.open {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100%; left: 0; right: 0;
    background: rgba(10,11,16,0.95);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    padding: 16px 24px;
    gap: 12px;
    border-bottom: 1px solid var(--border);
  }
  .hamburger { display: flex; }
  .sticky-nav-inner { padding: 12px 24px; }

  .hero { padding: 60px 24px; }
  .hero h1 { font-size: 32px; }
  .hero-role { font-size: 13px; letter-spacing: 2px; }
  .hero-tagline { font-size: 14px; }
  .hero-photo { width: 110px; height: 110px; }

  .impact-grid { gap: 32px; }
  .impact-item { flex-basis: calc(50% - 16px); }
  .impact-num { font-size: 32px; }

  .focus-cards { grid-template-columns: 1fr; }
  .skills-grid { grid-template-columns: 1fr; }
  .cred-grid { grid-template-columns: 1fr; }

  .timeline { padding-left: 32px; }
  .chapter-dot { left: -30px; }

  .cta { padding: 64px 24px; }
  .cta h2 { font-size: 26px; }
}
```

- [ ] **Step 2: Verify the file was written**

```bash
wc -l /Users/htoofranzy/Repository/htoomaungmaung.github.io/css/style.css
```

Expected: approximately 450-500 lines.

- [ ] **Step 3: Commit the stylesheet**

```bash
cd /Users/htoofranzy/Repository/htoomaungmaung.github.io
git add css/style.css
git commit -m "feat: add complete dark-theme stylesheet

Design system with CSS custom properties, all section styles,
hover effects, scroll animation classes, responsive breakpoints.
Modern dark theme with blue/purple accents."
```

---

### Task 3: Write the complete HTML page

**Files:**
- Create: `index.html` (full rewrite, replaces old file)

Single-page HTML with all sections: sticky nav, hero (with canvas), impact numbers, my story, what I do, career journey, skills & tools, credentials, CTA, footer. Includes meta/SEO tags, Google Fonts, and links to css/style.css and js/main.js.

- [ ] **Step 1: Write the complete HTML**

Write `index.html` with this content:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Htoo Maung Maung | AI Engineering Leader</title>
  <meta name="description" content="Engineering leader building AI-powered teams and shipping enterprise SaaS products across 4 countries. 11+ years in software engineering, team leadership, and AI integration.">
  <meta name="keywords" content="Htoo Maung Maung, AI Engineering Leader, Software Engineering Manager, Engineering Manager, Technical Lead">
  <meta name="author" content="Htoo Maung Maung">

  <!-- Open Graph -->
  <meta property="og:title" content="Htoo Maung Maung | AI Engineering Leader">
  <meta property="og:description" content="Engineering leader building AI-powered teams and shipping enterprise SaaS products across 4 countries.">
  <meta property="og:image" content="images/about3.png">
  <meta property="og:url" content="https://htoomaungmaung.github.io/">
  <meta property="og:site_name" content="Htoo Maung Maung">
  <meta property="og:type" content="website">

  <!-- Twitter -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="Htoo Maung Maung | AI Engineering Leader">
  <meta name="twitter:description" content="Engineering leader building AI-powered teams and shipping enterprise SaaS products across 4 countries.">
  <meta name="twitter:image" content="images/about3.png">

  <link rel="icon" type="image/png" href="images/about3.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>

  <!-- Sticky Navigation -->
  <nav class="sticky-nav" id="stickyNav">
    <div class="sticky-nav-inner">
      <span class="nav-name">Htoo Maung Maung</span>
      <button class="hamburger" id="hamburger" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
      <div class="nav-links" id="navLinks">
        <a href="#story">My Story</a>
        <a href="#focus">What I Do</a>
        <a href="#journey">Journey</a>
        <a href="#skills">Skills</a>
        <a href="#credentials">Credentials</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section class="hero" id="hero">
    <canvas id="particles"></canvas>
    <div class="hero-content">
      <div class="hero-status">
        <span class="pulse-dot"></span>
        Open to opportunities
      </div>
      <div class="hero-photo">
        <img src="images/casual_photo.png" alt="Htoo Maung Maung" width="140" height="140">
      </div>
      <h1>Htoo Maung Maung</h1>
      <p class="hero-role">AI ENGINEERING LEADER</p>
      <p class="hero-tagline">I build teams that ship AI-powered products. From enterprise SaaS to distributed engineering across four countries, I lead where people, systems, and practical AI meet.</p>
      <div class="hero-links">
        <a href="https://www.linkedin.com/in/htoomaungmaung" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          LinkedIn
        </a>
        <a href="https://github.com/htoomaungmaung" target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          GitHub
        </a>
        <a href="mailto:htoofranz100@gmail.com">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          Email
        </a>
      </div>
    </div>
  </section>

  <div class="section-divider"></div>

  <!-- Impact Numbers -->
  <section class="impact fade-in" id="impact">
    <div class="impact-grid">
      <div class="impact-item">
        <div class="impact-num" data-target="11" data-suffix="+">0</div>
        <div class="impact-label">Years in Engineering</div>
      </div>
      <div class="impact-item">
        <div class="impact-num" data-target="8" data-suffix="+">0</div>
        <div class="impact-label">Engineers Managed</div>
      </div>
      <div class="impact-item">
        <div class="impact-num" data-target="4" data-suffix="">0</div>
        <div class="impact-label">Countries Led Across</div>
      </div>
      <div class="impact-item">
        <div class="impact-num" data-target="3" data-suffix="">0</div>
        <div class="impact-label">SaaS Products Shipped</div>
      </div>
    </div>
  </section>

  <div class="section-divider"></div>

  <!-- My Story -->
  <section class="story fade-in" id="story">
    <div class="section-inner">
      <p class="section-label">My Story</p>
      <h2 class="section-title">How I got here</h2>
      <p><span class="highlight">Hey, I'm Htoo. You can also call me Franzy.</span> I came to Singapore from Myanmar with a curiosity for how things work and a polytechnic robotics gold medal that proved I could build them.</p>
      <p>Over 11 years, I've gone from writing Java servlets and building learning platforms to <span class="highlight">leading distributed engineering teams across Singapore, Japan, Vietnam, and the Philippines.</span> Along the way, I built an applicant tracking system with Elasticsearch at its core, grew from senior engineer to engineering manager within the same company, and shipped enterprise SaaS products used by thousands.</p>
      <p>Today at Manabie International, I'm doing what excites me most: <span class="highlight">integrating AI tools directly into how my team builds software</span>, from sprint rituals to code reviews to deployment workflows. I believe the best engineering leaders don't just manage; they multiply their team's capabilities by bringing the right tools and the right culture together.</p>
    </div>
  </section>

  <div class="section-divider"></div>

  <!-- What I Do -->
  <section class="focus fade-in" id="focus">
    <div class="section-inner">
      <p class="section-label">What I Do</p>
      <h2 class="section-title">Current focus</h2>
      <div class="focus-cards">
        <div class="focus-card fade-in delay-1">
          <div class="focus-icon">&#x1F916;</div>
          <h3>AI-Integrated Engineering</h3>
          <p>Embedding AI tools into daily engineering workflows. From AI-assisted code reviews to intelligent sprint planning, I make AI a natural part of how teams build.</p>
        </div>
        <div class="focus-card fade-in delay-2">
          <div class="focus-icon">&#x1F30F;</div>
          <h3>Distributed Team Leadership</h3>
          <p>Leading engineers across 4 countries. Building delivery culture that works across time zones, languages, and working styles.</p>
        </div>
        <div class="focus-card fade-in delay-3">
          <div class="focus-icon">&#x1F3D7;&#xFE0F;</div>
          <h3>Enterprise SaaS Architecture</h3>
          <p>Full-stack delivery on Salesforce platform. System design, ERP modules, CI/CD pipelines, and production-grade solutions at scale.</p>
        </div>
      </div>
    </div>
  </section>

  <div class="section-divider"></div>

  <!-- Career Journey -->
  <section class="journey fade-in" id="journey">
    <div class="section-inner">
      <p class="section-label">Career Journey</p>
      <h2 class="section-title">Chapters so far</h2>
      <div class="timeline" id="timeline">
        <div class="timeline-line" id="timelineLine"></div>

        <div class="chapter fade-in">
          <div class="chapter-dot"></div>
          <div class="chapter-date">2025 - Present</div>
          <div class="chapter-title">Chapter 5: Going Global</div>
          <div class="chapter-company">Software Engineering Manager, Manabie International</div>
          <div class="chapter-desc">Leading full-stack ERP delivery across Singapore, Japan, Vietnam, and the Philippines. Integrating AI tools into daily engineering workflows and sprint rituals. Setting technical direction while balancing feature delivery, experimentation, and stakeholder alignment across borders.</div>
          <div class="chapter-tech">
            <span>React</span><span>TypeScript</span><span>Node.js</span><span>Salesforce</span><span>Apex</span><span>Python</span><span>AI Tools</span>
          </div>
        </div>

        <div class="chapter fade-in">
          <div class="chapter-dot"></div>
          <div class="chapter-date">2019 - 2024</div>
          <div class="chapter-title">Chapters 2-4: Building & Leading</div>
          <div class="chapter-company">Senior Engineer to Engineering Manager, TeamSpirit Singapore</div>
          <div class="chapter-desc">Grew from individual contributor to managing a team of 8. Built complex UI with React and Redux, optimized performance, enhanced CI/CD pipelines, and defined OKRs. The chapter where I discovered that great engineering is as much about people as it is about code.</div>
          <div class="chapter-tech">
            <span>React</span><span>Redux</span><span>TypeScript</span><span>Salesforce</span><span>Jenkins</span>
          </div>
        </div>

        <div class="chapter fade-in">
          <div class="chapter-dot"></div>
          <div class="chapter-date">2017 - 2019</div>
          <div class="chapter-title">Chapter 1: Going Deep</div>
          <div class="chapter-company">Senior Software Engineer, Octus Pte Ltd</div>
          <div class="chapter-desc">Led backend development for a SaaS applicant tracking system. Implemented enterprise Elasticsearch, managed AWS infrastructure, and built CI/CD pipelines. First taste of leading technical decisions end to end.</div>
          <div class="chapter-tech">
            <span>Java</span><span>Spring Boot</span><span>Angular</span><span>Elasticsearch</span><span>AWS</span><span>MongoDB</span>
          </div>
        </div>

        <div class="chapter fade-in">
          <div class="chapter-dot"></div>
          <div class="chapter-date">2014 - 2017</div>
          <div class="chapter-title">The Beginning</div>
          <div class="chapter-company">Software Engineer, Blueorange Pte Ltd</div>
          <div class="chapter-desc">Built enterprise learning management systems for government institutions. Real-time collaboration with WebSocket, video platform integration, and the lessons that come from maintaining production systems used by thousands.</div>
          <div class="chapter-tech">
            <span>Java</span><span>JSP</span><span>WebSocket</span><span>Node.js</span><span>MySQL</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="section-divider"></div>

  <!-- Skills & Tools -->
  <section class="skills fade-in" id="skills">
    <div class="section-inner">
      <p class="section-label">Skills & Tools</p>
      <h2 class="section-title">What I work with</h2>
      <div class="skills-grid">
        <div class="skill-group fade-in delay-1">
          <h4>Languages & Frameworks</h4>
          <div class="skill-tags">
            <span class="skill-tag">JavaScript</span>
            <span class="skill-tag trending">TypeScript</span>
            <span class="skill-tag">Java</span>
            <span class="skill-tag trending">Python</span>
            <span class="skill-tag trending">React</span>
            <span class="skill-tag">Redux</span>
            <span class="skill-tag trending">Next.js</span>
            <span class="skill-tag">Spring Boot</span>
            <span class="skill-tag trending">Node.js</span>
            <span class="skill-tag trending">FastAPI</span>
          </div>
        </div>
        <div class="skill-group fade-in delay-2">
          <h4>AI & Automation</h4>
          <div class="skill-tags">
            <span class="skill-tag trending">GitHub Copilot</span>
            <span class="skill-tag trending">Claude AI</span>
            <span class="skill-tag trending">LangChain</span>
            <span class="skill-tag trending">OpenAI API</span>
            <span class="skill-tag">AI-Assisted Code Review</span>
            <span class="skill-tag">Prompt Engineering</span>
          </div>
        </div>
        <div class="skill-group fade-in delay-1">
          <h4>Infrastructure & Data</h4>
          <div class="skill-tags">
            <span class="skill-tag">AWS</span>
            <span class="skill-tag trending">Docker</span>
            <span class="skill-tag">Salesforce</span>
            <span class="skill-tag">PostgreSQL</span>
            <span class="skill-tag">MongoDB</span>
            <span class="skill-tag">Elasticsearch</span>
            <span class="skill-tag">Redis</span>
            <span class="skill-tag trending">GitHub Actions</span>
            <span class="skill-tag">RabbitMQ</span>
            <span class="skill-tag">Nginx</span>
          </div>
        </div>
        <div class="skill-group fade-in delay-2">
          <h4>Leadership & Process</h4>
          <div class="skill-tags">
            <span class="skill-tag">Agile / Scrum</span>
            <span class="skill-tag">Team Building</span>
            <span class="skill-tag">Hiring & Recruitment</span>
            <span class="skill-tag">OKR & KPI Setting</span>
            <span class="skill-tag">Stakeholder Management</span>
            <span class="skill-tag">System Design</span>
            <span class="skill-tag">Mentorship</span>
            <span class="skill-tag">Cross-functional Collaboration</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="section-divider"></div>

  <!-- Credentials -->
  <section class="credentials fade-in" id="credentials">
    <div class="section-inner">
      <p class="section-label">Credentials</p>
      <h2 class="section-title">Education & certifications</h2>
      <div class="cred-grid">
        <div class="cred-card fade-in delay-1">
          <h4>Education</h4>
          <div class="cred-item">
            <div class="name">B.Eng Computer Engineering</div>
            <div class="detail">Nanyang Technological University, 2011-2014</div>
          </div>
          <div class="cred-item">
            <div class="name">Diploma in Manufacturing Engineering</div>
            <div class="detail">Nanyang Polytechnic, 2008-2011</div>
            <div class="cred-badge">&#127942; Gold Award - Singapore Robotic Games 2011</div>
          </div>
        </div>
        <div class="cred-card fade-in delay-2">
          <h4>Certifications</h4>
          <div class="cred-item">
            <div class="name">Salesforce Certified JavaScript Developer</div>
          </div>
          <div class="cred-item">
            <div class="name">Salesforce Certified Administrator</div>
          </div>
          <div class="cred-item">
            <div class="name">Certified Scrum Master (CSM)</div>
            <div class="detail">SCRUM Alliance</div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="section-divider"></div>

  <!-- CTA -->
  <section class="cta fade-in" id="contact">
    <div class="section-inner">
      <h2>Let's build something together</h2>
      <p>Looking for an engineering leader who ships? Let's talk.</p>
      <div class="cta-buttons">
        <a href="https://www.linkedin.com/in/htoomaungmaung" target="_blank" rel="noopener noreferrer" class="btn-primary">Connect on LinkedIn</a>
        <a href="mailto:htoofranz100@gmail.com" class="btn-outline">Email Me</a>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="footer">
    <p>&copy; 2026 Htoo Maung Maung. All rights reserved.</p>
  </footer>

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Step 2: Commit the HTML**

```bash
cd /Users/htoofranzy/Repository/htoomaungmaung.github.io
git add index.html
git commit -m "feat: add new single-page portfolio HTML

Complete page structure with hero, impact numbers, story, focus cards,
career timeline, skills grid, credentials, CTA. SVG social icons,
SEO meta tags, Google Fonts Inter."
```

---

### Task 4: Write all JavaScript (particles, scroll, nav, counters, timeline)

**Files:**
- Create: `js/main.js` (full rewrite, replaces old file)

All interactive behavior: particle constellation canvas, IntersectionObserver for fade-in animations, count-up numbers, sticky nav show/hide with active section tracking, hamburger toggle, timeline line draw on scroll.

- [ ] **Step 1: Write the complete JavaScript**

Write `js/main.js` with this content:

```javascript
;(function () {
  'use strict';

  // ============================================
  // Particle Constellation (Hero Background)
  // ============================================
  function initParticles() {
    var canvas = document.getElementById('particles');
    if (!canvas) return;
    var ctx = canvas.getContext('2d');
    var particles = [];
    var isMobile = window.innerWidth <= 768;
    var particleCount = isMobile ? 25 : 50;
    var maxDist = 120;
    var animId;

    function resize() {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }

    function createParticles() {
      particles = [];
      for (var i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          r: Math.random() * 1.5 + 0.5,
          color: Math.random() > 0.5 ? '59,130,246' : '139,92,246'
        });
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw lines between nearby particles
      for (var i = 0; i < particles.length; i++) {
        for (var j = i + 1; j < particles.length; j++) {
          var dx = particles[i].x - particles[j].x;
          var dy = particles[i].y - particles[j].y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            var opacity = (1 - dist / maxDist) * 0.15;
            ctx.beginPath();
            ctx.strokeStyle = 'rgba(59,130,246,' + opacity + ')';
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw and update particles
      for (var k = 0; k < particles.length; k++) {
        var p = particles[k];
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(' + p.color + ',0.4)';
        ctx.fill();

        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      }

      animId = requestAnimationFrame(draw);
    }

    // Pause when tab not visible
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        cancelAnimationFrame(animId);
      } else {
        animId = requestAnimationFrame(draw);
      }
    });

    window.addEventListener('resize', function () {
      resize();
      isMobile = window.innerWidth <= 768;
      particleCount = isMobile ? 25 : 50;
      createParticles();
    });

    resize();
    createParticles();
    draw();
  }

  // ============================================
  // Scroll Fade-In Animations
  // ============================================
  function initScrollAnimations() {
    var elements = document.querySelectorAll('.fade-in');
    if (!elements.length) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    elements.forEach(function (el) {
      observer.observe(el);
    });
  }

  // ============================================
  // Count-Up Animation for Impact Numbers
  // ============================================
  function initCountUp() {
    var nums = document.querySelectorAll('.impact-num[data-target]');
    if (!nums.length) return;
    var counted = false;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting && !counted) {
          counted = true;
          nums.forEach(function (num) {
            var target = parseInt(num.getAttribute('data-target'), 10);
            var suffix = num.getAttribute('data-suffix') || '';
            var duration = 1500;
            var start = performance.now();

            function update(now) {
              var elapsed = now - start;
              var progress = Math.min(elapsed / duration, 1);
              // ease-out cubic
              var eased = 1 - Math.pow(1 - progress, 3);
              var current = Math.round(eased * target);
              num.textContent = current + suffix;
              if (progress < 1) {
                requestAnimationFrame(update);
              }
            }
            requestAnimationFrame(update);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    var section = document.getElementById('impact');
    if (section) observer.observe(section);
  }

  // ============================================
  // Sticky Navigation
  // ============================================
  function initStickyNav() {
    var nav = document.getElementById('stickyNav');
    var hero = document.getElementById('hero');
    var navLinksEl = document.getElementById('navLinks');
    var hamburger = document.getElementById('hamburger');
    if (!nav || !hero) return;

    // Show/hide nav based on hero visibility
    var heroObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          nav.classList.remove('visible');
        } else {
          nav.classList.add('visible');
        }
      });
    }, { threshold: 0 });
    heroObserver.observe(hero);

    // Active section tracking
    var sections = document.querySelectorAll('section[id]');
    var navLinks = navLinksEl.querySelectorAll('a');

    var sectionObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          navLinks.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('active');
            }
          });
        }
      });
    }, { threshold: 0.3 });

    sections.forEach(function (section) {
      sectionObserver.observe(section);
    });

    // Hamburger toggle
    if (hamburger) {
      hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('open');
        navLinksEl.classList.toggle('open');
      });

      // Close menu when a link is clicked
      navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
          hamburger.classList.remove('open');
          navLinksEl.classList.remove('open');
        });
      });
    }
  }

  // ============================================
  // Timeline Draw on Scroll
  // ============================================
  function initTimelineDraw() {
    var timeline = document.getElementById('timeline');
    var line = document.getElementById('timelineLine');
    if (!timeline || !line) return;

    function updateLine() {
      var rect = timeline.getBoundingClientRect();
      var windowH = window.innerHeight;

      // Calculate how much of the timeline is visible
      if (rect.top >= windowH) {
        line.style.transform = 'scaleY(0)';
        return;
      }
      if (rect.bottom <= 0) {
        line.style.transform = 'scaleY(1)';
        return;
      }

      var visibleTop = Math.max(0, windowH - rect.top);
      var totalHeight = rect.height;
      var progress = Math.min(visibleTop / totalHeight, 1);
      line.style.transform = 'scaleY(' + progress + ')';
    }

    window.addEventListener('scroll', updateLine, { passive: true });
    updateLine();
  }

  // ============================================
  // Initialize Everything
  // ============================================
  document.addEventListener('DOMContentLoaded', function () {
    initParticles();
    initScrollAnimations();
    initCountUp();
    initStickyNav();
    initTimelineDraw();
  });
})();
```

- [ ] **Step 2: Commit the JavaScript**

```bash
cd /Users/htoofranzy/Repository/htoomaungmaung.github.io
git add js/main.js
git commit -m "feat: add all interactive JS

Particle constellation canvas, scroll fade-in animations,
count-up numbers, sticky nav with active tracking,
hamburger menu, timeline draw on scroll."
```

---

### Task 5: Add .superpowers to .gitignore and verify the site

**Files:**
- Modify: `.gitignore`

- [ ] **Step 1: Add .superpowers to .gitignore**

Append `.superpowers/` to the `.gitignore` file so brainstorming session files are not committed.

```
.superpowers/
```

- [ ] **Step 2: Verify all files are in place**

```bash
cd /Users/htoofranzy/Repository/htoomaungmaung.github.io
echo "=== Files ===" && ls -la index.html css/style.css js/main.js images/casual_photo.png images/about3.png
echo "=== Old files should be gone ===" && ls ai-technical-lead-resume.html 2>&1 || true
echo "=== Git status ===" && git status
```

Expected: index.html, css/style.css, js/main.js, and both images exist. Old resume pages are gone. Clean git status except for .gitignore change and .superpowers/.

- [ ] **Step 3: Open the site in a browser to verify**

```bash
open /Users/htoofranzy/Repository/htoomaungmaung.github.io/index.html
```

Manually check:
1. Dark background loads
2. Particle animation runs in hero
3. Photo shows with gradient ring
4. Scroll down: sections fade in
5. Impact numbers count up
6. Sticky nav appears after scrolling past hero
7. Timeline line draws on scroll
8. Skill tags show "trending" badges
9. Mobile: resize browser to check responsive layout
10. All links work (LinkedIn, GitHub, Email)

- [ ] **Step 4: Commit .gitignore update**

```bash
cd /Users/htoofranzy/Repository/htoomaungmaung.github.io
git add .gitignore
git commit -m "chore: add .superpowers to .gitignore"
```

---

### Task 6: Final review and cleanup

- [ ] **Step 1: Run a final check on all files**

```bash
cd /Users/htoofranzy/Repository/htoomaungmaung.github.io
echo "=== File count ===" && find . -maxdepth 2 -type f ! -path './.git/*' ! -path './.superpowers/*' ! -path './.DS_Store' | wc -l
echo "=== CSS lines ===" && wc -l css/style.css
echo "=== JS lines ===" && wc -l js/main.js
echo "=== HTML lines ===" && wc -l index.html
echo "=== Git log ===" && git log --oneline -5
```

Expected: ~6-8 files total (index.html, css/style.css, js/main.js, 2 images, _config.yml, .gitignore, README.md). CSS ~450 lines, JS ~200 lines, HTML ~250 lines.

- [ ] **Step 2: Verify no broken references**

Check that all paths referenced in index.html exist:
- `css/style.css`
- `js/main.js`
- `images/casual_photo.png`
- `images/about3.png`

```bash
cd /Users/htoofranzy/Repository/htoomaungmaung.github.io
for f in css/style.css js/main.js images/casual_photo.png images/about3.png; do
  if [ -f "$f" ]; then echo "OK: $f"; else echo "MISSING: $f"; fi
done
```

Expected: all OK.
