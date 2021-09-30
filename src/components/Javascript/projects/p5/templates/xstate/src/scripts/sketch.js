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
      application?.events?.mouse?.press?.(position)
    },
    release: e => {
      const position = new p5.Vector(s.mouseX, s.mouseY)
      application?.events?.mouse?.release?.(position)
    },
    move: e => {
      const position = new p5.Vector(s.mouseX, s.mouseY)
      application?.events?.mouse?.move?.(position)
    },
    over: e => {
      const position = new p5.Vector(s.mouseX, s.mouseY)
      application?.events?.mouse?.over?.(position)
    },
    out: e => {
      const position = new p5.Vector(s.mouseX, s.mouseY)
      application?.events?.mouse?.out?.(position)
    },
    wheel: e => {},
    click: {
      single: e => {
        const position = new p5.Vector(s.mouseX, s.mouseY)
        application?.events?.mouse?.click?.single?.(position)
      },
      double: e => {
        const position = new p5.Vector(s.mouseX, s.mouseY)
        application?.events?.mouse?.click?.double?.(position)
      }
    }
  }

  const key = {
    press: e => {
      const key = s.key || String.fromCharCode(s.keyCode)
      application?.events?.key?.press?.(key)
    },
    down: e => {
      const key = s.key || String.fromCharCode(s.keyCode)
      application?.events?.key?.down?.(key)
    },
    up: e => {
      const key = s.key || String.fromCharCode(s.keyCode)
      application?.events?.key?.up?.(key)
    }
  }

  s.preload = () => {
    application?.sketch?.preload(s)
  }

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
    application?.sketch?.setup(s)
  }

  s.draw = () => {
    application?.sketch?.draw(s)
  }

  s.windowResized = () => s.setup()
  s.keyTyped = e => key?.press(e)
  s.keyPressed = e => key?.press(e)
})
