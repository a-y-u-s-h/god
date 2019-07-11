import React from "react"
import props from "./props.json"
import classes from "./home.module.scss"
import { graphql, useStaticQuery } from "gatsby"
import Home from "src/templates/home"

export default ({ data = props, children }) => {
  data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          interface {
            templates {
              home {
                type
                available
              }
            }
          }
        }
      }
    }
  `)
  const type = data.site.siteMetadata.interface.templates.home.type
  return (
    <div className={classes.home}>
      <Home type={type} />
    </div>
  )
}
