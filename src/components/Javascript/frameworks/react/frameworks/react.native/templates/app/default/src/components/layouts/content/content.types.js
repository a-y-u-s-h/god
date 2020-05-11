import React from "react"
import store from "./content.store.js"
import { classes, components } from "./content.style.js"
import { Provider, Subscribe } from "unstated"
import { SafeAreaView } from "react-native"

export default {
  default: ({ children }) => {
    const styles = classes.default
    return (
      <Provider>
        <Subscribe to={[store]}>
          {store => (
            <React.Fragment>
              <SafeAreaView style={styles.content}>{children}</SafeAreaView>
            </React.Fragment>
          )}
        </Subscribe>
      </Provider>
    )
  }
}
