# Brand assets go here

The site currently draws the logo and mascot as hand-built inline SVG
placeholders (`components/ui/logo-mark.tsx`, `components/ui/mascot.tsx`) in
the brand blue (`#1242C8`) with a small red cape accent — there is nothing
broken today. When the real brand assets (based on the existing 슈퍼사장 app
icon — royal blue, white, red cape, friendly superhero character) are ready,
drop them in here:

| File to add            | What it is                                   | Suggested size          |
| ----------------------- | --------------------------------------------- | ------------------------ |
| `logo.png`               | Full wordmark/lockup (mark + "슈퍼사장" text)  | ~600×160, transparent bg |
| `app-icon.png`           | Square app icon (source for favicon etc.)      | 512×512, transparent bg  |
| `mascot.png`             | The full character illustration                | ~800×800, transparent bg |

## How to wire one up

Both `LogoMark` and `Mascot` already accept an optional `src` prop — pass it
and the real artwork replaces the inline placeholder automatically, no other
changes needed.

```tsx
// components/layout/site-header.tsx — swap the logo mark
<LogoMark src="/brand/app-icon.png" className="size-8" />

// Anywhere the mascot appears (hero, AI briefing card, final CTA, empty states)
<Mascot src="/brand/mascot.png" className="size-14" />
```

Search the codebase for `<Mascot` and `<LogoMark` to find every call site —
there are only a handful, all inside `components/screens/*` and
`components/sections/*`.

For the actual browser favicon, replace `app/icon.svg` directly (or add
`app/icon.png` / `app/apple-icon.png` per Next.js's
[metadata file conventions](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons))
using `app-icon.png` as the source.
