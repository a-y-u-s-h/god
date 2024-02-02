import * as React from "react"
import * as X from "xstate"
import * as XR from "@xstate/react"

import states from "./states.yaml"
import options from "./options.js"
import adapter from "./settings.js"
import keybinds from "./keybinds.js"

export const local = () => {
  const machine = X.createMachine(states, options)
  const [state, send, actor] = XR.useMachine(machine)
  const settings = adapter(state, send)
  const _ = keybinds(state, settings)
  return { state, settings }
}

export const Context = React.createContext()
export const Consumer = Context.Consumer
export const Provider = p => <Context.Provider value={local()} {...p} />
export const connect = () => React.useContext(Context)
export default { Context, Provider, Consumer, connect, local }
