module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: ['Fira Code', 'monospace'],
      secondary: ['Rajdhani', 'sans-serif'],
      tertiary: ['DM Sans', 'sans-serif'],
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#025c16',
      },
      backgroundImage: {
        site: "url('./assets/site-bg2.png')",
        services: "url('./assets/services.png')",
        'services-masked': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('./assets/services.png')",
        'services-faded': "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.6)), url('./assets/services.png')",
      },
      backgroundSize: {
        'cover-dimmed': 'cover',
        'contain-centered': 'contain',
      },
      backgroundPosition: {
        'center-top': 'center top',
        'center-bottom': 'center bottom',
      },
      opacity: {
        '15': '0.15',
        '25': '0.25',
        '35': '0.35',
        '85': '0.85',
      },
    },
  },
  plugins: [],
};
