import path from "path"
import node from "@rollup/plugin-node-resolve"
import json from "@rollup/plugin-json"
import yaml from "@rollup/plugin-yaml"
import wasm from "@rollup/plugin-wasm"
import image from "@rollup/plugin-image"
import dsv from "@rollup/plugin-dsv"
import run from "@rollup/plugin-run"
import alias from "@rollup/plugin-alias"
import { terser } from "rollup-plugin-terser"

export default {
  input: "src/index.js",
  output: [
    {
      name: "placeholder.min.js",
      file: "build/placeholder.min.js",
      format: "umd",
      exports: "auto",
      plugins: [terser()]
    }
  ],
  plugins: [
    run(),
    node(),
    json(),
    yaml(),
    wasm(),
    image(),
    dsv(),
    alias({
      entries: [
        {
          find: "@",
          replacement: path.resolve(__dirname, "src/")
        }
      ]
    })
  ]
}
