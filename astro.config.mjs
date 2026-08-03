import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    "/join": "https://tally.so/r/9qYXlE",
    "/recrutement": "https://tally.so/r/9qYXlE"
  },
  integrations: [icon(), mdx()]
});
