/*
  ======================================
    This is a temporary workaround to
    make module aliases work in react.
    They're currently disabled by the React
    team for no documented reason.
  ======================================
*/
const rewireAliases = require("react-app-rewire-aliases")
const { paths } = require("react-app-rewired")
const path = require("path")

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireAliases.aliasesOptions({
    "@": path.resolve(__dirname, `src/`)
  })(config, env)
  return config
}
