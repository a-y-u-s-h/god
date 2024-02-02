import * as React from "react"
import * as X from "xstate"
import * as XR from "@xstate/react"

import states from "./states.yaml"
import options from "./options.js"
import settings from "./settings.js"
import keybinds from "./keybinds.js"

export const isolate = props => {
  const { context, storage } = settings
  const machine = X.createMachine({ ...states, context }, options)
  const [state, send, actor] = XR.useActor(machine, { input: props })
  const data = { state, store: storage(state, send) }
  keybinds(state, storage)
  return data
}

export const Context = React.createContext()
export const Consumer = Context.Consumer
export const Provider = p => <Context.Provider value={isolate()} {...p} />
export const connect = () => React.useContext(Context)
export default { Context, Provider, Consumer, connect, isolate }
