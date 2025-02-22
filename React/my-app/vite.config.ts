import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    
  ],
  server:{
    cors:true,
    host:true,
    // allowedHosts: ['pug-bold-forcibly.ngrok-free.app'], // Add your allowed host here
  },
  build: {
    outDir: 'dist',
  }
  
  
})
