// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        skyrim: {
          DEFAULT: '#8da4b3', // Icy blue-gray
          dark: '#2f3e46',
          light: '#cdd9df',
        },
        oblivion: {
          DEFAULT: '#d6c2a8', // Ancient parchment beige
          dark: '#5c4b3b',
          light: '#f0e7dc',
        },
        morrowind: {
          DEFAULT: '#a0713f', // Warm brown-gold
          dark: '#4b321f',
          light: '#dbc0a4',
        },
        fallout3: {
          DEFAULT: '#94a293', // Military green-gray
          dark: '#2d332f',
          light: '#c6d0c0',
        },
        falloutnv: {
          DEFAULT: '#a0603d', // Mojave dust orange
          dark: '#4a2e1d',
          light: '#e4c3aa',
        },
        fallout4: {
          DEFAULT: '#91a5b3', // Cool steel blue
          dark: '#293742',
          light: '#c5d5e0',
        },
        starfield: {
          DEFAULT: '#1a1a1a', // Jet black with blue accent options
          dark: '#000000',
          light: '#2e2e2e',
          accent: '#73b1ff', // Starfield blue
        },
      },
    },
  },
  plugins: [],
}
