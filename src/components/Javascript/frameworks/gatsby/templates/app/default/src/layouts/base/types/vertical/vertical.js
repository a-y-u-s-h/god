import React from "react"
import properties from "./props.json"
import classes from "./vertical.module.scss"
import Layout from "src/layouts/base"
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

export default ({ data = properties, strict = false, settings = properties.settings, ratio = properties["1"].width, children, content = properties.content, ...props }) => {
  /*
    ======================================
      Refining props.
    ======================================
  */
  ratio = parseFloat(ratio.replace("%", ""))
  content = { "1": content.hasOwnProperty("1") ? content["1"] : properties.content["1"], "2": content.hasOwnProperty("2") ? content["2"] : properties.content["2"] }
  children = purify(children)
  const overrides = { "1": settings.hasOwnProperty(content["1"]) ? settings[content["1"]] : {}, "2": settings.hasOwnProperty(content["2"]) ? settings[content["2"]] : {} }

  /*
    ======================================
      Options are default parameters,
      some of which will be overridden by
      some props. In this case, width will
      change for both containers depending
      on ratio prop.
    ======================================
  */
  const placeholders = { "1": <Tab>{content["1"]}</Tab>, "2": <Tab>{content["2"]}</Tab> }
  const options = { "0": { ...props }, "1": { ...properties["1"] }, "2": { ...properties["2"] } }
  options["1"].width = `${ratio}%`
  options["2"].width = `${100 - ratio}%`

  /*
    ======================================
      Filtering children according to
      location prop. Filtered children
      will go in their respective positions.
      By convention, we'll put children with
      no location prop in container 1.
    ======================================
  */
  let _1 = children ? children.filter(c => c ? (c.props ? (!c.props.location && !strict) || c.props.location == content["1"] || c.props.location == "1" : false) : false) : placeholders["1"]
  let _2 = children ? children.filter(c => c ? (c.props ? c.props.location == content["2"] || c.props.location == "2" : false) : false) : placeholders["2"]
  if (_1.length == 0) _1.push(placeholders["1"])
  if (_2.length == 0) _2.push(placeholders["2"])

  /*
    ======================================
      The main wrapper Layout (default)
      component will recieve all props.
      Default options will be applied to
      containers first, they will get overriden
      by the props that this component recieves.
      If you want to tune the 1 and 2 containers
      individually you must pass in a settings prop,
      with "1" or "2" keys.
    ======================================
  */
  return (
    <Layout display="flex" {...options["0"]}>
      <Layout {...options["1"]} {...props} {...overrides["1"]}>
        {_1}
      </Layout>
      <Layout {...options["2"]} {...props} {...overrides["2"]}>
        {_2}
      </Layout>
    </Layout>
  )
}
