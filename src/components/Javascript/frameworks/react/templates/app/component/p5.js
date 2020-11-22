import React, { Component } from "react"
import ReactDOM from "react-dom"

const sketch = component => s => {
  const dimensions = component.state?.dimensions

  s.setup = () => {
    const canvas = s.createCanvas(dimensions.width, dimensions.height)
    s.angleMode(s.DEGREES)
    s.colorMode(s.RGB)
    s.rectMode(s.CENTER)
    s.ellipseMode(s.CENTER)
    s.textAlign(s.CENTER, s.CENTER)
  }

  s.draw = () => {
    s.background(component.props?.background || 0)
  }

  s.windowResized = () => {
    s.resizeCanvas(dimensions.width, dimensions.height)
  }
}

class Sketch extends Component {
  constructor(props) {
    super(props)
    this.props = props
    this.sketch = this.props.sketch || sketch
    this.state = {
      dimensions: {
        width: 0,
        height: 0
      }
    }
    this.style = {
      width: "100%",
      height: "100%",
      position: "relative",
      top: 0,
      left: 0,
      margin: 0,
      padding: 0,
      overflow: "hidden",
      background: "transparent"
    }
  }

  render() {
    return <div ref={e => this.init(e)} style={this.style} />
  }

  init(visualization) {
    const p5 = require("p5")
    if (!this.visualization) {
      this.visualization = visualization
      const children = this.props.children
      const isFunction = x => x && {}.toString.call(x) === "[object Function]"
      if (!this.drawing) {
        this.setState(
          state => ({
            dimensions: {
              width: ReactDOM.findDOMNode(this.visualization).offsetWidth,
              height: ReactDOM.findDOMNode(this.visualization).offsetHeight
            }
          }),
          () => {
            const container = this.visualization

            if (isFunction(children)) {
              this.drawing = new p5(children(this), container)
            } else {
              this.drawing = new p5(this.sketch(this), container)
            }
          }
        )
      }
    }
  }
}

export default Sketch
