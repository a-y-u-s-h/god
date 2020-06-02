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
  mobile: ({ children }) => {
    /*
      ======================================
        This covers mobile phones (S, M, L) & tablets.
        Access: device.mobile
      ======================================
    */
    const condition = useMediaQuery({ maxWidth: 991 })
    return condition ? children : null
  },
  tablet: ({ children }) => {
    /*
      ======================================
        Specifically for Tablets.
        Access: devices.tablet
      ======================================
    */
    const condition = useMediaQuery({ minWidth: 768, maxWidth: 991 })
    return condition ? children : null
  },
  computer: ({ children }) => {
    /*
      ======================================
        This covers Desktops (S and above)
        Access: device.laptop
      ======================================
    */
    const condition = useMediaQuery({ minWidth: 992 })
    return condition ? children : null
  },
  laptop: ({ children }) => {
    /*
      ======================================
        This covers Tablets & Desktops (S and above)
        Access: device.computer
      ======================================
    */
    const condition = useMediaQuery({ minWidth: 768 })
    return condition ? children : null
  },
  phone: {
    small: ({ children }) => {
      /*
        ======================================
          This covers Mobile (S) screens.
          Access: devices.phone.small
        ======================================
        */
      const condition = useMediaQuery({ maxWidth: 320 })
      return condition ? children : null
    },
    medium: ({ children }) => {
      /*
        ======================================
          This covers Mobile (M) screens.
          Access: devices.phone.medium
        ======================================
        */
      const condition = useMediaQuery({ minWidth: 321, maxWidth: 375 })
      return condition ? children : null
    },
    large: ({ children }) => {
      /*
        ======================================
          This covers Mobile (L) screens.
          Access: devices.phone.large
        ======================================
        */
      const condition = useMediaQuery({ minWidth: 376, maxWidth: 767 })
      return condition ? children : null
    }
  },
  desktop: {
    small: ({ children }) => {
      /*
        ======================================
          Specifically for Desktops (S)
          Access: device.desktop.small
        ======================================
        */
      const condition = useMediaQuery({ minWidth: 992, maxWidth: 1024 })
      return condition ? children : null
    },
    medium: ({ children }) => {
      /*
        ======================================
          Specifically for Desktops (M)
          Access: device.desktop.medium
        ======================================
        */
      const condition = useMediaQuery({ minWidth: 1024, maxWidth: 1360 })
      return condition ? children : null
    },
    large: ({ children }) => {
      /*
        ======================================
          Specifically for Desktops (L or 2k)
          Access: device.desktop.large
        ======================================
        */
      const condition = useMediaQuery({ minWidth: 1360, maxWidth: 2000 })
      return condition ? children : null
    },
    xlarge: ({ children }) => {
      /*
        ======================================
          Specifically for Desktops (XL or 4k)
        ======================================
        */
      const condition = useMediaQuery({ minWidth: 2000, maxWidth: 2560 })
      return condition ? children : null
    }
  }
}

export default {
  classes,
  components,
  devices
}
