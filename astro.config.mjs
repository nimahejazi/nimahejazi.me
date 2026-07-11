// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://nimahejazi.me",
  vite: {
    // `@tailwindcss/vite` types lag Astro's bundled Vite; the build is unaffected.
    plugins: [tailwindcss()],
  },
});
