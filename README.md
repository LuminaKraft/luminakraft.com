# LuminaKraft Website

<div align="center">
  
  <img src="https://www.luminakraft.com/imgs/favicon.webp" alt="LuminaKraft" width="25%">
  
  [![Astro](https://img.shields.io/badge/Astro-FF5D01?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  
  *A modern, multilingual website for LuminaKraft Studios - Your gateway to immersive Minecraft server experiences*
</div>

## ✨ Features

- **📱 Responsive Design**: Fully responsive layout that works on all devices
- **🌐 Multilingual Support**: Complete English and Spanish support with seamless language switching
- **🎮 Server Showcase**: Dynamic pages for each server with detailed information
- **📊 Player Leaderboards**: Real-time statistics display for active servers
- **🚀 Performance Optimized**: Fast loading and high performance scores
- **🔄 No-reload Language Switching**: Change languages without page refresh
- **🎯 SEO Friendly**: Optimized for search engines with static site generation
- **🎨 Animated UI**: Smooth transitions and visual effects with native CSS
- **📦 Modular Structure**: Reusable components for maintainable code

## 🛠️ Technologies

- **[Astro](https://astro.build/)**: High-performance static site generator
- **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org/)**: Typed JavaScript for better development
- **[CSS Animations](https://developer.mozilla.org/es/docs/Web/CSS/animation)**: Native CSS animations for maximum compatibility

## 🗂️ Project Structure

```
/
├── public/                    # Static assets and data
│   ├── data/                  # Server-specific data
│   │   ├── servers/           # Server data directories
│   │   │   ├── onepieceworld/ # One Piece World server data
│   │   │   │   └── leaderboard.json
│   │   └── workers.json       # Team member data
│   └── imgs/                  # Images and other assets
│       ├── servers/           # Server-specific images
│       │   ├── ancientkraft/  # AncientKraft server images
│       │   ├── onepieceworld/ # One Piece World server images
│       │   └── pt-the_full_course/ # Pizza Tower server images
│       └── services/          # Service page images
├── src/
│   ├── components/            # Reusable UI components
│   │   ├── HeroSection.astro
│   │   ├── ParallaxStars.astro
│   │   ├── RotatingWords.astro
│   │   └── ServerCard.astro
│   ├── data/                  # JSON data files
│   │   └── servers.json       # Server information
│   ├── i18n/                  # Translation files
│   │   ├── es.json            # Spanish translations
│   │   └── en.json            # English translations
│   ├── layouts/               # Page templates
│   │   └── BaseLayout.astro   # Main site layout with navigation
│   ├── pages/                 # Site pages
│   │   ├── index.astro        # Homepage
│   │   ├── servicios.astro    # Services page
│   │   └── servers/[slug].astro # Dynamic server pages
│   └── utils/                 # Utility functions
│       └── i18n.ts            # Internationalization utilities
├── astro.config.mjs           # Astro configuration
├── tailwind.config.mjs        # Tailwind configuration
└── tsconfig.json              # TypeScript configuration
```

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/LuminaKraft/luminakraft.com.git

# Navigate to the project directory
cd luminakraft.com

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🌐 Translation System

Our robust translation system features:

### 🔍 Automatic Language Detection
- Detects browser language automatically
- Selects Spanish for any 'es-*' locale, English for others

### 💾 Preference Persistence
- User language choices stored in cookies (1-year expiration)
- Maintains preferences across browsing sessions

### ⚡ Dynamic Updates
- All UI elements update immediately when language changes
- Page reload not required for language switching

### 🏷️ Translation Structure
- Text loaded from JSON files in `src/i18n/`
- Translatable elements use data attributes:
  - `data-i18n`: For text content
  - `data-i18n-tooltip`: For tooltips/hover text

## 📊 Leaderboard System

Server leaderboards display player statistics with these features:

- **Real-time Data**: Shows current player rankings and stats
- **Pagination**: Controls for viewing multiple pages of players
- **Expandable Cards**: Click on player cards to see detailed statistics
- **Tooltips**: Hover descriptions for all statistics
- **Multilingual**: All elements properly translate with language changes
- **Responsive**: Adapts to all screen sizes

## 🎮 Server Management

- **Conditional UI**: Different UI elements for active vs. closed servers
- **Disabled Downloads**: Installer downloads automatically disabled for closed servers
- **Server Status**: Clear indicators when servers are closed or inactive
- **Dynamic Paths**: Server-specific data loaded from standardized paths

## 📝 Recent Updates

### Translation Improvements
- 🔄 Changed from localStorage to cookies for better language persistence
- 🌐 Improved browser language auto-detection
- 🏷️ Added data-i18n attributes to ensure dynamic text updates

### Leaderboard Enhancements
- 📊 Fixed JSON data loading from correct paths
- 💬 Added tooltips for all player statistics
- 🔄 Ensured leaderboard text updates with language changes
- 🌐 Fixed translation issues with pagination indicators

### Technical Improvements
- ✅ Fixed TypeScript typings in multiple components
- ⚙️ Updated configuration for better module resolution
- 🛠️ Refactored i18n utilities for more consistent behavior
- 🔧 Optimized tooltip handling using centralized translation system

## 🧩 Adding New Servers

To add a new server:

1. Add server data to `src/data/servers.json`
2. Add translation keys to both `es.json` and `en.json`
3. Add server-specific images to `public/imgs/`
4. For leaderboards, add data to `public/data/servers/{serverId}/leaderboard.json`

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

<div align="center">
  Made with ❤️ by <a href="https://luminakraft.com">LuminaKraft Studios</a>
</div>
