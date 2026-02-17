import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  // base '/' works with custom domain (matiasdev.info)
  // if you ever remove the custom domain, change to '/portfolio/'
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        docs: resolve(__dirname, 'docs.html'),
      },
    },
  },
})
