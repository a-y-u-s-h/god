import * as X from "xstate"
import * as XR from "@xstate/react"
import states from "./states.yaml"
import options from "./options.js"
import adapter from "./settings.js"
import keybinds from "./keybinds.js"

export const { inputs, outputs } = adapter
export const context = ({ input }) => inputs(input)
export const machine = X.setup(options).createMachine({ ...states, context })
export const actor = X.createActor(machine).start()

export const connect = props => {
  const state = XR.useSelector(actor, s => s)
  const settings = outputs(state, actor.send)
  keybinds(state, settings)
  return settings
}

export const isolate = props => {
  const actor = XR.useActorRef(machine, { input: props })
  const state = XR.useSelector(actor, s => s)
  const settings = outputs(state, actor.send)
  keybinds(state, settings)
  return settings
}

export default { isolate, connect }
