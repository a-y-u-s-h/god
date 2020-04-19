/*
  ======================================

               /$$
              | $$
    /$$$$$$$ /$$$$$$    /$$$$$$   /$$$$$$   /$$$$$$
   /$$_____/|_  $$_/   /$$__  $$ /$$__  $$ /$$__  $$
  |  $$$$$$   | $$    | $$  \ $$| $$  \__/| $$$$$$$$
   \____  $$  | $$ /$$| $$  | $$| $$      | $$_____/
   /$$$$$$$/  |  $$$$/|  $$$$$$/| $$      |  $$$$$$$
  |_______/    \___/   \______/ |__/       \_______/

    This file stores all the state logic for the
    component. Sometimes the store may be present outside
    of this component, but most of the time it shouldn't.
    It assumes that you have unstated installed as a package.

  ======================================
*/
import { Container } from "unstated"
import settings from "./settings.yaml"

class _ extends Container {
  constructor() {
    super()
    this.state = {
      default: {
        tabs: settings.navigation.default.tabs,
        search: {
          switch: settings.navigation.default.search,
          value: "",
        },
      },
    }
  }

  search(e) {
    const value = e.target.value
    this.setState(state => {
      const search = state.default.search
      search.value = value
      state.default.search = search
      return state
    })
  }
}

export default new _()
