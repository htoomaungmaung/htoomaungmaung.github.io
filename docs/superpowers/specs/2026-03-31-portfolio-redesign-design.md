# Portfolio Redesign: Storytelling Portfolio for Htoo Maung Maung

**Date:** 2026-03-31
**Status:** Design approved

## Overview

Full rebuild of htoomaungmaung.github.io from a dated Colorlib Bootstrap 3 template into a modern, storytelling-driven portfolio. The site positions Htoo as an **AI Engineering Leader** (70%) grounded by proven engineering management credentials (30%). Tone is warm and approachable. Visual direction is modern dark with blue/purple accents.

## Constraints

- **Hosting:** GitHub Pages (static files only, no build step)
- **Tech:** Pure HTML + CSS + vanilla JS. No frameworks, no CDN dependencies, no build tools.
- **Single page:** One `index.html` with smooth scroll between sections. The two existing resume pages (`ai-technical-lead-resume.html`, `ai-engineering-manager-resume.html`) will be removed.
- **Assets:** Reuse `images/casual_photo.png` as the hero photo. Existing template assets (Colorlib CSS/JS, Bootstrap, jQuery, owl carousel, flexslider) will be removed.

## Narrative Strategy

The page reads as a journey, not a resume. First-person, conversational voice. Each section builds on the previous one to tell a story: who Htoo is, what he does now, how he got here, what he's good at, and how to reach him.

**Target audience:** Hiring managers and recruiters evaluating candidates for senior engineering management and AI engineering leadership roles.

**Core message:** "I build teams that ship AI-powered products."

## Page Structure

### 1. Sticky Navigation

- Hidden initially, appears after scrolling past the hero
- Minimal: name on the left, section links on the right
- Semi-transparent dark background with blur effect
- Smooth scroll to sections on click
- Mobile: hamburger menu

### 2. Hero Section

- Full viewport height
- **Animated particle constellation** background (canvas-based, subtle dots connected by faint lines, slow-moving)
- Radial gradient overlays (blue at top, purple at bottom-right)
- Green "Open to opportunities" pulse badge at the top
- Profile photo (`casual_photo.png`) with animated gradient ring (blue to purple) and soft glow
- Name: "Htoo Maung Maung" in large gradient text
- Role: "AI ENGINEERING LEADER" in gradient blue-purple, letter-spaced
- Tagline: "I build teams that ship AI-powered products. From enterprise SaaS to distributed engineering across four countries, I lead where people, systems, and practical AI meet."
- Social links: LinkedIn, GitHub, Email (icon + text, subtle card style)

### 3. Impact Numbers

- Horizontal row of 4 metrics: "11+ Years in Engineering", "8+ Engineers Managed", "4 Countries Led Across", "3 SaaS Products Shipped"
- Numbers use gradient text (blue to purple)
- **Count-up animation** triggered when section enters viewport (IntersectionObserver + requestAnimationFrame)
- Separated from hero and story by gradient divider lines

### 4. My Story

- Section label: "MY STORY"
- Heading: "How I got here" (serif font)
- 3 paragraphs, first-person, warm tone:
  - Paragraph 1: Origin (Myanmar to Singapore, polytechnic robotics, early curiosity). Mention "Franzy" nickname.
  - Paragraph 2: Growth arc (11 years, from Java servlets to leading distributed teams across 4 countries, building SaaS products, growing into management at TeamSpirit)
  - Paragraph 3: Present and future (Manabie, integrating AI tools into engineering workflows, belief that great leaders multiply team capabilities)
