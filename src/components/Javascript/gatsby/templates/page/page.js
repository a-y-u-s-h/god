import React from "react"
import properties from "./props.json"
import classes from "./placeholder.module.scss"

export default ({ data = properties, children, ...props }) => {
  return (
    <div className={classes.container}>
    </div>
  )
}