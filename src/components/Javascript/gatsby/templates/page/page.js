import React from "react"
import data from "./props.json"
import classes from "./placeholder.module.scss"

const Placeholder = (props = data) => {
  return (
    <div className={classes.placeholder}>
    </div>
  )
}

export default Placeholder
