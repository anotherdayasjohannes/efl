module.exports = {
  content: [
    './*.html',
    './_includes/**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: { 
        sans: ['Inter', 'sans-serif'] 
      },
      colors: { 
        'white': '#ffffff', 
        'light-grey': '#c2c2c2', 
        'middle-grey': '#666666', 
        'dark-grey': '#333333', 
        'orange': '#d04227', 
        'light-blue': '#cdebee', 
        'green': '#78b5a1', 
        'puder': '#fdebd6', 
        'curry': '#eab257', 
        'dark-blue': '#3c5067', 
        'blue-gray': '#518299', 
        'middle-green': '#88c0b1', 
        'light-green': '#c5e0d7', 
        'supportive-green': '#edf4e5', 
        'beige': '#DEA363', 
        'yellow-light': '#f5cc7e' 
      },
      // Hinzugefügt, um das Hero-Bild per CSS-Klasse zu ermöglichen
      backgroundImage: {
        'hero-bg': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/media/hero.png')",
      }
    }
  },
  plugins: [],
}