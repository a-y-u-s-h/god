/*
  ======================================

    ░█▀█░█▀▄░█▀█░▀▀█░█▀▀░█▀▀░▀█▀
    ░█▀▀░█▀▄░█░█░░░█░█▀▀░█░░░░█░
    ░▀░░░▀░▀░▀▀▀░▀▀░░▀▀▀░▀▀▀░░▀░

  ======================================
*/

import Astro from "astro/config"
import node from "@astrojs/node"
import yaml from "@rollup/plugin-yaml"

/*
  ======================================

    ░█▀█░█▀█░▀█▀░▀█▀░█▀█░█▀█░█▀▀
    ░█░█░█▀▀░░█░░░█░░█░█░█░█░▀▀█
    ░▀▀▀░▀░░░░▀░░▀▀▀░▀▀▀░▀░▀░▀▀▀

  ======================================
*/
const options = {
  adapter: node({ mode: "standalone" }),
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
  output: "server",
  outDir: "build",
  server: { port: 1234 },
  build: {
    assets: "assets",
    client: "build/client",
    server: "build/server"
  },
  integrations: [],
  adapter: options.adapter,
  vite: {
    plugins: [yaml()]
  }
})
