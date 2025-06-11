// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'
// import tailwindcss from '@tailwindcss/vite'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react(),tailwindcss(),],
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Si sirves desde la raíz, déjalo en "/"
  // Si lo haces desde un subdirectorio, pon aquí la ruta, p.ej.: "/mi-app/"
  base: '/',

  plugins: [
    react(),
    tailwindcss(),
  ],

  // Carpeta donde Vite deposita el build final
  build: {
    outDir: 'dist',
    // limpia 'dist' antes de cada build
    emptyOutDir: true,
  },

  // (Opcional) Si quieres un fallback SPA en dev:
  server: {
    // Vite ya trae historyApiFallback, pero aquí lo dejamos explícito
    historyApiFallback: true,
  },

  // Asegúrate de que todo lo que pongas en `public/`
  // (por ejemplo tu archivo `_redirects`) se copie de forma
  // inalterada al directorio de salida.
  publicDir: 'public',
})
