/*
  ======================================
    Note: In order to use this
    component, you should have styled-components
    and unstated in your dependencies. To make
    changes to functionality of the component you
    don't need to look at this file -> look at others.

    Import as a folder component. You can
    optionally pass in a type. If it exists,
    it'll return the appropriate variant.
  ======================================
*/
import React from "react"
import store from "./home.store.js"
import style from "./home.style.js"
import types from "./home.types.js"

export default ({ children, type = "default", ...props }) => {
  /*
    ======================================
      By default type "default" is displayed if
      no type prop is passed explicitly or
      if an invalid type is passed as a prop.
    ======================================
  */
  if (!(type in types)) type = "default"
  const Component = types[type]
  return <Component {...props}>{children}</Component>
}
