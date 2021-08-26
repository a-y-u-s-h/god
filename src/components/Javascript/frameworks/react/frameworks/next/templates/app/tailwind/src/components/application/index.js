import React from "react"
import System from "@/systems/application"

export const Application = React.forwardRef(({ children, ...props }, ref) => {
  const system = System.create()
  const { state, events } = system
  return <></>
})

export default Application
