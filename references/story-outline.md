# Story outline — OpenAI Dev Day 2025
PROJECT_ID: 20261003-b4fb

## Chosen narrative angle (Gate decision — proxy-approved)
**Lead with Apps in ChatGPT + Apps SDK and AgentKit as the platform shift for builders; treat Codex GA and new API models (GPT-5 Pro, Sora 2, mini models) as capability expands.**

### Rationale
- Primary sources and the official community inventory put **Apps** and **AgentKit** at the front of the “how builders ship” change: new runtime/distribution inside ChatGPT, and new production plumbing for agents (SRC01, SRC02, SRC05).
- Codex GA and model/API drops are important but **incremental capability** on top of an already-moving coding/agent stack (SRC03, SRC06–SRC08) — they answer “what can the agent/app do?” more than “where does software live?”
- Audience (builders/PMs who missed the event) needs a tight visual story, not a transcript — four keynote pillars (C18) map cleanly to ≤10 scenes.
- Strongest evidence-backed option vs alternatives:
  - *Models-first* rejected: GPT-5 Pro / Sora 2 are shipped API facts but don’t alone explain the “ChatGPT becomes a place software runs” thesis (SRC12/SRC13 framing).
  - *Codex-only* rejected: GA is real, but secondary to the platform surface shift for product builders.

### Thesis (one sentence)
**DevDay 2025 shifted OpenAI from “call a model” toward “ship products into ChatGPT and run agents with production tooling,” while Codex GA and new API models expand what those products can do.**

### Audience takeaway
Missed the livestream? Remember three moves: **(1) Apps SDK = build inside ChatGPT**, **(2) AgentKit = build/deploy/optimize agents**, **(3) Codex + new models = stronger build/media/reasoning fuel** — and always separate **preview/beta** from **GA/API shipped**.

| Beat | Audience question | Takeaway | Evidence / claim IDs | Why this beat follows |
|---|---|---|---|---|
| Hook | Why care if I skipped DevDay? | ChatGPT is being positioned as a place software runs — not only a chatbot. | C01, C02, C18, C19 | Opens with the platform shift, not a laundry list |
| Context | What was the event frame? | Four pillars: Apps, Agents, Code, Models/API. | C01, C18 | Gives map before details |
| Explanation A | What’s new for product distribution? | Apps SDK (MCP-based preview) lets interactive apps live in ChatGPT. | C02, C03, C05 | First platform pillar |
| Evidence A | Prove it? | Partner demos: Coursera / Canva / Zillow patterns. | C04 | Concrete demos after abstract SDK |
| Explanation B | What’s new for agent shipping? | AgentKit bundles Builder, ChatKit, Guardrails, Evals, Connectors. | C06–C10 | Second platform pillar |
| Evidence B | What actually shipped vs beta? | Status chips: GA vs beta vs limited rollout. | C07–C10, C20 | Prevents overclaim |
| Capability | What about building software itself? | Codex is GA (+ Slack, SDK, admin). | C11–C13 | Third pillar |
| Capability expand | What model/API fuel dropped? | GPT-5 Pro, Sora 2(/Pro), image & realtime minis. | C15–C17 | Fourth pillar |
| Implications | So what do I build next? | Pick surface: ChatGPT app vs embeddable agent vs coding agent — match status maturity. | C19, C20 | Decision frame for builders |
| Takeaway | One line to remember? | Platform shift first; models amplify; label preview vs shipped. | C19, C20 | Close |

### Out of scope
- Full session-by-session transcript; hardware/Jony Ive speculation; exact live pricing tables (re-verify if shown); exhaustive partner list; post-2025 roadmap rumors.
