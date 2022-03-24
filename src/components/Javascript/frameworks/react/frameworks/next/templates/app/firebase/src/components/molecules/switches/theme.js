import React from "react"
import System from "@/systems/application"
import { Switch } from "@headlessui/react"
import Icon from "@/components/elements/icon"

export const Switcher = React.forwardRef(({ children, ...props }, ref) => {
  const system = System.use()
  const { state, events, settings } = system
  const { theme, user } = settings

  const styles = {
    switch: {
      checked: theme.state.light,
      onChange: theme.events.next,
      className: `
        transition overflow-hidden rounded-md
        grid place-items-center
        select-none focus:outline-none
        ${theme.state.dark && "bg-theme-dark-800 hover:bg-theme-dark-700 text-theme-dark-100 hover:text-theme-dark-300"}
        ${theme.value === "light" && "bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700"}
        ${props?.className}
      `,
      ...props
    },
    icon: {
      name: theme.state.light ? "IoIosMoon" : "IoIosSunny",
      family: "IO",
      className: `
        w-5 h-5 grid place-items-center
      `
    }
  }

  const content = {
    screenreader: "Toggle Theme"
  }

  return (
    <>
      <Switch {...styles?.switch}>
        <Icon {...styles?.icon}></Icon>
      </Switch>
    </>
  )
})

export default { Switcher }
