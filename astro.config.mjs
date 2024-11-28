import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    react({}),    // React debe ser pasado como un objeto (aunque no tiene opciones)
    tailwind({}),  // Tailwind también debe ser pasado como un objeto
  ],
});
