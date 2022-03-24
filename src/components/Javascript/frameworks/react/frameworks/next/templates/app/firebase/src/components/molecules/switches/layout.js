import React from "react"
import System from "@/systems/application"
import { Switch } from "@headlessui/react"
import Icon from "@/components/elements/icon"

export const Switcher = React.forwardRef(({ children, ...props }, ref) => {
  const system = System.use()
  const { state, events, settings } = system
  const { theme, user, layout } = settings

  const styles = {
    switch: {
      checked: layout?.state?.standard,
      onChange: layout?.events?.next,
      className: `
        overflow-hidden rounded-md transition
        grid grid-rows-1 grid-flow-col place-items-start space-between justify-center items-center gap-2
        select-none focus:outline-none
        font-extrabold text-xs uppercase select-none
        ${theme.state.dark && "bg-theme-dark-800 hover:bg-theme-dark-700 text-theme-dark-100 hover:text-theme-dark-300"}
        ${theme.value === "light" && "bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700"}
        ${props?.className}
      `,
      ...props
    },
    icon: {
      name: layout.state.standard ? "RiLayoutLeftLine" : "RiLayoutMasonryLine",
      family: "RI",
      className: `
        w-4 h-4 grid place-items-center
      `
    }
  }

  const content = {
    label: layout.state.standard ? "Standard" : "Scientific"
  }

  return (
    <>
      <Switch {...styles?.switch}>
        <Icon {...styles?.icon} /> {content?.label}
      </Switch>
    </>
  )
})

export default { Switcher }
