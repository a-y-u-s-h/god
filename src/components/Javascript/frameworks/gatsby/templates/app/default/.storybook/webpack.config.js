const path = require("path")

module.exports = ({ config }) => {
  /*
    ======================================
     Transpile Gatsby module because Gatsby
     includes un-transpiled ES6 code. 
    ======================================
  */
  config.module.rules[0].exclude = [/node_modules\/(?!(gatsby)\/)/]

  /*
    ======================================
    - Use installed babel-loader which is v8.0-beta 
      (which is meant to work with @babel/core@7)
    
    - Use @babel/preset-react for JSX and env 
      (instead of staged presets)

    - Use @babel/plugin-proposal-class-properties 
      for class arrow functions 

    - Use babel-plugin-remove-graphql-queries to remove 
      static queries from components when rendering 
      in storybook. 
    ======================================
  */
  config.module.rules[0].use[0].loader = require.resolve("babel-loader")
  config.module.rules[0].use[0].options.presets = [require.resolve("@babel/preset-react"), require.resolve("@babel/preset-env")]
  config.module.rules[0].use[0].options.plugins = [require.resolve("@babel/plugin-proposal-class-properties"), require.resolve("babel-plugin-remove-graphql-queries")]

  /*
    ======================================
      Prefer Gatsby ES6 entrypoint (module) 
      over commonjs (main) entrypoint  
    ======================================
  */
  config.resolve.mainFields = ["browser", "module", "main"]

  config.module.rules.push({
    test: /\.s[ac]ss$/,
    loaders: ["style-loader", "css-loader", "sass-loader"],
    exclude: /\.module\.s[ac]ss$/,
    include: path.resolve(__dirname, "../"),
  })

  /*
    ======================================
      Add specific loader rule for CSS
      (SASS) modules
    ======================================
  */
  config.module.rules.push({
    test: /\.module\.s[ac]ss$/,
    use: [
      { loader: "style-loader" },
      {
        loader: "css-loader",
        options: {
          modules: true,
          importLoaders: 2,
          localIdentName: "[path]-[local]-[hash:base64:5]",
        },
      },
      { loader: "sass-loader" },
    ],
    include: path.resolve(__dirname, "../"),
  })
  return config
}
