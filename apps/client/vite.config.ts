import { defineConfig } from "vite";
import { CLIENT_PORT } from "@tsxinsider/shared/src/constants/app-config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: CLIENT_PORT,
  },
  plugins: [react()],
});
