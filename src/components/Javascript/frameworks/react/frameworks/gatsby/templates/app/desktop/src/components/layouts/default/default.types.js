import React from "react"
import store from "./default.store.js"
import { classes, components } from "./default.style.js"
import { Provider, Subscribe } from "unstated"

import { Pane } from "evergreen-ui"
import Header from "src/components/elements/header"
import Footer from "src/components/elements/footer"

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
          {store => (
            <React.Fragment>
              <Pane width="100vw" height="100vh" elevation={0}>
                <div className="window">
                  <Header />
                  <div className="window-content">{children}</div>
                  <Footer />
                </div>
              </Pane>
            </React.Fragment>
          )}
        </Subscribe>
      </Provider>
    )
  }
}