- Key phrases in highlight color (#e2e8f0, white-ish) against the softer body text (#94a3b8)

### 5. What I Do (Current Focus)

- Section label: "WHAT I DO"
- Heading: "Current focus"
- 3 cards in a grid:
  1. **AI-Integrated Engineering** - Embedding AI tools into daily workflows, sprint rituals, code quality
  2. **Distributed Team Leadership** - Leading engineers across 4 countries, delivery culture across time zones
  3. **Enterprise SaaS Architecture** - Full-stack Salesforce delivery, system design, ERP modules, CI/CD
- Cards have: icon, title, description
- **Hover effect:** subtle border glow, translateY(-2px), gradient top-border appears
- **Scroll animation:** cards fade-in and slide up staggered

### 6. Career Journey

- Section label: "CAREER JOURNEY"
- Heading: "Chapters so far"
- Vertical timeline with gradient line (blue at top fading to grey at bottom)
- **Timeline line draws** as user scrolls (CSS clip-path or JS-driven height)
- Each role is a "chapter" card:

**Chapter 5: Going Global** (2025 - Present)
- Software Engineering Manager, Manabie International
- Leading ERP delivery across Singapore, Japan, Vietnam, Philippines. Integrating AI tools into engineering workflows and sprint rituals. Setting technical direction while balancing delivery, experimentation, and stakeholder alignment across borders.
- Tech: React, TypeScript, Node.js, Salesforce, Apex, Python, AI Tools

**Chapters 2-4: Building & Leading** (2019 - 2024)
- Senior Engineer to Engineering Manager, TeamSpirit Singapore
- Grew from IC to managing a team of 8. Built complex React/Redux UI, optimized performance, enhanced CI/CD, defined OKRs. Discovered that great engineering is as much about people as code.
- Tech: React, Redux, TypeScript, Salesforce, Jenkins

**Chapter 1: Going Deep** (2017 - 2019)
- Senior Software Engineer, Octus Pte Ltd
- Led backend for a SaaS applicant tracking system. Implemented Elasticsearch, managed AWS, built CI/CD pipelines. First taste of leading technical decisions end to end.
- Tech: Java, Spring Boot, Angular, Elasticsearch, AWS, MongoDB

**The Beginning** (2014 - 2017)
- Software Engineer, Blueorange Pte Ltd
- Built enterprise LMS for government institutions. Real-time collaboration with WebSocket, video platform integration. Foundation lessons from maintaining production systems at scale.
- Tech: Java, JSP, WebSocket, Node.js, MySQL

- Each chapter card has hover effect (border glow, background shift)
- Current role dot glows with box-shadow animation

### 7. Skills & Tools

- Section label: "SKILLS & TOOLS"
- Heading: "What I work with"
- 2x2 grid of skill groups:

**Languages & Frameworks:**
JavaScript, TypeScript (trending), Java, Python (trending), React (trending), Redux, Next.js (trending), Spring Boot, Node.js (trending), FastAPI (trending)

**AI & Automation:**
GitHub Copilot (trending), Claude AI (trending), LangChain (trending), OpenAI API (trending), AI-Assisted Code Review, Prompt Engineering

**Infrastructure & Data:**
AWS, Docker (trending), Salesforce, PostgreSQL, MongoDB, Elasticsearch, Redis, GitHub Actions (trending), RabbitMQ, Nginx

**Leadership & Process:**
Agile/Scrum, Team Building, Hiring & Recruitment, OKR & KPI Setting, Stakeholder Management, System Design, Mentorship, Cross-functional Collaboration

- Each group has a distinct accent color (blue, purple, indigo, sky)
- "Trending" skills get a small gradient badge (orange-to-red) positioned at top-right corner
- Tags have subtle hover lift effect

### 8. Credentials

- Section label: "CREDENTIALS"
- Heading: "Education & certifications"
- Two-column grid:

**Education:**
- B.Eng Computer Engineering, NTU Singapore, 2011-2014
- Diploma in Manufacturing Engineering, Nanyang Polytechnic, 2008-2011
  - Gold Award badge: "Gold Award - Singapore Robotic Games 2011"

**Certifications:**
- Salesforce Certified JavaScript Developer
- Salesforce Certified Administrator
- Certified Scrum Master (CSM), SCRUM Alliance

- Gold Award gets a special gold-tinted badge element
- Cards match the dark glassmorphism style

### 9. Let's Connect (CTA)

- Radial gradient glow at the bottom
- Heading: "Let's build something together" (serif, gradient text)
- Subtext: "Looking for an engineering leader who ships? Let's talk."
- Three buttons:
  1. "Connect on LinkedIn" (primary, gradient background, glow shadow)
  2. "Email Me" (outline style)
  3. "Download Resume" (outline style, links to a PDF)
- Buttons hover: lift + enhanced shadow

### 10. Footer

- Minimal: copyright line
- No Colorlib attribution needed since this is a full rebuild with no Colorlib code

## Visual Design System

### Colors
- Background: #0a0b10
- Surface: rgba(255,255,255,0.02)
- Border: rgba(59,130,246,0.1)
- Primary: #3b82f6 (blue)
- Secondary: #8b5cf6 (purple)
- Accent: #6366f1 (indigo)
- Text primary: #f1f5f9
- Text secondary: #94a3b8
- Text muted: #64748b
- Success: #4ade80 (green, for status badge)
- Trending badge: linear-gradient(135deg, #f97316, #ef4444)

### Typography
- Headings: Georgia, 'Times New Roman', serif
- Body: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif
- Section labels: 11px, uppercase, letter-spacing 3px, blue
- Load Inter from Google Fonts

### Spacing
- Section padding: 80px vertical (48px in mockup scaled up)
- Content max-width: 900px, centered
- Card border-radius: 12px
- Section dividers: gradient line (transparent > blue > purple > transparent)

## Animations & Interactions

All animations are CSS + vanilla JS. No libraries.

### Particle Constellation (Hero)
- Canvas element behind hero content
- 40-60 small dots (1-2px), slow random movement
- Lines drawn between dots within proximity threshold
- Colors: rgba blue/purple, low opacity
- Responds to viewport resize

### Scroll Fade-In
- All sections start with `opacity: 0; transform: translateY(30px)`
- IntersectionObserver triggers `.visible` class: `opacity: 1; transform: translateY(0)`
- CSS transition: 0.6s ease-out
- Stagger delay for card grids (0.1s between each card)

### Count-Up Numbers
- Impact numbers animate from 0 to target value
- Triggered once when section enters viewport
- Duration: ~1.5s, easing
- Uses requestAnimationFrame

### Timeline Draw
- Timeline line starts with `scaleY(0)` from top
- As user scrolls, line extends downward proportionally
- Chapter dots and cards fade in as the line reaches them

### Sticky Nav
- Initially hidden (`transform: translateY(-100%)`)
- Appears after scrolling past hero section
- Background: rgba(10,11,16,0.85) with backdrop-filter: blur(12px)
- Active section highlighted in nav

### Hover Effects
- Cards: border glow, translateY(-2px), gradient top-border opacity
- Buttons: translateY(-2px), enhanced box-shadow
- Skill tags: translateY(-1px), subtle glow
- Links: color transition

### Gradient Text
- Hero name and CTA heading use `background: linear-gradient(...)` with `-webkit-background-clip: text`
- Subtle animation: background-position shifts slowly (CSS animation)

## Responsive Design

### Breakpoints
- Desktop: > 768px (default)
- Mobile: <= 768px

### Mobile Adaptations
- Sticky nav: hamburger menu (JS toggle)
- Hero: slightly smaller photo and text
- Focus cards: stack vertically (1 column)
- Skills grid: 1 column
- Credentials grid: 1 column
- Career timeline: full width, same layout (works naturally)
- Impact numbers: 2x2 grid instead of horizontal row
- Reduce particle count on mobile for performance

## File Structure

```
htoomaungmaung.github.io/
  index.html          # Single page, all sections
  css/
    style.css         # All styles (replaces old style.css)
  js/
    main.js           # All JS: particles, scroll, nav, counters (replaces old main.js)
  images/
    casual_photo.png  # Hero photo (already exists)
```

### Files to Remove
- `ai-technical-lead-resume.html`
- `ai-engineering-manager-resume.html`
- `css/resume.css`
- `css/animate.css`
- `css/bootstrap.css`, `css/bootstrap.css.map`
- `css/flexslider.css`
- `css/icomoon.css`
- `css/owl.carousel.min.css`, `css/owl.theme.default.min.css`
- `css/style.css.map`
- `js/modernizr-2.6.2.min.js`
- `js/respond.min.js`
- `js/jquery.min.js`, `js/jquery.easing.1.3.js`
- `js/bootstrap.min.js`
- `js/jquery.waypoints.min.js`
- `js/jquery.flexslider-min.js`
- `js/owl.carousel.min.js`
- `js/jquery.countTo.js`
- `js/google_map.js`
- `fonts/` directory (icomoon and bootstrap glyphicon fonts, no longer needed)

### Files to Keep
- `images/casual_photo.png` (hero photo)
- `images/about3.png` (keep as fallback/OG image)
- `_config.yml` (GitHub Pages config)
- `.gitignore`
- `README.md`

## SEO & Meta

- Title: "Htoo Maung Maung | AI Engineering Leader"
- Description: "Engineering leader building AI-powered teams and shipping enterprise SaaS products across 4 countries. 11+ years in software engineering, team leadership, and AI integration."
- OG tags updated with new title, description, and image
- Twitter card tags updated
- Favicon: keep `about3.png` or replace with a simple monogram

## Performance

- No external JS libraries
- Single CSS file, single JS file
- Inter font loaded from Google Fonts with `display=swap`
- Images: only `casual_photo.png` (already optimized) and `about3.png` for OG
- Particle canvas uses requestAnimationFrame, pauses when tab is not visible
- IntersectionObserver for lazy triggering (no scroll event listeners)

## Resume Download

- A PDF resume should be placed at a path like `resume/htoo-maung-maung-resume.pdf`
- The "Download Resume" button links to this file
- User will need to add the PDF manually
