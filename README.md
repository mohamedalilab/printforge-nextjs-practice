# PrintForge

A Next.js learning project built while following **Bob Ziroll's Next.js course on Scrimba**. PrintForge is a product showcase app that demonstrates core Next.js concepts including file-based routing, nested layouts, image optimization, and custom fonts.

---

## 🚀 Features

- **Product Listing Page** — Browse all available print products in a clean grid layout
- **Single Product Page** — Dedicated detail view for each product with full info
- **Nested Layouts** — Shared layout components using Next.js App Router layout nesting
- **Next.js Image Optimization** — Images served via `next/image` for performance and lazy loading
- **Custom Fonts** — Fonts loaded and optimized automatically with `next/font`

## 🧠 Concepts Practiced

| Concept | Description |
|---|---|
| App Router | File-based routing using the `app/` directory |
| Dynamic Routes | `[id]` segment for individual product pages |
| Nested Layouts | Shared UI wrapping specific route segments |
| `next/image` | Optimized image loading with automatic resizing |
| `next/font` | Font optimization with zero layout shift |

---

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

You can start editing by modifying `app/page.tsx`. The page auto-updates as you save.

---
