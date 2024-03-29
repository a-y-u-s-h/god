const YAML = require("./.loaders/yaml.js")
const extensions = YAML.read("src/settings/theme/tailwind/elements/extensions.yaml")
const foundations = YAML.read("src/settings/theme/tailwind/elements/foundations.yaml")

module.exports = {
  content: ["./public/**/*.html", "./.storybook/**/*.{mdx,js,jsx,ts,tsx,vue,css,scss,yaml}", "./src/**/*.{mdx,js,jsx,ts,tsx,vue,css,scss,yaml}", "./src/**/**/*.{mdx,js,jsx,ts,tsx,vue,css,scss,yaml}"],
  darkMode: "class",
  theme: {
    extend: {
      ...foundations,
      ...extensions
    }
  },
  plugins: [require("@tailwindcss/aspect-ratio"), require("@tailwindcss/container-queries"), require("postcss-import"), require("tailwindcss/nesting"), require("@tailwindcss/typography"), require("@tailwindcss/forms"), require("@tailwindcss/custom-forms")]
}
