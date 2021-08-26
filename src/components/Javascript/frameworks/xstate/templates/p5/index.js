import * as X from "xstate"
import states from "./states.yaml"
import options from "./options.js"

export const machine = X.createMachine(states, options)
export const service = X.interpret(machine)
export const triggers = service => {}

export default { machine, service, triggers }
