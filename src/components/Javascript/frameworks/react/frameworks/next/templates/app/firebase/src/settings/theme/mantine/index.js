import { MantineProvider } from "@mantine/core"
import Theme from "./theme"

/*
  ======================================
    Just wrap up your application within
    this provider and then if you wish
    to modify Mantine's component defaults,
    you can do so in the theme file.
  ======================================
*/
export const Mantine = ({ children }) => {
  const theme = Theme()

  return (
    <MantineProvider withNormalizeCSS withGlobalStyles classNames={theme?.classNames} defaultProps={theme?.defaultProps}>
      {children}
    </MantineProvider>
  )
}
export default Mantine
