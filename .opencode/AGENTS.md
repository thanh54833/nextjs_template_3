# AGENTS.md — .opencode/

## OVERVIEW
OpenCode AI assistant config.

## ROOT STRUCTURE
```
.opencode/
├── package.json           # @opencode-ai/plugin: 1.2.27
├── bun.lock               # Bun package manager
├── commands/              # Command files
│   └── agent_self_improment.md    # AGENTS.md accuracy update
└── skills/               # Project skills
```

## COMMANDS
| Command | Purpose |
|---------|---------|
| /agent-self-improvement | Deep scan + update toàn bộ AGENTS.md — verify từng claim với code thực tế |

## SKILLS

### Project Skills
| Skill | Purpose |
|-------|---------|
| senior-frontend | React/Next.js/TypeScript frontend dev |
| senior-backend | NodeJS/Express/Go/Python/Postgres backend dev |
| frontend-design | UI generation, production-grade interfaces |
| ui-ux-pro-max | UI/UX design intelligence with searchable DB |
| docs-writer | Full technical documentation from codebase |
| prd-writer | PRD draft from UX wireframe |
| skill-creator | Create/modify/optimize skills |
| wf-writer | Lo-Fi wireframes in pure HTML/CSS |
| excalidraw-diagram | Excalidraw JSON for visual arguments |
| openapi-spec-generation | OpenAPI 3.1 specs |
| convert-to-html | URL → standalone HTML in _stores |

## WHERE TO LOOK
| Task | Location |
|------|----------|
| Custom commands | .opencode/commands/*.md |
| Skill definition | .opencode/skills/*/SKILL.md |

## CONVENTIONS
- Trigger phrase matches → skill auto-loaded
- Each skill = directory with SKILL.md (definition)
- Commands: Markdown files in commands/
- Package manager: Bun (bun.lock)

## NOTES
- Some skills have MCP scripts for extended functionality
