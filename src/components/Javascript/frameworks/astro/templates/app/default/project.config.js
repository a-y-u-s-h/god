/*
  ======================================

    ░█▀█░█▀▄░█▀█░▀▀█░█▀▀░█▀▀░▀█▀
    ░█▀▀░█▀▄░█░█░░░█░█▀▀░█░░░░█░
    ░▀░░░▀░▀░▀▀▀░▀▀░░▀▀▀░▀▀▀░░▀░

  ======================================
*/

import mdx from "@astrojs/mdx"
import * as Astro from "astro/config"
import node from "@astrojs/node"
import react from "@astrojs/react"
import yaml from "@rollup/plugin-yaml"
import sitemap from "@astrojs/sitemap"
import prefetch from "@astrojs/prefetch"
import tailwind from "@tailwindcss/vite"
import vercel from "@astrojs/vercel/serverless"

/*
  ======================================

    ░█▀█░█▀█░▀█▀░▀█▀░█▀█░█▀█░█▀▀
    ░█░█░█▀▀░░█░░░█░░█░█░█░█░▀▀█
    ░▀▀▀░▀░░░░▀░░▀▀▀░▀▀▀░▀░▀░▀▀▀

  ======================================
*/
const options = {
  adapter: {
    node: node({ mode: "standalone" }),
    vercel: vercel({
      imageService: true,
      webAnalytics: { enabled: false },
      speedInsights: { enabled: false }
    })
  },
  integrations: {
    tailwind: {}
  }
}

/*
  ======================================

    ░█▀█░█▀▀░▀█▀░█▀▄░█▀█
    ░█▀█░▀▀█░░█░░█▀▄░█░█
    ░▀░▀░▀▀▀░░▀░░▀░▀░▀▀▀

    Astro is an all-in-one web framework for
    building fast, content-focused websites.
    This file exports configuration for Astro.
    To know more, read the documentation:
    https://docs.astro.build/

  ======================================
*/
export default Astro.defineConfig({
  site: "https://placeholder.com",
  output: "server",
  outDir: "build",
  cacheDir: "build/cache",
  publicDir: "./assets",
  devToolbar: { enabled: false },
  checkUpdates: { enabled: false },
  build: {
    client: "client",
    server: "server"
  },
  adapter: options.adapter.vercel,
  integrations: [mdx(), react(), sitemap(), prefetch()],
  vite: {
    server: { watch: { usePolling: true } },
    plugins: [yaml(), tailwind(options.integrations.tailwind)]
  }
})