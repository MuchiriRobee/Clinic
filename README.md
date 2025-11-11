# Teach2Give Clinic Website

This is a simple, responsive clinic website built with modern web technologies. It features pages for Home, About, Services, Doctors, and Contact, with reusable components, routing, and a contact form with toasts. The site is optimized for performance using Vite and styled with Tailwind CSS.

## Tech Stack

- **Frontend Framework**: React (with TypeScript)
- **Build Tool**: Vite (for fast development and builds)
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS (with PostCSS and Autoprefixer)
- **Icons**: Lucide React
- **Toasts/Notifications**: Sonner
- **Other**: ESLint + Prettier (for code quality)

## Project Structure

The project follows a clean, modular structure:

```
.
├── public/
│   ├── hero.jpg             # Hero background image
│   └── vite.svg             # Default Vite asset (optional)
├── src/
│   ├── assets/              # Images, fonts, etc. (empty by default)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx   # Navigation bar with mobile toggle
│   │   │   └── Footer.tsx   # Site footer
│   │   ├── ui/
│   │   │   ├── Button.tsx   # Reusable button component
│   │   │   ├── Card.tsx     # Reusable card component
│   │   │   └── Input.tsx    # Reusable input component
│   │   └── sections/
│   │       ├── Hero.tsx     # Hero section with background image
│   │       ├── ServicesSection.tsx  # Services grid
│   │       └── DoctorsSection.tsx   # Doctors grid
│   ├── pages/
│   │   ├── Home.tsx         # Home page (uses Hero, ServicesSection, DoctorsSection)
│   │   ├── About.tsx        # About page with mission, stats, etc.
│   │   ├── Services.tsx     # Detailed services list
│   │   ├── Doctors.tsx      # Detailed doctors profiles
│   │   └── Contact.tsx      # Contact form with validation and toasts
│   ├── App.tsx              # Main app with routing and layout
│   ├── index.css            # Global Tailwind CSS styles
│   ├── main.tsx             # Entry point (renders App with Toaster for Sonner)
│   └── vite-env.d.ts        # Vite TypeScript env declarations
├── index.html               # Main HTML entry
├── package.json             # Dependencies and scripts
├── postcss.config.js        # PostCSS config for Tailwind
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.json            # TypeScript config for app
├── tsconfig.node.json       # TypeScript config for Vite
├── vercel.json              # Vercel deployment config (for routing)
├── vite.config.ts           # Vite configuration
└── README.md                # This file
```

- **components/**: Reusable UI elements, layouts, and sections.
- **pages/**: Page-level components routed via React Router.
- **public/**: Static assets like images (e.g., hero.jpg for background).

## Setup and Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/clinic-website.git
   cd clinic-website
   ```

2. **Install Dependencies**:
   Use npm (or your preferred manager: yarn, pnpm, bun).
   ```bash
   npm install
   ```

   Key dependencies installed:
   - `react`, `react-dom`
   - `react-router-dom`
   - `lucide-react` (icons)
   - `sonner` (toasts)
   - Dev: `vite`, `@vitejs/plugin-react`, `tailwindcss`, `postcss`, `autoprefixer`, `typescript`, `eslint`, `prettier`

3. **Add Assets** (Optional):
   - Place `hero.jpg` in `public/` for the Hero section background.
   - Add doctor photos to `public/doctors/` and update paths in `Doctors.tsx` or `DoctorsSection.tsx`.

## Running the App Locally

1. **Start Development Server**:
   ```bash
   npm run dev
   ```

   - Opens at `http://localhost:5173`.
   - Features: Hot Module Replacement (HMR), React Fast Refresh.
   - Mobile testing: Resize browser or use dev tools emulator.

2. **Lint and Format Code** (Optional):
   ```bash
   npm run lint     # Check for lint errors
   npm run format   # Auto-format code with Prettier
   ```

3. **Preview Production Build Locally**:
   ```bash
   npm run build    # Builds to dist/
   npm run preview  # Serves dist/ at http://localhost:4173
   ```

## Building for Production

```bash
npm run build
```

- Outputs optimized files to `dist/` (minified, tree-shaken, with code splitting).
- Targets modern browsers; add `@vitejs/plugin-legacy` for older support.

## Deployment to Vercel

Vercel auto-detects Vite + React projects and handles builds seamlessly. Follow these steps for deployment:

1. **Push to GitHub**:
   Ensure your repo is on GitHub (public or private).

2. **Sign Up/Log In to Vercel**:
   - Go to [vercel.com](https://vercel.com).
   - Sign in with GitHub.

3. **Import Project**:
   - Click "New Project" > Import your GitHub repo.
   - Vercel detects: Framework = Vite, Build = `npm run build`, Output = `dist`.

4. **Configure**:
   - Add environment variables if needed (e.g., `VITE_API_URL`).
   - Deploy!

5. **Custom Config** (`vercel.json` already included):
   - Handles client-side routing: Rewrites all paths to `/index.html` to fix 404 on refresh.

6. **Auto-Deploys**:
   - Every `git push` to `main` triggers a new production deploy.
   - Branches/PRs get preview URLs.

7. **Custom Domain** (Optional):
   - In Vercel Dashboard > Settings > Domains > Add your domain.
   - Update DNS records (A/CNAME) via your registrar.

8. **Troubleshooting**:
   - Build fails? Check logs; ensure `npm run build` works locally.
   - Styles missing? Confirm `tailwind.config.js` and `postcss.config.js` are committed.

Your site will be live at `https://your-project-name.vercel.app`.

## Contributing

- Fork the repo.
- Create a branch: `git checkout -b feature/new-feature`.
- Commit changes: `git commit -m "Add new feature"`.
- Push: `git push origin feature/new-feature`.
- Open a Pull Request.


