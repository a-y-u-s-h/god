/*
  ======================================

               /$$               /$$
              | $$              | $$
    /$$$$$$$ /$$$$$$   /$$   /$$| $$  /$$$$$$
   /$$_____/|_  $$_/  | $$  | $$| $$ /$$__  $$
  |  $$$$$$   | $$    | $$  | $$| $$| $$$$$$$$
   \____  $$  | $$ /$$| $$  | $$| $$| $$_____/
   /$$$$$$$/  |  $$$$/|  $$$$$$$| $$|  $$$$$$$
  |_______/    \___/   \____  $$|__/ \_______/
                       /$$  | $$
                      |  $$$$$$/
                       \______/

    This file stores all the styles related to component.
    You can use any dependency (styled-components, etc)
    if you want, but make sure you export them in proper
    objects provided below.

  ======================================
*/

import { MDXRenderer } from "gatsby-plugin-mdx"
import { useMediaQuery } from "react-responsive"

export const classes = {}

export const components = {
  markdown: MDXRenderer
}

export const devices = {
  /*
    ======================================
      These are some device components that
      you can extract and use instead of
      using Media Queries. For example:

      const Tablet = components.devices.tablet
      <Tablet>{children}</Tablet>
    ======================================
  */
  mobile: ({ children, not = false }) => {
    /*
      ======================================
        This covers mobile phones (S, M, L) & tablets.
        Access: device.mobile
      ======================================
    */
    let condition = useMediaQuery({ maxWidth: 991 })
    condition = not ? !condition : condition
    return condition ? children : null
  },
  tablet: ({ children, not = false }) => {
    /*
      ======================================
        Specifically for Tablets.
        Access: devices.tablet
      ======================================
    */
    let condition = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    condition = not ? !condition : condition
    return condition ? children : null
  },
  computer: ({ children, not = false }) => {
    /*
      ======================================
        This covers Desktops (S and above)
        Access: device.laptop
      ======================================
    */
    let condition = useMediaQuery({ minWidth: 992 })
    condition = not ? !condition : condition
    return condition ? children : null
  },
  laptop: ({ children, not = false }) => {
    /*
      ======================================
        This covers Tablets & Desktops (S and above)
        Access: device.computer
      ======================================
    */
    let condition = useMediaQuery({ minWidth: 768 })
    condition = not ? !condition : condition
    return condition ? children : null
  },
  phone: {
    small: ({ children, not = false }) => {
      /*
        ======================================
          This covers Mobile (S) screens.
          Access: devices.phone.small
        ======================================
        */
      let condition = useMediaQuery({ maxWidth: 320 })
      condition = not ? !condition : condition
      return condition ? children : null
    },
    medium: ({ children, not = false }) => {
      /*
        ======================================
          This covers Mobile (M) screens.
          Access: devices.phone.medium
        ======================================
        */
      let condition = useMediaQuery({ minWidth: 321, maxWidth: 375 })
      condition = not ? !condition : condition
      return condition ? children : null
    },
    large: ({ children, not = false }) => {
      /*
        ======================================
          This covers Mobile (L) screens.
          Access: devices.phone.large
        ======================================
        */
      let condition = useMediaQuery({ minWidth: 376, maxWidth: 767 })
      condition = not ? !condition : condition
      return condition ? children : null
    }
  },
  desktop: {
    small: ({ children, not = false }) => {
      /*
        ======================================
          Specifically for Desktops (S)
          Access: device.desktop.small
        ======================================
        */
      let condition = useMediaQuery({ minWidth: 992, maxWidth: 1024 })
      condition = not ? !condition : condition
      return condition ? children : null
    },
    medium: ({ children, not = false }) => {
      /*
        ======================================
          Specifically for Desktops (M)
          Access: device.desktop.medium
        ======================================
        */
      let condition = useMediaQuery({ minWidth: 1024, maxWidth: 1360 })
      condition = not ? !condition : condition
      return condition ? children : null
    },
    large: ({ children, not = false }) => {
      /*
        ======================================
          Specifically for Desktops (L or 2k)
          Access: device.desktop.large
        ======================================
        */
      let condition = useMediaQuery({ minWidth: 1360, maxWidth: 2000 })
      condition = not ? !condition : condition
      return condition ? children : null
    },
    xlarge: ({ children, not = false }) => {
      /*
        ======================================
          Specifically for Desktops (XL or 4k)
        ======================================
        */
      let condition = useMediaQuery({ minWidth: 2000, maxWidth: 2560 })
      condition = not ? !condition : condition
      return condition ? children : null
    }
  }
}

export default {
  classes,
  components,
  devices
}
