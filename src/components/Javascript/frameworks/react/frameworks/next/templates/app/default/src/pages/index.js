import React from "react"
import System from "@/systems/application"

export const Home = React.forwardRef(({ children, ...props }, ref) => {
  const system = System.create()
  const { state, events, styles, content } = system
  return <></>
})

export default Home
