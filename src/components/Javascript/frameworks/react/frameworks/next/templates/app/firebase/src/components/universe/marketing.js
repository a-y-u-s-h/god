import React from "react"
import System from "@/systems/application"
import Icon from "@/components/elements/icon"
import Theme from "@/components/molecules/switches/theme"

export const Marketing = React.forwardRef(({ children, ...props }, ref) => {
  const system = System.use()
  const { state, events, settings } = system
  const { theme, user } = settings

  const styles = {
    container: {
      className: `
        w-full h-full overflow-hidden transition
        grid grid-rows-24 grid-cols-24
      `
    }
  }

  return (
    <>
      <div {...styles?.container}></div>
    </>
  )
})

export default Marketing
