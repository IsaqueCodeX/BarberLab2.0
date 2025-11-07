# AI Development Rules for BarberLab Project

This document provides guidelines for the AI assistant to follow when developing and modifying this application. The goal is to maintain code quality, consistency, and adherence to the established technology stack.

## Tech Stack Overview

The application is built with a modern, component-based architecture. Key technologies include:

- **Framework**: React (v18) with TypeScript.
- **Build Tool**: Vite for fast development and optimized builds.
- **Styling**: Tailwind CSS for all styling, following a utility-first approach.
- **UI Components**: A custom component library built with **shadcn/ui**, which uses Radix UI primitives.
- **Routing**: React Router (`react-router-dom`) for all client-side navigation.
- **Data Fetching**: TanStack Query (`@tanstack/react-query`) for managing server state, caching, and data fetching.
- **Forms**: React Hook Form (`react-hook-form`) for building forms, paired with Zod for schema validation.
- **Icons**: `lucide-react` for a consistent and clean icon set.
- **Notifications**: `sonner` for toast notifications.

## Library Usage and Coding Rules

To ensure consistency, please adhere to the following rules:

### 1. UI and Components

- **Primary UI Library**: **Exclusively use shadcn/ui components** from the `src/components/ui` directory. These are pre-built and styled to match the application's design system.
- **Custom Components**: When a required component doesn't exist in `shadcn/ui`, create a new, reusable component in the `src/components/` directory. Style it using Tailwind CSS.
- **Styling**: **Do not use plain CSS files or CSS-in-JS libraries** (like styled-components). All styling must be done with Tailwind CSS classes. Use the `cn` utility function in `src/lib/utils.ts` to conditionally apply or merge classes.
- **Icons**: Only use icons from the `lucide-react` package.

### 2. Routing and Navigation

- **Router**: All routing is managed by `react-router-dom`.
- **Route Definitions**: All page routes must be defined within the `<Routes>` component in `src/App.tsx`.
- **Navigation Links**: Use the `<Link>` component from `react-router-dom` or the custom `NavLink` component in `src/components/NavLink.tsx` for internal navigation. Use standard `<a>` tags only for external links.

### 3. State Management and Data

- **Server State**: Use `@tanstack/react-query` for fetching, caching, and synchronizing data from APIs.
- **Client State**: For component-level or simple client-side state, use React's built-in hooks (`useState`, `useReducer`, `useContext`). Avoid introducing complex global state managers like Redux or Zustand unless the application's complexity demands it.

### 4. Forms

- **Form Logic**: Use `react-hook-form` for handling all form state, validation, and submissions.
- **Validation**: Use `zod` to define validation schemas for forms. Connect Zod schemas to `react-hook-form` using `@hookform/resolvers`.

### 5. File Structure

- **Pages**: Components that represent a full page/route should be placed in `src/pages/`.
- **Reusable Components**: General-purpose, reusable components go in `src/components/`.
- **Hooks**: Custom hooks should be placed in `src/hooks/`.
- **Utilities**: General utility functions should be placed in `src/lib/`.
- **Assets**: Static assets like images and fonts belong in `src/assets/`.

By following these rules, we can ensure the codebase remains clean, maintainable, and consistent.