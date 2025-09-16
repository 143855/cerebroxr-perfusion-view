# CerebroXR - Medical AR/VR Imaging Platform

## 🚀 Quick Setup Guide

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn package manager

### Installation & Setup

1. **Clone or download the project files**
2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - Navigate to `http://localhost:8080`
   - The app will automatically reload when you make changes

### 📁 Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # Reusable UI components (shadcn)
│   ├── Navigation.tsx   # Navigation bar
│   ├── HeroSection.tsx  # Landing page hero
│   └── FeaturesSection.tsx # Features showcase
├── pages/               # Application pages
│   ├── Index.tsx        # Main landing page
│   ├── Login.tsx        # Sign-in page  
│   └── NotFound.tsx     # 404 page
├── assets/              # Images and static files
├── lib/                 # Utility functions
├── index.css           # Global styles & design system
└── main.tsx            # App entry point
```

### 🎨 Design System

The entire styling is built with a custom design system in `src/index.css`:

- **Pure Black Background** with vibrant medical-tech colors
- **CSS Custom Properties** for consistent theming
- **Glass Morphism Effects** for modern UI
- **Gradient System** for medical blue → AR purple → tech cyan
- **Responsive Design** with mobile-first approach

### 🔧 Key Technologies

- **React 18** - Component framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Vite** - Fast build tool
- **Shadcn/ui** - Component library
- **Lucide React** - Icons

### 📱 Available Routes

- `/` - Main landing page with hero and features
- `/login` - Sign-in page with social authentication
- `*` - 404 Not Found page

### 🎯 Key Features

1. **Responsive Navigation** with mobile menu
2. **Animated Hero Section** with particle effects
3. **Features Showcase** with AR/VR medical technology
4. **Modern Login Page** with glass morphism design
5. **Dark Theme** optimized for medical professionals

### 🛠️ Customization

**Colors:** Edit `src/index.css` CSS custom properties
**Components:** Modify files in `src/components/`
**Pages:** Update files in `src/pages/`
**Assets:** Add images to `src/assets/`

### 🚀 Build for Production

```bash
npm run build
```

Built files will be in the `dist/` folder ready for deployment.

### 📱 Mobile-First Design

The design is fully responsive and optimized for:
- Desktop computers
- Tablets
- Mobile devices
- Medical workstations

### 🎨 Design Philosophy

- **Medical Trust:** Professional appearance for healthcare
- **Future Tech:** AR/VR visual elements
- **Accessibility:** High contrast, readable fonts
- **Performance:** Optimized animations and images

Visit `/login` to see the sign-in page with the new black background theme!