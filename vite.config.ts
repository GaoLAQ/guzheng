import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "https://localhost:3000",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  // server: {
  //   proxy: {
  //     // string shorthand for simple case
  //     "/foo": "http://localhost:4534",
  //     // with options if you need to use change origin
  //     "/api": {
  //       target: "http://someapi.com",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //     // with RegEx for path matching
  //     "^/fallback/.*": {
  //       target: "http://someapi.com",
  //       changeOrigin: true,
  //       rewrite: (path) => path.replace(/^\/fallback/, ""),
  //     },
  //     // Using the proxy instance
  //     "/api": {
  //       target: "http://someapi.com",
  //       changeOrigin: true,
  //       configure: (proxy, options) => {
  //         // proxy will be an instance of 'http-proxy' so you can do whatever you want here
  //       },
  //     },
  //     // Proxying websockets or socket.io
  //     "/socket.io": {
  //       target: "ws://localhost:5174",
  //       ws: true,
  //     },
  //   },
  // },
});
