import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'; 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),svgr()],
  build:{
   outDir: 'dist',
   sourcemap:true,
   emptyOutDir: true,
   rollupOptions:{
      output: {
        entryFileNames:"[name].js",
        chunkFileNames:"[name].js",
        assetFileNames:"[name].[ext]"
      }
   }

  }
  
})
