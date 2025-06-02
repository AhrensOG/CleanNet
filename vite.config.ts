import { defineConfig } from 'vite';

export default defineConfig({
  preview: {
    allowedHosts: true,
    host: '0.0.0.0',
    port: 4321,
    strictPort: true,
  },
});