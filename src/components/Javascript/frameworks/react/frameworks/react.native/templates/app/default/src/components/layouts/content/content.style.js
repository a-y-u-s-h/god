import { StyleSheet, Platform, StatusBar } from "react-native"

export const classes = {
  default: {
    content: {
      flex: 1,
      paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    }
  }
}

export const components = {}
