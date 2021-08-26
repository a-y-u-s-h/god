/*
  ======================================
    P5 Sketch starts from here. Everything
    you do inside this sketch deals with canvas.
  ======================================
*/

const sketch = new p5(s => {
  const mouse = {
    press: e => {
      const position = new p5.Vector(s.mouseX, s.mouseY)
    },
    release: e => {
      const position = new p5.Vector(s.mouseX, s.mouseY)
    },
    move: e => {
      const position = new p5.Vector(s.mouseX, s.mouseY)
    },
    over: e => {
      const position = new p5.Vector(s.mouseX, s.mouseY)
    },
    out: e => {
      const position = new p5.Vector(s.mouseX, s.mouseY)
    },
    wheel: e => {},
    click: {
      single: e => {
        const position = new p5.Vector(s.mouseX, s.mouseY)
      },
      double: e => {
        const position = new p5.Vector(s.mouseX, s.mouseY)
      }
    }
  }

  const key = {
    press: e => {
      const key = s.key || String.fromCharCode(s.keyCode)
    },
    down: e => {
      const key = s.key || String.fromCharCode(s.keyCode)
    },
    up: e => {
      const key = s.key || String.fromCharCode(s.keyCode)
    }
  }

  s.preload = () => {}

  s.setup = () => {
    let container = document.getElementById(`${settings.sketch.parent.id}`)
    let canvas = s.createCanvas(container.offsetWidth, container.offsetHeight)
    settings.sketch.dimensions.width = container.offsetWidth
    settings.sketch.dimensions.height = container.offsetHeight
    canvas.parent(`${settings.sketch.parent.id}`)
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
    s.background(settings?.sketch?.background)
  }

  s.windowResized = () => s.setup()
  s.keyTyped = e => key?.press(e)
  s.keyPressed = e => key?.press(e)
})
