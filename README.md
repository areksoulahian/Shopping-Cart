# Shopping Cart

A React shopping cart application built with **React 18**, **Vite**, and **React Router**.

[Live Demo](https://areksoulahian.github.io/Shopping-Cart/)

## Features

- Browse products in a responsive grid
- Add/remove items from cart with real-time pricing
- Dedicated cart page with order summary
- Checkout flow with contact form and order confirmation
- Client-side routing via HashRouter (GH Pages compatible)
- Professional e-commerce UI with dark header, product cards, hero banner, and trust bar

## Tech Stack

- **React 18** with hooks (useState)
- **Vite** for fast development and builds
- **React Router v6** for hash-based routing
- **Vitest** for testing
- ES modules (type: module)

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Production build
npm test         # Run tests
npm run deploy   # Deploy to GitHub Pages
npm run preview  # Preview production build
```

## Deployment

The app is deployed to GitHub Pages via the `gh-pages` package:

```bash
npm run deploy
```

This builds the project and pushes the `build/` directory to the `gh-pages` branch.
