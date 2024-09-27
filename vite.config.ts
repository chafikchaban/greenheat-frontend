import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // support `describe`, `test` etc. globally, 
    // so you don't need to import them every time
    globals: true,
    // run tests in jsdom environment
    environment: "jsdom",
    // global test setup
    setupFiles: "/.tests/setup.ts",
  },
  preview: {
    port: 4200,
    strictPort: true,
   },
   server: {
    port: 4200,
    strictPort: true,
    host: true,
   },
})
