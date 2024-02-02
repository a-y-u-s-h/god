/*
  ======================================

    ░█▀█░█▀▄░█▀█░▀▀█░█▀▀░█▀▀░▀█▀
    ░█▀▀░█▀▄░█░█░░░█░█▀▀░█░░░░█░
    ░▀░░░▀░▀░▀▀▀░▀▀░░▀▀▀░▀▀▀░░▀░

  ======================================
*/

import mdx from "@astrojs/mdx"
import Astro from "astro/config"
import node from "@astrojs/node"
import react from "@astrojs/react"
import yaml from "@rollup/plugin-yaml"
import sitemap from "@astrojs/sitemap"
import prefetch from "@astrojs/prefetch"
import tailwind from "@astrojs/tailwind"
import vercel from "@astrojs/vercel/serverless"

/*
  ======================================

    ░█▀█░█▀█░▀█▀░▀█▀░█▀█░█▀█░█▀▀
    ░█░█░█▀▀░░█░░░█░░█░█░█░█░▀▀█
    ░▀▀▀░▀░░░░▀░░▀▀▀░▀▀▀░▀░▀░▀▀▀

  ======================================
*/
const options = {
  adapter: node({ mode: "standalone" }),
  integrations: {
    tailwind: {
      configFile: "./src/settings/theme/tailwind.config.js"
    }
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
export default {
  site: "https://placeholder",
  output: "static",
  outDir: "build",
  cacheDir: "build/cache",
  publicDir: "./assets",
  build: {
    client: "build/client",
    server: "build/server"
  },
  integrations: [mdx(), react(), sitemap(), prefetch(), tailwind(options.integrations.tailwind)],
  vite: {
    plugins: [yaml()]
  }
}
