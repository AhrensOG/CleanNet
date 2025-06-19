// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import alpinejs from "@astrojs/alpinejs";
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.clean-net.ch",
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [alpinejs(), sitemap()],
  adapter: node({
    mode: "standalone",
  }),
});
