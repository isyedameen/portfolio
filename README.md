# Syed Ameen - Personal Portfolio

A modern, responsive, and interactive personal portfolio website built to showcase projects, skills, and professional experience. Features a premium glassmorphic UI design, smooth animations, and a centralized data structure for easy customization.

## Key Features

- **Premium Glassmorphic UI:** A custom design system ("Stitch") featuring translucent cards, deep gradients, and glowing accents.
- **Fluid Animations:** Scroll-triggered reveals, parallax mouse tracking in the hero section, and interactive hover effects powered by Framer Motion.
- **Scroll-Spy Navigation:** A dynamic floating navbar that updates its active state based on the current scroll position.
- **Project Showcase:** A dedicated portfolio section with category filtering, search functionality, and detailed project cards.
- **Interactive Timeline:** A vertically animated timeline component to showcase education and professional experience.
- **Working Contact Form:** Fully functional contact form integrated with the Web3Forms API.
- **Theme Toggle:** Built-in support for switching between light and dark modes.
- **Responsive Design:** Carefully optimized to look stunning and remain accessible on mobile, tablet, and desktop displays.

## Technology Stack

- **Framework:** [React v19](https://react.dev/)
- **Build Tool:** [Vite v8](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Routing:** React Router v7

## Project Structure

```text
src/
├── components/
│   ├── layout/      # Navbar, Footer, and main Layout wrapper
│   ├── sections/    # Main page sections (Hero, About, Projects, etc.)
│   └── ui/          # Reusable UI components (Buttons, Cards, Badges)
├── data/            # Centralized configuration (portfolioData.js, projectsData.js)
├── hooks/           # Custom React hooks (e.g., useScrollSpy)
├── utils/           # Helper functions
├── App.jsx          # Root component
├── index.css        # Tailwind directives and custom theme variables
└── main.jsx         # Application entry point
```

## Prerequisites

Before running the project, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Version 18 or higher recommended)
- npm (comes with Node.js)

## Installation & Running the Project

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173`.

## Available Scripts

In the project directory, you can run:

- `npm run dev`: Starts the development server.
- `npm run build`: Bundles the app into static files for production in the `dist` folder.
- `npm run preview`: Bootstraps a local static web server that serves the files from `dist`.
- `npm run lint`: Runs ESLint to find and fix problems in your code.

## Configuration & Usage

The portfolio content is heavily modularized to prevent hardcoding inside components. You can customize the entire website by modifying the files in the `src/data/` directory:

- **`src/data/portfolioData.js`**: Edit your personal information, social links, skills, experience timeline, and contact details.
- **`src/data/projectsData.js`**: Add, remove, or modify the projects displayed in the portfolio grid.

*Note: The downloadable resume file is served statically from the `public/` directory (e.g., `public/resume.pdf`).*

## API Integration

The contact form uses **Web3Forms** for submission. 
Currently, it uses an access key embedded in `src/components/sections/Contact.jsx`. For production environments, it is highly recommended to secure this key using Environment Variables.

## Deployment

Because this is a static Vite application, it can be deployed easily to any static hosting service like Vercel, Netlify, or GitHub Pages.

1. Build the project:
   ```bash
   npm run build
   ```
2. Deploy the generated `dist/` directory to your preferred hosting provider.

## Screenshots

**Requires User Input** *(Add screenshots of the Hero section, Projects grid, and mobile layout here).*

## License

**Requires User Input** *(Specify the open-source license, e.g., MIT, if applicable).*

## Author

- **Syed Ameen** 
- [GitHub](https://github.com/isyedameen)
