/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        plexMono: ['IBM Plex Mono', 'monospace'],
        pro: ['Prompt', 'sans-serif'],
      },
      boxShadow: {
        btnShadow: '8px 4px 0 rgb(251 146 60)',
      },
      colors: {
        shade: '#002238',
      },
    },
  },
  plugins: [],
};
