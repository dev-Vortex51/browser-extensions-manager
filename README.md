# Browser Extensions Manager

A modern, responsive React application for managing browser extensions. Easily toggle, filter, and remove extensions in a clean, user-friendly interface. Built with TypeScript and Vite for fast development and performance.

![Preview](preview.jpg)

## Features

- **View all extensions**: See a list of all available browser extensions.
- **Filter by status**: Quickly filter extensions by All, Active, or Inactive.
- **Toggle activation**: Enable or disable extensions with a single click.
- **Remove extensions**: Delete extensions with confirmation prompts.
- **Dark/Light mode**: Seamless theme switching for comfortable viewing.

## Tech Stack

- [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for fast builds and hot reloads
- Context API for state management
- Custom, accessible UI components

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

```bash
# Clone the repository
git clone https://github.com/dev-Vortex51/browser-extensions-manager.git
cd browser-extensions-manager

# Install dependencies
npm install
# or
yarn install
```

### Running the App

```bash
npm run dev
# or
yarn dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

## Project Structure

```
├── public/           # Static assets
├── src/              # Source code
│   ├── Components/   # Reusable UI components
│   ├── Constants/    # Static data and helpers
│   ├── Contexts/     # React Context providers
│   ├── assets/       # Images and icons
│   └── App.tsx       # Main app component
├── design/           # Design reference images
├── index.html        # HTML entry point
├── package.json      # Project metadata and scripts
└── ...
```

## Customization

- Add or modify extensions in `src/Constants/helper.ts`.
- Update design assets in the `design/` or `assets/` folders.

## License

This project is licensed under the MIT License.

---

**Browser Extensions Manager** – Built for productivity and style.
