/*
  ======================================

               /$$
              | $$
    /$$$$$$$ /$$$$$$    /$$$$$$   /$$$$$$   /$$$$$$
   /$$_____/|_  $$_/   /$$__  $$ /$$__  $$ /$$__  $$
  |  $$$$$$   | $$    | $$  \ $$| $$  \__/| $$$$$$$$
   \____  $$  | $$ /$$| $$  | $$| $$      | $$_____/
   /$$$$$$$/  |  $$$$/|  $$$$$$/| $$      |  $$$$$$$
  |_______/    \___/   \______/ |__/       \_______/

    This file stores all the state logic for the
    component. Sometimes the store may be present outside
    of this component, but most of the time it shouldn't.
    It assumes that you have unstated installed as a package.

  ======================================
*/

import p5 from "p5"
import React from "react"
import ReactDOM from "react-dom"
import { Container } from "unstated"
import sketch from "./placeholder.sketch.js"

class _ extends Container {
  constructor(props = {}) {
    super(props)
    this.props = props
    this.state = {
      dimensions: {
        width: 0,
        height: 0
      }
    }
  }

  init(visualization) {
    if (!this.visualization) {
      this.visualization = visualization
      if (!this.drawing) {
        this.setState(
          state => ({
            dimensions: {
              width: ReactDOM.findDOMNode(this.visualization).offsetWidth,
              height: ReactDOM.findDOMNode(this.visualization).offsetHeight
            }
          }),
          () => (this.drawing = new p5(sketch(this.visualization, this)))
        )
      }
    }
  }
}

export default (props = {}) => new _(props)
