// packages/core/vite.config.ts
import { nxCopyAssetsPlugin } from "file:///Users/harlenalvarez/Development/mono/quicksketch/node_modules/@nx/vite/plugins/nx-copy-assets.plugin.js";
import { nxViteTsPaths } from "file:///Users/harlenalvarez/Development/mono/quicksketch/node_modules/@nx/vite/plugins/nx-tsconfig-paths.plugin.js";
import * as path from "path";
import { defineConfig } from "file:///Users/harlenalvarez/Development/mono/quicksketch/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/harlenalvarez/Development/mono/quicksketch/node_modules/vite-plugin-dts/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/harlenalvarez/Development/mono/quicksketch/packages/core";
var vite_config_default = defineConfig({
  root: __vite_injected_original_dirname,
  cacheDir: "../../node_modules/.vite/packages/core",
  plugins: [
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
    outDir: "../../dist/packages/core",
    emptyOutDir: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true
    },
    lib: {
      // Could also be a dictionary or array of multiple entry points.
      entry: "src/index.ts",
      name: "core",
      fileName: "index",
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ["es", "cjs"]
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: []
    }
  },
  test: {
    watch: false,
    globals: true,
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    setupFiles: "./vite.setup.ts",
    reporters: ["default"],
    coverage: {
      reportsDirectory: "../../coverage/packages/core",
      provider: "v8"
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsicGFja2FnZXMvY29yZS92aXRlLmNvbmZpZy50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIi9Vc2Vycy9oYXJsZW5hbHZhcmV6L0RldmVsb3BtZW50L21vbm8vcXVpY2tza2V0Y2gvcGFja2FnZXMvY29yZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2hhcmxlbmFsdmFyZXovRGV2ZWxvcG1lbnQvbW9uby9xdWlja3NrZXRjaC9wYWNrYWdlcy9jb3JlL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9oYXJsZW5hbHZhcmV6L0RldmVsb3BtZW50L21vbm8vcXVpY2tza2V0Y2gvcGFja2FnZXMvY29yZS92aXRlLmNvbmZpZy50c1wiOy8vLyA8cmVmZXJlbmNlIHR5cGVzPSd2aXRlc3QnIC8+XG5pbXBvcnQgeyBueENvcHlBc3NldHNQbHVnaW4gfSBmcm9tICdAbngvdml0ZS9wbHVnaW5zL254LWNvcHktYXNzZXRzLnBsdWdpbic7XG5pbXBvcnQgeyBueFZpdGVUc1BhdGhzIH0gZnJvbSAnQG54L3ZpdGUvcGx1Z2lucy9ueC10c2NvbmZpZy1wYXRocy5wbHVnaW4nO1xuaW1wb3J0ICogYXMgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnO1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICByb290OiBfX2Rpcm5hbWUsXG4gIGNhY2hlRGlyOiAnLi4vLi4vbm9kZV9tb2R1bGVzLy52aXRlL3BhY2thZ2VzL2NvcmUnLFxuXG4gIHBsdWdpbnM6IFtcbiAgICBueFZpdGVUc1BhdGhzKCksXG4gICAgbnhDb3B5QXNzZXRzUGx1Z2luKFsnKi5tZCddKSxcbiAgICBkdHMoe1xuICAgICAgZW50cnlSb290OiAnc3JjJyxcbiAgICAgIHRzY29uZmlnUGF0aDogcGF0aC5qb2luKF9fZGlybmFtZSwgJ3RzY29uZmlnLmxpYi5qc29uJyksXG4gICAgfSksXG4gIF0sXG5cbiAgLy8gVW5jb21tZW50IHRoaXMgaWYgeW91IGFyZSB1c2luZyB3b3JrZXJzLlxuICAvLyB3b3JrZXI6IHtcbiAgLy8gIHBsdWdpbnM6IFsgbnhWaXRlVHNQYXRocygpIF0sXG4gIC8vIH0sXG5cbiAgLy8gQ29uZmlndXJhdGlvbiBmb3IgYnVpbGRpbmcgeW91ciBsaWJyYXJ5LlxuICAvLyBTZWU6IGh0dHBzOi8vdml0ZWpzLmRldi9ndWlkZS9idWlsZC5odG1sI2xpYnJhcnktbW9kZVxuICBidWlsZDoge1xuICAgIG91dERpcjogJy4uLy4uL2Rpc3QvcGFja2FnZXMvY29yZScsXG4gICAgZW1wdHlPdXREaXI6IHRydWUsXG4gICAgcmVwb3J0Q29tcHJlc3NlZFNpemU6IHRydWUsXG4gICAgY29tbW9uanNPcHRpb25zOiB7XG4gICAgICB0cmFuc2Zvcm1NaXhlZEVzTW9kdWxlczogdHJ1ZSxcbiAgICB9LFxuICAgIGxpYjoge1xuICAgICAgLy8gQ291bGQgYWxzbyBiZSBhIGRpY3Rpb25hcnkgb3IgYXJyYXkgb2YgbXVsdGlwbGUgZW50cnkgcG9pbnRzLlxuICAgICAgZW50cnk6ICdzcmMvaW5kZXgudHMnLFxuICAgICAgbmFtZTogJ2NvcmUnLFxuICAgICAgZmlsZU5hbWU6ICdpbmRleCcsXG4gICAgICAvLyBDaGFuZ2UgdGhpcyB0byB0aGUgZm9ybWF0cyB5b3Ugd2FudCB0byBzdXBwb3J0LlxuICAgICAgLy8gRG9uJ3QgZm9yZ2V0IHRvIHVwZGF0ZSB5b3VyIHBhY2thZ2UuanNvbiBhcyB3ZWxsLlxuICAgICAgZm9ybWF0czogWydlcycsICdjanMnXSxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIC8vIEV4dGVybmFsIHBhY2thZ2VzIHRoYXQgc2hvdWxkIG5vdCBiZSBidW5kbGVkIGludG8geW91ciBsaWJyYXJ5LlxuICAgICAgZXh0ZXJuYWw6IFtdLFxuICAgIH0sXG4gIH0sXG5cbiAgdGVzdDoge1xuICAgIHdhdGNoOiBmYWxzZSxcbiAgICBnbG9iYWxzOiB0cnVlLFxuICAgIGVudmlyb25tZW50OiAnanNkb20nLFxuICAgIGluY2x1ZGU6IFsnc3JjLyoqLyoue3Rlc3Qsc3BlY30ue2pzLG1qcyxjanMsdHMsbXRzLGN0cyxqc3gsdHN4fSddLFxuICAgIHNldHVwRmlsZXM6ICcuL3ZpdGUuc2V0dXAudHMnLFxuICAgIHJlcG9ydGVyczogWydkZWZhdWx0J10sXG4gICAgY292ZXJhZ2U6IHtcbiAgICAgIHJlcG9ydHNEaXJlY3Rvcnk6ICcuLi8uLi9jb3ZlcmFnZS9wYWNrYWdlcy9jb3JlJyxcbiAgICAgIHByb3ZpZGVyOiAndjgnLFxuICAgIH0sXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFDQSxTQUFTLDBCQUEwQjtBQUNuQyxTQUFTLHFCQUFxQjtBQUM5QixZQUFZLFVBQVU7QUFDdEIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBTGhCLElBQU0sbUNBQW1DO0FBT3pDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLFVBQVU7QUFBQSxFQUVWLFNBQVM7QUFBQSxJQUNQLGNBQWM7QUFBQSxJQUNkLG1CQUFtQixDQUFDLE1BQU0sQ0FBQztBQUFBLElBQzNCLElBQUk7QUFBQSxNQUNGLFdBQVc7QUFBQSxNQUNYLGNBQW1CLFVBQUssa0NBQVcsbUJBQW1CO0FBQUEsSUFDeEQsQ0FBQztBQUFBLEVBQ0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLGFBQWE7QUFBQSxJQUNiLHNCQUFzQjtBQUFBLElBQ3RCLGlCQUFpQjtBQUFBLE1BQ2YseUJBQXlCO0FBQUEsSUFDM0I7QUFBQSxJQUNBLEtBQUs7QUFBQTtBQUFBLE1BRUgsT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBO0FBQUE7QUFBQSxNQUdWLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQSxJQUN2QjtBQUFBLElBQ0EsZUFBZTtBQUFBO0FBQUEsTUFFYixVQUFVLENBQUM7QUFBQSxJQUNiO0FBQUEsRUFDRjtBQUFBLEVBRUEsTUFBTTtBQUFBLElBQ0osT0FBTztBQUFBLElBQ1AsU0FBUztBQUFBLElBQ1QsYUFBYTtBQUFBLElBQ2IsU0FBUyxDQUFDLHNEQUFzRDtBQUFBLElBQ2hFLFlBQVk7QUFBQSxJQUNaLFdBQVcsQ0FBQyxTQUFTO0FBQUEsSUFDckIsVUFBVTtBQUFBLE1BQ1Isa0JBQWtCO0FBQUEsTUFDbEIsVUFBVTtBQUFBLElBQ1o7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
