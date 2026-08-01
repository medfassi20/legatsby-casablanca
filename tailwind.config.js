/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Vert extrait de ta photo (vert olive / sauge)
        olive: {
          50: '#f4f6f1',
          100: '#e4e9dc',
          500: '#556b2f', // Couleur exacte de ta photo
          800: '#35431d',
          900: '#263015',
        },
        // Nuances de beige pour le fond et les cartes
        beige: {
          50: '#FAF7F2',  // Fond principal très doux
          100: '#F3EDE2', // Cartes / Sections secondaires
          200: '#E7DCB9', // Bordures et lignes
          900: '#2C261E', // Textes foncés
        },
      },
    },
  },
  plugins: [],
};
