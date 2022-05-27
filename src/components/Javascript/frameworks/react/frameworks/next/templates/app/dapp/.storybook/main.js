const path = require("path")
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")

module.exports = {
  core: {
    builder: "webpack5"
  },
  stories: ["../src/**/*.stories.@(mdx|js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-knobs", "@storybook/addon-storysource", "storybook-addon-next"],
  webpackFinal: async base => {
    base.resolve.modules = [path.resolve(__dirname, ".."), "node_modules"]

    base.module.rules.push({
      test: /\.ya?ml$/,
      use: "js-yaml-loader"
    })

    base.resolve.plugins = base.resolve.plugins || []
    base.resolve.plugins.push(
      new TsconfigPathsPlugin({
        configFile: path.resolve(__dirname, "../tsconfig.json")
      })
    )

    base.resolve.alias = {
      ...base.resolve.alias,
      "~": path.resolve(__dirname, "../"),
      "@": path.resolve(__dirname, "../src")
    }

    base.resolve.fallback = {
      os: false,
      http: false,
      https: false,
      crypto: false,
      stream: false
    }
    return base
  }
}
