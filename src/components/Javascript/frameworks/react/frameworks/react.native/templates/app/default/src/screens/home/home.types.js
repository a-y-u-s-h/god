import React from "react"
import store from "./home.store.js"
import Content from "components/layouts/content"
import { classes, components } from "./home.style.js"
import { Provider, Subscribe } from "unstated"

export default {
  default: () => {
    return (
      <Content>
        <Provider>
          <Subscribe to={[store]}>
            {store => <React.Fragment></React.Fragment>}
          </Subscribe>
        </Provider>
      </Content>
    )
  }
}
