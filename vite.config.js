import { defineConfig } from "vite";

export default defineConfig({
  preview: {
    // Permitir tu dominio para la preview
    allowedHosts: ["clean-net.ch", "www.clean-net.ch", "localhost"],
    port: 4321, // o el puerto que usás
  },
});
