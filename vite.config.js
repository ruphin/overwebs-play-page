import { defineConfig } from 'vite';
import { readFileSync } from 'node:fs';

const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url), 'utf-8'));
const external = Object.keys(pkg.dependencies || {});

export default defineConfig({
  server: { port: 5000 },
  build: {
    sourcemap: true,
    lib: {
      entry: 'src/overwebs-play-page.js',
      formats: ['es'],
      fileName: () => 'overwebs-play-page.js'
    },
    rollupOptions: {
      // Keep dependencies as imports so consumers share a single copy
      external: id => external.some(dep => id === dep || id.startsWith(`${dep}/`))
    }
  }
});
