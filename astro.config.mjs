import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  buildOptions: {
    site: 'https://soccerpro.netlify.app/',  // Set to your site's URL or production URL
  },
});
