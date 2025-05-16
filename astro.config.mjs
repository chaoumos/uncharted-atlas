import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: 'https://uncharted-atlas.example.com',
  integrations: [tailwind()],
  output: 'static',
});