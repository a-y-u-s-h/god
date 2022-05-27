import * as X from "xstate"
import options from "./options"
import settings from "./settings"
import states from "./states.yaml"

export const machine = X.createMachine(states, options)
export const service = X.interpret(machine)
export const adapter = settings
export default { machine, service, adapter }
