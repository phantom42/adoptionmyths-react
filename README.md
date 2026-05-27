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
- **Testing:** Vitest + React Testing Library

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
│   ├── api/
│   │   └── queries/    # API query functions (fetch wrappers)
│   ├── components/     # Reusable UI components
│   ├── pages/          # Page-level components
│   ├── test/
│   │   └── setup.ts    # Vitest global test setup
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

## Testing

Unit tests are written with [Vitest](https://vitest.dev/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

### Test Coverage

- **Components:** `Fact`, `Myth`, `DebunkedMyth`, `SocialLinks`
- **Pages:** `RandomMythPage`, `AllMyths`, `MythPage`
- **API queries:** `getAllMyths`, `getMyth`, `getRandomMyth`, `getRandomListOfMyths`

### Run Tests

```bash
# Run all tests (watch mode)
npm test

# Run with interactive UI
npm run test:ui
```

Tests use `jsdom` as the environment, `vi.mock` for module and `fetch` mocking, and `MemoryRouter` for components that use React Router links.

---

## Status

This project is under active development. Current work is focused on expanding page content and improving the overall user experience.

---

## Related

- [adoptionmyths-api-node](https://github.com/phantom42/adoptionmyths-api-node) — Node.js/Express/TypeScript API backend
