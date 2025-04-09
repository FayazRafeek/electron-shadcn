import { defineConfig } from "vite";
import path from "path";
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config
export default defineConfig({
  plugins: [
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
      threshold: 10240,
      deleteOriginFile: false
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    }
  }
});
