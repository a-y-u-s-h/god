let config = {
  sketch: {
    parent: { id: `canvas`}
  }
}

const sketch = new p5(s => {
    s.setup = () => {
      const container = document.getElementById(`${config.sketch.parent.id}`)
      const canvas    = s.createCanvas(container.offsetWidth, container.offsetHeight) 
      canvas.parent(`${config.sketch.parent.id}`) 
      s.angleMode(s.DEGREES)
      s.noFill()
      s.rectMode(s.CENTER)
      s.ellipseMode(s.CENTER)
    }

    s.draw = () => {
      
    }

    s.windowResized = () => {
      s.setup()
    }
})
