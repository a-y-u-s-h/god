import React from "react"
import System from "@/systems/universe/home"
import { Box } from "theme-ui"

const Home = () => {
  const home = System.create()
  const { styles, content } = home
  return <Box {...styles.container}></Box>
}

export default Home
