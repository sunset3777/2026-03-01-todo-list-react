import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "VITE_");
  const deployTarget = env.VITE_DEPLOY_TARGET; // "gh-pages" | "vercel"

  return {
    plugins: [react()],
    base: deployTarget === "gh-pages" ? "/2026-03-01-todo-list-react/" : "/",
  };
});