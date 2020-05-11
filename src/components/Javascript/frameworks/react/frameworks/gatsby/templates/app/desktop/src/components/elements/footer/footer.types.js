import React from "react"
import store from "./footer.store.js"
import { classes, components } from "./footer.style.js"
import { Provider, Subscribe } from "unstated"

export default {
  default: () => {
    return (
      <Provider>
        <Subscribe to={[store]}>
          {store => (
            <React.Fragment>
              <footer className="toolbar toolbar-footer">
                <h1 className="title">Footer</h1>
              </footer>
            </React.Fragment>
          )}
        </Subscribe>
      </Provider>
    )
  }
}
