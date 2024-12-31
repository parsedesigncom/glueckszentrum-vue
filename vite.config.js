import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools';
import path from "path";


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/assets/styles/variables.scss" as *;
          @use "@/assets/styles/mixins-text.scss" as *;
        `,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@font': path.resolve(__dirname, './src/fonts/'),
      '@img': path.resolve(__dirname, './src/assets/images/')
    }
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          // Prüfen, ob die Datei ein Font ist
          const fontExtensions = ['.woff', '.woff2', '.ttf', '.otf', '.eot'];
          const svgExtensions = ['.svg'];
          const imgExtensions = ['.gif', '.png', '.jpeg'];

          if (fontExtensions.some(ext => assetInfo.name.endsWith(ext))) {
            return 'assets/fonts/[name][extname]';
          }
          if (imgExtensions.some(ext => assetInfo.name.endsWith(ext))) {
            return 'assets/img/[name][extname]';
          }
          if (svgExtensions.some(ext => assetInfo.name.endsWith(ext))) {
            return 'assets/svg/[name][extname]';
          }

          // Standardmäßig in assets-Ordner ablegen
          return 'assets/[name][extname]';
        },
        // Optionale zusätzliche Struktur für JS und CSS
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
      },
    },
  }
})
