// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import alpinejs from "@astrojs/alpinejs";
import node from "@astrojs/node";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [alpinejs()],
  adapter: node({
    mode: "standalone",
  }),
});
