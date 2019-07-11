import React from "react"
import properties from "./props.json"
import classes from "./default.module.scss"
import classnames from "classnames"
import Header from "src/components/atoms/header"

export default ({ data = properties, children, ...props }) => {
  return (
    <div className={classes.container}>
      <Header />
      {children}
    </div>
  )
}
