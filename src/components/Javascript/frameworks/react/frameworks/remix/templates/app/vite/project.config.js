/*
  ======================================

    ░█▀█░█▀▄░█▀█░▀▀█░█▀▀░█▀▀░▀█▀
    ░█▀▀░█▀▄░█░█░░░█░█▀▀░█░░░░█░
    ░▀░░░▀░▀░▀▀▀░▀▀░░▀▀▀░▀▀▀░░▀░

  ======================================
*/

import yaml from "@rollup/plugin-yaml"
import paths from "vite-tsconfig-paths"
import { unstable_vitePlugin as remix } from "@remix-run/dev"

export default {
  server: { port: 1234 },
  define: { "process.env": process.env },
  plugins: [
    yaml(),
    paths(),
    remix({
      appDirectory: "src",
      cacheDirectory: "build/cache",
      ignoredRouteFiles: ["**/.*"],
      publicPath: "/assets/",
      assetsBuildDirectory: "build/client",
      serverBuildPath: "build/server/index.js"
    })
  ]
}
