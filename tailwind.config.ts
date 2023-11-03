import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'bannerBg':'url("https://res.cloudinary.com/vuelosflights/image/upload/v1698725461/Flights/r9xuh2adyhmjavz4dkzq.jpg")'
      },
      backgroundColor:{
        'filtro': 'rgba(7, 7, 7, 0.295)',
        'robotize': '#441eae'
      },
      textColor: {
        'robotize': "#441eae"
      },
      height: {
        '60': '60vh',
        '70': '70vh'
      },
      borderColor: {
        'robotize': '#441eae'
      },
      fontSize: {
        '100': '100px'
      }
    },
  },
  plugins: [],
}
export default config
