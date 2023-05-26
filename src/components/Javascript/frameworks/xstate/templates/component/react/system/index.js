import React from "react"
import { useMachine } from "@xstate/react"
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
