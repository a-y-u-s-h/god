import React from "react"
import properties from "./props.json"
import classes from "./default.module.scss"
import { Pane, Tab } from "evergreen-ui"

/*
  ======================================
    Layout format explained :-

    Underscore variables are basically
    just filtered children. It's decided
    that all these layout types will have
    numbered sections where some children
    will go. So we filter children according
    value of their location prop and make
    our layout in a way that it accomodates all
    values of location.
  ======================================
*/

const purify = children => {
  /*
    ======================================
      If children are not array, convert
      them to array. And if array contains
      a single string - wrap a div around it
      in order to render it.      
    ======================================
  */

  if (children && !Array.isArray(children)) {
    children = [children]
    children = children.map(c => (typeof c == "string" ? <div>{c}</div> : c))
  }
  return children
}

export default ({ data = properties, children, strict = false, content = properties.content, settings = properties.settings, ...props }) => {
  /*
    ======================================
      Refining props.
    ======================================
  */
  content = { "1": content.hasOwnProperty("1") ? content["1"] : properties.content["1"] }
  children = purify(children)
  const overrides = { "1": settings.hasOwnProperty(content["1"]) ? settings[content["1"]] : {} }

  /*
    ======================================
      Options are default parameters,
      some of which will be overridden by
      some props. In this case, height will
      change for both containers depending
      on ratio prop.
    ======================================
  */
  const placeholders = { "1": <Tab>{content["1"]}</Tab> }
  const options = { "0": { ...props }, "1": { ...properties["1"] } }
  let _1 = []
  if (!strict) _1 = children ? children : placeholders["1"]
  if (strict) _1 = children ? children.filter(c => (c ? (c.props ? (c.props.location ? c.props.location == content["1"] : false) : false) : false)) : placeholders["1"]
  if (_1.length == 0) _1.push(placeholders["1"])
  return (
    <Pane {...properties["1"]} {...props}>
      {_1}
    </Pane>
  )
}
