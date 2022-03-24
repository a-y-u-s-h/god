import path from "path"
import run from "rollup-plugin-run"
import json from "@rollup/plugin-json"
import yaml from "@rollup/plugin-yaml"
import alias from "@rollup/plugin-alias"
import node from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import polyfills from "rollup-plugin-node-polyfills"
import { babel } from "@rollup/plugin-babel"
import { terser } from "rollup-plugin-terser"
import project from "./package.json"

const development = process.env.ROLLUP_WATCH === "true"

export default {
  context: undefined,
  input: "src/index.js",
  output: [
    {
      file: "build/placeholder.js",
      format: "esm",
      exports: "auto",
      plugins: []
    },
    {
      file: "build/placeholder.min.js",
      format: "esm",
      exports: "auto",
      plugins: [terser()]
    }
  ],
  external: Object.keys(project.dependencies),
  plugins: [
    development && run(),
    polyfills(),
    node(),
    commonjs(),
    babel({ babelHelpers: "bundled" }),
    json(),
    yaml(),
    alias({
      entries: [
        {
          find: "~",
          replacement: path.resolve(__dirname)
        },
        {
          find: "@",
          replacement: path.resolve(__dirname, "src/")
        }
      ]
    })
  ]
}
