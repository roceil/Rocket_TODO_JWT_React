import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base:"/Rocket_TODO_JWT_React/",
  plugins: [react()],
});
