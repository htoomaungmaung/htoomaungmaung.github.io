# htoomaungmaung.github.io

Personal portfolio site for **franzy** (Maung Maung Htoo). Simple Jekyll-based site to showcase work experiences, projects, and education.

## The agent for this project: Alfred

**Alfred** is the agent for htoomaungmaung.github.io (part of franzy's career + learning + portfolio team). When working on this project, AI tools should use Alfred for tasks related to:

- Jekyll site development and debugging
- Content updates (work experiences, projects, education)
- Styling and animation improvements
- Site optimization and analytics
- Career narrative and portfolio showcases

### Where Alfred lives

Alfred's portable definition is at `/srv/files/projects/franzy-os/agents/alfred.md`
(Claude Code fallback: `franzy-os/.claude/agents/alfred.md`).
Portfolio-specific skills are at `/srv/files/projects/franzy-os/.claude/skills/site-preview/` and `showcase-entry/`

### Hub-and-spoke coordination

Alfred reports to **Kiki** (franzy's chief of staff, keeper of franzy-os). Cross-project context and life-level tasks flow through Kiki:
- `/srv/files/projects/franzy-os/KIKI.md`

## Project structure

```
htoomaungmaung.github.io/
├── _config.yml             # Jekyll configuration
├── _posts/                 # Blog posts (if any)
├── showcase/               # Portfolio projects
├── css/                    # Custom styles
└── js/                     # Custom scripts
```

**Note:** Alfred (franzy's career + learning + portfolio agent) owns this site. Alfred's definition lives in the franzy-os repo at `/srv/files/projects/franzy-os/agents/alfred.md`

## Milestones

### Personal Site
- [x] Main page
- [x] Work experiences with timeline style (bottom to top, latest on top)
- [x] Projects section
- [x] Education section
- [x] Jekyll on GitHub Pages
- [x] Futuristic design with lightweight animation
- [x] Auto chatbot integration
- [ ] Displaying previous projects with tag filtering

### Enhancement
- [ ] Contact form submission
- [ ] Google analytics
- [ ] Site optimizations
- [ ] Documentation to build similar website

## References

- [Jekyll Docs](https://jekyllrb.com/docs/)
- [Reference site](https://agusmakmun.github.io/)
- [Design sketch](https://drive.google.com/file/d/1r-V5hHKJJMJNQkvkq55q3B3q66pFhToe/view?usp=sharing)

## For Cursor and other AI tools

When using Cursor or other AI coding assistants on this project:
1. Read the franzy-os agent manifest at `/srv/files/projects/franzy-os/projects/README.md`
2. Load Alfred's portable definition at `/srv/files/projects/franzy-os/agents/alfred.md`
3. Refer to Jekyll documentation for site structure

The portfolio site is owned by Alfred as part of the career + learning + portfolio domain. For site-specific conventions and Alfred's capabilities, see the franzy-os project.
