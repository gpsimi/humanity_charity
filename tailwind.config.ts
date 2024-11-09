import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        serif: ['var(--font-shippori-mincho)'],
        sans: ['var(--font-work-sans)'],
        mono: ['var(--font-sue-ellen)'],
      },
      colors: {
        orange: {
          1: '#FF6D6D',
          2: '#E85353',
        },
        green: {
          1: '#77D7D3',
          2: '#4BC9C4',
          3: '#126360',
          4: '#384C56', 
        },
        dark: {
          1: '#2E4049',
          2: '#727272',
          3: '#202D33',
          
        },
        input:{
          1: "#909090",
          2: "#F5F5F5"
        },
        gray: {
          1: '#F1EEEC',
          2: '#ECF1F0',
          3: '#F2F2F2',
          4: '#C5CECC',
          5: '#DEF1F0',
        },
        border: {
          1: '#D0D0D0',
          2: "#E7E7E7"
        },
      },
      // borderRadius: {
      //   lg: "var(--radius)",
      //   md: "calc(var(--radius) - 2px)",
      //   sm: "calc(var(--radius) - 4px)",
      // },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },

      backgroundImage: {
        "hero": "url('/images/home/hero/hero-background.png')",
        "herocardImage": "url('/images/home/hero/hero-card.png')",
        "homeVolunteers": "url('/images/home/home-volunteer.png')",
        "homeBlog": "url('/images/home/home-blog.png')",
        "aboutNewsletter": "url('/images/about/newsletter.png')",
        "TeamSubscribe": "url('/images/team/team-subscribe.png')",
        "FaqImage": "url('/images/faq/image.png')",
        "blog": "url('/images/blog/blog-hero.png')",

        
      },

    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config