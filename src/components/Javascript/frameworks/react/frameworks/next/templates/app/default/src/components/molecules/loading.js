import Animation from "@/components/elements/animation"
import System from "@/systems/application"
import React from "react"

export const Connecting = () => {
  /*
    ======================================
      This component renders the
      'connecting' state (loading animation
      for when user is trying to connect either
      with their wallet or through some other
      connecting method.).
    ======================================
  */
  const system = System.global()
  const { settings } = system
  const { theme, layout } = settings

  const styles = {
    container: {
      className: `
        w-full h-full overflow-hidden transition-colors
        ${theme.state.dark && "bg-theme-dark-200"}
        ${theme.state.light && "bg-theme-light-800"}
      `
    },
    animation: {
      src: "animations/connecting.riv",
      animations: "Idle"
    }
  }
  return (
    <div {...styles?.container}>
      <Animation {...styles?.animation} />
    </div>
  )
}

export const Disconnecting = () => {
  /*
    ======================================
      This component renders the
      'disconnecting' state (loading animation
      that gets shown when the user disconnects
      their wallet.)
    ======================================
  */
  const system = System.global()
  const { settings } = system
  const { theme, layout } = settings

  const styles = {
    container: {
      className: `
        w-full h-full overflow-hidden transition-colors
        ${theme.state.dark && "bg-theme-dark-200"}
        ${theme.state.light && "bg-theme-light-800"}
      `
    },
    animation: {
      src: "animations/disconnecting.riv",
      animations: "Idle"
    }
  }
  return (
    <div {...styles?.container}>
      <Animation {...styles?.animation} />
    </div>
  )
}

export const Loading = { Connecting, Disconnecting }

export default Loading
