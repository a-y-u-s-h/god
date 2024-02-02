import * as X from "xstate"
import states from "./states.yaml"
import options from "./options.js"
import adapter from "./settings.js"

export const { inputs, outputs } = adapter
export const context = ({ input }) => inputs(input)
export const machine = X.setup(options).createMachine({ ...states, context })
export const actor = X.createActor(machine).start()
export default { actor, machine, outputs }
