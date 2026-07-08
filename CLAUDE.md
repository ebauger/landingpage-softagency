You are able to use the Svelte MCP server, where you have access to comprehensive Svelte 5 and SvelteKit documentation. Here's how to use the available tools effectively:

## Available MCP Tools:

### 1. list-sections

Use this FIRST to discover all available documentation sections. Returns a structured list with titles, use_cases, and paths.
When asked about Svelte or SvelteKit topics, ALWAYS use this tool at the start of the chat to find relevant sections.

### 2. get-documentation

Retrieves full documentation content for specific sections. Accepts single or multiple sections.
After calling the list-sections tool, you MUST analyze the returned documentation sections (especially the use_cases field) and then use the get-documentation tool to fetch ALL documentation sections that are relevant for the user's task.

### 3. svelte-autofixer

Analyzes Svelte code and returns issues and suggestions.
You MUST use this tool whenever writing Svelte code before sending it to the user. Keep calling it until no issues or suggestions are returned.

### 4. playground-link

Generates a Svelte Playground link with the provided code.
After completing the code, ask the user if they want a playground link. Only call this tool after user confirmation and NEVER if code was written to files in their project.

## i18n rules (Paraglide JS)

Every page must be available in both `en` and `fr` through Paraglide:

- All user-facing strings go through `m.*()` functions imported from `$paraglide/messages.js` — never hardcode display text in components or routes, and never create per-route translation modules (the old `[lang]/en.ts`/`fr.ts` pattern is banned).
- Every message key must exist in BOTH `messages/en.json` and `messages/fr.json`, with matching `{placeholder}` names. Values must be plain strings (no arrays, objects, or numbers — they crash the Paraglide compiler; flatten lists into 1-based indexed keys like `faqs_questions_1_summary`).
- `pnpm check:i18n` (also runs as part of `pnpm check`) enforces the message-file rules; run it after touching `messages/*.json`.
- New pages live under `src/routes/[lang]/` so they are served at `/en/...` and `/fr/...`. SSR locale is handled by `paraglideMiddleware` in `src/hooks.server.ts`; it only wraps `/en` and `/fr` paths — keep it that way so non-localized paths are not redirected.
- Dev-only pages (not exposed in production) must guard their server `load` with `if (!dev) error(404)` using `dev` from `$app/environment`, like `sourcing-talents`.
