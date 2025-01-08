/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: '#131B22',
        secondary: '#0080CF',
        tertiary: '#9EDAFF',
      },
      backgroundImage:{
        'cv-image-frontpage': "url('./assets/cv-image-frontpage.jpg')",
        'cv-image-frontpage-dark': "url('./assets/cv-image-dark-frontpage.jpg')",
        'contact-image-frontpage': "url('./assets/contact-image-frontpage.jpg')",
        'contact-image-frontpage-dark': "url('./assets/contact-image-dark-frontpage.jpg')",
        'projects-image-frontpage': "url('./assets/projects-image-frontpage.jpg')",
        'projects-image-frontpage-dark': "url('./assets/projects-image-dark-frontpage.jpg')"
      }
    },
  },
  plugins: [],
}

