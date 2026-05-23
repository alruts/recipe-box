# recipe-box (Uppskriftabox)

A searchable recipe index built with [Eleventy](https://www.11ty.dev/) (11ty) v3.

## Prerequisites

- Node.js 20+

## Setup

```bash
npm install
```

## Commands

| Command | Description |
|---------|-------------|
| `npm start` | Start dev server with live reload |
| `npm run build` | Build static site to `_site/` |

## Project Structure

```
├── .eleventy.js          # Eleventy configuration
├── index.njk             # Homepage (recipe grid + fuzzy search)
├── _includes/recipe.njk  # Recipe page layout template
├── css/style.css         # Stylesheet
└── recipes/*.md          # Recipe markdown files (YAML front matter)
```

## Adding a Recipe

Create a new `.md` file in `recipes/` with YAML front matter:

```yaml
---
title: Recipe Name
description: Short description
tags:
  - tag1
  - tag2
---
```

The Markdown body becomes the recipe content (ingredients + instructions).

## Deployment

Pushes to `main` trigger a GitHub Actions workflow that builds and deploys to GitHub Pages.
