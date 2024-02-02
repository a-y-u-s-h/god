import YAML from "./.loaders/yaml"
const grids = YAML.read("src/settings/theme/extends/grids.yaml")
const fonts = YAML.read("src/settings/theme/extends/fonts.yaml")
const colors = YAML.read("src/settings/theme/extends/colors.yaml")
const screens = YAML.read("src/settings/theme/extends/screens.yaml")

/*
  ======================================

    ░▀█▀░█░█░█▀▀░█▄█░█▀▀
    ░░█░░█▀█░█▀▀░█░█░█▀▀
    ░░▀░░▀░▀░▀▀▀░▀░▀░▀▀▀

    This is where we specify our tailwind
    theme. We'll simply extend the theme
    because Tailwind provides pretty nice
    defaults, but if we want to change
    them someday then this is the place.

  ======================================
*/

export default {
  /*
    ======================================

      ░█▀▀░█░█░▀█▀░█▀▀░█▀█░█▀▄░█▀▀
      ░█▀▀░▄▀▄░░█░░█▀▀░█░█░█░█░▀▀█
      ░▀▀▀░▀░▀░░▀░░▀▀▀░▀░▀░▀▀░░▀▀▀

      This is important, this is where you'll
      extend Tailwind classes (colors, grids...)
      Without custom extensions, tailwind may
      not suit all of your needs or it will
      just result in code that will be difficult
      to create and modify.

    ======================================
  */
  extend: {
    ...grids,
    ...fonts,
    ...colors,
    ...screens
  }
}
