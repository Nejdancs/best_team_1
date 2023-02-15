import { defineConfig } from 'vite';
import multi from '@rollup/plugin-multi-entry';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      input: ['./src/**.html'],
    },
    outDir: '../dist',
  },
  plugins: [multi(), injectHTML(), FullReload(['./src/**/**.html'])],
});
