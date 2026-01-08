import { defineConfig } from 'vite'

import { resolve } from 'path'

export default defineConfig({
  base: './', 
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        location: resolve(__dirname, 'location.html'),
        programme: resolve(__dirname, 'programme.html'),
        travel: resolve(__dirname, 'travel.html'),
        details: resolve(__dirname, 'details.html'),
        stay: resolve(__dirname, 'stay.html'),
      },
    },
  }
})
