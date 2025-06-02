import { defineConfig } from "vite";

export default defineConfig({
  preview: {
    allowedHosts: ["clean-net.ch", "www.clean-net.ch", "localhost"],
    host: "0.0.0.0",
    port: 4321,
    strictPort: true,
  },
});
