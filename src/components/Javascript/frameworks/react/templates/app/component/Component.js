import React, { Component } from "react"
import data from "./props.json"
import "./Placeholder.css"

class Placeholder extends Component {
  constructor (props = data) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="Placeholder">
        
      </div>
    )
  }
}

export default Placeholder
