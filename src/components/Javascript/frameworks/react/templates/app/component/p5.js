import p5 from "p5"
import React from "react"

const sketch = component => s => {
  const { dimension } = component
  const settings = component.props

  s.setup = () => {
    s.createCanvas(dimension.width, dimension.height).parent(component.parent)
    s.angleMode(s.DEGREES)
    s.colorMode(s.RGB)
    s.rectMode(s.CENTER)
    s.ellipseMode(s.CENTER)
    s.textAlign(s.CENTER, s.CENTER)
  }

  s.draw = () => {
    s.background(settings.background || 0)
  }

  s.windowResized = () => {
    s.resizeCanvas(dimension.width, dimension.height)
    s.setup()
  }
}

/*
  ======================================
    You don't have to look at code below
    this comment. It simply wraps around
    the above function and creates a sketch
    which occupies the dimension of its parent.
  ======================================
*/

export default ({ children, ...props }) => {
  const [drawing, setDrawing] = React.useState(null)
  const [dimension, setDimension] = React.useState(null)
  const container = React.useRef(null)

  React.useEffect(() => {
    setDimension(previous => ({
      width: container ? container.current.offsetWidth : 0,
      height: container ? container.current.offsetHeight : 0
    }))
  }, [])

  React.useEffect(() => {
    if (dimension) {
      const component = { dimension, props, parent: container.current }
      const isFunction = x => x && {}.toString.call(x) === "[object Function]"
      while (container.current.firstChild)
        container.current.removeChild(container.current.firstChild)
      if (!drawing)
        setDrawing(
          isFunction(children)
            ? new p5(children(component))
            : new p5(sketch(component))
        )
    }
  }, [children, props, dimension, drawing])

  return (
    <>
      <div
        ref={container}
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          top: 0,
          left: 0,
          margin: 0,
          padding: 0,
          overflow: "hidden",
          background: "transparent"
        }}
      />
    </>
  )
}
