import { defineConfig } from 'vite';
import path from 'path';
import fs from 'fs';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';

const findByExtension = (dir, ext) => {
  const matchedFiles = [];

  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fileExt = path.extname(file);

    if (fileExt === `.${ext}`) {
      matchedFiles.push(`${dir}/${file}`);
    }
  }

  return matchedFiles;
};

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      input: findByExtension('./src', 'html'),
    },
    outDir: '../dist',
  },
  plugins: [injectHTML(), FullReload(['./src/**/**.html'])],
});
