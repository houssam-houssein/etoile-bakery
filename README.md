# L'ETOILE Bakery Website

A modern, responsive website for L'ETOILE Bakery - an authentic Lebanese bakery crafting traditional delights since 2015.

## Features

- 🏠 **Home Page** - Beautiful hero section with bakery story and highlights
- 📋 **Menu Page** - Comprehensive menu with multiple categories in Arabic and English
- 📞 **Contact Page** - Contact information and message form
- 📱 **Fully Responsive** - Optimized for mobile, tablet, and desktop
- 🎨 **Modern Design** - Clean, elegant design with smooth animations
- 🛠️ **Admin Dashboard** - Add, edit, or remove menu items with global Firebase storage (falls back to local storage if not configured)

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
- **Global Storage**: Menu changes are saved to Firebase Firestore, making them visible to all users globally. If Firebase is not configured, changes will be stored locally only.

### Admin Login

- The dashboard requires a password; by default it is `et0ile2025`.
- Change it by setting `VITE_ADMIN_PASSWORD` in a `.env` file:
  ```bash
  echo "VITE_ADMIN_PASSWORD=supersecret" > .env
  ```
- After authenticating, sessions persist in the browser (via `sessionStorage`) until you log out or close the tab/browser.

### Firebase Setup (For Global Menu Storage)

To enable global menu storage so admin changes are visible to all users:

1. **Create a Firebase Project**:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add project" and follow the setup wizard
   - Enable **Firestore Database** (choose "Start in test mode" for development)

2. **Get Your Firebase Configuration**:
   - Go to Project Settings (gear icon) > General tab
   - Scroll down to "Your apps" section
   - Click the web icon (`</>`) to add a web app
   - Copy the Firebase configuration object

3. **Add Environment Variables**:
   Create a `.env` file in the project root with your Firebase config:
   ```bash
   VITE_FIREBASE_API_KEY=your-api-key
   VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your-project-id
   VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
   VITE_FIREBASE_APP_ID=your-app-id
   ```

4. **Set Firestore Security Rules** (Important for production):
   - Go to Firestore Database > Rules
   - Update rules to allow read/write access (for production, add authentication):
   ```javascript
   rules_version = '2';
   service cloud.firestore {
     match /databases/{database}/documents {
       match /menu/{document} {
         allow read: if true;  // Anyone can read menu data
         allow write: if false;  // Only authenticated admins can write (implement auth later)
       }
     }
   }
   ```
   **Note**: For now, you can use test mode, but implement proper authentication for production.

5. **For GitHub Pages Deployment**:
   - Add the same environment variables to your GitHub repository:
     - Go to Settings > Secrets and variables > Actions
     - Add each `VITE_FIREBASE_*` variable as a repository secret
   - Update `.github/workflows/deploy.yml` to use these secrets in the build step

**Note**: If Firebase is not configured, the app will work with local storage only (changes will be per-browser). The app gracefully falls back to localStorage if Firebase is unavailable.

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

