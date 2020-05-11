import React from "react"
import store from "./header.store.js"
import { classes, components } from "./header.style.js"
import { Provider, Subscribe } from "unstated"

import { Helmet } from "react-helmet"
import { graphql, useStaticQuery } from "gatsby"

export default {
  default: () => {
    const data = useStaticQuery(graphql`
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
    return (
      <Provider>
        <Subscribe to={[store]}>
          {store => (
            <React.Fragment>
              <Helmet title={`${data.site.siteMetadata.application.title}`} />
              <header className="toolbar toolbar-header">
                <h2 className="title">Header</h2>
              </header>
            </React.Fragment>
          )}
        </Subscribe>
      </Provider>
    )
  }
}
