import React from "react"
import System from "@/systems/universe/home"

const Home = () => {
  const home = System.create()
  const { styles, content } = home
  return <div {...styles.container}></div>
}

export default Home
