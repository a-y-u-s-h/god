import path from "path"
import node from "@rollup/plugin-node-resolve"
import json from "@rollup/plugin-json"
import yaml from "@rollup/plugin-yaml"
import alias from "@rollup/plugin-alias"
import { terser } from "rollup-plugin-terser"

export default {
  input: "src/index.js",
  output: [
    {
      file: "build/placeholder.js",
      format: "cjs",
      exports: "auto"
    },
    {
      file: "build/placeholder.min.js",
      format: "cjs",
      exports: "auto",
      plugins: [terser()]
    },
    {
      file: "build/placeholder.esm.js",
      format: "esm",
      exports: "auto",
      plugins: [terser()]
    },
    {
      name: "placeholder.umd.js",
      file: "build/placeholder.umd.js",
      format: "umd",
      exports: "auto",
      plugins: [terser()]
    },
    {
      name: "placeholder.iife.js",
      file: "build/placeholder.iife.js",
      format: "iife",
      exports: "auto",
      plugins: [terser()]
    }
  ],
  plugins: [
    node(),
    json(),
    yaml(),
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
