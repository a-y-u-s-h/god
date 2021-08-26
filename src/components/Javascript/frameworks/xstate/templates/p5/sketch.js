export const sketch = service => s => {
  let { context, events, p5 } = service
  let { send, listen } = events
  let { container, settings } = context

  listen(e => (context = e?.c))

  const mouse = {
    press: e => {
      const position = new p5.Vector(s.mouseX, s.mouseY)
      send({ type: "mouse.press", payload: { position } })
    },
    release: e => {
      const position = new p5.Vector(s.mouseX, s.mouseY)
      send({ type: "mouse.release", payload: { position } })
    },
    move: e => {
      const position = new p5.Vector(s.mouseX, s.mouseY)
      send({ type: "mouse.move", payload: { position } })
    },
    over: e => {
      const position = new p5.Vector(s.mouseX, s.mouseY)
      send({ type: "mouse.over", payload: { position } })
    },
    out: e => {
      const position = new p5.Vector(s.mouseX, s.mouseY)
      send({ type: "mouse.out", payload: { position } })
    },
    wheel: e => {},
    click: {
      single: e => {
        const position = new p5.Vector(s.mouseX, s.mouseY)
        send({ type: "mouse.click.single", payload: { position } })
      },
      double: e => {
        const position = new p5.Vector(s.mouseX, s.mouseY)
        send({ type: "mouse.click.double", payload: { position } })
      }
    }
  }

  const key = {
    press: e => {
      const key = s.key || String.fromCharCode(s.keyCode)
      send({ type: "key.press", payload: { key } })
    },
    down: e => {
      const key = s.key || String.fromCharCode(s.keyCode)
      send({ type: "key.down", payload: { key } })
    },
    up: e => {
      const key = s.key || String.fromCharCode(s.keyCode)
      send({ type: "key.up", payload: { key } })
    }
  }

  s.preload = () => {}

  s.setup = () => {
    const parent = document.querySelector(container)
    const width = parent.offsetWidth
    const height = parent.offsetHeight
    const canvas = s.createCanvas(width, height).parent(parent)

    canvas.mousePressed(mouse.press)
    canvas.mouseReleased(mouse.release)
    canvas.mouseMoved(mouse.move)
    canvas.mouseOver(mouse.over)
    canvas.mouseOut(mouse.out)
    canvas.mouseClicked(mouse.click.single)
    canvas.doubleClicked(mouse.click.double)

    s.angleMode(s.DEGREES)
    s.colorMode(s.RGB)
    s.rectMode(s.CENTER)
    s.ellipseMode(s.CENTER)
    s.textAlign(s.CENTER, s.CENTER)
    s.smooth()
  }

  s.draw = () => {
    s.clear()
    s.noLoop()
  }

  s.windowResized = () => s.setup()
  s.keyTyped = e => key?.press(e)
  s.keyPressed = e => key?.press(e)
  s.keyReleased = e => key?.up(e)
}

export default sketch
