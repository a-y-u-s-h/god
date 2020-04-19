const webpack = require("webpack")
const path = require("path")
const fs = require("fs")

const NodemonPlugin = require("nodemon-webpack-plugin")

/*
  ======================================
    This file is necessary for build
    steps or debugging, so if you're
    a beginner in programming and don't
    know what this file does, just
    don't delete it.
  ======================================
*/

module.exports = environment => ({
  mode: environment.mode,
  target: "node",
  entry: "./src",
  stats: "none",
  output: {
    path: path.join(__dirname, "build"),
    filename: "placeholder"
  },
  externals: [require("webpack-node-externals")()],
  plugins: [
    new NodemonPlugin(),
    new webpack.BannerPlugin({ banner: "#!/usr/bin/env node", raw: true })
  ],
  resolve: {
    alias: {
      src: path.resolve(__dirname, "src/"),
      assets: path.resolve(__dirname, "src/assets/"),
      scripts: path.resolve(__dirname, "src/scripts/"),
      utilties: path.resolve(__dirname, "src/utilties/"),
      components: path.resolve(__dirname, "src/components/"),
      interfaces: path.resolve(__dirname, "src/interfaces/"),
      settings: path.resolve(__dirname, "src/settings/")
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.ya?ml$/,
        type: "json",
        use: "yaml-loader"
      }
    ]
  }
})
