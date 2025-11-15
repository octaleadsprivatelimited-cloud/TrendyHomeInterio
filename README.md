# TrendyHomeInterio - Interior Design Website

A modern, responsive React application for TrendyHomeInterio - your trusted partner for beautiful home interiors. This project features a beautiful UI with smooth animations, interactive components, and a fully responsive design.

## Features

- 🎨 Modern and responsive design
- 🚀 React Router for navigation
- ✨ Smooth animations and transitions
- 📱 Mobile-friendly responsive layout
- 🎯 Reusable component architecture
- 🎭 Interactive elements (forms, modals, sliders)
- 🎪 SCSS for styling
- 🔄 State management with React Hooks

## Project Structure

```
interior/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── HeroSection/
│   │   ├── ServiceCard/
│   │   └── Footer/
│   ├── pages/
│   │   ├── Home/
│   │   ├── Services/
│   │   ├── DesignIdeas/
│   │   ├── AboutUs/
│   │   └── Contact/
│   ├── styles/
│   │   └── index.scss
│   ├── assets/
│   ├── utils/
│   ├── App.js
│   └── index.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd interior
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner

## Pages

- **Home** (`/`) - Hero section, services overview, features, and CTA
- **Services** (`/services`) - Detailed service listings and process overview
- **Design Ideas** (`/design-ideas`) - Portfolio gallery with category filters
- **About Us** (`/about-us`) - Company story, team, and values
- **Contact** (`/contact`) - Contact form and information

## Components

### Navbar
- Fixed navigation bar with smooth scroll effects
- Mobile-responsive hamburger menu
- Active route highlighting

### HeroSection
- Image slider with auto-play
- Call-to-action buttons
- Smooth transitions

### ServiceCard
- Reusable service display cards
- Hover effects and animations
- Image overlays

### Footer
- Social media links
- Quick navigation links
- Contact information

## Styling

The project uses SCSS for styling with:
- Modular component styles
- Responsive design with mobile-first approach
- CSS animations and transitions
- Consistent color scheme and typography

## Deployment

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Install Netlify CLI (if not already installed):
```bash
npm install -g netlify-cli
```

3. Deploy:
```bash
netlify deploy --prod
```

Follow the prompts to link your site to a Netlify account and deploy.

### Deploy to Vercel

1. Install Vercel CLI (if not already installed):
```bash
npm install -g vercel
```

2. Deploy:
```bash
vercel
```

Follow the prompts to complete the deployment.

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. The `build` folder contains the production-ready files. Upload the contents of this folder to your hosting provider.

## Technologies Used

- React 18.2.0
- React Router DOM 6.20.0
- SCSS/SASS
- HTML5
- CSS3

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact: hello@trendyhomeinterio.com

