import * as X from "xstate"
import sketch from "./sketch"

export default {
  actions: {
    events: X.send((c, e) => ({ c, ...e }), { to: "activity" }),
    initialize: X.assign({
      container: (c, e) => {
        return c?.container || c?.reference || e?.payload?.container || e?.payload?.reference
      }
    })
  },
  services: {
    sketch: (c, e) => (send, listen) => {
      const PIXI = require("pixi.js")
      const events = { send, listen }
      const service = { events, context: c }
      const parent = document.querySelector(c?.container)
      while (parent.firstChild) parent.removeChild(parent.firstChild)
      const width = parent.offsetWidth
      const height = parent.offsetHeight
      const options = { width, height, ...c?.settings?.application }
      const application = new PIXI.Application(options)
      parent.appendChild(application.view)
      sketch(service)({ PIXI, application, parent, width, height })
      return () => {}
    }
  },
  activities: {},
  guards: {
    "container.exists": (c, e) => c?.container
  }
}
