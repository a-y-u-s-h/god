module.exports = function(api) {
  api.cache(true)
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            assets: "./src/assets",
            components: "./src/components",
            interfaces: "./src/interfaces",
            plugins: "./src/plugins",
            screens: "./src/screens",
            storybook: "./src/storybook",
            utilities: "./src/utilities"
          }
        }
      ]
    ]
  }
}
