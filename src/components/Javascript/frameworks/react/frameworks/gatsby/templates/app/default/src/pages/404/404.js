import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import props from "./props.json"
import classes from "./404.module.scss"
import _404 from "src/templates/404"

export default ({ data = props, children }) => {
  data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          interface {
            templates {
              _404 {
                type
                available
              }
            }
          }
        }
      }
    }
  `)
  const type = data.site.siteMetadata.interface.templates._404.type
  return (
    <div className={classes.container}>
      <_404 type={type} />
    </div>
  )
}
