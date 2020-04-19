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
import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { majorScale } from "evergreen-ui"

export const classes = {
  default: {
    containers: {
      main: {
        width: "100%",
        height: "100%",
        paddingX: majorScale(1),
        display: "flex",
        alignItems: "center",
        background: "white",
      },
      tabs: {
        left: {
          width: "100%",
          height: "100%",
          paddingX: majorScale(1),
          display: "flex",
          alignItems: "center",
        },
        right: {
          width: "100%",
          height: "100%",
          paddingX: majorScale(1),
          display: "flex",
          alignItems: "center",
          flexDirection: "row-reverse",
        },
      },
      search: {
        width: "50%",
        height: "100%",
        marginRight: majorScale(1),
        display: "flex",
        alignItems: "center",
      },
    },
    tab: {},
    link: {
      textDecoration: "none",
      margin: "0 0.5rem 0 0",
    },
  },
}
export const components = {
  link: props => {
    /*
      ======================================
        Modify default Gatsby Link to work
        the way it ideally should. Should
        get us to appropriate place depending
        on local or external link values.
      ======================================
    */
    const { children, to, ...other } = props
    const internal = /^\/(?!\/)/.test(to)
    if (internal) {
      return (
        <GatsbyLink to={to} {...other} style={classes.default.link}>
          {children}
        </GatsbyLink>
      )
    }
    return (
      <a href={to} {...other} style={classes.default.link}>
        {children}
      </a>
    )
  },
}

export default {
  classes,
  components,
}
