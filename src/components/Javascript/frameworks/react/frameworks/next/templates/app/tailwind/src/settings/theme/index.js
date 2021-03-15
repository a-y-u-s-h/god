const YAML = require("./.loaders/yaml.js")
const extensions = YAML.read("src/settings/theme/elements/extensions.yaml")
const foundations = YAML.read("src/settings/theme/elements/foundations.yaml")
const variants = YAML.read("src/settings/theme/elements/state.settings.yaml")

module.exports = {
  purge: ["/src/pages/**/*.js", "/src/components/**/*.js"],
  darkMode: "class",
  theme: {
    extend: {
      ...foundations,
      ...extensions
    }
  },
  variants: {
    extend: {
      ...variants
    }
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/custom-forms"),
    require("tailwindcss-filters")
  ]
}
