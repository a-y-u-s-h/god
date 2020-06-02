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

export default {
  default: () => {
    /*
       ======================================
         Start writing your markup logic here.
         You can destructure props to the component
         like usually as well. Assume that this is
         the component that you're importing.
       ======================================
     */
    return (
      <Provider>
        <Subscribe to={[store]}>
          {store => <React.Fragment></React.Fragment>}
        </Subscribe>
      </Provider>
    )
  }
}
