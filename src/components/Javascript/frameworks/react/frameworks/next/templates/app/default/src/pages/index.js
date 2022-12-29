import React from "react"
import System from "@/systems/application"

export const Home = () => {
  const system = System.global()
  const { state, settings } = system
  const { theme, layout } = settings

  return <></>
}

export default Home
