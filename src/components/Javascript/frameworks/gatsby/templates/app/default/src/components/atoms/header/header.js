import React from "react"
import props from "./props.json"
import classes from "./header.module.scss"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

export default ({ data = props, children, title }) => {
  data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          site {
            title
          }
        }
      }
    }
  `)
  return <Helmet title={`${title ? `${title} | ` : ""}${data.site.siteMetadata.site.title}`} />
}
