import Vue from "vue"
import app from "@/app.vue"
import store from "@/scripts/store"
import router from "@/scripts/router"

import "@/scripts/misc/globals"
import "@/scripts/misc/service.worker"

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(app)
}).$mount("#app")
