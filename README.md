# Personal Website

Personal portfolio and blog built with Next.js, featuring a projects showcase and MDX-powered blog with syntax highlighting.

## Tech Stack

- **Framework:** Next.js 16 (App Router, static export)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Blog:** MDX via `next-mdx-remote`, syntax highlighting via Shiki
- **Parsing:** gray-matter for frontmatter

## Features

- **Home** — intro and social links
- **Blog** — MDX posts with code syntax highlighting
- **Projects** — curated project showcase
- **Contact** — contact page

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build   # produces static output in /out
```

## Project Structure

```
src/
  app/              # Next.js App Router pages
  components/       # Shared UI components
  constants/        # Site config (projects, links, profile)
  lib/              # Blog file reading utilities
content/
  blog/             # MDX blog posts
```
