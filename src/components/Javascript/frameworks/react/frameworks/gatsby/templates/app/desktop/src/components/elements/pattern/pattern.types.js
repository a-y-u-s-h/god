import React from "react"
import store from "./pattern.store.js"
import { classes, components } from "./pattern.style.js"
import { Provider, Subscribe } from "unstated"

import { Pane } from "evergreen-ui"

export default {
  default: ({ variant = "brick wall", foreground = "#033234", background = "#0E9DA3", opacity = 0.6, children, ...others }) => {
    foreground = foreground.replace("#", "")
    return (
      <Provider>
        <Subscribe to={[store]}>
          {store => (
            <React.Fragment>
              <Pane width="100%" height="100%" backgroundColor={`${background}`} backgroundImage={components.variant(variant, foreground, opacity)} {...others}>
                {children}
              </Pane>
            </React.Fragment>
          )}
        </Subscribe>
      </Provider>
    )
  },
}
