import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  build: {
    rollupOptions: {
      external: ['astro:hooks', 'astro:server']
    }
  }
});
