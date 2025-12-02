# Match Maker Web

A modern, production-ready React application for connecting people through intelligent matching algorithms. Built with TypeScript, Vite, and a feature-based architecture.

## Tech Stack

### Core

- **React 18** - Modern UI library with hooks and concurrent features
- **TypeScript 5.3** - Type-safe JavaScript with strict mode enabled
- **Vite 5** - Lightning-fast build tool and dev server with HMR

### Routing & State Management

- **React Router v6** - Declarative client-side routing
- **TanStack Query (React Query) v5** - Powerful async state management and server state caching

### Styling

- **Tailwind CSS 3.4.17** - Utility-first CSS framework
- **PostCSS** - CSS transformations and autoprefixer
- **react-icons** - Comprehensive icon library (FontAwesome, Material, etc.)

### Testing

- **Jest 29** - Delightful JavaScript testing framework
- **React Testing Library 14** - Simple and complete testing utilities
- **ts-jest** - TypeScript preprocessor for Jest
- **jsdom** - JavaScript implementation of web standards

### Code Quality

- **ESLint 8** - Pluggable linting utility with TypeScript support
- **Prettier 3** - Opinionated code formatter
- **TypeScript ESLint** - TypeScript-specific linting rules

## Project Architecture

This project uses a **feature-based architecture** for better scalability and maintainability:

```
match-maker-web/
├── src/
│   ├── features/          # Feature modules (self-contained functionality)
│   │   ├── auth/          # Authentication feature
│   │   │   ├── features/  # Sub-features (login, signup)
│   │   │   └── auth.routes.ts
│   │   └── entrypoint/    # Landing/home pages
│   ├── shared/            # Shared code across features
│   │   ├── api/           # API clients and utilities
│   │   ├── constants/     # App constants (routes, config)
│   │   ├── types/         # Shared TypeScript types
│   │   └── utils/         # Utility functions
│   ├── ui/                # Reusable UI components
│   │   ├── components/    # Generic components
│   │   └── icons/         # Icon exports and custom icons
│   ├── testing/           # Test utilities and mocks
│   │   └── mocks/         # Mock data and factories
│   ├── App.tsx            # Root component with route definitions
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles (Tailwind directives)
├── public/                # Static assets
├── .vscode/               # VSCode workspace settings
│   ├── settings.json      # Editor config (format on save, etc.)
│   └── extensions.json    # Recommended extensions
└── Configuration files

```

### Path Aliases

The project uses TypeScript path aliases for cleaner imports:

- `@web/*` → `./src/*`
- `@shared/*` → `./src/shared/*`
- `@features/*` → `./src/features/*`
- `@ui/*` → `./src/ui/*`

Example:

```typescript
import { routeNames } from "@shared/constants/routes/routes";
import Home from "@features/entrypoint/Home";
```

## Getting Started

### Prerequisites

- **Node.js 18+** and npm
- A modern browser (Chrome, Firefox, Safari, Edge)

### Installation

```bash
npm install
```

### Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The app will automatically open at [http://localhost:3000](http://localhost:3000)

### Building for Production

Build the application with type checking:

```bash
npm run build
```

This runs TypeScript compiler checks (`tsc`) and creates an optimized production build in the `dist/` directory.

Preview the production build locally:

```bash
npm run preview
```

## Available Scripts

### Development

- `npm run dev` - Start development server on port 3000
- `npm run preview` - Preview production build locally

### Testing

- `npm test` - Run all tests once
- `npm run test:watch` - Run tests in watch mode (re-runs on file changes)
- `npm run test:coverage` - Generate test coverage report
  - Coverage thresholds: 70% (branches, functions, lines, statements)

### Code Quality

- `npm run lint` - Check for linting errors
- `npm run lint:fix` - Automatically fix linting errors
- `npm run format` - Format all code with Prettier
- `npm run format:check` - Check if code is formatted correctly
- `npm run type-check` - Run TypeScript type checking without emitting files

### Build

- `npm run build` - Type-check and build for production

## Code Quality & Formatting

### ESLint Configuration

Located in [.eslintrc.cjs](.eslintrc.cjs):

- Extends recommended rules for React and TypeScript
- Prettier integration (no conflicts)
- React Hooks rules enforcement
- React Refresh/HMR compatibility warnings
- Unused variables with `_` prefix are allowed

### Prettier Configuration

Located in [.prettierrc](.prettierrc):

- Semicolons: **Yes**
- Quotes: **Double quotes**
- Tab width: **2 spaces**
- Trailing commas: **ES5 compatible**
- Print width: **100 characters**
- Line endings: **LF (Unix)**

### VSCode Integration

Format on save is enabled for:

- TypeScript/TSX files
- JavaScript/JSX files
- JSON files
- CSS files

ESLint auto-fix is **disabled** on save to prevent conflicts with Prettier.

## Testing

### Running Tests

```bash
# Run all tests
npm test

# Watch mode (great for TDD)
npm run test:watch

# With coverage report
npm run test:coverage
```

### Test Structure

- Tests are co-located with source files using `.test.tsx` or `.spec.tsx` extensions
- Test utilities and mocks are in `src/testing/`
- Jest uses jsdom environment for DOM testing
- React Testing Library encourages testing user interactions over implementation details

### Coverage Requirements

The project enforces 70% minimum coverage across:

- Branch coverage
- Function coverage
- Line coverage
- Statement coverage

## TypeScript Configuration

### Compiler Options

- **Target**: ES2020
- **Module**: ESNext with bundler resolution
- **Strict mode**: Enabled
- **JSX**: react-jsx (new JSX transform)
- Unused locals/parameters are flagged as errors
- All switch statements must handle fallthrough cases

### Path Mapping

TypeScript paths are configured in [tsconfig.json](tsconfig.json) and resolved by Vite in [vite.config.ts](vite.config.ts).

## Environment & Deployment

### Development Server

- Port: 3000
- Auto-opens browser on start
- Hot Module Replacement (HMR) enabled
- Fast Refresh for React components

### Production Build

- Output directory: `dist/`
- Sourcemaps enabled
- Optimized bundle with code splitting
- Tree-shaking for unused code removal

## Contributing

### Before Committing

1. Ensure all tests pass: `npm test`
2. Check types: `npm run type-check`
3. Lint your code: `npm run lint`
4. Format your code: `npm run format`

Or run them all at once:

```bash
npm run type-check && npm run lint && npm test && npm run format
```

### Code Style

- Use functional components with hooks
- Prefer named exports for components
- Keep components focused and single-purpose
- Use TypeScript types/interfaces over any
- Follow the feature-based folder structure
- Use path aliases (@shared, @features, etc.)

## Features in Development

Currently, the application includes:

- ✅ Home/Landing page with feature highlights
- ✅ React Router setup with typed routes
- ✅ Tailwind CSS styling system
- 🚧 Authentication (login/signup screens in progress)
- 🚧 User matching algorithm
- 🚧 Profile management
- 🚧 Real-time notifications (TanStack Query ready)

## License

This project is private and proprietary.

## Support

For issues or questions, please contact the development team.
