import React from "react"
import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

export default ({ data, children, title }) => {
  data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          application {
            title
          }
        }
      }
    }
  `)
  return <Helmet title={`${title ? `${title} | ` : ""}${data.site.siteMetadata.application.title}`} />
}