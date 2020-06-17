/*
  ======================================

     /$$
    | $$
   /$$$$$$   /$$   /$$  /$$$$$$   /$$$$$$   /$$$$$$$
  |_  $$_/  | $$  | $$ /$$__  $$ /$$__  $$ /$$_____/
    | $$    | $$  | $$| $$  \ $$| $$$$$$$$|  $$$$$$
    | $$ /$$| $$  | $$| $$  | $$| $$_____/ \____  $$
    |  $$$$/|  $$$$$$$| $$$$$$$/|  $$$$$$$ /$$$$$$$/
     \___/   \____  $$| $$____/  \_______/|_______/
             /$$  | $$| $$
            |  $$$$$$/| $$
             \______/ |__/

  This file stores the markup for all variants of the
  component. Usage explanation:

  For simple components like a button: you can use conditional
  logic to show icon based variant by passing in a prop in one file, but with
  bigger changes such as a huge pricing section where the props may differ
  but the component's purpose remains same - you'll need to usually create
  a different component. To avoid this, create all possible
  logic in this file which is passed into a higher order component that
  delivers you the correct markup based on your `type` prop.

  ======================================
*/
import React from "react"
import store from "./placeholder.store.js"
import { Provider, Subscribe } from "unstated"
import { classes, components, devices } from "./placeholder.style.js"
import Layout from "src/components/layouts/default"

export default {
  default: ({ children }) => {
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
