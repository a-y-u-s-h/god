import React, { Component } from "react"
import data from "./props.json"
import "./Placeholder.css"

class Placeholder extends Component {
  constructor (props = data) {
    super(props)
    this.state = {}
  }

  static getDerivedStateFromProps (props, state) { return {} }

  render() {
    return (
      <div className="Placeholder">
        
      </div>
    )
  }
 
  componentDidMount () {}

  shouldComponentUpdate (nextProps, nextState) { return true }
  
  getSnapshotBeforeUpdate (prevProps, prevState) { return null }

  componentDidUpdate (prevProps, prevState, snapshot) {}
  
  componentWillUnmount () {}

  componentDidCatch (error, info) {}
  
  static getDerivedStateFromError (error) { return {} }

}

export default Placeholder
