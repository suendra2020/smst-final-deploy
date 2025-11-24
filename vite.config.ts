import { jsxLocPlugin } from "@builder.io/vite-plugin-jsx-loc";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime";

export default defineConfig({
  // If deploying to GitHub Pages or a subdirectory, replace "/" with "./"
  base: "/",

  root: path.resolve(import.meta.dirname, "client"),

  plugins: [
    react(),
    tailwindcss(),
    jsxLocPlugin(),
    vitePluginManusRuntime(),
  ],

  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@assets": path.resolve(import.meta.dirname, "client", "src", "assets"),
    },
  },

  build: {
    outDir: "../dist",   // cleaner & correct with custom root
    emptyOutDir: true,
  },

  server: {
    port: 3000,
    host: true,
  },
});
