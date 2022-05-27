import System from "@/systems/application"
import React from "react"

export const Marketing = ({ children, ...props }) => {
  const system = System.global()
  const { state, events, settings } = system
  const { theme, layout, user } = settings

  const styles = {
    container: {
      className: `
        w-full h-full transition-colors
        ${theme.state.dark && "dark:scroll"}
        ${theme.state.light && "scroll"}
      `
    }
  }

  return (
    <>
      <div {...styles?.container}></div>
    </>
  )
}

export default Marketing
