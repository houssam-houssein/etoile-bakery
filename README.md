# L'ETOILE Bakery Website

A modern, responsive website for L'ETOILE Bakery - an authentic Lebanese bakery crafting traditional delights since 1985.

## Features

- 🏠 **Home Page** - Beautiful hero section with bakery story and highlights
- 📋 **Menu Page** - Comprehensive menu with multiple categories in Arabic and English
- 📞 **Contact Page** - Contact information and message form
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🎨 **Modern Design** - Clean, elegant design with smooth animations
- 🛠️ **Admin Dashboard** - Add, edit, or remove menu items with local storage persistence

## Tech Stack

- **React 19** - Modern React with TypeScript
- **Vite** - Fast build tool and dev server
- **TypeScript** - Type-safe development
- **CSS3** - Custom styling with responsive design

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/etoile.git
cd etoile
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Building for Production

To create a production build that targets the GitHub Pages-ready `/docs` folder:

```bash
npm run build
```

The optimized assets will be written to `docs/` (already configured as the Pages source).

## Deployment

### GitHub Pages

**Using /docs folder method (Configured):**

1. Push your code to the `main` branch:
```bash
git add .
git commit -m "Initial commit"
git push -u origin main
```

2. Enable GitHub Pages:
   - Go to your repository **Settings > Pages**
   - Under "Source", select **"Deploy from a branch"**
   - Branch: Select **"main"**
   - Folder: Select **"/docs"**
   - Click **Save**

3. The workflow will automatically:
   - Build your project
   - Output to `/docs` folder
   - Commit and push the docs folder
   - Your site will be live in 1-2 minutes!

**Note:** The build outputs to the `docs` folder which is committed to your repository. The base path is set to `/etoile-bakery/` in `vite.config.ts`.

### Other Platforms

The `dist` folder can be deployed to:
- **Netlify** - Drag and drop the `dist` folder
- **Vercel** - Connect your GitHub repository
- **Any static hosting** - Upload the `dist` folder contents

## Project Structure

```
etoile/
├── src/
│   ├── assets/
│   │   └── images/          # Image assets
│   ├── components/          # React components
│   │   ├── AdminDashboard.tsx
│   │   ├── Contact.tsx
│   │   ├── Icons.tsx
│   │   └── Menu.tsx
│   ├── data/
│   │   └── menuData.ts      # Seed menu categories/items
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── style.css            # Global styles
├── docs/                    # Production build (committed for GitHub Pages)
├── public/                  # Static assets
└── package.json
```

## Admin Dashboard

- Visit `https://<your-user>.github.io/etoile-bakery/admin` (or `/admin` on localhost) to open the dashboard directly—there is no in-app link to keep it hidden from regular visitors.
- Manage items per category: search, edit inline, delete, or add new entries in both Arabic and English.
- All edits persist locally via `localStorage`, so refreshing the page keeps your latest changes.

### Admin Login

- The dashboard requires a password; by default it is `et0ile2025`.
- Change it by setting `VITE_ADMIN_PASSWORD` in a `.env` file:
  ```bash
  echo "VITE_ADMIN_PASSWORD=supersecret" > .env
  ```
- After authenticating, sessions persist in the browser (via `sessionStorage`) until you log out or close the tab/browser.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## License

This project is private and proprietary.

## Contact

For questions or support, please contact the bakery directly.

---

© 2024 L'ETOILE Bakery. All rights reserved.

