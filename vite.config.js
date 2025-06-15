import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  define: {
    global: "window",
  }, // stompjs 사용시 필요
  plugins: [react()],

  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
