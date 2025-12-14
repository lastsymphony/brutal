import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://yourusername.github.io/brutalist-astro',
  build: {
    format: 'static',
    trailingSlash: 'always'
  },
  integrations: []
});
