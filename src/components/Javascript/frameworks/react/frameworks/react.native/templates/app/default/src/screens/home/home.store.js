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

class Home extends Container {
  constructor() {
    super()
  }
}

export default new Home()
