import * as X from "xstate"
import sketch from "./sketch"

export default {
  actions: {
    events: X.send((c, e, m) => ({ context: c, event: e, meta: m }), { to: "activity" }),
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

      /*
        ======================================
          You need to provide a parent so that
          PIXI can put its canvas into it.
        ======================================
      */
      const parent = document.querySelector(c?.container)
      while (parent.firstChild) parent.removeChild(parent.firstChild)
      const width = parent.offsetWidth
      const height = parent.offsetHeight

      /*
        ======================================
          You need to initialize a PIXI application
          as a renderer. This is very similar to
          setup of Three.js.
        ======================================
      */
      const options = { width, height, ...c?.settings?.application }
      const application = new PIXI.Application(options)
      application.renderer.resize(width, height)
      application.renderer.resolution = window.devicePixelRatio
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
