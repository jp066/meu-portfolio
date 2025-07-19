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
      },
    },
  },
  plugins: [],
};
