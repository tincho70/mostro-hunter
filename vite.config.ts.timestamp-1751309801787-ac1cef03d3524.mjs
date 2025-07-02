// vite.config.ts
import react from "file:///F:/Dev/mostro-hunter-react/node_modules/.pnpm/@vitejs+plugin-react@4.2.1_vite@5.0.8/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///F:/Dev/mostro-hunter-react/node_modules/.pnpm/vite@5.0.8/node_modules/vite/dist/node/index.js";
import viteTsconfigPaths from "file:///F:/Dev/mostro-hunter-react/node_modules/.pnpm/vite-tsconfig-paths@5.0.1_typescript@5.2.2_vite@5.0.8/node_modules/vite-tsconfig-paths/dist/index.js";
import Icons from "file:///F:/Dev/mostro-hunter-react/node_modules/.pnpm/unplugin-icons@0.19.2_@svgr+core@8.1.0_typescript@5.2.2_/node_modules/unplugin-icons/dist/vite.js";
var vite_config_default = defineConfig({
  base: "./",
  plugins: [
    react(),
    viteTsconfigPaths(),
    Icons({
      compiler: "jsx",
      jsx: "react"
    })
  ],
  server: {
    port: 3e3
  },
  preview: {
    port: 3e3
  },
  resolve: {
    alias: {
      "@": "/src"
    }
  },
  build: {
    rollupOptions: {
      output: {
        experimentalMinChunkSize: 3500,
        manualChunks: {
          "react-stuff": ["react", "react-dom", "react-router-dom"]
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxEZXZcXFxcbW9zdHJvLWh1bnRlci1yZWFjdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRjpcXFxcRGV2XFxcXG1vc3Ryby1odW50ZXItcmVhY3RcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Y6L0Rldi9tb3N0cm8taHVudGVyLXJlYWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCB2aXRlVHNjb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJztcclxuaW1wb3J0IEljb25zIGZyb20gJ3VucGx1Z2luLWljb25zL3ZpdGUnO1xyXG5cclxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBiYXNlOiAnLi8nLFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksXHJcbiAgICB2aXRlVHNjb25maWdQYXRocygpLFxyXG4gICAgSWNvbnMoe1xyXG4gICAgICBjb21waWxlcjogJ2pzeCcsXHJcbiAgICAgIGpzeDogJ3JlYWN0JyxcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICBwb3J0OiAzMDAwLFxyXG4gIH0sXHJcbiAgcHJldmlldzoge1xyXG4gICAgcG9ydDogMzAwMCxcclxuICB9LFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICdAJzogJy9zcmMnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJ1aWxkOiB7XHJcbiAgICByb2xsdXBPcHRpb25zOiB7XHJcbiAgICAgIG91dHB1dDoge1xyXG4gICAgICAgIGV4cGVyaW1lbnRhbE1pbkNodW5rU2l6ZTogMzUwMCxcclxuICAgICAgICBtYW51YWxDaHVua3M6IHtcclxuICAgICAgICAgICdyZWFjdC1zdHVmZic6IFsncmVhY3QnLCAncmVhY3QtZG9tJywgJ3JlYWN0LXJvdXRlci1kb20nXSxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFzUSxPQUFPLFdBQVc7QUFDeFIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyx1QkFBdUI7QUFDOUIsT0FBTyxXQUFXO0FBR2xCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLGtCQUFrQjtBQUFBLElBQ2xCLE1BQU07QUFBQSxNQUNKLFVBQVU7QUFBQSxNQUNWLEtBQUs7QUFBQSxJQUNQLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUs7QUFBQSxJQUNQO0FBQUEsRUFDRjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sMEJBQTBCO0FBQUEsUUFDMUIsY0FBYztBQUFBLFVBQ1osZUFBZSxDQUFDLFNBQVMsYUFBYSxrQkFBa0I7QUFBQSxRQUMxRDtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
