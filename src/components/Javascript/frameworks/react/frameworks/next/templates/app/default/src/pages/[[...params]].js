import React from "react"
import System from "@/systems/application"
import { useRouter } from "next/router"
import { useHotkeys } from "react-hotkeys-hook"

export const Application = React.forwardRef(({ children, ...props }, ref) => {
  const router = useRouter()
  const system = System.use()
  const { params } = router.query
  const { state, settings, events } = system
  const { theme, layout } = settings

  /*
    ======================================
      Keybindings:
      1. layout.next             =   Ctrl + Shift + Up
      2. layout.prev             =   Ctrl + Shift + Down
      3. theme.next              =   Ctrl + Shift + Right
      4. theme.prev              =   Ctrl + Shift + Left
    ======================================
  */

  useHotkeys("ctrl+shift+down", e => {
    const element = document.activeElement
    e.preventDefault()
    element?.blur()
    layout.events.prev()
    element?.focus()
  })

  useHotkeys("ctrl+shift+up", e => {
    const element = document.activeElement
    e.preventDefault()
    element?.blur()
    layout.events.next()
    element?.focus()
  })

  useHotkeys("ctrl+shift+left", e => {
    const element = document.activeElement
    e.preventDefault()
    element?.blur()
    theme.events.prev()
    element?.focus()
  })

  useHotkeys("ctrl+shift+right", e => {
    const element = document.activeElement
    e.preventDefault()
    element?.blur()
    theme.events.next()
    element?.focus()
  })

  return <></>
})

export default Application
