const X = XState
const YAML = jsyaml

var Machine = class {
  constructor() {
    this.service = X.interpret(this.machine).start()
  }

  get machine() {
    if (typeof this.definition() === "string") return X.createMachine(YAML.load(this.definition()), this.options())
    if (typeof this.definition() === "object") return X.createMachine(this.definition(), this.options())
  }

  get send() {
    return this.service.send
  }

  get state() {
    return this.service.state
  }

  definition() {
    return `
      id: machine
      states: {}
    `
  }

  options() {
    return {
      actions: {},
      activities: {},
      services: {},
      guards: {}
    }
  }
}
