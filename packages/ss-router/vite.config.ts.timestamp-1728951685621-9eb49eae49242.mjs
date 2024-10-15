// packages/ss-router/vite.config.ts
import { nxCopyAssetsPlugin } from "file:///Users/harlenalvarez/Development/mono/quicksketch/node_modules/@nx/vite/plugins/nx-copy-assets.plugin.js";
import { nxViteTsPaths } from "file:///Users/harlenalvarez/Development/mono/quicksketch/node_modules/@nx/vite/plugins/nx-tsconfig-paths.plugin.js";
import react from "file:///Users/harlenalvarez/Development/mono/quicksketch/node_modules/@vitejs/plugin-react/dist/index.mjs";
import * as path from "path";
import { defineConfig } from "file:///Users/harlenalvarez/Development/mono/quicksketch/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/harlenalvarez/Development/mono/quicksketch/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/harlenalvarez/Development/mono/quicksketch/packages/ss-router";
var vite_config_default = defineConfig({
  root: __vite_injected_original_dirname,
  cacheDir: "../../node_modules/.vite/packages/ss-router",
  plugins: [
    react(),
    nxViteTsPaths(),
    nxCopyAssetsPlugin(["*.md"]),
    dts({
      entryRoot: "src",
      tsconfigPath: path.join(__vite_injected_original_dirname, "tsconfig.lib.json")
    })
  ],
  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },
  // Configuration for building your library.
  // See: https://vitejs.dev/guide/build.html#library-mode
  build: {
    outDir: "../../dist/packages/ss-router",
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true
    },
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: "src/index.ts",
      name: "ss-router",
      fileName: "index",
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: ["react", "react-dom", "react/jsx-runtime"]
    }
  },
  test: {
    watch: false,
    globals: true,
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    reporters: ["default"],
    coverage: {
      reportsDirectory: "../coverage/packages/ss-router",
      provider: "v8"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsicGFja2FnZXMvc3Mtcm91dGVyL3ZpdGUuY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2hhcmxlbmFsdmFyZXovRGV2ZWxvcG1lbnQvbW9uby9xdWlja3NrZXRjaC9wYWNrYWdlcy9zcy1yb3V0ZXJcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9oYXJsZW5hbHZhcmV6L0RldmVsb3BtZW50L21vbm8vcXVpY2tza2V0Y2gvcGFja2FnZXMvc3Mtcm91dGVyL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9oYXJsZW5hbHZhcmV6L0RldmVsb3BtZW50L21vbm8vcXVpY2tza2V0Y2gvcGFja2FnZXMvc3Mtcm91dGVyL3ZpdGUuY29uZmlnLnRzXCI7Ly8vIDxyZWZlcmVuY2UgdHlwZXM9J3ZpdGVzdCcgLz5cbmltcG9ydCB7IG54Q29weUFzc2V0c1BsdWdpbiB9IGZyb20gJ0BueC92aXRlL3BsdWdpbnMvbngtY29weS1hc3NldHMucGx1Z2luJztcbmltcG9ydCB7IG54Vml0ZVRzUGF0aHMgfSBmcm9tICdAbngvdml0ZS9wbHVnaW5zL254LXRzY29uZmlnLXBhdGhzLnBsdWdpbic7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICByb290OiBfX2Rpcm5hbWUsXG4gIGNhY2hlRGlyOiAnLi4vLi4vbm9kZV9tb2R1bGVzLy52aXRlL3BhY2thZ2VzL3NzLXJvdXRlcicsXG5cbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgbnhWaXRlVHNQYXRocygpLFxuICAgIG54Q29weUFzc2V0c1BsdWdpbihbJyoubWQnXSksXG4gICAgZHRzKHtcbiAgICAgIGVudHJ5Um9vdDogJ3NyYycsXG4gICAgICB0c2NvbmZpZ1BhdGg6IHBhdGguam9pbihfX2Rpcm5hbWUsICd0c2NvbmZpZy5saWIuanNvbicpLFxuICAgIH0pLFxuICBdLFxuXG4gIC8vIFVuY29tbWVudCB0aGlzIGlmIHlvdSBhcmUgdXNpbmcgd29ya2Vycy5cbiAgLy8gd29ya2VyOiB7XG4gIC8vICBwbHVnaW5zOiBbIG54Vml0ZVRzUGF0aHMoKSBdLFxuICAvLyB9LFxuXG4gIC8vIENvbmZpZ3VyYXRpb24gZm9yIGJ1aWxkaW5nIHlvdXIgbGlicmFyeS5cbiAgLy8gU2VlOiBodHRwczovL3ZpdGVqcy5kZXYvZ3VpZGUvYnVpbGQuaHRtbCNsaWJyYXJ5LW1vZGVcbiAgYnVpbGQ6IHtcbiAgICBvdXREaXI6ICcuLi8uLi9kaXN0L3BhY2thZ2VzL3NzLXJvdXRlcicsXG4gICAgZW1wdHlPdXREaXI6IHRydWUsXG4gICAgcmVwb3J0Q29tcHJlc3NlZFNpemU6IHRydWUsXG4gICAgY29tbW9uanNPcHRpb25zOiB7XG4gICAgICB0cmFuc2Zvcm1NaXhlZEVzTW9kdWxlczogdHJ1ZSxcbiAgICB9LFxuICAgIGxpYjoge1xuICAgICAgLy8gQ291bGQgYWxzbyBiZSBhIGRpY3Rpb25hcnkgb3IgYXJyYXkgb2YgbXVsdGlwbGUgZW50cnkgcG9pbnRzLlxuICAgICAgZW50cnk6ICdzcmMvaW5kZXgudHMnLFxuICAgICAgbmFtZTogJ3NzLXJvdXRlcicsXG4gICAgICBmaWxlTmFtZTogJ2luZGV4JyxcbiAgICAgIC8vIENoYW5nZSB0aGlzIHRvIHRoZSBmb3JtYXRzIHlvdSB3YW50IHRvIHN1cHBvcnQuXG4gICAgICAvLyBEb24ndCBmb3JnZXQgdG8gdXBkYXRlIHlvdXIgcGFja2FnZS5qc29uIGFzIHdlbGwuXG4gICAgICBmb3JtYXRzOiBbJ2VzJywgJ2NqcyddLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgLy8gRXh0ZXJuYWwgcGFja2FnZXMgdGhhdCBzaG91bGQgbm90IGJlIGJ1bmRsZWQgaW50byB5b3VyIGxpYnJhcnkuXG4gICAgICBleHRlcm5hbDogWydyZWFjdCcsICdyZWFjdC1kb20nLCAncmVhY3QvanN4LXJ1bnRpbWUnXSxcbiAgICB9LFxuICB9LFxuXG4gIHRlc3Q6IHtcbiAgICB3YXRjaDogZmFsc2UsXG4gICAgZ2xvYmFsczogdHJ1ZSxcbiAgICBlbnZpcm9ubWVudDogJ2pzZG9tJyxcbiAgICBpbmNsdWRlOiBbJ3NyYy8qKi8qLnt0ZXN0LHNwZWN9LntqcyxtanMsY2pzLHRzLG10cyxjdHMsanN4LHRzeH0nXSxcblxuICAgIHJlcG9ydGVyczogWydkZWZhdWx0J10sXG4gICAgY292ZXJhZ2U6IHtcbiAgICAgIHJlcG9ydHNEaXJlY3Rvcnk6ICcuLi9jb3ZlcmFnZS9wYWNrYWdlcy9zcy1yb3V0ZXInLFxuICAgICAgcHJvdmlkZXI6ICd2OCcsXG4gICAgfSxcbiAgfSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUNBLFNBQVMsMEJBQTBCO0FBQ25DLFNBQVMscUJBQXFCO0FBQzlCLE9BQU8sV0FBVztBQUNsQixZQUFZLFVBQVU7QUFDdEIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBTmhCLElBQU0sbUNBQW1DO0FBUXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLFVBQVU7QUFBQSxFQUVWLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLGNBQWM7QUFBQSxJQUNkLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztBQUFBLElBQzNCLElBQUk7QUFBQSxNQUNGLFdBQVc7QUFBQSxNQUNYLGNBQW1CLFVBQUssa0NBQVcsbUJBQW1CO0FBQUEsSUFDeEQsQ0FBQztBQUFBLEVBQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLGFBQWE7QUFBQSxJQUNiLHNCQUFzQjtBQUFBLElBQ3RCLGlCQUFpQjtBQUFBLE1BQ2YseUJBQXlCO0FBQUEsSUFDM0I7QUFBQSxJQUNBLEtBQUs7QUFBQTtBQUFBLE1BRUgsT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBO0FBQUE7QUFBQSxNQUdWLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQSxJQUN2QjtBQUFBLElBQ0EsZUFBZTtBQUFBO0FBQUEsTUFFYixVQUFVLENBQUMsU0FBUyxhQUFhLG1CQUFtQjtBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUFBLEVBRUEsTUFBTTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLElBQ2IsU0FBUyxDQUFDLHNEQUFzRDtBQUFBLElBRWhFLFdBQVcsQ0FBQyxTQUFTO0FBQUEsSUFDckIsVUFBVTtBQUFBLE1BQ1Isa0JBQWtCO0FBQUEsTUFDbEIsVUFBVTtBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
