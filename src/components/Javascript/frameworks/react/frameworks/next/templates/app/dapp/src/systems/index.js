/*
  ======================================
    This components collects all providers
    of various systems and applies them
    at the root of the application so that
    you can use them anywhere inside the tree.
  ======================================
*/
import Application from "@/systems/application"
import React from "react"
/*
  ======================================
    Uncomment following lines to allow
    Xstate inspector to popup and show
    the visualizer.
  ======================================
*/

/*
  import { inspect } from "@xstate/inspect"
  if (typeof window !== "undefined") {
    inspect({ iframe: false, url: "https://statecharts.io/inspect" })
  }
*/

export const Systems = ({ children }) => <Application.Provider>{children}</Application.Provider>
export default Systems
