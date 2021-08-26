import React from "react"
import themeui from "./theme.ui"
import evergreen from "./evergreen.ui"
import { ThemeProvider as ThemeUI } from "theme-ui"
import { ThemeProvider as Evergreen } from "evergreen-ui"

export const Theme = ({ children, ...props }) => {
  return (
    <ThemeUI theme={themeui}>
      <Evergreen value={evergreen}>{children}</Evergreen>
    </ThemeUI>
  )
}

export default Theme
