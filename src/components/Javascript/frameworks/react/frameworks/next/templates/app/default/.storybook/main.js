const path = require("path")
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")

module.exports = {
  /*
    ======================================
      By default Storybook will enable
      telemetry, so we need to turn it off.
      Storybook has replaced -s (static directories)
      flag with a field called 'staticDirs' in this
      file so we'll use that instead as well.
      Rest is just some formalities you need
      to make things work as expected.
    ======================================
  */
  core: {
    builder: "webpack5",
    disableTelemetry: true
  },
  staticDirs: ["../public"],
  stories: ["../src/**/*.stories.@(mdx|js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-knobs", "@storybook/addon-storysource", "storybook-addon-next"],
  /*
    ======================================
      We need to modify Storybook config
      so that it works with our current project.
    ======================================
  */
  webpackFinal: async base => {
    /*
      ======================================
        Following lines make sure that
        Storybook runs fine with existing project.
        (imports Next.js and Typescript configs).
      ======================================
    */
    base.resolve.modules = [path.resolve(__dirname, ".."), "node_modules"]
    base.module.rules.push({ test: /\.ya?ml$/, use: "js-yaml-loader" })
    base.resolve.plugins = base.resolve.plugins || []
    base.resolve.plugins.push(new TsconfigPathsPlugin({ configFile: path.resolve(__dirname, "../tsconfig.json") }))
    base.resolve.alias = { ...base.resolve.alias, "~": path.resolve(__dirname, "../"), "@": path.resolve(__dirname, "../src") }
    /*
      ======================================
        Following lines make sure that we
        don't get unnecessary and weird Storybook
        errors when we run storybook with Next.js.
      ======================================
    */
    base.resolve.fallback = {
      fs: false,
      os: false,
      path: false,
      http: false,
      https: false,
      crypto: false,
      stream: false
    }
    return base
  },
  framework: "@storybook/react"
}
