import React from "react"
import System from "./system"

export const Placeholder = React.forwardRef(({ children, ...props }, ref) => {
  const placeholder = System.create()
  const { styles, content, events } = placeholder
  return <></>
})

export default Placeholder
