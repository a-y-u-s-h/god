import React from "react"
import store from "./content.store.js"
import style from "./content.style.js"
import types from "./content.types.js"

export default ({ children, type = "default", ...props }) => {
  if (!(type in types)) type = "default"
  const Component = types[type]
  return <Component {...props}>{children}</Component>
}
