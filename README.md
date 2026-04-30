# Adoption Myths — React Frontend

A React/TypeScript frontend for [adoption-myths.com](https://adoption-myths.com) — a resource dedicated to addressing common misconceptions about adoption.

**Live Site:** [adoption-myths.com](https://adoption-myths.com)  
**API:** [adoptionmyths-api-node](https://github.com/phantom42/adoptionmyths-api-node)

---

## Tech Stack

- **Framework:** React
- **Language:** TypeScript
- **Build Tool:** Vite
- **Deployment:** Vercel

---

## Features

- Fetches a randomized myth list from the API on load, enabling consistent next/previous navigation across the full dataset
- Main page displays a single random myth with previous/next navigation
- "What's The Answer?" page with static content
- Full myth listing page displaying all available myths
- 🚧 Additional features in progress

---

## Project Structure

```
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page-level components
│   └── main.tsx        # App entry point
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- A running instance of the [Adoption Myths API](https://github.com/phantom42/adoptionmyths-api-node) (or use the live API)
- An `X-API-Key` for API access

### Installation

```bash
git clone https://github.com/phantom42/adoptionmyths-react.git
cd adoptionmyths-react
npm install
```

### Environment Variables

Create a `.env` file in the root:

```env
VITE_API_URL=https://adoptionmyths-api-node.vercel.app
VITE_API_KEY=your_api_key_here
```

### Run Locally

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## Status

This project is under active development. Current work is focused on expanding page content and improving the overall user experience.

---

## Related

- [adoptionmyths-api-node](https://github.com/phantom42/adoptionmyths-api-node) — Node.js/Express/TypeScript API backend
