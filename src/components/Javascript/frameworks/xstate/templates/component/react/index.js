import React from "react"
import * as X from "xstate"
import states from "./states.yaml"
import options from "./options.js"
import { useMachine } from "@xstate/react"

/*
  ======================================
    This file simply imports the YAML
    state representation and the options
    (actions, activities, services and guards)
    which are to be used inside the `states` YAML
    file. You can then use the YAML file to visualize
    the statechart properly and simply import machine
    (which can be interpreted as you wish) or as a
    service (which can be started and stopped
    as you wish).
  ======================================
*/

export const machine = X.createMachine(states, options)
export const service = X.interpret(machine)

/*
  ======================================
    Here, we're also exporting the
    state machine with a wrapper for react.
    (Basically creating a Context & Provider).
    This is useful in case you want to share
    a state machine service across components
    in React.
  ======================================
*/
export const Context = React.createContext()
export const Consumer = Context.Consumer
export const Provider = ({ children }) => {
  const [state, event, service] = useMachine(machine)
  const value = { state, event, service }
  return <Context.Provider value={value}>{children}</Context.Provider>
}
export default { machine, service, Context, Provider, Consumer }
