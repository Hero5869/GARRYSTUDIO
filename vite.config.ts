
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
    // Enhanced build optimizations for compatibility
    build: {
      target: 'es2015', // More compatible target
      rollupOptions: {
        onwarn(warning, warn) {
          // Suppress certain warnings that can cause npm issues
          if (warning.code === 'MODULE_LEVEL_DIRECTIVE') {
            return;
          }
          if (warning.code === 'SOURCEMAP_ERROR') {
            return;
          }
          warn(warning);
        }
      }
    },
    // Enhanced compatibility settings
    define: {
      global: 'globalThis',
    },
    optimizeDeps: {
      include: ['react', 'react-dom'],
      esbuildOptions: {
        target: 'es2015'
      }
    },
    // Suppress engine warnings
    logLevel: mode === 'development' ? 'info' : 'warn'
  };
});
