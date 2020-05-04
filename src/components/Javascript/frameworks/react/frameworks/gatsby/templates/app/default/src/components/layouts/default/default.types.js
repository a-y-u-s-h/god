import React from "react"
import store from "./default.store.js"
import { classes, components } from "./default.style.js"
import { Provider, Subscribe } from "unstated"

import { Pane } from "evergreen-ui"
import Header from "src/components/elements/header"
import Navigation from "src/components/elements/navigation"

export default {
  default: ({ children }) => {
    /*
      ======================================
        If you use this layout, you'll get 
        a navigation bar at the top and children
        of this component will go below that navbar.
      ======================================
    */
    return (
      <Provider>
        <Subscribe to={[store]}>
          {(store) => (
            <React.Fragment>
              <Header />
              <Pane width="100vw" height="100vh" elevation={0}>
                <Pane width="100vw" height="8vh">
                  <Navigation />
                </Pane>
                <Pane width="100vw" height="92vh">
                  {children}
                </Pane>
              </Pane>
            </React.Fragment>
          )}
        </Subscribe>
      </Provider>
    )
  }
}
