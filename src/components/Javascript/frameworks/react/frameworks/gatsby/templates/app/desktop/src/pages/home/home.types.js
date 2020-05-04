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

import * as evergreen from "evergreen-ui"
import Layout from "src/components/layouts/default"
import Pattern from "src/components/elements/pattern"

export default {
  default: () => {
    const { Pane, majorScale, Card } = evergreen
    return (
      <Provider>
        <Subscribe to={[store]}>
          {(store) => (
            <React.Fragment>
              <Layout>
                <Pane height="100%" width="100%" position="relative" background="silver">
                  <Pattern></Pattern>
                </Pane>
              </Layout>
            </React.Fragment>
          )}
        </Subscribe>
      </Provider>
    )
  }
}
