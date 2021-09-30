import React from "react"
import System from "./system"

export const Placeholder = React.forwardRef(({ children, ...props }, ref) => {
  const system = System.create()
  const { state, events, settings, style } = system
  return <></>
})

export default Placeholder
