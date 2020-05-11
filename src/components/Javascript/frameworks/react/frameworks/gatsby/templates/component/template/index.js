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
import { graphql } from "gatsby"
import store from "./placeholder.store.js"
import style from "./placeholder.style.js"
import types from "./placeholder.types.js"

/*
  ======================================
    In components you can have queries
    inside of index.js, you can then use
    the data obtained by this query in data
    props. You can do this in any component,
    not just templates,
  ======================================
*/
export const query = graphql`
  query Placeholder($slug: String!) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
      }
      body
    }
  }
`

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
