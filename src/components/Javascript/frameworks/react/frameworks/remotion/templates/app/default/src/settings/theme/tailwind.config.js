/*
  =============================================================================

    █████               ███  ████                   ███                 █████
   ░░███               ░░░  ░░███                  ░░░                 ░░███
   ███████    ██████   ████  ░███  █████ ███ █████ ████  ████████    ███████
  ░░░███░    ░░░░░███ ░░███  ░███ ░░███ ░███░░███ ░░███ ░░███░░███  ███░░███
    ░███      ███████  ░███  ░███  ░███ ░███ ░███  ░███  ░███ ░███ ░███ ░███
    ░███ ███ ███░░███  ░███  ░███  ░░███████████   ░███  ░███ ░███ ░███ ░███
    ░░█████ ░░████████ █████ █████  ░░████░████    █████ ████ █████░░████████
     ░░░░░   ░░░░░░░░ ░░░░░ ░░░░░    ░░░░ ░░░░    ░░░░░ ░░░░ ░░░░░  ░░░░░░░░


    Tailwind is a framework for building bespoke user interfaces, it has
    been designed from the ground up with customization in mind. By default,
    Tailwind will look for an optional tailwind.config.js file at the root of
    your project where you can define any customizations. We've put it in here,
    because it's good to keep everything related to styling and customizations in
    a settings folder.

  =============================================================================
*/

import theme from "./tailwind.theme.js"

export default {
  /*
    ======================================

      ░█▄█░▀█▀░█▀▀░█▀▀
      ░█░█░░█░░▀▀█░█░░
      ░▀░▀░▀▀▀░▀▀▀░▀▀▀

      Everything that can't be categorized
      properly about the config goes below.

    ======================================
  */
  theme,
  darkMode: "class",
  content: [
    "./build/**/*.html",
    "./src/**/*.{mdx,js,jsx,ts,tsx,vue,css,scss,yaml}",
    "./src/**/**/*.{mdx,js,jsx,ts,tsx,vue,css,scss,yaml}",
    "./.storybook/**/*.{mdx,js,jsx,ts,tsx,vue,css,scss,yaml}"
  ],
  /*
    ======================================

      ░█▀█░█░░░█░█░█▀▀░▀█▀░█▀█░█▀▀
      ░█▀▀░█░░░█░█░█░█░░█░░█░█░▀▀█
      ░▀░░░▀▀▀░▀▀▀░▀▀▀░▀▀▀░▀░▀░▀▀▀

      Plugins provide some useful features.
      You can also define custom plugins
      here, to know more about it read
      about it in Tailwind docs.

    ======================================
  */
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/container-queries")
  ]
}
