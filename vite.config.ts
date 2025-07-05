
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const plugins = [react()];
  
  // Only add componentTagger in development mode and if it's available
  if (mode === 'development') {
    try {
      const { componentTagger } = require("lovable-tagger");
      plugins.push(componentTagger());
    } catch (error) {
      // Silently continue if lovable-tagger is not available
      console.log("Development enhancement not available, continuing...");
    }
  }

  return {
    server: {
      host: "::",
      port: 8080,
    },
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    // Add build optimizations to prevent common npm issues
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          // Suppress certain warnings that can cause npm issues
          if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
            return;
          }
          warn(warning);
        }
      }
    },
    // Ensure compatibility with different node environments
    define: {
      global: 'globalThis',
    }
  };
});
