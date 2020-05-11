/*
  ======================================

     /$$
    | $$
    | $$$$$$$   /$$$$$$  /$$$$$$/$$$$   /$$$$$$
    | $$__  $$ /$$__  $$| $$_  $$_  $$ /$$__  $$
    | $$  \ $$| $$  \ $$| $$ \ $$ \ $$| $$$$$$$$
    | $$  | $$| $$  | $$| $$ | $$ | $$| $$_____/
    | $$  | $$|  $$$$$$/| $$ | $$ | $$|  $$$$$$$
    |__/  |__/ \______/ |__/ |__/ |__/ \_______/

  ======================================
*/

import React from "react"
import store from "./home.store.js"
import { classes, components } from "./home.style.js"
import { Provider, Subscribe } from "unstated"

import { Pane } from "evergreen-ui"
import Layout from "src/components/layouts/default"

export default {
  default: () => {
    return (
      <Provider>
        <Subscribe to={[store]}>
          {store => (
            <React.Fragment>
              <Layout></Layout>
            </React.Fragment>
          )}
        </Subscribe>
      </Provider>
    )
  }
}
