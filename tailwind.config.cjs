/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // New Color Palette
        primary: '#f97316',       // A vibrant orange
        secondary: '#ea580c',     // A slightly darker orange
        accent: '#38bdf8',        // A bright sky blue
        neutral: '#e0f2fe',       // A very light blue for backgrounds
        boxColor: '#f0f9ff',      // A light blue for boxes
        textPrimary: '#1e293b',   // Dark gray for primary text
        textSecondary: '#e67e22', // A lighter orange for secondary text
        deleteButton: '#000000', // Black for delete buttons
        
        // Original Color Palette (commented out)
        // primary: '#4ade80',       // A fresh, vibrant green
        // secondary: '#22c55e',     // A slightly darker green
        // accent: '#38bdf8',        // A bright sky blue
        // neutral: '#f0fdf4',       // A very light green for backgrounds
        // textPrimary: '#064e3b',   // Dark green for primary text
        // textSecondary: '#34d399', // A lighter green for secondary text
      },
      fontFamily: {
        'sans': ['"Poppins"', 'sans-serif'],
        'serif': ['"Merriweather"', 'serif'],
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
        '500': '500ms',
      },
    },
  },
  plugins: [],
}
