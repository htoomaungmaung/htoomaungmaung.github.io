---
name: site-preview
description: >
  Build and preview the Jekyll personal site locally and verify the rendered result in a real
  browser before shipping. Use when checking a layout, styling, or content change on
  htoomaungmaung.github.io, not just running jekyll build. Toby's lane.
---

# Site preview

Owner: **Toby**. The site is Jekyll served via GitHub Pages; default branch is `master`. Reading
code is not enough for layout and styling; render it and look.

## Build and serve
1. Read `_config.yml` and the affected layout/include/page before changing it; follow existing
   Jekyll and styling conventions.
2. Build locally and catch errors: `bundle exec jekyll build` (or the repo's documented command).
3. Serve locally: `bundle exec jekyll serve` and note the local URL.

## Verify in a real browser
4. Drive the running site with the Playwright MCP: `browser_navigate` to the local URL,
   `browser_snapshot` for the a11y tree, `browser_take_screenshot` for the visual.
5. Check the pages the change actually affects, and check them at a narrow width too; the site
   should stay clean and fast. Read screenshots directly (Claude is multimodal); the MCP is for
   driving the page. Output lands in `.playwright-mcp/` (gitignored).
6. Report render problems honestly with the screenshot.

## Ship
7. Building and previewing are safe. Pushing, deploying to the live site, or deleting content is
   confirmation-required: show the preview, then wait for franzy.
