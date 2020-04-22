/*
  ======================================

     /$$                 /$$
    |__/                | $$
     /$$ /$$$$$$$   /$$$$$$$  /$$$$$$  /$$   /$$
    | $$| $$__  $$ /$$__  $$ /$$__  $$|  $$ /$$/
    | $$| $$  \ $$| $$  | $$| $$$$$$$$ \  $$$$/
    | $$| $$  | $$| $$  | $$| $$_____/  >$$  $$
    | $$| $$  | $$|  $$$$$$$|  $$$$$$$ /$$/\  $$
    |__/|__/  |__/ \_______/ \_______/|__/  \__/

    This file simply exports schema, models, routes and
    controllers of this particular resource.

  ======================================
*/
import shape from "./resource.shape"
import router from "./resource.router"
import actions from "./resource.actions"

export default {
  shape,
  router,
  actions
}
