// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://www.hrafn-library.com',

  trailingSlash: 'never',

  output: 'static',

  compressHTML: true,

  prefetch: { prefetchAll: true, defaultStrategy: 'hover' },

  build: {
    inlineStylesheets: 'always',
    assets: '_assets',
  },

  vite: {
    build: {
      cssMinify: 'lightningcss',
    },
  },

  devToolbar: { enabled: false },
});
