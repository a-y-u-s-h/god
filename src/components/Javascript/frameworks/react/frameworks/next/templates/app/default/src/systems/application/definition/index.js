import * as X from "xstate"
import options from "./options"
import states from "./states.yaml"

export const machine = X.createMachine(states, options)
export const service = X.interpret(machine)
export default { machine, service }