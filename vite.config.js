import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  base: "/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        index: resolve(process.cwd(), "index.html"),
        about: resolve(process.cwd(), "about.html"),
        deutschMitJitu: resolve(process.cwd(), "deutsch-mit-jitu.html"),
        founder: resolve(process.cwd(), "founder.html"),
        contact: resolve(process.cwd(), "contact.html"),
        privacy: resolve(process.cwd(), "privacy.html"),
        terms: resolve(process.cwd(), "terms.html")
      }
    }
  }
});
