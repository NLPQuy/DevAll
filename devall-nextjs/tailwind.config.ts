import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Canadian Maple Theme
        maple: {
          red: '#FF0000',      // Canada Flag Red
          dark: '#D32F2F',     // Dark Maple Red
          light: '#FF6B6B',    // Light Maple Red
          cream: '#FFF8F0',    // Maple Cream
        },
        canadian: {
          white: '#FFFFFF',
          red: '#FF0000',
          border: '#E5E5E5',
        },
      },
      backgroundImage: {
        'maple-gradient': 'linear-gradient(135deg, #FF0000 0%, #D32F2F 100%)',
        'maple-radial': 'radial-gradient(circle, rgba(255,0,0,0.1) 0%, rgba(211,47,47,0.05) 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'fall': 'fall 10s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fall: {
          '0%': { transform: 'translateY(-100px) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateY(100vh) rotate(360deg)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
