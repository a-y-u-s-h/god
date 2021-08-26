import * as X from "xstate"
import sketch from "./sketch"

/*
  ======================================
    This is a state chart controlled p5
    sketch. The sketch lives in sketch.js
    file, and it gets the context every time
    it updates. So if you want to add any extra
    functionality based on events in p5 sketch,
    you can do so by changing context and then writing
    rendering logic according to it in sketch.js/
  ======================================
*/

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
      const p5 = require("p5")
      const { container } = c
      const events = { send, listen }
      const service = { events, p5, context: c }
      const visualization = new p5(sketch(service), container)
      return visualization.remove()
    }
  },
  activities: {},
  guards: {
    "container.exists": (c, e) => c?.container
  }
}
