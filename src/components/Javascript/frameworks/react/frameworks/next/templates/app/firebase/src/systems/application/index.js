import { useMachine } from "@xstate/react"
import React from "react"
import { useHotkeys } from "react-hotkeys-hook"
import { adapter, machine, service } from "./definition"

/*
  ======================================
    'local' hook creates a localized
    version of the state chart of this system.
    If you wish to local a shared service
    of this system, then you need to use the `.use`
    function, after you've wrapped the tree
    in the provider.
  ======================================
*/
export const local = () => {
  const [state, send, service] = useMachine(machine, { devTools: true })
  const settings = adapter(state, send)

  /*
    ======================================
      Keybindings:
      1. user.connect            =   Ctrl + Shift + Enter
      2. user.disconnect         =   Ctrl + Shift + Backspace
      3. layout.next             =   Ctrl + Shift + Up
      4. layout.prev             =   Ctrl + Shift + Down
      5. theme.next              =   Ctrl + Shift + Right
      6. theme.prev              =   Ctrl + Shift + Left
    ======================================
  */

  useHotkeys("ctrl+shift+enter", e => {
    const element = document.activeElement
    e.preventDefault()
    element?.blur()
    settings.user.events.connect()
    element?.focus()
  })

  useHotkeys("ctrl+shift+backspace", e => {
    const element = document.activeElement
    e.preventDefault()
    element?.blur()
    settings.user.events.disconnect()
    element?.focus()
  })

  useHotkeys("ctrl+shift+down", e => {
    const element = document.activeElement
    e.preventDefault()
    element?.blur()
    settings.layout.events.prev()
    element?.focus()
  })

  useHotkeys("ctrl+shift+up", e => {
    const element = document.activeElement
    e.preventDefault()
    element?.blur()
    settings.layout.events.next()
    element?.focus()
  })

  useHotkeys("ctrl+shift+left", e => {
    const element = document.activeElement
    e.preventDefault()
    element?.blur()
    settings.theme.events.prev()
    element?.focus()
  })

  useHotkeys("ctrl+shift+right", e => {
    const element = document.activeElement
    e.preventDefault()
    element?.blur()
    settings.theme.events.next()
    element?.focus()
  })

  return { state, settings }
}
/*
  ======================================
    Code below is just the framework-glue
    required to run the state machine
    (described within definition) within react.
  ======================================
*/
export const Context = React.createContext()
export const Consumer = Context.Consumer
export const Provider = p => <Context.Provider value={local()} {...p} />
export const global = () => React.useContext(Context)
export const System = { machine, service, Context, Provider, Consumer, global, local }
/*
  ======================================
    Default export contains everything.
  ======================================
*/
export default System
