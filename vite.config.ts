import { reactRouter } from "@react-router/dev/vite";
import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {

  return {
    // Ensure reactRouter() runs first so its framework context is set up before others
    plugins: [
      cloudflare({ viteEnvironment: { name: "ssr" } }),
        // Let React Router establish framework context first
        reactRouter(),
        tailwindcss(),
        tsconfigPaths(),
    ],
    // No extra SSR/resolve/define overrides – let plugins handle it
    server: {
      port: 5180,
    },
  };
});
/*
export default defineConfig({
  plugins: [
    tailwindcss(),
    reactRouter(),
    tsconfigPaths(),
    // Cloudflare plugin after RR to prevent id/transform mismatches
    //cloudflare({ viteEnvironment: { name: "ssr" } }),
  ],
});
*/