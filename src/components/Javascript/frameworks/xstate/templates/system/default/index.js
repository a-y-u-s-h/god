import * as X from "xstate"
import states from "./states.yaml"
import options from "./options.js"

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
export default { machine, service }
