const YAML = require("./.loaders/yaml.js")
const extensions = YAML.read("src/settings/theme/tailwind/elements/extensions.yaml")
const foundations = YAML.read("src/settings/theme/tailwind/elements/foundations.yaml")
const variants = YAML.read("src/settings/theme/tailwind/elements/state.settings.yaml")

module.exports = {
  mode: "jit",
  purge: [
    "./public/**/*.html",
    "./src/**/*.{js,jsx,ts,tsx,vue,css,scss,yaml}",
    "./src/**/**/*.{js,jsx,ts,tsx,vue,css,scss,yaml}"
  ],
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
