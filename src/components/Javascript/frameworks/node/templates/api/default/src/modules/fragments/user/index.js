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
    controllers of this particular user.

  ======================================
*/
import shape from "./user.shape"
import router from "./user.router"
import actions from "./user.actions"
import protect from "./user.protect"

export default {
  shape,
  router,
  actions,
  protect
}
