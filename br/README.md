# Boopathiraja N - Portfolio Website

A modern, responsive portfolio website built with React.js showcasing professional skills, projects, and experience.

## 🚀 Features

- **Modern React Architecture**: Built with React 18 for optimal performance and maintainability
- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Animations**: Scroll-triggered animations and micro-interactions
- **Component-Based Structure**: Modular components for easy maintenance
- **Optimized Performance**: Efficient rendering and state management
- **SEO Friendly**: Proper meta tags and semantic HTML structure

## 🛠️ Technologies Used

- **Frontend**: React 18, JavaScript ES6+
- **Styling**: CSS3 with CSS Variables
- **Animations**: Intersection Observer API, CSS Transitions
- **Icons**: Font Awesome 6
- **Build Tool**: Create React App

## 📁 Project Structure

```
br/
├── public/
│   └── index.html          # Main HTML template
├── src/
│   ├── App.js             # Main App component
│   ├── App.css            # Global styles
│   └── index.js           # React entry point
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js 14+ installed
- npm or yarn package manager

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm start
   ```

3. **Open your browser**:
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 📱 Sections

1. **Hero**: Introduction with typing animation and social links
2. **About**: Personal information and background
3. **Skills**: Technical skills categorized by domain
4. **Projects**: Featured projects with descriptions and tags
5. **Internship**: Professional experience timeline
6. **Education**: Academic background
7. **Contact**: Contact form and information

## 🎨 Customization

### Updating Portfolio Data

All portfolio content is managed through the `portfolioData` object in `src/App.js`:

```javascript
const portfolioData = {
  hero: { /* Hero section data */ },
  about: { /* About section data */ },
  skills: { /* Skills section data */ },
  projects: [/* Projects array */],
  internships: [/* Internships array */],
  education: [/* Education array */],
  contact: { /* Contact section data */ }
};
```

### Styling

- **Colors**: Modify CSS variables in `src/App.css`:
  ```css
  :root {
    --dark-clr: #081d2c;
    --second-dark-clr: #112e42;
    --text-clr: #f1f5f9;
    --light-text-clr: #c9d9e8;
    --global-clr: #0fbbff;
    --btn-clr: #ff499e;
  }
  ```

- **Typography**: Font family is set to "Jost" via Google Fonts

## 🚀 Deployment

### Build for Production

1. **Create optimized build**:
   ```bash
   npm run build
   ```

2. **Deploy the `build` folder** to your hosting service

### Recommended Hosting Services

- **Netlify**: Drag and drop the build folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use `gh-pages` branch
- **AWS S3**: Static website hosting

## 🔧 Performance Optimizations

- **Code Splitting**: React.lazy for dynamic imports
- **Image Optimization**: Compressed images with proper formats
- **Bundle Analysis**: Optimized dependencies
- **Caching**: Proper cache headers for static assets
- **Minification**: Production builds are automatically minified

## 📊 Key Improvements from Static Version

1. **Component Architecture**: Modular, reusable components
2. **State Management**: Efficient React state handling
3. **Performance**: Virtual DOM and optimized re-renders
4. **Maintainability**: Cleaner code structure
5. **Scalability**: Easy to add new sections/features
6. **Development Experience**: Hot reload and developer tools
7. **Build Process**: Automated optimization and bundling

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**:
   ```bash
   lsof -ti:3000 | xargs kill -9
   ```

2. **Dependencies not installing**:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Build fails**:
   - Check for syntax errors in components
   - Ensure all imports are correct
   - Clear cache: `npm start -- --reset-cache`

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Contact

- **Email**: boopathiraja26ab@gmail.com
- **LinkedIn**: [Boopathiraja N](https://www.linkedin.com/in/boopathi-raja-306523392)
- **GitHub**: [@boopathiraja26](https://github.com/boopathiraja26)

---

Built with ❤️ using React.js
