import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://mydearben.github.io/lifewithben/",
  build: {
    outDir: "build",
  },
});
