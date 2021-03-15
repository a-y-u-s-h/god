/*
  ======================================

     /$$
    | $$
   /$$$$$$   /$$   /$$  /$$$$$$   /$$$$$$   /$$$$$$$
  |_  $$_/  | $$  | $$ /$$__  $$ /$$__  $$ /$$_____/
    | $$    | $$  | $$| $$  \ $$| $$$$$$$$|  $$$$$$
    | $$ /$$| $$  | $$| $$  | $$| $$_____/ \____  $$
    |  $$$$/|  $$$$$$$| $$$$$$$/|  $$$$$$$ /$$$$$$$/
     \___/   \____  $$| $$____/  \_______/|_______/
             /$$  | $$| $$
            |  $$$$$$/| $$
             \______/ |__/

  This file stores the markup for all variants of the 
  component. Usage explanation:

  For simple components like a button: you can use conditional
  logic to show icon based variant by passing in a prop in one file, but with
  bigger changes such as a huge pricing section where the props may differ
  but the component's purpose remains same - you'll need to usually create 
  a different component. To avoid this, create all possible
  logic in this file which is passed into a higher order component that
  delivers you the correct markup based on your `type` prop. 

  ======================================
*/

import p5 from "p5"
import React from "react"
import ReactDOM from "react-dom"
import store from "./placeholder.store.js"
import sketch from "./placeholder.sketch.js"
import { Provider, Subscribe } from "unstated"

export default {
  default: class _ extends React.Component {
    constructor(props) {
      super(props)
      this.visualization = React.createRef()
      this.state = {
        dimensions: {
          width: 0,
          height: 0
        }
      }
    }

    componentDidMount() {
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

    render = () => {
      return (
        <Provider>
          <Subscribe to={[store]}>
            {store => {
              return (
                <React.Fragment>
                  <div
                    ref={e => (this.visualization = e)}
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
                </React.Fragment>
              )
            }}
          </Subscribe>
        </Provider>
      )
    }
  }
}
