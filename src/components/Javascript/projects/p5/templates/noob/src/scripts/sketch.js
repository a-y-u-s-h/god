const settings = {
  sketch: {
    parent: { id: `container` },
    dimensions: {
      width: 0,
      height: 0
    },
    background: "#49ABF7"
  }
}

/*
  ======================================
    P5 Sketch starts from here. Everything
    you do inside this sketch deals with canvas.
  ======================================
*/

function preload() {}

function setup() {
  let container = document.getElementById(`${settings.sketch.parent.id}`)
  let canvas = createCanvas(container.offsetWidth, container.offsetHeight)
  settings.sketch.dimensions.width = container.offsetWidth
  settings.sketch.dimensions.height = container.offsetHeight
  canvas.parent(`${settings.sketch.parent.id}`)
  angleMode(DEGREES)
  colorMode(RGB)
  rectMode(CENTER)
  ellipseMode(CENTER)
  textAlign(CENTER, CENTER)
  smooth()
}

function draw() {
  background(settings?.sketch?.background)
}

function windowResized() {
  setup()
}
