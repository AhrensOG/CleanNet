import { defineConfig } from "vite";

export default defineConfig({
  preview: {
    allowedHosts: ["clean-net.ch", "www.clean-net.ch", "localhost"],
    port: 4321,
  },
});
