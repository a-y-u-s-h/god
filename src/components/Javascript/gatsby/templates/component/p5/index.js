/*
  ======================================

     /$$$$$$                 /$$
    |_  $$_/                | $$
      | $$   /$$$$$$$   /$$$$$$$  /$$$$$$  /$$   /$$
      | $$  | $$__  $$ /$$__  $$ /$$__  $$|  $$ /$$/
      | $$  | $$  \ $$| $$  | $$| $$$$$$$$ \  $$$$/
      | $$  | $$  | $$| $$  | $$| $$_____/  >$$  $$
     /$$$$$$| $$  | $$|  $$$$$$$|  $$$$$$$ /$$/\  $$
    |______/|__/  |__/ \_______/ \_______/|__/  \__/

   If your component is stateless, 
   you don't need to even look at this file.
   It wraps around the function that's inside
   the file called `placeholder.js` and facilitates
   its rendering. Passes props to it as well, and 
   re-renders when any of the props change. So you
   just need to open `placeholder.js` and start creating
   stuff.

   You can import this component only through folder imports.
   Like: import <AnyNameForImport> from "<path>/placeholder"

  ======================================
*/

import React, { Component } from "react"
import ReactDOM from "react-dom"
import p5 from "p5"
import props from "./props.json"
import classes from "./placeholder.module.scss"
import sketch from "./placeholder.js"

class _ extends Component {
  constructor({ data = props, props = props, children }) {
    super(props)
    this.visualization = React.createRef()
  }

  render = () => <div ref={e => (this.visualization = e)} className={classes.container} />

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        dimensions: {
          width: ReactDOM.findDOMNode(this.visualization).offsetWidth,
          height: ReactDOM.findDOMNode(this.visualization).offsetHeight,
        },
      })
      this.drawing = new p5(sketch(this.visualization, this))
    }, 1)
  }
}

export default _
