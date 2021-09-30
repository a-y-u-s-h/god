class Application extends Machine {
  /*
    ======================================
      options and definition get overriden.
      Behind the scenes a service starts,
      which must be manually stopped if needed.
    ======================================
  */
  definition() {
    return `
      id: application
      preserveActionOrder: true
      context: {}
      initial: uninitialized
      on:
        sync:
          actions: sync
      states:
        uninitialized: {}
    `
  }

  options() {
    return {
      actions: {
        sync: X.assign((c, e) => ({ ...c, ...e?.payload }))
      },
      activities: {},
      services: {},
      guards: {}
    }
  }

  get sketch() {
    const { state, send } = this.service
    const { context, value } = state

    return {
      preload: async s => {},
      setup: async s => {
        s.angleMode(s.DEGREES)
        s.colorMode(s.RGB)
        s.rectMode(s.CENTER)
        s.ellipseMode(s.CENTER)
        s.textAlign(s.RIGHT, s.CENTER)
        s.smooth()
      },
      draw: async s => {
        s.background(settings?.sketch?.background)
      }
    }
  }

  /*
    ======================================
      Additionally, we can add any kind
      of interface to this because sending
      events is no different than a method call.
    ======================================
  */
  get events() {
    return {
      sync: e => this.send({ type: "sync", payload: e }),
      key: {
        up: e => this.send({ type: "key.up", payload: e }),
        down: e => this.send({ type: "key.down", payload: e }),
        press: e => this.send({ type: "key.press", payload: e })
      },
      mouse: {
        out: e => this.send({ type: "mouse.out", payload: e }),
        over: e => this.send({ type: "mouse.over", payload: e }),
        move: e => this.send({ type: "mouse.move", payload: e }),
        press: e => this.send({ type: "mouse.press", payload: e }),
        release: e => this.send({ type: "mouse.release", payload: e }),
        click: {
          single: e => this.send({ type: "mouse.click.single", payload: e }),
          double: e => this.send({ type: "mouse.click.double", payload: e })
        }
      }
    }
  }
}

var application = new Application()
